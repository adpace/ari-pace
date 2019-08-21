<template>
    <div class="home">
        <div>
            <home-banner id="home"></home-banner>
            <about id="about"></about>
            <resume id="resume"></resume>
            <portfolio id="portfolio"></portfolio>
            <contact id="contact"></contact>
        </div>
        <the-footer id=""></the-footer>
    </div>
</template>

<script>
    // @ is an alias to /src
    import HomeBanner from '@/components/HomeBanner.vue'
    import About from '@/components/About.vue'
    import Contact from '@/components/Contact.vue'
    import Resume from '@/components/Resume.vue'
    import Portfolio from '@/components/Portfolio.vue'
    import TheFooter from '@/components/TheFooter.vue'

    export default {
        name      : 'home',
        components: {
            HomeBanner,
            About,
            Contact,
            Resume,
            Portfolio,
            TheFooter
        }
    }
</script>

<style lang="scss" scoped>
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
