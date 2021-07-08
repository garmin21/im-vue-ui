<template>
    <div class="jm-checkbox-group">
        <slot></slot>
    </div>
</template>

<script lang="ts">
import { Vue, Prop, Component } from "vue-property-decorator";
import { CheckBoxValue, CheckBoxLabel } from "./index";
@Component<JmCheckBoxGroup>({})
export default class JmCheckBoxGroup extends Vue {
    @Prop({
        type: Array,
        required: true
    })
    public value!: CheckBoxValue;

    public deepArray: CheckBoxValue = [];

    public $updateValue(checked: boolean, label: CheckBoxLabel) {
        if (!checked) {
            const index = this.deepArray.indexOf(label);
            index >= 0 && this.deepArray.splice(index, 1);
        } else {
            this.deepArray = this.deepArray.concat([label]);
        }
        this.$emit("input", this.deepArray);
        this.$emit("change", this.deepArray);
    }

    public created() {
        this.deepArray = this.value;
    }
}
</script>
