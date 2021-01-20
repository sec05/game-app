import React from 'react'
import { useSpring, animated } from 'react-spring'
import "../../../styles/Games/Thumbnail.scss"
export default function Thumbnail(props) {
    const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1.1]
    const trans = (x, y, s) => `perspective(190vw) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`

    const [pos, set] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 15, tension: 300, friction: 20 } }))
    return (
      <animated.div
        onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(window.innerWidth/2, y) })}
        onMouseLeave={() => set({ xys: [0, 0, 1] })}
        style={{ transform: pos.xys.interpolate(trans), width: "19vw", height: "10vw", border: "1px solid red"}}
    >
      {props.number}
      </animated.div>)
}
