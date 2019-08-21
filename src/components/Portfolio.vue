<template>
    <div class="section pb-0fire">
        <div class="section-title">My Portfolio</div>

        <div class="d-flex justify-content-center font-md">
            <div class="text-uppercase pointer mr-2"
                 :class="{'text-orange': galleryFilter==='all'}"
                 @click="updateFilter('all')">all
            </div>

            <div class="text-uppercase pointer mx-2"
                 :class="{'text-orange': galleryFilter==='ui'}"
                 @click="updateFilter('ui')">web design
            </div>

            <div class="text-uppercase pointer mx-2"
                 :class="{'text-orange': galleryFilter==='mkt'}"
                 @click="updateFilter('mkt')">digital marketing
            </div>

            <div class="text-uppercase pointer mx-2"
                 :class="{'text-orange': galleryFilter==='ux'}"
                 @click="updateFilter('ux')">UX Design
            </div>

            <div class="text-uppercase pointer mx-2"
                 :class="{'text-orange': galleryFilter==='dev'}"
                 @click="updateFilter('dev')">Web Development
            </div>

            <div class="text-uppercase pointer ml-2"
                 :class="{'text-orange': galleryFilter==='gr'}"
                 @click="updateFilter('gr')">Graphic Design
            </div>
        </div>

        <transition-group name="thumbnailfade" tag="div">
            <img v-for="thumb in filteredImages"
                 :key="thumb.id"
                 @click="showLightbox(thumb.name)"
                 :src="thumbnailDir + thumb.name"
                 :alt="thumb.alt"
                 :title="thumb.alt"/>
        </transition-group>

        <lightbox id="mylightbox"
                  ref="lightbox"
                  :images="images"
                  :directory="thumbnailDir"
                  :filter="galleryFilter"
                  :timeoutDuration="5000"
        />

        <div class="freelance">
            <h2>I AM AVAILABLE FOR FREELANCE</h2>
            <div class="btn-white">hire me</div>
        </div>
    </div>
</template>

