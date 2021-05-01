<template>div.jm-message-</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import { MessageProps } from "./props";
@Component({})
export default class JmMessage extends Vue implements MessageProps {
    @Prop({ type: String, default: "none" })
    public type!: "success" | "info" | "warning" | "error" | "none";

    @Prop({ type: String, default: "" })
    public message!: string;

    @Prop({ type: Number, default: 30000 })
    public duration!: number;

    @Prop({ type: Function, default: () => {} })
    public onClose!: () => void;
}
</script>
