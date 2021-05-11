<template>
    <label :class="classes">
        <input
            type="checkbox"
            :name="name"
            :disabled="disabled"
            :checked="value"
            class="jm-btn"
            @change="handelChecked"
        />
    </label>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import { PREFIXCLS } from "../theme-chalk/var";
@Component<JmSwitch>({})
export default class JmSwitch extends Vue {
    @Prop({ type: [Boolean, Number, String], default: false })
    public value!: boolean;

    @Prop({ type: String, default: "checkbox" })
    public name!: string;

    @Prop({ type: Boolean, default: false })
    public disabled!: boolean;

    public get classes() {
        const { disabled } = this;
        return [`${PREFIXCLS}-switch`, { "is-disabled": disabled }];
    }

    public handelChecked(evt: InputEvent) {
        if (evt.target) {
            const { checked } = evt.target as HTMLInputElement;
            this.$emit("input", checked);
        }
    }
}
</script>

<style lang="less" scoped>
@import "../theme-chalk/config.less";

.@{--prefixcls}-switch {
    display: flex;
    align-items: center;
    width: 40px;
    height: 20px;
    border-color: rgb(255, 73, 73);
    background-color: rgb(255, 73, 73);
    border-radius: 20px;
    position: relative;
    overflow: hidden;
    opacity: 1;

    .jm-btn {
        cursor: pointer;
        width: 100%;
        height: 100%;
        margin: 0;
        visibility: hidden;
        &::after {
            content: "";
            position: absolute;
            top: 0px;
            left: 0px;
            width: 50%;
            height: 100%;
            border-radius: 50%;
            background-color: #ffffff;
            visibility: visible;
            transition: transform 0.3s ease;
        }
        &::before {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            visibility: visible;
            transition: all 0.4s ease;
        }
        &:checked::after {
            transform: translateX(calc(100%));
        }
        &:checked::before {
            border-color: rgb(19, 206, 102);
            background-color: rgb(19, 206, 102);
        }
    }
}
// .@{--prefixcls}.is-disabled {
//     opacity: 0.6;
// }
</style>
