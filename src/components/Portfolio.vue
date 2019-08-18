<template>
    <div class="section">
        <div class="section-title">My Portfolio</div>

        <div class="d-flex justify-content-center font-md">
            <div class="text-uppercase pointer mr-2"
                 :class="{'text-orange': galleryFilter==='all'}"
                 @click="updateFilter('all')">all</div>

            <div class="text-uppercase pointer mx-2"
                 :class="{'text-orange': galleryFilter==='animals'}"
                 @click="updateFilter('animals')">web design</div>

            <div class="text-uppercase pointer mx-2"
                 :class="{'text-orange': galleryFilter==='nature'}"
                 @click="updateFilter('nature')">digital marketing</div>

            <div class="text-uppercase pointer mx-2">UX Design</div>

            <div class="text-uppercase pointer mx-2">Web Development</div>

            <div class="text-uppercase pointer ml-2">Graphic Design</div>
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
                  :directory="'../assets/img'"
                  :filter="galleryFilter"
                  :timeoutDuration="5000"
        />

        <div class="freelance">
            <h2>I AM AVAILABLE FOR FREELANCE</h2>
            <img src="../assets/img/amkor.png" alt="">
            <img :src="testDir" alt="wrong directory">
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
                    'name'  : 'pm-pricing-lg.png',
                    'alt'   : 'Pro Master Pricing Page LG',
                    'filter': 'nature',
                    'id'    : 'image1'
                },
                                {
                                    'name'  : 'bird.jpg',
                                    'alt'   : 'It is a bird on a tree!',
                                    'filter': 'animals',
                                    'id'    : 'image2'
                                },

                                {
                                    'name'  : 'alps.jpg',
                                    'alt'   : 'I will live here someday',
                                    'filter': 'nature',
                                    'id'    : 'image3'
                                },

                                {
                                    'name'  : 'bear.jpg',
                                    'alt'   : 'Friendly bear',
                                    'filter': 'animals',
                                    'id'    : 'image4'
                                },

                                {
                                    'name'  : 'canyon.jpg',
                                    'alt'   : 'A worthy hike',
                                    'filter': 'nature',
                                    'id'    : 'image5'
                                },

                                {
                                    'name'  : 'monumentvalley.jpg',
                                    'alt'   : 'Monument Valley',
                                    'filter': 'nature',
                                    'id'    : 'image6'
                                },

                                {
                                    'name'  : 'puppy.jpg',
                                    'alt'   : 'Puppy with a feather',
                                    'filter': 'animals',
                                    'id'    : 'image7'
                                },

                                {
                                    'name'  : 'redwoods.jpg',
                                    'alt'   : 'Foggy evening in the Redwoods',
                                    'filter': 'nature',
                                    'id'    : 'image8'
                                }],
                /*images       : [{'name': 'bg-clouds.jpg', 'alt': 'The Dolomites', 'filter': 'nature', 'id': 'image1'},
                                {'name': 'bg-forest.jpg', 'alt': 'It is a bird', 'filter': 'animals', 'id': 'image2'}],*/
                galleryFilter: 'all',
                thumbnailDir : '/src/assets/',
                testDir: require('../assets/img/amkor.png')
                // testDir:  '/src/assets/img/amkor.png'
                // thumbnailDir : 'https://unpkg.com/vue-my-photos@1.0.0/src/assets/'

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
