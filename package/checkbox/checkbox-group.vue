<template>
    <div class="jm-checkbox-group">
        <slot></slot>
    </div>
</template>

<script lang="ts">
import { Vue, Prop, Component } from "vue-property-decorator";

@Component({})
export default class JmCheckBoxGroup extends Vue {
    @Prop({
        type: Array,
        default: (): string[] => {
            return [];
        }
    })
    public value!: string[];

    public cloneArr = JSON.parse(JSON.stringify(this.value)) as string[];

    public get cloneValue(): string[] {
        return this.cloneArr;
    }
    public set cloneValue(args: string[]) {
        this.cloneArr = this.cloneArr.concat(args);
    }

    public $updateValue(label: string) {
        const index = this.value.indexOf(label);
        if (index >= 0) {
            this.cloneValue.splice(index, 1);
            return this.$emit("input", this.cloneValue);
        }
        this.cloneValue = [label];
        return this.$emit("input", this.cloneValue);
    }
}
</script>
