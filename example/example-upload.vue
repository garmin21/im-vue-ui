<template>
    <div>
        <h1>Upload</h1>
        <section>
            <h3>普通上传</h3>
            <JmUpload
                :limit="3"
                :action="action"
                :fileList="fileList"
                :on-success="handelSuccess"
                @on-delete="handelClickDelete"
            >
                <JmButton> Click as Upload </JmButton>
            </JmUpload>
        </section>
        <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
    </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import JmUpload, { FileListItem } from "../package/upload";
import JmButton from "../package/button";
import { toast } from "../package/toast/index";
@Component({
    components: {
        JmUpload,
        JmButton
    }
})
export default class ExampleUpload extends Vue {
    public action = `http://localhost:3000/upload`;

    public fileList: FileListItem[] = [];

    public handelSuccess(fileList: FileListItem[]) {
        this.fileList = fileList;
    }

    public async handelClickDelete(fileList: FileListItem[]) {
        this.fileList = fileList;
        await toast({
            type: "success",
            message: "删除成功"
        });
    }
}
</script>

<style lang="less" scoped>
.image {
    object-fit: cover;
}
</style>
