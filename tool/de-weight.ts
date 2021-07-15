/**
 * 对象去重
 */

const ObjectDeduplication = <T>(list: Array<T>, pix: string) => {
    return Object.values(
        list.reduce((prev, cur) => {
            prev[cur[pix]] = prev;
            return prev;
        }, {})
    );
};

interface Item {
    uid: number;
    name: string;
}

const arr: Item[] = [
    {
        uid: 1,
        name: "eeeeeeeeeee"
    },
    {
        uid: 2,
        name: "dddddddddd"
    },
    {
        uid: 1,
        name: "fffffffff"
    },
    {
        uid: 3,
        name: "cccccccc"
    },
    {
        uid: 4,
        name: "nnnnnnnnnn"
    },
    {
        uid: 6,
        name: "jjjjjjjjjjjj"
    },
    {
        uid: 4,
        name: "99999999999"
    }
];

console.log(ObjectDeduplication<Item>(arr, "uid"));
