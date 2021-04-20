<template>
    <div class="home">
        <ExampleRadio />
        <ExampleCheckBox />
        <!-- <ExampleDropdown /> -->
        <!-- <Popper /> -->
        <ExampleTextarea />
        <ExampleButton />
    </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import ExampleRadio from "../../example/example-radio.vue";
import ExampleCheckBox from "../../example/example-checkbox.vue";
import Popper from "../../example/example-popper.vue";
import ExampleDropdown from "../../example/example-dropdown.vue";
import ExampleTextarea from "../../example/example-textarea.vue";
import ExampleButton from "../../example/example-button.vue";
@Component({
    components: {
        ExampleRadio,
        ExampleCheckBox,
        ExampleDropdown,
        Popper,
        ExampleTextarea,
        ExampleButton
    }
})
export default class Home extends Vue {}
</script>
