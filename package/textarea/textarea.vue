<template>
    <div class="jm-textarea" :class="[disabled ? 'jm-disabled' : '']">
        <div class="jm__label" v-if="label">{{ label }}</div>
        <div class="jm__text">
            <textarea
                class="jm__textarea__core"
                :placeholder="placeholder"
                :value="value"
                @input="handleInput"
                @focus="handleFocus"
                @blur="handleBlur"
                :maxlength="maxlength"
                :style="style"
                :rows="rows"
                :readonly="readonly"
                :disabled="disabled"
            />
            <div class="jm-text__limit" v-if="limirShow">
                <span>{{ textNum }}/</span>
                <span>{{ maxlength }}</span>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Vue, Prop, Component } from "vue-property-decorator";

@Component({})
export default class JmTextArea extends Vue {
    // 设置占位提示文字
    @Prop({ type: String, default: "" })
    public placeholder!: string;
    // 限制最长输入字符
    @Prop({ type: [Number, String] })
    public maxlength?: string | number;
    // textarea的高度
    @Prop({ type: [String, Number], default: "2" })
    public rows!: string | number;
    // 标题
    @Prop({ type: String, default: "" })
    public label!: string;
    // value
    @Prop({ type: String, default: "" })
    public value!: string;
    // 高度是否可拉伸
    @Prop({ type: Boolean, default: false })
    public autosize!: boolean;
    // 高度是否可拉伸
    @Prop({ type: Boolean, default: false })
    public limirShow!: boolean;
    // 只读
    @Prop({ type: Boolean, default: false })
    public readonly!: boolean;
    // 只读
    @Prop({ type: Boolean, default: false })
    public disabled!: boolean;
    // 文本位置
    @Prop({ type: String, default: "left" })
    public textAlign!: "left" | "right" | "center";

    public textNum = "0";

    public get style() {
        return {
            resize: this.autosize ? "vertical" : "none",
            textAlign: this.textAlign
        };
    }

    public handleInput(evt: Event) {
        const target = evt.target as HTMLInputElement;
        let val = target.value;
        if (this.maxlength && val.length > Number(this.maxlength)) {
            val = val.slice(0, Number(this.maxlength));
        }
        this.textNum = String(val.length);
        this.$emit("input", target.value);
        this.$emit("change", target.value);
    }
    public handleFocus(evt: Event) {
        const target = evt.target as HTMLInputElement;
        this.$emit("input", target.value);
        this.$emit("focus", target.value);
    }
    public handleBlur(evt: Event) {
        const target = evt.target as HTMLInputElement;
        this.$emit("input", target.value);
        this.$emit("blur", target.value);
    }
}
</script>

<style lang="less" scoped>
.jm-textarea {
    background-color: #fff;
}

.jm__label {
    display: inline-block;
    width: 80px;
    overflow: hidden;
    text-align: left;
    font-size: 14px;
    color: #333;
    line-height: 22px;
    padding-left: 25px;
    padding-top: 5px;
}

.jm__text {
    position: relative;
    display: flex;
    width: 100%;
    background: #fff;
    font-size: 14px;
    padding: 10px 25px;
    box-sizing: border-box;
}

.jm__textarea__core {
    min-height: 100px;
    outline: 0;
    display: block;
    box-sizing: border-box;
    width: 100%;
    min-width: 0;
    margin: 0;
    padding: 0;
    color: #1a1a1a;
    text-align: left;
    background-color: transparent;
    border: 0;
    resize: vertical;

    &::placeholder {
        color: #999;
    }

    &:disabled {
        cursor: not-allowed;
        color: #ccc;
    }
}

.jm-text__limit {
    position: absolute;
    right: 15px;
    bottom: 12px;
    font-size: 14px;
    color: grey;
}

.jm-disabled {
    cursor: not-allowed;
    color: #ccc;

    .jm__label {
        color: #ccc;
    }
}
</style>
