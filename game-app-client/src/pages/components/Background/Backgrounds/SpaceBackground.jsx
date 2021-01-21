import React, { useEffect, useState } from "react";
import { GameCanvas, Sprite } from "../../../../helpers/SimpleCanvasLibrary.js";
import  {spaceshipSprite}  from "../../../../assets/spaceshipSprite.js";
import {earthPng} from "../../../../assets/earthPng.js";
export default function SpaceBackground() {
  const [canvasWidth, updateCanvasWidth] = useState(window.innerWidth);
  const [canvasHeight, updateCanvasHeight] = useState(window.innerHeight);

  const updateCanvasSize = () => {
    updateCanvasWidth(window.innerWidth);
    updateCanvasHeight(window.innerHeight);
  };
  useEffect(() => {
    const canvas = new GameCanvas("bkg");
    let sx = Math.round(Math.random()*(window.innerWidth)-310);
    let sy = Math.round(Math.random()*(window.innerHeight)-330);
    
    const drawOnCanvas = () => {
      const spaceShip = new Sprite({
        src: spaceshipSprite,
        frameWidth: 310,
        frameHeight: 330,
        x: 100,
        y: 100,
        targetHeight: 82.5,
        targetWidth: 77.5,
        frame: 1,
        frameRate: 0,
        angle: 0,
    update({sprite, stepTime}){
     // sprite.angle +=1*stepTime/500 
      sprite.x+=(sx-sprite.x)*stepTime/800;
      sprite.y+=(sy-sprite.y)*stepTime/800;
      
      if(Math.round(sprite.x)===sx)
      {
        sx = Math.round(Math.random()*(window.innerWidth))-510;
        sy = Math.round(Math.random()*(window.innerHeight))-530;
        if(sx<=-1)
        {
          sx=sx*-1;
        }
        if(sy<=-1)
        {
          sy=sy*-1;
        }
      }
    },
});
canvas.addDrawing(
      function ({ctx, elapsed, width, height}) {
          let x = spaceShip.x;
          let y = spaceShip.y;
          let borderWidth=2;
          ctx.beginPath();
          ctx.fillStyle = "red"
          ctx.fillRect( x - borderWidth, y -borderWidth, 86.5 , 81.5);
          ctx.fillStyle = "white"
          ctx.fillRect(x,y,82.5,77.5);
          ctx.stroke();
          const earthImg = new Image();
          earthImg.src = earthPng;
          ctx.drawImage(earthImg,100,100,100,106);
      });
      canvas.addDrawing(spaceShip);

      canvas.run();
    };
    drawOnCanvas();
    window.addEventListener("resize", updateCanvasSize, false);
  }, []);
  return (
    <div>
      <canvas
        id="bkg"
        width={canvasWidth}
        height={canvasHeight}
      />
    </div>
  );
}
