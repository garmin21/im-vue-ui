<template>
    <div class="example">
        <ul class="menu">
            <router-link
                tag="li"
                class="menu-item"
                v-for="menu in menus"
                :key="menu.path"
                :class="{ active: menu.name === $route.name }"
                :to="menu.path"
            >
                {{ menu.name }}
            </router-link>
        </ul>
        <div class="content">
            <router-view></router-view>
        </div>
    </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import { routes } from "./router";

export interface Item {
    name: string;
    path: string;
}

@Component<Example>({})
export default class Example extends Vue {
    public get menus() {
        let result: Item[] = [];
        routes.forEach((item) => {
            if (item.name === "example") {
                result =
                    item.children?.map((item) => ({
                        name: item.name + "",
                        path: item.path + ""
                    })) || [];
            }
        });
        return result;
    }
}
</script>

<style lang="less" scoped>
.example {
    display: flex;
    padding: 20px;
    height: 100%;
}

.menu {
    margin: 0;
    padding: 0;
    padding-right: 20px;
    width: 12em;
    height: 100%;
    list-style: none;
}

.menu-item {
    margin-top: 12px;
    border-radius: 12px;
    padding: 4px 8px;
    cursor: pointer;
    font-family: "Times New Roman", Times, serif;
}

.content {
    flex: 1;
}

.active {
    color: #fff;
    background-color: #f60;
}
</style>
