<template>
    <div class="inner_page">
        <menuicon></menuicon>
        <loader :show="Loading"></loader>
        <div class="container" v-show="!Loading">
            <div class="row inner_project">
                <div class="col-md-1 col-sm-1 hidden-xs"></div>
                <div class="col-md-6 col-sm-6 hidden-xs">
                    <div class="project_cover">
                        <a :href="project.header" data-lightbox="gallery" :data-title="project.title">
                            <img :src="project.header" alt="" class="img-responsive">
                        </a>
                    </div>
                    <div class="row">                        
                        <div class="col-md-6 col-sm-12 col-xs-12 grid-col" v-for="(item, index) in project.gallery">
                            <a :href="item.src" class="grid-item" data-lightbox="gallery" :data-title="project.title">
                                <img :src="item.src">
                            </a>
                        </div>
                    </div>
                </div>
                <div class="col-md-3 col-sm-3 col-xs-12">
                    <div class="inner_project_header">
                        <h2>{{project.title}}</h2>
                        <h3>{{project.description}}</h3>
                    </div>
                    <div class="inner_project_description">
                        <div class="dynamic_text" v-html="project.content"></div>
                    </div>
                </div>
                <div class="hidden-lg hidden-md hidden-sm col-xs-12">
                    <div class="project_cover">
                        <a :href="project.header" data-lightbox="gallery" :data-title="project.title">
                            <img :src="project.header" alt="" class="img-responsive">
                        </a>
                    </div>
                    <div class="row">                        
                        <div class="col-md-6 col-sm-12 col-xs-12 grid-col" v-for="(item, index) in project.gallery">
                            <a :href="item.src" class="grid-item" data-lightbox="gallery" :data-title="project.title">
                                <img :src="item.src">
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
    name: 'project',
    data () {
        return {
            id:'',
            project:{},
            Loading:false 
        }
    },
    components: {
        'menuicon': MenuIcon,
        'loader':Loader
    },
    created() {
        return this.GetData(),
        document.title = "Project Detail";
    },
    mounted(){
        return lightbox.option({disableScrolling:true});
    },
    methods : {
        GetData(){
            this.Loading = true;
            this.$http.get('http://'+ window.location.hostname +'/api/getwidget/project')
            .then(function(res) {
                console.log(res.data);
                var item = res.data;
                for(var i = 0;item.length > i; i++){
                    if(item[i].id == this.$route.params.id){
                        this.project = JSON.parse(item[i].data);
                        this.project.content = this.project.content.replace(/\r?\n/g, '<br />');
                        this.id = this.$route.params.id;
                    }
                }
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
.inner_project_header {
    text-align: left;
    position: relative;
    padding-left: 20px;
}

.inner_project_header:before {
    content: '';
    position: absolute;
    left: 0;
    width: 5px;
    height: 100%;
    top: 0;
    bottom: 0;
    background: #EDED43;
}

.inner_project_header h2 {
    font-size: 26px;
    color: #666666;
    font-family: "IRANSANS BOLD";
    margin: 0;
    margin-bottom: 10px;
    line-height: normal;
    text-align: left;
}

.inner_project_header h3 {
    font-size: 21px;
    color: #999999;
    margin: 0;
    text-align: left;
}

.inner_project_description {
    font-size: 14px;
    color: #666;
    margin: 20px auto;
    text-align: left;
}

.inner_project_description span {
    display: block;
    margin-bottom: 15px;
}

.inner_project_content p {
    font-size: 14px;
    color: #999999;
    text-align: justify;
    direction: ltr;
}

.inner_project .project_cover {
    position: relative;
    cursor: pointer;
    margin-bottom: 25px;
}

.inner_project .project_cover a {
    display: block;
    position: relative;
}

.inner_project .project_cover a:after {
    content: '';
    position: absolute;
    left: 50%;
    top: 50%;
    width: 25px;
    height: 25px;
    opacity: 0;
    background-image: url(data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMS4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDQ1MSA0NTEiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQ1MSA0NTE7IiB4bWw6c3BhY2U9InByZXNlcnZlIiB3aWR0aD0iMTI4cHgiIGhlaWdodD0iMTI4cHgiPgo8Zz4KCTxwYXRoIGQ9Ik00NDcuMDUsNDI4bC0xMDkuNi0xMDkuNmMyOS40LTMzLjgsNDcuMi03Ny45LDQ3LjItMTI2LjFDMzg0LjY1LDg2LjIsMjk4LjM1LDAsMTkyLjM1LDBDODYuMjUsMCwwLjA1LDg2LjMsMC4wNSwxOTIuMyAgIHM4Ni4zLDE5Mi4zLDE5Mi4zLDE5Mi4zYzQ4LjIsMCw5Mi4zLTE3LjgsMTI2LjEtNDcuMkw0MjguMDUsNDQ3YzIuNiwyLjYsNi4xLDQsOS41LDRzNi45LTEuMyw5LjUtNCAgIEM0NTIuMjUsNDQxLjgsNDUyLjI1LDQzMy4yLDQ0Ny4wNSw0Mjh6IE0yNi45NSwxOTIuM2MwLTkxLjIsNzQuMi0xNjUuMywxNjUuMy0xNjUuM2M5MS4yLDAsMTY1LjMsNzQuMiwxNjUuMywxNjUuMyAgIHMtNzQuMSwxNjUuNC0xNjUuMywxNjUuNEMxMDEuMTUsMzU3LjcsMjYuOTUsMjgzLjUsMjYuOTUsMTkyLjN6IiBmaWxsPSIjRkZGRkZGIi8+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPC9zdmc+Cg==);
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    -ms-transform: translate(-50%, -50%);
    -moz-transform: translate(-50%, -50%);
    -o-transform: translate(-50%, -50%);
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    -webkit-transition: opacity .2s ease-out;
    -moz-transition: opacity .2s ease-out;
    -ms-transition: opacity .2s ease-out;
    -o-transition: opacity .2s ease-out;
    transition: opacity .2s ease-out;
}

.inner_project .project_cover a:hover:after {
    opacity: 1;
    -webkit-transition: opacity .2s ease-out;
    -moz-transition: opacity .2s ease-out;
    -ms-transition: opacity .2s ease-out;
    -o-transition: opacity .2s ease-out;
    transition: opacity .2s ease-out;
    -webkit-transition-delay: .25s;
    -moz-transition-delay: .25s;
    -o-transition-delay: .25s;
    transition-delay: .25s;
}

.inner_project .project_cover a:before {
    content: '';
    position: absolute;
    left: 15px;
    right: 15px;
    top: 15px;
    bottom: 15px;
    -ms-transform: scale(0, 0);
    -moz-transform: scale(0, 0);
    -o-transform: scale(0, 0);
    -webkit-transform: scale(0, 0);
    transform: scale(0, 0);
    -webkit-transition: transform .2s ease-out;
    -moz-transition: transform .2s ease-out;
    -ms-transition: transform .2s ease-out;
    -o-transition: transform .2s ease-out;
    transition: transform .2s ease-out;
    background-color: rgba(255, 255, 51, 0.55);
}

.inner_project .project_cover a:hover:before {
    content: '';
    position: absolute;
    left: 15px;
    right: 15px;
    top: 15px;
    bottom: 15px;
    -ms-transform: scale(1, 1);
    -moz-transform: scale(1, 1);
    -o-transform: scale(1, 1);
    -webkit-transform: scale(1, 1);
    transform: scale(1, 1);
    -webkit-transition: transform .2s ease-out;
    -moz-transition: transform .2s ease-out;
    -ms-transition: transform .2s ease-out;
    -o-transition: transform .2s ease-out;
    transition: transform .2s ease-out;
    background-color: rgba(255, 255, 51, 0.55);
}

.inner_project .project_cover img {
    max-height: 400px;
    width: 100%;
    object-fit: cover;
    object-position: center;
}

.project_gallery {
    margin: 10px auto;
}

.project_gallery:after {
    content: '';
    display: block;
    clear: both;
}

.grid-col {
    margin-bottom: 30px;
}

.grid-item {
    cursor: pointer;
    position: relative;
    display: block;
}

.grid-item img {
    display: block;
    width: 100%;
    max-height: 300px;
    min-height: 300px;
    object-fit: cover;
    object-position: center;
}

.grid-item:after {
    content: '';
    position: absolute;
    left: 50%;
    top: 50%;
    width: 25px;
    height: 25px;
    opacity: 0;
    background-image: url(data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMS4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDQ1MSA0NTEiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQ1MSA0NTE7IiB4bWw6c3BhY2U9InByZXNlcnZlIiB3aWR0aD0iMTI4cHgiIGhlaWdodD0iMTI4cHgiPgo8Zz4KCTxwYXRoIGQ9Ik00NDcuMDUsNDI4bC0xMDkuNi0xMDkuNmMyOS40LTMzLjgsNDcuMi03Ny45LDQ3LjItMTI2LjFDMzg0LjY1LDg2LjIsMjk4LjM1LDAsMTkyLjM1LDBDODYuMjUsMCwwLjA1LDg2LjMsMC4wNSwxOTIuMyAgIHM4Ni4zLDE5Mi4zLDE5Mi4zLDE5Mi4zYzQ4LjIsMCw5Mi4zLTE3LjgsMTI2LjEtNDcuMkw0MjguMDUsNDQ3YzIuNiwyLjYsNi4xLDQsOS41LDRzNi45LTEuMyw5LjUtNCAgIEM0NTIuMjUsNDQxLjgsNDUyLjI1LDQzMy4yLDQ0Ny4wNSw0Mjh6IE0yNi45NSwxOTIuM2MwLTkxLjIsNzQuMi0xNjUuMywxNjUuMy0xNjUuM2M5MS4yLDAsMTY1LjMsNzQuMiwxNjUuMywxNjUuMyAgIHMtNzQuMSwxNjUuNC0xNjUuMywxNjUuNEMxMDEuMTUsMzU3LjcsMjYuOTUsMjgzLjUsMjYuOTUsMTkyLjN6IiBmaWxsPSIjRkZGRkZGIi8+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPC9zdmc+Cg==);
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    -ms-transform: translate(-50%, -50%);
    -moz-transform: translate(-50%, -50%);
    -o-transform: translate(-50%, -50%);
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    -webkit-transition: opacity .2s ease-out;
    -moz-transition: opacity .2s ease-out;
    -ms-transition: opacity .2s ease-out;
    -o-transition: opacity .2s ease-out;
    transition: opacity .2s ease-out;
}

.grid-item:hover:after {
    opacity: 1;
    -webkit-transition: opacity .2s ease-out;
    -moz-transition: opacity .2s ease-out;
    -ms-transition: opacity .2s ease-out;
    -o-transition: opacity .2s ease-out;
    transition: opacity .2s ease-out;
    -webkit-transition-delay: .25s;
    -moz-transition-delay: .25s;
    -o-transition-delay: .25s;
    transition-delay: .25s;
}

.grid-item:before {
    content: '';
    position: absolute;
    left: 15px;
    right: 15px;
    top: 15px;
    bottom: 15px;
    -ms-transform: scale(0, 0);
    -moz-transform: scale(0, 0);
    -o-transform: scale(0, 0);
    -webkit-transform: scale(0, 0);
    transform: scale(0, 0);
    -webkit-transition: transform .2s ease-out;
    -moz-transition: transform .2s ease-out;
    -ms-transition: transform .2s ease-out;
    -o-transition: transform .2s ease-out;
    transition: transform .2s ease-out;
    background-color: rgba(255, 255, 51, 0.55);
}

.grid-item:hover:before {
    content: '';
    position: absolute;
    left: 15px;
    right: 15px;
    top: 15px;
    bottom: 15px;
    -ms-transform: scale(1, 1);
    -moz-transform: scale(1, 1);
    -o-transform: scale(1, 1);
    -webkit-transform: scale(1, 1);
    transform: scale(1, 1);
    -webkit-transition: transform .2s ease-out;
    -moz-transition: transform .2s ease-out;
    -ms-transition: transform .2s ease-out;
    -o-transition: transform .2s ease-out;
    transition: transform .2s ease-out;
    background-color: rgba(255, 255, 51, 0.55);
}
.dynamic_text{
    direction: ltr;
    text-align: left;
}
.dynamic_text br{
    line-height: 2.5;
}
.lightbox .lb-image{
    border:none!important;
}
.lb-data .lb-number{
    display: none!important;
}
.lb-data .lb-caption{
    display: none!important;
}
.lb-data .lb-close{
    position: absolute!important;
    top: -35px!important;
}
.lightboxOverlay{
    top: -35px!important;
}
body.lb-disable-scrolling{
    overflow: hidden!important;
}
</style>
