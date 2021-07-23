<template>
    <div class="jm-checkbox-group">
        <slot></slot>
    </div>
</template>

<script lang="ts">
import { Vue, Prop, Component } from "vue-property-decorator";


@Component<JmCheckBoxGroup>({})
export default class JmCheckBoxGroup extends Vue {
    @Prop({
        type: Array,
        required: true
    })
    public value!: string[];

    public deepArray: string[] = [];

    public $updateValue(checked: boolean, label: string) {
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
