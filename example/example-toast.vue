<template>
    <div>
        <h1>toast</h1>
        <section>
            <h3>基本使用</h3>
            <JmButton type="info" @click="info">信息</JmButton>
            <JmButton type="default" @click="none">默认</JmButton>
            <JmButton type="error" @click="error">异常</JmButton>
            <JmButton type="warning" @click="warning">警告</JmButton>
            <JmButton type="success" @click="success">成功</JmButton>
            <JmButton type="primary" @click="loading">loading</JmButton>
        </section>
    </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import { toast } from "../package/toast";
import JmButton from "../package/button";
import Toast from "../package/toast/src/main";

@Component({
    components: {
        Toast,
        JmButton
    }
})
export default class ExampleToast extends Vue {
    public success() {
        toast({
            type: "success",
            message: "不错"
        });
    }

    public info() {
        toast({
            type: "info",
            message: "info"
        });
    }

    public none() {
        toast({
            type: "none",
            message: "node"
        });
    }

    public error() {
        toast({
            type: "error",
            message: "error"
        });
    }

    public warning() {
        toast({
            type: "warning",
            message: "warning"
        });
    }

    public loading() {
        toast({
            type: "loading",
            message: "loading"
        });
    }
}
</script>

<style lang="less" scoped>
.display {
    display: block;
}
</style>
