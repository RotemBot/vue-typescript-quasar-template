<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>

<script lang="ts">
  import {BaseComponent, Component} from '@/components/BaseComponent';

  @Component({ name: 'about' })
  export default class About extends BaseComponent {

  }
</script>
