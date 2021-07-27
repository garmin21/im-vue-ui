<template>
    <div :class="classes">
        <JmInput  v-model="dateValue" @focus="handelFocus" @blur="handelBlur"  />
        <transition name="fade">
            <!-- v-if="visible" -->
            <!-- 这里到时候换成 popover  -->
            <div :class="[`${prefixcls}__picker--visible`]">
                <component :is="isComponent"></component>
            </div>
        </transition>
    </div>
</template>

<script lang="ts">
import { Vue, Component,Prop } from "vue-property-decorator";
import { PREFIXCLS } from "../theme-chalk/var";
import { getYearMonthDay } from '../../tool/date';
import { ComponentView } from './type';

import JmInput from '../input';

import JmPickerDays from './components/picker-days.vue'

@Component<JmDatePicker>({
    components:{
        JmInput,
        JmPickerDays
    }
})
export default class JmDatePicker extends Vue {

    // 日期
    @Prop({
        type: Date,
        default: () => new Date()
    })
    public value !: Date

    // 类型
    @Prop({
        type: String,
        default: ComponentView.DAYS
    })
    public type !: ComponentView


    public visible = false;

    public get prefixcls() {
        return PREFIXCLS;
    }

    public get isComponent() {
        switch (this.type) {
            case ComponentView.DAYS:
                return 'JmPickerDays'
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
    
    public set dateValue(datValue: string) {
        const reg = /(\d+)-(\d+)-(\d+)/;
        const matched = datValue.match(reg);
        if (matched) {
            const [, year, month, day] = matched.map(Number);
            this.$emit('input', new Date(year, month+1, day));
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

.@{--prefixcls}__picker--visible {
    padding: 20px;
    height: 100%;
    box-shadow: 0 10px 50px 0 rgba(0, 0, 0, 0.2);
    display: inline-block;
    border-radius: 6px;

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
