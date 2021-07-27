<template>
    <div :class="[`${prefixcls}__checkbox__group`]">
        <slot></slot>
    </div>
</template>

<script lang="ts">
import { Vue, Prop, Component } from "vue-property-decorator";
import { PREFIXCLS } from '../theme-chalk/var'

@Component<JmCheckBoxGroup>({})
export default class JmCheckBoxGroup extends Vue {
    @Prop({
        type: Array,
        required: true
    })
    public value!: string[];

    public deepArray: string[] = [];


    public get prefixcls() {
        return PREFIXCLS;
    }

    // 解法1 ，定义变量
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

    // 解法二
    public $updateValue1(checked: boolean, label: string) {
        const createarr = this.value.slice(0);
        if(!checked) {
            const index = createarr.indexOf(label);
            index >= 0 && createarr.splice(index, 1);
        } else {
            createarr.push(label);
        }
        this.$emit('input', createarr);
        this.$emit('change', createarr)
    }

    public created() {
        this.deepArray = this.value;
    }
}
</script>
