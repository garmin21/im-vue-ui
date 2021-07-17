import Vue from "vue";
import JmMessage from "./message.vue";
import { MessageOptions } from "./props";

const MessageConstructor = Vue.extend(JmMessage);

let seed = 1;

const Message = function (options: Partial<MessageOptions>) {
    options = options || {};

    if (typeof options === "string") {
        options = {
            message: options
        };
    }
    const MessageInstance = new MessageConstructor({
        propsData: options
    });

    let id = `message-${seed}`;

    Object.defineProperty(MessageInstance, "id", {
        value: id
    });
    const vm = MessageInstance.$mount();
    const el = vm.$el;
    vm["visible"] = true;
    document.body.appendChild(el);
    return vm;
};
export { Message };
