<template>
    <section class="home">
        <h1>radio</h1>
        <JmRadio v-model="radio" label="1">备选项</JmRadio>
        <JmRadio v-model="radio" label="2">备选项</JmRadio>
        <JmRadio v-model="radio" label="3" :disabled="true">禁用</JmRadio>

        <!-- 单选组 -->
        <div style="padding: 20px; border: 10px solid #ccc">
            <JmRadioGroup v-model="radio">
                <JmRadio label="4">备选项</JmRadio>
                <JmRadio label="5">备选项</JmRadio>
            </JmRadioGroup>
        </div>

        <!-- 数组对象 -->
        <div style="padding: 20px; border: 10px solid #ccc">
            <JmRadio
                v-model="model"
                v-for="item of modelList"
                :item="item"
                :key="item.value"
                :label="item.value"
                @change="change"
            >
                {{ item.label }}
            </JmRadio>
        </div>
    </section>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator"
import JmRadio, { RadioItem } from "../package/radio"
import JmRadioGroup from "../package/radio-group"
@Component<ExampleRadio>({
    components: {
        JmRadio,
        JmRadioGroup
    }
})
export default class ExampleRadio extends Vue {
    public radio = "5"

    public model = this.modelList[0].value

    public get findModel() {
        return this.modelList.find((item) => item.value === this.model)
    }

    public get modelList() {
        return [
            {
                label: "张三",
                value: "1"
            },
            {
                label: "李四",
                value: "2"
            },
            {
                label: "王五",
                value: "3"
            }
        ]
    }

    public change(item: RadioItem) {
        console.log(this.model, this.findModel)
    }
}
</script>
