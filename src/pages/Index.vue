<template>
    <div class="main_page">
        <menuicon></menuicon>
    </div>
</template>

<script>
import MenuIcon from '../components/menuicon'

export default {
    name:'index',
    data () {
        return {

        }
    },
    components:{
        'menuicon':MenuIcon
    },
    created () {
        var self = this;
        setTimeout(function(){
			return self.loaded = true;
		},1500);
        return document.title = "Tarho Asar Architecture Group Official Website";
    }
}
</script>

<style>
#Logo  {
    top: 47%;
    left: 85px;
    -ms-transform: translate(0%, -50%);
    -webkit-transform: translate(0%, -50%);
    transform: translate(0%, -50%);
}

.main_page {
    margin: 35px;
    background: #fff;
    min-height: calc(100% - 70px);
    overflow: hidden;
}
</style>

