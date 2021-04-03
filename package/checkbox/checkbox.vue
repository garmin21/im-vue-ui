<template>
    <label
        @click="handleClick"
        :class="[
            'jm-checkbox',
            checked ? 'jm-checked' : '',
            disabled ? 'jm-disabled' : ''
        ]"
    >
        <span class="jm-checkbox__input">
            <span class="jm-checkout__inner">
                <img
                    v-if="checked"
                    :src="checked ? checkIcon : ''"
                    width="18"
                    height="18"
                    alt=""
                    class="jm-checkbox-img"
                />
            </span>
            <span class="jm-checkout__label">
                <slot></slot>
                <template v-if="!$slots.default">{{ label }}</template>
            </span>
        </span>
    </label>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import { getParentGroup } from "../../src/utils/group";
import JmCheckBoxGroup from "./checkbox-group.vue";

@Component({})
export default class JmCheckBox extends Vue {
    @Prop({ type: String, required: true })
    public label!: string;

    @Prop({ type: Boolean })
    public value?: boolean;

    @Prop({ type: Boolean, default: false })
    public disabled!: boolean;

    public get checkIcon(): SVGPathElement {
        return require("./icons/check.svg");
    }
    public get halfCheckIcon(): SVGPathElement {
        return require("./icons/half-check.svg");
    }

    public get isGroup() {
        return getParentGroup<JmCheckBoxGroup>(this, "JmCheckBoxGroup");
    }

    public get isArray() {
        if (this.isGroup && Array.isArray(this.isGroup.value)) {
            return this.isGroup?.value;
        }
        return [];
    }

    public get checked() {
        if (this.isGroup && this.isArray.length) {
            return this.isArray.indexOf(this.label) >= 0;
        }
        return this.value;
    }

    public handleClick() {
        if (this.disabled) {
            return;
        }
        if (this.isGroup) {
            this.isGroup.$updateValue(this.label);
        }
        this.$emit("input", !this.value);
    }
}
</script>

<style lang="less" scoped>
@import "../theme-chalk/config.less";
.jm-checkbox {
    display: inline-flex;
    font-size: 14px;
    color: #333;
    cursor: pointer;
}
.jm-checkbox-img {
    -webkit-tap-highlight-color: transparent;
    -moz-user-select: none; /*火狐*/
    -webkit-user-select: none; /*webkit浏览器*/
    -ms-user-select: none; /*IE10*/
    -khtml-user-select: none; /*早期浏览器*/
    user-select: none;
}

.jm-checkbox__input {
    display: flex;
    align-items: center;
}

.jm-checkout__inner {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 18px;
    height: 18px;
    box-sizing: border-box;
    border-radius: 50%;
    border: 1px solid #ccc;
    background-color: #fff;
}

.jm-checked {
    .jm-checkout__inner {
        background-color: @--theme-color;
    }
}
.jm-disabled {
    color: #c0c4cc;
    opacity: 0.6;
    cursor: not-allowed;
    .jm-checkout__inner {
        background-color: #c0c4cc;
    }
}
</style>
