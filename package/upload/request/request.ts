export interface UploadImageOption {
    url: string; // 上传地址
    name: string; // 文件名
    file: File; // 原生文件对象
    formData: Object; // 额外的上传参数
    onSuccess: (evt: any) => any; // 上传成功回调
    onError: (evt: any) => any; // 上传失败回调
    onProgress: (evt: any) => any; // 上传进度回调
}

const createdAxios = (options: UploadImageOption) => {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        const formData = new FormData();

        formData.append(options.name, options.file);

        if (options.formData) {
            Object.entries(options.formData).forEach(([key, value]) => {
                formData.append(key, value);
            });
        }

        xhr.addEventListener(
            "progress",
            (evt: ProgressEvent<XMLHttpRequestEventTarget>) => {
                evt["percent"] = (evt.loaded / evt.total) * 100;
                options.onProgress(evt);
            }
        );

        xhr.open("POST", options.url);
        xhr.send(formData);
        xhr.addEventListener("load", function () {
            if (this.readyState !== 4 && this.status !== 200) {
                return options.onError({
                    code: -10000,
                    message: "error"
                });
            }
            options.onSuccess(JSON.parse(this.response));
            resolve(JSON.parse(this.response));
        });

        xhr.addEventListener("error", () => {
            const params = {
                code: -10000,
                message: "Network Error!"
            };
            options.onError(params);
            reject(params);
        });
    });
};

/*
 *  上传图片
 * */
export const uploadImage = (options: UploadImageOption) => {
    return createdAxios(options);
};
