<template>
  <q-layout view="lHh Lpr lff">
    <q-header elevated>
    <div class="row no-wrap shadow-1">
      <q-toolbar class="col-8 bg-primary">
        <q-btn
          flat
          dense
          round
          @click="goBack()"
          icon="home"
          aria-label="Menu"
        />

        <q-toolbar-title>
          remind
        </q-toolbar-title>

      </q-toolbar>

      <q-toolbar class="col-4 bg-red text-white">
        <q-tabs v-model="tab" align="center">
          <q-tab name="tab1" label="Emergency!"
          @click="goEmergency()"
          />
        </q-tabs>
      </q-toolbar>
    </div>
    </q-header>

    <q-page-container>

      <router-view />

    </q-page-container>

    <q-footer>

    </q-footer>
  </q-layout>
</template>

<script>
export default {
  name: 'MyLayout',

  data () {
    return {
      leftDrawerOpen: false
    }
  },

  methods: {
    goBack () {
      this.$router.push('/')
    },
    goEmergency () {
      this.$router.push('/emergency')
    }
  }
}
</script>
