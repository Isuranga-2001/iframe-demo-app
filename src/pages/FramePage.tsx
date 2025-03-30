import React from "react";
import Frame from "../components/Frame";

const FramePage: React.FC = () => {
  const websiteUrl =
    "https://localhost:10000/?coverageId=367&medicationRequestId=111112&patientId=101";

  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      {/* Use iframe embedding */}
      <Frame url={websiteUrl} />
    </div>
  );
};

export default FramePage;
