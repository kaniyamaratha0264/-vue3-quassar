<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title>
          <div>Dashboard</div>
        </q-toolbar-title>

        <div><span class="material-icons">notifications</span></div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
    >
      <q-scroll-area class='fit q-scroll-area__left-menu'>
        <q-list>

          <q-item
            v-ripple
            class='q-item__left-menu'
            active-class='q-item__left-menu--active'
            to='/'
            exact
          >
            <q-item-section>
              <q-item-label>Meridian Hospicee </q-item-label>
            </q-item-section>
          </q-item>
          <q-item-label
            header
          >
            General
          </q-item-label>

          <q-item
            v-ripple
            class='q-item__left-menu'
            active-class='q-item__left-menu--active'
            to='/user'
            exact
          >
            <q-item-section avatar>
              <span class="material-icons">account_circle</span>
            </q-item-section>
            <q-item-section>
              <q-item-label>Users </q-item-label>
            </q-item-section>
          </q-item>

          <q-item
            v-ripple
            class='q-item__left-menu'
            active-class='q-item__left-menu--active'
            to='/locations'
            exact
          >
            <q-item-section avatar>
              <span class="material-icons">location_on</span>
            </q-item-section>
            <q-item-section>
              <q-item-label>Locations </q-item-label>
            </q-item-section>
          </q-item>

          <q-item
            v-ripple
            class='q-item__left-menu'
            active-class='q-item__left-menu--active'
            to='/patients'
            exact
          >
            <q-item-section avatar>
              <span class="material-icons">person</span>
            </q-item-section>
            <q-item-section>
              <q-item-label>Patients </q-item-label>
            </q-item-section>
          </q-item>

          <q-item
            v-ripple
            class='q-item__left-menu'
            active-class='q-item__left-menu--active'
            to='/patient_schedule'
            exact
          >
            <q-item-section avatar>
              <span class="material-icons">calendar_month</span>
            </q-item-section>
            <q-item-section>
              <q-item-label>Calendar </q-item-label>
            </q-item-section>
          </q-item>

          <q-item
            v-ripple
            class='q-item__left-menu'
            active-class='q-item__left-menu--active'
            to='/contacts'
            exact
          >
            <q-item-section avatar>
              <span class="material-icons">perm_contact_calendar</span>
            </q-item-section>
            <q-item-section>
              <q-item-label>Contacts </q-item-label>
            </q-item-section>
          </q-item>

          <q-item
            v-ripple
            class='q-item__left-menu'
            active-class='q-item__left-menu--active'
            to='/chat'
            exact
          >
            <q-item-section avatar>
              <span class="material-icons">perm_contact_calendar</span>
            </q-item-section>
            <q-item-section>
              <q-item-label>Chat </q-item-label>
            </q-item-section>
          </q-item>

          <q-item
            v-ripple
            class='q-item__left-menu'
            active-class='q-item__left-menu--active'
            to='/profile'
            exact
          >
            <q-item-section avatar>
              <q-avatar size="24px" color="green">UN</q-avatar>
            </q-item-section>
            <q-item-section>
              <q-item-label>Profile</q-item-label>
            </q-item-section>
          </q-item>

          <!-- <EssentialLink
            v-for="link in essentialLinks"
            :key="link.title"
            v-bind="link"
          /> -->
        </q-list>
      </q-scroll-area>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from 'vue'
// import EssentialLink from 'components/EssentialLink.vue'

// const linksList = [
//   {
//     title: 'Users ',
//     caption: 'quasar.dev',
//     icon: 'school',
//     link: 'https://quasar.dev'
//   },
//   {
//     title: 'Github',
//     caption: 'github.com/quasarframework',
//     icon: 'code',
//     link: 'https://github.com/quasarframework'
//   },
//   {
//     title: 'Discord Chat Channel',
//     caption: 'chat.quasar.dev',
//     icon: 'chat',
//     link: 'https://chat.quasar.dev'
//   },
//   {
//     title: 'Forum',
//     caption: 'forum.quasar.dev',
//     icon: 'record_voice_over',
//     link: 'https://forum.quasar.dev'
//   },
//   {
//     title: 'Twitter',
//     caption: '@quasarframework',
//     icon: 'rss_feed',
//     link: 'https://twitter.quasar.dev'
//   },
//   {
//     title: 'Facebook',
//     caption: '@QuasarFramework',
//     icon: 'public',
//     link: 'https://facebook.quasar.dev'
//   },
//   {
//     title: 'Quasar Awesome',
//     caption: 'Community Quasar projects',
//     icon: 'favorite',
//     link: 'https://awesome.quasar.dev'
//   }
// ]

export default defineComponent({
  name: 'MainLayout',

  components: {
    // EssentialLink
  },

  setup () {
    const leftDrawerOpen = ref(false)

    return {
      // essentialLinks: linksList,
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  }
})
</script>
