<template>
    <div id="nav"
         class="fixed-top px-5"
         :class="{'solid-bg': showNavBg}">
        <div class="container">
            <scrollactive class="d-flex justify-content-end align-items-center menu"
                          active-class="active"
                          :offset="80"
                          :scroll-offset="20">
                <div class="mr-auto brand ml-5 pl-5">Ari Pace</div>
                <div>
                    <a class="scrollactive-item link" href="#home">Home</a>
                </div>
                <div>
                    <a class="scrollactive-item link" href="#about">About</a>
                </div>
                <div>
                    <a class="scrollactive-item link" href="#resume">Resume</a>
                </div>
                <div>
                    <a class="scrollactive-item link" href="#portfolio">Portfolio</a>
                </div>
                <div class="pr-5">
                    <a class="scrollactive-item link mr-5" href="#contact">Contact</a>
                </div>
            </scrollactive>
            <!--            </div>-->
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
                text-decoration: none;
            }
        }
    }

    .solid-bg .menu a.link:not(.active) {
        color: black;
        &:hover {
            color: $orange;
        }
    }

    .solid-bg .brand {
        color: $orange;
    }

    .solid-bg {
        background: #fff;
        box-shadow: 0 2px 4px -1px rgba(0, 0, 0, 0.06), 0 4px 5px 0 rgba(0, 0, 0, 0.06), 0 1px 10px 0 rgba(0, 0, 0, 0.08);
    }
</style>
