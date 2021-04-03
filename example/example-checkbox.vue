<template>
    <section>
        <h1>checkbox</h1>
        <JmCheckBox label="1" v-model="checked" />
        <JmCheckBox label="2" v-model="checked" :disabled="true" />

        <p>
            <JmCheckBoxGroup v-model="checkList">
                <JmCheckBox label="1" />
                <JmCheckBox label="2" />
                <JmCheckBox label="3" />
            </JmCheckBoxGroup>
        </p>
    </section>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator"
import JmCheckBox from "../package/checkbox"
import JmCheckBoxGroup from "../package/checkbox-group"
@Component({
    components: {
        JmCheckBox,
        JmCheckBoxGroup
    }
})
export default class ExampleCheckBox extends Vue {
    public checked = true

    public checkList = ["1", "2", "3"]
}
</script>
