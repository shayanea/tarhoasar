<template>
    <div id="Loader" v-show="show">
        <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="200px" height="200px" viewBox="0 0 200 200" enable-background="new 0 0 200 200" xml:space="preserve">
            <circle fill="#F3E600" stroke="#000000" stroke-width="21" stroke-miterlimit="10" cx="100.109" cy="100.012" r="88.416" />
        </svg>
    </div>
</template>

<script>
export default {
    name:'loader',
    props:{
        show:{
            default: false
        }
    },
    data() {
        return {

        }
    }
}
</script>

<style>
#Loader{
    position: fixed;
    left: 50%;
    top: 50%;
    -ms-transform: translate(-50%, -50%);
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
}
#Loader svg{
    height: 30px;
    width: 30px;
}
#Loader svg circle {
    stroke-dasharray: 263;
    animation: dash 1s linear infinite;
}

@keyframes dash {
  to {
    stroke-dashoffset: 1000;
  }
}
</style>

