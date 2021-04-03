<template>
    <div class="home">
        <ExampleRadio />
        <ExampleCheckBox />
    </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator"
import ExampleRadio from "../../example/example-radio.vue"
import ExampleCheckBox from "../../example/example-checkbox.vue"
@Component({
    components: {
        ExampleRadio,
        ExampleCheckBox
    }
})
export default class Home extends Vue {}
</script>
