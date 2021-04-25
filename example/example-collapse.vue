<template>
    <div>
        <h1>collapse</h1>
        <section>
            <h3>基本用法</h3>
            <JmCollapse v-model="activeNames">
                <JmCollapseItem name="1" label="标题一">
                    1.Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </JmCollapseItem>
                <JmCollapseItem name="2" label="标题二">
                    2.Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </JmCollapseItem>
                <JmCollapseItem name="3" label="标题三" disabled>
                    3.Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </JmCollapseItem>
            </JmCollapse>
        </section>
        <section>
            <h3>无icon样式</h3>
            <JmCollapse v-model="activeNames" :icon="false">
                <JmCollapseItem name="1" label="标题一">
                    1.Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </JmCollapseItem>
                <JmCollapseItem name="2" label="标题二">
                    2.Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </JmCollapseItem>
                <JmCollapseItem name="3" label="标题三" disabled>
                    3.Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </JmCollapseItem>
            </JmCollapse>
        </section>
        <section>
            <h3>手风琴模式</h3>
            <JmCollapse v-model="activeName" :accordion="true">
                <JmCollapseItem name="1" label="标题一" subTitle="副标题1">
                    1.Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </JmCollapseItem>
                <JmCollapseItem name="2" label="标题二" subTitle="副标题2">
                    2.Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </JmCollapseItem>
                <JmCollapseItem name="3" label="标题三" subTitle="副标题3">
                    3.Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </JmCollapseItem>
            </JmCollapse>
        </section>
    </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import JmCollapse from "../package/collapse";
import JmCollapseItem from "../package/collapse-item";
@Component({
    components: {
        JmCollapse,
        JmCollapseItem
    }
})
export default class ExampleCollapse extends Vue {
    public activeNames: string[] = [];
    public activeName: string = "1";
}
</script>
