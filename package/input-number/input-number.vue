<template>
    <div :class="['fm-counter-input']">
        <div class="fm-label">
            <slot />
            <template v-if="!$slots.default">{{ label }}</template>
        </div>
        <div class="fm-counter-inner" :class="{ active: focus || autofocus }">
            <!-- todo 将来替换为icon图标 -->
            <span
                class="btn prev"
                :class="{ allowed: allowedMinus }"
                @click="hanndelClick(mathematics.MINUS)"
            >
                <img
                    src="./icon/minus.svg"
                    width="20"
                    height="15"
                    alt="minus"
                />
            </span>
            <input
                v-model="num"
                :max="max"
                :min="min"
                type="number"
                class="input-number"
                :placeholder="placeholder"
                :autofocus="autofocus"
                @focus="onFocus"
                @blur="onBlur"
                @input="onInput"
            />
            <span
                class="btn next"
                :class="{ allowed: allowedPlus }"
                @click="hanndelClick(mathematics.PLUS)"
            >
                <img src="./icon/puls.svg" width="20" height="15" alt="puls" />
            </span>
        </div>
    </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import { Mathematics } from "./index";

@Component<JmInputNumber>({})
export default class JmInputNumber extends Vue {
    @Prop({ type: Number, default: 0 })
    public count!: number;

    @Prop({ type: String, default: "" })
    public label!: string;

    @Prop({ type: String, default: "" })
    public placeholder!: string;

    @Prop({ type: Number, default: 99999 })
    public max!: number;

    @Prop({ type: Number, default: 0 })
    public min!: number;

    @Prop({ type: Boolean })
    public autofocus?: boolean;

    public defaultFocus = false;
    public mathematics = Mathematics;

    public get focus() {
        return this.defaultFocus;
    }
    public get num() {
        return this.count;
    }
    public set num(val: number) {
        if (val > this.max || val < this.min) return;
        this.$emit("update:count", val);
    }
    public get allowedPlus() {
        return this.count >= this.max;
    }
    public get allowedMinus() {
        return this.count <= this.min;
    }
    public onFocus() {
        this.defaultFocus = true;
    }
    public onBlur() {
        this.defaultFocus = false;
    }

    public onInput(evt: InputEvent) {
        if (evt.target) {
            const target = evt.target as HTMLInputElement;
            this.num = Number(target.value);
        }
    }
    public hanndelClick(val: Mathematics) {
        if (val === Mathematics.PLUS && this.allowedPlus === false) {
            return this.num++;
        }
        if (val === Mathematics.MINUS && this.allowedMinus === false) {
            return this.num--;
        }
    }
}
</script>
<style lang="less" scoped>
@import "../theme-chalk/config.less";

.fm-counter-input {
    border-radius: 7px;
    background-color: @--theme-white;
    box-shadow: 0 1px 7px 0 #edeef1;
}

.fm-label {
    padding: 0 10px;
    padding-top: 6px;
    font-size: 12px;
    color: #767676;
}

.fm-counter-inner {
    display: flex;
    align-items: center;
    border-bottom: 2px solid @--theme-white;
    padding: 8px;
    height: 46px;
    font-size: 18px;
    color: #333;
    box-sizing: border-box;
}

.input-number {
    border: none;
    text-align: center;
    background-color: @--theme-white;
    outline: none;
    flex: 1;
}

.btn {
    display: block;
    width: 40px;
    height: auto;
    font-size: 24px;
    text-align: center;
    color: #767676;
    background: #f5f6f7;
    cursor: pointer;
    user-select: none;
}

.active {
    border-bottom-color: @--theme-color;
}

.allowed {
    cursor: not-allowed;
}

.input-number::-webkit-inner-spin-button {
    -webkit-appearance: none;
}

.input-number::-webkit-outer-spin-button {
    -webkit-appearance: none;
}
</style>
