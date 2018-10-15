var playlist = { artistnames: 'song titles' 
};
      playlist = Slowdive;
      playlist.songTitle  = 'My Bloody Valentine';
      playlist.artistName = 'Phil Ochs';

function updatePlaylist(playlist, 'artistName', songTitle) {
  add the song and artist as a key-value pair to the playlist object.
  Object.assign({}, { playlist: 'Phil Ochs' });
  return playlist;
}


function removeFromPlaylist(playlist, artistName) {
  delete playlist.artistName;
  return playlist;
}

