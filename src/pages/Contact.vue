<template>
    <div class="inner_page">
        <menuicon></menuicon>
        <loader :show="Loading"></loader>
        <div class="container" v-show="!Loading">
            <div class="row">
                <div class="col-md-1 col-sm-1 col-xs-12"></div>
                <div class="col-md-9 col-sm-9 col-xs-12">
                    <div class="col-md-12 col-sm-12 col-xs-12">
                        <div id="map"></div>
                    </div>
                    <div class="col-md-12 col-sm-12 col-xs-12 contact_info">
                        <div class="row">
                            <div class="col-md-6 col-sm-6 col-xs-12" style="float:left">
                                <h2>{{contact.title}}</h2>
                            </div>
                            <div class="col-md-6 col-sm-6 col-xs-12">
                                <h4>{{contact.description}}</h4>
                            </div>
                            <div class="col-md-6 col-sm-6 col-xs-12">
                                <ul class="contact_ul">
                                    <li>
                                        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 21.1 19.8" style="enable-background:new 0 0 21.1 19.8;" xml:space="preserve">
                                            <g>
                                                <defs>
                                                    <rect id="SVGID_1_" x="0" width="21.1" height="19.8" />
                                                </defs>
                                                <clipPath id="SVGID_2_">
                                                    <use xlink:href="#SVGID_1_" style="overflow:visible;" />
                                                </clipPath>
                                                <path class="st0" d="M15,19.2c-0.4,0-0.7,0-0.9-0.1l-0.1,0c-1.3-0.4-4.9-1.3-7.3-3.6C4.1,13.1,2.2,10.7,1.4,9   C0.5,7,0.6,5.7,0.6,5.3c0.1-0.9,0.5-3.2,2.2-4.3C3.1,0.8,3.6,0.6,4,0.6l1.6,0C6,0.7,6.5,1,6.8,1.6C7,2,8.2,4.9,8.3,5.1   c0.3,0.8,0.3,1.5-0.2,2.1c-0.3,0.4-0.8,1-1.1,1.3c0.3,0.4,1.1,1.7,2.2,2.7c1.2,1,2.6,1.8,3.2,2c0,0,0.1,0,0.1,0c0,0,0-0.1,0.1-0.1   l0.1-0.1c0.3-0.4,1.2-1.5,1.2-1.5c0.2-0.2,0.6-0.6,1.2-0.6c0.2,0,0.5,0.1,0.7,0.2c0.6,0.3,3.1,1.5,3.5,1.7c0.5,0.1,0.9,0.6,1,1.2   l0,0.1c0,0.5,0.2,2-1.1,3.3C18.3,18.6,16.4,19.2,15,19.2z" />
                                            </g>
                                        </svg>
                                        <span> {{contact.tel}}</span>
                                    </li>
                                    <li>
                                        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 21 16.2" style="enable-background:new 0 0 21 16.2;" xml:space="preserve">
                                            <g>
                                                <defs>
                                                    <rect id="SVGID_1_" width="21" height="16.2" />
                                                </defs>
                                                <clipPath id="SVGID_2_">
                                                    <use xlink:href="#SVGID_1_" style="overflow:visible;" />
                                                </clipPath>
                                                <path class="st0" d="M0.6,0.6l9.9,8.5l9.9-8.5 M0.6,15.6h19.8v-15H0.6V15.6z" />
                                            </g>
                                        </svg>
                                        <span> {{contact.email}}</span>
                                    </li>
                                    <li>
                                        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 19 27.8" style="enable-background:new 0 0 19 27.8;" xml:space="preserve">
                                            <g>
                                                <defs>
                                                    <rect id="SVGID_1_" width="19" height="27.8" />
                                                </defs>
                                                <clipPath id="SVGID_2_">
                                                    <use xlink:href="#SVGID_1_" style="overflow:visible;" />
                                                </clipPath>
                                                <path class="st0" d="M9.5,0.6c-4.9,0-8.9,4-8.9,8.9c0,1.5,0.4,3,1.2,4.4l7.8,12.8l7.8-12.8c0.7-1.3,1.1-2.8,1.1-4.4   C18.4,4.6,14.4,0.6,9.5,0.6z" />
                                                <circle class="st0" cx="9.5" cy="9.5" r="3.6" />
                                            </g>
                                        </svg>
                                        <span> {{contact.address}}</span>
                                    </li>
                                </ul>
                            </div>
                            <div class="col-md-12 col-sm-12 col-xs-12">
                                <ul class="social">
                                    <li class="facebook">
                                        <a :href="contact.facebook" target="_blank" class="active">
                                            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" width="512px" height="512px" viewBox="0 0 430.113 430.114" style="enable-background:new 0 0 430.113 430.114;" xml:space="preserve">
                                                <g>
                                                    <path id="Facebook" d="M158.081,83.3c0,10.839,0,59.218,0,59.218h-43.385v72.412h43.385v215.183h89.122V214.936h59.805   c0,0,5.601-34.721,8.316-72.685c-7.784,0-67.784,0-67.784,0s0-42.127,0-49.511c0-7.4,9.717-17.354,19.321-17.354   c9.586,0,29.818,0,48.557,0c0-9.859,0-43.924,0-75.385c-25.016,0-53.476,0-66.021,0C155.878-0.004,158.081,72.48,158.081,83.3z" fill="#666666"/>
                                                </g>
                                            </svg>
                                        </a>
                                    </li>
                                    <li class="instagram">
                                        <a :href="contact.instagram" target="_blank">
                                            <svg width="64" version="1.1" xmlns="http://www.w3.org/2000/svg" height="64" viewBox="0 0 64 64" xmlns:xlink="http://www.w3.org/1999/xlink" enable-background="new 0 0 64 64">
                                                <g>
                                                    <g>
                                                        <path fill="#666" d="M58,0H6C2.691,0,0,2.691,0,6v52c0,3.309,2.691,6,6,6h52c3.309,0,6-2.691,6-6V6C64,2.691,61.309,0,58,0z     M43.75,9.785c0-2.199,1.8-4,4-4h4.999c2.2,0,4,1.801,4,4v6.057c0,2.199-1.8,4-4,4H47.75c-2.2,0-4-1.801-4-4V9.785z M32,17.891    c7.78,0,14.109,6.33,14.109,14.109S39.78,46.109,32,46.109S17.891,39.779,17.891,32S24.22,17.891,32,17.891z M58,60H6    c-1.103,0-2-0.896-2-2V27.141h2h6.64h1.944c-0.435,1.551-0.693,3.174-0.693,4.859c0,9.986,8.124,18.109,18.109,18.109    S50.109,41.986,50.109,32c0-1.686-0.259-3.309-0.693-4.859h1.944H58h2V58C60,59.104,59.103,60,58,60z" />
                                                    </g>
                                                </g>
                                            </svg>
                                        </a>
                                    </li>
                                    <li class="linkedin">
                                        <a :href="contact.linkedin" target="_blank">
                                            <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="552.77px" height="552.77px" viewBox="0 0 552.77 552.77" style="enable-background:new 0 0 552.77 552.77;" xml:space="preserve">
                                                <g>
                                                    <path d="M17.95,528.854h71.861c9.914,0,17.95-8.037,17.95-17.951V196.8c0-9.915-8.036-17.95-17.95-17.95H17.95
                                                C8.035,178.85,0,186.885,0,196.8v314.103C0,520.816,8.035,528.854,17.95,528.854z" />
                                                    <path d="M17.95,123.629h71.861c9.914,0,17.95-8.036,17.95-17.95V41.866c0-9.914-8.036-17.95-17.95-17.95H17.95
                                                C8.035,23.916,0,31.952,0,41.866v63.813C0,115.593,8.035,123.629,17.95,123.629z" />
                                                    <path d="M525.732,215.282c-10.098-13.292-24.988-24.223-44.676-32.791c-19.688-8.562-41.42-12.846-65.197-12.846
                                                c-48.268,0-89.168,18.421-122.699,55.27c-6.672,7.332-11.523,5.729-11.523-4.186V196.8c0-9.915-8.037-17.95-17.951-17.95h-64.192
                                                c-9.915,0-17.95,8.035-17.95,17.95v314.103c0,9.914,8.036,17.951,17.95,17.951h71.861c9.915,0,17.95-8.037,17.95-17.951V401.666
                                                c0-45.508,2.748-76.701,8.244-93.574c5.494-16.873,15.66-30.422,30.488-40.649c14.83-10.227,31.574-15.343,50.24-15.343
                                                c14.572,0,27.037,3.58,37.393,10.741c10.355,7.16,17.834,17.19,22.436,30.104c4.604,12.912,6.904,41.354,6.904,85.33v132.627
                                                c0,9.914,8.035,17.951,17.949,17.951h71.861c9.914,0,17.949-8.037,17.949-17.951V333.02c0-31.445-1.982-55.607-5.941-72.48
                                                S535.836,228.581,525.732,215.282z" />
                                                </g>
                                            </svg>
                                        </a>
                                    </li>
                                    <li class="twitter">
                                        <a :href="contact.twitter" target="_blank">
                                            <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 612 612" style="enable-background:new 0 0 612 612;" xml:space="preserve">
                                                <g>
                                                    <path style="fill:#666;" d="M612,116.258c-22.525,9.981-46.694,16.75-72.088,19.772c25.929-15.527,45.777-40.155,55.184-69.411
                                                c-24.322,14.379-51.169,24.82-79.775,30.48c-22.907-24.437-55.49-39.658-91.63-39.658c-69.334,0-125.551,56.217-125.551,125.513
                                                c0,9.828,1.109,19.427,3.251,28.606C197.065,206.32,104.556,156.337,42.641,80.386c-10.823,18.51-16.98,40.078-16.98,63.101
                                                c0,43.559,22.181,81.993,55.835,104.479c-20.575-0.688-39.926-6.348-56.867-15.756v1.568c0,60.806,43.291,111.554,100.693,123.104
                                                c-10.517,2.83-21.607,4.398-33.08,4.398c-8.107,0-15.947-0.803-23.634-2.333c15.985,49.907,62.336,86.199,117.253,87.194
                                                c-42.947,33.654-97.099,53.655-155.916,53.655c-10.134,0-20.116-0.612-29.944-1.721c55.567,35.681,121.536,56.485,192.438,56.485
                                                c230.948,0,357.188-191.291,357.188-357.188l-0.421-16.253C573.872,163.526,595.211,141.422,612,116.258z" />
                                                </g>
                                            </svg>
                                        </a>
                                    </li>
                                </ul>
                            </div>
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
    name: 'contact',
    data (){
        return {
            Loading:true,
            contact:{
                title:'',
                description:'',
                tel:'',
                email:'',
                address:'',
                map: {
                    searchPlace: '',
                    location: {}
                },
                facebook:'',
                twitter:'',
                instagram:'',
                linkedin:''
            }
        }
    },
    components: {
        'menuicon': MenuIcon,
        'loader':Loader
    },
    created() {
        return this.GetData(),
        document.title = "Contact us";
    },
    methods: {
        GetData : function (){
            this.$http.get('http://'+ window.location.hostname +'/api/getwidget/contactus')
            .then(function(res){
                this.contact = JSON.parse(res.data[0].data);
                var styles = [{ "featureType": "water", "elementType": "geometry", "stylers": [{ "color": "#e9e9e9" }, { "lightness": 17 }] }, { "featureType": "landscape", "elementType": "geometry", "stylers": [{ "color": "#f5f5f5" }, { "lightness": 20 }] }, { "featureType": "road.highway", "elementType": "geometry.fill", "stylers": [{ "color": "#ffffff" }, { "lightness": 17 }] }, { "featureType": "road.highway", "elementType": "geometry.stroke", "stylers": [{ "color": "#ffffff" }, { "lightness": 29 }, { "weight": 0.2 }] }, { "featureType": "road.arterial", "elementType": "geometry", "stylers": [{ "color": "#ffffff" }, { "lightness": 18 }] }, { "featureType": "road.local", "elementType": "geometry", "stylers": [{ "color": "#ffffff" }, { "lightness": 16 }] }, { "featureType": "poi", "elementType": "geometry", "stylers": [{ "color": "#f5f5f5" }, { "lightness": 21 }] }, { "featureType": "poi.park", "elementType": "geometry", "stylers": [{ "color": "#dedede" }, { "lightness": 21 }] }, { "elementType": "labels.text.stroke", "stylers": [{ "visibility": "on" }, { "color": "#ffffff" }, { "lightness": 16 }] }, { "elementType": "labels.text.fill", "stylers": [{ "saturation": 36 }, { "color": "#333333" }, { "lightness": 40 }] }, { "elementType": "labels.icon", "stylers": [{ "visibility": "off" }] }, { "featureType": "transit", "elementType": "geometry", "stylers": [{ "color": "#f2f2f2" }, { "lightness": 19 }] }, { "featureType": "administrative", "elementType": "geometry.fill", "stylers": [{ "color": "#fefefe" }, { "lightness": 20 }] }, { "featureType": "administrative", "elementType": "geometry.stroke", "stylers": [{ "color": "#fefefe" }, { "lightness": 17 }, { "weight": 1.2 }] }]
                var address = this.contact.place;
                var NewMarker = this.contact.markers;
                var geocoder = new google.maps.Geocoder();
                geocoder.geocode({
                    'address': address
                },
                function (results, status) {
                    if (status == google.maps.GeocoderStatus.OK) {
                        var config = results[0].geometry.location;
                        var options = {
                            mapTypeControlOptions: {
                                mapTypeIds: ['Styled']
                            },
                            center: config,
                            zoom: 16,
                            disableDefaultUI: true,
                            mapTypeId: 'Styled'
                        };

                        var div = document.getElementById('map');
                        var map = new google.maps.Map(div, options);
                        var styledMapType = new google.maps.StyledMapType(styles, { name: 'Styled' });
                        map.mapTypes.set('Styled', styledMapType);
                        console.log(NewMarker);
                        var marker = new google.maps.Marker({
                            position: new google.maps.LatLng(NewMarker[0].position.lat, NewMarker[0].position.lng),
                            map: map
                        });
                        map.setCenter(marker.getPosition());
                    }
                });
                this.Loading = false;
            },function(err){
                console.log(err.data);
            });
        }
    }
}
</script>

