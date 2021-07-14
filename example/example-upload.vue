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
                :preview="true"
                :multiple="true"
            >
                <JmButton> Click as Upload </JmButton>
            </JmUpload>
        </section>

        <section class="drag-upload">
            <h3>拖拽上传</h3>
            <JmUpload
                :limit="3"
                :action="action"
                :fileList="fileList1"
                :on-success="handelSuccess1"
                @on-delete="handelClickDelete1"
                :preview="true"
                :drag="true"
            >
            </JmUpload>
        </section>
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
    public fileList1: FileListItem[] = [];

    public handelSuccess(fileList: FileListItem[]) {
        this.fileList = fileList;
    }
    public handelSuccess1(fileList: FileListItem[]) {
        this.fileList1 = fileList;
    }

    public async handelClickDelete(fileList: FileListItem[]) {
        this.fileList = fileList;
        await toast({
            type: "success",
            message: "删除成功"
        });
    }

    public async handelClickDelete1(fileList: FileListItem[]) {
        this.fileList1 = fileList;
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

.drag-upload {
    width: 300px;
    height: 150px;
}
</style>
