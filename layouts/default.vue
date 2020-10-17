<template>
  <v-app>
    <v-navigation-drawer app　 v-model="drawer" temporary　clipped> <!-- pt-5 = paddding-top 20px -->
      <v-list left>
        <v-list-item :to="'/'" router exact>
                <v-list-item-action>
                  <v-icon>mdi-apps</v-icon>
                </v-list-item-action>
                <v-list-item-content>
                  <v-list-item-title v-text="'Home'" />
                </v-list-item-content>
              </v-list-item>
              <v-list-group 
                v-for="(nav_list, i) in items" 
                :key="i" 
                :prepend-icon="nav_list.icon" 
                no-action 
                :append-icon="nav_list.lists ? undefined : ''"
                > 
            <template v-slot:activator>
              <v-list-item-content>
                <v-list-item-title>{{ nav_list.title }}</v-list-item-title>
              </v-list-item-content>
            </template>
            <v-list-item v-for="(list, j) in nav_list.lists" :key="j" :to="list.to" router>
              <v-list-item-content>
                <v-list-item-title>{{ list.title }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-group>
      </v-list>

    </v-navigation-drawer>

<!-- this is navigation  bar -->
    <v-app-bar app  inverted-scroll　clipped-left>
      <v-app-bar-nav-icon @click="drawer=!drawer" v-if="($vuetify.breakpoint.md||$vuetify.breakpoint.xs||$vuetify.breakpoint.sm)"></v-app-bar-nav-icon>
      <v-toolbar-title>Navigation</v-toolbar-title>
      <v-spacer></v-spacer>
      <template v-if="($vuetify.breakpoint.lg||$vuetify.breakpoint.xl)">
      <v-toolbar-items v-for="(item, i) in items" :key="i">
          <v-menu offset-y>
            <template v-slot:activator="{on}">
            <v-btn v-on="on" text>{{ item.title }}<v-icon>{{ item.icon }}</v-icon></v-btn>
            
            </template>
            <v-list>
            
              <v-list-item
                  v-for="(list, j) in item.lists"
                  :key="j"
                  :to="list.to"
                  router
                  exact
              >
                
                <v-list-item-content>
                  <v-list-item-title v-text="list.title" />
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-menu>
      </v-toolbar-items>
      </template>
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
      items:[
        {
          title: 'Project',
          icon: 'mdi-speedometer',
          lists:[
            { title: 'Quick Start', to: 'inspire'},
            { title: 'Quick Start', to: 'inspire'},
            { title: 'Quick Start', to: 'inspire'},
          ]
        },
        {
          title: 'Model',
          icon: 'mdi-cogs' ,
          lists:[
            { title: 'Quick Start', to: 'inspire'},
            { title: 'Quick Start', to: 'inspire'},
            { title: 'Quick Start', to: 'inspire'},
          ]
        },
        {
          title: 'Parts',
          icon: 'mdi-palette',
          lists:[
            { title: 'Quick Start', to: 'inspire'},
            { title: 'Quick Start', to: 'inspire'},
            { title: 'Quick Start', to: 'inspire'},
          ]
        },
        {
          title: 'HP',
          icon: 'mdi-view-dashboard',
          lists:[
            { title: 'Quick Start', to: 'inspire'},
            { title: 'Quick Start', to: 'inspire'},
            { title: 'Quick Start', to: 'inspire'},
          ]
        },
        {
          title: 'Team',
          icon: 'mdi-function',
          lists:[
            { title: 'Quick Start', to: 'inspire'},
            { title: 'Quick Start', to: 'inspire'},
            { title: 'Collaborations', to: 'Collaborations'},
          ]
        },
        {
          title: 'Award',
          icon: 'mdi-vuetify',
          lists:[
            { title: 'Quick Start', to: 'inspire'},
            { title: 'Quick Start', to: 'inspire'},
            { title: 'Quick Start', to: 'inspire'},
          ]
        },
        {
          title: 'Notebook',
          icon: 'mdi-vuetify',
          lists:[
            { title: 'Quick Start', to: 'inspire'},
            { title: 'Quick Start', to: 'inspire'},
            { title: 'Quick Start', to: 'inspire'},
          ]
        },
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js',

    }
  }
}
</script>
<style>
/* for iGEM */
#sideMenu, #top_title, .patrollink, #firstHeading, #home_logo, #sideMenu { display:none; } #content { padding:0px; width:100%; margin-top:-7px; margin-left:0px; border:none;}

.v-toolbar__content, .v-toolbar__extension {
    padding: 24px 16px 4px 16px;
}
</style>