<template>

    <div class="home-banner">
        <parallax :speed-factor="0.3" :direction="'down'">
            <img src="../assets/bg-forest.jpg" alt="">
        </parallax>
        <div class="welcome-text">
            <h3 class="text-center">Hello! I'm</h3>
            <h2 class="text-center">Ari Pace</h2>
            <h6>WEB DESIGN | DIGITAL MARKETING | UX DESIGN | WEB DEVELOPMENT | GRAPHIC DESIGN</h6>
            <div class="btn-orange" v-scroll-spy onclick="$scrollTo(2)">let's talk</div>
        </div>
    </div>
    <!--<div class="hello">
      <h1>{{ msg }}</h1>
      <p>
        For a guide and recipes on how to configure / customize this project,<br>
        check out the
        <a href="https://cli.vuejs.org" target="_blank" rel="noopener">vue-cli documentation</a>.
      </p>
      <h3>Installed CLI Plugins</h3>
      <ul>
        <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel" target="_blank" rel="noopener">babel</a></li>
        <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint" target="_blank" rel="noopener">eslint</a></li>
      </ul>
      <h3>Essential Links</h3>
      <ul>
        <li><a href="https://vuejs.org" target="_blank" rel="noopener">Core Docs</a></li>
        <li><a href="https://forum.vuejs.org" target="_blank" rel="noopener">Forum</a></li>
        <li><a href="https://chat.vuejs.org" target="_blank" rel="noopener">Community Chat</a></li>
        <li><a href="https://twitter.com/vuejs" target="_blank" rel="noopener">Twitter</a></li>
        <li><a href="https://news.vuejs.org" target="_blank" rel="noopener">News</a></li>
      </ul>
      <h3>Ecosystem</h3>
      <ul>
        <li><a href="https://router.vuejs.org" target="_blank" rel="noopener">vue-router</a></li>
        <li><a href="https://vuex.vuejs.org" target="_blank" rel="noopener">vuex</a></li>
        <li><a href="https://github.com/vuejs/vue-devtools#vue-devtools" target="_blank" rel="noopener">vue-devtools</a></li>
        <li><a href="https://vue-loader.vuejs.org" target="_blank" rel="noopener">vue-loader</a></li>
        <li><a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener">awesome-vue</a></li>
      </ul>
    </div>-->
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

</style>
