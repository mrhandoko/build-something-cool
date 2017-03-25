<template>
  <div class="main">
    <div class="container">
      <h1>Search for an Artist</h1>
      <p>Type an artist name and click on "Search". Then, click on any album from the results to play 30 seconds of its first track.</p>
      <form id="search-form">
          <input type="text" id="query" value="" class="form-control" placeholder="Type an Artist Name" v-model="track.artist"/>
          <button class="btn btn-primary" v-on:click="getAlbums">Submit</button>
      </form>
      <div id="results" v-model="result">{{ result }}</div>
    </div>

  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Main',
  data () {
    return {
      msg: 'We Will Build Something Cool Here',
      login: '',
      track: {
        artist: ''
      },
      result: ''
    }
  },
  methods: {
    getAlbums() {
      let self = this
      axios.post('http://localhost:3000/api/search', this.track).then((response) => {
        this.result = response.data
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
body {
    padding: 20px;
}
#search-form, .form-control {
    margin-bottom: 20px;
}
.cover {
    width: 300px;
    height: 300px;
    display: inline-block;
    background-size: cover;
}
.cover:hover {
    cursor: pointer;
}
.cover.playing {
    border: 5px solid #e45343;
}
</style>
