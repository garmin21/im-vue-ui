<template>
    <transition :name="`fade-${direction}`">
        <div :class="classes" v-if="visible">
            <div
                :class="[`${prefixcls}__drawer__mark`]"
                @click.stop="handelClose"
            ></div>
            <div
                :class="[
                    `${prefixcls}__container`,
                    `${prefixcls}__container--${direction}`
                ]"
            >
                <slot name="header" v-if="$slots.header" />
                <header v-else :class="[`${prefixcls}__drawer__header`]">
                    {{ headerTitle }}
                </header>
                <slot />
            </div>
        </div>
    </transition>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import { PREFIXCLS } from "../theme-chalk/var";

@Component<JmDrawer>({})
export default class JmDrawer extends Vue {
    @Prop({ type: Boolean, default: false })
    public visible!: boolean;

    @Prop({ type: String, default: "Title" })
    public headerTitle!: string;

    @Prop({
        type: String,
        default: "left",
        validator: (val: string) => {
            return ["left", "top", "right", "bottom"].indexOf(val) !== -1;
        }
    })
    public direction!: string;

    public get prefixcls() {
        return PREFIXCLS;
    }

    public get classes() {
        const { prefixcls } = this;
        return [`${prefixcls}__drawer`];
    }

    public handelClose() {
        this.$emit("close");
    }

    public handelKeyDown(evt: KeyboardEvent) {
        if (evt.key === "Escape") {
            this.$emit("update:visible", false);
        }
    }

    public mounted() {
        document.addEventListener("keydown", this.handelKeyDown);
        this.$on("hook:beforeDestroy", () => {
            document.removeEventListener("keydown", this.handelKeyDown);
        });
    }
}
</script>

<style lang="less" scoped>
@import "../theme-chalk/config.less";
.@{--prefixcls}__drawer {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}

.@{--prefixcls}__drawer__mark {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 3;
    background: rgba(0, 0, 0, 0.5);
}

.@{--prefixcls}__drawer__header {
    min-height: 50px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding-left: 20px;
    font-weight: bold;
    border-bottom: 1px solid #f5f6f7;
}

.@{--prefixcls}__container {
    position: fixed;
    z-index: 4;
    background-color: white;
}

.@{--prefixcls}__container--left {
    top: 0;
    left: 0;
    width: calc(100% - 60%);
    height: 100%;
}

.@{--prefixcls}__container--bottom {
    right: 0;
    bottom: 0;
    width: 100%;
    height: calc(100% - 60%);
}

.@{--prefixcls}__container--right {
    right: 0;
    bottom: 0;
    width: calc(100% - 60%);
    height: 100%;
}

.@{--prefixcls}__container--top {
    top: 0;
    left: 0;
    width: 100%;
    height: calc(100% - 60%);
}

.fade-left-enter,
.fade-left-leave-to {
    transform: translateX(-100%);
    opacity: 0;
}

.fade-left-enter-active,
.fade-left-leave-active {
    transition: all 0.4s ease;
}

.fade-right-enter,
.fade-right-leave-to {
    transform: translateX(100%);
    opacity: 0;
}

.fade-right-enter-active,
.fade-right-leave-active {
    transition: all 0.4s ease;
}

.fade-top-enter,
.fade-top-leave-to {
    transform: translateY(-100%);
    opacity: 0;
}

.fade-top-enter-active,
.fade-top-leave-active {
    transition: all 0.4s ease;
}

.fade-bottom-enter,
.fade-bottom-leave-to {
    transform: translateY(100%);
    opacity: 0;
}

.fade-bottom-enter-active,
.fade-bottom-leave-active {
    transition: all 0.4s ease;
}
</style>
