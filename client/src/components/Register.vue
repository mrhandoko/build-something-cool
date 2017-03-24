<template>
  <div class="container">
      <div class="row">
        <div class="col-xs-12 col-sm-8 col-md-6 col-sm-offset-2 col-md-offset-3">
    		<form role="form">
    			<h4 style="text-align:left;">Register</h4>
    			<hr class="colorgraph">
    			<div class="form-group">
    				<input type="text" name="username" id="fullname" class="form-control input-lg" v-model="register.fullname" placeholder="fullname" tabindex="3">
    			</div>
          <div class="form-group">
    				<input type="text" name="username" id="username" class="form-control input-lg" v-model="register.username" placeholder="username" tabindex="3">
    			</div>
    			<div class="form-group">
    				<input type="email" name="email" id="email" class="form-control input-lg" v-model="register.email" placeholder="Email Address" tabindex="4">
    			</div>
          <div class="form-group">
            <input type="password" name="password" id="password" class="form-control input-lg" v-model="register.password" placeholder="Password" tabindex="5">
          </div>
    			<hr class="colorgraph">
    			<div class="row">
    				<div class="col-xs-12 col-md-6"><a class="btn btn-primary btn-block btn-lg" v-on:click="createUser" tabindex="7">Register</a></div>
    				<div class="col-xs-12 col-md-6"><a href="#" class="btn btn-success btn-block btn-lg">Sign In</a></div>
    			</div>
    		</form>
    	</div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'

  export default {
    data () {
      return {
        title: 'Live Coding 2',
        register : {
          fullname: '',
          username: '',
          email: '',
          password: ''
        }
      }
    },
    methods: {
      createUser() {
        console.log('halo');
        let self = this
        axios.post('http://localhost:3000/api/register', self.register).then((response) => {
          window.location = 'http://localhost:8080/#/'
        })
      }
    }
  }
</script>

<style scoped>
/* Credit to bootsnipp.com for the css for the color graph */
.colorgraph {
  height: 5px;
  border-top: 0;
  background: #c4e17f;
  border-radius: 5px;
  background-image: -webkit-linear-gradient(left, #c4e17f, #c4e17f 12.5%, #f7fdca 12.5%, #f7fdca 25%, #fecf71 25%, #fecf71 37.5%, #f0776c 37.5%, #f0776c 50%, #db9dbe 50%, #db9dbe 62.5%, #c49cde 62.5%, #c49cde 75%, #669ae1 75%, #669ae1 87.5%, #62c2e4 87.5%, #62c2e4);
  background-image: -moz-linear-gradient(left, #c4e17f, #c4e17f 12.5%, #f7fdca 12.5%, #f7fdca 25%, #fecf71 25%, #fecf71 37.5%, #f0776c 37.5%, #f0776c 50%, #db9dbe 50%, #db9dbe 62.5%, #c49cde 62.5%, #c49cde 75%, #669ae1 75%, #669ae1 87.5%, #62c2e4 87.5%, #62c2e4);
  background-image: -o-linear-gradient(left, #c4e17f, #c4e17f 12.5%, #f7fdca 12.5%, #f7fdca 25%, #fecf71 25%, #fecf71 37.5%, #f0776c 37.5%, #f0776c 50%, #db9dbe 50%, #db9dbe 62.5%, #c49cde 62.5%, #c49cde 75%, #669ae1 75%, #669ae1 87.5%, #62c2e4 87.5%, #62c2e4);
  background-image: linear-gradient(to right, #c4e17f, #c4e17f 12.5%, #f7fdca 12.5%, #f7fdca 25%, #fecf71 25%, #fecf71 37.5%, #f0776c 37.5%, #f0776c 50%, #db9dbe 50%, #db9dbe 62.5%, #c49cde 62.5%, #c49cde 75%, #669ae1 75%, #669ae1 87.5%, #62c2e4 87.5%, #62c2e4);
}
</style>
