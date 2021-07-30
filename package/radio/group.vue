<template>
    <div :class="classes">
        <slot></slot>
    </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator"
import { RadioValue } from "./type";
import { PREFIXCLS } from '../theme-chalk/var';


@Component<JmRadioGroup>({})
export default class JmRadioGroup extends Vue {
    @Prop({ type: [String, Number, Boolean] })
    public value?: RadioValue


    public get prefixcls() {
        return PREFIXCLS;
    }

    public get classes() {
        const { prefixcls } = this;
        return [
            `${prefixcls}__radio__group`
        ]
    }

    public $updateValue(label: RadioValue) {
        this.$emit("input", label)
        this.$emit("change", label)
    }
}
</script>
