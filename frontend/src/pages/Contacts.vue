<template>
  <q-page class="q-gutter-sm">

  <div class="q-pa-md">
    <q-carousel
      arrows
      animated
      v-model="slide"
      height="85vh"
    >

      <q-carousel-slide name="first" :img-src="images.contact1">
        <div class="absolute-bottom custom-caption">
          <div class="text-h2">Elias Thompson</div>
          <div class="text-subtitle1">Son</div>
        </div>
        <q-page-sticky position="top-left" :offset="[32, 32]">
            <q-btn fab icon="call" color="green" size="xl"
            @click="callNumber()"
            />
        </q-page-sticky>
      </q-carousel-slide>

      <q-carousel-slide name="second" :img-src="images.contact2">
        <div class="absolute-bottom custom-caption">
          <div class="text-h2">Heidi Thompson</div>
          <div class="text-subtitle1">Daughter-in-Law</div>
        </div>
        <q-page-sticky position="top-left" :offset="[32, 32]">
            <q-btn fab icon="call" color="green" size="xl"
            @click="callNumber()"
            />
        </q-page-sticky>
      </q-carousel-slide>

      <q-carousel-slide name="third" :img-src="images.contact3">
        <div class="absolute-bottom custom-caption">
          <div class="text-h2">Gordon Wilkins</div>
          <div class="text-subtitle1">Good Friend</div>
        </div>
        <q-page-sticky position="top-left" :offset="[32, 32]">
          <q-btn fab icon="call" color="green" size="xl"
          @click="callNumber()"
          />
        </q-page-sticky>
      </q-carousel-slide>

    </q-carousel>
  </div>

  </q-page>
</template>

<script>
export default {
  name: 'PageReminders',
  data () {
    return {
      slide: 'first',
      images: {
        contact1: require('../assets/male1.jpeg'),
        contact2: require('../assets/female1.jpeg'),
        contact3: require('../assets/oldmale1.jpeg')
      }
    }
  },
  methods: {
    callNumber () {
      window.location = 'tel:818-437-1804'
    }
  }
}
</script>

<style lang="sass" scoped>
.custom-caption
  text-align: center
  padding: 12px
  color: white
  background-color: rgba(0, 0, 0, .3)
</style>
