<template>
    <div>
        <h1>Progress</h1>
        <section>
            <h3>基本使用,默认圆形</h3>
            <JmProgress :value="Number(value1)" />
            <input type="text" v-model="value1" />
        </section>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import JmProgress from "../package/progress";

@Component({
    components: {
        JmProgress
    }
})
export default class ExampleProgress extends Vue {
    public value1 = 0;
}
</script>
