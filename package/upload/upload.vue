<template>
    <section :class="classes">
        <div
            v-if="!params.src"
            :class="[`${prefixcls}__upload_btn`]"
            @click="handelUploadClick"
        >
            <slot>
                <div class="tips-module">
                    <img
                        src="./icon/upload.svg"
                        alt="icon"
                        width="24"
                        height="24"
                    />
                    <p class="tips-text">Upload</p>
                </div>
            </slot>
        </div>
        <div v-if="params.src" :class="[`${prefixcls}__upload_image`]">
            <img
                :src="params.src"
                class="image"
                width="300"
                height="150"
                :alt="params.name"
                :title="params.name"
            />
        </div>
        <input
            :class="[`${prefixcls}__upload__file`]"
            type="file"
            :multiple="multiple"
            :accept="accept"
            :name="name"
            @change="hadelChangeFile"
            ref="JmFile"
        />
    </section>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import { PREFIXCLS } from "../theme-chalk/var";
import { UploadFile, UploadParams } from "./index";
import { uploadImage, UploadImageOption } from "./request/request";
@Component({})
export default class JmUpload extends Vue {
    /**
     * 是否多选
     */
    @Prop({ type: Boolean, default: false })
    public multiple!: boolean;
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
    public onHandelSuccess?: (evt: any) => any;

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

    // ----
    public params: UploadParams = {
        name: "",
        src: ""
    };
    // ----

    public get classes() {
        return [`${this.prefixcls}__upload`];
    }

    public hadelChangeFile(evt: Event) {
        const fileList: File[] = Array.from(
            (evt.target as HTMLInputElement).files || []
        );
        const total = fileList.length + this.files.length;

        if (this.limit < total) {
            return console.error("上传数量不匹配");
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
    public upload(file: UploadFile) {
        const options: UploadImageOption = {
            url: this.action,
            name: this.name,
            file: file.raw,
            formData: this.formData,
            onHandelSuccess: this.handleSuccess.bind(this, file),
            onHandelError: this.handleError.bind(this, file),
            onHandelProgress: this.handleProgress.bind(this, file)
        };

        file.status = "pending";
        const res = uploadImage(options);
        res.then(options.onHandelSuccess, options.onHandelError);
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

    public handleProgress(file: UploadFile, event: any) {
        file.percent = event.percent;
        this.onHandelProgress && this.onHandelProgress(file);
    }

    public handleSuccess(file: UploadFile, response: any) {
        if (response) {
            file.status = "success";
            this.params.src = response.data.path;
            this.params.name = response.data.filename;
            this.onHandelSuccess && this.onHandelSuccess(response);
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
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
    border: 1px dotted #e0e0e0;
    border-radius: 12px;
    cursor: pointer;
}

.@{--prefixcls}__upload__file {
    width: 100%;
    height: 100%;
    display: none;
    cursor: pointer;
}

.@{--prefixcls}__upload_btn {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}

.@{--prefixcls}__upload_image {
    width: 100%;
    height: 100%;
    .image {
        object-fit: cover;
    }
}

.tips-module {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
.tips-text {
    margin-top: 8px;
    color: #333;
    font-size: 14px;
    line-height: 20px;
}
</style>
