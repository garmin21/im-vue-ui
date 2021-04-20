<template>
    <div class="model">
        <slot></slot>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { createPopper, Instance } from "@popperjs/core";

@Component({})
export default class Core extends Vue {
    public popperInstance: Instance | null = null;
    public button: Element | null = null;
    public init() {
        const button = this.button;
        if (button && this.$el) {
            this.popperInstance = createPopper(button, this.$el as any, {
                placement: "right",
                modifiers: [
                    {
                        name: "offset",
                        options: {
                            offset: [0, 8]
                        }
                    }
                ]
            });
        }
    }

    public show() {
        // Make the this.$el visible
        // this.$el.setAttribute("data-show", "");
        this.$el.classList.add("show");

        if (!this.popperInstance) return;
        // Enable the event listeners
        this.popperInstance.setOptions({
            modifiers: [{ name: "eventListeners", enabled: true }]
        });

        // Update its position
        this.popperInstance.update();
    }

    public hide() {
        // Hide the this.$el
        // this.$el.removeAttribute("data-show");
        this.$el.classList.remove("show");

        if (!this.popperInstance) return;

        // Disable the event listeners
        this.popperInstance.setOptions({
            modifiers: [{ name: "eventListeners", enabled: false }]
        });
    }

    public events() {
        // const bool = this.$el.classList.contains("show");
        this.button && this.button.addEventListener("click", this.show);
        // this.button && this.button.addEventListener("click", this.hide);
    }

    public mounted() {
        this.button = this.$el.previousElementSibling;
        this.init();
        this.events();
    }
}
</script>

<style lang="less" scoped>
.model {
    width: 200px;
    height: 200px;
}

.model {
    background: #333;
    color: white;
    font-weight: bold;
    padding: 4px 8px;
    font-size: 13px;
    border-radius: 4px;
    display: none;
}
.show {
    display: block;
}
</style>
