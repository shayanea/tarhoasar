<template>
    <div class="inner_page">
        <menuicon></menuicon>
        <div class="container">
            <div class="row">
                <div class="col-md-10 col-sm-10 col-xs-12 margin-top">
                    <div class="row project_list">
                        <div class="col-md-4 col-sm-3 col-xs-12">
                            <router-link to="/project/1">
                                <figure>
                                    <img src="../../data/photo_2017-01-29_14-44-15.jpg" alt="Kajal Residential Project" class="project_title">
                                    <div class="caption">
                                        <h2>Kajal Residential Project</h2>
                                        <h4>Tehran 1386</h4>
                                    </div>
                                </figure>
                            </router-link>
                        </div>
                        <div class="col-md-4 col-sm-3 col-xs-12">
                            <router-link to="/project/1">
                                <figure>
                                    <img src="../../data/photo_2017-01-29_14-44-39.jpg" alt="Kajal Residential Project" class="project_title">
                                    <div class="caption">
                                        <h2>Kajal Residential Project</h2>
                                        <h4>Tehran 1386</h4>
                                    </div>
                                </figure>
                            </router-link>
                        </div>
                        <div class="col-md-4 col-sm-3 col-xs-12">
                            <router-link to="/project/1">
                                <figure>
                                    <img src="../../data/photo_2017-01-29_14-44-33.jpg" alt="Kajal Residential Project" class="project_title">
                                    <div class="caption">
                                        <h2>Kajal Residential Project</h2>
                                        <h4>Tehran 1386</h4>
                                    </div>
                                </figure>
                            </router-link>
                        </div>
                    </div>
                    <div class="row project_list">
                        <div class="col-md-4 col-sm-3 col-xs-12">
                            <router-link to="/project/1">
                                <figure>
                                    <img src="../../data/photo_2017-01-29_12-45-36.jpg" alt="Kajal Residential Project" class="project_title">
                                    <div class="caption">
                                        <h2>Kajal Residential Project</h2>
                                        <h4>Tehran 1386</h4>
                                    </div>
                                </figure>
                            </router-link>
                        </div>
                        <div class="col-md-4 col-sm-3 col-xs-12">
                            <router-link to="/project/1">
                                <figure>
                                    <img src="../../data/photo_2017-01-29_11-59-02.jpg" alt="Kajal Residential Project" class="project_title">
                                    <div class="caption">
                                        <h2>Kajal Residential Project</h2>
                                        <h4>Tehran 1386</h4>
                                    </div>
                                </figure>
                            </router-link>
                        </div>
                        <div class="col-md-4 col-sm-3 col-xs-12">
                            <router-link to="/project/1">
                                <figure>
                                    <img src="../../data/photo_2017-01-29_14-44-15.jpg" alt="Kajal Residential Project" class="project_title">
                                    <div class="caption">
                                        <h2>Kajal Residential Project</h2>
                                        <h4>Tehran 1386</h4>
                                    </div>
                                </figure>
                            </router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import MenuIcon from '../components/menuicon'

export default {
    name: 'projects',
    components:{
        'menuicon':MenuIcon
    }
}
</script>

<style>
.margin-top{
    margin-top: -60px;
}
.project_list:first-child [class*=' col-'] {
    margin-bottom: 35px;
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
    max-height: 232px;
    min-height: 232px;
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

@media(max-width:768px){
    .margin-top{
        margin-top: 0;
    }
    .project_list:last-child [class*=' col-']{
        margin-bottom: 35px;
    }
}

</style>
