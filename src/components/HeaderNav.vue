<template>
    <div id="nav" class="fixed-top py-4 px-5">

        <div class="d-flex justify-content-end" v-scroll-spy-active="{selector: 'a.link'}" v-scroll-spy-link="{selector: 'a.link'}">
            <div class="mr-auto brand ml-5 pl-5">Ari Pace</div>
            <div>
                <a class="link" to="/">Home</a>
            </div>
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

    //from martin luther site
    .header {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        z-index: 9;
        -webkit-transition: all .2s ease;
        -moz-transition: all .2s ease;
        -o-transition: all .2s ease;
        transition: all .2s ease;
    }

    .fixed-header {
        background: #fff;
        box-shadow: 0 2px 4px -1px rgba(0, 0, 0, 0.06), 0 4px 5px 0 rgba(0, 0, 0, 0.06), 0 1px 10px 0 rgba(0, 0, 0, 0.08);
    }
</style>
