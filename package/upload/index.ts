import JmUpload from "./upload.vue";

export interface UploadFile {
    name: string; // 文件名
    size: number; // 文件尺寸
    type: string; // 文件类型
    percent: number; // 上传进度
    uid: number; // 唯一标识
    status: string; // 文件上传时的状态
    raw: File; // 原生文件对象
}

export type FileListItem = { name: string; url: string } & Pick<
    UploadFile,
    "uid"
>;
export type FileList = Array<FileListItem>;

export default JmUpload;
