<template>
    <label :class="classes">
        <input
            type="checkbox"
            :name="name"
            :disabled="disabled"
            :checked="value"
            :class="[`${prefixcls}__switch__input`]"
            @change="handelChecked"
        />
    </label>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import { PREFIXCLS } from "../theme-chalk/var";

@Component<JmSwitch>({})
export default class JmSwitch extends Vue {
    @Prop({ type: [Boolean, Number, String], default: false })
    public value!: boolean;

    @Prop({ type: String, default: "checkbox" })
    public name!: string;

    @Prop({ type: Boolean, default: false })
    public disabled!: boolean;

    public get prefixcls() {
        return PREFIXCLS;
    }

    public get classes() {
        const { prefixcls,disabled } = this;
        return [
            `${prefixcls}__switch`,
            disabled ? `${this.prefixcls}__switch--disabled` : ``
        ];
    }

    public handelChecked(evt: InputEvent) {
        if (evt.target) {
            const { checked } = evt.target as HTMLInputElement;
            this.$emit("input", checked);
        }
    }
}
</script>

<style lang="less" scoped>
@import "../theme-chalk/var.less";

.@{--prefixcls}__switch {
    --color-error: #eb4e5c;
    --color-success: #1fbb95;
    --color-white: #fff;

    position: relative;
    display: flex;
    width: 40px;
    height: 20px;
    align-items: center;
    border-color: var(--color-error);
    background-color: var(--color-error);
    border-radius: 20px;
    overflow: hidden;
    opacity: 1;
}

.@{--prefixcls}__switch__input {
    width: 100%;
    height: 100%;
    cursor: pointer;
    margin: 0;
    visibility: hidden;

    &::after {
        position: absolute;
        top: 0;
        left: 0;
        width: 50%;
        height: 100%;
        content: "";
        border-radius: 50%;
        background-color: var(--color-white);
        visibility: visible;
        transition: transform 0.3s ease;
    }

    &::before {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        content: "";
        visibility: visible;
        transition: all 0.4s ease;
    }

    &:checked::after {
        transform: translateX(calc(100%));
    }

    &:checked::before {
        border-color: var(--color-success);
        background-color: var(--color-success);
    }
}
</style>
