<template>
  <div>
    <v-app-bar flat color="#e9e9e9">

      <v-snackbar
        :timeout="4000"
        v-model="snackbar"
        color="success"
        multi-line
        location="top center"
      >
        Awesome! You added a new project.

        <template v-slot:actions>
          <v-btn
            variant="text"
            @click="snackbar = false"
          >
            Close
          </v-btn>
        </template>
      </v-snackbar>

      <v-app-bar-nav-icon class="text-grey" variant="text" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title class="text-uppercase text-grey">
        <span class="font-weight-light">Todo</span>
        <span>Ninja</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>

      <!-- Dropdown button -->
      <div class="text-center">
        <v-menu location="bottom center">
          <template v-slot:activator="{ props }">
            <v-btn
              color="grey"
              prepend-icon="mdi-chevron-down"
              v-bind="props"
            >
              Menu
            </v-btn>
          </template>

          <v-list>
            <v-list-item
              v-for="(item, i) in drawerItems"
              :key="i"
              :value="item"
              router :to="item.route"
              color="#2a73c5"
            >
              <v-list-item-title class="text-grey">{{ item.text }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </div>

      <v-btn append-icon="mdi-logout-variant" color="grey">
        <span>Sign Out</span>
      </v-btn>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" permanent>
      <v-row class="text-center" >
        <v-col class="mt-8">
          <v-avatar :image="require('@/assets/images/avatar-1.png')" size="100" class="bg-grey-lighten-2">
          </v-avatar>

          <p class="text-grey mt-2 mb-5 text-uppercase">The Net Ninja</p>
        </v-col>
      </v-row>

      <div class="mb-3">
        <PopUp @projectAdded="snackbar = true"/>
      </div>

      <v-list>
        <v-list-item
          v-for="(item, i) in drawerItems"
          :key="i"
          :value="item"
          router :to="item.route"
          color="#2a73c5">

          <template v-slot:prepend>
            <v-icon :icon="item.icon"></v-icon>
          </template>

          <v-list-item-title v-text="item.text"></v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

  </div>
</template>

<script>
import PopUp from './PopUp.vue';

export default {
  components: {
    PopUp
  },
  data: () => ({
    drawer: false,
    snackbar: false,
    drawerItems: [
      { icon: 'mdi-view-dashboard', text: 'Dashboard', route: {name: 'dashboard'} },
      { icon: 'mdi-folder', text: 'My Projects', route: {name: 'projects'} },
      { icon: 'mdi-account', text: 'Team', route: {name: 'team'} }
    ],
  })
}
</script>
