<template>
    <section :class="classes">
        <div class="distpicker__province"></div>
        <div class="distpicker__city"></div>
        <div class="distpicker__area"></div>
    </section>
</template>

<script lang="ts">
// 等待 下拉的弄好，在搞
import { Vue, Component } from "vue-property-decorator";
import { disPickerData } from "./dist-picker";
@Component<JmDistPicker>({})
export default class JmDistPicker extends Vue {
    public get classes() {
        return ["distpicker"];
    }

    public get disPickerData() {
        return disPickerData();
    }
}
</script>
