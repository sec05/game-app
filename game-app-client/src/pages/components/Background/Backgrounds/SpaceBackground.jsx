import React, { useEffect, useRef, useState } from "react";
import { GameCanvas, Sprite } from "../../../../helpers/SimpleCanvasLibrary.js";
import { spaceshipSprite } from "../../../../assets/spaceshipSprite.js";
export default function SpaceBackground() {
  const canvasRef = useRef(null);
  const [canvasWidth, updateCanvasWidth] = useState(window.innerWidth);
  const [canvasHeight, updateCanvasHeight] = useState(window.innerHeight);

  const updateCanvasSize = () => {
    updateCanvasWidth(window.innerWidth);
    updateCanvasHeight(window.innerHeight);
  };

  useEffect(() => {
    const canvas = new GameCanvas("bkg");
    const drawOnCanvas = () => {
      const spaceShip = new Sprite({
        src: spaceshipSprite,
        frameWidth: 310,
        frameHeight: 330,
        x: 100,
        y: 100,
        targetHeight: 82.5,
        targetWidth: 77.5,
        frame: 0,
        frameRate: 0,
        angle: 2*Math.PI/9,
    update({sprite, stepTime}){
      sprite.angle +=1*stepTime/500 
     
    },
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
        ref={canvasRef}
        width={canvasWidth}
        height={canvasHeight}
      />
    </div>
  );
}
