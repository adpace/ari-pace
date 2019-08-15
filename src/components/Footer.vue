<template>
    <div class="footer">
        <h5>Ari Pace</h5>
        copyright {{new Date()}}
    </div>
</template>

<script>
    export default {
        name: "Footer"
    }
</script>

<style lang="scss" scoped>
    @import '../assets/css/index.scss';

    .footer {
        background-color: black;
        color: white;
        min-height: 200px;
    }

</style>
