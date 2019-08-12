<template>
    <div id="nav" class="fixed-top py-4 px-5">


        <!--<div v-scroll-spy>
            <div>
                <h4>Header 1</h4>
                <p>Content</p>
            </div>
            <div>
                <h4>Header 2</h4>
                <p>Content</p>
            </div>
        </div>-->

       <!-- <div class="d-flex-row" v-scroll-spy-active v-scroll-spy-link>
            <div>
                <a>link 1</a>
            </div>
            <div>
                <a>link 2</a>
            </div>
        </div>-->

       <!-- <ul v-scroll-spy-active v-scroll-spy-link>
            <li>
                <a>Menu 1</a>
            </li>
            <li>
                <a>Menu 2</a>
            </li>
        </ul>-->

        <div class="d-flex justify-content-end" v-scroll-spy-active v-scroll-spy-link>
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
            <div>
                <a class="link mr-5 pr-5" to="/contact">Contact</a>
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