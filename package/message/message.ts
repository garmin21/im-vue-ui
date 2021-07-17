import Vue from "vue";
import JmMessage from "./message.vue";
const MessageConstructor = Vue.extend(JmMessage);
let seed = 1;

const Message = function (message: string) {
    const MessageInstance = new MessageConstructor({
        propsData: {
            message
        }
    });
    let id = `message-${seed}`;

    Object.defineProperty(MessageInstance, "id", {
        value: id
    });
    console.log(MessageInstance, "ppppppppp");
    const vm = MessageInstance.$mount();
    const el = vm.$el;
    vm["visible"] = true;
    document.body.appendChild(el);
    return vm;
};
export { Message };
