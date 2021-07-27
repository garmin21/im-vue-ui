<template>
    <div>
        <h1>input</h1>
        <section>
            <h3>基本使用</h3>
            <JmInput v-model="value" @handel-change="handelChange" />
        </section>
    </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import JmInput from "../package/input";
@Component({
    components: {
        JmInput
    }
})
export default class ExampleInput extends Vue {
    public open = "2021-7-21";

    public get value () {
        return this.open;
    }
    public set value(value:string) {
        this.open = value;
    }
    // 触发值的更新
    public handelChange(value:string) {
        console.log(value,'>>>>>');
    }
}
</script>
