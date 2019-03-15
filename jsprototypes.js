function Track(title, rating, length) {
    this.title = title;
    this.rating = rating;
    this.length = length;
}

function Playlist(name) {
    this.name = name;
    this.tracks = [];
    this.addTrack = function(track) {
        this.tracks.push(track);
    }
    this.overallRating = function() {
        let currentTotal = 0;
        this.tracks.map(function(track) {
            currentTotal = currentTotal + track.rating;
        })
        return currentTotal/this.tracks.length;
    }
    this.totalDuration = function () {
        let currentlength = 0;
        // list of tracks given
        // each track has duration
        this.tracks.map(function(track) {
            currentlength = currentlength + track.length;
        })
        return currentlength;
    }

}

function Library(name, creator) {
    this.name = name;
    this.creator = creator;
    this.playlists = [];
    this.addPlaylist = function(playlist) {
        this.playlists.push(playlist);
    }
    this.totalPlaylists = function() {
        return this.playlists.length;
    }
}

const maddiesFirstSong = new Track('random track', 5, 400);

const maddiesFirstPlaylist = new Playlist('maddie');
maddiesFirstPlaylist.addTrack(maddiesFirstSong);

const maddiesSecondSong = new Track('new track', 3, 200);

maddiesFirstPlaylist.addTrack(maddiesSecondSong);

console.log(`This playlist is ${maddiesFirstPlaylist.totalDuration()} seconds long`);
console.log(`This playlist average rating is ${maddiesFirstPlaylist.overallRating()}`);

const maddiesFirstLibrary = new Library('First', 'Maddie');
maddiesFirstLibrary.addPlaylist(maddiesFirstPlaylist);
console.log(`Total number of plalists in the library ${maddiesFirstLibrary.totalPlaylists()}`)
