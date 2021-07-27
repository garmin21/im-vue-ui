<template>
    <div :class="classes">
        <div :class="[`${prefixcls}__days__header`]">
            <span :class="[`arrow`,`${prefixcls}__left-arrow`]">
                <img class="left-arrow" src="../icons/left-arrow.svg" width="12" height="12" alt="leftArrow">
            </span>
            <span :class="[`${prefixcls}__header__text`]">2021-7-21</span>
            <span :class="[`arrow`,`${prefixcls}__right-arrow`]">
                <img class="right-arrow" src="../icons/right-arrow.svg" width="12" height="12" alt="rightArrow">
            </span>
        </div>
        <div :class="[`${prefixcls}__days__main`]">
            <div :class="[`${prefixcls}__days__weeks`]">
                <div :class="[`${prefixcls}__week__cell`]" v-for="week of weeks" :key="week">{{ week }}</div>
            </div>
            <div :class="[`${prefixcls}__days__rows`]">
                <div :class="[`${prefixcls}__days__cell`]"></div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import { PREFIXCLS } from "../../theme-chalk/var";
// import { getYearMonthDay } from '../../../tool/date'

@Component<JmPickerDays>({})
export default class JmPickerDays extends Vue {

    public weeks =  ['一', '二', '三', '四', '五', '六', '日']
    
    
    public get prefixcls() {
        return PREFIXCLS;
    }

    public get classes() {
        const { prefixcls } = this;
        return [`${prefixcls}__picker__days`];
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

// .@{--prefixcls}__left-arrow {
//     // padding-left: 16px;
// }

// .@{--prefixcls}__right-arrow {
//     // padding-right: 16px;
// }

</style>
