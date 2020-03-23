import React from 'react';
import ReactDOM from 'react-dom';
import { useSpring, animated } from 'react-spring';
import './styles.css'; // // Icons made by Freepik from www.flaticon.com

const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2];
// const calc = (x, y) => [x - window.innerWidth, y - window.innerHeight];
const trans1 = (x, y) => `translate3d(${x / 15}px,${y / 15 +300}px,0)`;
const trans2 = (x, y) => `translate3d(${x / 16 + 200}px,${y / 16 + 130}px,0)`;
const trans3 = (x, y) => `translate3d(${x / 20 - 350}px,${y / 20 + 300}px,0)`;
const trans4 = (x, y) => `translate3d(${x / 30 - 100}px,${y / 30 +400}px,0)`;

function Parallax() {
  const [props, set] = useSpring(() => ({ xy: [0, 0], config: { mass: 10, tension: 550, friction: 140 } }))
  return (
    <div class="container1" onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}>
      <animated.div className="card1" style={{ transform: props.xy.interpolate(trans1) }} />
      <animated.div className="card2" style={{ transform: props.xy.interpolate(trans2) }} />
      <animated.div className="card3" style={{ transform: props.xy.interpolate(trans3) }} />
      <animated.div className="card4" style={{ transform: props.xy.interpolate(trans4) }} />
    </div>
  )
};

export default Parallax;