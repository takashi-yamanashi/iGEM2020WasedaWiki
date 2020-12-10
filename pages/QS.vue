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
                                <circle fill="none" cx="100" cy="100" r="80" stroke="#ACC1D3" stroke-width="18" id="triangle" :style="{ 'stroke-dashoffset': scrollPer}" transform='rotate(270 100 100)'/>  
                                <!-- style="stroke-dasharray: 420.293; stroke-dashoffset: 210.293;" -->
                                
                                Sorry, your browser does not support inline SVG. 
                              </svg>
                              <img z-indx="10" class="navi_svg" src="https://2020.igem.org/wiki/images/7/72/T--Waseda--iGEM2020wikiicons-04.svg">
            
                        </v-row>

            
                    <v-row class="navi_text">
                        <a href="QS#section_01"><v-row :class="{ 'title_text': true, 'title_text_active': check[0] }">ssrA-LVA Tag</v-row></a>
                        <a href="QS#section_02"><v-row :class="{ 'title_text': true, 'title_text_active': check[1] }">Crosstalk</v-row></a>
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
                        <v-row cols="12" class='h1_box' id="section_01">
                          <v-col class='h1_box_text'> 
                            <h1 class='h1_text' pushElementOffsetTop>Gene Circuit Experiment</h1>
                          </v-col>
                        </v-row>
                    </v-row>
                    
                    <v-row v-scroll="pushScrollY" > 
                      <v-row class="row_max-box">
                        <h2 class="h2_text">ssrA-LVA Tag Experiment</h2>
                      </v-row>
                    </v-row>

                    <v-row cols="12" sm="12" xs="12" md="12" lg="7" xl="7" class="row_max-box">

                        <v-col cols="12" class="row_max-box">
                            <p class="p_indent"> 
                                Although cell-free system is selected as a platform of our project for implementation of the zombie vs. samurai scenario using a toggle switch circuit, cell-growth rate is known to be important for<i> in vivo </i>toggle switch, whose behavior can be predicted by a mathematical modeling including a dilution-dependent decrease of concentration of repressors. For cell-free system, our modeling described above indeed have shown that cell-free toggles switch will not work if the system has low degradation rate. 
                            </p>
                            <p class="p_indent"> 
                                 In order to increase the rate for specific proteins in our cell-free system, therefore, we decided to add ssrA-LVA tag, a kind of ssrA-tag, to the repressor proteins. SsrA tag is a 9~11 length of amino acid sequence which attaches to the end of a protein [Gottesman et.al 1998] [Shi et.al 2018] [Shin et.al 2010]. SsrA tag attached proteins are well degraded by certain combination of proteins: clpX, clpP and sspB (Fig.3-1-1) [Shi et.al 2018]. 
                            </p>
                        


                            <figure class="fig_full_width" >
                            <img class="image_max" src="https://2020.igem.org/wiki/images/c/ca/T--Waseda--degradation_concept.png"
                            alt="FIG. 3-1-1 THE CONCEPT OF LVA DEGRADATION TAG">
                            <figcaption class="fig_title">FIG. 3-1-1 THE CONCEPT OF LVA DEGRADATION TAG</figcaption>
                            </figure>


                            <p class="p_indent"></p>
                            <p class="p_indent"> 
                                To see the improvement in degradation effect by ssrA tagging, we construct an improved part (BBa_K3580003) by modification of an existing part: Plux/tet-GFP (BBa_K934025) (Fig.3-1-2). In the behavior of the gene circuit, it is important to reduce the concentration of proteins by degradation and dilution as well as production. Although cells can decrease their concentration by dilution according to growth, cell-free systems can’t because it doesn’t grow. Therefore, an improvement is necessary to incorporate degradation into the cell-free system.
                            </p>

                            <p class="p_indent"> 

                            </p>

                            <figure class="fig_full_width" >
                            <img class="image_max" src="https://2020.igem.org/wiki/images/b/b4/T--Waseda--degradation_improve_parts.png"
                            alt="Fig.3-1-2 LVA degradation tag improve part (BBa_K3580003)">
                            <figcaption class="fig_title">Fig.3-1-2 LVA degradation tag improve part (BBa_K3580003)</figcaption>
                            </figure>

                            <p class="p_indent"> 

                            </p>


                            <p class="p_indent"> 
                                In order to compare these parts (BBa_K358003 and BBa_K934025), we first measured the fluorescence of GFP expressed<i> in vivo</i>. 
                            </p>

                            <p class="p_indent"> 
                                Each part was transformed into an <i>E. coli</i> JM2.300 strain with luxR plasmid introduced into that. After overnight incubation, diluted and OD600-matched to fresh Culture and 3OC6HSL induction was added to the corresponding cultures of both parts at the appropriate OD600. After that, the OD600 of the culture was measured every 1h and the GFP fluorescence values<i> in vivo </i>were measured by diluting aliquot for measurement from the culture to a constant turbidity (OD600=0.4) at each measurement (fig 3-1-3). The measured GFP fluorescence values of the final time point (240 min) from the start of induction at each condition are shown in Fig 3-1-4.
                            </p>

                            <figure class="fig_full_width" >
                            <img class="image_max" src="https://2020.igem.org/wiki/images/8/8f/T--Waseda--degradation-continuous.png"
                            alt="Fig.3-1-3 Continuous measurement<i>in vivo</i>">
                            <figcaption class="fig_title">Fig.3-1-3 Continuous measurement<i>in vivo</i></figcaption>
                            </figure>

                            <p class="p_indent"> 

                            </p>


                            <figure class="fig_full_width" >
                            <img class="image_max" src="https://2020.igem.org/wiki/images/c/cf/T--Waseda--degradation_bar_vivo.png"
                            alt="Fig.3-1-4 SsrA degradation tag assay<i> in vivo</i>">
                            <figcaption class="fig_title">Fig.3-1-4 SsrA degradation tag assay<i> in vivo</i></figcaption>
                            </figure>

                            <p class="p_indent"></p>

                            <p class="p_indent"> 
                                The fluorescence of tagged GFP (BBa_K3580003) was lower than that of normal GFP(BBa_K934025) at 240 min point (Fig.3-1-4).  Although GFP is a stable protein with a β-barrel and much difficult to be degraded, this result shows that tagged GFP was successfully degraded<i> in vivo </i>as we desired.  
                            </p>


                            <p class="p_indent"> 
                                Then, we compared the fluorescence of GFP in a cell-free system which was extracted from the E.coli containing luxR protein (Fig.3-1-5). Because of the programmed degradation, the fluorescence of tagged GFP(BBa_K3580001) showed slight signal nearly equal to a negative control where neither the template GFP DNA nor the inducer AHL exists. Those results show that ssrA tagged protein can be degraded much both<i> in vivo </i>and <i>in vitro</i>. Based on this data, we modified the degradation terms in the model, as described below. 
                            </p>

                            <figure class="fig_full_width" >
                            <img class="image_max" src="https://2020.igem.org/wiki/images/b/bf/T--Waseda--degradation_bar_vitro.png"
                            alt="Fig.3-1-5 ssrA degradation tag assay<i> in vitro</i>">
                            <figcaption class="fig_title">Fig.3-1-5 ssrA degradation tag assay<i> in vitro</i></figcaption>
                            </figure>


                        </v-col>
                        <v-col cols="12" class="row_max-box">
                          <h3>Reference</h3>
                            <p>
                                [Gottesman et.al 1998] Gottesman S, Roche E, Zhou Y, Sauer RT. The ClpXP and ClpAP proteases degrade proteins with carboxy-terminal peptide tails added by the SsrA-tagging system. Genes Dev. 1998; 12(9):1338-1347. doi: 10.1101/gad.12.9.1338<br>
                                [Shi et.al 2018] Shi X, Wu T, M Cole C, K Devaraj N, Joseph S. Optimization of ClpXP activity and protein synthesis in an E. coli extract-based cell-free expression system. Sci Rep. 2018;8(1):3488. Published 2018 Feb 22. doi: 10.1038/s41598-018-21739-6<br>
                                [Shin et.al 2010] Shin, J., & Noireaux, V. (2010). Study of messenger RNA inactivation and protein degradation in an escherichia coli cell-free expression system. Journal of Biological Engineering, 4(1), 9. doi: 10.1186/1754-1611-4-9<br>
                            </p>

                        </v-col>

                    </v-row>

                    <v-row cols="12" sm="12" xs="12" md="12" lg="7" xl="7" class="row_max-box">
                        <v-col cols="12" class="row_max-box">
                          <h3>Material and methods</h3>
                          <h3><i>In vivo</i> measurement</h3>
                          <p><b><i>In vivo</i> O/N -> Fresh Culture -> Induction</b></p>
                            <p class="p_indent"> 
                                In order to compare these parts (BBa_K358003 and BBa_K934025), we first measured the fluorescence of GFP expressed <i>in vivo</i>. 
                                Each part was transformed into an E. coli JM2.300 strain with luxR plasmid introduced into that. We prepared overnight culuture of each cell (plux/tet-GFP, plux/tet-GFP-LVA, plasmid nega) in LB 3ml scale with each antibiotics (plux/tet-GFP and plux/tet-GFP-LVA: Cm 25 µg/ml+Kan 30 µg/ml, plasmid nega: Kan 30 µg/ml) at 37℃ for 12h.
                                After overnight incubation, diluted and OD600-matched to fresh Culture. We took 30 µl(from plux/tet-GFP, plux/tet-GFP-LVA, plasmid nega) of the overnight culture of inducer cell into fresh 3ml LB with each antibiotics and cultured until the observed OD600 reaches around 0.50.
                            </p>
                            <p class="p_indent"> 
                                3OC6HSL induction was added to the corresponding cultures of both parts at the appropriate OD600.
                            </p>

                          <p><b>Measurement</b></p>
                            <p class="p_indent"> 
                                After induction, the OD600 of the culture was measured every 1h and the GFP fluorescence values<i> in vivo</i> were measured by diluting aliquot for measurement from the culture to a constant turbidity (OD600=0.4) at each measurement.
                            </p>      
                            <p class="p_indent"> 
                                We diluted all aliquot for measurement with LB to OD600=0.4. All samples were diluted to 100 µl. The total volume of 100 μl was dispensed into 96-well plates (Iwaki) and green fluorescence values were measured (excitation wavelength: 473 nm, emission wavelength: 535 nm) using FLA5100 (Fujifilm).
                            </p>           

                            <p class="p_indent"> 
                                We performed the above experiment in the same way from three different colonies transformed on LB agar medium, with N=3 for the number of samples.
                            </p>

                            <h3><i>In vitro</i> measurement</h3>
                            <p><b>3.1.1 Preparation of the cell extract for Cell-free system containing reporter protein.</b></p>
                            <p class="p_indent"> 
                                We prepared cell extracts containing the luxR reporter protein according to the following protocol.
                            </p>
                            <p> 
                                1. We have transformed the pcon-luxR plasmid into E. coli BL21 (DE3) star strain <br>
                                2. We used the colonies and cultured them in 2×YT medium for 12 hours at 37°C, 180 rpm. <br>
                                3. Thereafter, the same method is used to prepare the cell extracts. <br>

                            </p>
                            <p><b>3.1.2 LVA degradation tag assay using extract-based CFPS</b></p>
                            <p class="p_indent"> 
                                Under each condition, the reaction composition solution was prepared as shown in Table 3.1.1. Cell-free reactions were performed on a 20µl scale. The fluorescence of cell-free expressed reporter GFP was measured on a real-time PCR (Step One Plus Real-Time PCR System, Applied Biosystems, Mx3005P, Stratagene California) for 12 hours at 37°C and the measured fluorescence values were quantitatively calibrated by FITC.
                            </p>


                            <figure class="fig_full_width" >
                            <figcaption class="fig_title">Table.3.1.1 Compositon used in the cell-free LVA degradation tag assay</figcaption>
                            <img class="image_max" src="https://2020.igem.org/wiki/images/4/41/T--Waseda--crosstalk_table1_cellfreesolution.png"
                            alt="Table.3.1.1 Compositon used in the cell-free LVA degradation tag assay">
                            </figure>

                            <p class="p_indent"> 
                                MixA is a mixture of small molecules mainly required for translation and its composition is shown in Table 3.1.2 below.
                            </p>

                            <figure class="fig_full_width" >
                                <figcaption class="fig_title">Table.3.1.2 Composition of mixA</figcaption>
                                <img class="image_max" src="https://2020.igem.org/wiki/images/6/67/T--Waseda--crosstalk_table2_mixA.png"
                                alt="Table.3.1.2 Composition of mixA">
                            </figure>

                            <p class="p_indent" id="section_02"> <br></p>
                            
                        </v-col>
                    </v-row>
                    
                    <v-row> 
                      <v-row class="row_max-box">
                        <h2 class="h2_text">Crosstalk Experiment</h2>
                      </v-row>
                    </v-row>


                    <v-row cols="12" sm="12" xs="12" md="12" lg="7" xl="7" class="row_max-box">
                        <v-col cols="12" class="row_max-box"> 
                            <h3>1. Introduction</h3>
                            <p class="p_indent"> 
                                When we construct and model the “Zombie vs Samurai” system, a potential problem was crosstalk, by which a promoter in a quorum sensing (QS) systems is activated unexpectedly by another type of QS components. Consequently, we conducted some experiments to reveal which combination of QS systems have less crosstalk ability in a cell-free system. 
                            </p>
                            <p class="p_indent"> 
                            </p>

                            <h3>2. Summary of the Experiment</h3>
                            <p class="p_indent"> 
                                Among quorum sensing systems, we put focus on Rhl system because of absence for in vitro crosstalk regarding Rhl system. Our candidate for the counterpart for Rhl system is Lux system because Rhl system in <i>Pseudomonas Aeruginosa</i> is known to be acticvated by Las system. Although combination between Las and Lux is also attractive candidate, Andrew.D et., al have shown crosstalk between them. (2018, Andrew.D). Therefore, we investigated whether there is a crosstalk between the lux and Rhl QS systems <i>in vitro</i> As RhlR-responsible promoters, we used a promoter set which showed improvement in S/N ratio in vivo (Tokyo tech iGEM 2014).
                            </p>

                            <figure class="fig_full_width" >
                                <img class="image_max" src="https://2020.igem.org/wiki/images/1/16/T--Waseda--parts_rhl_promoter_main_Fig1.png"
                                alt="(from Part:BBa_K1529320 made by Tokyo_Tech2014)">
                                <figcaption class="fig_title">(from Part:BBa_K1529320 made by Tokyo_Tech2014)</figcaption>
                            </figure>

                            <h3>3. Results</h3>

                            <p class="p_indent"> 
                                As described in our project page (https://2020.igem.org/Team:Waseda/Project), we confirmed little crosstalk between RhlR activator and Plux promoter and between LuxR activator and PRhl(RR) promoter.
                            </p>

                            <figure class="fig_full_width" >
                                <img class="image_max" src="https://2020.igem.org/wiki/images/5/58/T--Waseda--crosstalk_results_rhlR.png "
                                alt="crosstalk_results_rhlR ">
                                <img class="image_max" src="https://2020.igem.org/wiki/images/9/9e/T--Waseda--crosstalk_results_luxR.png"
                                alt="crosstalk_results_luxR">
                                <figcaption class="fig_title">Fig 3-1-7 Result of crosstalk assay of the RhlR in cell-free system</figcaption>
                            </figure>

                            <p class="p_indent"></p>

                            <figure class="fig_mid_width" >
                                <img class="image_max" src="https://2020.igem.org/wiki/images/3/3e/T--Waseda--crosstalk_prhlLR.png"
                                alt="Fig 3-1-6 Result of Prhl (LR)-GFP and Prhl (RR)-GFP crosstalk assay">
                                <figcaption class="fig_title">Fig 3-1-6 Result of Prhl (LR)-GFP and Prhl (RR)-GFP crosstalk assay</figcaption>
                            </figure>

                            <p class="p_indent"> 
                                We then examined PRhl(LR) promoter and identified it as a LuxR-responsible promoter from the following experiments. When we use PRhl(LR) promoter, LuxR with C6 (green) showed larger signal than RhrR with either C4AHL or C6AHL (pink and gray).
                            </p>
                            <p class="p_indent"> 
                                This difference is not derived from mistake in preparation of RhlR-containing cell extract because the same RhlR can activate Prhl(RR) promoter; we can see stronger signal with C4AHL than that with C6 AHL (red and blue). Thus, the lower signal of RhlR + C4AHL + PRhlLR (pink) is due to the weak interaction between PRhlLR DNA and C4-RhlR, not due to the inactivation of RhlR or any other factor in S12. Taken together, the expression from PRhlLR induced LuxR-C6AHL (green) is from real activation, and is not from a leak expression that caused from very weak interaction between the promoter and RNA polymerase in the absence of LuxR protein.
                            </p>
                            <p class="p_indent"> 
                                However, PRhl(LR) is not only strongly activated by C6AHL with LuxR (green), but also weakly by C4AHL with RhlR. We can see the weak activation by comparison of the effects between C4AHL and C6AHL to RhlR (pink and gray). For this reason, we have stopped employing PRhl(LR) as a promoter for LuxR.
                            </p>


                            <h3>4.Material and Method</h3>
                            <h3>4.1 Preparation of the cell extract for Cell-free system containing reporter protein.</h3>

                            <p class="p_indent"> 
                                We prepared cell extracts containing the LuxR reporter protein according to the protocol stated in the LVA degradation tag experiment.
                            </p>

                            <h3>4.2 Crosstalk Assay using extract-based CFPS</h3>
                            <p class="p_indent"> 
                                Under each condition, the reaction composition solution was prepared as shown in Table 3.1.3. Cell-free reactions were performed on a 20 µl scale. The fluorescence of cell-free expressed reporter GFP was measured on a real-time PCR(Step One Plus Real-Time PCR System, Applied Biosystems, Mx3005P, Stratagene California) for 12 hours at 37°C and the measured fluorescence values were quantitatively calibrated by FITC.
                            </p>

                            <figure class="fig_full_width" >
                                <img class="image_max" src="https://2020.igem.org/wiki/images/4/41/T--Waseda--crosstalk_table1_cellfreesolution.png"
                                alt="Table3.1.3. Composition used in the cell-free crosstalk assay">
                                <figcaption class="fig_title">Table3.1.3. Composition used in the cell-free crosstalk assay</figcaption>
                            </figure>


                            <p class="p_indent"> 
                                MixA is a mixture of small molecules mainly required for translation and its composition is shown in Table 3.1.4.
                            </p>

                            <figure class="fig_full_width" >
                                <img class="image_max" src="https://2020.igem.org/wiki/images/6/67/T--Waseda--crosstalk_table2_mixA.png"
                                alt="Table3.1.4 Composition of mixA">
                                <figcaption class="fig_title">Table3.1.4 Composition of mixA</figcaption>
                            </figure>

                        </v-col>
                    </v-row>





                    <!-- <v-template  v-scroll="pushScrollY" id="section_01"><v-col class="last_message"></v-col></v-template> -->
                    <!-- <v-template  v-scroll="pushScrollY" id="sectio/n_02"><v-col class="last_message"></v-col></v-template> -->
                    <v-template  v-scroll="pushScrollY" id="section_03"><v-col class="last_message"></v-col></v-template>
                    

 
                </v-col>
            </v-row>
        </v-container>

    </v-container>
    
  <!-- </v-layout> -->
</template>
<script>

const pageTitle = 'Gene Circuit';
const pageDes = "iGEM2020 Team Waseda's" + pageTitle + "page";
const pageUrl = 'https://2020.igem.org/Team:Waseda/QS';


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

