<template>
    <div id="nav"
         class="fixed-top px-5"
         :class="{'solid-bg': showNavBg}">
        <div class="container">
            <div class="d-flex justify-content-end align-items-center menu"
                 v-scroll-spy-active="{selector: 'a.link'}"
                 v-scroll-spy-link="{selector: 'a.link'}">
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
    </div>
</template>

<script>
    import { mapGetters } from 'vuex'

    export default {
        name    : "HeaderNav",
        computed: {
            showNavBg () {
                return this.$store.getters.getNavBg
            }
            /*...mapGetters({
                showNavBg: 'getNavBg'
            })*/
        }
    }
</script>

<style scoped lang="scss">
    @import '../assets/css/index.scss';

    #nav {

    }

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

    .menu {
        margin: 0;
        padding: 15px 0;
        border: none;
        border-radius: 0;

        & a.link {
            color: white;

            &:hover:not(.active) {
                color: $orange;
            }
        }
    }

    .solid-bg .menu a.link:not(.active){
        color: black;
    }

    .solid-bg .brand {
        color: $orange;
    }

    .solid-bg {
        background: #fff;
        box-shadow: 0 2px 4px -1px rgba(0, 0, 0, 0.06), 0 4px 5px 0 rgba(0, 0, 0, 0.06), 0 1px 10px 0 rgba(0, 0, 0, 0.08);
    }
</style>
