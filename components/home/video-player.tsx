/* eslint-disable @typescript-eslint/no-unused-expressions */
"use client";
import { useEffect, useRef, useState, FC } from "react";
import { Pause, Play, Volume1, VolumeX } from "lucide-react";
import { Button } from "../ui/button";

interface VideoPlayerProps {
  src: string
}
export const VideoPlayer: FC<VideoPlayerProps> = ({src}) => {
  const [isPaused, setIsPaused] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoDuration, setVideoDuration] = useState<number>(0);
  const [videoProgress, setVideoProgress] = useState<number>(0);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      setVideoDuration(video.duration);
    }
  }, []);
  useEffect(() => {
    if (isPaused) return;
    const currentTime = videoRef.current?.currentTime;
    if (videoDuration != null && currentTime != null) {
      const loadingTimeOut = setTimeout(() => {
        if (videoProgress == currentTime / videoDuration) {
          setVideoProgress((prev) => prev + 0.00001);
        } else {
          setVideoProgress(currentTime / videoDuration);
        }
      }, 10);
      return () => clearTimeout(loadingTimeOut);
    }
  }, [videoProgress, videoDuration, isPaused]);
  const togglePlayPause = () => {
    const video = videoRef.current;
    if (video) {
      setIsPaused(!video.paused);
      video.paused ? video.play() : video.pause();
    }
  };
  const toggleMuteunMute = () => {
    const video = videoRef.current;
    if (video) {
      setIsMuted((prev) => !prev);
    }
  };
  return (
    <div className="border relative w-[100%] max-w-6xl mx-auto overflow-hidden">
      <div className="absolute bottom-4 right-4 z-10 left-4 mx-auto">
        <VideoPlayerControls
          progress={videoProgress}
          isPaused={isPaused}
          isMuted={isMuted}
          onPlayPause={togglePlayPause}
          onMuteunMute={toggleMuteunMute}
          size={35}
          width={1}
        />
      </div>
      <video className="w-full" ref={videoRef} loop muted={isMuted} autoPlay>
        <source
          src={src}
          type="video/mp4"
        />
        Your browser does not support the video tag
      </video>
    </div>
  );
};
interface VideoPlayerControlsProps {
  progress: number;
  isPaused: boolean;
  isMuted: boolean;
  onPlayPause: () => void;
  onMuteunMute: () => void;
  size?: number;
  width?: number;
}
const VideoPlayerControls: FC<VideoPlayerControlsProps> = ({
  progress,
  isPaused,
  isMuted,
  onPlayPause,
  onMuteunMute,
  size = 48,
  width = 3,
}) => {
  const center = size / 2;
  const radius = center - width;
  const dashArray = 2 * Math.PI * radius;
  const dashOffset = (dashArray * (1 - progress)).toString();
  return (
    <div className="flex justify-between w-full">
      <Button
        variant={"ghost"}
        size={"icon"}
        onClick={onMuteunMute}
        className="border text-white rounded-full"
      >
        {isMuted ? (
          <VolumeX className="h-8 w-8" />
        ) : (
          <Volume1 className="h-8 w-8" />
        )}
      </Button>
      <div className="relative flex justify-center items-center">
        <svg width={size} height={size} style={{ transform: "rotate(-90deg)" }}>
          <circle
            cx={center}
            cy={center}
            r={radius}
            fill="transparent"
            stroke="#aaaaaa"
            strokeWidth={width}
          />
          <circle
            cx={center}
            cy={center}
            r={radius}
            fill="transparent"
            stroke="#ffffff"
            strokeWidth={width}
            strokeDasharray={dashArray}
            strokeDashoffset={dashOffset}
            strokeLinecap="round"
          />
        </svg>
        <div className="absolute">
          <button
            className="group cursor-pointer flex justify-center items-center"
            onClick={onPlayPause}
          >
            <div className="text-white group-hover:text-[#aaaaaa] transition-colors duration-200 ease-in-out">
              {isPaused ? (
                <Play className="h-4 w-4 mx-auto inline-block" />
              ) : (
                <Pause className="h-4 w-4 mx-auto inline-block" />
              )}
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};
