<template>
    <div>
        <h1>Message</h1>
        <section>
            <JmButton type="primary" @click="showMessage1">
                onClic as Message success
            </JmButton>
            <br />
            <br />
            <br />
            <JmButton type="info" @click="showMessage2">
                onClic as Message info
            </JmButton>
            <br />
            <br />
            <br />
            <JmButton type="warning" @click="showMessage3">
                onClic as Message warning
            </JmButton>
            <br />
            <br />
            <br />
            <JmButton type="error" @click="showMessage4">
                onClic as Message error
            </JmButton>
        </section>
    </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import { Message } from "../package/message";
import JmButton from "../package/button";

@Component<ExampleMessage>({
    components: {
        JmButton
    }
})
export default class ExampleMessage extends Vue {
    public showMessage1() {
        Message({
            type: "success",
            message: "onClic as Message"
        });
    }
    public showMessage2() {
        Message({
            type: "info",
            message: "onClic as Message",
            customStyle: {
                top: "40px"
            }
        });
    }
    public showMessage3() {
        Message({
            type: "warning",
            message: "onClic as Message",
            customStyle: {
                top: "50%"
            }
        });
    }
    public showMessage4() {
        Message({
            type: "error",
            message: "onClic as Message",
            showClose: true,
            customStyle: {
                left: "50%",
                top: "50%"
            },
            onClose: () => {
                console.log("我关闭了 !!!!");
            }
        });
    }
}
</script>
