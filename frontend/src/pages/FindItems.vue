<template>
  <q-page>
    <div class="q-pa-md row items-start q-gutter-md">
      <q-card class="my-card" style="width: 100%">
        <q-img :src="images.itempic">
          <div class="text-subtitle2 absolute-top text-center">
            My Raspberry Pi
          </div>
        </q-img>

        <q-list>
          <q-item clickable @click="fixed_find = true">
            <q-item-section avatar>
              <q-icon color="green" name="search" />
            </q-item-section>
            <q-item-section>
              <q-item-label>Find it!</q-item-label>
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
    <div id='sneaky'></div>
    <q-dialog v-model="fixed_find">
      <q-card>
        <q-card-section>
          <div class="text-h6">Find your Raspberry Pi</div>
        </q-card-section>
        <q-separator />
        <q-card-section style="max-height: 50vh" class="scroll">
          <p>Please select an option below</p>
        </q-card-section>
        <q-separator />
        <q-card-actions align="right">
          <q-btn flat label="Turn on locator" color="green" @click="turnOn()"/>
          <q-btn flat label="Turn off locator" color="red" @click="turnOff()" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </q-page>
</template>

<script>
// import axios from 'axios'

export default {
  name: 'PageReminders',
  data () {
    return {
      fixed_find: false,
      images: {
        itempic: require('../assets/rpi.jpg')
      }
    }
  },
  methods: {
    callNumber () {
      window.location = 'tel:818-437-1804'
    },
    turnOn () {
      document.getElementById('sneaky').innerHTML = "<iframe src='http://192.168.43.5/' height='1' width='1'></iframe>"
      // axios({
      //   method: 'get',
      //   url: 'http://192.168.43.5/'
      // })
      // axios.get('http://192.168.43.5/')
      //   .then((response) => {
      //     this.data = response.data
      //   })
      //   .catch(() => {
      //     this.$q.notify({
      //       color: 'negative',
      //       position: 'top',
      //       message: 'Loading failed',
      //       icon: 'report_problem'
      //     })
      //   })
      // this.$axios.get('http://192.168.43.5/')
    },
    turnOff () {
      document.getElementById('sneaky').innerHTML = "<iframe src='http://192.168.43.5/off' height='1' width='1'></iframe>"
      // axios({
      //   method: 'get',
      //   url: 'http://192.168.43.5/off'
      // })
      // axios.get('http://192.168.43.5/off')
      //   .then((response) => {
      //     this.data = response.data
      //   })
      //   .catch(() => {
      //     this.$q.notify({
      //       color: 'negative',
      //       position: 'top',
      //       message: 'Loading failed',
      //       icon: 'report_problem'
      //     })
      //   })
      // this.$axios.get('http://192.168.43.5/off')
    }
  }
}
</script>

<style>

</style>
