<template>
    <div :class="classes">
        <slot />
    </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import { PREFIXCLS } from "../theme-chalk/var";

/**
 *  ? 支持手风琴模式
 */

@Component<JmCollapse>({})
export default class JmCollapse extends Vue {
    @Prop({
        type: [Array, String],
        default: () => {
            return [];
        }
    })
    public value!: Array<string> | string;

    @Prop({ type: Boolean, default: true })
    public icon!: boolean;

    // 手风琴模式
    @Prop({ type: Boolean, default: false })
    public accordion!: boolean;

    public get prefixcls() {
        return PREFIXCLS;
    }

    public get classes() {
        const { prefixcls } = this;
        return [`${prefixcls}__collapse`];
    }

    public $updateValue(name: string) {
        const value = this.value;
        if (Array.isArray(value)) {
            const index = value.findIndex((key) => key === name);
            if (index < 0) {
                return this.$emit("input", value.concat([name]));
            }
            const arr = value.slice(0);
            arr.splice(index, 1);
            this.$emit("input", arr);
        } else {
            this.$emit("input", name);
        }
    }
}
</script>

<style lang="less" scoped>
@import "../theme-chalk/var.less";

.@{--prefixcls}__collapse {
    padding: 20px;
}
</style>
