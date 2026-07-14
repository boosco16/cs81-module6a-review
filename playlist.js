// this is the constructor. when you do "new Playlist(...)", this
// function runs and sets up a brand new object. "this." here means the new object being created
function Playlist(name) {
  this.name = name; // stores whatever name was passed in
  this.songs = []; // starts as an empty array, no songs yet
  this.currentSong = null; // nothing is playing yet, so this starts empty
}

// adding methods to Playlist.prototype means every Playlist object
// shares the same method instead of each one getting its own copy.

// adds a new song title to the end of the songs array
Playlist.prototype.addSong = function(songTitle) {
  // "this.songs" refers to whichever playlist called addSong
  this.songs.push(songTitle);
};

// starts playing whatever song is first in the list
Playlist.prototype.playFirst = function() {
  // only try to play something if there's actually a song in the array
  if (this.songs.length > 0) {
    // grabs the first song and saves it as the "currently playing" one
    this.currentSong = this.songs[0];
    console.log("Now playing:", this.currentSong);
  }
};

// removes the current first song and moves to the next one
Playlist.prototype.skipSong = function() {
  // only skip if there's more than 1 song, otherwise there's nothing to skip to
  if (this.songs.length > 1) {
    this.songs.shift(); // removes the first song from the array completely
    this.currentSong = this.songs[0];  // whatever is now first becomes current
    console.log("Skipped! Now playing:", this.currentSong);
  } else {
    console.log("No more songs to skip.");
  }
};

// prints out the playlist name and all the songs in it
Playlist.prototype.listSongs = function() {
  console.log("Playlist:", this.name);
  // .join(", ") turns the array into one readable string like "Lofi Study" instead of printing an array
  console.log("Songs:", this.songs.join(", "));
};

// IMPROVEMENT IDEA:
// playFirst() doesn't tell you anything if the playlist is empty, it
// just silently does nothing. skipSong() already handles that case
// with an else and a message ("No more songs to skip."), so playFirst()
// could probably do the same thing, like an else that logs
// "No songs in this playlist yet."

// NEW METHOD: lets you remove a specific song by name instead of only
// being able to remove whatever is first
Playlist.prototype.removeSong = function(songTitle) {
  // indexOf finds where the song is in the array, or -1 if it's not there
  const index = this.songs.indexOf(songTitle);
  if (index === -1) {
    console.log(songTitle, "is not in the playlist.");
  } else {
    // splice removes 1 item starting at that index
    this.songs.splice(index, 1);
    console.log("Removed:", songTitle);
  }
};

let myMix = new Playlist("My Chill Mix");
// "this" inside every method above refers to myMix specifically,
// since myMix is the object calling each method
myMix.addSong("Lofi Study"); 
myMix.addSong("Chillhop Beats");
myMix.addSong("Evening Jazz");
myMix.playFirst(); // should print "Now playing: Lofi Study"
myMix.skipSong(); // should print "Skipped! Now playing: Chillhop Beats"
myMix.listSongs(); // prints the playlist name and remaining songs
