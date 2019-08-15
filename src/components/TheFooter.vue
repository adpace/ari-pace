<template>
<div class="footer">
    <p class="text-uppercase">Ari Pace</p>
    <div class="font-italic font-weight-light">Copyright © by Ari Pace {{new Date().getUTCFullYear()}} | All Rights Reserved.</div>
</div>
</template>

<script>
    export default {
        name: "TheFooter"
    }
</script>

<style lang="scss" scoped>
    @import '../assets/css/index.scss';
.footer {
    min-height: 100px;
    background-color: black;
    color: white;
    padding: 10px 0;
    & p {
        font-size: 22px;
        letter-spacing: 2px;
        font-weight: 300;
    }
}
</style>
