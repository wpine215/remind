<template>
  <div class = "q-pa-md q-gutter-md" height="100%">
    <q-list bordered padding class="text-primary">
      <q-item clickable v-ripple>
        <q-item-selection avatar top>
          <q-icon color="primary" name="call"/>
        </q-item-selection>
        <q-item-section>911</q-item-section>
    </q-item>

    <q-item clickable v-ripple>
      <q-item-section>
        <q-item-selection avatar top>
          <q-icon color="primary" name="call"/>
          <q-item-label>EMERGENCY CONTACT</q-item-label>
          <q-item-label caption>DAUGHTER</q-item-label>
        </q-item-selection>
      </q-item-section>
    </q-item>

    <q-item clickable v-ripple>
      <q-item-selection avatar top>
          <q-icon color="primary" name="call"/>
      <q-item-section>DOCTOR</q-item-section>
      </q-item-selection>
    </q-item>

    <q-item clickable v-ripple>
      <q-item-selection avatartop >
          <q-icon color="primary" name="call"/>
      <q-item-section>NON-EMERGENCY POLICE</q-item-section>
      </q-item-selection>
    </q-item>

    <q-item clickable v-ripple>
      <q-item-selection avatartop >
          <q-icon color="primary" name="call"/>
      <q-item-section>411</q-item-section>
      </q-item-selection>
    </q-item>
  </q-list>
  </div>
</template>

<script>
export default {
  name: 'PageReminders'
}
</script>

<style lang="sass" scoped>

</style>
