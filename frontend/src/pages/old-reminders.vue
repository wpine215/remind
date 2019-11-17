




<template>
  <div class="q-pa-md">
    <div class="q-gutter-sm">
    <!-- Code for Events/Tasks -->
      <div class="q-pa-lg">
        <q-option-group
          v-model="group"
          :options="options"
          color="green"
          type="checkbox"
          />
      </div>
    </div>
  </div>

</template>

<script>
export default {
  data () {
    return {
      group: ['Tasks'],
      options: [
        {
          label: 'Task 1',
          value: 'op1'
        },
        {
          label: 'Task 2',
          value: 'op2'
        },
        {
          label: 'Task 3',
          value: 'op3'
        }
      ]
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
