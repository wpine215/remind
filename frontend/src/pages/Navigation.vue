<template>
  <q-page>
    <q-scroll-area style="height: 100vh;" >
      <q-img
        :src="images.navbg"
        spinner-color="white"
        style="height: 100vh"
      />
    </q-scroll-area>
  </q-page>
</template>

<script>
export default {
  name: 'PageReminders',
  data () {
    return {
      images: {
        navbg: require('../assets/snazzy-image-1.png')
      }
    }
  }
}
</script>

<style>

</style>
