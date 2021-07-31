/**
 * 数组转tree
 */

interface Children {
    id: number;
    name: string;
    pid: number;
    children?: Children[] | [];
}

export const treeArr: Children[] = [
    { id: 1, name: "部门1", pid: 0 },
    { id: 2, name: "部门2", pid: 1 },
    { id: 3, name: "部门3", pid: 1 },
    { id: 4, name: "部门4", pid: 3 },
    { id: 5, name: "部门5", pid: 4 }
];

// 寻常函数写法
export const arrToTree = (arr: Array<Children>) => {
    return arr.filter((noeItem) => {
        const children = arr.filter((itemTow) => {
            return noeItem.id === itemTow.pid;
        });
        if (children.length) noeItem.children = children;
        return noeItem.pid === 0;
    });
};

// 面向对象写法
export default class ArrToTree {
    private arr: Children[];

    public constructor(arr: Children[]) {
        this.arr = arr;
    }

    public getTree() {
        if (!Array.isArray(this.arr)) return arr;
        return this.arrToTree(this.arr);
    }

    public arrToTree(arr: Array<Children>) {
        return arr.filter((noeItem) => {
            const children = arr.filter((itemTow) => {
                return noeItem.id === itemTow.pid;
            });
            if (children.length) noeItem.children = children;
            return noeItem.pid === 0;
        });
    }
}

export const arrToTreeMap = (items: Array<Children>) => {};
