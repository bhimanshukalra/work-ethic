"use client";

import VideoPlayer from "@/components/VideoPlayer";
import { useWindowSize } from "@/hooks/useWindowSize";

export default function Home() {
  const windowSize = useWindowSize();
  return (
    <main className="flex justify-center items-center">
      <VideoPlayer windowSize={windowSize} />
    </main>
  );
}
