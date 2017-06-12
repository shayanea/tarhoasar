<template>
    <div class="inner_page">
        <menuicon></menuicon>
        <loader :show="Loading"></loader>
        <div class="container" v-show="!Loading">
            <div class="row">
                <div class="col-md-1 col-sm-1 col-xs-12"></div>
                <div class="col-md-9 col-sm-9 col-xs-12 margin-top">
                    <div class="row project_list">
                        <div class="col-md-6 col-sm-6 col-xs-12" v-for="(item, index) in list">
                            <a :href="'#/project/' + item.id">
                                <figure>
                                    <img :src="item.data.header" :alt="item.data.title" class="project_title">
                                    <div class="caption">
                                        <h2>{{item.data.title}}</h2>
                                        <h4>{{item.data.description}}</h4>
                                    </div>
                                </figure>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import MenuIcon from '../components/menuicon'
import Loader from '../components/loader'

export default {
    name: 'projects',
    components: {
        'menuicon': MenuIcon,
        'loader':Loader
    },
    data() {
        return {
            list:[],
            Loading:true
        }
    },
    created() {
        return this.GetData(), 
        document.title = "Projects List";
    },
    methods: {
        GetData : function(){
            this.Loading = true;
            this.$http.get('http://tarhoasargroup.com/api/getwidget/project')
            .then(function(res) {
                for(var i = 0;res.data.length > i; i++){
                    this.list.push({data:JSON.parse(res.data[i].data),id:res.data[i].id});
                }
                console.log(this.list)
                this.Loading = false;
            },function(err){
                console.log(err);
                this.Loading = false;
            });
        }
    }
}
</script>

<style>
.margin-top {
    /*margin-top: -60px;*/
}

.project_list:first-child [class*=' col-'] {
    margin-bottom: 30px;
}

.project_list [class*=' col-'] a {
    display: block;
}

.project_list figure {
    margin: 0 auto;
    position: relative;
    overflow: hidden;
}

.project_list figure img {
    display: block;
    max-width: 100%;
    height: auto;
    width: 100%;
    object-fit: cover;
    object-position: center;
    max-height: 470px;
    min-height: 470px;
}

.project_list .caption {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    padding: 30px 0;
    background-color: rgba(0, 0, 0, 0.7);
    -o-ms-transform: translate(0%, 100%);
    -ms-transform: translate(0%, 100%);
    -webkit-transform: translate(0%, 100%);
    transform: translate(0%, 100%);
    -webkit-transition: transform .25s ease-out;
    -moz-transition: transform .25s ease-out;
    -ms-transition: transform .25s ease-out;
    -o-transition: transform .25s ease-out;
    transition: transform .25s ease-out;
}

.project_list figure:hover .caption {
    -o-ms-transform: translate(0%, 0%);
    -ms-transform: translate(0%, 0%);
    -webkit-transform: translate(0%, 0%);
    transform: translate(0%, 0%);
    -webkit-transition: transform .25s ease-out;
    -moz-transition: transform .25s ease-out;
    -ms-transition: transform .25s ease-out;
    -o-transition: transform .25s ease-out;
    transition: transform .25s ease-out;
}

.project_list .caption h2 {
    font-size: 15px;
    color: #EDED43;
    text-align: center;
    margin: 0;
    margin-bottom: 15px;
}

.project_list .caption h4 {
    font-size: 13px;
    color: #fff;
    text-align: center;
    margin: 0;
}

@media(max-width:768px) {
    .margin-top {
        margin-top: 0;
    }
    .project_list:last-child [class*=' col-'] {
        margin-bottom: 35px;
    }
    .project_list figure img{
        max-height: 250px;
        min-height: 250px;
    }
    .project_list .caption{
        -o-ms-transform: translateY(0%);
        -webkit-transform: translateY(0%);
        transform: translateY(0%);
    }
}
</style>
