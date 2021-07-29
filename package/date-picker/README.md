### 1. 获取当前月份天数

```ts
export const getCurrentMonthLastDay = (year: number, month: number) => {
    return new Date(year, month + 1, 0).getDate();
};
```

new Date()第 3 个参数默认为 1，就是每个月的 1 号，把它设置为 0 时， new Date()会返回上一个月的最后一天，然后通过 getDate()方法得到天数

### 容易弄混的一个问题：月份 0 ~ 11
