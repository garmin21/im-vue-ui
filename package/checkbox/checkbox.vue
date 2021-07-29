<template>
    <label @click="handleClick" :class="classes">
        <span :class="[`${prefixcls}__checkbox__input`]">
            <span :class="[`${prefixcls}__checkout__inner`]"> </span>
            <span :class="[`${prefixcls}__checkout__label`]">
                <slot></slot>
                <template v-if="!$slots.default">{{ label }}</template>
            </span>
        </span>
    </label>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import { getParentGroup } from "../../tool/group";
import JmCheckBoxGroup from "./checkbox-group.vue";
import { CheckboxResult } from "./index";

import { PREFIXCLS } from '../theme-chalk/var'


/**
 * 2021-7-23:去除支持多参数
 */
@Component<JmCheckBox>({})
export default class JmCheckBox extends Vue {
    @Prop({ type: String })
    public label?: string;

    @Prop({ type: Boolean })
    public value?: boolean;

    @Prop({ type: Boolean })
    public disabled?: boolean;

    @Prop({ type: Boolean })
    public indeterminate?: boolean;


    public get prefixcls() {
        return PREFIXCLS;
    }

    public get classes() {
        const { prefixcls, checked, disabled, indeterminate } = this;
        return [
            `${prefixcls}__checkbox`,
            checked ? `${prefixcls}__checkbox--checked`: ``,
            disabled ? `${prefixcls}__checkbox--disabled` : ``,
            indeterminate && !checked ? `${prefixcls}__checkbox--indeterminate` : ``
        ];
    }

    public get isGroup() {
        return getParentGroup<JmCheckBoxGroup>(this, "JmCheckBoxGroup");
    }

    public get isArray(): string[] {
        if (this.isGroup && Array.isArray(this.isGroup.value)) {
            return this.isGroup?.value;
        }
        return [];
    }

    public get checked() {
        if (this.isGroup && this.isArray.length) {
            return this.isArray.some((v) => v === this.label);
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
@import '../theme-chalk/var.less';

.@{--prefixcls}__checkbox__input {
    display: flex;
    align-items: center;
}

.@{--prefixcls}__checkout__inner {
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #ccc;
    border-radius: 50%;
    width: 18px;
    height: 18px;
    background-color: #fff;
    box-sizing: border-box;
}

.@{--prefixcls}__checkout__label {
    padding-left: 8px;
}

.@{--prefixcls}__checkbox {
    display: inline-flex;
    font-size: 14px;
    color: #333;
    cursor: pointer;
}

.@{--prefixcls}__checkbox--checked {
    .@{--prefixcls}__checkout__inner {
        border: none;
        background: #f60 url("./icons/check.svg");
        background-position: center center;
        background-repeat: repeat;
    }
}

.@{--prefixcls}__checkbox--disabled {
    color: #c0c4cc;
    opacity: 0.6;
    cursor: not-allowed;
    .@{--prefixcls}__checkout__inner {
        background-color: #c0c4cc;
    }
}

.@{--prefixcls}__checkbox--indeterminate {
    .@{--prefixcls}__checkout__inner {
        border: none;
        background: #f60 url("./icons/half-check.svg");
        background-position: center center;
        background-repeat: repeat;
    }
}
</style>
