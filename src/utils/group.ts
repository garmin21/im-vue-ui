
/**
 * 获取父级
 * @param vm 
 * @param tagName 
 * @returns 
 */
export function getParentGroup<T extends Vue >(vm:Vue, tagName:string):T | null{
    let parent = vm.$parent;
    while(parent){
        if(parent.$options.name === tagName){
            return parent as T;
        }
        parent = parent.$parent;
    }
    
    return null;
}