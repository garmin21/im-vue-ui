<template>
    <transition name="slide" @after-leave="handleAfterLeave">
        <label :class="classes" :style="customStyle" v-show="visible">
            <slot name="icon-left">
                <img
                    v-if="icon"
                    :class="[`${prefixcls}__image--type`]"
                    width="20"
                    height="20"
                    :src="icon"
                    :alt="type"
                />
            </slot>
            <div :class="[`${prefixcls}__block__content`]">
                <slot>{{ message }}</slot>
            </div>
            <slot name="icon-right" v-if="showClose">
                <img
                    src="./icon/delete.svg"
                    width="16"
                    height="16"
                    :class="[`${prefixcls}__image--delete`]"
                    alt="delete"
                    @click="handleClickDelete"
                />
            </slot>
        </label>
    </transition>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import { MessageOptions ,Type } from "./props";
import { PREFIXCLS } from "../theme-chalk/var";

@Component<JmMessage>({})
export default class JmMessage extends Vue implements MessageOptions {
    @Prop({ type: String, default: Type['none'] })
    public type!: Type;

    @Prop({ type: String, default: "No.Data" })
    public message!: string;

    @Prop({ type: Boolean, default: false })
    public showClose!: boolean;

    @Prop({ type: Number, default: 3000 })
    public duration!: number;

    @Prop({
        type: Object,
        default: () => {
            return {
                top: "20px"
            };
        }
    })
    public customStyle!: Partial<CSSStyleDeclaration>;

    /**
     * 是否手动关闭
     */
    @Prop({ type: Function, default: () => {} })
    public onClose!: () => void;

    public visible = false;
    public prefixcls = PREFIXCLS;

    public get classes() {
        return [
            `${this.prefixcls}__message__block`,
            `${this.prefixcls}__block--${this.type}`
        ];
    }

    public get icon() {
        switch (this.type) {
            case Type.success:
                return require("./icon/success.svg");
            case Type.info:
                return require("./icon/info.svg");
            case Type.warning:
                return require("./icon/warning.svg");
            case Type.error:
                return require("./icon/error.svg");
        }
        return "";
    }

    public handleClickDelete() {
        this.destroy();
        this.onClose();
    }

    public handleAfterLeave() {
        this.destroy();
    }

    public destroy() {
        this.visible = false;
        const timeId = setTimeout(() => {
            this.$destroy();
            this.$el.remove();
            clearTimeout(timeId);
        }, 500);
    }

    public mounted() {
        if (!this.showClose) {
            const timeId = setTimeout(() => {
                this.destroy();
            }, this.duration);
            this.$once("hook:beforeDestroy", () => {
                clearTimeout(timeId);
            });
        }
    }
}
</script>

<style lang="less" scoped>
@import "../theme-chalk/var.less";

.@{--prefixcls}__message__block {
    position: fixed;
    top: 20px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    align-items: center;
    border-radius: 4px;
    padding: 15px 15px 15px 20px;
    min-width: 380px;
    background-color: @--color-global;
    transition: opacity 0.3s, transform 0.4s, top 0.4s;
    /* stylelint-disable */
    box-shadow: 0 3px 6px -4px rgba(0, 0, 0, 0.12),
        0 6px 16px 0 rgba(0, 0, 0, 0.08), 0 9px 28px 8px rgba(0, 0, 0, 0.05);
    overflow: hidden;
}

.@{--prefixcls}__block__content {
    padding-right: 16px;
}

.@{--prefixcls}__block--success {
    color: @--color-success;
    background-color: mix(@--color-global, @--color-success, 90%);
}

.@{--prefixcls}__block--info {
    color: @--color-info;
    background-color: mix(@--color-global, @--color-info, 90%);
}

.@{--prefixcls}__block--warning {
    color: @--color-warning;
    background-color: mix(@--color-global, @--color-warning, 90%);
}

.@{--prefixcls}__block--error {
    color: @--color-error;
    background-color: mix(@--color-global, @--color-error, 90%);
}

.slide-enter,
.slide-leave-active {
    opacity: 0;
    transform: translate(-50%, -100%);
}

.@{--prefixcls}__image--delete {
    cursor: pointer;
    margin-left: auto;
}

.@{--prefixcls}__image--type {
    padding-right: 10px;
}
</style>
