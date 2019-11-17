<template>
  <q-page>
    <div class="q-pa-md row items-start q-gutter-md">
      <q-card class="my-card" style="width: 100%">
        <q-img :src="images.itempic">
          <div class="text-subtitle2 absolute-top text-center">
            My MacBook Pro
          </div>
        </q-img>

        <q-list>
          <q-item clickable @click="fixed_find = true">
            <q-item-section avatar>
              <q-icon color="green" name="search" />
            </q-item-section>
            <q-item-section>
              <q-item-label>Find it</q-item-label>
            </q-item-section>
          </q-item>

          <q-item clickable>
            <q-item-section avatar>
              <q-icon color="primary" name="menu_book" />
            </q-item-section>
            <q-item-section>
              <q-item-label>Get help</q-item-label>
            </q-item-section>
          </q-item>

          <q-item clickable @click="callNumber()">
            <q-item-section avatar>
              <q-icon color="red" name="phone" />
            </q-item-section>
            <q-item-section>
              <q-item-label>Call for repair</q-item-label>
            </q-item-section>
          </q-item>
        </q-list>
      </q-card>
    </div>

    <q-dialog v-model="fixed_find">
      <q-card>
        <q-card-section>
          <div class="text-h6">Find your MacBook Pro</div>
        </q-card-section>
        <q-separator />
        <q-card-section style="max-height: 50vh" class="scroll">
          <p>Please select an option below</p>
        </q-card-section>
        <q-separator />
        <q-card-actions align="right">
          <q-btn flat label="Turn on locator" color="green" />
          <q-btn flat label="Turn off locator" color="red" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </q-page>
</template>

<script>
export default {
  name: 'PageReminders',
  data () {
    return {
      fixed_find: false,
      images: {
        itempic: require('../assets/macbook.jpg')
      }
    }
  },
  methods: {
    callNumber () {
      window.location = 'tel:818-437-1804'
    },
    turnOn () {
      this.$axios.get('http://192.168.43.5/on')
        .then(function (response) {
          console.log(response)
        })
        .catch(function (error) {
          console.log(error)
        })
    },
    turnOff () {
      this.$axios.get('http://192.168.43.5/off')
        .then(function (response) {
          console.log(response)
        })
        .catch(function (error) {
          console.log(error)
        })
    }
  }
}
</script>

<style>

</style>
