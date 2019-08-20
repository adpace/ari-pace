<template>

    <div class="home-banner">
        <parallax :speed-factor="0.3" :direction="'down'" id="home-banner">
            <img src="../assets/img/bg-forest.jpg" alt="" v-waypoint="{ active: true, callback: updateNavClass, options: { threshold: [0.75,0.25] }  }">
        </parallax>
        <div class="welcome-text">
            <h3 class="text-center">Hello! I'm</h3>
            <h2 class="text-center">Ari Pace</h2>
            <h6>WEB DESIGN | DIGITAL MARKETING | UX DESIGN | WEB DEVELOPMENT | GRAPHIC DESIGN</h6>
            <div class="btn-orange mt-3"><a id="home-banner-contact" href="#contact">let's talk</a></div>
<!--            <div class="btn-orange mt-3" v-scroll-spy onclick="$scrollTo(2)">let's talk</div>-->
        </div>
    </div>
   </template>

<script>
    import Parallax from 'vue-parallaxy'

    export default {
        name : 'HomeBanner',
        props: {
            msg: String
        },
        components: {
            Parallax
        },
        methods: {
            updateNavClass ({ going, direction }) {
                // going: in, out
                // direction: top, right, bottom, left
                if (going === this.$waypointMap.GOING_IN) {
                    this.$store.dispatch('setNavBg', false)
                    console.log('waypoint going in!')
                }

                if (direction === this.$waypointMap.DIRECTION_TOP) {
                    this.$store.dispatch('setNavBg', true)
                    console.log('waypoint going top!')
                }
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    @import "../assets/css/index";

    .home-banner {
        position: relative;
    }

    .welcome-text {
        position: absolute;
        top: 30%;
        left: 0;
        right: 0;
    }
    .home-banner .welcome-text h2 {
        margin: 0;
        padding: 20px 0 35px;
        font-size: 90px;
        color: #fff;
        font-weight: 600;
        letter-spacing: 2px;
        line-height: 80px;
    }

    .home-banner .welcome-text h3 {
        margin: 0;
        padding: 0;
        font-size: 55px;
        color: #fff;
        font-weight: 300;
    }

    .home-banner .welcome-text h6 {
        color: white;
    }

    #home-banner-contact:hover {
        text-decoration: none;
        color: white;
    }

</style>
