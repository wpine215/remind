<template>
  <div class="q-pa-md q-gutter-md items-center" style="max-width: 110vw">

    <q-list v-for="(item,index) in rem_list" :key="index" class="bg-grey-3" bordered separator>
      <q-item clickable v-ripple :active="active">
        <q-item-section side>{{ item.time }}</q-item-section>
        <q-item-section>{{ item.task }}</q-item-section>
        <q-item-section avatar>
          <q-icon name="delete" color="red" />
        </q-item-section>
      </q-item>
    </q-list>

    <q-page-sticky position="bottom-right" :offset="[18, 18]">
      <q-btn fab icon="add" color="primary" />
    </q-page-sticky>
  </div>
</template>

<script>
export default {
  data () {
    return {
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
  }
}
</script>

<style lang="sass" scoped>
</style>
