<template>
  <div class="container">
    <div class="row">
    	<div class="col-md-4 col-md-offset-4">
    		<div class="panel panel-default">
			  	<div class="panel-heading">
			    	<h3 class="panel-title">Login</h3>
			 	  </div>
			  	<div class="panel-body">
              <fieldset>
                  <div class="warning">{{ usernotfound }}</div>
                  <div class="warning">{{ passworderror }}</div>
  			    	  	<div class="form-group">
  			    		    <input class="form-control" placeholder="Username" name="username" type="text" v-model="dataLogin.username">
  			    		  </div>
  			    		  <div class="form-group">
  			    			  <input class="form-control" placeholder="Password" name="password" type="password" v-model="dataLogin.password">
  			    		  </div>
  			    		<input class="btn btn-lg btn-success btn-block" type="submit" value="Login" v-on:click="onLogin">
  			    	</fieldset>
			    </div>
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
        usernotfound: '',
        passworderror: '',
        dataLogin: {
          username: '',
          password: ''
        }
      }
    },
    methods: {
      onLogin () {
        let self = this
        axios.post('http://localhost:3000/api/login', this.dataLogin).then((response) => {
          if(response.data.usernotfound) {
            self.usernotfound = 'User not found, please sign up to join the community'
          } else {
            if(response.data.passworderror) {
              self.passworderror = 'Wrong Password, please try again'
            } else {
              localStorage.setItem('token', JSON.stringify(response.data.token))
              window.location = "http://localhost:8080/#/"
            }
          }
        })
      }
    }
  }
</script>

<style scoped>
.warning {
  color: red;
}

.white{
    color:#000;
    background-color:#fff;
}

.btn-facebook {
    color: #ffffff;
    -webkit-text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.25);
    text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.25);
    background-color: #2b4b90;
    *background-color: #133783;
    background-image: -moz-linear-gradient(top, #3b5998, #133783);
    background-image: -webkit-gradient(linear, 0 0, 0 100%, from(#3b5998), to(#133783));
    background-image: -webkit-linear-gradient(top, #3b5998, #133783);
    background-image: -o-linear-gradient(top, #3b5998, #133783);
    background-image: linear-gradient(to bottom, #3b5998, #133783);
    background-repeat: repeat-x;
    border-color: #133783 #133783 #091b40;
    border-color: rgba(0, 0, 0, 0.1) rgba(0, 0, 0, 0.1) rgba(0, 0, 0, 0.25);
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#ff3b5998', endColorstr='#ff133783', GradientType=0);
    filter: progid:DXImageTransform.Microsoft.gradient(enabled=false);
}

    .btn-facebook:hover,
    .btn-facebook:focus,
    .btn-facebook:active,
    .btn-facebook.active,
    .btn-facebook.disabled,
    .btn-facebook[disabled] {
        color: #ffffff;
        background-color: #133783 !important;
        *background-color: #102e6d !important;
    }

    .btn-facebook:active,
    .btn-facebook.active {
        background-color: #0d2456 \9 !important;
    }
</style>
