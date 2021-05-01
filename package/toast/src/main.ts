import Vue from 'vue';
import Toast from './index.vue';
import { ToastProps } from './props';

const ToastConstructor = Vue.extend(Toast);

let instance: any = null;
let closeTimeoutEvent: any = null;

ToastConstructor.prototype.remove = function() {
    this.shown = false;
    if (this.$el.parentNode) {
        this.$el.parentNode.removeChild(this.$el);
    }
    instance = null;
};

const getAnInstance = (props: Partial<ToastProps>) => {
    return new ToastConstructor({
        propsData: props,
        el: document.createElement('div')
    });
};

export const toast = function(opts: Partial<ToastProps>): Promise<void> {
    return new Promise((resolve) => {
        if (typeof opts === 'string') {
            opts = {
                message: opts
            };
        }

        // 处理关闭方法
        if (typeof opts.onClose !== 'function') {
            opts.onClose = () => {};
        }
        const onClose = opts.onClose;
        opts.onClose = () => {
            onClose();
            instance.remove();
            clearTimeout(closeTimeoutEvent);
            resolve();
        };

        // 如果前一个toast存在， 则先清理它
        if (instance) {
            instance.onClose();
            instance = null;
        }

        // 创建新的toast
        instance = getAnInstance(opts);
        document.body.appendChild(instance.$el);
        instance.shown = true;

        // 自动销毁
        if (instance.duration > 0) {
            clearTimeout(closeTimeoutEvent);
            closeTimeoutEvent = setTimeout(() => {
                opts.onClose && opts.onClose();
            }, instance.duration);
        }
    });
};

export default Toast;
