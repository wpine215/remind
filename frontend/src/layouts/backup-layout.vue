<template>
  <q-layout view="lHh Lpr lff">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          @click="leftDrawerOpen = !leftDrawerOpen"
          icon="menu"
          aria-label="Menu"
        />

        <q-toolbar-title>
          remind
        </q-toolbar-title>

        <q-tabs v-model="tab" shrink>
          <q-tab name="tab1" label="Emergency!" color="red"/>
        </q-tabs>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      content-class="bg-grey-2"
    >
      <q-list>
        <q-item-label header>Navigation</q-item-label>
        <q-item clickable tag="a" target="_blank" href="https://quasar.dev">
          <q-item-section avatar>
            <q-icon name="school" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Docs</q-item-label>
            <q-item-label caption>quasar.dev</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable tag="a" target="_blank" href="https://github.quasar.dev">
          <q-item-section avatar>
            <q-icon name="code" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Github</q-item-label>
            <q-item-label caption>github.com/quasarframework</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable tag="a" target="_blank" href="https://chat.quasar.dev">
          <q-item-section avatar>
            <q-icon name="chat" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Discord Chat Channel</q-item-label>
            <q-item-label caption>chat.quasar.dev</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable tag="a" target="_blank" href="https://forum.quasar.dev">
          <q-item-section avatar>
            <q-icon name="record_voice_over" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Forum</q-item-label>
            <q-item-label caption>forum.quasar.dev</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable tag="a" target="_blank" href="https://twitter.quasar.dev">
          <q-item-section avatar>
            <q-icon name="rss_feed" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Twitter</q-item-label>
            <q-item-label caption>@quasarframework</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable tag="a" target="_blank" href="https://facebook.quasar.dev">
          <q-item-section avatar>
            <q-icon name="public" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Facebook</q-item-label>
            <q-item-label caption>@QuasarFramework</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <!-- <router-view /> -->
      <!--<q-card class="my-card">
      <q-item>
        <q-item-section avatar>
          <q-avatar>
            <img src="https://cdn.quasar.dev/img/avatar2.jpg">
          </q-avatar>
        </q-item-section>

        <q-item-section>
          <q-item-label>John Doe</q-item-label>
          <q-item-label caption>Son</q-item-label>
        </q-item-section>
      </q-item>

      <img src="https://cdn.quasar.dev/img/mountains.jpg">
      <q-card-actions>
        <q-btn flat>Call</q-btn>
        <q-btn flat>Send alert</q-btn>
      </q-card-actions>
      </q-card>-->

      <router-view />

      <!-- <div class="row q-gutter-sm q-pb-sm" style="height: 45vh">
        <div class="col q-gutter-sm q-pl-sm">
          <q-btn color="light-green" icon="person" class="full-width full-height" label="Contacts" style="font-size: 5vw;" stack push />
        </div>
        <div class="col q-gutter-sm q-pr-sm">
          <q-btn color="light-blue" icon="map" class="full-width full-height" label="Navigation" style="font-size: 5vw;" stack push />
        </div>
      </div>

      <div class="row q-gutter-sm q-ptb-sm" style="height: 45vh">
        <div class="col q-gutter-sm q-pl-sm">
          <q-btn color="orange" icon="today" class="full-width full-height" label="Reminders" style="font-size: 5vw;" stack push />
        </div>
        <div class="col q-gutter-sm q-pr-sm">
          <q-btn color="deep-orange" icon="search" class="full-width full-height" label="Find Items" style="font-size: 5vw;" stack push />
        </div>
      </div> -->

      <!-- <q-page-sticky position="bottom-right" :offset="[18, 84]">
        <q-fab color="purple" icon="directions_car" direction="up">
          <q-fab-action color="primary" @click="onClickHome" icon="home" />
          <q-fab-action color="secondary" @click="onClickStore" icon="store" />
          <q-fab-action color="orange" @click="onClickHospital" icon="local_hospital" />
        </q-fab>
      </q-page-sticky>
      <q-page-sticky position="bottom-right" :offset="[18, 18]">
            <q-btn fab icon="add_a_photo" color="accent" size="35" push/>
      </q-page-sticky> -->
    </q-page-container>

    <q-footer>
      <!-- <q-tabs
        v-model="tab"
        indicator-color="yellow"
        class="bg-primary text-white shadow-2"
      >
        <q-tab name="contacts" icon="person" label="Contacts" />
        <q-tab name="reminders" icon="today" label="Reminders" />
        <q-tab name="movies" icon="search" label="Find Items" />
      </q-tabs> -->
    </q-footer>
  </q-layout>
</template>

<script>
export default {
  name: 'MyLayout',

  data () {
    return {
      leftDrawerOpen: false
    }
  }
}
</script>
