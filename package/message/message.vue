<template>
    <transition name="slide">
        <label :class="classes" v-show="visible">
            <slot name="icon-left"></slot>
            <div :class="[`${this.prefixcls}__block__content`]">
                <slot>{{ message }}</slot>
            </div>
            <slot name="icon-right">
                <img
                    src="./icon/delete.svg"
                    width="20"
                    height="20"
                    alt="delete"
                    @click="handleClickDelete"
                />
            </slot>
        </label>
    </transition>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import { PREFIXCLS } from "../theme-chalk/var";

@Component<JmMessage>({})
export default class JmMessage extends Vue {
    /**
     * 渲染类型
     */
    @Prop({ type: String, default: "none" })
    public type!: "success" | "info" | "warning" | "error" | "none";

    /**
     * 渲染内容
     */
    @Prop({ type: String, default: "" })
    public message!: string;

    /**
     * 控制是否显示
     */
    // @Prop({ type: Boolean, default: false })
    // public visible!: boolean;

    public visible = false;

    /**
     * 渲染时间
     */
    @Prop({ type: Number, default: 3000 })
    public duration!: number;

    /**
     * 关闭回调
     */
    @Prop({ type: Function, default: () => {} })
    public onClose!: () => void;

    public prefixcls = PREFIXCLS;
    public timeId: null | NodeJS.Timeout = null;

    public get classes() {
        return [
            `${this.prefixcls}__message__block`,
            `${this.prefixcls}__block--${this.type}`
        ];
    }

    public handleClickDelete() {
        // this.destroy();
    }

    public destroy() {
        this.$destroy();
        this.$el.remove();
    }

    public close() {
        this.visible = false;
        setTimeout(() => {
            this.destroy();
        }, 500);
    }

    public mounted() {
        this.timeId = setTimeout(() => {
            this.close();
        }, this.duration);
    }

    public beforeDestroy() {
        this.timeId && clearTimeout(this.timeId);
    }
}
</script>

<style lang="less" scoped>
@import "../theme-chalk/var.less";

.@{--prefixcls}__message__block {
    position: fixed;
    top: 20px;
    left: 50%;
    display: flex;
    align-items: center;
    border-radius: 4px;
    padding: 15px 15px 15px 20px;
    min-width: 380px;
    background-color: @--color-global;
    /* stylelint-disable */
    box-shadow: 0 3px 6px -4px rgba(0, 0, 0, 0.12),
        0 6px 16px 0 rgba(0, 0, 0, 0.08), 0 9px 28px 8px rgba(0, 0, 0, 0.05);
    transform: translateX(-50%);
}

.@{--prefixcls}__block__content {
    padding-right: 16px;
}

.@{--prefixcls}__block--success {
    color: @--color-success;
    background-color: @--bg-success;
}

.@{--prefixcls}__block--info {
    color: @--color-info;
}

.@{--prefixcls}__block--warning {
    color: @--color-warning;
}

.@{--prefixcls}__block--error {
    color: @--color-error;
}

.slide-enter-active,
.slide-leave-active {
    transition: all 0.3s;
    transition-property: opacity, top;
}
.slide-enter,
.slide-leave-to {
    top: 0;
    opacity: 0;
}
</style>
