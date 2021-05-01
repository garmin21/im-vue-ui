export interface MessageProps{
    /**
     * 状态类型
     */
    type: 'success' | 'info' | 'warning' | 'error' | 'none';

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