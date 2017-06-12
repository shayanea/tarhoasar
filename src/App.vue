<template>
	<div id="app" :class="{'show_border' : border,'loaded' : loaded, 'main_logo' : Main,'inner_logo' : Inner}" >
		<div class="line_top"></div>
		<div class="line_right"></div>
		<div class="line_bottom"></div>
		<div class="line_left"></div>
		<!--{{this.$route}}-->
		<router-view></router-view>
		<logo></logo>
	</div>
</template>

<script>
import Logo from './components/logo'

export default {
	name: 'app',
	data () {
		return {
			border:false,
			Main:false,
			Inner:false,
			loaded:false
		}
	},
	components:{
		'logo':Logo
	},
	created () {
		if(navigator.userAgent.toLowerCase().indexOf('firefox') == -1){
			document.body.className += "chrome";
		}else{
			document.body.className += "firefox";
		}
		if(this.$router.currentRoute.name == 'Index'){
			this.Main = true;
			document.querySelector("body").style.cssText += "overflow:hidden;height:100%";
		}else{
			this.Inner = true;
			document.querySelector("body").style.cssText += "overflow:auto;height:auto";
		}
		var self = this;
		setTimeout(function(){
			return self.border = true;
		},500);
		setTimeout(function(){
			return self.loaded = true;
		},1500);
	},
	watch: {
    	'$route': function(newRoute, oldRoute) {
    		if(newRoute.name == "Index"){
				this.Main = true;
				this.Inner = false;
				document.querySelector("body").style.cssText += "overflow:hidden;height:100%";
			}else{
				this.Main = false;
				this.Inner = true;
				document.querySelector("body").style.cssText += "overflow:auto;height:auto";
			}
      },
    },
}
</script>

<style>
#app {
	height: 100%;
}
</style>
