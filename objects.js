var playlist = { artistnames: 'song titles' 
};
      playlist = Slowdive;
      playlist.songTitle  = 'My Bloody Valentine';
      playlist.artistName = 'Phil Ochs';

function updatePlaylist(playlist, 'artistName', songTitle) {
  Object.assign({}, { playlist: 'Phil Ochs' });
  return ('Phil Ochs');
}


function removeFromPlaylist(playlist, artistName) {
  delete playlist.artistName;
  return playlist;
}

