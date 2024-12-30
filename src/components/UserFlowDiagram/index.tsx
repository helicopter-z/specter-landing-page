import React from "react";
import { Background, ReactFlow } from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import CustomNode from "./CustomNode";
import { AccountIcon, DealIcon, GrowthIcon } from "../../icons";
import AnimatedSVGEdge from "./AnimatedSVGEdges";
import ConnectionLine from "./ConnectionLine";

const nodeTypes = {
  custom: CustomNode,
};

const edgeTypes = {
  animatedSvg: AnimatedSVGEdge,
};

const initialNodes = [
  {
    id: "1",
    position: { x: 200, y: 0 },
    type: "custom",
    data: {
      icon: <AccountIcon></AccountIcon>,
      label: "Founders & CEOs",
      description:
        "Get insight into customers’ common pain points, pipeline health, growth levers, and where to invest resources.",
    },
  },
  {
    id: "2",
    position: { x: 0, y: 500 },
    type: "custom",
    data: {
      icon: <DealIcon></DealIcon>,
      label: "Sales & CS Leaders",
      description:
        "Never lose track of a deal, always know who to follow up with, and identify where to upsell without guesswork.",
    },
  },
  {
    id: "3",
    position: { x: 400, y: 500 },
    type: "custom",
    data: {
      icon: <GrowthIcon></GrowthIcon>,
      label: "Product & Growth Teams",
      description:
        "Uncover patterns in objections, pricing feedback, and feature requests—informing product decisions and messaging that resonates.",
    },
  },
];
const initialEdges = [
  {
    id: "e1-2",
    type: "animatedSvg",
    source: "1",
    target: "2",
  },
  {
    id: "e1-3",
    type: "animatedSvg",
    source: "1",
    target: "3",
  },
];
const defaultViewport = { x: 0, y: 0, zoom: 0.5 };
const proOptions = { hideAttribution: true };
const UserFlowDiagram = () => {
  return (
    <div style={{ height: "100vh" }}>
      <ReactFlow
        nodes={initialNodes}
        edges={initialEdges}
        nodeTypes={nodeTypes}
        edgeTypes={edgeTypes}
        fitView
        snapToGrid
        defaultViewport={defaultViewport}
        // connectionLineComponent={ConnectionLine}
        snapGrid={[20, 20]}
        panOnScroll={false}
        zoomOnScroll={false}
        panOnDrag={false}
        nodesDraggable={false}
        nodesConnectable={false}
        preventScrolling={false}
        proOptions={proOptions}
      >
        <Background />
      </ReactFlow>
    </div>
  );
};

export default UserFlowDiagram;
