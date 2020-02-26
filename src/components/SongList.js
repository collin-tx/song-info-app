import React, { Component } from 'react';
import { connect } from 'react-redux';

class SongList extends Component {
    
  render(){
    const allSongs = this.props.songs.map(song => (
      <li>{song.title}</li>
    ));

    return (
    <div>
      SongList!
      <ul>
        {allSongs}
      </ul>
    </div>
    )
  }
}

const mapState = state => {
  return {
    songs: state.songs
  };
}

export default connect(mapState)(SongList);