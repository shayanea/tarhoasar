<template>
    <div class="menu_holder" :class="{'open' : toggle}">
        <div id="placeholder"></div>
        <button :class="{'is-active' : toggle}" id="hamburger" class="hamburger hamburger--stand js-hamburger" @click="Toggle" type="button">
            <span class="hamburger-box">
                <span class="hamburger-inner"></span>
            </span>
        </button>
        <div id="Menu" :class="{'open' : toggle}">
        </div>
        <ul :class="{'open' : toggle}" class="menu_list">
            <li>
                <router-link v-if="!Main" to="/">Home</router-link>
            </li>
            <li>
                <router-link to="/about">About us</router-link>
            </li>
            <li>
                <router-link to="/projects">Projects</router-link>
            </li>
            <li>
                <router-link to="/contact">Contact us</router-link>
            </li>
        </ul>
    </div>
</template>

<script>
import icon from '../assets/icon.css'

export default {
    name: 'menu',
    data() {
        return {
            toggle: false,
            Main: false
        }
    },
    created() {
        if (this.$router.currentRoute.name == 'Index') {
            this.Main = true;
        } else {
            this.Inner = true;
        }
    },
    methods: {
        Toggle: function () {
            this.toggle = !this.toggle;
        }
    }
}
</script>

<style>
#Menu {
    background: transparent;
    width: 50%;
    height: calc(100% - 70px);
    position: absolute;
    top: 0;
    bottom: 0;
    right: 30px;
    z-index: 1;
    -webkit-transition: all .45s cubic-bezier(0.18, 0.89, 0.32, 1.28);
    -moz-transition: all .45s cubic-bezier(0.18, 0.89, 0.32, 1.28);
    -ms-transition: all .45s cubic-bezier(0.18, 0.89, 0.32, 1.28);
    -o-transition: all .45s cubic-bezier(0.18, 0.89, 0.32, 1.28);
    transition: all .45s cubic-bezier(0.18, 0.89, 0.32, 1.28);
    opacity: 0;
    z-index: 9;
}

.firefox #placeholder{
    width: 60%;
    height:0;
    padding-bottom: 60%;
    -moz-border-radius: 60%; 
    -webkit-border-radius: 60%; 
    border-radius: 60%;
    background: #4679BD;
    position: relative;
    right: -20%;
    margin-top: -50px;
    opacity: 0;
    visibility: hidden;
    -webkit-transition: all .45s cubic-bezier(0.18, 0.89, 0.32, 1.28)!important;
    -moz-transition: all .45s cubic-bezier(0.18, 0.89, 0.32, 1.28)!important;
    -ms-transition: all .45s cubic-bezier(0.18, 0.89, 0.32, 1.28)!important;
    -o-transition: all .45s cubic-bezier(0.18, 0.89, 0.32, 1.28)!important;
    transition: all .45s cubic-bezier(0.18, 0.89, 0.32, 1.28)!important;
}
.firefox .inner_page #placeholder{
    display: none;
}

.chrome #Menu {
    -webkit-clip-path: circle(10% at 87% 50%);
    clip-path: circle(10% at 87% 50%);
}
.inner_page #Menu{
    position: fixed;
    max-height: 450px;
    max-width: 600px;
    width: 450px;
    right: auto;
    left: 50%;
    top: 50%;
    -ms-transform: translate(-50%, -50%);
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    z-index: -1;
    overflow: visible;
    -webkit-transition: all .45s ease;
    -moz-transition: all .45s ease;
    -ms-transition: all .45s ease;
    -o-transition: all .45s ease;
    transition: all .45s ease;
}

.firefox .inner_page #Menu{
    height: 450px;
    border-radius: 50%;
    clip-path: none;
}

.chrome .inner_page #Menu{
    -webkit-clip-path: circle(10% at 50% 50%);
    clip-path: circle(10% at 50% 50%);
}

.inner_page .menu_holder:after{
    content: '';
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: hsla(0, 0%, 0%, 0.37);
    opacity: 0;
    visibility: hidden;
    z-index: 99;
    -webkit-transition: all .2s ease-out;
    -moz-transition: all .2s ease-out;
    -ms-transition: all .2s ease-out;
    -o-transition: all .2s ease-out;
    transition: all .2s ease-out;
}

.inner_page .menu_holder.open:after{
    opacity: 1;
    visibility: visible;
    -webkit-transition: all .2s ease-out;
    -moz-transition: all .2s ease-out;
    -ms-transition: all .2s ease-out;
    -o-transition: all .2s ease-out;
    transition: all .2s ease-out;
}

