<template>
    <div>
        <h1>Button</h1>
        <section>
            <h3>按钮类型</h3>
            <JmButton type="primary">主要按钮</JmButton>
            <JmButton type="info">信息</JmButton>
            <JmButton type="default">默认</JmButton>
            <JmButton type="error">异常</JmButton>
            <JmButton type="warning">警告</JmButton>
            <JmButton type="success">成功</JmButton>
        </section>
        <section>
            <h3>按钮大小</h3>
            <JmButton type="primary" size="small">small</JmButton>
            <JmButton type="info" size="large">large</JmButton>
            <JmButton type="warning">normal</JmButton>
        </section>

        <section>
            <h3>朴素按钮</h3>
            <JmButton type="primary" plain size="small">small</JmButton>
            <JmButton type="info" plain size="small">small</JmButton>
        </section>
    </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import JmButton from "../package/button";

@Component({
    components: {
        JmButton
    }
})
export default class ExampleButton extends Vue {}
</script>