<style>
.st0 {
    fill: none;
    stroke: #000000;
    stroke-width: 1.2;
    stroke-miterlimit: 10;
}

.contact_info h2 {
    color: #444;
}

.contact_info h4 {
    color: #666;
}

.contact_info h2,
.contact_info h4 {
    text-align: left;
    direction: ltr;
    font-weight: 100;
}

.contact_info ul.contact_ul {
    list-style: none;
    display: block;
    float: left;
    padding-right: 0;
}

.contact_info ul.contact_ul li {
    width: 100%;
    clear: both;
    float: left;
    text-align: left;
    direction: ltr;
    margin-bottom: 25px;
}

.contact_info ul.contact_ul li span {
    color: #666;
    font-size: 13px;
    line-height: normal;
}

.contact_info svg {
    width: 17px;
    margin-right: 10px;
    vertical-align: middle;
}

#map {
    min-height: 250px;
    width: 100%;
    max-height: 250px;
    margin-bottom: 50px;
    background: #ddd;
}

.contact_info .social {
    display: block;
    list-style: none;
    float: left;
}

.contact_info .social li {
    display: inline-block;
    float: none;
    margin-right: 5px;
    width: 30px;
    height: 30px;
    text-align: center;
    line-height: 33px;
    border-radius: 4px;
}

.contact_info .social li.twitter:hover {
    background: #1DA1F2;
}

.contact_info .social li.facebook:hover {
    background: #475993;
}

.contact_info .social li.linkedin:hover {
    background: #0084BF;
}

.contact_info .social li.instagram:hover {
    background: #000;
}

.contact_info .social li svg {
    height: 20px;
    margin: 0;
}

.contact_info .social li svg path {
    fill: #666;
}

.contact_info .social li:hover svg path {
    fill: #fff!important;
}
@media (max-width:786px){
    .contact_info .social{
        float: none;
        margin: 0 auto;
        text-align: center;
        padding-right: 0;
    }
}
</style>
