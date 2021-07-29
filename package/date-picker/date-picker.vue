<template>
    <div :class="classes" v-clickoutside="handelBlur">
        <JmInput v-model="dateValue" @focus="handelFocus" />
        <transition name="fade">
            <!-- 这里到时候换成 popover  -->
            <div v-if="visible" :class="[`${prefixcls}__picker--visible`]">
                <component :is="isComponent" :dateValue="dateValue" />
            </div>
        </transition>
    </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import { PREFIXCLS } from "../theme-chalk/var";
import { getYearMonthDay } from "../../tool/date";
import { ComponentView } from "./type";

import JmInput from "../input";

import JmPickerDays from "./components/picker-days.vue";

import clickoutside from "../../tool/clickoutside";

// 0 一月份
// 1 二月份
// 2 三月份

@Component<JmDatePicker>({
    components: {
        JmInput,
        JmPickerDays
    },
    directives: {
        clickoutside
    }
})
export default class JmDatePicker extends Vue {
    // 日期
    @Prop({
        type: Date,
        default: () => new Date()
    })
    public value!: Date;

    // 类型
    @Prop({
        type: String,
        default: ComponentView.DAYS
    })
    public type!: ComponentView;

    public visible = false;

    public get prefixcls() {
        return PREFIXCLS;
    }

    public get isComponent() {
        switch (this.type) {
            case ComponentView.DAYS:
                return "JmPickerDays";
        }
    }

    public get classes() {
        const { prefixcls } = this;
        return [`${prefixcls}__date__picker`];
    }

    public get dateValue() {
        const [year, month, day] = getYearMonthDay(this.value);
        return `${year}-${month + 1}-${day}`;
    }
    // 需求：日期格式化类
    // 封装一个输入框个格式化的类处理
    public set dateValue(datValue: string) {
        const reg = /(\d+)-(\d+)-(\d+)/;
        const matched = datValue.match(reg);
        if (matched) {
            const [, year, month, day] = matched.map(Number);
            this.$emit("input", new Date(year, month + 1, day));
        }
    }

    public handelFocus() {
        this.visible = true;
    }

    public handelBlur() {
        this.visible = false;
    }
}
</script>

<style lang="less" scoped>
@import "../theme-chalk/var.less";

.@{--prefixcls}__date__picker {
    position: relative;
}

.@{--prefixcls}__picker--visible {
    padding: 20px;
    box-shadow: 0 10px 50px 0 rgba(0, 0, 0, 0.2);
    display: inline-block;
    border-radius: 6px;
    position: absolute;
    top: calc(100% + 10px);
    left: 36px;
    z-index: 10;
    background-color: @--color-global;
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
    opacity: 0;
}
</style>
