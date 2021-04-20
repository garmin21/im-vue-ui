<template>
    <div class="dorme">
        <button>下拉</button>
        <Core />
    </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import Core from "../package/popper/core.vue";

@Component({
    components: {
        Core
    }
})
export default class Popper extends Vue {}
</script>
