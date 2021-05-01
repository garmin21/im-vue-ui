<template>
    <svg
        width="18px"
        height="18px"
        viewBox="0 0 18 18"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
    >
        <defs>
            <linearGradient
                x1="0%"
                y1="50%"
                x2="-10.7700478%"
                y2="89.5695412%"
                id="linearGradient-1"
            >
                <stop stop-color="#FF7241" offset="0%"></stop>
                <stop
                    stop-color="#FFFFFF"
                    stop-opacity="0"
                    offset="100%"
                ></stop>
            </linearGradient>
        </defs>
        <g
            class="fm-v3-dialog-icon-loading"
            stroke="none"
            stroke-width="1"
            fill="none"
            fill-rule="evenodd"
            stroke-linecap="round"
        >
            <g
                transform="translate(-901.000000, -1267.000000)"
                stroke="url(#linearGradient-1)"
                stroke-width="2"
            >
                <g id="content" transform="translate(600.000000, 0.000000)">
                    <g transform="translate(0.000000, 184.000000)">
                        <g transform="translate(198.000000, 1028.000000)">
                            <g transform="translate(62.000000, 46.000000)">
                                <g transform="translate(41.000000, 9.000000)">
                                    <path
                                        d="M9,17 C13.418278,17 17,13.418278 17,9 C17,4.581722 13.418278,1 9,1 C4.581722,1 1,4.581722 1,9"
                                    ></path>
                                </g>
                            </g>
                        </g>
                    </g>
                </g>
            </g>
        </g>
    </svg>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component<IconLoading>({})
export default class IconLoading extends Vue {}
</script>

<style lang="less" scoped>
@import "../../../theme-chalk/toast.less";

.fm-v3-dialog-icon-loading {
    width: 20px;
    height: 20px;
    transform-origin: center;
    animation: __jm-loading-keyframes 0.5s infinite linear;
}
@keyframes __jm-loading-keyframes {
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
}
</style>
