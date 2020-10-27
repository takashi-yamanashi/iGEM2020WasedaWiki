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
                        <!-- <a href="Attributions#WetLabTop"><v-row :class="{ 'title_text': true, 'title_text_active': check[0] }">Wet Lab</v-row></a>
                        <a href="Attributions#ModelingTop"><v-row :class="{ 'title_text': true, 'title_text_active': check[1] }">Modeling </v-row></a>
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
                            <h1 class='h1_text' pushElementOffsetTop>Racemase ~War in the mirror~</h1>
                          </v-col>
                        </v-row>
                    </v-row>
                    
                    <v-row v-scroll="pushScrollY" id="OverviewTop"> 
                      <v-row class="row_max-box">
                        <h2 class="h2_text">Introduction</h2>
                      </v-row>
                      </v-row>

                      <v-row cols="12" sm="12" xs="12" md="12" lg="7" xl="7" class="row_max-box">

                        <v-col>
                          
                          <p class="p_indent">  
                              In the zombie vs. Samurai storyline, we envisioned a scenario in which one side deprives their opponent of the food they need.  A battle between two enantiomers, that is to say, one side has D amino acid and the other has L amino acid derived food as their food source, and both sides converts their opponent’s amino acid and deprives the of their food                          
                          </P>
                          <p class="p_indent">                              
                          </p>
                        </v-col>
                      </v-row>

                      <v-row cols="12" sm="12" xs="12" md="12" lg="7" xl="7" class="row_max-box">
                        <figure class="fig_full_width" >
                          <img class="image_max" src="https://2020.igem.org/wiki/images/c/c7/T--Waseda--racemase_war_1st.png" alt="Fig. 3-2-1 Images of War In The Mirror in the Zombie vs Samurai storyline">
                        <figcaption class="fig_title">Fig. 3-2-1 Images of War In The Mirror in the Zombie vs Samurai storyline</figcaption>
                        </figure>
                      </v-row>
                

                        
                    <v-row cols="12" sm="12" xs="12" md="12" lg="7" xl="7" class="row_max-box">

                        <v-col>
                          
                          <p class="p_indent">   
                              Although there is not yet a translation and transcription system that efficiently encorporates D amino acids, it is known that the natural enyme chemically synthesized with D amino acids would be active.A protein made up of only d-amino acids act on substrates with opposite chirality, as demonstrated using the HIV protease.[Milton et.al 1992]                         
                          </P>
                          <p class="p_indent">  
                              Besides, practical usage of D-amino acids is advancing in the field of Biotechnology today.  Peptides composed of D-amino acids are not susceptible to degradation by protease in L-body organisms, thus are highly stable. [Tugyi et.al 2005][ Garton et.al 2018] Consequently, researchers are seeking a way to make the target of D-amino acid Peptide Aptamers(A type of antibody) L-body organisms’ protein. [Oberthür et.al 2015][ Majier et.al 2016][ Schumacher et.al 1996][ Funke et.al 2009]Currently, target proteins are synthesized with D-bodies, and L-body peptide aptamers that bonds to the protein are artificially evolutionized. When protein is expressed with the obtained amino acid sequence with D-amino acids, the binding site would consist of L-bodies. [Oberthür et.al 2015][ Majier et.al 2016][ Schumacher et.al 1996][ Funke et.al 2009]                            
                          </p>
                          <p class="p_indent">  
                              Such storyline can be applied to our real experimental system by adopting racemase, an enzyme which catalyzes interconversion of D amino acid and L amino acid.  Racemase catalyzes interconversion between L-amino acid and D-amino acid. There are many kinds of racemases and each corresponds to respective amino acid. This year, we focused especially on alanine racemase. Alanine racemase (AR) is a fold type III racemase enzyme catalyze the conversion of L-alanine to D-alanine. [Walish 1989]This enzyme provides D-alanine consuming L-alanine and using pyridoxal 5- phosphate (PLP) as a cofactor. AR is unique to prokaryotes and plays an important role in a biosynthesis. [Walish 1989] [Azam et.al 2016] Since D-alanine is used as a necessary component of the peptidoglycan layer of bacterial cell walls, lack of alanine racemase can result in the inhibition of growth of prokaryotes. [Azam et.al 2016] As it is generally absent in higher eukaryotes such as human but is ubiquitous throughout bacteria. Therefore, alanine racemase is recognized as an attractive target for antibacterial drug development. [Azam et.al 2016]
                            </p>
                        </v-col>
                      </v-row>



                      <v-row cols="12" sm="12" xs="12" md="12" lg="7" xl="7" class="row_max-box">

                        <v-col>
                          <h3>Experiment</h3>
                          <p class="p_indent">
                              In this experiment, alanine racemase (AR) gene carried on our new part (BBa_K3580200) on a T5 promoter-controlled pCA24N vector was transformed into the BL21(DE3) star strain. After expression induction by IPTG, the BL21 cells were collected by centrifugation, then sonicated and His-Tag purification was performed(Fig.)(Fig.). The meanings of each abbreviation are given in Table 1.                            
                          </P>
                          <p class="p_indent">                              
                          </p>
                        </v-col>
                      </v-row>


                      <v-row cols="12" sm="12" xs="12" md="12" lg="7" xl="7" class="row_max-box">

                        <v-col>
                          <h3></h3>
                          <p class="p_indent">                            
                          </P>
                          <p class="p_indent">                              
                          </p>
                        </v-col>
                      </v-row>

                      <v-row cols="12" sm="12" xs="12" md="12" lg="7" xl="7" class="row_max-box">
                        <figure class="fig_full_width" >
                          <img class="image_max" src="https://2020.igem.org/wiki/images/b/b8/T--Waseda--racemase_expression.png" alt="Fig.3-2-2 Purification of alanine racemase expressed in <i>E. Coli</i>">
                        <figcaption class="fig_title">Fig.3-2-2 Purification of alanine racemase expressed in <i>E. Coli</i></figcaption>
                        </figure>
                      </v-row>




                      <v-row cols="12" sm="12" xs="12" md="12" lg="7" xl="7" class="row_max-box">
                        <figure class="fig_full_width" >
                          <img class="image_max" src="https://2020.igem.org/wiki/images/8/8a/T--Waseda--racemase_purification_sds.png" alt="Fig. 3-2-3 SDS-PAGEs of purified <i>E. coli</i> BL21(DE3)star containing BBa_K3580200">
                        <figcaption class="Fig. 3-2-3 SDS-PAGEs of purified <i>E. coli</i> BL21(DE3)star containing BBa_K3580200"></figcaption>
                        </figure>
                      </v-row>

                      <v-row cols="12" sm="12" xs="12" md="12" lg="7" xl="7" class="row_max-box">
                        <figure class="fig_full_width" >
                          <img class="image_max" src="https://2020.igem.org/wiki/images/9/90/T--Waseda--racemase_table1_sds.png" alt="Table.3-2-1 Each meaning of abbriviation">
                        <figcaption class="fig_title">Table.3-2-1 Each meaning of abbriviation</figcaption>
                        </figure>
                      </v-row>





                    <v-row cols="12" sm="12" xs="12" md="12" lg="7" xl="7" class="row_max-box">

                        <v-col>

                          <p class="p_indent">        
                              To assess the activity of purified racemase, fluorescence values of GFPS1 synthesized by a combination of GFPS1 plasmid, L-alanine, D-alanine, and purified AR were measured in the Pure System, a reconstituted CFPS that contains no enzymes other than the translation system(Fig. 3-2-4)[Shimizu et.al 2001].
                          </p>
                        </v-col>
                      </v-row>

                      <v-row cols="12" sm="12" xs="12" md="12" lg="7" xl="7" class="row_max-box">
                        <figure class="fig_full_width" >
                          <img class="image_max" src="https://2020.igem.org/wiki/images/a/a1/T--Waseda--racemase_puresystem.png" alt="Fig. 3-2-4 Cell-free protein synthesis in the PURE system">
                        <figcaption class="fig_title">Fig. 3-2-4 Cell-free protein synthesis in the PURE system</figcaption>
                        </figure>
                      </v-row>
                    <v-row cols="12" sm="12" xs="12" md="12" lg="7" xl="7" class="row_max-box">

                        <v-col>
                          
                          <p class="p_indent"> 
                              The natural translation system is difficult to take up D-amino acids. [Kuncha 2019]19 amino acids other than alanine are L-bodies, so if only alanine is D-body, even if the sequence is correct, it has no activity as an enzyme(Fig. 3-2-5).                              
                          </p>
                        </v-col>
                      </v-row>

                      <v-row cols="12" sm="12" xs="12" md="12" lg="7" xl="7" class="row_max-box">
                        <figure class="fig_full_width" >
                          <img class="image_max" src="https://2020.igem.org/wiki/images/2/2a/T--Waseda--racemase_pure_alanine.png" alt="Fig. 3-2-5 Cell-free protein synthesis under each alanine conditions">
                        <figcaption class="fig_title">Fig. 3-2-5 Cell-free protein synthesis under each alanine conditions</figcaption>
                        </figure>
                      </v-row>


                      <v-row cols="12" sm="12" xs="12" md="12" lg="7" xl="7" class="row_max-box">

                        <v-col>
                          
                          <p class="p_indent">    
                              Since GFP is composed of L-amino acids, when GFPS1 takes up L-alanine, the system would give off fluorescent effect, and when D-alanine and AR are added, the racemized L-alanine can be used for translation and the fluorescence value was expected to be restored(Fig. 3-2-6). The evaluation of the effect of amino acids on the synthesis of a reporter protein is the most appropriate methodology for this scenario as a "food source".                          
                          </p>
                        </v-col>
                      </v-row>

                      <v-row cols="12" sm="12" xs="12" md="12" lg="7" xl="7" class="row_max-box">
                        <figure class="fig_full_width" >
                          <img class="image_max" src="https://2020.igem.org/wiki/images/e/e5/T--Waseda--racemase_pure_racemase.png" alt="Fig. 3-2-6 Cell-free protein synthesis using racemization of alanine by racemase">
                        <figcaption class="fig_title">Fig. 3-2-6 Cell-free protein synthesis using racemization of alanine by racemase</figcaption>
                        </figure>
                      </v-row>


                      <v-row cols="12" sm="12" xs="12" md="12" lg="7" xl="7" class="row_max-box">

                        <v-col>
                          
                          <p class="p_indent"> 
                              We decided to assay AR by using PURE frex donated by GeneFrontier, Inc. As PURE frex does not contain any extra metabolic enzymes other than those involved in transcription and translation, we would be able to perform the assays without having to control the metabolic system, which have plagued the assays with extract based CFPS. First, we identified problems with commercial D-alanine that may be contaminated with L-alanine (Fig. 3-2-7). 
                                The fluorescence values of the expressed GFP were measured by real-time PCR and the measured fluorescence values were quantitatively calibrated by FITC.
                           
                          </P>
                          <p class="p_indent">                              
                          </p>
                        </v-col>
                      </v-row>

                      <v-row cols="12" sm="12" xs="12" md="12" lg="7" xl="7" class="row_max-box">
                        <figure class="fig_full_width" >
                          <img class="image_max" src="https://2020.igem.org/wiki/images/0/0f/T--Waseda--racemase_201020_bar.png" alt="Fig. 3-2-7 Effect of L-alanine substrate repletion for translation by racemase">
                        <figcaption class="fig_title">Fig. 3-2-7 Effect of L-alanine substrate repletion for translation by racemase</figcaption>
                        </figure>
                      </v-row>


                      <v-row cols="12" sm="12" xs="12" md="12" lg="7" xl="7" class="row_max-box">

                        <v-col>
                          
                          <p class="p_indent">      
                              Fig. 3-2-7 shows a comparison of the fluorescence values at a plateau. Although slightly synthesized GFP was identified by contaminating L-alanine with commercially available D-alanine, was found to be acceptable as a negative control, so the assay with AR was confirmed by the combination of each alanine and racemase (Fig. 3-2-8) (Fig. 3-2-9).
                      
                          </P>
                          
                        </v-col>
                      </v-row>

                      <v-row cols="12" sm="12" xs="12" md="12" lg="7" xl="7" class="row_max-box">
                        <figure class="fig_full_width" >
                          <img class="image_max" src="https://2020.igem.org/wiki/images/5/59/T--Waseda--racemase_201023_time.png" alt="Fig. 3-2-8 Temporal variation of GFP fluorescence value in each condition">
                        <figcaption class="fig_title">Fig. 3-2-8 Temporal variation of GFP fluorescence value in each condition</figcaption>
                        </figure>
                      </v-row>


                      <v-row cols="12" sm="12" xs="12" md="12" lg="7" xl="7" class="row_max-box">
                        <figure class="fig_full_width" >
                          <img class="image_max" src="https://2020.igem.org/wiki/images/3/36/T--Waseda--racemase_201023_bar.png" alt="Fig. 3-2-9 Effect of L-alanine substrate repletion for translation by ">
                        <figcaption class="fig_title">Fig. 3-2-9 Effect of L-alanine substrate repletion for translation by racemase</figcaption>
                        </figure>
                      </v-row>



                      <v-row cols="12" sm="12" xs="12" md="12" lg="7" xl="7" class="row_max-box">

                        <v-col>
                          
                          <p> 
                              Fig. 3-2-8 shows the temporal variation of GFP fluorescence value.                           
                          </P>
                          <p>
                              Fig. 3-2-9 shows a comparison of the fluorescence values of each sample at 120 min, when GFP expression seems to have plateaued.                              
                          </p>
                        </v-col>
                      </v-row>
                      <v-row cols="12" sm="12" xs="12" md="12" lg="7" xl="7" class="row_max-box">

                        <v-col>
                                                      
                          <p class="p_indent"> 
                              The results demonstrated that GFP could not be synthesized by D-alanine alone, but L-alanine produced by racemase-mediated racemization of D-alanine and L-alanine could be used for translation, creating a situation in which fluorescence was restored by the synthesized GFP.  In other words, we succeeded in creating a situation in which the opponent’s food was converted into food for themselves in the Zombie vs. Samurai scenario.  Additionally, when the amount of D alanine reacting with alanine racemase was reduced, the fluorescence value of the synthesized GFP was lower but significantly higher than that of the negative control, confirming the deprivation even in a situation where food was originally low (Fig. 3-2-9 ).                             
                          </p>
                        </v-col>
                      </v-row>


                      <v-row cols="12" sm="12" xs="12" md="12" lg="7" xl="7" class="row_max-box">
                        <figure class="fig_full_width" >
                          <img class="image_max" src="https://2020.igem.org/wiki/images/7/70/T--Waseda--racemase_201022_bar.png" alt="Fig. 3-2-10 Assay results with low levels of D-alanine substrate reacting with racemase">
                        <figcaption class="fig_title">Fig. 3-2-10 Assay results with low levels of D-alanine substrate reacting with racemase</figcaption>
                        </figure>
                      </v-row>


                      <v-row cols="12" sm="12" xs="12" md="12" lg="7" xl="7" class="row_max-box">

                        <v-col>
                          
                          <p class="p_indent">   
                              This result indicates that the system is highly sensitive to the substrate, as the corresponding expression of the reporter was lowered in a low substrate situation.                         
                          </P>
                          <p class="p_indent">                              
                          </p>
                        </v-col>
                      </v-row>

                      <v-row cols="12" sm="12" xs="12" md="12" lg="7" xl="7" class="row_max-box">
                        <figure class="fig_full_width" >
                          <img class="image_max" src="" alt="Logo">
                        <figcaption class="fig_title"></figcaption>
                        </figure>
                      </v-row>
                      <v-row cols="12" sm="12" xs="12" md="12" lg="7" xl="7" class="row_max-box">

                        <v-col>
                          <h3></h3>
                          <p class="p_indent">                            
                          </P>
                          <p class="p_indent">                              
                          </p>
                        </v-col>
                      </v-row>

                      <v-row cols="12" sm="12" xs="12" md="12" lg="7" xl="7" class="row_max-box">
                        <figure class="fig_full_width" >
                          <img class="image_max" src="" alt="Logo">
                        <figcaption class="fig_title"></figcaption>
                        </figure>
                      </v-row>



                      <v-row cols="12" sm="12" xs="12" md="12" lg="7" xl="7" class="row_max-box">

                        <v-col>
                          <h3></h3>
                          <p class="p_indent">                            
                          </P>
                          <p class="p_indent">                              
                          </p>
                        </v-col>
                      </v-row>

                      <v-row cols="12" sm="12" xs="12" md="12" lg="7" xl="7" class="row_max-box">
                        <figure class="fig_full_width" >
                          <img class="image_max" src="" alt="Logo">
                        <figcaption class="fig_title"></figcaption>
                        </figure>
                      </v-row>





                    <v-template  v-scroll="pushScrollY" id="section_01"><v-col class="last_message"></v-col></v-template>
                    <v-template  v-scroll="pushScrollY" id="section_02"><v-col class="last_message"></v-col></v-template>
                    <v-template  v-scroll="pushScrollY" id="section_03"><v-col class="last_message"></v-col></v-template>
                    <v-template  v-scroll="pushScrollY" id="section_04"><v-col class="last_message"></v-col></v-template>

 
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
      check: [false, false, false, false,],

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
        'section_01','section_02','section_03','section_04',
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

