import { Point, Viewr } from "../interface/Point";

export class Square{
    /**
     * Creates an instance of Square.
     * @param {string} color 方块颜色
     * @param {number} x 方块逻辑x坐标
     * @param {number} y 方块逻辑y坐标
     * @memberof Square
     */
    constructor(private _point:Point,private _color:string,private _iview?:Viewr){}

    get point(){
        return this._point
    }

    set point(val:Point){
        this._point = val
        // 每当y坐标数据改变时显示方块
        if(this._iview) this._iview.show()
    }

    get color(){
        return this._color
    }

    set color(val:string){
        this._color = val
    }

    get viewr(){
        return this._iview != undefined ? this._iview : {show():void{},remove():void{}}
    }
    
    set viewr(val:Viewr){
        this._iview = val;
    }
}