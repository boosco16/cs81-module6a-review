## What was the hardest part to understand? 

the "this" inside the prototype methods. It's not obvious at first that "this" means whichever object called the method like myMix, not the Playlist function itself. 


## How does this code use "this" to tie dadta and behavior together? 

Each method like addSong or playFirst uses "this" to reach into whatever object called it (this.songs, this.name, etc). That's what makes the same method work correctly for
any playlist object instead of just one specific one. If I made a second playlist, "this" would just point to that one instead. 

## What would you do differently if you wrote this object from scratch?

I'd add a messsage in playFirst() for when the playlist is empty, like the "No more songs to skip" message skipSong already has. Right now playFirst() just does nothing silently.
