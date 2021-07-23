<template>
    <div>
        <JmButton @click="$router.push('/example')" class="fixed">
        快速开始
        </JmButton>
    </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import JmButton from "../package/button";

@Component<Main>({
    components: {
        JmButton
    }
})
export default class Main extends Vue {}
</script>

<style lang="less" scoped>
.fixed {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
</style>
