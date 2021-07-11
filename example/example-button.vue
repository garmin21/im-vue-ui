<template>
    <div>
        <h1>Button</h1>
        <section>
            <h3>按钮类型</h3>
            <JmButton type="primary">主要按钮</JmButton>
            <JmButton type="info">信息</JmButton>
            <JmButton type="default">默认</JmButton>
            <JmButton type="error">异常</JmButton>
            <JmButton type="warning">警告</JmButton>
            <JmButton type="success">成功</JmButton>
        </section>
        <section>
            <h3>按钮大小</h3>
            <JmButton type="primary" size="small">small</JmButton>
            <JmButton type="info" size="large">large</JmButton>
            <JmButton type="warning">normal</JmButton>
        </section>

        <section>
            <h3>朴素按钮</h3>
            <JmButton type="primary" plain size="small">small</JmButton>
            <JmButton type="info" plain size="small">small</JmButton>
        </section>
        <section>
            <h3>禁用状态</h3>
            <JmButton type="primary" plain :disabled="true" size="small">
                small
            </JmButton>
            <JmButton type="info" plain :disabled="true" size="small">
                small
            </JmButton>
        </section>
        <section>
            <h3>按钮形状</h3>
            <JmButton type="primary"> 矩形按钮 </JmButton>
            <JmButton type="info" :round="true"> 圆形按钮 </JmButton>
        </section>
        <section>
            <h3>加载状态</h3>
            <JmButton type="primary" loading> 矩形按钮 </JmButton>
            <JmButton type="info" loading :round="true"> 圆形按钮 </JmButton>
        </section>
        <section>
            <h3>图标按钮</h3>
            <JmButton type="primary">
                <img
                    src="../src/assets/logo.png"
                    width="20"
                    height="20"
                    style="padding-right: 5px"
                />
                <span>图标按钮</span>
            </JmButton>
            <JmButton type="info">
                <img
                    src="../src/assets/logo.png"
                    width="20"
                    height="20"
                    style="padding-right: 5px"
                />
                <span>图标按钮</span>
            </JmButton>
        </section>
        <section>
            <h3>自定义颜色</h3>
            <JmButton type="primary" :componentStyle="{ color: '#333' }">
                单色按钮
            </JmButton>
            <JmButton
                type="info"
                :componentStyle="{ color: '#f60' }"
                :round="true"
            >
                单色按钮
            </JmButton>
            <JmButton
                type="info"
                :componentStyle="{
                    background: 'linear-gradient(to right, #ff6034, #ee0a24)'
                }"
                :round="true"
            >
                渐变色按钮
            </JmButton>
        </section>
    </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import JmButton from "../package/button";

@Component({
    components: {
        JmButton
    }
})
export default class ExampleButton extends Vue {}
</script>
