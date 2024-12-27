import React, { useState } from "react";
import "./Movable.css";
import { StartedIcon } from "../../icons";
import { useNavigate } from "react-router";

const MovableBG = () => {
  const navigate = useNavigate();
  const [gradientPosition, setGradientPosition] = useState({ x: 50, y: 50 });

  const handleMouseMove = (e: any) => {
    const { clientX, clientY, currentTarget } = e;
    const { left, top, width, height } = currentTarget.getBoundingClientRect();
    const x = ((clientX - left) / width) * 100;
    const y = ((clientY - top) / height) * 100;
    setGradientPosition({ x, y });
  };

  return (
    <>
      <div
        className="custom-container rounded-3xl"
        onMouseMove={handleMouseMove}
      >
        <div className="content justify-items-center">
          <h1 className="text-5xl font-semibold">
            Stop Managing Data— Start Driving Growth
          </h1>
          <p className="text-xl text-blacklight">
            Traditional CRMs store data. We turn it into action, guiding every
            account to the next best step.
          </p>
          <button
            className="flex items-center gap-2 bg-black text-white hover:bg-blue hover:text-white border rounded-lg text-center py-2 px-3"
            onClick={() => navigate("/get-started")}
          >
            <StartedIcon></StartedIcon>
            Get Started
          </button>
        </div>
        <div
          className="background"
          style={{
            background: `radial-gradient(circle at ${gradientPosition.x}% ${gradientPosition.y}%, #9FC7FF, #F8F8F8)`,
          }}
        ></div>
      </div>

      {/* <div className="bg-gradient-to-r from-[#F8F8F8] to-[#EAF3FF] h-screen content-center rounded-3xl px-[80px]">
        <div className="grid gap-4 justify-items-center">
          <h1 className="text-5xl font-semibold">
            Stop Managing Data— Start Driving Growth
          </h1>
          <p className="text-xl text-blacklight">
            Traditional CRMs store data. We turn it into action, guiding every
            account to the next best step.
          </p>
          <button className="flex items-center gap-2 bg-blue text-white border rounded-lg text-center py-2 px-3">
            <StartedIcon></StartedIcon>
            Get Started
          </button>
        </div>
      </div> */}
    </>
  );
};

export default MovableBG;
