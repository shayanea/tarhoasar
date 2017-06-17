<template>
    <div id="BottomLogo">
        <div v-on:click="GoToSite">
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
            viewBox="0 0 1258.8 505.1" style="enable-background:new 0 0 1258.8 505.1;" xml:space="preserve">
                <path class="baracket1" d="M91.6,57.7v159.5c0,2.4-0.1,4.6-0.4,6.5c-0.2,1.9-0.6,4.1-1.1,6.5c-6.7,8.7-16.4,15.2-28.9,19.5c12,3.4,21.6,9.4,28.9,18
                c0.5,2.4,0.8,4.8,1.1,7.2c0.2,2.4,0.4,4.8,0.4,7.2v166c0,4.3,2.2,6.5,6.5,6.5h44v50.5H91.6h0.7c-14.4-1.4-26.6-7.6-36.4-18.4
                c-9.9-10.8-14.8-23.7-14.8-38.6v-166c0-4.8-2.4-7.2-7.2-7.2H0v-50.5h33.9c4.8,0,7.2-2.4,7.2-7.2V57.7c0-15.9,5.5-29.5,16.6-40.8
                C68.8,5.7,82.3,0,98.1,0h44v50.5h-44C93.8,50.5,91.6,52.9,91.6,57.7z"/>
                <path class="baracket2" d="M997.8,447.3V287.9c0-2.4,0.1-4.6,0.4-6.5c0.2-1.9,0.6-4.1,1.1-6.5c6.7-8.7,16.3-15.2,28.9-19.5c-12-3.4-21.6-9.4-28.9-18
                c-0.5-2.4-0.8-4.8-1.1-7.2c-0.2-2.4-0.4-4.8-0.4-7.2V57c0-4.3-2.2-6.5-6.5-6.5h-44V0h50.5h-0.7c14.4,1.4,26.6,7.6,36.4,18.4
                c9.9,10.8,14.8,23.7,14.8,38.6v166c0,4.8,2.4,7.2,7.2,7.2h33.9v50.5h-33.9c-4.8,0-7.2,2.4-7.2,7.2v159.5c0,15.9-5.5,29.5-16.6,40.8
                c-11.1,11.3-24.5,17-40.4,17h-44v-50.5h44C995.7,454.6,997.8,452.2,997.8,447.3z"/>
                <circle class="circle" cx="1205.4" cy="451.7" r="53.3" style="fill:rgb(234, 198, 27);"/>
            </svg>
            <span> Designed & Powerd by Hex.team</span>
        </div>
    </div>
</template>

<script>
export default {
    name:'hex',
    data () {
        return {

        }
    },
    methods : {
        GoToSite : function () {
            window.open('http://hex.team/','_blank');
        }
    }
}
</script>

<style>
#BottomLogo{
    position: fixed;
    left: 65px;
    bottom: 65px;
    cursor: pointer;
}
#BottomLogo svg{
    width: 40px;
    opacity: .4;
}
#BottomLogo span{
    font-size: 10px;
    color: #ccc;
    float: right;
    margin-left: -15px;
    margin-top: 4px;
}
#BottomLogo .paragraph{
    opacity: 0;
}
#BottomLogo:hover .paragraph:nth-child(2){
    -webkit-transition-delay: .20s;
    -moz-transition-delay: .20s;
    -o-transition-delay: .20s;
    transition-delay: .20s;   
}
#BottomLogo:hover .paragraph:nth-child(3){
    -webkit-transition-delay: .23s;
    -moz-transition-delay: .23s;
    -o-transition-delay: .23s;
    transition-delay: .23s;
}
#BottomLogo .baracket2{
    -webkit-transform: translate(-600px, 0%);
    -o-transform: translate(-600px, 0%);
    -moz-transform: translate(-600px, 0%);
    transform: translate(-600px, 0%);
    -webkit-transition: all .2s ease;
    -moz-transition: all .2s ease;
    -o-transition: all .2s ease;
    -ms-transition: all .2s ease;
    transition: all .2s ease;
}
#BottomLogo .circle{
    -webkit-transform: translate(-960px, -202px);
    -o-transform: translate(-960px, -202px);
    -moz-transform: translate(-960px, -202px);
    transform: translate(-960px, -202px);
    -webkit-transition: all .2s ease;
    -moz-transition: all .2s ease;
    -o-transition: all .2s ease;
    -ms-transition: all .2s ease;
    transition: all .2s ease;
}
@media(max-width:768px){
    #BottomLogo{
        -webkit-transform: translate(-50%, 0%);
        transform: translate(-50%, 0%);
        left:50%;
    }
}
</style>