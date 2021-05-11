<template>
    <div>
        <h1>drawer</h1>
        <section>
            <h3>基本使用</h3>
            <JmButton @click="visible = !visible">打开抽屉</JmButton>
            <JmDrawer :visible="visible" @close="visible = false">
                <h1>title</h1>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Necessitatibus id, omnis odio eum doloremque atque fugit
                laudantium nesciunt deserunt, unde sit placeat deleniti
                consequuntur nostrum suscipit ex vel at? Repudiandae!
            </JmDrawer>
        </section>
    </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import JmDrawer from "../package/drawer";
import JmButton from "../package/button";
@Component({
    components: {
        JmDrawer,
        JmButton
    }
})
export default class ExampleDrawer extends Vue {
    public visible = false;
}
</script>
