<template>
  <q-page class="q-gutter-sm">

    <!-- <q-card class="my-card">
      <q-item>
        <q-item-section>
          <q-item-label>John Doe</q-item-label>
          <q-item-label caption>Son</q-item-label>
        </q-item-section>
      </q-item>
      <img src="https://cdn.quasar.dev/img/mountains.jpg">
      <q-card-actions>
        <q-btn flat>Call</q-btn>
        <q-btn flat>Send alert</q-btn>
      </q-card-actions>
      </q-card>

      <q-card class="my-card">
      <q-item>
        <q-item-section>
          <q-item-label>John Doe</q-item-label>
          <q-item-label caption>Son</q-item-label>
        </q-item-section>
      </q-item>
      <img src="https://cdn.quasar.dev/img/mountains.jpg">
      <q-card-actions>
        <q-btn flat>Call</q-btn>
        <q-btn flat>Send alert</q-btn>
      </q-card-actions>
      </q-card>

      <q-card class="my-card">
      <q-item>
        <q-item-section>
          <q-item-label>John Doe</q-item-label>
          <q-item-label caption>Son</q-item-label>
        </q-item-section>
      </q-item>
      <img src="https://cdn.quasar.dev/img/mountains.jpg">
      <q-card-actions>
        <q-btn flat>Call</q-btn>
        <q-btn flat>Send alert</q-btn>
      </q-card-actions>
      </q-card> -->
  <div class="q-pa-md">
    <q-carousel
      arrows
      animated
      v-model="slide"
      height="85vh"
    >

      <q-carousel-slide name="first" img-src="https://cdn.quasar.dev/img/mountains.jpg">
        <div class="absolute-bottom custom-caption">
          <div class="text-h2">First stop</div>
          <div class="text-subtitle1">Mountains</div>
        </div>
        <q-page-sticky position="top-left" :offset="[32, 32]">
            <q-btn fab icon="call" color="green" size="xl" />
        </q-page-sticky>
      </q-carousel-slide>

      <q-carousel-slide name="second" img-src="https://cdn.quasar.dev/img/parallax1.jpg">
        <div class="absolute-bottom custom-caption">
          <div class="text-h2">Second stop</div>
          <div class="text-subtitle1">Famous City</div>
        </div>
        <q-page-sticky position="top-left" :offset="[32, 32]">
            <q-btn fab icon="call" color="green" size="xl" />
        </q-page-sticky>
      </q-carousel-slide>

      <q-carousel-slide name="third" img-src="https://cdn.quasar.dev/img/parallax2.jpg">
        <div class="absolute-bottom custom-caption">
          <div class="text-h2">Third stop</div>
          <div class="text-subtitle1">Famous Bridge</div>
        </div>
        <q-page-sticky position="top-left" :offset="[32, 32]">
          <q-btn fab icon="call" color="green" size="xl" />
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
      slide: 'first'
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
