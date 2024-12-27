import React from "react";
import { useConnection } from "@xyflow/react";

export default ({ fromX, fromY, toX, toY }: any) => {
  const { fromHandle } = useConnection();

  return (
    <g>
      <path
        fill="none"
        stroke={"#5D8ED3"}
        strokeWidth={1.5}
        className="animated"
        d={`M${fromX},${fromY} C ${fromX} ${toY} ${fromX} ${toY} ${toX},${toY}`}
      />
      <circle
        cx={toX}
        cy={toY}
        fill="#2B77E3"
        r={3}
        stroke={"#2B77E3"}
        strokeWidth={1.5}
      />
    </g>
  );
};
