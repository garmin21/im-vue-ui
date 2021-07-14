<template>
    <div
        :class="classes"
        @drop="onDrop"
        @dragenter="onDragenter"
        @dragleave="onDragleave"
        @dragover="onDragover"
        @click="onClick"
    >
        <div :class="[`${prefixcls}__tips--module`]">
            <img src="../icon/upload.svg" alt="icon" width="24" height="24" />
            <p :class="[`${prefixcls}__tips--text`]">Upload</p>
        </div>
    </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import { PREFIXCLS } from "../../theme-chalk/var";

@Component<UploadDragger>({})
export default class UploadDragger extends Vue {
    public get prefixcls() {
        return PREFIXCLS;
    }

    public get classes() {
        return [`${this.prefixcls}__upload--dragger`];
    }

    public onDragenter(evt: Event) {
        evt.stopPropagation();
        evt.preventDefault();
    }

    public onDragleave(evt: Event) {
        evt.stopPropagation();
        evt.preventDefault();
    }

    public onDragover(evt: Event) {
        evt.stopPropagation();
        evt.preventDefault();
    }

    public onDrop(evt: DragEvent) {
        evt.stopPropagation();
        evt.preventDefault();
        const files = evt.dataTransfer?.files;
        if (!files) return;
        this.$emit("handle-files", files);
    }

    public onClick(evt: Event) {
        this.$emit("handle-click", evt);
    }
}
</script>

<style lang="less" scoped>
@import "../../theme-chalk/var.less";

.@{--prefixcls}__upload--dragger {
    --text-color: #333;

    display: flex;
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: center;
    border: 1px dotted #f5f6f7;
}

.@{--prefixcls}__tips--module {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.@{--prefixcls}__tips--text {
    margin-top: 8px;
    color: var(--text-color);
    font-size: 14px;
    line-height: 20px;
}
</style>
