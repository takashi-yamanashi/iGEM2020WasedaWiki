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
                                <circle fill="none" cx="100" cy="100" r="80" stroke="#F4CCCB" stroke-width="18" id="triangle" :style="{ 'stroke-dashoffset': scrollPer}" transform='rotate(270 100 100)'/>  
                                <!-- style="stroke-dasharray: 420.293; stroke-dashoffset: 210.293;" -->
                                
                                Sorry, your browser does not support inline SVG. 
                              </svg>
                              <img z-indx="10" class="navi_svg" src="https://2020.igem.org/wiki/images/2/2f/T--Waseda--iGEM2020wikiicons-award.svg">
            
                        </v-row>

            
                    <v-row class="navi_text">
                        <!-- <a href="Protocol#S12"><v-row :class="{ 'title_text': true, 'title_text_active': check[0] }">Cell extract(S12)</v-row></a> -->
                        <!-- <a href="Attributions#ModelingTop"><v-row :class="{ 'title_text': true, 'title_text_active': check[1] }">Modeling </v-row></a>
                        <a href="Attributions#VideoTop"><v-row :class="{ 'title_text': true, 'title_text_active': check[2] }">Video</v-row></a>
                        <a href="Attributions#WikiTop"><v-row :class="{ 'title_text': true, 'title_text_active': check[3] }">Wiki</v-row></a>
                        <a href="Attributions#HPTop"><v-row :class="{ 'title_text': true, 'title_text_active': check[4] }">HP</v-row></a>
                        <a href="Attributions#OtherTop"><v-row :class="{ 'title_text': true, 'title_text_active': check[5] }">Other</v-row></a>
                         -->

                    </v-row>
                    </v-col>
                </v-col>



                <v-col class="main_text" cols="12" lg="10" xl="10">
                  
                    <v-row justify="center" text-align="left">
                        <v-row cols="12" class='h1_box'>
                          <v-col class='h1_box_text'> 
                            <h1 class='h1_text' pushElementOffsetTop>Contribution</h1>
                          </v-col>
                        </v-row>
                    </v-row>
                    
                    <v-row v-scroll="pushScrollY" id="section_01"> 
                      <v-row class="row_max-box">
                        <h2 class="h2_text"></h2>
                      </v-row>
                    </v-row>

                    <v-row cols="12" sm="12" xs="12" md="12" lg="7" xl="7" class="row_max-box">

                        <v-col cols="12" class="row_max-box">
                            <h3></h3>
                            <p><b>
                                Add new documentation to an existing Part on that Part's Registry page:
                            </b></p>
                            <p class="p_indent"> 
                                <a class="link_style"  href="http://parts.igem.org/Part:BBa_K1529321">BBa_K1529321</a> (PrhlRR-GFP) and 
                                by improving plux/tet-GFP <a class="link_style"  href="http://parts.igem.org/Part:BBa_K1529311">BBa_K1529311</a> (PluxLR-GFP) has been analyzed in vivo activity. Here, we added new data obtained by cell-free protein synthesis.
                            </p>
                            <p class="p_indent"> 
                                For the crosstalk experiments, we constructed two kinds of cell-free translation systems containing substantial amount of R proteins (luxR,rhlR). In those systems, we put signaling molecules (3OHSL-C4 or 3OHSL-C6) and target genes (plux/tet-GFP or prhl-RR-GFP), respectively. We measured the fluorescence of GFP expressed from plux/tet-GFP and prhl(RR)-GFP on a RT-qPCR machine.
                            </p>
                            <p class="p_indent"> 
                                Fig 1 shows the result of the crosstalk test in a cell-free system containing sufficient amount of LuxR protein.   In the results, non-cognate Prhl(RR) promoter was highly activated by luxR-3OC6HSL complex as well as the cognate Plux/tet promoter.
                                Fig 2 shows the result of the crosstalk test in a cell-free system containing sufficient amount of RhlR protein.

                            </p>

                            <p class="p_indent"> <br></p>


                            <figure class="fig_full_width" >
                            <img class="image_max" src="https://2020.igem.org/wiki/images/9/98/T--Waseda--crosstalk_luxR.png"
                            alt="Fig1 Prhl(RR)-GFP assay in a cell-free system containing LuxR">
                            <figcaption class="fig_title">Fig1 Prhl(RR)-GFP assay in a cell-free system containing LuxR</figcaption>
                            </figure>
                            <p class="p_indent"> <br></p>

                            <figure class="fig_full_width" >
                            <img class="image_max" src="https://2020.igem.org/wiki/images/e/ec/T--Waseda--crosstalk_rhlR.png"
                            alt="Fig2 Prhl(RR)-GFP assay in a cell-free system containing rhlR">
                            <figcaption class="fig_title">Fig2 Prhl(RR)-GFP assay in a cell-free system containing rhlR</figcaption>
                            </figure>
                            <p class="p_indent"> <br></p>



                            <p><b> 
                                We have also described monotelpensynthesis by using either 
                                <a class="link_style"  href="http://parts.igem.org/Part:BBa_K3580101">BBa_K3580101</a> (improved part) or 
                                <a class="link_style"  href="http://parts.igem.org/Part:BBa_K3580102">BBa_K3580102</a> (new part). 
                            </b></p>

                            <p class="p_indent"> <br></p>


                            <figure class="fig_full_width" >
                            <img class="image_max" src="https://2020.igem.org/wiki/images/f/f7/T--Waseda--monoterpene_2-2-2_GCMS_analysis_results_of_limonene_synthesis_system.png"
                            alt="Fig. 2-2-2 GC / MS analysis results of limonene synthesis system">
                            <figcaption class="fig_title">Fig. 2-2-2 GC / MS analysis results of limonene synthesis system</figcaption>
                            </figure>

                            <p class="p_indent"> <br></p>
                            <p class="p_indent"> 
                                We confirmed limonene synthesis GC/MS analysis with SIM.  In this SIM analysis, ions with four m/z values characteristic in limonene (68 and 93) and sabinene (77 and 91, 93) were analyzed.   By using authentic limonene standard, we confirmed a retention time for GC and the characteristic limonene SIM signal at the specific m/z values.  At the same retention time with the standard, limonene-specific m/z value (68, 93) ions were detected in the selected ions (The upper right figure of Figure. 2-2-2).  We also draw a GC chart by summation of the signals from the selected ions (The lower left figure of Figure. 2-2-2).  By comparison with a negative control experiment which we omitted the extract containing GPP synthase and limonene synthase, we found clear peak from our limonene synthesis.
                            
                            </p>
                

                        </v-col>


                    </v-row>


         



                    <!-- <v-template  v-scroll="pushScrollY" id="section_01"><v-col class="last_message"></v-col></v-template> -->
                    <v-template  v-scroll="pushScrollY" id="section_02"><v-col class="last_message"></v-col></v-template>
                    <v-template  v-scroll="pushScrollY" id="section_03"><v-col class="last_message"></v-col></v-template>
                    <!-- <v-template  v-scroll="pushScrollY" id="section_04"><v-col class="last_message"></v-col></v-template> -->

 
                </v-col>
            </v-row>
        </v-container>

    </v-container>
    
  <!-- </v-layout> -->
