<template>
    <div class="warpper">
        <h1>input number</h1>
        <section>
            <h3>基础用法</h3>
            <jm-input-number :count.sync="count" :min="0" :max="10" />
        </section>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import JmInputNumber from "../package/input-number";

@Component({
    components: {
        JmInputNumber
    }
})
export default class ExampleInputNumber extends Vue {
    public count = 0;
}
</script>

<style lang="less" scoped>
.warpper {
    width: 375px;
}
</style>
