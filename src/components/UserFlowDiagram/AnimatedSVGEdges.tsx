import React from "react";
import { BaseEdge, getSmoothStepPath, type EdgeProps } from "@xyflow/react";

const AnimatedSVGEdge = ({
  id,
  sourceX,
  sourceY,
  targetX,
  targetY,
  sourcePosition,
  targetPosition,
}: EdgeProps) => {
  const [edgePath] = getSmoothStepPath({
    sourceX,
    sourceY,
    sourcePosition,
    targetX,
    targetY,
    targetPosition,
  });

  return (
    <>
      <BaseEdge
        id={id}
        path={edgePath}
        style={{ stroke: `#5D8ED3`, strokeWidth: 2 }}
      />
      <circle r="7" fill="#FFFFFF" stroke="#E4E4E4">
        <animateMotion dur="5s" repeatCount="indefinite" path={edgePath} />
      </circle>
    </>
  );
};

export default AnimatedSVGEdge;
