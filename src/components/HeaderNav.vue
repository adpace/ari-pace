<template>
    <div id="nav">


        <div v-scroll-spy>
            <div>
                <h1>Header 1</h1>
                <p>Content</p>
            </div>
            <div>
                <h1>Header 2</h1>
                <p>Content</p>
            </div>
        </div>
        <ul v-scroll-spy-active v-scroll-spy-link>
            <li>
                <a>Menu 1</a>
            </li>
            <li>
                <a>Menu 2</a>
            </li>
        </ul>

        <div class="d-flex justify-content-end">
            <div class="mr-auto brand">Ari Pace</div>
            <div>
                <router-link class="link" to="/">Home</router-link>
            </div>
            <div>
                <router-link class="link" to="/about">About</router-link>
            </div>
            <div>
                <router-link class="link" to="/resume">Resume</router-link>
            </div>
            <div>
                <router-link class="link" to="/portfolio">Portfolio</router-link>
            </div>
            <div>
                <router-link class="link" to="/contact">Contact</router-link>
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
        position: absolute;

        .link {
            right: 50px;
            padding: 30px;

            a {
                font-weight: bold;
                color: #ffffff;

                &.router-link-exact-active {
                    color: $orange;
                }
            }
        }
    }
</style>