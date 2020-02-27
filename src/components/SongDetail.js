import React from 'react';
import { connect } from 'react-redux';

const SongDetail = ({ song }) => {
  console.log(song);
  if (!song){
    return <div>No song selected</div>
  }
  return (
  <div>
    <div>
      <h3>Details for:</h3>
      <p>{song.title}</p>
    </div>
    <div>
      <p>Duration: {song.duration}</p>
    </div>
  </div>
  )
};

const mapState = state => {
  return { song: state.selectedSong }
};

export default connect(mapState)(SongDetail);