<template>
    <JmButton @click="$router.push('/example')" class="fixed">
        快速开始
    </JmButton>
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
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    margin: auto;
}
</style>
