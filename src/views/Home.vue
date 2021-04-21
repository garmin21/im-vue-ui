<template>
    <div class="home">
        <ExampleRadio />
        <ExampleCheckBox />
        <!-- <ExampleDropdown /> -->
        <!-- <Popper /> -->
        <ExampleTextarea />
        <ExampleButton />
        <ExampleTree />
        <ExampleInputNumber />
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
import ExampleTree from "../../example/example-tree.vue";
import ExampleInputNumber from "../../example/example-input-number.vue";
@Component({
    components: {
        ExampleInputNumber,
        ExampleRadio,
        ExampleCheckBox,
        ExampleDropdown,
        Popper,
        ExampleTextarea,
        ExampleButton,
        ExampleTree
    }
})
export default class Home extends Vue {}
</script>
