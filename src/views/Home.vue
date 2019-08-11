<template>
    <div class="home">
        <parallax :speed-factor="0.2" :direction="'down'">
            <img src="../assets/bg-mtn.jpg" alt="">
            <div class="btn-orange">tester</div>
        </parallax>
        <div class="btn-orange">tester</div>
<!--        <img src="../assets/bg-mtn.jpg" alt="">-->
        <about></about>
        <contact></contact>
    </div>
</template>

<script>
    // @ is an alias to /src
    import About from '@/components/About.vue'
    import Contact from '@/components/Contact.vue'
    import Parallax from 'vue-parallaxy'

    export default {
        name      : 'home',
        components: {
            Parallax,
            About,
            Contact
        }
    }
</script>

<style>
    .home {
        /*background-image: url("../assets/bg-mtn.jpg");*/
        /*width: 100%;*/
        /*height: auto;*/
    }

    .parallax-container {
        position: relative;
    }


</style>
