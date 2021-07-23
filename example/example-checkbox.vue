<template>
    <section>
        <h1>checkbox</h1>
        <h3>基本使用</h3>
        <JmCheckBox label="1" v-model="checked" />
        <p>{{ checked }}</p>

        <h3>禁用</h3>
        <JmCheckBox label="2" v-model="checked1" :disabled="true" />

        <h3>多选组</h3>
        <JmCheckBoxGroup v-model="checkList">
            <JmCheckBox label="1" />
            <JmCheckBox label="2" />
            <JmCheckBox label="3" />
        </JmCheckBoxGroup>

        <p>{{ checkList }}</p>

        <h3>全选和反选 --- indeterminate</h3>
        <JmCheckBox 
            :indeterminate="indeterminate" 
            v-model="checkAll" >
            全选
        </JmCheckBox>        
        <JmCheckBoxGroup 
            v-model="checkLis2" >
            <JmCheckBox label="1" />
            <JmCheckBox label="2" />
            <JmCheckBox label="3" />
        </JmCheckBoxGroup>
        <p>all: {{ checkAll }}</p>
        <p>list: {{ checkLis2 }}</p>
    </section>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import JmCheckBox from "../package/checkbox";
import JmCheckBoxGroup from "../package/checkbox-group";



@Component({
    components: {
        JmCheckBox,
        JmCheckBoxGroup
    }
})
export default class ExampleCheckBox extends Vue {
    public checked = true;
    public checked1 = true;

    public checkList = ["1", "2", "3"];


    public checkLis1 = ["1", "2", "3"]; // 总的数组
    public checkLis2 = ['1', '2','3']; // 变化的数组


    public get checkAll() {
        return this.checkLis2.length === this.checkLis1.length;
    }

    public set checkAll(checkAll:boolean) {
        this.checkLis2 = checkAll ? this.checkLis1 : [];

    }

    public get indeterminate() {
        return this.checkLis2.length > 0 && this.checkLis2.length < this.checkLis1.length;
    }

}
</script>
