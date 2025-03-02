import React from "react";
//import PropTypes from "prop-types";


const YoutubeEmbed = ({ embedId, className }: { embedId: string, className: string }) => (
  <div className={className}>
    <iframe
      width="100%"
      height="200"
      src={`https://www.youtube.com/embed/${embedId}`}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    />
  </div>
);

// YoutubeEmbed.propTypes = {
//   embedId: PropTypes.string.isRequired
// };

export default YoutubeEmbed;