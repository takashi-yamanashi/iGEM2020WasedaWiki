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
                        <!-- <a href="Attributions#WetLabTop"><v-row :class="{ 'title_text': true, 'title_text_active': check[0] }">Wet Lab</v-row></a> -->
                        <!-- <a href="Attributions#ModelingTop"><v-row :class="{ 'title_text': true, 'title_text_active': check[1] }">Modeling </v-row></a> -->
                        <!-- <a href="Attributions#VideoTop"><v-row :class="{ 'title_text': true, 'title_text_active': check[2] }">Video</v-row></a> -->
                        <!-- <a href="Attributions#WikiTop"><v-row :class="{ 'title_text': true, 'title_text_active': check[3] }">Wiki</v-row></a> -->
                        <!-- <a href="Attributions#HPTop"><v-row :class="{ 'title_text': true, 'title_text_active': check[4] }">HP</v-row></a> -->
                        <!-- <a href="Attributions#OtherTop"><v-row :class="{ 'title_text': true, 'title_text_active': check[5] }">Other</v-row></a> -->
                        

                    </v-row>
                    </v-col>
                </v-col>

                <v-col class="main_text" cols="12" lg="10" xl="10">

                    <v-row v-scroll="pushScrollY" id="Monoterpene"> 
                      <v-row class="row_max-box">
                        <h2 class="h2_text">Cell-free monoterpene synthesis</h2>
                      </v-row>
                      <v-row cols="12" sm="12" xs="12" md="12" lg="6" xl="6" class="row_max-box">
                        <v-col >
                          <h3>Background</h3>
                            <P class="p_indent">
                              How can we observers distinguish between zombies and samurai?
                                In our project we propose one unique identification method, though there is also a method using fluorescent protein.
                                  We propose a method of distinguishing the scents of zombies or samurai.  For this project, we selected monoterpenes,
                                   especially limonene and sabinene, as the scented substances produced by zombies and samurai.
                            </p>
                          
                        </v-col>
                      </v-row>
                      <v-row cols="12" sm="12" xs="12" md="12" lg="6" xl="6" class="row_max-box">
                        <v-col >
                          <h3>Experiment</h3>
                        </v-col>
                      </v-row>
                      <v-row cols="12" sm="12" xs="12" md="12" lg="6" xl="6" class="row_max-box">
                        <figure class="fig_full_width" >
                          <img class="image_max" 
                          src="https://2020.igem.org/wiki/images/b/b3/T--Waseda--monoterpene_2-2-1_Parts_and_metabolic_pathways_in_this_experiment_and_a_schematic_diagram_of_the_experiment.png" alt="Parts_and_metabolic_pathways_in_this_experiment_and_a_schematic_diagram_of_the_experiment">
                          <figcaption class="fig_title">Fig. 2-2-1 Parts and metabolic pathways in this experiment and a schematic diagram of the experimen</figcaption>
                        </figure>
                      </v-row>

                      <v-row cols="12" sm="12" xs="12" md="12" lg="6" xl="6" class="row_max-box">
                        <v-col >
                          <p class="p_indent">
                            In this cell-free monoterpene synthesis, we mixed two <i>E. coli</i> extracts each of which has either first 8 or last 2 enzymes of a pathway from Ac-CoA, which is a major intermediate of cell central metabolism.
                                Through mevalonate pathway, the former extract one (derived from E. coli into which pBbA5c-MevT-MBI has been introduced) can provide IPP and DMAPP, which can also be used as intermediates for other important biosynthesis.
                                  Here we indeed supplemented only glucose and acetate as carbon sources.  We obtained expression system for those eight genes from addgene and have converted this into Biobrick RFC 1000 format by synonymous replacement (<a class="link_style"  href="http://parts.igem.org/Part:BBa_K3580103"> BBa_K3580103</a>).
                                    In order to take advantage of an engineering principle of synthetic biology we provided two biobrick parts (<a class="link_style"  href="http://parts.igem.org/Part:Ba_K3580101">Ba_K3580101</a>, <a class="link_style"  href="http://parts.igem.org/Part:BBa_K3580102">BBa_K3580102</a> ) for the source for the latter extract.  <a class="link_style"  href="http://parts.igem.org/Part:BBa_K3580101">BBa_K3580101</a> has GPP synthase (GPPS) and limonene synthase.
                                      Although GPP synthase is shared with <a class="link_style"  href="http://parts.igem.org/Part:BBa_K3580101">BBa_K3580101</a> , <a class="link_style"  href="http://parts.igem.org/Part: ">BBa_K3580102</a> has sabinene synthase, which has one point mutation in limonene synthase (Srividya Narayanan et al 2015) and a new coding sequence for Parts registry of iGEM (See here for more details on this experiments).
                          </P>
                        </v-col>
                      </v-row>

                      <v-row ols="12" sm="12" xs="12" md="12" lg="6" xl="6" class="row_max-box">
                        <v-col>
                          <h3>Results</h3>
                          <p class="p_indent"> 
                            Similar to a very recent study from Jwett lab (Dudly et al 2019) who mixed 7 extracts, we synthesized limonene using only two extracts.
                              Although fine-tuning can be possible when a larger number of extracts is prepared, we are sure that entry projects in iGEM should be simple but has engineering principle in order to expand iGEM sucess to an educational tool.
                                This is why we selected the division into two extracts.                           
                          </P>
                          <p class="p_indent">                              
                          </p>
                        </v-col>
                      </v-row>

                      <v-row cols="12" sm="12" xs="12" md="12" lg="6" xl="6" class="row_max-box">
                        <figure class="fig_full_width" >
                          <img class="image_max" src="https://2020.igem.org/wiki/images/f/f7/T--Waseda--monoterpene_2-2-2_GCMS_analysis_results_of_limonene_synthesis_system.png" alt="Fig. 2-2-2 GC / MS analysis results of limonene synthesis system">
                        <figcaption class="fig_title">Fig. 2-2-2 GC / MS analysis results of limonene synthesis system</figcaption>
                        </figure>
                      </v-row>
                    
                      
                      <v-row cols="12" sm="12" xs="12" md="12" lg="6" xl="6" class="row_max-box">
                        <v-col>
                          
                          <p class="p_indent"> 
                            We confirmed limonene synthesis GC/MS analysis with SIM.  In this SIM analysis, ions with four m/z values  characteristic in limonene (68 and 93) and sabinene (77 and 91, 93) were analyzed.   By using authentic limonene standard, we confirmed a retention time for GC and the characteristic limonene SIM signal at the specific m/z values.  At the same retention time with the standard, limonene-specific m/z value (68, 93) ions were detected in the selected ions (The upper right figure of Figure. 2-2-2).
                              We also darw a GC chart by summation of the signals from the selected ions (The lower left figure of Figure. 2-2-2).  By comparison with a negative control experiment which we omitted the extract containing GPP synthase and limonene synthase, we found clear peak from our limonene synthesis.                           
                          </P>
                        </v-col>
                      </v-row>

                      <v-row cols="12" sm="12" xs="12" md="12" lg="6" xl="6" class="row_max-box">
                        <figure class="fig_full_width" >
                          <img class="image_max" src="https://2020.igem.org/wiki/images/f/f2/T--Waseda--monoterpene_2-2-3_GCMS_analysis_results_of_sabinene_synthesis_system.png" alt="Fig. 2-2-3 GC/MS analysis results of sabinene synthesis system">
                        <figcaption class="fig_title">Fig. 2-2-3 GC/MS analysis results of sabinene synthesis system</figcaption>
                        </figure>
                      </v-row>


                      
                      <v-row cols="12" sm="12" xs="12" md="12" lg="6" xl="6" class="row_max-box">
                        <v-col>
                          <h3></h3>
                          <p class="p_indent"> 
                            By similar GC/MS analysis with SIM, we confirmed the world's first report of sabinene synthesis using cell extracts.  Although elaborative reconstituted system by mixing of purified enzymes has been reported (Srividya Narayanan et al 2015), (Korman Tyler P et al 2017).
                              Extract-base sytem with not only simple but engineering principle must provide much contribution to iGEM and DIY biology which as large number of players. Furthermore, extract systems do not require expensive coenzymes (Dudly et al 2019). As well as limonene detection in Fig 2-2-2,
                               we firstly confirmed sabinene retention time and SIM signal at the m/z values (77, 91, and 93).  From our cell-free production, we then detected sabinene SIM signal and chromatogram peak which cannot find from the negative control.  Also, from the system containing sabinene synthase and GPP synthase,
                                a peak with the same retention time as the standard limonene product and ions with m/z values characteristic in limonene at that retention time were detected.
                                 This was consistent with the fact that the paper that referred to the sabinene synthase used in this experiment also reported the synthesis of limonene as a by-product (Srividya Narayanan. et al 2015).                           
                          </P>
                          <p class="p_indent">  
                            The part <a class="link_style"  href="http://parts.igem.org/Part:BBa_K3580102">BBa_K3580102</a> used in our sabinene production is a new part for Parts Registry.   One amino acid mutation was introduced into limonene synthase of Mentha spicata to create sabinene synthase, by using information reported in a 2015 paper by Srividya and Narayanan et al.                            
                          </p>
                          <p class="p_indent">
                            We regard our <a class="link_style"  href="http://parts.igem.org/Part:BBa_K3580101">BBa_K3580101</a> as an improved version from pre-existing <a class="link_style"  href="http://parts.igem.org/Part:BBa_K3580201">BBa_K3580201</a>, which has only limonene synthase.   Our improved part can use the set of IPP DMAPP both of which are provided not only mevalonate pathway used here but the other famous non-mevalonate pathway.  Thus, the set is produced in so many engineered pathways,
                             including the addgene plasmid used here, as an important intermediate set for bioproduction.  From this view point, we are sure that the simple combination of two enzymes in this part satisfied easy use modularity in synthetic biology than pre-existing <a class="link_style"  href="http://parts.igem.org/Part:BBa_K3052001">BBa_K3052001</a>.                        
                          </P>
                          <p class="p_indent">                            
                          </P>
                        </v-col>
                      </v-row>

                      <v-row cols="12" sm="12" xs="12" md="12" lg="6" xl="6" class="row_max-box">
                        <figure class="fig_full_width" >
                          <img class="image_max" src="https://2020.igem.org/wiki/images/f/fa/T--Waseda--monoterpene_2-2-4_Yields_of_monoterpene_per_reaction_solution_in_this_experiment_.png" alt="Fig. 2-2-4 Yields of monoterpene per reaction solution in this experiment">
                        <figcaption class="fig_title">Fig. 2-2-4 Yields of monoterpene per reaction solution in this experiment</figcaption>
                        </figure>
                      </v-row>


                      
                      <v-row cols="12" sm="12" xs="12" md="12" lg="6" xl="6" class="row_max-box">
                        <v-col>
                          
                          <p class="p_indent">     
                            Finally, each of monoterpenes were quantified based on peaks of substance having 93 m/z and each monoterpene standard curves.  Taking advantage of the modularity of the combination of extracts, we confirmed whether the yield of monoterpenes could be changed by changing the mixing ratio of the extract containing the enzyme of the mevalonate pathway and the extract containing GPP synthase and monoterpene synthase.
                              As a result, changes in the yield of monoterpenes due to the mixing ratio of the extracts were observed (Figure. 2-2-4).  The best yield of limonene per reaction solution with limonene synthase contained system was 0.978 [µmol/L], and the best yield of sabinene per reaction solution with sabinene synthase contained system was 6.13 [µmol/L].                        
                          </P>
                          <p class="p_indent">                              
                          </p>
                        </v-col>
                      </v-row>


                      
                      <v-row cols="12" sm="12" xs="12" md="12" lg="6" xl="6" class="row_max-box">
                        <v-col>
                          <h3>Reference</h3>
                          <p>    

                              (1) Alonso-Gutierrez, J. et al.  (2013). Metabolic engineering of Escherichia coli for limonene and perillyl alcohol production. Metabolic engineering, 19, 33-41. <br/>
                              (2) Dudley, Q. M. et al. (2019). Cell-free biosynthesis of limonene using enzyme-enriched Escherichia coli lysates. Synthetic Biology, 4(1), ysz003. <br/>
                              (3) Srividya, N. et al. (2015). Functional analysis of (4S)-limonene synthase mutants reveals determinants of catalytic outcome in a model monoterpene synthase. Proceedings of the National Academy of Sciences, 112(11), 3332-3337.<br/>
                              (4) Korman, T. P. et al. (2017). A synthetic biochemistry platform for cell free production of monoterpenes from glucose. Nature communications, 8(1), 1-8.<br/>
                              (5) Mass Spectrometry Data Center, William E. Wallace, "Mass Spectra" in NIST Chemistry WebBook, NIST Standard Reference Database Number 69, Eds. P.J. Linstrom and W.G. Mallard, National Institute of Standards and Technology, Gaithersburg MD, 20899, https://doi.org/10.18434/T4D303, (retrieved October 22, 2020).<br />
                        
                          </P>
                        </v-col>
                      </v-row>


                      
                      <v-row cols="12" sm="12" xs="12" md="12" lg="6" xl="6" class="row_max-box">
                        <v-col>
                          <h3></h3>
                          <p class="p_indent">                            
                          </P>
                          <p class="p_indent">                              
                          </p>
                        </v-col>
                      </v-row>

                      <v-row cols="12" sm="12" xs="12" md="12" lg="6" xl="6" class="row_max-box">
                        <figure class="fig_full_width" >
                          <img class="image_max" src="" alt="Logo">
                        <figcaption class="fig_title"></figcaption>
                        </figure>
                      </v-row>


                    </v-row>
                    
                  
                  
                  
                  <v-template  v-scroll="pushScrollY" id="section_06"><v-col class="last_message"></v-col></v-template>
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
      check: [false, false, false, false, false, false, false, false],

    };
  },
  
  methods: {
    pushScrollY(e) {
      this.scrollY = window.scrollY;
    //   for (var i = 0; i < this.check.length; i++) {
    //     this.check[i] = false
    //   };
    //   for (var j=0; j < this.check.length; j++) {
    //     if(this.scrollY >= this.sectionOffsetTop[j] && this.scrollY < this.sectionOffsetTop[j+1]) {
    //       this.check[j] = true
    //     }
    //   };
    //   const windowHigh = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    //   this.scrollPer = 510.293*(1 - (this.scrollY/(windowHigh)));

    },

    pushElementOffsetTop() {
      const targets = [
        'WetLab', 'Modeling', 'NaviVideo', 'Wiki','HP', 'NaviOther', 'NaviLast'
      ];
      targets.forEach(target => {
        const element = document.getElementById(target);
        const offsetTop = Math.round(window.scrollY + element.getBoundingClientRect().top);
        this.sectionOffsetTop.push(offsetTop);
      });
    },


  },
//   mounted() {
//     this.pushElementOffsetTop();
//   },
}
</script>

<style lang="scss" scoped>
.p_indent {
  font-size: 24px;
  text-indent: 50px;
}
.fig_title {
  text-align:center;
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

.last_message {
  margin: 400px;
}
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
  margin-bottom: 400px;
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
</style>

