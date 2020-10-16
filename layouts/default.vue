<template>
  <v-app>
    <v-navigation-drawer app　v-model="drawer" temporary　clipped>
      <v-list>
        <v-list-item
              v-for="(item, i) in items"
              :key="i"
              :to="item.to"
              router
              exact
        >
        <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>

    </v-navigation-drawer>

<!-- this is navigation  bar -->
    <v-app-bar app  inverted-scroll　clipped-left>
      <v-app-bar-nav-icon @click="drawer=!drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Nagigation</v-toolbar-title>
    </v-app-bar>
    <!-- 
  
    <v-app-bar
      :clipped-left="clipped"
      fixed
      app
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-btn
        icon
        @click.stop="miniVariant = !miniVariant"
      >
        <v-icon>mdi-{{ `chevron-${miniVariant ? 'right' : 'left'}` }}</v-icon>
      </v-btn>
      <v-btn
        icon
        @click.stop="clipped = !clipped"
      >
        <v-icon>mdi-application</v-icon>
      </v-btn>
      <v-btn
        icon
        @click.stop="fixed = !fixed"
      >
        <v-icon>mdi-minus</v-icon>
      </v-btn>
      <v-toolbar-title v-text="title" />
      <v-spacer />
      <v-btn
        icon
        @click.stop="rightDrawer = !rightDrawer"
      >
        <v-icon>mdi-menu</v-icon>
      </v-btn>
     </v-app-bar> -->
    <v-main>
      <v-container fluid ma-0 pa-0 fill-height>
        <nuxt />
      </v-container>
    </v-main>
    <!-- <v-navigation-drawer
      v-model="rightDrawer"
      :right="right"
      temporary
      fixed
    >
      <v-list>
        <v-list-item @click.native="right = !right">
          <v-list-item-action>
            <v-icon light>
              mdi-repeat
            </v-icon>
          </v-list-item-action>
          <v-list-item-title>Switch drawer (click me)</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer> -->

    <v-footer
      :absolute="!fixed"
      app
    >
      <!-- <span>&copy; {{ new Date().getFullYear() }}</span> -->

      <v-container>
        <v-row align="center" justify="center">
          <v-col align="center" justify="center">
            <img src="https://2020.igem.org/wiki/images/0/01/T--Waseda--iGEMwasedalogo.svg">
          </v-col>
        </v-row>
      </v-container>
      

    </v-footer>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Home',
          to: '/'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Inspire',
          to: '/inspire'
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js'
    }
  }
}
</script>
<style>
#sideMenu, #top_title, .patrollink, #firstHeading, #home_logo, #sideMenu { display:none; } #content { padding:0px; width:100%; margin-top:-7px; margin-left:0px; border:none;}
</style>