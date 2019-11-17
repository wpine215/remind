<template>
  <q-page>
    <div class="q-pa-md row items-start q-gutter-md">
      <q-card class="my-card" style="width: 100%">
        <!-- <img src="https://cdn.quasar.dev/img/parallax2.jpg"> -->
        <q-img src="https://cdn.quasar.dev/img/parallax2.jpg">
          <div class="text-subtitle2 absolute-top text-center">
            My Item
          </div>
        </q-img>

        <q-list>
          <q-item clickable>
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

          <q-item clickable>
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
  </q-page>
</template>

<script>
export default {
  name: 'PageReminders'
}
</script>

<style>

</style>
