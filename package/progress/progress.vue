<template>
    <component :value="value" :is="componentType" />
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import { ProgressType } from "./index";

import JmCircle from "./components/circle.vue";

@Component<JmProgress>({
    components: {
        JmCircle
    }
})
export default class JmProgress extends Vue {
    @Prop({ type: String })
    public type?: ProgressType;

    @Prop({ type: Number, default: 0 })
    public value!: number;

    public get componentType() {
        switch (this.type) {
            case ProgressType.CIRCLE:
                return JmCircle;
            // case ProgressType.RAIL:
            //     return "rail";
            default:
                return JmCircle;
        }
    }
}
</script>
