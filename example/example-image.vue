<template>
    <div class="dorme">
        <h1>image</h1>
        <JmButton @click="imagePreview">图片预览</JmButton>
    </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import JmImageViewer from "../package/image/image-viewer.vue";
import JmButton from "../package/button";

@Component<ExampleImage>({
    components: {
        JmButton
    }
})
export default class ExampleImage extends Vue {
    public imagePreview() {
        JmImageViewer.show(
            "https://fuss10.elemecdn.com/1/8e/aeffeb4de74e2fde4bd74fc7b4486jpeg.jpeg"
        );
    }
}
</script>
