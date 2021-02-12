import React, { useEffect, useState } from "react";
import { GameCanvas, Sprite } from "../../../../helpers/SimpleCanvasLibrary.js";
import  {spaceshipSprite}  from "../../../../assets/spaceshipSprite.js";
import {planet1, planet2, planet3, planet4} from "../../../../assets/planets.js";
import {redStar, blueStar, greyStar} from "../../../../assets/stars.js"

export default function SpaceBackground() {
  const [canvasWidth, updateCanvasWidth] = useState(window.innerWidth);
  const [canvasHeight, updateCanvasHeight] = useState(window.innerHeight);

  const updateCanvasSize = () => {
    updateCanvasWidth(window.innerWidth);
    updateCanvasHeight(window.innerHeight);
  };
  let starCoords = [];
    for(let i = 0; i <= 40; i++)
    {
      starCoords.push([Math.random()*window.innerWidth,Math.random()*window.innerHeight]);
    }
    let star = [];
    for(let i =0; i<=40; i++)
    {
      star.push(Math.round(2*Math.random()));
    }
    let planetCoords = [];
    for(let i = 0; i <= 3; i++)
    {
      planetCoords.push([Math.random()*window.innerWidth,Math.random()*window.innerHeight])
    }
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
        const blueStarImg = new Image();
        blueStarImg.src = blueStar;
        const redStarImg = new Image();
        redStarImg.src = redStar;
        const greyStarImg = new Image();
        greyStarImg.src = greyStar;
        let stars = [blueStarImg, greyStarImg, redStarImg]
        starCoords.map((coord, index)=>{
            
            ctx.drawImage(stars[star[index]], coord[0], coord[1], 15, 15);
            return index;
        })
         /*  let x = spaceShip.x;
          let y = spaceShip.y;
          let borderWidth=2;
         ctx.beginPath();
          ctx.fillStyle = "red"
          ctx.fillRect( x - borderWidth, y -borderWidth, 86.5 , 81.5);
          ctx.fillStyle = "white"
          ctx.fillRect(x,y,82.5,77.5);
          ctx.stroke();*/
          const planet1Png = new Image();
          planet1Png.src = planet1;
         const planet2Png = new Image();
         planet2Png.src = planet2;
         const planet3Png = new Image();
         planet3Png.src = planet3;
         const planet4Png = new Image();
         planet4Png.src = planet4;
        let planets = [planet1Png, planet2Png, planet3Png, planet4Png]
          planetCoords.map((coord, index)=>{
            ctx.drawImage(planets[index], coord[0], coord[1], 100,100);
            return index;
          })
      });
      canvas.addDrawing(spaceShip);

      canvas.run();
    };
    drawOnCanvas();
    window.addEventListener("resize", updateCanvasSize())
  });
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