</template>
<script>

const pageTitle = 'Contribution';
const pageDes = "iGEM2020 Team Waseda's" + pageTitle + "page";
const pageUrl = 'https://2020.igem.org/Team:Waseda/Contribution';


export default {
  
  head: {

    title: pageTitle,
    meta: [
      //Change each page
      { hid: 'description', name: 'description', content: pageDes},
      { hid: 'og:title', property: 'og:title', content: pageDes },
      { hid: 'og:description', property: 'og:description', content: pageDes },
      { hid: 'og:url', property: 'og:url', content: pageUrl },
    ],
  },


  data: () => {
    return {


      fab: false,
      scrollY: 0,
      scrollPer: 510.293,
      sectionOffsetTop: [],
      check: [false, false, false,],

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
      const windowHigh = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      this.scrollPer = 510.293*(1 - (this.scrollY/(windowHigh)));

    },

    pushElementOffsetTop() {
      const targets = [
        'section_01','section_02','section_03',
      ];
      targets.forEach(target => {
        const element = document.getElementById(target);
        const offsetTop = Math.round(window.scrollY + element.getBoundingClientRect().top);
        this.sectionOffsetTop.push(offsetTop);
      });
    },


  },
  mounted() {
    this.pushElementOffsetTop();
  },
}
</script>

<style lang="scss" scoped>
p{
  font-size: 24px;
}
.left_box {
    padding :0;
}
.sidebar {
    height: 100vh;
    position: fixed;
    width: 17%;
    background-image: url("https://2020.igem.org/wiki/images/4/4e/T--Waseda--MakiRed.png");
    background-size: 100% auto;
    background-repeat: repeat;
}
.main_text {
    padding: 40px 10%;
    background: rgba(255, 255, 255) 0% 0% no-repeat padding-box;
}
.h1 {
  &_box {
    border-bottom: 5px solid black;
    padding-bottom: 0;
    margin-bottom: 10px;
    &_text{
      padding-bottom: 0;
    }
  }
  &_text {
    font-size: 60px;
  }
  &_imbox {
    display: block;
    position: relative;
  }
  &_image{
    position: absolute;
    top: -30px;
    left: -30px;
    height: 150px;   
  }
}
h2 {
  font-size: 30px;
  border-bottom: 5px solid black;
  margin: 20px 0;
}


.image_max {
  width:100%;
}

.image_top {
  height: 0;
  padding-top: 66%;
  background-size: contain;
  background-image: url("https://2020.igem.org/wiki/images/6/63/T--Waseda--AttributionsTop.png")
}

.navi {
  &_icon {
    width: 200px;
    height: 200px;
  }

  &_image {
        display: block;
        position: relative;
        padding-top: 20px;
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
      position:absolute; top:35px; left:15px; 
      width: 170px;
      height: 170px;
  }
}
#triangle {
  width:160px;
  height: 160px;
  stroke-dasharray: 510.293; 
  // stroke-dashoffset: 420.293 - scrollY;
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
.row_max-box {
  width: 100%;
  padding: 0;
  margin: 0;
}

.last_message {
  margin-bottom: 400px;
}

</style>

