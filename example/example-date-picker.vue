<template>
    <div>
        <h1>date-picker</h1>
        <section>
            <h3>基本使用，选择日期</h3>
            <JmDatePicker :type="days" v-model="value" />
        </section>
    </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import JmDatePicker, { ComponentView } from "../package/date-picker";
@Component({
    components: {
        JmDatePicker
    }
})
export default class ExampleDatePicker extends Vue {
    public value = new Date();

    public get days() {
        return ComponentView.DAYS;
    }
}
</script>
