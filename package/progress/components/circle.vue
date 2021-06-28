<template>
    <div :class="classes">
        <svg width="300" class="svg" height="180" viewBox="0 0 300 180">
            <circle class="circle" cx="150" cy="90" r="60" />
            <circle
                class="circle"
                :style="computedItemStyle"
                cx="150"
                cy="90"
                r="60"
            />
        </svg>
        <div class="inner_number">
            <span>{{ value }}</span>
            <span>%</span>
        </div>
    </div>
</template>

<script lang="ts">
/**
 * 圆的周长计算公式： C=2πr
 */
import { Vue, Component, Prop } from "vue-property-decorator";
import { Props } from "../prop";
import { PREFIXCLS } from "../../theme-chalk/var";

@Component<JmCircle>({})
export default class JmCircle extends Vue implements Props {
    @Prop({ type: Number, default: 0 })
    public value!: number;

    @Prop({ type: String })
    public classSvg?: string;

    public get classes() {
        return [`${PREFIXCLS}-progress`];
    }
    //
    public get computedItemStyle(): Partial<CSSStyleDeclaration> {
        return {
            strokeDashoffset: `${376.8 - (376.8 * this.value) / 100}`
        };
    }

    public handelChange(value: number) {
        this.$emit("input", value);
        this.$emit("change", value);
    }
}
</script>

<style lang="less" scoped>
@import "../../theme-chalk/config.less";

.@{--prefixcls}-progress {
    --progress-succeed: #6ea82f;
    --progress-default: #e0e0e0;
    --progress-width: 300px;
    --progress-height: 180px;
    --progress-perimeter: 376.8px;

    //

    position: relative;
    width: var(--progress-width);
    height: var(--progress-height);
}
.circle {
    transition: all 1.5s;
    fill: transparent;
    stroke-width: 10px;
    stroke-linecap: round;
}

.circle:nth-child(1) {
    stroke: var(--progress-default);
}

.circle:nth-child(2) {
    stroke: var(--progress-succeed);
    stroke-dasharray: var(--progress-perimeter);
    stroke-dashoffset: var(--progress-perimeter);
}

.inner_number {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
    font-size: 30px;
    font-weight: bold;
    color: var(--progress-succeed);
}
</style>
