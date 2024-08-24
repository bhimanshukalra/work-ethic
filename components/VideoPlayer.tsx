import { WindowSize } from "@/hooks/useWindowSize";
import React, { useEffect, useState } from "react";
import { Lamp } from "./ui/Lamp";

type VideoPlayerProps = {
  windowSize: WindowSize | null;
};

const VideoPlayer = ({ windowSize }: VideoPlayerProps) => {
  const [isMute, setIsMute] = useState(true);
  const [width, setWidth] = useState("0");

  useEffect(() => {
    setIsMute(false);
  }, []);

  useEffect(() => {
    if (windowSize?.width) {
      const width = windowSize?.width < 600 ? "80%" : "500";
      setWidth(width);
    }
  }, [windowSize]);

  return (
    <div className="flex justify-center items-center">
      <Lamp>
        <video
          width={width}
          height={"100%"}
          preload="auto"
          controls
          autoPlay
          playsInline
          muted={isMute}
          style={{ aspectRatio: 0.9 }}
          className="flex object-fill"
        >
          <source src="/how-I-do-business.mov" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </Lamp>
    </div>
  );
};

export default VideoPlayer;
