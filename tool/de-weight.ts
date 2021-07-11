// /**
//  * 对象去重
//  */

// const ObjectDeduplication = <T>(list: Array<T>, uid: string) => {
//     const numbers = list.map((item) => item[uid]);
//     console.log(numbers);
//     return list.filter((item) => {
//         console.log(!new Set(numbers).has(item[uid]));
//     });
// };

// interface Item {
//     uid: string;
// }

// const arr: Item[] = [
//     { uid: "1" },
//     { uid: "3" },
//     { uid: "3" },
//     { uid: "3" },
//     { uid: "4" }
// ];

// const result = ObjectDeduplication<Item>(arr, "uid");

// console.log(result);
