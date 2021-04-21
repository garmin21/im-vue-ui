<template>
    <div class="tree">
        <div class="tree-head">
            <template>
                <div
                    class="tree__icon"
                    :class="[isOpen ? 'down' : 'right']"
                    @click="toggle"
                />
                <JmRadio
                    :value="value"
                    :label="item.id"
                    @change="handleClick(item)"
                >
                    <div class="tree__label" @click.self.stop="toggle">
                        {{ item.label }}
                    </div>
                </JmRadio>
            </template>
        </div>
        <div v-show="isOpen" class="tree__list">
            <template v-for="(child, index) of item.children">
                <JmTree
                    :key="`tree-${index}`"
                    :value="value"
                    :item="child"
                    @change="handleClick"
                />
            </template>
        </div>
    </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import { Children } from "./index";
import JmRadio from "../radio";
@Component<JmTree>({
    components: {
        JmRadio
    }
})
export default class JmTree extends Vue {
    @Prop({
        type: Object,
        default: (): Children => {
            return {
                label: "",
                children: [],
                id: "0"
            };
        }
    })
    public item!: Children;

    @Prop({ type: String, default: "" })
    public value!: string;

    public isOpen = false;

    public toggle() {
        const item = this.item;
        if (item.children && item.children.length > 0) {
            this.isOpen = !this.isOpen;
        }
    }

    public handleClick(item: Children) {
        this.$emit("input", item);
        this.$emit("change", item);
    }
}
</script>
<style lang="less" scoped>
.tree-head {
    display: flex;
    align-items: center;
    cursor: pointer;
}
.tree__label {
    color: #767676;
    font-size: 14px;
}
.tree__icon {
    width: 12px;
    height: 12px;
    padding: 6px;
}
.tree__list {
    padding-left: 15px;
}
.down {
    background: transparent url("./image/down.svg") no-repeat center center;
    background-size: 12px 12px;
}
.right {
    background: transparent url("./image/right.svg") no-repeat center center;
    background-size: 12px 12px;
}
</style>
