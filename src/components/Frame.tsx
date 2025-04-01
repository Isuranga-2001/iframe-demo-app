import React, { useEffect, useRef } from "react";

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
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    const handleMessage = async (event: MessageEvent) => {
      if (event.data.action === "authenticated") {
        if (iframeRef.current) {
          const response = await fetch("/auth/userinfo");

          console.log("Path", event.data.data);

          if (response.status == 200) {
            console.log("User is authenticated");
            console.log(iframeRef.current.src);

            // timeout for 2seconds
            // await new Promise((resolve) => setTimeout(resolve, 2000));

            // show a alert to confirm to open the url
            const confirmOpen = window.confirm(
              `Do you want to open the URL? ${iframeRef.current.src}`
            );
            if (confirmOpen) {
              // open the url in a new tab
              iframeRef.current.src = iframeRef.current.src;
              console.log("User confirmed the action");
            } else {
              // do nothing
              console.log("User cancelled the action");
            }

            // iframeRef.current.src = "https://localhost:10000";
          } else {
            console.log("User is not authenticated");
          }
          // iframeRef.current.src =
          //   "https://localhost:10000/?coverageId=367&medicationRequestId=111112&patientId=101";
        }
      }
    };

    window.addEventListener("message", handleMessage);

    return () => {
      window.removeEventListener("message", handleMessage);
    };
  }, []);

  return (
    <iframe
      ref={iframeRef}
      src={url}
      width={width}
      height={height}
      style={{ border: "none" }}
      title="Embedded Frame"
    />
  );
};

export default Frame;
