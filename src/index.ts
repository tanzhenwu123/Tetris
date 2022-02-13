import { Viewr } from "../interface/Point";
import { Square } from "../models/square";

class SquareConsoleView implements Viewr{
    constructor(private square:Square){}
    show(): void {
        console.log(this.square.point,this.square.color)
    }
    remove(): void {
        
    }
}

const sq = new Square({x:3,y:5},"red")
sq.viewr = new SquareConsoleView(sq)

sq.point = {x:2,y:3}
sq.point = {x:3,y:4}
sq.point = {x:4,y:5}