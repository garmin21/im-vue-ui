// 获取年月日
export const getYearMonthDay = (value?: Date | string) => {
    const date = value ? new Date(value) : new Date();
    const day = date.getDate();
    const month = date.getMonth();
    const year = date.getFullYear();
    return [year, month, day];
};

// https://stackoverflow.com/a/13773408/12819402
// https://www.cnblogs.com/liufulin/p/10206730.html
// 获取一个月有多少天
// new Date()第3个参数默认为1，就是每个月的1号，把它设置为0时， new Date()会返回上一个月的最后一天，然后通过getDate()方法得到天数
export const getCurrentMonthLastDay = (year: number, month: number) => {
    return new Date(year, month + 1, 0).getDate();
};

//
// https://stackoverflow.com/a/37803823/12819402
export const getPrevMonthLastDay = (year: number, month: number) => {
    return new Date(year, month, 0).getDate();
};

// https://stackoverflow.com/a/1090817/12819402
export const cloneDate = (date) => {
    return new Date(date.getTime());
};
