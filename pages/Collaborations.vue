<template>
  <!-- <v-layout> -->
    <v-container fluid ma-0 pa-0 fill-height> 

        <v-container fluid ma-0 pa-0>
            <v-row fluid ma-5 pa-5 mb-2  justify="center" align="end">
                <!-- v-if="($vuetify.breakpoint.md||$vuetify.breakpoint.xs||$vuetify.breakpoint.sm)" -->
                <v-col class="head-padding" align="left" cols="12" lg="2" xl="2" v-if="($vuetify.breakpoint.lg||$vuetify.breakpoint.xl)">
                    <!-- <img  class="image_def" src="https://2020.igem.org/wiki/images/7/7f/T--Waseda--huujinnZombie.svg"> -->
                    <v-card light>
                    <v-card-title class="headline">
                        Story
                    </v-card-title>
                    <v-card-text>
                        <p>
                        Text Text Text Text Text Text Text Text Text Text 
                        Text Text Text Text Text Text Text Text Text Text 
                        Text Text Text Text Text Text Text Text Text Text 
                        Text Text Text Text Text Text Text Text Text Text 
                        Text Text Text Text Text Text Text Text Text Text <br><br>
                        Text Text Text Text Text Text Text Text Text Text Text Text 
                        Text Text Text Text Text Text Text Text Text Text Text Text 
                        Text Text Text Text Text Text Text Text Text Text Text Text 
                        Text Text Text Text Text Text Text Text Text Text Text Text 
                        Text Text Text Text Text Text Text Text Text Text Text Text 
                        Text Text Text Text Text Text Text Text Text Text Text Text 
                        Text Text Text Text Text Text Text Text Text Text Text Text  <br><br>
                        Text Text Text Text Text Text Text Text 
                        Text Text Text Text Text Text Text Text 
                        Text Text Text Text Text Text Text Text 
                        Text Text Text Text Text Text Text Text 
                        
                        Text Text Text Text Text Text Text Text <br>
                        </p>
                    </v-card-text>
                
                    <v-card-actions>
                        <v-spacer />
                        <v-btn
                        color="primary"
                        nuxt
                        to="/inspire"
                        >
                        More
                        </v-btn>
                    </v-card-actions>
                    </v-card>
                </v-col>

                <v-col ma-5 align="right">
                    <v-row>
                    <!-- <img class="image_def" src="https://2020.igem.org/wiki/images/f/ff/T--Waseda--raijinSamurai.svg"> -->
                    </v-row>
                    <v-row>
                    <!-- <img class="image_max" src="https://2020.igem.org/wiki/images/a/aa/T--Waseda--zombievssamurai.svg"> -->
                    </v-row>
                </v-col>

            </v-row>
            <v-row justify="center" align="center">
            </v-row>
        </v-container>

    </v-container>
  <!-- </v-layout> -->
</template>
<script>



export default {
  components: {

  }
}
</script>

<style lang="scss" scoped>
.head-padding {
    padding-top: 50px;
}

</style>