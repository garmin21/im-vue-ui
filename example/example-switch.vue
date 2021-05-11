<template>
    <div>
        <h1>switch</h1>
        <section>
            <h3>基本使用</h3>
            <JmSwitch v-model="open" />
        </section>
    </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import JmSwitch from "../package/switch";
@Component({
    components: {
        JmSwitch
    }
})
export default class ExampleSwitch extends Vue {
    public open = "1111";
}
</script>
