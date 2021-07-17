import Vue, { DirectiveOptions } from 'vue';
import { DirectiveBinding } from 'vue/types/options'
import { VNode } from 'vue/types/vnode';

interface Obj {
    el:HTMLElement,
    binding:DirectiveBinding,
    vnode: VNode
}


const nodeList:Element[] = [];
const ctx = '@@clickoutsideContext';

let startClick:MouseEvent | null = null;
let seed = 0;

!Vue.prototype.$isServer && document.addEventListener('mousedown', e => startClick = e);
!Vue.prototype.$isServer && document.addEventListener('mouseup', e => {
    nodeList.forEach(n => n[ctx].documentHandler(e, startClick))
})

export default {
    bind(el, binding, vnode){
        nodeList.push(el);
        const id = seed ++;
        el[ctx] = {
            id,
            documentHandler: createDocumentHandler({
                el,
                binding,
                vnode
            }),
            methodName: binding.expression,
            bindingFn: binding.value
        }
    },
    update(el, binding, vnode){
        el[ctx].documentHandler = createDocumentHandler({
            el, 
            binding, 
            vnode
        });
        el[ctx].methodName = binding.expression;
        el[ctx].bindingFn = binding.value;
    },
    unbind(el){
        let len = nodeList.length;
        for (let i = 0; i < len; i++) {
            if(nodeList[i][ctx].id === el[ctx].id){
                nodeList.splice(i, 1);
                break;
            }
            
        }
    }
} as DirectiveOptions;


function createDocumentHandler(obj:Obj){
    const { el, vnode, binding } = obj;
    return function(mouseup: MouseEvent, mousedown:MouseEvent){
        const mousedownNode = mousedown.target as HTMLElement;
        const mouseupNode = mouseup.target as HTMLElement;

        if(
            !vnode || 
            !vnode.context || 
            !mouseup.target || 
            !mousedown.target ||
            el.contains(mouseupNode) || 
            el.contains(mousedownNode)
            ) return;

            console.log(vnode.context);
        
            if(binding.expression && el[ctx].methodName && vnode.context[el[ctx].methodName]){
                vnode.context[el[ctx].methodName]()
            } else {
                el[ctx].bindingFn && el[ctx].bindingFn();
            }
    }
}
