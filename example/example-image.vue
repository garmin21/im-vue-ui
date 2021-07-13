<template>
    <div class="dorme">
        <JmImageViewer />
    </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import JmImageViewer from "../package/image/image-viewer.vue";

@Component<ExampleImage>({
    components: {
        JmImageViewer
    }
})
export default class ExampleImage extends Vue {}
</script>

<style lang="less" scoped>
.dorme {
    width: inherit;
    height: inherit;
}
</style>
