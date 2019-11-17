<template>
  <div class="q-pa-md">
    <!-- Code for adding new event/task -->
      <q-page-sticky position="bottom-right" :offset="[18, 18]">
        <q-fab
          icon="add"
          direction="up"
          color="accent"
        >
          <q-fab-action @click="onClick" color="primary" icon="person_add" />
          <q-fab-action @click="onClick" color="primary" icon="mail" />
        </q-fab>
      </q-page-sticky>

    <div class="q-gutter-sm">
      <q-list>
        <q-item tag="label" v-ripple>
          <q-item-section avatar>
            <q-checkbox dense v-model="color" val="task1" color="task1" />
          </q-item-section>
          <q-item-section>
            <q-item-label>task1</q-item-label>
          </q-item-section>
      </q-item>
      <!-- Code for making priority -->
      <q-rating
        v-model="ratingModel"
        size="2em"
        :max="1"
        color="primary"
      />
      <!-- Code for actual list -->
        <q-item tag="label" v-ripple>
          <q-item-section avatar>
            <q-checkbox dense v-model="color" val="task2" color="task2" />
          </q-item-section>
          <q-item-section>
            <q-item-label>task2</q-item-label>
            <q-item-label caption>Testing filler code for task2 description</q-item-label>
          </q-item-section>
      </q-item>
      </q-list>
      <q-list>
        <q-item tag="label" v-ripple>
          <q-item-section avatar>
            <q-checkbox dense v-model="color" val="Event1" color="Event1" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Event1</q-item-label>
          </q-item-section>
      </q-item>
      </q-list>
      <!-- <q-checkbox dense v-model="orange" label="Task 2" color="orange" /> <br>
      <q-checkbox dense v-model="red" label="Event 1" color="red" /> <br>
      <q-checkbox dense v-model="cyan" label="Event 2" color="cyan" /> <br> -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'PageReminders',
  methods: {
  },
  data () {
    return {
      teal: true,
      orange: false,
      red: true,
      cyan: false
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
