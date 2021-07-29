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
export const getCurrentMonthLastDay = (year: number, month: number) => {
    return new Date(year, month + 1, 0).getDate();
};

//
// https://stackoverflow.com/a/37803823/12819402
export const getPrevMonthLastDay = (year: number, month: number) => {
    return new Date(year, month, 0).getDate();
};

// https://stackoverflow.com/a/1090817/12819402
export const cloneDate = (date: Date) => {
    return new Date(date.getTime());
};

/**
 *
一月 Jan. January

二月 Feb. February

三月 Mar. March

四月 Apr. April

五月 May. May

六月 Jun. June

七月 Jul. July

八月 Aug. August

九月 Sept. September

十月 Oct. October

十一月 Nov. November

十二月 Dec. December
 */