#Menu.open {
    z-index: 99;
    -webkit-transition: all .45s cubic-bezier(0.18, 0.89, 0.32, 1.28)!important;
    -moz-transition: all .45s cubic-bezier(0.18, 0.89, 0.32, 1.28)!important;
    -ms-transition: all .45s cubic-bezier(0.18, 0.89, 0.32, 1.28)!important;
    -o-transition: all .45s cubic-bezier(0.18, 0.89, 0.32, 1.28)!important;
    transition: all .45s cubic-bezier(0.18, 0.89, 0.32, 1.28)!important;
}

.firefox .main_page .menu_holder.open #placeholder{
    background: #ffff00;
    opacity: 1;
    visibility: visible;
    -webkit-transition: all .45s cubic-bezier(0.18, 0.89, 0.32, 1.28)!important;
    -moz-transition: all .45s cubic-bezier(0.18, 0.89, 0.32, 1.28)!important;
    -ms-transition: all .45s cubic-bezier(0.18, 0.89, 0.32, 1.28)!important;
    -o-transition: all .45s cubic-bezier(0.18, 0.89, 0.32, 1.28)!important;
    transition: all .45s cubic-bezier(0.18, 0.89, 0.32, 1.28)!important;
}

.chrome #Menu.open {
    background: #ffff00;
    -webkit-clip-path: circle(95% at 100% 50%);
    clip-path: circle(95% at 100% 50%);
}

.inner_page #Menu.open{
    -webkit-transition: all .45s ease!important;
    -moz-transition: all .45s ease!important;
    -ms-transition: all .45s ease!important;
    -o-transition: all .45s ease!important;
    transition: all .45s ease!important;
    z-index: 999;
    background: #ffff00;
}

.chrome .inner_page #Menu.open{
    -webkit-clip-path: circle(50% at 50% 50%);
    clip-path: circle(50% at 50% 50%);
}

.open.menu_list {
    opacity: 1;
    visibility: visible;
    -webkit-transition: all .45s ease-out;
    -moz-transition: all .45s ease-out;
    -ms-transition: all .45s ease-out;
    -o-transition: all .45s ease-out;
    transition: all .45s ease-out;
}

.menu_list {
    list-style: none;
    display: block;
    position: fixed;
    top: 52%;
    right: 300px;
    -ms-transform: translate(0%, -50%);
    -webkit-transform: translate(0%, -50%);
    transform: translate(0%, -50%);
    margin: 0;
    padding-right: 0;
    width: 100px;
    opacity: 0;
    visibility: hidden;
    z-index: 999;
    -webkit-transition: opacity .2s ease-out;
    -moz-transition: opacity .2s ease-out;
    -ms-transition: opacity .2s ease-out;
    -o-transition: opacity .2s ease-out;
    transition: opacity .2s ease-out;
}

.inner_page .menu_list{
    right: auto;
    left: 50%;
    top: 50%;
    -ms-transform: translate(-50%, -50%);
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    z-index: 99999;
}

.menu_list li {
    float: right;
    width: 100%;
    margin-bottom: 25px;
}

.menu_list li:last-child{
    margin-bottom: 0;
}

.menu_list li a {
    color: #444;
    text-decoration: none;
    font-size: 18px;
    display: block;
    width: 100%;
    text-align: center;
    position: relative;
    overflow: hidden;
    padding-bottom: 10px;
}

.menu_list li a:after {
    content: '';
    position: absolute;
    right: 0;
    bottom: 0px;
    width: 100%;
    height: 1px;
    background: #000;
    transform: translate(100%, 0%);
    -webkit-transition: all .35s ease-out;
    -moz-transition: all .35s ease-out;
    -ms-transition: all .35s ease-out;
    -o-transition: all .35s ease-out;
    transition: all .35s ease-out;
}

.menu_list li a:hover:after {
    transform: translate(-100%, 0%);
    -webkit-transition: all .35s ease-out;
    -moz-transition: all .35s ease-out;
    -ms-transition: all .35s ease-out;
    -o-transition: all .35s ease-out;
    transition: all .35s ease-out;
}

.loaded #Menu,
.loaded #hamburger {
    opacity: 1;
    -webkit-transition: all .35s ease-out;
    -moz-transition: all .35s ease-out;
    -ms-transition: all .35s ease-out;
    -o-transition: all .35s ease-out;
    transition: all .35s ease-out;
}

