import {Square} from '../models/square'
import {squarePageView} from '../models/squareView'
import $ from "jquery"

const sq = new Square({x:3,y:3},"red")
sq.viewr = new squarePageView(sq,$("#container"))
sq.point = {
    x:3,
    y:0
}

// setInterval(() =>{
//     sq.point = {
//         x:3,
//         y:sq.point.y+1
//     }
// },1000)