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
      <q-btn fab icon="home" color="accent" size="xs" @click="fixed_home = true">
        <q-tooltip>
          Home (Warren Towers)
        </q-tooltip>
      </q-btn>
    </q-page-sticky>
    <q-page-sticky position="center" :offset="[-150, -300]">
      <q-btn fab icon="my_location" color="light-blue" size="xs" @click="fixed_current = true">
        <q-tooltip>
          Current Location
        </q-tooltip>
      </q-btn>
    </q-page-sticky>
    <q-page-sticky position="center" :offset="[-75, -350]">
      <q-btn fab icon="nature" color="light-green" size="xs" @click="fixed_beach = true">
        <q-tooltip>
          The BU Beach!
        </q-tooltip>
      </q-btn>
    </q-page-sticky>
    <q-page-sticky position="center" :offset="[-100, -30]">
      <q-btn fab icon="store" color="green" size="xs" @click="fixed_supermarket = true">
        <q-tooltip>
          Supermarket (Whole Foods)
        </q-tooltip>
      </q-btn>
    </q-page-sticky>
    <q-page-sticky position="center" :offset="[10, -90]">
      <q-btn fab icon="local_hospital" color="red" size="xs" @click="fixed_hospital = true">
        <q-tooltip>
          Hospital
        </q-tooltip>
      </q-btn>
    </q-page-sticky>

    <q-dialog v-model="fixed_home">
      <q-card>
        <q-card-section>
          <div class="text-h6">Directions to Home</div>
        </q-card-section>
        <q-separator />
        <q-card-section style="max-height: 50vh" class="scroll">
          <p>1) Head east on Comm. Ave towards St Marys St for 0.2 miles</p>
          <p>2) Turn right onto Cummington mall and walk straight for 75 feet</p>
          <p>3) Turn left onto Commonwealth ave</p>
          <p>4) Walk for 300 feet and the destination will be on your right</p>
        </q-card-section>
        <q-separator />
        <q-card-actions align="right">
          <q-btn flat label="Order Lyft" color="primary"
          @click="lyftHome()"
          v-close-popup />
          <q-btn flat label="OK" color="primary" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>

    <q-dialog v-model="fixed_beach">
      <q-card>
        <q-card-section>
          <div class="text-h6">Directions to BU Beach</div>
        </q-card-section>
        <q-separator />
        <q-card-section style="max-height: 50vh" class="scroll">
          <p>1) Head east on Commonwealth Ave for 300 feet</p>
          <p>2) Turn left and walk straight for 50 feet</p>
          <p>3) Take a slight right and walk straight for 480 feet</p>
          <p>4) Turn left onto Bay State Rd and walk straight for 200 feet</p>
          <p>5) Turn right onto Bay State Rd and walk straight for 144 feet</p>
        </q-card-section>
        <q-separator />
        <q-card-actions align="right">
          <q-btn flat label="Order Lyft" color="primary"
          @click="lyftBeach()"
          v-close-popup />
          <q-btn flat label="OK" color="primary" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>

    <q-dialog v-model="fixed_supermarket">
      <q-card>
        <q-card-section>
          <div class="text-h6">Directions to Supermarket (Whole Foods)</div>
        </q-card-section>
        <q-separator />
        <q-card-section style="max-height: 50vh" class="scroll">
          <p>1) Head west on Commonwealth Ave towards Carlton St for 148 feet</p>
          <p>2) Turn left onto Carlton St and walk straight for 0.3 miles</p>
          <p>3) Turn left onto Beacon St</p>
          <p>4) Walk straight for 300 feet and the destination will be on your left</p>
        </q-card-section>
        <q-separator />
        <q-card-actions align="right">
          <q-btn flat label="Order Lyft" color="primary"
          @click="lyftSupermarket()"
          v-close-popup />
          <q-btn flat label="OK" color="primary" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>

    <q-dialog v-model="fixed_hospital">
      <q-card>
        <q-card-section>
          <div class="text-h6">Directions to Hospital</div>
        </q-card-section>
        <q-separator />
        <q-card-section style="max-height: 50vh" class="scroll">
          <p>1) Head east on Comm. ave towards St Marys st for 0.1 miles</p>
          <p>2) Turn right onto St Marys st and walk straight for 0.1 miles</p>
          <p>3) Turn left onto MA-2 E/Mountfort St and walk straight for 250 feet</p>
          <p>4) Take a slight right onto Park drive and walk for 470 feet</p>
          <p>5) Turn right onto Private Alley 920</p>
          <p>6) Walk for 66 feet and the destination will be on your left</p>
        </q-card-section>
        <q-separator />
        <q-card-actions align="right">
          <q-btn flat label="Call 911" color="red" v-close-popup />
          <q-btn flat label="Order Lyft" color="primary" v-close-popup
          @click="lyftHospital()"
          />
          <q-btn flat label="OK" color="primary" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>

    <q-dialog v-model="fixed_current">
      <q-card>
        <q-card-section>
          <div class="text-h6">Current Location</div>
        </q-card-section>
        <q-separator />
        <q-card-section style="max-height: 50vh" class="scroll">
          <p>This point indicates where you currently are</p>
        </q-card-section>
        <q-separator />
        <q-card-actions align="right">
          <q-btn flat label="OK" color="primary" v-close-popup />
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
      fixed_home: false,
      fixed_beach: false,
      fixed_supermarket: false,
      fixed_hospital: false,
      fixed_current: false,
      images: {
        navbg: require('../assets/snazzy-image-1.png')
      }
    }
  },
  methods: {
    lyftBeach () {
      window.location = 'https://lyft.com/ride?id=lyft&pickup[latitude]=37.764728&pickup[longitude]=-122.422999&partner=VR-XG3DAHBBJ&destination[latitude]=37.7763592&destination[longitude]=-122.4242038'
    },
    lyftHome () {
      window.location = 'https://lyft.com/ride?id=lyft&pickup[latitude]=37.764728&pickup[longitude]=-122.422999&partner=VR-XG3DAHBBJ&destination[latitude]=37.7763592&destination[longitude]=-122.4242038'
    },
    lyftHospital () {
      window.location = 'https://lyft.com/ride?id=lyft&pickup[latitude]=37.764728&pickup[longitude]=-122.422999&partner=VR-XG3DAHBBJ&destination[latitude]=37.7763592&destination[longitude]=-122.4242038'
    },
    lyftSupermarket () {
      window.location = 'https://lyft.com/ride?id=lyft&pickup[latitude]=37.764728&pickup[longitude]=-122.422999&partner=VR-XG3DAHBBJ&destination[latitude]=37.7763592&destination[longitude]=-122.4242038'
    },
    callNineOneOne () {
      window.location = 'tel:911'
    }
  }
}
</script>

<style>

</style>
