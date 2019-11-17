<template>
  <q-page>
    <!-- <q-scroll-area style="width:20vw;" > -->
      <q-img
        :src="images.navbg"
        spinner-color="white"
        style="width:100vw; height:100vh"
        class="fixed-center"
      />
    <!-- </q-scroll-area> -->
    <q-page-sticky position="center" :offset="[85, -210]">
      <q-btn fab icon="home" color="accent" size="xs" />
    </q-page-sticky>
    <q-page-sticky position="center" :offset="[-150, -300]">
      <q-btn fab icon="my_location" color="light-blue" size="xs" />
    </q-page-sticky>
    <q-page-sticky position="center" :offset="[-75, -350]">
      <q-btn fab icon="nature" color="light-green" size="xs" />
    </q-page-sticky>
    <q-page-sticky position="center" :offset="[-100, -30]">
      <q-btn fab icon="store" color="green" size="xs" />
    </q-page-sticky>
    <q-page-sticky position="center" :offset="[10, -90]">
      <q-btn fab icon="local_hospital" color="red" size="xs" />
    </q-page-sticky>
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
