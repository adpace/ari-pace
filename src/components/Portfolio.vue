<template>
    <div class="section">
        <div class="section-title">My Portfolio</div>
        <div class="freelance">
            <h2>I AM AVAILABLE FOR FREELANCE</h2>
            <div class="btn-white">hire me</div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Portfolio"
    }
</script>

<style scoped lang="scss">
    @import '../assets/css/index.scss';

    .freelance {
        padding: 50px;
        background-color: $orange;
        color: white;
        text-align: center;
    }

    .freelance h2 {
        font-size: 30px;
        color: #fff;
        margin: 0;
        padding: 0 0 30px;
        text-transform: uppercase;
        font-weight: 600;
    }
</style>