#hamburger {
    position: absolute;
    top: calc(50% - 30px);
    right: 85px;
    -ms-transform: translate(0%, -50%);
    -webkit-transform: translate(0%, -50%);
    transform: translate(0%, -50%);
    outline: none;
    box-shadow: none;
    border-radius: 50%;
    height: 60px;
    width: 60px;
    border: 0;
    padding: 0;
    line-height: 1;
    z-index: 999;
    opacity: 0;
}

.inner_page #hamburger{
    position: fixed;
    top: 85px;
    -ms-transform: translate(0%, 0%);
    -webkit-transform: translate(0%, 0%);
    transform: translate(0%, 0%);
}

#hamburger:after {
    content: '';
    position: absolute;
    right: 0;
    top: 0;
    bottom: 0;
    left: 0;
    z-index: 99;
    -webkit-clip-path: circle(10% at 50% 50%);
    clip-path: circle(10% at 50% 50%);
    -webkit-transition: all .2s cubic-bezier(0.18, 0.89, 0.32, 1.28);
    -moz-transition: all .2s cubic-bezier(0.18, 0.89, 0.32, 1.28);
    -ms-transition: all .2s cubic-bezier(0.18, 0.89, 0.32, 1.28);
    -o-transition: all .2s cubic-bezier(0.18, 0.89, 0.32, 1.28);
    transition: all .2s cubic-bezier(0.18, 0.89, 0.32, 1.28);
}

.firefox #hamburger:after{
    height: 60px;
    width: 60px;
    border-radius: 50%;
}

#hamburger:hover:after {
    background: #ffff00;
    -webkit-transition: all .2s cubic-bezier(0.18, 0.89, 0.32, 1.28);
    -moz-transition: all .2s cubic-bezier(0.18, 0.89, 0.32, 1.28);
    -ms-transition: all .2s cubic-bezier(0.18, 0.89, 0.32, 1.28);
    -o-transition: all .2s cubic-bezier(0.18, 0.89, 0.32, 1.28);
    transition: all .2s cubic-bezier(0.18, 0.89, 0.32, 1.28);
}

.chrome #hamburger:hover:after{
    -webkit-clip-path: circle(45% at 50% 50%);
    clip-path: circle(45% at 50% 50%);
}

#hamburger .hamburger-box {
    width: 25px;
    z-index: 999;
    margin-top: 4px;
}

#hamburger .hamburger-inner,
#hamburger .hamburger-inner:after,
#hamburger .hamburger-inner:before {
    width: 25px;
}

/*.hamburger-inner,
.hamburger-inner:after,
.hamburger-inner:before {
    height: 3px!important;
}*/

@media(max-width:1024px){
    .chrome #Menu.open{
        -webkit-clip-path: circle(82% at 100% 50%);
        clip-path: circle(82% at 100% 50%);
    }
}

@media(max-width:768px) {
    #hamburger {
        top: calc(50% - 45px);
    }
    .chrome #Menu.open{
        -webkit-clip-path: circle(50% at 100% 50%);
        clip-path: circle(50% at 100% 50%);
    }
    .menu_list{
        top: 49%;
        right: 200px;
    }
}

@media(max-width:568px) {
    #hamburger {
        top: 65%;
        right: auto;
        left: 50%;
        -webkit-transform: translate(-50%, -50%);
        transform: translate(-50%, -50%);
    }
    .inner_page #hamburger {
        right: 45px;
        top: 55px;
        z-index: 99999;
    }
    .menu_list {
        top: 50%;
        left: 50%;
        right: auto;
        -webkit-transform: translate(-50%, -50%);
        transform: translate(-50%, -50%);
    }
    .chrome #Menu {
        width: calc(100% - 65px);
        -webkit-clip-path: circle(10% at 80% 10%);
        clip-path: circle(10% at 80% 10%);
    }
    #Menu.open{
        opacity: 1!important;
        visibility: visible!important;
        width: 100%;
        top: 0;
        right: 0;
        height: 100%;
        bottom: 0;
        position: fixed;
        z-index: 99;
    }
    .chrome #Menu.open{
        -webkit-clip-path: circle(100% at 0% 50%)!important;
        clip-path: circle(100% at 0% 50%)!important;
    }
    .inner_page #Menu {
        width: 100%;
        right: 0;
        left: 0;
        top: 0;
        bottom: 0;
        height: 100%;
        max-height: 100%;
        max-width: 100%;
        -webkit-transform: translate(0%,0%);
        transform: translate(0%,0%);
    }
    .chrome .inner_page #Menu {
        -webkit-clip-path: circle(100% at 10% 50%)!important;
        clip-path: circle(100% at 10% 50%)!important;
    }
    .loaded #Menu{
        opacity: 0;
        visibility: hidden;
    }
}
</style>
