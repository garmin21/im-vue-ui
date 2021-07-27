<template>
    <div :class="classes">
    </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import { PREFIXCLS } from "../../theme-chalk/var";
// import { getYearMonthDay } from '../../../tool/date'
@Component<JmPickerDays>({})
export default class JmPickerDays extends Vue {
    public get prefixcls() {
        return PREFIXCLS;
    }

    public get classes() {
        const { prefixcls } = this;
        return [`${prefixcls}__picker__days`];
    }
}
</script>

<style lang="less" scoped>
@import "../../theme-chalk/var.less";

.@{--prefixcls}__picker__days {
    border: 2px solid red;
    padding: 100px;
}
</style>
