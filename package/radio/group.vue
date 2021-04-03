<template>
    <div class="jm-radio-group">
        <slot></slot>
    </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator"
import { RadioValue } from "./index"
@Component({})
export default class JmRadioGroup extends Vue {
    @Prop({ type: [String, Number, Boolean] })
    public value?: RadioValue

    public $updateValue(label: RadioValue) {
        this.$emit("input", label)
        this.$emit("change", label)
    }
}
</script>
