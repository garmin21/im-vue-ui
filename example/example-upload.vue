<template>
    <div>
        <h1>Upload</h1>
        <section style="width: 300px; height: 150px">
            <JmUpload :action="action" />
        </section>
    </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import JmUpload from "../package/upload";

@Component({
    components: {
        JmUpload
    }
})
export default class ExampleUpload extends Vue {
    public action = `http://localhost:3000/upload`;
}
</script>

<style lang="less" scoped>
.image {
    object-fit: cover;
}
</style>
