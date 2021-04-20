<template>
    <button
        @click="handleClick"
        :class="['jm-button', `jm-button-${type}`, `jm-button-${size}`]"
    >
        <slot />
    </button>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import { Type, Size } from "./index";

@Component({})
export default class JmButton extends Vue {
    // 类型
    @Prop({
        type: String,
        default: "primary",
        validator: (value: string) => {
            return Type[value] ? true : false;
        }
    })
    public type!: string;
    // 按钮大小
    @Prop({
        type: String,
        default: "normal",
        validator: (value: string) => {
            return Size[value] ? true : false;
        }
    })
    public size!: string;

    public handleClick(evt: Event) {
        this.$emit("click", evt);
    }
}
</script>

<style lang="less" scoped>
@import "../theme-chalk/config.less";
@import "../theme-chalk/button.less";

.jm-button {
    outline: none;
    border: none;
    height: 38px;
    color: @--theme-white;
    border: 1px solid transparent;
    cursor: pointer;
    font-size: 14px;
    display: inline-block;
    box-sizing: border-box;
    transition: opacity 0.2s;
    -webkit-appearance: none;
    user-select: none;
    touch-action: manipulation;
    &:active {
        opacity: 0.6;
    }
}
.jm-button-primary {
    background-color: @button-bk-primary;
}
.jm-button-info {
    background-color: @button-bk-info;
}
.jm-button-default {
    color: #ccc;
    background-color: @button-bk-default;
}
.jm-button-error {
    background-color: @button-bk-error;
}
.jm-button-warning {
    background-color: @button-bk-warning;
}
.jm-button-success {
    background-color: @button-bk-success;
}
.jm-button-normal {
    padding: 0 18px;
}
.jm-button-small {
    height: 28px;
    line-height: 26px;
    padding: 0 12px;
    font-size: 12px;
}

.jm-button-large {
    width: 100%;
    height: 48px;
    line-height: 46px;
}
</style>
