<template>
  <q-page>
  <div class="row q-gutter-sm q-pb-sm" style="height: 30vh">
        <div class="col q-gutter-sm q-pl-sm">
          <q-btn color="light-green" icon="person" class="full-width full-height" label="Contacts" style="font-size: 5vw;" stack push
          @click="goContacts()"
          />
        </div>
        <div class="col q-gutter-sm q-pr-sm">
          <q-btn color="light-blue" icon="map" class="full-width full-height" label="Navigation" style="font-size: 5vw;" stack push
          @click="goNavigation()"
          />
        </div>
      </div>

      <div class="row q-gutter-sm q-ptb-sm" style="height: 30vh">
        <div class="col q-gutter-sm q-pl-sm">
          <q-btn color="orange" icon="today" class="full-width full-height" label="Reminders" style="font-size: 5vw;" stack push
          @click="goReminders()"
          />
        </div>
        <div class="col q-gutter-sm q-pr-sm">
          <q-btn color="deep-orange" icon="search" class="full-width full-height" label="Find Items" style="font-size: 5vw;" stack push
          @click="goFindItems()"
          />
        </div>
      </div>

      <div class="row q-gutter-sm q-pt-sm" style="height: 30vh">
        <div class="col q-gutter-sm q-pl-sm">
          <q-btn color="red" icon="bubble_chart" class="full-width full-height" label="Exercises" style="font-size: 5vw;" stack push
          @click="goExercises()"
          />
        </div>
        <div class="col q-gutter-sm q-pr-sm">
          <q-btn color="purple" icon="add_a_photo" class="full-width full-height" label="Camera" style="font-size: 5vw;" stack push
          @click="goCamera()"
          />
        </div>
      </div>
  </q-page>
</template>

<script>
export default {
  name: 'PageIndex',
  methods: {
    goContacts () {
      this.$router.push('/contacts')
    },
    goNavigation () {
      this.$router.push('/navigation')
    },
    goReminders () {
      this.$router.push('/reminders')
    },
    goFindItems () {
      this.$router.push('/finditems')
    },
    goExercises () {
      this.$router.push('/exercises')
    },
    goCamera () {
      this.$router.push('/camera')
    },
    goEmergency () {
      this.$router.push('/emergency')
    }
  }
}
</script>
