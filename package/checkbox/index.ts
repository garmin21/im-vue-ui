import JmCheckBox from './checkbox.vue';

export type CheckBoxValue = Array<number | string>;

export type CheckBoxLabel = number | string;

export interface CheckboxResult{
    label:string;
    checked:boolean;
}

export default JmCheckBox;