<template>
  <div class="q-pa-md q-gutter-md items-center" style="max-width: 110vw">

    <q-list v-for="(item,index) in rem_list" :key="index" class="bg-grey-3" bordered separator>
      <q-item clickable v-ripple :active="active">
        <q-item-section side>{{ item.time }}</q-item-section>
        <q-item-section>{{ item.task }}</q-item-section>
        <q-item-section avatar>
          <q-btn icon="delete" color="red" @click="deleteSelf(index)"/>
        </q-item-section>
      </q-item>
    </q-list>

    <q-page-sticky position="bottom-right" :offset="[18, 18]">
      <q-btn fab icon="add" color="primary" @click="event=true"/>
    </q-page-sticky>
    <q-dialog v-model="event">
      <q-card class="q-pa-md q-gutter-sm">
      <q-form
      @submit="onSubmit"
      class="q-gutter-md"
      >
      <q-input
        filled
        v-model="taskname"
        label="Task name *"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Please type something']"
      />

      <q-card-actions>
        <q-time
        v-model="time"
        now-btn
        />
      </q-card-actions>

      <div>
        <q-btn label="Submit" type="submit" color="primary" v-close-popup />
        <q-btn label="Cancel" type="reset" color="primary" flat class="q-ml-sm" v-close-popup />
      </div>
    </q-form>
      </q-card>
    </q-dialog>
  </div>
</template>

<script>
export default {
  data () {
    return {
      time: null,
      taskname: null,
      event: false,
      rem_list: [
        {
          task: 'Exercise',
          time: '16:00'
        },
        {
          task: 'Dinner',
          time: '18:00'
        },
        {
          task: 'Take Medication',
          time: '20:30'
        }
      ]
    }
  },
  methods: {
    onSubmit () {
      // this.$q.notify({
      //   color: 'green-4',
      //   textColor: 'white',
      //   icon: 'cloud_done',
      //   message: 'Event created'
      // })
      this.rem_list.push({ task: this.taskname, time: this.time })
    },
    deleteSelf (index) {
      this.rem_list.splice(index, 1)
    }
  }
}
</script>

<style lang="sass" scoped>
</style>
