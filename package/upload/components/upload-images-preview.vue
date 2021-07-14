<template>
    <div :class="classes">
        <ul :class="[`${prefixcls}__images__map`]">
            <li
                :class="[`${prefixcls}__map--column`]"
                v-for="item of fileList"
                :key="item.uid"
                @click="handelImagePreview(item.url)"
                title="preview image"
            >
                <div :class="[`${prefixcls}__image`]">
                    <img :src="item.url" width="40" height="40" alt="" />
                    <span :class="[`${prefixcls}__name`]">{{ item.name }}</span>
                </div>
                <span
                    :class="[`${prefixcls}__icon--delete`]"
                    @click.stop="handelClickDelete(item)"
                >
                    <img
                        src="../icon/delete.svg"
                        alt="delete"
                        width="20"
                        height="20"
                    />
                </span>
            </li>
        </ul>
    </div>
</template>

<script lang="ts">
// 暂时不做进度条，处理
// 后续需求处理
// 瞄准 elemet-ui image 的处理
import { Vue, Component, Prop } from "vue-property-decorator";
import { PREFIXCLS } from "../../theme-chalk/var";
import { UploadItem } from "../index";
import ImageViewer from "../../image/image-viewer.vue";

@Component<UploadImagesPreview>({})
export default class UploadImagesPreview extends Vue {
    // 文件列表
    @Prop({ type: Array, required: true })
    public fileList!: UploadItem[];

    /**
     * 是否开启图片预览
     */
    @Prop({ type: Boolean, default: false })
    public preview!: boolean;

    public get prefixcls() {
        return PREFIXCLS;
    }

    public get classes() {
        return [`${this.prefixcls}__upload__images--preview`];
    }

    public handelClickDelete(item: UploadItem) {
        const deleteArr = this.fileList.slice(0);
        const index = this.fileList.findIndex((file) => file.uid === item.uid);
        index >= 0 && deleteArr.splice(index, 1);
        this.$emit("on-delete", deleteArr);
    }

    // 图片预览
    public async handelImagePreview(url: string) {
        if (this.preview) {
            await ImageViewer.show(url);
        }
    }
}
</script>

<style lang="less" scoped>
@import "../../theme-chalk/var.less";

.@{--prefixcls}__upload__images--preview {
    --color: #ccc;
    --text-color: #f90;

    display: block;
    width: 100%;
    height: 40px;
}

.@{--prefixcls}__images__map {
    margin: 0;
    padding: 0;
    width: inherit;
    list-style: none;
}

.@{--prefixcls}__map--column {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 5px 0;
    border: 1px dotted var(--color);
    padding: 10px;

    &:last-child {
        margin-bottom: 0;
    }
}

.@{--prefixcls}__image {
    display: flex;
    justify-content: flex-start;
    align-items: center;
}

.@{--prefixcls}__name {
    padding-left: 10px;
    font-size: 14px;
    color: var(--text-color);
}
</style>
