import React, { useEffect, useState } from "react";
import "./circle_text.css";


const CircleText = () => {
    const [rotation, setRotation] = useState(0);
    const text = "HELLO ✦ REACT ✦ WORLD ✦ ".split("");
  
    useEffect(() => {
      const handleScroll = () => {
        setRotation(window.scrollY * 0.1);
      };
  
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);
  
    return (
      <div className="container" style={{ transform: `rotate(${rotation}deg)` }}>
        <div className="circle">
          {text.map((letter, index) => (
            <span
              key={index}
              className="letter"
              style={{ transform: `rotate(${index * (360 / text.length)}deg)` }}
            >
              {letter}
            </span>
          ))}
        </div>
        <div className="dot"></div>
      </div>
    );
  };
  
  export default CircleText;