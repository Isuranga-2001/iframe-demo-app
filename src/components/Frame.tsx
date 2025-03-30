import React from "react";

interface FrameProps {
  url: string;
  width?: string;
  height?: string;
}

const Frame: React.FC<FrameProps> = ({
  url,
  width = "99%",
  height = "99%",
}) => {
  return (
    <iframe
      src={url}
      width={width}
      height={height}
      style={{ border: "none" }}
      title="Embedded Frame"
    />
  );
};

export default Frame;
