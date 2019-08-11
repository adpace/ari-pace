<template>
    <div id="app">
        <header-nav/>

        <router-view/>
    </div>
</template>

<script>
    import HeaderNav from '@/components/HeaderNav.vue'

    export default {
        name      : 'app',
        components: {
            HeaderNav
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
