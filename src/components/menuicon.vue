<template>
    <div id="Menu" :class="{'open' : toggle}">
        <button :class="{'is-active' : toggle}" class="hamburger hamburger--stand js-hamburger"  @click="Toggle" type="button">
            <span class="hamburger-box">
                <span class="hamburger-inner"></span>
            </span>
        </button>
        <ul class="menu_list">
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
    name:'menu',
    data () {
        return {
            toggle:false
        }
    },
    methods : {
        Toggle : function () {
            this.toggle = !this.toggle;
        }
    }
}
</script>

<style>
#Menu{
    background: transparent;
    width: 50%;
    height: calc(100% - 70px);
    position: absolute;
    top: 0;
    bottom: 0;
    right: 30px;
    -webkit-clip-path: circle(10% at 83% 50%);
    clip-path: circle(10% at 83% 50%);
    z-index: 1;
    -webkit-transition: all .45s cubic-bezier(0.18, 0.89, 0.32, 1.28);
    -moz-transition: all .45s cubic-bezier(0.18, 0.89, 0.32, 1.28);
    -ms-transition: all .45s cubic-bezier(0.18, 0.89, 0.32, 1.28);
    -o-transition: all .45s cubic-bezier(0.18, 0.89, 0.32, 1.28);
    transition: all .45s cubic-bezier(0.18, 0.89, 0.32, 1.28);
    opacity: 0;
}

#Menu.open{
    background: #ffff00;
    -webkit-clip-path: circle(95% at 100% 50%);
    clip-path: circle(95% at 100% 50%);
    -webkit-transition: all .45s cubic-bezier(0.18, 0.89, 0.32, 1.28)!important;
    -moz-transition: all .45s cubic-bezier(0.18, 0.89, 0.32, 1.28)!important;
    -ms-transition: all .45s cubic-bezier(0.18, 0.89, 0.32, 1.28)!important;
    -o-transition: all .45s cubic-bezier(0.18, 0.89, 0.32, 1.28)!important;
    transition: all .45s cubic-bezier(0.18, 0.89, 0.32, 1.28)!important;
}

#Menu.open .menu_list{
    opacity: 1;
    -webkit-transition: all .6s ease-out;
    -moz-transition: all .6s ease-out;
    -ms-transition: all .6s ease-out;
    -o-transition: all .6s ease-out;
    transition: all .6s ease-out;
}

#Menu .menu_list{
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
    -webkit-transition: opacity .6s ease-out;
    -moz-transition: opacity .6s ease-out;
    -ms-transition: opacity .6s ease-out;
    -o-transition: opacity .6s ease-out;
    transition: opacity .6s ease-out;
}

#Menu .menu_list li{
    float: right;
    width: 100%;
    margin-bottom: 25px;
}

#Menu .menu_list li a{
    color: #444;
    text-decoration: none;
    font-size: 18px;
    display: block;
    width: 100%;
    text-align: center;
}

.loaded #Menu {
    opacity: 1;
    -webkit-transition: all .6s ease-out;
    -moz-transition: all .6s ease-out;
    -ms-transition: all .6s ease-out;
    -o-transition: all .6s ease-out;
    transition: all .6s ease-out;
}

#Menu .hamburger{
    position: absolute;
    top: 50%;
    right: 85px;
    -ms-transform: translate(0%, -50%);
    -webkit-transform: translate(0%, -50%);
    transform: translate(0%, -50%);
    outline: none;
    box-shadow: none;
    border-radius: 50%;
    height: 60px;
    width: 60px;
    border:0;
    padding: 0;
    line-height: 1;
}

#Menu .hamburger:after{
    content: '';
    position: absolute;
    right: 0;
    top: 0;
    bottom: 0;
    left: 0;
    z-index: -1;
    -webkit-clip-path: circle(10% at 50% 50%);
    clip-path: circle(10% at 50% 50%);
    -webkit-transition: all .2s cubic-bezier(0.18, 0.89, 0.32, 1.28);
    -moz-transition: all .2s cubic-bezier(0.18, 0.89, 0.32, 1.28);
    -ms-transition: all .2s cubic-bezier(0.18, 0.89, 0.32, 1.28);
    -o-transition: all .2s cubic-bezier(0.18, 0.89, 0.32, 1.28);
    transition: all .2s cubic-bezier(0.18, 0.89, 0.32, 1.28);
}

#Menu .hamburger:hover:after{
    background: #ffff00;
    -webkit-clip-path: circle(45% at 50% 50%);
    clip-path: circle(45% at 50% 50%);
    -webkit-transition: all .2s cubic-bezier(0.18, 0.89, 0.32, 1.28);
    -moz-transition: all .2s cubic-bezier(0.18, 0.89, 0.32, 1.28);
    -ms-transition: all .2s cubic-bezier(0.18, 0.89, 0.32, 1.28);
    -o-transition: all .2s cubic-bezier(0.18, 0.89, 0.32, 1.28);
    transition: all .2s cubic-bezier(0.18, 0.89, 0.32, 1.28);
}

#Menu .hamburger-box{
    width: 30px;
}

#Menu .hamburger-inner,#Menu .hamburger-inner:after,#Menu .hamburger-inner:before{
    width: 30px;
}
</style>
