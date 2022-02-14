import {Square} from './square'
import {Viewr} from '../interface/Point'
import $ from 'jquery'
import pageConfig from '../tools/pageConfig'
// 显示一个小方块到页面上 约定实现viewr接口内的函数
export class squarePageView implements Viewr{
    private ifSqRemove:boolean = false
    /**
     * Creates an instance of squarePageView.
     * @param {Square} square 小方块类
     * @param {JQuery<HTMLElement>} container 搭载小方块容器
     * @param {JQuery<HTMLElement>} [dom] 小方块dom对象 
     * @memberof squarePageView
     */
    constructor(private square:Square,private container:JQuery<HTMLElement>,private dom?:JQuery<HTMLElement>){
        
    }
    show(): void {
        // 如果当前方块状态为已经消除，则直接结束该函数
        if(this.ifSqRemove) return
        // 如果默认没有传递小方块dom对象参数，默认赋值形成一个div并且设置其css属性，完毕后加入容器对象
        if(!this.dom) this.dom = $("<div>").css({
            position:"absolute",
            width:pageConfig.SquareSize.width,
            height:pageConfig.SquareSize.height,
            border:"1px solid #000",
            boxSizing:"border-box",
        }).appendTo(this.container)
        
        // 将可变数据以及不可变数据分开
        this.dom.css({
            left:this.square.point.x * pageConfig.SquareSize.width,
            top:this.square.point.y * pageConfig.SquareSize.height,
            background:this.square.color
        })
    }
    remove(): void {
        if(this.dom) {
            this.dom.remove()
            this.ifSqRemove = true
        }
    }
}