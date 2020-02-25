// Reducers

export const songsReducer = () => {
  return [
    { title: 'No Scrubs', duration: '4:05' },
    { title: 'Macarena', duration: '4:15' },
    { title: 'All Star', duration: '2:45' },
    { title: 'I Want It That Way', duration: '3:25' }
  ];
};

export const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === 'SONG_SELECTED'){
    return action.payload;
  }
  return selectedSong;
};