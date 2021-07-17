<template>
    <transition name="fm-v3-toast-fade">
        <div
            v-show="shown"
            :class="classes"
            class="fm-v3-toast"
            @click="onClose"
        >
            <component
                :is="iconType"
                v-if="iconType"
                class="fm-v3-toast-icon"
            />
            <div class="fm-v3-toast-message">{{ message }}</div>
        </div>
    </transition>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import { ToastProps } from "./props";

import IconSuccess from "./components/icon-success.vue";
import IconInfo from "./components/icon-info.vue";
import IconWarning from "./components/icon-warning.vue";
import IconError from "./components/icon-error.vue";
import IconLoading from "./components/icon-loading.vue";

@Component<Toast>({
    name: "fm-v3-toast",
    components: {
        IconSuccess,
        IconInfo,
        IconWarning,
        IconError,
        IconLoading
    }
})
export default class Toast extends Vue implements ToastProps {
    @Prop({
        type: String,
        default: ""
    })
    public classes!: string;

    @Prop({
        type: String,
        default: "none"
    })
    public type!: "success" | "info" | "warning" | "loading" | "error" | "none";

    @Prop({
        type: Number,
        default: 3000
    })
    public duration!: number;

    @Prop({
        type: String,
        default: ""
    })
    public message!: string;

    @Prop({
        type: Function,
        default: () => {}
    })
    public onClose!: () => void;

    public shown = false;
    public get iconType() {
        switch (this.type) {
            case "success":
                return "IconSuccess";
            case "info":
                return "IconInfo";
            case "warning":
                return "IconWarning";
            case "error":
                return "IconError";
            case "loading":
                return "IconLoading";
        }
        return "";
    }
}
</script>
<style lang="less" scoped>
.fm-v3-toast-fade-enter,
.fm-v3-toast-fade-leave-active {
    margin-top: -100%;
    opacity: 0;
}

.fm-v3-toast {
    position: fixed;
    top: 60px;
    left: 50%;
    z-index: 999;
    display: table;
    border: 1px solid rgba(230, 230, 230, 1);
    border-radius: 6px;
    padding: 12px 20px;
    max-width: 90%;
    text-align: center;
    white-space: normal;
    background: #fff;
    box-shadow: 0 0 16px 0 rgba(0, 0, 0, 0.15);
    transition: all 0.3s;
    box-sizing: border-box;
    transform: translateX(-50%);

    .fm-v3-toast-message {
        display: table-cell;
        max-width: 280px;
        font-size: 14px;
        color: #333;
        line-height: 24px;
        vertical-align: middle;
        word-break: break-word;
    }

    .fm-v3-toast-icon {
        padding-right: 5px;
        flex-shrink: 0;
        vertical-align: middle;
    }
}
</style>
