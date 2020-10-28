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
                        <a href="Engineering#topsection_01"><v-row :class="{ 'title_text': true, 'title_text_active': check[0] }">Overview</v-row></a>
                        <a href="Engineering#topsection_02"><v-row :class="{ 'title_text': true, 'title_text_active': check[1] }">New Partsw </v-row></a>
                        <a href="Engineering#topsection_03"><v-row :class="{ 'title_text': true, 'title_text_active': check[2] }">DBTL cycle</v-row></a>
                        <a href="Engineering#topsection_04"><v-row :class="{ 'title_text': true, 'title_text_active': check[3] }">Modulality</v-row></a>
                        <a href="Engineering#topsection_05"><v-row :class="{ 'title_text': true, 'title_text_active': check[4] }">measurements</v-row></a>
                        <a href="Engineering#topsection_06"><v-row :class="{ 'title_text': true, 'title_text_active': check[5] }">in vivo & in vitro</v-row></a>
                        

                    </v-row>
                    </v-col>
                </v-col>



                <v-col class="main_text" cols="12" lg="10" xl="10">
                  
                    <v-row justify="center" text-align="left"  id="topsection_01">
                        <v-row cols="12" class='h1_box'>
                          <v-col class='h1_box_text'> 
                            <h1 class='h1_text' pushElementOffsetTop>Engineering success and engineering principles</h1>
                          </v-col>
                        </v-row>
                    </v-row>
                    
                    <v-row v-scroll="pushScrollY" id="section_01"> 
                      <v-row class="row_max-box">
                        <h2 class="h2_text">Overview</h2>
                      </v-row>
                    </v-row>

                      <v-row cols="12" sm="12" xs="12" md="12" lg="7" xl="7" class="row_max-box" id="topsection_02">

                        <v-col>
                          <h3></h3>
                          <p class="p_indent"> 
                            In addition to new parts, we have shown many engineering successes, which will be also evaluated in Rubric for judging (Project Section #5 and #8).<br/>
                            Q5 How well were engineering principles used (e.g., design-build-test cycle, use of standards, modularity, etc.)? <br/>
                            Q8 Did the team design a project based on synthetic biology and standard components (BioBricks, software, etc.)?
                           
                          </P>
                        </v-col>
                      </v-row>


                      <v-row v-scroll="pushScrollY" id="section_02"> 
                      <v-row class="row_max-box" id="topsection_03">
                        <h2 class="h2_text">New Parts</h2>
                      </v-row>
                    </v-row>

                    <v-row cols="12" sm="12" xs="12" md="12" lg="7" xl="7" class="row_max-box">

                        <v-col>
                          <p>    

                            <a class="link_style"  href="http://parts.igem.org/Part:K3580200">BBa_K3580200</a><sapn> </sapn>     &      <span></span>  <a class="link_style"  href="http://parts.igem.org/Part:K3580102">BBa_K3580200</a> !
                          </P>

                        </v-col>
                      </v-row>





                    <v-row id="section_03" > 
                      <v-row class="row_max-box" id="topsection_04">
                        <h2 class="h2_text">Design-build-test cycle</h2>
                      </v-row>
                    </v-row>

                      <v-row cols="12" sm="12" xs="12" md="12" lg="7" xl="7" class="row_max-box">

                        <v-col>
                          <h3></h3>
                          <p class="p_indent">      
                             We have adopted the DBTL(Design-Build-Test-Learn) cycle for a better project.  The model was reassembled several times while observing the difference between this ideal graph and the simulation results under the actual parameters.
                              We especially paid attention to the degradation of protein and the ratio of crosstalk reaction. For the cell-free system, our modeling described above indeed have shown that cell-free toggle switch will not work if the system has low degradation rate. 
                              Therefore we tested the effect of degradation tag, and incorporated the results into the model. Although wet experiments demonstrated the existence of crosstalk, modeling showed that crosstalk would not be a problem in improving the circuit parameters. We eventually succeeded in creating two states simply by changing the concentration of small molecules.  Moreover, we launched and worked on some advanced projects based on this circuit.                       
                          </P>
                        </v-col>
                      </v-row>

                    <v-row id="section_04"> 
                      <v-row class="row_max-box">
                        <h2 class="h2_text">Modulality</h2>
                      </v-row>
                    </v-row>





                      <v-row cols="12" sm="12" xs="12" md="12" lg="7" xl="7" class="row_max-box" id="topsection_05">

                        <v-col>

                          <p class="p_indent"> 
                            In monoterpene synthesis, we mixed two E. coli extracts in various ratio, taking advantage of modularity.
                             Those extracts contained either first 8 or last 2 enzymes of a pathway from Ac-CoA, which is a major intermediate of cell central metabolism.
                               Through mevalonate pathway, the former extract one (derived from E. coli into which pBbA5c-MevT-MBI has been introduced) can provide IPP and DMAPP, which can also be used as intermediates for other important biosynthesis.
                                 Here, we indeed supplemented only glucose and acetate as carbon sources.  We obtained expression system for those eight genes from addgene and have converted this into Biobrick RFC 1000 format by synonymous replacement (BBa_K3580103).
                                   In order to take advantage of an engineering principle of synthetic biology, we provided two biobrick parts (BBa_K3580101, BBa_K3580102) for the source for the latter extract.  BBa_K3580101 has GPP synthase (GPPS) and limonene synthase.                              
                          </p>
                        </v-col>
                      </v-row>



                      <v-row id="section_05"> 
                      <v-row class="row_max-box" id="topsection_06" >
                        <h2 class="h2_text">Standardized measurements</h2>
                      </v-row>
                    </v-row>

                      <v-row cols="12" sm="12" xs="12" md="12" lg="7" xl="7" class="row_max-box">

                        <v-col>
                          <p class="p_indent">  
                            Measurements of fluorescence activity can be assessed within a lab using a common machine. However, it is not possible to directly compare the measurements in different laboratories.
                             Therefore, we performed a standardized measurement of the fluorescence values in cell-free by calibrating with FITC for each experiment trial, so the measured values can be compared in other labs by following the previous iGEM interlab protocol.
                              Fluorescein (FITC) is a fluorophore used in iGEM Measurement, and is ideal for the normalization of fluorescence values.                            
                          </p>
                        </v-col>
                      </v-row>



                      <v-row id="section_06"> 
                      <v-row class="row_max-box">
                        <h2 class="h2_text">Comparison between in vivo and in vitro activity</h2>
                      </v-row>
                    </v-row>

                      <v-row cols="12" sm="12" xs="12" md="12" lg="7" xl="7" class="row_max-box">

                        <v-col>
                          
                          <p class="p_indent">   
                            In the degradation tag assay, we took measurements both in vivo and in vitro with the same condition to compare the results.
                              Such comparison is important when we use cell-free systems as a breadboard for engineering of cellular systems.                           
                          </p>
                        </v-col>
                      </v-row>




                      <!-- <v-row cols="12" sm="12" xs="12" md="12" lg="7" xl="7" class="row_max-box">
                        <figure class="fig_full_width" >
                          <img class="image_max" src="" alt="Logo">
                        <figcaption class="fig_title"></figcaption>
                        </figure>
                      </v-row> -->


                


<!-- 
                    <v-template  v-scroll="pushScrollY" id="section_01"><v-col class="last_message"></v-col></v-template>
                    <v-template  v-scroll="pushScrollY" id="section_02"><v-col class="last_message"></v-col></v-template>
                    <v-template  v-scroll="pushScrollY" id="section_03"><v-col class="last_message"></v-col></v-template> -->
                    <v-template  v-scroll="pushScrollY" id="section_07"><v-col class="last_message"></v-col></v-template>

 
                </v-col>
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
      check: [false, false, false, false,false, false, false,],

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
        'section_01','section_02','section_03','section_04','section_05','section_06','section_07',
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
    font-size: 45px;
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
      position:absolute; top:40px; left:20px; 
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
  margin-bottom: 700px;
}

a:link {
  color: black;
  text-decoration: none;
}

/* visited link */
a:visited {
  color: black;
}

/* mouse over link */
a:hover {
  color: hotpink;
}

/* selected link */
a:active {
  color: black;
}



.link_style {
  color: rgb(80,126,164);
}

.link_style:active {
  color: rgb(80,126,164);
}

.link_style:visited {
  color: rgb(80,126,164);
  text-decoration: underline;
}
 
.link_style:link {
  color: rgb(80,126,164);
  text-decoration: underline;
}

</style>

