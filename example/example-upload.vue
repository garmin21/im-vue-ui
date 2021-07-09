<template>
    <div>
        <h1>Upload</h1>
        <section style="width: 300px; height: 150px">
            <JmUpload :action="action" :onHandelSuccess="onHandelSuccess" />
        </section>

        <br /><br /><br /><br />
        {{ filename }}
        <img
            v-if="src"
            :src="src"
            :alt="filename"
            class="image"
            width="300"
            height="150"
        />
    </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import JmUpload from "../package/upload";

@Component({
    components: {
        JmUpload
    }
})
export default class ExampleUpload extends Vue {
    public action = `http://localhost:3000/upload`;

    public src = "";

    public filename = "";

    public onHandelSuccess(res) {
        if (res) {
            const obj = JSON.parse(res);
            this.src = obj.data.path;
            this.filename = obj.data.filename;
        }
    }
}
</script>

<style lang="less" scoped>
.image {
    object-fit: cover;
}
</style>
