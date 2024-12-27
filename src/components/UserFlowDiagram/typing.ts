import { Node } from "@xyflow/react";

// Types and Interfaces

export type NodeTypes = "text";

export interface BaseCustomNode extends Record<string, unknown> {
  type: NodeTypes;
  workflow_id: string;
  label: string;
  isEditing?: boolean;
}

export interface TextNodeData extends BaseCustomNode {
  description: string;
  color: string;
  icon: string;
  type: "text";
  url?: string;
}

export type TextNode = Node<TextNodeData>;

export type CustomNodeData = TextNodeData;

export type CustomNodeProps = TextNode;

export interface ModuleItem {
  icon: string;
  label: string;
  color: string;
  description: string;
  type: NodeTypes;
}

export interface ModuleCategory {
  category: string;
  items: ModuleItem[];
}
