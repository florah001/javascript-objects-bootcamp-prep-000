var playlist = { artistnames: 'song titles' 
};
      playlist = Slowdive;
      playlist.songTitle  = 'My Bloody Valentine';
      playlist.artistName = 'Phil Ochs';

function updatePlaylist(playlist, artistName, songTitle) {
  Object.assign({}, { playlist: 'Phil Ochs' });
  return ('Phil Ochs');
}


function removeFromPlaylist(playlist, artistName) {
  delete playlist.artistName;
}

/*
function updatePlaylist(playlist, artistName, songTitle) {
  Object.assign({}, { playlist: 'Phil Ochs' });
  return 'Slowdive', 'My Bloody Valentine', and 'Phil Ochs';
}




}

function updatePlaylist(playlist, artistName, songTitle) {
   Object.assign({}, 'Slowdive', { ['Phil Ochs']: 'My Bloody Valentine'});
   return playlist;
AssertionError: expected { Object (artistnames, Slowdive, ...) } to contain keys 'Slowdive', 'My Bloody Valentine', and 'Phil Ochs'

objects updatePlaylist(playlist, artistName, songTitle) adds the `artistName: songTitle` key-value pair to `playlist`:
        AssertionError: expected { Object (artistnames, Slowdive, ...) } to contain keys 'Slowdive', 'My Bloody Valentine', and 'Phil Ochs'
      + expected - actual
*/