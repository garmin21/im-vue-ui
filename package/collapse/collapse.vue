<template>
    <div :class="classes">
        <slot />
    </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

@Component({})
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

    public get classes() {
        return [`jm-collapse`];
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
            // todo 如何支持手风琴模式
            this.$emit("input", name);
        }
    }
}
</script>

<style lang="less" scoped>
.jm-collapse {
    padding: 20px;
}
</style>
