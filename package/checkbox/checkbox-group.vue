<template>
    <div class="jm-checkbox-group">
        <slot></slot>
    </div>
</template>

<script lang="ts">
import { Vue, Prop, Component } from "vue-property-decorator";
import { CheckBoxValue, CheckBoxLabel } from "./index";
@Component({})
export default class JmCheckBoxGroup extends Vue {
    @Prop({
        type: Array,
        default: (): CheckBoxValue => {
            return [];
        }
    })
    public value!: CheckBoxValue;

    public cloneArr: CheckBoxValue = JSON.parse(JSON.stringify(this.value));

    public get cloneValue(): CheckBoxValue {
        return this.cloneArr;
    }
    public set cloneValue(args: CheckBoxValue) {
        this.cloneArr = this.cloneArr.concat(args);
    }

    public $updateValue(checked: boolean, label: CheckBoxLabel) {
        if (checked) {
            this.cloneValue = [label] as CheckBoxValue;
        } else {
            const index = this.value.indexOf(label);
            index >= 0 && this.cloneValue.splice(index, 1);
        }
        this.$emit("input", this.cloneValue);
        this.$emit("change", this.cloneValue);
    }
}
</script>
