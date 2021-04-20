<template>
    <div>
        <h1>Button</h1>
        <section>
            <h2>按钮类型</h2>
            <JmButton type="primary">主要按钮</JmButton>
            <JmButton type="info">信息</JmButton>
            <JmButton type="default">默认</JmButton>
            <JmButton type="error">异常</JmButton>
            <JmButton type="warning">警告</JmButton>
            <JmButton type="success">成功</JmButton>
        </section>
        <section>
            <h2>按钮大小</h2>
            <JmButton type="primary" size="small">small</JmButton>
            <JmButton type="info" size="large">large</JmButton>
            <JmButton type="warning">normal</JmButton>
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
