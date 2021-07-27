<template>
    <div :class="classes">
        <input type="text" v-model="dateValue" @focus="handelFocus" @blur="handelBlur"  />
        <transition name="fade">
            <div v-if="visible">
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

import JmPickerDays from './components/picker-days.vue'

@Component<JmDatePicker>({
    components:{
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
        console.log(datValue,'l;;;;;;')
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

// .@{--prefixcls}__date__picker {
// }

.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
}
</style>
