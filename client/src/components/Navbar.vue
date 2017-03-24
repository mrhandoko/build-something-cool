<template>
  <div class="navbar">
    <div class="navbar navbar-default navbar-fixed-top">
      <div class="container">
        <div class="navbar-header">
          <a href="/#/" class="navbar-brand"><strong>{{ title }}</strong></a>
          <button class="navbar-toggle" type="button" data-toggle="collapse" data-target="#navbar-main">
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
        </div>
        <div class="navbar-collapse collapse" id="navbar-main">
          <ul class="nav navbar-nav">
            <li>
              <router-link to="Article">Create New Article</router-link>
            </li>
            <li>
              <router-link to="Register">Register</router-link>
            </li>
          </ul>

          <ul class="nav navbar-nav navbar-right">
            <li><a href="/#/login">{{ login }}</a></li>
            <li><a v-on:click="onLogout">{{ register }}</a></li>
          </ul>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'

  export default {
    data () {
      return {
        title: 'Build Something Cool',
        login: 'Login',
        register: ''
      }
    },
    methods: {
      getToken() {
        let self = this
        let token  = JSON.parse(localStorage.getItem("token"))
        axios.get('http://localhost:3000/api/verify/' + token).then((response) => {
          if (!response.data.user) {
            window.location = 'http://localhost:8080/#/'
          } else {
            if(token) {
              self.login = 'Selamat Datang, ' + response.data.userdata[0].fullname
            } else {
              self.login = 'Login'
            }
            self.register = 'Logout'
          }
        })
      },
      onLogout() {
        localStorage.clear();
        self.login = 'Login'
        self.register = ''
        window.location = 'http://localhost:8080/#/login'
      }
    },
    mounted() {
      this.getToken()
    }
  }
</script>
<style scoped>
</style>
