<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <hello-world msg="Welcome to Your Vue.js App"></hello-world>
    <p>This is the Home component</p>
  </div>
</template>

<script lang="ts">
  import {BaseComponent, Component} from '@/components/BaseComponent'

@Component({ name: 'home' })
export default class Home extends BaseComponent {

}
</script>
