<template>
    <div class="inner_page">
        <menuicon></menuicon>
        <div class="container">
            <div class="row">
                <div class="col-md-10 col-sm-10 col-xs-12">
                    <img src="../../data/about_1.jpg" alt="About Us" class="img-responsive inner_about_header">
                    <h2 class="about_title">About Us</h2>
                    <p class="about_desc">Lorem ipsum dolor sit amet, quisque ipsum massa augue in nulla. Maecenas dui lorem dolor interdum in etiam. Euismod consectetuer imperdiet odio, nostrum viverra eu molestie amet id, ac mattis quis mi enim curabitur in, eget vestibulum erat nostra rhoncus sed laoreet. Tellus sed, a et ultrices libero ultricies dui, nulla id et, aliquet et felis tortor id dignissim nec. Ut wisi sit at beatae nullam, sed egestas in, turpis vestibulum etiam, lectus aliquam. Tincidunt vestibulum non natoque nonummy sit, etiam orci ullamcorper tempus nibh vivamus nunc, ornare interdum praesent. Suspendisse sed at euismod eget, imperdiet integer vehicula diam wisi magna sed, libero sociis a dolor, quisque eget, rhoncus vestibulum at feugiat augue. Nunc non velit suspendisse porttitor elementum, nam quisque pellentesque curae ornare, in iaculis. Sed tincidunt, proin cum, parturient eu sodales ut. Volutpat mi libero. Consequat non auctor dis ut pharetra vitae. Rutrum lectus commodo venenatis tristique sollicitudin nam, dui magna risus. Vitae ad adipiscing justo non ante in, velit suspendisse proin pellentesque mi faucibus, parturient neque enim. Libero bibendum arcu tellus dapibus, parturient et. Non eu vestibulum placerat, eu morbi nunc donec, aliquam vitae a praesent blandit, euismod et curabitur, euismod ridiculus proin erat. Ullamco elementum elementum, quis maecenas accumsan nonummy in, sem luctus lacinia sollicitudin accumsan ligula fringilla, mollis nullam donec volutpat ante eleifend dui, sed lectus varius etiam purus arcu. Turpis vitae urna aliquet ornare mauris nisl, eu lorem quis dui erat. Convallis enim rutrum nibh etiam, arcu rhoncus donec class pulvinar aenean. Sed est ut pede, conubia elit arcu erat libero consequat aenean, molestie turpis donec aute vitae vitae, vitae eu in wisi interdum vehicula consequat, quis blandit urna rutrum. Feugiat nisl ac et proin, magnis neque nibh ultricies, sagittis cras, elit suscipit, ac suspendisse curabitur. Egestas et et et fringilla, hendrerit non malesuada nec.</p>
                </div>
                <div class="col-md-5 col-sm-5 col-xs-12 about_item">
                    <img src="../../data/about_2.jpg" alt="" class="img-responsive">
                    <h3 class="person_name">Eng.Mehdi Mohammadi</h3>
                    <p class="person_position">CEO</p>
                </div>
                <div class="col-md-5 col-sm-5 col-xs-12 about_item">
                    <img src="../../data/about_3.jpg" alt="" class="img-responsive">
                    <h3 class="person_name">Eng.Mehdi Mohammadi</h3>
                    <p class="person_position">CEO</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import MenuIcon from '../components/menuicon'

export default {
    name: 'about',
    components:{
        'menuicon':MenuIcon
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
</style>

