<template>
    <div id="nav" class="fixed-top py-4 px-5">

        <div class="d-flex justify-content-end" v-scroll-spy-active="{selector: 'a.link'}" v-scroll-spy-link="{selector: 'a.link'}">
            <div class="mr-auto brand ml-5 pl-5">Ari Pace</div>
            <!--<div>
                <a class="link" to="/">Home</a>
            </div>-->
            <div>
                <a class="link" to="/about">About</a>
            </div>
            <div>
                <a class="link" to="/resume">Resume</a>
            </div>
            <div>
                <a class="link" to="/portfolio">Portfolio</a>
            </div>
            <div class="pr-5">
                <a class="link mr-5" to="/contact">Contact</a>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "HeaderNav"
    }
</script>

<style scoped lang="scss">
    @import '../assets/css/index.scss';

    #nav {

    }
</style>