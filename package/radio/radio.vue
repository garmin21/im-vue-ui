<template>
    <label
        @click="handleClick"
        class="jm-radio"
        :class="[checked ? 'jm-checked' : '', disabled ? 'Jm-disabled' : '']"
    >
        <span class="jm-radio__input">
            <span class="jm-radio__inner" />
            <span class="jm-radio__label">
                <slot />
                <template v-if="!$slots.default">{{ label }}</template>
            </span>
        </span>
    </label>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator"
import { getParentGroup } from "../../src/utils/group"
import JmRadioGroup from "./group.vue"
import { RadioValue, RadioItem } from "./index"

@Component<JmRadio>({})
export default class JmRadio extends Vue {
    @Prop({ type: [String, Number, Boolean], required: true })
    public label!: RadioValue

    @Prop({ type: [String, Number, Boolean] })
    public value?: RadioValue

    @Prop({ type: Boolean, default: false })
    public disabled!: boolean

    @Prop({
        type: Object
    })
    public item?: RadioItem

    public parent: JmRadioGroup | null = null

    public get checked() {
        if (this.isGroup) {
            return this.label === this.isGroup.value
        }
        return this.label === this.value
    }

    public get isGroup() {
        return getParentGroup<JmRadioGroup>(this, "JmRadioGroup")
    }

    public handleClick() {
        if (this.disabled || this.checked) {
            return
        }
        if (this.isGroup) {
            return this.isGroup.$updateValue(this.label)
        }
        if (this.item) {
            this.$emit("input", this.item.value)
            this.$emit("change", this.item)
            return
        }
        this.$emit("input", this.label)
        this.$emit("change", this.label)
    }
}
</script>

<style lang="less" scoped>
@import "../theme-chalk/config.less";
.jm-radio {
    display: inline-flex;
    cursor: pointer;
}
.jm-radio__input {
    display: flex;
    align-items: center;
    font-size: 14px;
    color: #333;
}
.jm-radio__inner {
    width: 18px;
    height: 18px;
    box-sizing: border-box;
    border-radius: 50%;
    border: 1px solid #ccc;
    background-color: #fff;
}
.jm-radio__label {
    margin-left: 5px;
    padding-left: 8px;
}

.jm-checked {
    .jm-radio__inner {
        border: 5px solid @--theme-color;
    }
}
.Jm-disabled {
    color: #c0c4cc;
    opacity: 0.6;
    cursor: not-allowed;
}
</style>
