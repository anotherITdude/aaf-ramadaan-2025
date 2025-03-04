import React from "react";
import Section from "./Section";
import YoutubeEmbed from "./YoutubeEmbed";

const VideoSection = () => {
  return (
    <Section className="relative overflow-hidden min-h-[600px]">
      <YoutubeEmbed embedId="dBcAZdtXOnM" className="w-full h-full" />
    </Section>
  );
};

export default VideoSection;
