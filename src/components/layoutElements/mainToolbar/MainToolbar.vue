<template>
    <q-toolbar>
        <q-btn
                flat
                dense
                round
                @click="$emit('toggleDrawer')"
                aria-label="Menu"
                icon="menu"
        />

        <q-toolbar-title>
            Quasar App
        </q-toolbar-title>

        <div>Quasar v{{ $q.version }}</div>
    </q-toolbar>
</template>

<script lang="ts">
  import {BaseComponent, Component} from '@/components/BaseComponent'

  @Component({name: 'main-toolbar'})
  export default class MainToolbar extends BaseComponent {

  }
</script>

<style lang="stylus" scoped>

</style>
