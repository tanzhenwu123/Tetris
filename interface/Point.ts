export interface Point{
    readonly x:number,
    readonly y:number
}

export interface Viewr{
    // 显示方块
    show():void;
    // 移除方块
    remove():void;
}