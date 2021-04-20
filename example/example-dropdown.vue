<template>
    <div>
        <section v-clickoutside="close">
            <h1>element dropdown</h1>
            <!-- <Dropdown>
                <span class="el-dropdown-link">
                    下拉菜单<i class="el-icon-arrow-down el-icon--right"></i>
                </span>
                <DropdownMenu slot="dropdown">
                    <DropdownItem>黄金糕</DropdownItem>
                    <DropdownItem>狮子头</DropdownItem>
                    <DropdownItem>螺蛳粉</DropdownItem>
                    <DropdownItem disabled>双皮奶</DropdownItem>
                    <DropdownItem divided>蚵仔煎</DropdownItem>
                </DropdownMenu>
            </Dropdown> -->
        </section>

        <section>
            <h1>Lorem ipsum, dolor sit</h1>
        </section>
    </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import Clickoutside from "../src/utils/clickoutside";
// import Clickoutside from "element-ui/src/utils/clickoutside.js";
// import { Dropdown, DropdownMenu, DropdownItem } from "element-ui";
// import "element-ui/lib/theme-chalk/dropdown.css";
// import "element-ui/lib/theme-chalk/dropdown-menu.css";
// import "element-ui/lib/theme-chalk/dropdown-item.css";
@Component({
    components: {
        // Dropdown,
        // DropdownMenu,
        // DropdownItem
    },
    directives: {
        Clickoutside
    }
})
export default class ExampleDropdown extends Vue {
    public close() {
        console.log("点击元素外边的事件被触发了");
    }

    public mounted() {
        // console.log(this.$isServer, "kkkkkkkkkkkk");
    }
}
</script>
