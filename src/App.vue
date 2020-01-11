<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated class="glossy">
      <main-toolbar @toggleDrawer="leftDrawerOpen = !leftDrawerOpen"></main-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      bordered
      content-class="bg-grey-2"
    >
      <side-panel></side-panel>
    </q-drawer>

    <q-page-container>
      <router-view></router-view>
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import {BaseComponent, Component} from '@/components/BaseComponent'

@Component({ name: 'layout-default' })
export default class LayoutDefault extends BaseComponent {

  public leftDrawerOpen: boolean = false

}
</script>

<style lang="stylus">
</style>
