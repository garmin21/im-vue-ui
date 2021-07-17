<template>
    <div>
        <h1>Message</h1>
        <section>
            <JmButton @click="showMessage"> onClic as Message </JmButton>
        </section>
    </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import { Message } from "../package/message/message";
import JmButton from "../package/button";

@Component<ExampleMessage>({
    components: {
        JmButton
    }
})
export default class ExampleMessage extends Vue {
    public showMessage() {
        Message(" onClic as Message");
    }
}
</script>
