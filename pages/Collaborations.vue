<template>
  <!-- <v-layout> -->
    <v-container fluid ma-0 pa-0 fill-height> 

        <v-container fluid ma-0 pa-0>
            <v-row fluid ma-5 pa-5 mb-2  justify="center">
                <!-- v-if="($vuetify.breakpoint.md||$vuetify.breakpoint.xs||$vuetify.breakpoint.sm)" -->
                <v-col class="left_box" align="left"  v-if="($vuetify.breakpoint.lg||$vuetify.breakpoint.xl)">
                    <v-col class="sidebar" ma-0 pa-0>
                        <v-row class="navi_image">
                               <svg class="navi_icon" z-index='99'>
                                 <circle fill="#363636" cx="100" cy="100" r="80" stroke="#ffffff" stroke-width="18"/>
                                <circle fill="none" cx="100" cy="100" r="80" stroke="#008080" stroke-width="18" id="triangle" :style="{ 'stroke-dashoffset': scrollPer}" transform='rotate(270 100 100)'/>  
                                <!-- style="stroke-dasharray: 420.293; stroke-dashoffset: 210.293;" -->
                                
                      
                                Sorry, your browser does not support inline SVG. 
                              </svg>
                              <img z-indx="10" class="navi_svg" src="https://2020.igem.org/wiki/images/6/6a/T--Waseda--iGEMprojectIcon.svg">
            
                        </v-row>

            
                    <v-row class="navi_text">
                        <v-row :class="{ 'title_text': true, 'title_text_active': check[0] }"> Top1 1 </v-row>
                        <v-row :class="{ 'title_text': true, 'title_text_active': check[1] }"> - Title1 2 </v-row>
                        <v-row :class="{ 'title_text': true, 'title_text_active': check[2] }"> - Title2 3 </v-row>
                        <v-row :class="{ 'title_text': true, 'title_text_active': check[3] }"> Top2 4 </v-row>
                        <v-row :class="{ 'title_text': true, 'title_text_active': check[4] }"> - Title1 5 </v-row>
                        

                    </v-row>
                    </v-col>
                </v-col>

                <v-col class="main_text" cols="12" lg="10" xl="10">
                    <v-row justify="center" text-align="left">
                        
                        <v-col>
                            <h1 class='text_h1' pushElementOffsetTop>Collabratetions</h1>
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
      scrollPer: 510.293,
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
      const windowHigh = document.documentElement.scrollHeight;
      this.scrollPer = 510.293*(1 - (this.scrollY/(windowHigh-910)));
      // 910 is footer size
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
// .image_max {
//     width: 100%;
// }

.navi {
  &_icon {
    width: 200px;
    height: 200px;
  }

  &_image {
        display: block;
        position: relative;
        padding-top: 100px;
        width: 200px;
        margin: 0 auto;
  }
  &_text {
        display: block;
        width: 200px;
        margin: -40px auto 0 auto;
        padding: 60px 0 40px 0;
        border-radius: 20px;
        background-color: white;
  }
  &_svg {
      position:absolute; top:120px; left:20px; 
      width: 160px;
      height: 160px;
  }
}
#triangle {
  width:160px;
  height: 160px;
  stroke-dasharray: 510.293; 
  // stroke-dashoffset: 420.293 - scrollY;
}

.input_box {
    padding: 50vh;
    background-color: blue;
}
.box_active {
    padding: 50vh;
    background-color: red;
}
.title_text {
    display: block;
    margin: 10px auto;
    width:60%;
    border-radius: 10px;
    background-color: None;
    &_active{
      background-color: #507EA4;
      color: white;
      opacity: 0.5;
    }
}

</style>