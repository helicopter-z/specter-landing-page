import { Handle, NodeProps, Position } from "@xyflow/react";
import { CustomNodeProps } from "./typing";
import { Box, Paper, Typography } from "@mui/material";

const handleStyle: React.CSSProperties = {
  width: "15px",
  height: "15px",
  background: "#FFFFFF",
  border: "1px solid #E4E4E4",
};

// Custom Node Component
const CustomNode: React.FC<NodeProps<CustomNodeProps>> = ({ data }) => {
  return (
    <Paper
      variant="outlined"
      sx={{
        width: "330px",
        height: "250px",
        p: 5,
        position: "relative",
        bgcolor: "#FFFFFF",
        borderRadius: "17px",
        border: "1px solid #F2F2F2",
      }}
    >
      <Handle type="target" position={Position.Top} style={handleStyle} />

      <div className="flex items-center">
        {data.icon}
        <p className="text-xl font-medium ml-3 text-[#000000]">{data.label}</p>
      </div>
      <p className="text-base text-[#444444] mt-3">{data.description}</p>

      {/* <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        <Box
          sx={{
            width: 40,
            height: 40,
            borderRadius: 1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            bgcolor: data.color,
          }}
        >
          {data.icon}
        </Box>
        <Box>
          <Typography variant="subtitle2" sx={{ fontWeight: 'medium' }}>
            {data.label}
          </Typography>
          <p>  {data.description}</p>
        </Box>
      </Box> */}
      <Handle type="source" position={Position.Bottom} style={handleStyle} />
    </Paper>
  );
};

export default CustomNode;
