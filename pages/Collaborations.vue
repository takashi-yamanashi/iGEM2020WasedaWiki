<template>
  <!-- <v-layout> -->
    <v-container fluid ma-0 pa-0 fill-height> 

        <v-container fluid ma-0 pa-0>
            <v-row fluid ma-5 pa-5 mb-2  justify="center">
                <!-- v-if="($vuetify.breakpoint.md||$vuetify.breakpoint.xs||$vuetify.breakpoint.sm)" -->
                <v-col class="left_box" align="left"  v-if="($vuetify.breakpoint.lg||$vuetify.breakpoint.xl)">
                    <v-col class="sidebar" ma-0 pa-0>
                        <v-row class="navi-image">
                                 <svg id="mySVG">
                                    <circle fill="none" cx="80" cy="80" r="67" stroke="#1f7a82" stroke-width="5" id="triangle" transform='rotate(270 80 80)'/>
                                    <circle fill="#363636" cx="80" cy="80" r="58" stroke="#363636" stroke-width="5"/>
                                    Sorry, your browser does not support inline SVG. 
                                </svg>
                        <img class="image_max" src="https://2020.igem.org/wiki/images/6/6a/T--Waseda--iGEMprojectIcon.svg">
                        </v-row>

            
                    <v-row class="navi-text">
                        <v-row :class="{ 'input_text': true, 'box_text': check[0] }">> area 1 </v-row>
                        <v-row :class="{ 'input_text': true, 'box_text': check[1] }">> area 2 </v-row>
                        <v-row :class="{ 'input_text': true, 'box_text': check[2] }">> area 3 </v-row>
                        <v-row :class="{ 'input_text': true, 'box_text': check[3] }">> area 4 </v-row>
                        <v-row :class="{ 'input_text': true, 'box_text': check[4] }">> area 5 </v-row>
                        

                    </v-row>
                    </v-col>
                </v-col>

                <v-col class="main_text" cols="12" lg="10" xl="10">
                    <v-row justify="center" text-align="left">
                        
                        <v-col>
                            <h1 class='text_h1' pushElementOffsetTop>{{sectionOffsetTop}}{{scrollY}}</h1>
                        </v-col>
                    </v-row>
                    
                    <v-row v-scroll="pushScrollY" id="section_01" :class="{ 'input_box': true, 'box_active': check[0] }">> area 1 </v-row>
                    <v-row v-scroll="pushScrollY" id="section_02" :class="{ 'input_box': true, 'box_active': check[1] }">> area 2 </v-row>
                    <v-row v-scroll="pushScrollY" id="section_03" :class="{ 'input_box': true, 'box_active': check[2] }">> area 3 </v-row>
                    <v-row v-scroll="pushScrollY" id="section_04" :class="{ 'input_box': true, 'box_active': check[3] }">> area 4 </v-row>
                    <v-row v-scroll="pushScrollY" id="section_05" :class="{ 'input_box': true, 'box_active': check[4] }">> area 5 </v-row>
                    <v-template v-scroll="pushScrollY" id="section_06"></v-template>
                    <v-row class="input_box">> area 7 </v-row>

                    <v-row>
                        <transition name="fade">
                        <v-btn 
                            v-scroll="onScroll"
                            v-show="fab"
                            fab
                            dark
                            fixed
                            bottom
                            right
                            color="primary"
                            @click="toTop">
                            <v-icon>fas fa-angle-up</v-icon>
                        </v-btn>
                        </transition>
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
  data: () => {
    return {
      fab: false,
      scrollY: 0,
      sectionOffsetTop: [],
      check: [false, false, false, false, false, false],

    };
  },
  
  methods: {
    pushScrollY(e) {
      this.scrollY = window.scrollY;
      for (var i = 0; i < this.check.length; i++) {
        this.check[i] = false
      };
      for (var j=0; j < this.check.length; j++) {
        if(this.scrollY >= this.sectionOffsetTop[j] && this.scrollY < this.sectionOffsetTop[j+1]) {
          this.check[j] = true
        }
      };
    },
    pushElementOffsetTop() {
      const targets = [
        'section_01', 'section_02', 'section_03', 'section_04', 'section_05', 'section_06'
      ];
      targets.forEach(target => {
        const element = document.getElementById(target);
        const offsetTop = Math.round(window.scrollY + element.getBoundingClientRect().top);
        this.sectionOffsetTop.push(offsetTop);
      });
    },

    //for btn
    onScroll (e){
      if (typeof window === 'undefined') return
      const top = window.pageYOffset ||   e.target.scrollTop || 0
      this.fab = top > 500
    },
    toTop () {
      this.$vuetify.goTo(0)
    }
  },
  mounted() {
    this.pushElementOffsetTop();
  },
}
</script>

<style lang="scss" scoped>
.left_box {
    padding :0;
}
.sidebar {
    height: 100vh;
    position: fixed;
    width: 17%;
    background-image: url("https://2020.igem.org/wiki/images/e/e9/T--Waseda--Tasukinisakura1.png");
    background-size: 100% auto;
    background-repeat: repeat;
}
.main_text {
    padding: 80px 10%;
    background: rgba(255, 255, 255) 0% 0% no-repeat padding-box;
}
.text {
    &_h1 {
        font-size: 60px;
        border-bottom: 5px solid black;
    }
}
// Scroll back
.fade-enter-active, .fade-leave-active {
  transition: 0.5s;
} 
.fade-enter, .fade-leave-to {
  opacity: 0;
  transform: scale(0);
}
// .position_fix {
//     // top: 100px;
//     position: -webkit-sticky;
//     position: sticky;
// }
.image_max {
    width: 100%;
}

.navi {

    &-image {
        display: block;
        padding-top: 100px;
    }
    &-text {
        display: block;
        background-color: black;
    }
}

.input_box {
    padding: 50vh;
    background-color: blue;
}
.box_active {
    padding: 50vh;
    background-color: red;
}
.input_text {
    display: block;
    margin: 0 auto;
    width:60%;
    padding-top: 50px;
    background-color: blue;
}
.box_text {
    display: block;
    margin: 0 auto;
    width:60%;
    padding-top: 50px;
    background-color: red;
}
</style>