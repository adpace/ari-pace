<template>
    <div id="app">
        <header-nav/>

        <router-view/>
        <footer/>
    </div>
</template>

<script>
    import HeaderNav from '@/components/HeaderNav.vue'
    import Footer from '@/components/Footer.vue'

    export default {
        name      : 'app',
        components: {
            HeaderNav,
            Footer
        }
    }

</script>

<style lang="scss">
    @import 'assets/css/index.scss';

    #app {
        position: relative;
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
    }

</style>
