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
            :class="[`${prefixcls}__button--loading`]"
            width="20"
            height="20"
            alt="loading"
        />
        <div :class="[`${prefixcls}__button--label`]">
            <slot />
        </div>
    </button>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import { Type, Size } from "./index";
import { PREFIXCLS } from '../theme-chalk/var'

@Component<JmButton>({})
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

    public get prefixcls() {
        return PREFIXCLS;
    }

    public get classe() {
        const { prefixcls } = this;
        return [
            `${prefixcls}__button`,
            `${prefixcls}__button--${this.type}`,
            `${prefixcls}__button--${this.size}`,
            {
                [`${prefixcls}__button--plain`]: this.plain,
                [`${prefixcls}__button--disabled`]: this.disabled,
                [`${prefixcls}__button--round`]: this.round,
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
@import '../theme-chalk/var.less';

.@{--prefixcls}__button {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    border: none;
    height: 38px;
    font-size: 14px;
    color: @--color-global;
    outline: none;
    transition: opacity 0.2s;
    line-height: 38px;
    cursor: pointer;
    box-sizing: border-box;
    -webkit-appearance: none;
    user-select: none;
    touch-action: manipulation;

    &:active {
        opacity: 0.6;
    }
}
// .jm-button >
.@{--prefixcls}__button--primary {
    background-color: @button-bk-primary;
}

.@{--prefixcls}__button--info {
    background-color: @button-bk-info;
}

.@{--prefixcls}__button--default {
    color: #ccc !important;
    background-color: @button-bk-default;
}

.@{--prefixcls}__button--error {
    background-color: @button-bk-error;
}

.@{--prefixcls}__button--warning {
    background-color: @button-bk-warning;
}

.@{--prefixcls}__button--success {
    background-color: @button-bk-success;
}

.@{--prefixcls}__button--normal {
    padding: 0 18px;
}

.@{--prefixcls}__button--small {
    padding: 0 12px;
    height: 28px;
    font-size: 12px;
    line-height: 26px;
}

.@{--prefixcls}__button--large {
    width: 100%;
    height: 48px;
    line-height: 46px;
}

.@{--prefixcls}__button--disabled {
    cursor: not-allowed;
    opacity: 0.68;
}

.@{--prefixcls}__button--round {
    border-radius: 25px;
}

.loading {
    display: inline-flex;
    align-items: center;

    .@{--prefixcls}__button--loading {
        width: 20px;
        height: 20px;
        cursor: default;
        animation: __jm-button-loading-keyframes 0.5s infinite linear;
    }
}

.@{--prefixcls}__button--label {
    display: flex;
    justify-content: space-between;
    align-items: center;
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
