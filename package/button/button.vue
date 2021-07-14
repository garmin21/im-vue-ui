<template>
    <button
        @click="handleClick"
        :style="componentStyle"
        :class="classe"
        :disabled="disabled"
    >
        <img
            src="./icons/loading.svg"
            v-if="loading"
            class="jm-button-loading"
            width="20"
            height="20"
            alt="loading"
        />
        <div class="jm-button-label">
            <slot />
        </div>
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

    // 朴素按钮
    @Prop({ type: Boolean, default: false })
    public plain!: boolean;

    // 禁用状态
    @Prop({ type: Boolean, default: false })
    public disabled!: boolean;

    // 是否为圆角按钮
    @Prop({ type: Boolean, default: false })
    public round!: boolean;

    // 加载状态
    @Prop({ type: Boolean, default: false })
    public loading!: boolean;

    // 自定义按钮颜色
    @Prop({ type: Object })
    public componentStyle?: Partial<CSSStyleDeclaration>;

    public get classe() {
        return [
            "jm-button",
            `jm-button-${this.type}`,
            `jm-button-${this.size}`,
            {
                [`jm-button-plain`]: this.plain,
                [`jm-button-disabled`]: this.disabled,
                [`jm-button-round`]: this.round,
                [`loading`]: this.loading
            }
        ];
    }

    public handleClick(evt: Event) {
        if (this.disabled || this.loading) return;
        this.$emit("click", evt);
    }
}
</script>

<style lang="less" scoped>
@import "../theme-chalk/config.less";
@import "../theme-chalk/button.less";

.jm-button {
    position: relative;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    outline: none;
    border: none;
    height: 38px;
    line-height: 38px;
    color: @--theme-white;
    cursor: pointer;
    font-size: 14px;
    box-sizing: border-box;
    transition: opacity 0.2s;
    -webkit-appearance: none;
    user-select: none;
    touch-action: manipulation;

    &:active {
        opacity: 0.6;
    }
}
// .jm-button >
.jm-button-primary {
    background-color: @button-bk-primary;
}

.jm-button-info {
    background-color: @button-bk-info;
}

.jm-button-default {
    color: #ccc !important;
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

.jm-button-plain {
    background-color: @--theme-white;

    &.jm-button-primary {
        color: @button-bk-primary;
        border-color: @button-bk-primary;
    }

    &.jm-button-info {
        color: @button-bk-info;
        border-color: @button-bk-info;
    }

    &.jm-button-default {
        color: @button-bk-default;
        border-color: @button-bk-default;
    }

    &.jm-button-error {
        color: @button-bk-error;
        border-color: @button-bk-error;
    }

    &.jm-button-warning {
        color: @button-bk-warning;
        border-color: @button-bk-warning;
    }

    &.jm-button-success {
        color: @button-bk-success;
        border-color: @button-bk-success;
    }
}

.jm-button-disabled {
    cursor: not-allowed;
    opacity: 0.68;
}

.jm-button-round {
    border-radius: 25px;
}

.loading {
    display: inline-flex;
    align-items: center;

    .jm-button-loading {
        width: 20px;
        height: 20px;
        cursor: default;
        animation: __jm-button-loading-keyframes 0.5s infinite linear;
    }
}

.jm-button-label {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

@keyframes __jm-button-loading-keyframes {
    from {
        transform: rotate(0deg);
    }

    to {
        transform: rotate(360deg);
    }
}
</style>
