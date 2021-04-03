import JmRadio from './radio.vue';

export type RadioValue = number | boolean | string;

export interface RadioItem {
    label: string;
    value: RadioValue
}

export default JmRadio