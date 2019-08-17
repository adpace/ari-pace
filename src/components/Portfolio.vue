<template>
    <div class="section">
        <div class="section-title">My Portfolio</div>
        <p><span class="text-orange">All</span> | Web Design | Digital Marketing | UX Design | Web Development | Graphic
            Design</p>


        <div id="filters">
            <form>
                <fieldset>
                    <legend>Filter</legend>
                    <span>
        <input type="radio" id="all"
               name="filters" checked
               v-on:click="updateFilter('all')"/>
        <label for="all">All</label>
      </span>
                    <span>
        <input type="radio" id="animals"
               name="filters"
               v-on:click="updateFilter('animals')"/>
        <label for="animals">Animals</label>
      </span>
                    <span>
        <input type="radio" id="nature"
               name="filters"
               v-on:click="updateFilter('nature')"/>
        <label for="nature">Nature</label>
      </span>
                </fieldset>
            </form>
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


        <!--<lightbox id="mylightbox"
                  ref="lightbox"
                  :images="images"
                  :filter="galleryFilter"
                  :directory="'src/assets'"
                  :timeoutDuration="5000"
        ></lightbox>-->
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
                images       : [{'name': 'bg-clouds.jpg', 'alt': 'The Dolomites', 'filter': 'nature'},
                                {'name': 'bg-forest.jpg', 'alt': 'It is a bird', 'filter': 'animals'}],
                galleryFilter: 'all',
                thumbnailDir : 'https://unpkg.com/vue-my-photos@1.0.0/src/assets/'

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

    #filters {
        width: 500px;
        margin: 30px auto;
    }

    #filters span {
        margin: 15px;
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
