export interface Props {
    /**
     * 改变值 
     */
    value : number;

    /**
     * 类名
     */
    classes : Array<string> | object;

    /**
     * 改变的值
     */
    handelChange: (value:number) => void;
}