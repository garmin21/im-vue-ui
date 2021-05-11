<template>
    <div>
        <h1>Textarea</h1>
        <div class="dorme">
            <section>
                <h3>普通textarea</h3>
                <JmTextarea
                    v-model="value1"
                    :placeholder="'请输入内容'"
                    :label="'标题'"
                />
            </section>
            <section>
                <h3>显示字数统计</h3>
                <JmTextarea
                    v-model="value1"
                    :placeholder="'请输入内容'"
                    :label="'标题'"
                    :limirShow="true"
                    :maxlength="20"
                />
            </section>
            <section>
                <h3>高度自定义，拉伸</h3>
                <JmTextarea
                    v-model="value1"
                    :placeholder="'请输入内容'"
                    :label="'标题'"
                    autosize
                    :rows="3"
                />
            </section>
            <section>
                <h3>只读</h3>
                <JmTextarea
                    :value="'我是只读的textarea'"
                    :placeholder="'请输入内容'"
                    :label="'标题'"
                    :readonly="true"
                />
            </section>
            <section>
                <h3>禁用</h3>
                <JmTextarea
                    :value="'我是只读的textarea'"
                    :placeholder="'请输入内容'"
                    :label="'标题'"
                    :disabled="true"
                />
            </section>
        </div>
    </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import JmTextarea from "../package/textarea";

@Component({
    components: {
        JmTextarea
    }
})
export default class ExampleTextarea extends Vue {
    public value1 = "";
}
</script>

<style lang="less" scoped>
.dorme {
    width: 375px;
    color: white;
}
</style>
