export interface ToastProps {
    /**
     * 类名
     */
    classes: string;

    /**
     * 图标类型
     */
    type: 'success' | 'info' | 'warning' | 'error'| 'loading' | 'none';

    /**
     * 自动关闭秒数
     */
    duration: number;

    /**
     * 提示的消息内容
     */
    message: string;

    /**
     * 关闭的回调
     */
    onClose: () => void;
}
