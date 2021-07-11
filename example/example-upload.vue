<template>
    <div>
        <h1>Upload</h1>
        <section>
            <h3>普通上传</h3>
            <JmUpload
                :limit="3"
                :action="action"
                :fileList="fileList"
                :onHandelSuccess="onHandelSuccess"
            >
                <JmButton> Click as Upload </JmButton>
            </JmUpload>
        </section>
        <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
    </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import JmUpload, { FileList } from "../package/upload";
import JmButton from "../package/button";
@Component({
    components: {
        JmUpload,
        JmButton
    }
})
export default class ExampleUpload extends Vue {
    public action = `http://localhost:3000/upload`;

    public fileList: FileList = [];

    public onHandelSuccess(fileList: FileList) {
        this.fileList = fileList;
    }
}
</script>

<style lang="less" scoped>
.image {
    object-fit: cover;
}
</style>
