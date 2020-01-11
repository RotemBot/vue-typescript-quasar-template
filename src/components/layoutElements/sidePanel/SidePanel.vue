<template>
    <q-list>
        <q-item-label header>Essential Links</q-item-label>
        <q-item clickable @click="createFamily">
            <q-item-section avatar>
                <q-icon name="family" />
            </q-item-section>
            <q-item-section>
                <q-item-label>Create</q-item-label>
                <q-item-label caption>create a new family</q-item-label>
            </q-item-section>
        </q-item>
        <q-item clickable tag="a" target="_blank" href="https://github.com/quasarframework/">
            <q-item-section avatar>
                <q-icon name="code" />
            </q-item-section>
            <q-item-section>
                <q-item-label>Github</q-item-label>
                <q-item-label caption>github.com/quasarframework</q-item-label>
            </q-item-section>
        </q-item>
        <q-item clickable tag="a" target="_blank" href="https://chat.quasar.dev">
            <q-item-section avatar>
                <q-icon name="chat" />
            </q-item-section>
            <q-item-section>
                <q-item-label>Discord Chat Channel</q-item-label>
                <q-item-label caption>chat.quasar.dev</q-item-label>
            </q-item-section>
        </q-item>
        <q-item clickable tag="a" target="_blank" href="https://forum.quasar.dev">
            <q-item-section avatar>
                <q-icon name="forum" />
            </q-item-section>
            <q-item-section>
                <q-item-label>Forum</q-item-label>
                <q-item-label caption>forum.quasar.dev</q-item-label>
            </q-item-section>
        </q-item>
        <q-item clickable tag="a" target="_blank" href="https://twitter.com/quasarframework">
            <q-item-section avatar>
                <q-icon name="rss_feed" />
            </q-item-section>
            <q-item-section>
                <q-item-label>Twitter</q-item-label>
                <q-item-label caption>@quasarframework</q-item-label>
            </q-item-section>
        </q-item>
    </q-list>
</template>

<script lang="ts">
  import {BaseComponent, Component} from '@/components/BaseComponent'
  import {Kernel} from '@/kernel'
  import {Client} from '@/services'

  @Component({ name: 'side-panel' })
  export default class SidePanel extends BaseComponent {

      @Kernel.Inject(Client)
      private client!: Client

      public createFamily () {
          this.client.createNewFamily({ name: 'Test' })
      }
  }
</script>

<style lang="stylus" scoped>

</style>
