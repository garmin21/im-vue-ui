<template>
    <label :class="classes">
        <input :type="type" :value="value" @focus="handelInputFocus" @blur="handelInputBlur" @input="handelInput" :class="[`${prefixcls}__input`]" />
    </label>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import { PREFIXCLS } from '../theme-chalk/var';

/**
 * 1. 需求点1: 希望可以限制不同类型，根据类型限制值的输入
 */
@Component<JmInput>({})
export default class JmInput extends Vue {
    // 类型
    @Prop({
        type: String,
        default: 'text'
    })
    public type!:string;
    
    @Prop({
        type: String,
        required: true
    })
    public value!:string;

    public get classes() {
        const { prefixcls } = this;
        return [
            `${prefixcls}__input__block`
        ]
    }

    public get prefixcls() {
        return PREFIXCLS;
    }


    public handelInput(evt:Event) {
        const target = evt.target as HTMLInputElement;
        this.$emit('input', target.value);
        this.$emit('handel-change',target.value)
    }

    public handelInputFocus() {
        this.$emit('focus')
    }

    public handelInputBlur() {
        this.$emit('blur')
    }
}
</script>

<style lang="less" scoped>
@import '../theme-chalk/var.less';
// .@{--prefixcls}__input__block {
// }

.@{--prefixcls}__input {
    border: none;
    border: 0;
    border-radius: 4px;
    padding: 10px 12px;
    width: 100%;
    color: @--text-input;
    outline: none;
    box-shadow: 0 1px 3px rgba(50, 50, 93, 0.15), 0 1px 0 rgba(0, 0, 0, 0.02);
    transition: box-shadow 0.15s ease;
}

</style>