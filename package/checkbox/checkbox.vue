<template>
    <label
        @click="handleClick"
        :class="[
            'jm-checkbox',
            { checked, disabled, indeterminate: indeterminate && !checked }
        ]"
    >
        <span class="jm-checkbox__input">
            <span class="jm-checkout__inner"> </span>
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
import { CheckBoxValue, CheckBoxLabel, CheckboxResult } from "./index";
export { CheckBoxValue, CheckBoxLabel, CheckboxResult };

@Component({})
export default class JmCheckBox extends Vue {
    @Prop({ type: [Number, String, Boolean] })
    public label?: CheckBoxLabel;

    @Prop({ type: Boolean })
    public value?: boolean;

    @Prop({ type: Boolean })
    public disabled?: boolean;

    @Prop({ type: Boolean })
    public indeterminate?: boolean;

    public get isGroup() {
        return getParentGroup<JmCheckBoxGroup>(this, "JmCheckBoxGroup");
    }

    public get isArray(): CheckBoxValue {
        if (this.isGroup && Array.isArray(this.isGroup.value)) {
            return this.isGroup?.value;
        }
        return [];
    }

    public get checked() {
        if (this.isGroup && this.isArray.length) {
            return this.isArray.some((v: CheckBoxLabel) => v === this.label);
        }
        return this.value;
    }

    public handleClick() {
        if (this.disabled) {
            return;
        }
        const checked = !this.checked;
        const label = this.label;
        if (this.isGroup && label !== undefined) {
            return this.isGroup.$updateValue(checked, label);
        }
        this.$emit("input", checked);
        this.$emit("change", {
            label,
            checked
        } as CheckboxResult);
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

    &.checked {
        .jm-checkout__inner {
            background: @--theme-color url("./icons/check.svg") center center
                no-repeat;
            border: none;
        }
    }
    &.indeterminate {
        .jm-checkout__inner {
            background: @--theme-color url("./icons/half-check.svg") center
                center no-repeat;
            border: none;
        }
    }
    &.disabled {
        color: #c0c4cc;
        opacity: 0.6;
        cursor: not-allowed;
        .jm-checkout__inner {
            background-color: #c0c4cc;
        }
    }
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

.jm-checkout__label {
    padding-left: 8px;
}
</style>
