import JmTreeGroup from './group.vue';

export interface Children {
    label: string;
    id: string;
    children?: Children[];
}

export default JmTreeGroup;
