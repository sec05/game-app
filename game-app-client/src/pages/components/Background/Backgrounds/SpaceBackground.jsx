import React, {useEffect, useRef, useState} from 'react'
import {GameCanvas} from "../../../../helpers/SimpleCanvasLibrary.js";
export default function SpaceBackground() {
    
    const canvasRef = useRef(null);
    const [canvasWidth, updateCanvasWidth] = useState(window.innerWidth);
    const [canvasHeight, updateCanvasHeight] = useState(window.innerHeight); 
    

   const updateCanvasSize = () =>
   {
        updateCanvasWidth(window.innerWidth);
        updateCanvasHeight(window.innerHeight);
   }
    
    useEffect(() => {
        const canvas = new GameCanvas("bkg")
        const drawOnCanvas = () =>
        {
           /* canvas.addDrawing(
                function ({ctx, elapsed, width, height}) {
                    let x = (100 * elapsed/1000) % width;
                    let y = height/2
                    ctx.beginPath();
                    ctx.arc(x,y,20,0,Math.PI*2);
                    ctx.stroke();
                    console.log(width, height)
                });
                canvas.run();*/
        }
        drawOnCanvas();
        window.addEventListener("resize",updateCanvasSize,false);
    }, [])
    return (
        <div>
            <canvas id="bkg" ref={canvasRef} width={canvasWidth} height={canvasHeight}/>
        </div>
    )
}
