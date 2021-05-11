<template>
    <transition :name="`fade-${direction}`">
        <div :class="classes" v-if="visible">
            <div class="mark" @click.stop="handelClose"></div>
            <div :class="`container-${direction}`">
                <slot />
            </div>
        </div>
    </transition>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import { PREFIXCLS } from "../theme-chalk/var";
@Component({})
export default class JmDrawer extends Vue {
    @Prop({ type: Boolean, default: false })
    public visible!: boolean;

    @Prop({
        type: String,
        default: "left",
        validator: (val: string) => {
            return ["left", "top", "right", "bottom"].indexOf(val) !== -1;
        }
    })
    public direction!: string;

    public get classes() {
        return [`${PREFIXCLS}-drawer`];
    }

    public handelClose() {
        this.$emit("close");
    }
}
</script>

<style lang="less" scoped>
@import "../theme-chalk/config.less";
.@{--prefixcls}-drawer {
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
}
.mark {
    position: fixed;
    z-index: 3;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.8);
}
.container-left {
    position: fixed;
    z-index: 4;
    top: 0;
    left: 0;
    width: calc(100% - 60%);
    height: 100%;
    background-color: white;
}

.container-bottom {
    position: fixed;
    z-index: 4;
    bottom: 0;
    right: 0;
    width: 100%;
    height: calc(100% - 60%);
    background-color: white;
}

.container-right {
    position: fixed;
    z-index: 4;
    right: 0;
    bottom: 0;
    width: calc(100% - 60%);
    height: 100%;
    background-color: white;
}

.container-top {
    position: fixed;
    z-index: 4;
    top: 0;
    left: 0;
    width: 100%;
    height: calc(100% - 60%);
    background-color: white;
}

.fade-left-enter,
.fade-left-leave-to {
    transform: translateX(-100%);
}

.fade-left-enter-active,
.fade-left-leave-active {
    transition: all 0.4s ease;
}

.fade-right-enter,
.fade-right-leave-to {
    transform: translateX(100%);
}

.fade-right-enter-active,
.fade-right-leave-active {
    transition: all 0.4s ease;
}

.fade-top-enter,
.fade-top-leave-to {
    transform: translateY(-100%);
}

.fade-top-enter-active,
.fade-top-leave-active {
    transition: all 0.4s ease;
}

.fade-bottom-enter,
.fade-bottom-leave-to {
    transform: translateY(100%);
}

.fade-bottom-enter-active,
.fade-bottom-leave-active {
    transition: all 0.4s ease;
}
</style>
