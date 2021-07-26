interface MessageOptions {
    /**
     * 渲染类型
     */
    type: "success" | "info" | "warning" | "error" | "none";

    /**
     * 渲染内容
     */
    message: string;

    /**
     * 是否显示关闭按钮
     */
    showClose: boolean;

    /**
     * 渲染时间
     */
    duration: number;

    /**
     * 关闭回调
     */
    onClose: Function;

    /**
     * 自定义样式
     */
    customStyle: Partial<CSSStyleDeclaration>;

    /**
     * 显示和隐藏
     */
    visible: boolean;
}

enum Type {
    success = 'success',
    info = 'info',
    warning = 'warning',
    error = 'error',
    none = 'none'
}

export { MessageOptions, Type };
