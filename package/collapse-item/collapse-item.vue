<template>
    <div :class="classes" :aria-disabled="disabled">
        <div class="jm__label" @click="handleClick">
            <div class="jm__label__title">{{ label }}</div>
            <div class="jm__label__icon">
                <span class="sub-title" v-if="subTitle">{{ subTitle }}</span>
                <img v-if="icon" :src="image" width="12" height="12" />
            </div>
        </div>
        <div class="jm__value" v-show="active">
            <slot />
        </div>
    </div>
</template>

<script lang="ts">
import JmCollapse from "../collapse";
import { Vue, Component, Prop } from "vue-property-decorator";
import { getParentGroup } from "../../src/utils/group";
@Component({})
export default class JmCollapseItem extends Vue {
    @Prop({ type: String, default: "" })
    public value!: string;
    // 标题
    @Prop({ type: String, default: "" })
    public label!: string;
    // 副标题
    @Prop({ type: String, default: "" })
    public subTitle!: string;

    @Prop({
        type: String,
        default: "",
        validator: (value: string) => {
            return !!value;
        }
    })
    public name!: string;

    @Prop({ type: Boolean, default: false })
    public disabled!: boolean;

    public get icon() {
        if (this.isGroup) {
            return this.isGroup.icon;
        }
    }

    public get active() {
        if (this.isGroup) {
            if (this.isGroup && this.isGroup.accordion) {
                return this.isGroup.value === this.name;
            }
            return this.isGroup.value.includes(this.name);
        }
        return this.name === this.value;
    }

    public get isGroup() {
        return getParentGroup<JmCollapse>(this, "JmCollapse");
    }

    public get classes() {
        return [
            `jm-collapse-item`,
            {
                "jm-collapse-disabled": this.disabled
            }
        ];
    }

    public get image() {
        if (this.active) {
            return require("./icons/right.svg");
        }
        return require("./icons/down.svg");
    }

    public handleClick() {
        if (this.disabled) return;
        if (this.isGroup) {
            this.isGroup.$updateValue(this.name);
        } else {
            const name = this.name;
            this.$emit("input", name);
            this.$emit("change", name);
        }
    }
}
</script>

<style lang="less" scoped>
.jm-collapse-item {
    height: auto;
    background-color: #fff;
    border-bottom: 1px solid #f5f6f7;
    cursor: pointer;
    &.jm-collapse-disabled {
        cursor: not-allowed;
        opacity: 0.3;
    }
}
.jm__label {
    height: 49px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 13px;
    font-weight: 500;
}

.jm__value {
    display: block;
    padding: 12px 26px;
    color: #666;
    font-size: 14px;
    line-height: 1.5;
    background-color: #fff;
}
.jm__label__icon {
    display: inline-flex;
    align-items: center;
}
.sub-title {
    font-size: 14px;
}
</style>
