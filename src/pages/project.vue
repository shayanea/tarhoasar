<template>
    <div class="inner_page">
        <div class="container">
            <div class="row inner_project">
                <div class="col-md-10 col-sm-10 col-xs-12">
                    <div class="inner_project_header">
                        <h2>Kajal Residential Project</h2>
                        <h3>Tehran 1386</h3>
                    </div>
                    <div class="inner_project_description">
                        <span>Location : North Dibaji</span>
                        <span>Client : Babak Sedaghat Kamal , Sepehr Oshagh</span>
                        <span>Architect : Hootan Karoobe</span>
                        <span>Structur AI Design : Hooman Faridi</span>
                    </div>
                    <div class="inner_project_content">
                        <p>Lorem ipsum dolor sit amet, quisque ipsum massa augue in nulla. Maecenas dui lorem dolor interdum in etiam. Euismod consectetuer imperdiet odio, nostrum viverra eu molestie amet id, ac mattis quis mi enim curabitur in, eget vestibulum erat nostra rhoncus sed laoreet. Tellus sed, a et ultrices libero ultricies dui, nulla id et, aliquet et felis tortor id dignissim nec. Ut wisi sit at beatae nullam, sed egestas in, turpis vestibulum etiam, lectus aliquam. Tincidunt vestibulum non natoque nonummy sit, etiam orci ullamcorper tempus nibh vivamus nunc, ornare interdum praesent. Suspendisse sed at euismod eget, imperdiet integer vehicula diam wisi magna sed, libero sociis a dolor, quisque eget, rhoncus vestibulum at feugiat augue. Nunc non velit suspendisse porttitor elementum, nam quisque pellentesque curae ornare, in iaculis. Sed tincidunt, proin cum, parturient eu sodales ut. Volutpat mi libero. Consequat non auctor dis ut pharetra vitae. Rutrum lectus commodo venenatis tristique sollicitudin nam, dui magna risus. Vitae ad adipiscing justo non ante in, velit suspendisse proin pellentesque mi faucibus, parturient neque enim. Libero bibendum arcu tellus dapibus, parturient et. Non eu vestibulum placerat, eu morbi nunc donec, aliquam vitae a praesent blandit, euismod et curabitur, euismod ridiculus proin erat. Ullamco elementum elementum, quis maecenas accumsan nonummy in, sem luctus lacinia sollicitudin accumsan ligula fringilla, mollis nullam donec volutpat ante eleifend dui, sed lectus varius etiam purus arcu. Turpis vitae urna aliquet ornare mauris nisl, eu lorem quis dui erat. Convallis enim rutrum nibh etiam, arcu rhoncus donec class pulvinar aenean. Sed est ut pede, conubia elit arcu erat libero consequat aenean, molestie turpis donec aute vitae vitae, vitae eu in wisi interdum vehicula consequat, quis blandit urna rutrum. Feugiat nisl ac et proin, magnis neque nibh ultricies, sagittis cras, elit suscipit, ac suspendisse curabitur. Egestas et et et fringilla, hendrerit non malesuada nec.</p>
                    </div>
                    <div class="project_cover">
                        <a href="../../data/photo_2017-01-29_14-44-15.jpg" data-lightbox="gallery" data-title="Kajal Residential Project">
                            <img src="../../data/photo_2017-01-29_14-44-15.jpg" alt="" class="img-responsive">
                        </a>
                    </div>
                    <div class="row">                        
                        <div class="col-md-4 col-sm-12 col-xs-12 grid-col">
                            <a href="../../data/photo_2017-01-29_14-44-33.jpg" class="grid-item" data-lightbox="gallery" data-title="Kajal Residential Project">
                                <img src="../../data/photo_2017-01-29_14-44-33.jpg">
                            </a>
                        </div>
                        <div class="col-md-4 col-sm-12 col-xs-12 grid-col">
                            <a href="../../data/photo_2017-01-29_14-44-39.jpg" class="grid-item" data-lightbox="gallery" data-title="Kajal Residential Project">
                                <img src="../../data/photo_2017-01-29_14-44-39.jpg">
                            </a>
                        </div>
                        <div class="col-md-4 col-sm-12 col-xs-12 grid-col">
                            <a href="../../data/photo_2017-01-29_12-45-36.jpg" class="grid-item" data-lightbox="gallery" data-title="Kajal Residential Project">
                                <img src="../../data/photo_2017-01-29_12-45-36.jpg">
                            </a>
                        </div>
                        <div class="col-md-4 col-sm-12 col-xs-12 grid-col">
                            <a href="../../data/photo_2017-01-29_11-59-02.jpg" class="grid-item" data-lightbox="gallery" data-title="Kajal Residential Project">
                                <img src="../../data/photo_2017-01-29_11-59-02.jpg">
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'project',
    data () {
        return { 
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
    display: grid;
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
</style>
