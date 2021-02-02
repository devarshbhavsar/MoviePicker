<template>
    <v-app>
        <v-app-bar
          app
          color="primary"
          dark
          dense
        >
            <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
            <v-toolbar-title>Devarsh</v-toolbar-title>

            <v-spacer></v-spacer>

            <v-btn
                href="https://github.com/vuetifyjs/vuetify/releases/latest"
                target="_blank"
                text
            >
                <span class="mr-2">Latest Release</span>
                <v-icon>mdi-open-in-new</v-icon>
            </v-btn>
        </v-app-bar>
        <v-navigation-drawer
            v-model="drawer"
            absolute
            temporary
        >
            <v-list
                nav
                dense
            >
                <v-list-item-group
                    v-model="group"
                    active-class="deep-purple--text text--accent-4"
                >
                    <v-list-item @click="goHome()">
                        <v-list-item-icon>
                            <v-icon>mdi-home</v-icon>
                        </v-list-item-icon>
                        <v-list-item-title>Home</v-list-item-title>
                    </v-list-item>

                    <v-list-item @click="goMovie()">
                        <v-list-item-icon>
                            <v-icon>mdi-movie-open</v-icon>
                        </v-list-item-icon>
                        <v-list-item-title>MovieSearch</v-list-item-title>
                    </v-list-item>
                </v-list-item-group>
            </v-list>
        </v-navigation-drawer>
        <div style="height:48px"> </div>
        <router-view></router-view>
    </v-app>

</template>

<script>

export default {
  name: 'App',

  components: {
  },

  data: () => ({
    drawer: false
  }),

  methods: {
    goHome () {
      this.$router.push({ name: 'Home' })
    },
    goMovie () {
      this.$router.push({ name: 'MovieSearch' })
    }
  }
}
</script>
