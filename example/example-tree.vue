<template>
    <div>
        <h1>tree</h1>
        <section>
            <h3>基础的树形结构展示</h3>
            <JmTree :data="data1" />
        </section>
        <section>
            <h3>待完成 异步加载</h3>
        </section>
        <section>
            <h3>待完成 节点拖拽</h3>
        </section>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import JmTree, { Children } from "../package/Tree";
@Component({
    components: {
        JmTree
    }
})
export default class ExampleTree extends Vue {
    public get data1(): Children[] {
        return [
            {
                label: "雪梨",
                id: "1",
                children: [
                    {
                        label: "苹果",
                        id: "2",
                        children: [
                            {
                                label: "梨子",
                                id: "3"
                            },
                            {
                                label: "桃子",
                                id: "4"
                            }
                        ]
                    }
                ]
            }
        ];
    }
}
</script>
