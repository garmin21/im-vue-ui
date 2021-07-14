<template>
    <section :class="classes">
        <UploadDragger
            v-if="drag"
            @handle-files="startUpload"
            @handle-click="handelUploadClick"
        />
        <div
            v-else
            :class="[`${prefixcls}__upload_btn`]"
            @click="handelUploadClick"
        >
            <slot />
        </div>
        <UploadImagesPreview
            @on-delete="handelClickDelete"
            v-if="fileList.length"
            :fileList="fileList"
            :preview="preview"
        />
        <input
            :class="[`${prefixcls}__upload__file`]"
            type="file"
            :multiple="multiple"
            :accept="accept"
            :name="name"
            @change="handleChangeFile"
            ref="JmFile"
        />
    </section>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import { PREFIXCLS } from "../theme-chalk/var";
import { UploadFile, FileList, FileListItem } from "./index";
import { uploadImage, UploadImageOption } from "./request/request";
import UploadImagesPreview from "./components/upload-images-preview.vue";
import UploadDragger from "./components/upload-dragger.vue";
@Component({
    components: {
        UploadImagesPreview,
        UploadDragger
    }
})
export default class JmUpload extends Vue {
    /**
     * 是否多选
     */
    @Prop({ type: Boolean, default: false })
    public multiple!: boolean;

    /**
     * 是否开启图片预览
     */
    @Prop({ type: Boolean, default: false })
    public preview!: boolean;

    /**
     * 是否开启拖拽上传
     */
    @Prop({ type: Boolean, default: false })
    public drag!: boolean;

    /**
     * 上传文件格式
     */
    @Prop({
        type: String,
        default: "image/gif,image/jpeg,image/jpg,image/png,image/svg"
    })
    public accept!: string;
    /**
     * 文件名
     */
    @Prop({
        type: String,
        default: "file"
    })
    public name!: string;

    /**
     * 额外需要上传的参数
     */
    @Prop({
        type: Object,
        default: () => {
            return {};
        }
    })
    public formData!: object;

    /**
     * 上传图片限制
     */
    @Prop({
        type: Number,
        default: 1
    })
    public limit!: number;

    /**
     * 上传地址
     */
    @Prop({
        type: String,
        required: true,
        validator: (value: string) => {
            return !value;
        }
    })
    public action!: string;

    /**
     * 上传图片列表
     */
    @Prop({
        type: Array,
        required: true
    })
    public fileList!: FileList;

    /**
     * 上传前的钩子函数
     */
    @Prop({
        type: Function
    })
    public beforeUpload?: () => void;

    /**
     * 上传成功回调函数
     */
    @Prop({ type: Function })
    public onSuccess?: (evt: any) => any;

    /**
     * 上传失败回调函数
     */
    @Prop({ type: Function })
    public onHandelError?: (evt: any) => any;

    /**
     * 上传进度回调函数
     */
    @Prop({ type: Function })
    public onHandelProgress?: (evt: any) => any;

    public prefixcls = PREFIXCLS;
    public files: UploadFile[] = [];
    public tempIndex = 0;

    public get classes() {
        return [`${this.prefixcls}__upload`];
    }

    public handleChangeFile(evt: Event) {
        const fileList: File[] = Array.from(
            (evt.target as HTMLInputElement).files || []
        );

        const total = fileList.length + this.files.length;

        if (this.limit < total) {
            return console.error(
                "The agreed upload quantity does not match!!!"
            );
        }
        this.startUpload(fileList);
    }

    public startUpload(fileList: File[]) {
        fileList.forEach((file) => {
            const resFile = this.normalizeFiles(file);
            this.beforeUpload && this.beforeUpload();
            this.upload(resFile);
        });
    }
    // request upload
    public async upload(file: UploadFile) {
        const options: UploadImageOption = {
            url: this.action,
            name: this.name,
            file: file.raw,
            formData: this.formData,
            onSuccess: this.handleSuccess.bind(this, file),
            onHandelError: this.handleError.bind(this, file),
            onHandelProgress: this.handleProgress.bind(this, file)
        };

        file.status = "pending";
        await uploadImage(options);
    }

    public normalizeFiles(rawFile: File) {
        const file: UploadFile = {
            name: rawFile.name,
            size: rawFile.size,
            type: rawFile.type,
            percent: 0,
            uid: Date.now() + this.tempIndex++,
            status: "init",
            raw: rawFile
        };
        this.files.push(file);
        return file;
    }

    public handelUploadClick() {
        (this.$refs.JmFile as HTMLElement).click();
    }

    public handelClickDelete(item: FileListItem[]) {
        this.$emit("on-delete", item);
    }

    public handleProgress(file: UploadFile, event: any) {
        file.percent = event.percent;
        this.onHandelProgress && this.onHandelProgress(file);
    }

    public handleSuccess(file: UploadFile, response: any) {
        console.log(response);
        if (response) {
            file.status = "success";
            const { uid } = file;
            const {
                data: { path, filename }
            } = response;
            const newFiles = this.fileList.concat([
                { uid, name: filename, url: path }
            ] as FileList);
            this.onSuccess && this.onSuccess(newFiles);
        }
    }

    public handleError(file: UploadFile, error: any) {
        file.status = "failure";
        this.onHandelError && this.onHandelError(error);
    }
}
</script>

<style lang="less" scoped>
@import "../theme-chalk/var.less";
.@{--prefixcls}__upload {
    position: relative;
    width: 100%;
    height: 100%;
    cursor: pointer;
}

.@{--prefixcls}__upload__file {
    display: none;
    cursor: pointer;
}

.@{--prefixcls}__upload_btn {
    width: inherit;
    height: inherit;
}
</style>
