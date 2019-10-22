import React from "react";
import { connect } from "react-redux";

const SongDetail = ({ song }) => {
  if (!song) return <div>Please select a song.</div>;

  const youtubeURL = `https://www.youtube.com/embed/${song.id}`;

  return (
    <div>
      <p>
        <strong>Title:</strong> {song.title}
        <br />
      </p>
      <div>
        <iframe src={youtubeURL} title="video-player"></iframe>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return { song: state.selectedSong };
};

export default connect(mapStateToProps)(SongDetail);
