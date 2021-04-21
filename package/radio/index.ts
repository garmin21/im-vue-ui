import JmRadio from './radio.vue';
import JmRadioGroup from './group.vue';
export type RadioValue = number | boolean | string;

export interface RadioItem {
    label: string;
    value: RadioValue
}

export { JmRadioGroup }

export default JmRadio