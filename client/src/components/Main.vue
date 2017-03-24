<template>
  <div class="main">
    <div class="container">
      <h1>Search for an Artist</h1>
      <p>Type an artist name and click on "Search". Then, click on any album from the results to play 30 seconds of its first track.</p>
      <form id="search-form">
          <input type="text" id="query" value="" class="form-control" placeholder="Type an Artist Name"/>
          <input type="submit" id="search" class="btn btn-primary" v-on:click="getAlbums"/>
      </form>
      <div id="results"></div>
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
      login: ''
    }
  },
  methods: {
    getToken() {
      let self = this
      let token  = JSON.parse(localStorage.getItem("token"))
      console.log(token);
      axios.get('http://localhost:3000/api/verify/' + token).then((response) => {
        // console.log(response.data.user);
        if (!response.data.user) {
          window.location = 'http://localhost:8080/#/login'
        } else {
          window.location = 'http://localhost:8080/#/'
          if(token) {
            self.login = 'Selamat Datang, ' + response.data.userdata[0].fullname
          } else {
            self.login = 'Login'
          }
          self.register = 'Logout'
        }
      })
    },
    getAlbums() {
      axios.get('http://https://api.spotify.com/v1/search/' + 'danilla').then((response) => {
        console.log(response)
      })
    }
  },
  mounted () {
    this.getToken()
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
