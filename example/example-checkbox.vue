<template>
    <section>
        <h1>checkbox</h1>
        <JmCheckBox label="1" v-model="checked" />
        <JmCheckBox label="2" v-model="checked" :disabled="true" />

        <p>
            <JmCheckBoxGroup v-model="checkList">
                <JmCheckBox label="1" />
                <JmCheckBox label="2" />
                <JmCheckBox label="3" />
            </JmCheckBoxGroup>
        </p>
        <p>
            <JmCheckBoxGroup v-model="checkList1">
                <JmCheckBox :label="1" />
                <JmCheckBox :label="2" />
                <JmCheckBox :label="3" />
            </JmCheckBoxGroup>
        </p>
        <p>
            <h5>indeterminate</h5>
            <label>
                <JmCheckBox 
                    @change="handleCheckAllChange" 
                    :indeterminate="indeterminate" 
                    v-model="checkAll" >
                    全选
                </JmCheckBox>
            </label>
            <JmCheckBoxGroup 
                v-model="checkList2" 
                @change="handleCheckedCitiesChange">
                <JmCheckBox :label="1" />
                <JmCheckBox :label="2" />
                <JmCheckBox :label="3" />
            </JmCheckBoxGroup>
        </p>
    </section>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import JmCheckBox, {CheckboxResult, CheckBoxValue} from "../package/checkbox";
import JmCheckBoxGroup from "../package/checkbox-group";
@Component({
    components: {
        JmCheckBox,
        JmCheckBoxGroup
    }
})
export default class ExampleCheckBox extends Vue {
    public checked = true;

    public checkList = ["1", "2", "3"];
    public checkList1 = [1, 2, 3];
    public checkList2 = [1, 2];

    public checkAll = false;
    public indeterminate = true;


    public handleCheckAllChange(val:CheckboxResult) {
        this.checkList2 = val.checked ? this.checkList1 : [];
        this.indeterminate = false;
    }

    public handleCheckedCitiesChange(arr: CheckBoxValue){
        let checkedCount = arr.length;
        this.checkAll = checkedCount === this.checkList1.length;
        this.indeterminate = checkedCount > 0 && checkedCount < this.checkList1.length;
    }
}
</script>
