<template>
    <div :class="classes">
        <div :class="[`${prefixcls}__viewer__mask`]"></div>
        <span
            :class="[`${prefixcls}__viewer__close`]"
            @click="handelCloseViewer"
        >
            <img src="./icon/close.svg" width="24" height="24" />
        </span>
        <div :class="[`${prefixcls}__viewer__canvas`]">
            <img
                :src="url"
                @load="onImageLoad"
                :class="[`${prefixcls}__canvas__image`]"
            />
        </div>
    </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import { PREFIXCLS } from "../theme-chalk/var";
import { renderComponent } from "../../tool/run-component";

@Component<ImageViewer>({})
export default class ImageViewer extends Vue {
    public static show(url: string) {
        renderComponent(this, {
            props: {
                url
            }
        });
    }

    @Prop({ type: String, default: "" })
    public url!: string;

    public get prefixcls() {
        return PREFIXCLS;
    }

    public get classes() {
        return [`${this.prefixcls}__image__viewer`];
    }

    public handelCloseViewer() {
        this.$destroy();
        this.$el.remove();
    }

    public onImageLoad(evt: Event) {}
}
</script>

<style lang="less" scoped>
@import "../theme-chalk/var.less";

.@{--prefixcls}__image__viewer {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    --bg-mask-color: #000;
    --bg-close-color: #606266;
}

.@{--prefixcls}__viewer__mask {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1;
    margin: auto;
    background: var(--bg-mask-color);
    opacity: 0.5;
}

.@{--prefixcls}__viewer__close {
    position: absolute;
    top: 20px;
    right: 25px;
    z-index: 2;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    background: var(--bg-close-color);
    cursor: pointer;
}

.@{--prefixcls}__viewer__canvas {
    position: absolute;
    z-index: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
}

.@{--prefixcls}__canvas__image {
    margin-top: 0;
    margin-left: 0;
    max-width: 100%;
    max-height: 100%;
    transform: scale(0.8) rotate(0deg);
}
</style>
