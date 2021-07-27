<template>
    <div :class="classes">
        <div :class="[`${prefixcls}__days__header`]">
            <span :class="[`arrow`, `${prefixcls}__left-arrow`]">
                <img
                    class="left-arrow"
                    src="../icons/left-arrow.svg"
                    width="12"
                    height="12"
                    alt="leftArrow"
                />
            </span>
            <span :class="[`${prefixcls}__header__text`]">{{ dateValue }}</span>
            <span :class="[`arrow`, `${prefixcls}__right-arrow`]">
                <img
                    class="right-arrow"
                    src="../icons/right-arrow.svg"
                    width="12"
                    height="12"
                    alt="rightArrow"
                />
            </span>
        </div>
        <div :class="[`${prefixcls}__days__main`]">
            <div :class="[`${prefixcls}__days__weeks`]">
                <div
                    :class="[`${prefixcls}__week__cell`]"
                    v-for="week of weeks"
                    :key="week"
                >
                    {{ week }}
                </div>
            </div>
            <div :class="[`${prefixcls}__days__rows`]">
                <div
                    :class="[
                        `arrow`,
                        `${prefixcls}__days__cell`,
                        ...getClass(day)
                    ]"
                    v-for="(day, index) of getDays"
                    :key="`${day}-${index}`"
                >
                    {{ getDay(day) }}
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import { PREFIXCLS } from "../../theme-chalk/var";
import { Props, DateStore } from "../type";
import {
    getYearMonthDay,
    getPrevMonthLastDay
    // getCurrentMonthLastDay
} from "../../../tool/date";

@Component<JmPickerDays>({})
export default class JmPickerDays extends Vue implements Props {
    @Prop({
        type: String,
        required: true
    })
    public dateValue!: string;

    public weeks = ["一", "二", "三", "四", "五", "六", "日"];

    public get prefixcls() {
        return PREFIXCLS;
    }

    public get classes() {
        const { prefixcls } = this;
        return [`${prefixcls}__picker__days`];
    }

    public get getDays() {
        const [year, month] = getYearMonthDay(this.dateValue);

        console.log(year, month, 1); // 2021 7 1 是星期几
        // 0~6 0:表示星期天
        let startWeek = new Date(year, month, 1).getDay();
        if (startWeek === 0) {
            startWeek = 7;
        }
        // 获取上个月的天数
        const prevMonthDay = getPrevMonthLastDay(year, month);
        // 获取当前月份的天数
        // const curLastDay = getCurrentMonthLastDay(year, month);

        return [...this.getPrevMonthDays(prevMonthDay, startWeek)];
    }

    public getPrevMonthDays(days: number, week: number) {
        const [year, month] = getYearMonthDay(this.dateValue);
        const prevMonthDays: DateStore[] = [];
        for (let i = days - week + 2; i <= days; i++) {
            prevMonthDays.push({
                date: new Date(year, month - 1, i),
                status: "prev"
            });
        }
        return prevMonthDays;
    }

    public getDay(dateStore: DateStore) {
        return dateStore.date.getDate();
    }

    public getClass(dateStore: DateStore) {
        const { prefixcls, isSameDay, isToday } = this;
        return [
            dateStore.status === "prev" ? `${prefixcls}__cell--prev` : "",
            dateStore.status === "next" ? `${prefixcls}__cell--next` : "",
            isSameDay(dateStore.date, this.dateValue)
                ? `${prefixcls}__cell--active`
                : "",
            isToday(dateStore.date) ? `${prefixcls}__cell--today` : ""
        ];
    }

    public isSameDay(date1: any, date2: any) {
        const [y1, m1, d1] = getYearMonthDay(date1);
        const [y2, m2, d2] = getYearMonthDay(date2);
        return y1 === y2 && m1 === m2 && d1 === d2;
    }

    public isToday(date: any) {
        const [y1, m1, d1] = getYearMonthDay(date);
        const [y2, m2, d2] = getYearMonthDay();
        return y1 === y2 && m1 === m2 && d1 === d2;
    }

    public log(value: any) {
        console.log(value);
    }
}
</script>

<style lang="less" scoped>
@import "../../theme-chalk/var.less";

.@{--prefixcls}__picker__days {
    font-size: 14px;
}

.@{--prefixcls}__days__header {
    display: flex;
    align-items: center;
}

.@{--prefixcls}__header__text {
    flex: 1;
    text-align: center;
}

.arrow {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 36px;
    height: 36px;
    border-radius: 12px;
    cursor: pointer;
    &:hover {
        background: #e0e0e0;
    }
}

.@{--prefixcls}__days__weeks {
    display: flex;
}

.@{--prefixcls}__week__cell {
    width: 36px;
    height: 36px;
    line-height: 36px;
    text-align: center;
}

.@{--prefixcls}__days__cell {
    border-radius: 50%;
}

.@{--prefixcls}__days__rows {
    display: grid;
    grid-template-columns: repeat(7, 36px);
}

.@{--prefixcls}__cell--prev {
}

.@{--prefixcls}__cell--next {
}

.@{--prefixcls}__cell--active {
}

.@{--prefixcls}__cell--today {
}

// .@{--prefixcls}__left-arrow {
//     // padding-left: 16px;
// }

// .@{--prefixcls}__right-arrow {
//     // padding-right: 16px;
// }
</style>
