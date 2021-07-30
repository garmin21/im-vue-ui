<template>
    <div>
        <h1>drawer</h1>
        <section>
            <h3>TOP</h3>
            <JmButton @click="visible1 = !visible1">打开抽屉</JmButton>
            <JmDrawer :visible="visible1" @close="visible1 = false" direction="top">
                <h1>title</h1>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Necessitatibus id, omnis odio eum doloremque atque fugit
                laudantium nesciunt deserunt, unde sit placeat deleniti
                consequuntur nostrum suscipit ex vel at? Repudiandae!
            </JmDrawer>
        </section>
        <section>
            <h3>RIGHT</h3>
            <JmButton @click="visible2 = !visible2">打开抽屉</JmButton>
            <JmDrawer :visible="visible2" @close="visible2 = false" direction="right">
                <h1>title</h1>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Necessitatibus id, omnis odio eum doloremque atque fugit
                laudantium nesciunt deserunt, unde sit placeat deleniti
                consequuntur nostrum suscipit ex vel at? Repudiandae!
            </JmDrawer>
        </section>
        <section>
            <h3>LEFT</h3>
            <JmButton @click="visible3 = !visible3">打开抽屉</JmButton>
            <JmDrawer :visible="visible3" @close="visible3 = false" direction="left">
                <h1>title</h1>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Necessitatibus id, omnis odio eum doloremque atque fugit
                laudantium nesciunt deserunt, unde sit placeat deleniti
                consequuntur nostrum suscipit ex vel at? Repudiandae!
            </JmDrawer>
        </section>
        <section>
            <h3>BOTTOM</h3>
            <JmButton @click="visible4 = !visible4">打开抽屉</JmButton>
            <JmDrawer :visible="visible4" @close="visible4 = false" direction="bottom">
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
    public visible1 = false;
    public visible2 = false;
    public visible3 = false;
    public visible4 = false;
}
</script>
