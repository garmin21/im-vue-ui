<template>
    <div :class="classes"></div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import { PREFIXCLS } from "../theme-chalk/var";

@Component({})
export default class JmDatePicker extends Vue {
    public get prefixcls() {
        return PREFIXCLS;
    }

    public get classes() {
        const { prefixcls } = this;
        return [`${prefixcls}__date__picker`];
    }
}
</script>

<style lang="less" scoped>
@import "../theme-chalk/var.less";

.@{--prefixcls}__date__picker {
}
</style>