<script>
    export default {
        name    : "Portfolio",
        data () {
            return {
                images       : [{
                    'name'  : 'pm-home-lg.png',
                    'alt'   : 'Pro Master Home Page',
                    'filter': 'ui',
                    'id'    : 'image1'
                }, {
                    'name'  : 'pm-pricing-lg.png',
                    'alt'   : 'Pro Master Pricing Page LG',
                    'filter': 'ui',
                    'id'    : 'image2'
                }, {
                    'name'  : 'pm-pricing-sm.png',
                    'alt'   : 'Pro Master Pricing',
                    'filter': 'ui',
                    'id'    : 'image3'
                }, {
                    'name'  : 'pm-dash-lg.png',
                    'alt'   : 'Pro Master Dashboard',
                    'filter': 'ui',
                    'id'    : 'image4'
                }, {
                    'name'  : 'pm-dash-sm.png',
                    'alt'   : 'Pro Master Dashboard small',
                    'filter': 'ui',
                    'id'    : 'image5'
                }, {
                    'name'  : 'pm-contact-lg.png',
                    'alt'   : 'Pro Master Contact',
                    'filter': 'ui',
                    'id'    : 'image6'
                }, {
                    'name'  : 'pm-albums-album.png',
                    'alt'   : 'Pro Master Albums',
                    'filter': 'ui',
                    'id'    : 'image7'
                }, {
                    'name'  : 'pm-albums-tracks.png',
                    'alt'   : 'Pro Master Tracks',
                    'filter': 'ui',
                    'id'    : 'image8'
                }, {
                    'name'  : 'Fusion-slick.png',
                    'alt'   : 'RMS Fusion',
                    'filter': 'mkt',
                    'id'    : 'image9'
                }, {
                    'name'  : 'amkor.png',
                    'alt'   : 'amkor',
                    'filter': 'ui',
                    'id'    : 'image10'
                }, {
                    'name'  : 'amkor-wireframe1.png',
                    'alt'   : 'amkor wireframe',
                    'filter': 'ux',
                    'id'    : 'image11'
                }, {
                    'name'  : 'amkor-header-graphic-large.jpg',
                    'alt'   : 'amkor header graphic specs',
                    'filter': 'mkt',
                    'id'    : 'image12'
                }, {
                    'name'  : 'c1-home.png',
                    'alt'   : 'cell one home page',
                    'filter': 'ux',
                    'id'    : 'image13'
                }, {
                    'name'  : 'c1-hire.png',
                    'alt'   : 'cell one hire',
                    'filter': 'ux',
                    'id'    : 'image14'
                }, {
                    'name'  : 'c1-file-manager.png',
                    'alt'   : 'cell one file manager',
                    'filter': 'ux',
                    'id'    : 'image15'
                }, {
                    'name'  : 'c1-wiki.png',
                    'alt'   : 'cell one wiki',
                    'filter': 'ux',
                    'id'    : 'image16'
                }, {
                    'name'  : 'c1-wiki2.png',
                    'alt'   : 'cell one wiki',
                    'filter': 'ux',
                    'id'    : 'image17'
                }, {
                    'name'  : 'precog-low.png',
                    'alt'   : 'precog-low',
                    'filter': 'ui',
                    'id'    : 'image18'
                }, {
                    'name'  : 'precog-med.png',
                    'alt'   : 'precog med',
                    'filter': 'ui',
                    'id'    : 'image19'
                }, {
                    'name'  : 'precog-high.png',
                    'alt'   : 'precog-high',
                    'filter': 'ui',
                    'id'    : 'image20'
                }, {
                    'name'  : 'precog-graph.png',
                    'alt'   : 'precog graph',
                    'filter': 'ui',
                    'id'    : 'image21'
                }, {
                    'name'  : 'melodex-outputs.png',
                    'alt'   : 'melodex-outputs',
                    'filter': 'ui',
                    'id'    : 'image22'
                }, {
                    'name'  : 'melodex-tracks.png',
                    'alt'   : 'melodex-tracks',
                    'filter': 'ui',
                    'id'    : 'image23'
                }, {
                    'name'  : 'melodex-track.png',
                    'alt'   : 'melodex track',
                    'filter': 'ui',
                    'id'    : 'image24'
                }, {
                    'name'  : 'melodex-trackset.png',
                    'alt'   : 'melodex track',
                    'filter': 'ui',
                    'id'    : 'image25'
                }, {
                    'name'  : 'melodex-output2.png',
                    'alt'   : 'melodex output 2',
                    'filter': 'ui',
                    'id'    : 'image26'
                }, {
                    'name'  : 'jessy-nelson-magazine-full-page.png',
                    'alt'   : 'Magazine full page',
                    'filter': 'mkt',
                    'id'    : 'image27'
                }, {
                    'name'  : 'Instagram-2015-Golf.png',
                    'alt'   : 'golf instagram ad',
                    'filter': 'mkt',
                    'id'    : 'image28'
                }, {
                    'name'  : 'Shop-AP-Designs-Ad-thumb.jpg',
                    'alt'   : 'Shop-AP-Designs-Ad-thumb',
                    'filter': 'mkt',
                    'id'    : 'image29'
                }, {
                    'name'  : 'Facebook-Ad-thumb.jpg',
                    'alt'   : 'Facebook-Ad-thumb.jpg',
                    'filter': 'mkt',
                    'id'    : 'image30'
                }, {
                    'name'  : 'golf-classic.jpg',
                    'alt'   : 'golf-classic',
                    'filter': 'mkt',
                    'id'    : 'image31'
                }, {
                    'name'  : 'golf_r2r_brochure_12-front.jpg',
                    'alt'   : 'golf_r2r_brochure_12-front.jpg',
                    'filter': 'gr',
                    'id'    : 'image32'
                }, {
                    'name'  : 'golf_r2r_brochure_12-back.jpg',
                    'alt'   : 'golf_r2r_brochure_12-back.jpg',
                    'filter': 'gr',
                    'id'    : 'image33'
                }, {
                    'name'  : 'hart-invitational.png',
                    'alt'   : 'hart-invitational.png',
                    'filter': 'mkt',
                    'id'    : 'image34'
                }, {
                    'name'  : 'Brush-Snap-Back-Cap-F.png',
                    'alt'   : 'Brush-Snap-Back-Cap-F',
                    'filter': 'gr',
                    'id'    : 'image35'
                }, {
                    'name'  : 'Brush-Snap-Back-Cap-B.png',
                    'alt'   : 'Brush-Snap-Back-Cap-B',
                    'filter': 'gr',
                    'id'    : 'image36'
                }, {
                    'name'  : 'golf_r2r_brochure_12-front.jpg',
                    'alt'   : 'golf_r2r_brochure_12-front.jpg',
                    'filter': 'gr',
                    'id'    : 'image37'
                }, {
                    'name'  : 'MXDN-Rider-Number-Cards-front.gif',
                    'alt'   : 'MXDN-Rider-Number-Cards-front.gif',
                    'filter': 'gr',
                    'id'    : 'image38'
                }],
                galleryFilter: 'all',
                thumbnailDir : process.env.BASE_URL + 'portfolio/'
            }
        },
        methods : {
            showLightbox: function (imageName) {
                this.$refs.lightbox.show(imageName)
            },
            updateFilter (filterName) {
                this.galleryFilter = filterName
            }
        },
        computed: {
            filteredImages: function () {
                if (this.galleryFilter === 'all') {
                    return this.images
                } else {
                    return this.images.filter(image => image.filter === this.galleryFilter)
                }
            }
        }
    }
</script>

<style scoped lang="scss">
    @import '../assets/css/index.scss';

    .freelance {
        padding: 50px;
        background-color: $orange;
        color: white;
        text-align: center;
    }

    .freelance h2 {
        font-size: 30px;
        color: #fff;
        margin: 0;
        padding: 0 0 30px;
        text-transform: uppercase;
        font-weight: 600;
    }

    img {
        width: 270px;
        height: 180px;
        margin: 20px;
        border-radius: 3px;
        cursor: pointer;
        transition: all 0.4s ease;
    }

    .thumbnailfade-leave-active,
    .thumbnailfade-enter-active {
        transition: all 0.4s ease;
    }

    .thumbnailfade-enter-active {
        transition-delay: 0.4s;
    }

    .thumbnailfade-enter,
    .thumbnailfade-leave-to {
        opacity: 0;
    }
</style>
