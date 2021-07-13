import Vue, { VueConstructor } from "vue";

export interface RenderComponentOptions {
    props?: object;
}

// 组件销毁事件名
export const destroyEventType = "destroy-component";

// 组件销毁，并且从 dom 上移除
export function destroyComponent(vm: Vue) {
    const el = vm.$el;
    vm.$destroy();
    if (el && el.parentNode) {
        el.parentNode.removeChild(el);
    }
}

export const renderComponent = (
    Constructor: VueConstructor,
    options?: RenderComponentOptions
) => {
    const instance = new Constructor({
        propsData: options?.props
    });
    const vm = instance.$mount();
    const parentNode = document.body;
    parentNode.appendChild(vm.$el);

    vm.$once(destroyEventType, () => {
        destroyComponent(vm);
    });

    return vm;
};
