<template>
    <div class="inner_page">
        <menuicon></menuicon>
        <loader :show="Loading"></loader>
        <div class="container" v-show="!Loading">
            <div class="row">
                <div class="col-md-1 col-sm-1 col-xs-12"></div>
                <div class="col-md-9 col-sm-9 col-xs-12">
                    <div class="col-md-12 col-sm-12 col-xs-12">
                        <slider animation="fade" height="300px" interval="6000">
                            <slider-item v-for="(item, index) in about.gallery" :key="index">
                                 <img :src="item.src" class="img-responsive" />
                            </slider-item>
                        </slider>
                        <h2 class="about_title">{{about.title}}</h2>
                        <p class="about_desc">{{about.description}}</p>
                    </div>
                    <div class="col-md-6 col-sm-6 col-xs-12 about_item" v-for="(item, index) in about.teams">
                        <img :src="item.src" alt="" class="img-responsive">
                        <h3 class="person_name">{{item.name}}</h3>
                        <p class="person_position">{{item.position}}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import MenuIcon from '../components/menuicon'
import Loader from '../components/loader'
import { Slider, SliderItem } from 'vue-easy-slider'

export default {
    name: 'about',
    data(){
        return {
            Loading:true,
            about:{}
        }
    },
    components:{
        'menuicon':MenuIcon,
        'loader':Loader,
        Slider,
        SliderItem
    },
    created() {
        return this.GetData(),
        document.title = "About us";
    },
    methods : {
        GetData : function (){
            this.$http.get('http://tarhoasargroup.com/api/getwidget/about')
            .then(function(res){
                console.log(res.data);
                if(res.data[0].data !== null){
                    this.about = JSON.parse(res.data[0].data);
                }
                this.Loading = false;
            },function(err){
                console.log(err.data);
            });
        }
    }
}
</script>

<style>
.inner_about_header {
    max-height: 400px;
    width: 100%;
    object-fit: cover;
    object-position: center;
}

.about_title {
    font-size: 24px;
    color: #888;
    font-family: "IRANSANS BOLD";
    margin: 40px auto;
    line-height: 1;
    text-align: left;
    position: relative;
    padding-left: 20px;
}

.about_title:before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 4px;
    background-color: #EDED43;
}

.about_desc {
    font-size: 14px;
    color: #999999;
    text-align: justify;
    margin-bottom: 40px;
    direction: ltr;
}

.about_item img {
    max-height: 400px;
    width: 100%;
    object-fit: cover;
    object-position: top center;
}

.about_item .person_name {
    color: #777;
    font-size: 1.2em;
    text-align: center;
}

.about_item .person_position {
    color: #999;
    font-size: 16px;
    text-align: center;
}
.btn-right[data-v-5dba9d84],
.btn-left[data-v-5dba9d84]{
    background: transparent!important;
    outline: none!important;
}
.indi-center[data-v-5dba9d84]{
    display: none;
}
.slider-item img{
    object-fit: cover;
    object-position: center center;
}
@media (max-width:786px){
    .slider[data-v-5dba9d84]{
        height: 150px!important;
    }
    .about_desc{
        text-align: left;
    }
}
</style>

