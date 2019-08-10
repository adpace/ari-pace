<link rel="stylesheet" href="../../rufus-firebase/src/assets/css/index.scss">
<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/resume">Resume</router-link> |
      <router-link to="/portfolio">Portfolio</router-link> |
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  position: relative;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  position: absolute;
  right: 50px;
  padding: 30px;
  a {
    font-weight: bold;
    color: #ffffff;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
