<template>
    <div class="home">
        <parallax :speed-factor="0.2" :direction="'down'">
            <img src="../assets/bg-forest.jpg" alt="">
        </parallax>
        <div v-scroll-spy="{offset: 70, allowNoActive: true}">
            <home-banner></home-banner>
            <about></about>
            <resume></resume>
            <portfolio></portfolio>
            <contact></contact>
        </div>
    </div>
</template>

<script>
    // @ is an alias to /src
    import HomeBanner from '@/components/HomeBanner.vue'
    import About from '@/components/About.vue'
    import Contact from '@/components/Contact.vue'
    import Resume from '@/components/Resume.vue'
    import Portfolio from '@/components/Portfolio.vue'
    import Parallax from 'vue-parallaxy'

    export default {
        name      : 'home',
        components: {
            Parallax,
            HomeBanner,
            About,
            Contact,
            Resume,
            Portfolio
        }
    }
</script>

<style lang="scss">
    @import '../assets/css/index.scss';

    .home {
        /*background-image: url("../assets/bg-mtn.jpg");*/
        /*width: 100%;*/
        /*height: auto;*/
    }

    .parallax-container {
        position: relative;
    }

    /*.active {
        color: $orange !important;
        border-left: 1px solid #178ce6;
        padding-left: 5px;
        transition: all 0.5s;
    }*/
</style>
