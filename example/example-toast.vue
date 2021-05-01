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

        <section>
            <h1>被当作消息通知</h1>
            <JmButton type="info" @click="message">信息</JmButton>
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

    public message() {
        toast({
            type: "info",
            message: "这是一个消息通知!!!!!",
            duration: 11000000
        });
    }

    public mounted() {
        const H1Constructor = Vue.extend(Toast);
        const instance = new H1Constructor({
            el: document.createElement("div"),
            data: () => {
                return {
                    msg: "ppppp"
                };
            },
            props: ["type", "message"],
            propsData: {
                // propsData 传递数据
                type: "success",
                message: "oooooooooooo"
            }
        });
        console.log(instance.$el, "pppppppppppp");
        console.log(instance.$data, "pppppppppppp");
        console.log(instance.msg, "pppppppppppp");
        console.log(instance.type, "pppppppppppp");
        console.log(instance.message, "pppppppppppp");
        // document.body.appendChild();
    }
}
</script>

<style lang="less" scoped>
.display {
    display: block;
}
</style>
