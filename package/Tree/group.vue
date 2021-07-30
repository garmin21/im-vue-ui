<template>
    <div class="tree">
        <template v-for="(item, index) of dataList">
            <JmTree
                :key="`tree-${index}`"
                :value="radio"
                :item="item"
                @change="handleClick"
            />
        </template>
    </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import JmTree from "./tree.vue";
import { Children } from "./index";
@Component<JmTreeGroup>({
    components: {
        JmTree
    }
})
export default class JmTreeGroup extends Vue {
    @Prop({
        type: Array,
        default: (): Children[] => {
            return [];
        }
    })
    public data!: Children[];

    public get dataList(): Children[] {
        return JSON.parse(JSON.stringify(this.data));
    }

    public radio = "";

    public handleClick(item: Children) {
        this.radio = item.id;
        this.$emit("change", item);
    }
}
</script>