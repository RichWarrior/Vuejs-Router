<template>
  <div id="app">   
  <router-link to="/">Home</router-link>
  <router-link to="About">About</router-link>
  <router-link to="Contact">Contact</router-link>
  <router-link :to="ProfileRouter">Profile User</router-link>
  <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  computed:{
    ProfileRouter(){
      return '/Profile/1';
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
