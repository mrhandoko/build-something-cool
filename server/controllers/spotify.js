'use strict'

var SpotifyWebApi = require('spotify-web-api-node')
const Spotify = {}

Spotify.search = (req, res, next) => {
  var spotifyApi = new SpotifyWebApi()

  spotifyApi.searchTracks(req.body.artist)
  .then(function(data) {
    res.send(data.body.tracks.items)
  }, function(err) {
    res.send(err)
  });
}

module.exports = Spotify
