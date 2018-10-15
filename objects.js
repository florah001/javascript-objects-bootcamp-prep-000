var playlist = { artistnames: 'song titles' 
};
      playlist = Slowdive;
      playlist.songTitle  = 'My Bloody Valentine';
      playlist.artistName = 'Phil Ochs';
function updatePlaylist(playlist, artistName, songTitle) {
   Object.assign({}, 'Slowdive', { ['Phil Ochs']: 'My Bloody Valentine'});
   return playlist;
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist.artistName;
}

/*objects updatePlaylist(playlist, artistName, songTitle) adds the `artistName: songTitle` key-value pair to `playlist`:
        AssertionError: expected { Object (artistnames, Slowdive, ...) } to contain keys 'Slowdive', 'My Bloody Valentine', and 'Phil Ochs'
      + expected - actual
*/