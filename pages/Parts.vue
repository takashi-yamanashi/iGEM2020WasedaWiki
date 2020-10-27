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
                         <a href="Parts#OverviewTop"><v-row :class="{ 'title_text': true, 'title_text_active': check[0] }">Overview</v-row></a>
                        <a href="Parts#ImproveTop"><v-row :class="{ 'title_text': true, 'title_text_active': check[1] }">Improve </v-row></a>
                        <a href="Parts#NewTop"><v-row :class="{ 'title_text': true, 'title_text_active': check[2] }">New</v-row></a> 
                        <!-- <a href="Attributions#WikiTop"><v-row :class="{ 'title_text': true, 'title_text_active': check[3] }">Wiki</v-row></a> -->
                        <!-- <a href="Attributions#HPTop"><v-row :class="{ 'title_text': true, 'title_text_active': check[4] }">HP</v-row></a> -->
                        <!-- <a href="Attributions#OtherTop"><v-row :class="{ 'title_text': true, 'title_text_active': check[5] }">Other</v-row></a> -->
                        

                    </v-row>
                    </v-col>
                </v-col>

                <v-col class="main_text" cols="12" lg="10" xl="10">
                    <v-row justify="center" text-align="left">
                        <v-row cols="12" class='h1_box' id="OverviewTop">
                          <v-col class='h1_box_text' id="top"> 
                            <h1 class='h1_text' pushElementOffsetTop>Parts</h1>
                          </v-col>
                        </v-row>
                    </v-row>


                      <v-row class="row_max-box" id="section_01">
                        <h2 class="h2_text">Parts Overview</h2>
                      </v-row>

                      
                      <v-row cols="12" sm="12" xs="12" md="12" lg="7" xl="7" class="row_max-box" >

                        <template>
                          <v-simple-table>
                            <template v-slot:default>
                              <thead>
                                <tr>
                                  <th class="table-font-size">
                                    Name
                                  </th>
                                  <th class="table-font-size">
                                    Description
                                  </th>
                                  <th class="table-font-size">
                                    Type
                                  </th>
                                  <th class="table-font-sizet">
                                    Length
                                  </th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr
                                  v-for="item in  desserts"
                                  :key="item.name"
                                >
                                  <td class="table-font-sizet"><a :href="item.link">{{item.name}}</a></td>
                                  <td class="table-font-sizet">{{ item.des }}</td>
                                  <td class="table-font-sizet">{{ item.type }}</td>
                                  <td class="table-font-sizet">{{ item.Lengt }}</td>
                                </tr>
                              </tbody>
                            </template>
                          </v-simple-table>
                        </template>


                      </v-row>

                      <v-row cols="12" sm="12" xs="12" md="12" lg="7" xl="7" id="ImproveTop" class="row_max-box">
                        <p class="p_indent"> <br/></p>
                      </v-row>

                      <v-row cols="12" sm="12" xs="12" md="12" lg="7" xl="7"  class="row_max-box">
                        <p class="p_indent"> <br/></p>
                      </v-row>
                      

                      <v-row class="row_max-box" id="section_02" >
                        <h2 class="h2_text">An improvement of existing parts</h2>
                      </v-row>


                      <v-row cols="12" sm="12" xs="12" md="12" lg="7" xl="7" class="row_max-box">




                      <v-row cols="12" sm="12" xs="12" md="12" lg="7" xl="7" class="row_max-box">
                        <figure class="fig_full_width" >
                          <img class="image_max" src="https://2020.igem.org/wiki/images/4/4a/T--Waseda--Plux-tet-GFP-improve-ppt.png" alt="Fig 5-1-1 parts improve of BBa_K934025">
                        <figcaption class="fig_title">Fig. 5-1-1 parts improve of BBa_K934025</figcaption>
                        </figure>
                      </v-row>

                        <v-col>
                          <p class="p_indent">  
                            To see the improvement in degradation effect by ssrA tag, we constructed an improved part (BBa_K3580003) by modifying an existing part: Plux/tet-GFP(BBa_K934025).
                             Reduction of the concentration of proteins by degradation and dilution as well as production plays an important role in the behavior of the gene circuit.
                              Although cells can decrease their concentration by dilution according to growth, cell-free systems cannot because it doesn’t grow. Therefore,
                               this improvement was necessary to incorporate degradation into the cell-free system. In order to compare these parts (BBa_K358003 and BBa_K934025),
                                we first measured the fluorescence of GFP in vivo for 240 minutes. The fluorescence of tagged GFP(BBa_K3580003) was lower than that of normal GFP(BBa_K934025) at 240 min point (Fig 5-1-1).
                                 Although GFP is a stable protein with a β-barrel and much difficult to be degraded, this result shows that tagged GFP was successfully degraded as we desired.                          
                          </P>
                        </v-col>
                      </v-row>



                      <v-row cols="12" sm="12" xs="12" md="12" lg="7" xl="7" class="row_max-box">
                        <figure class="fig_full_width" >
                          <img class="image_max" src="https://2020.igem.org/wiki/images/b/b1/T--Waseda--Plux-tet-GFPssrA-vivo-comment.png" alt="Fig 5-1-2 degradation tag assay in vivo">
                        <figcaption class="fig_title">Fig. 5-1-2 degradation tag assay in vivo</figcaption>
                        </figure>
                      </v-row>


                      <v-row cols="12" sm="12" xs="12" md="12" lg="7" xl="7" class="row_max-box">

                        <v-col>
                          <p class="p_indent">
                            Then, we compared the fluorescence of GFP in a cell-free system which was extracted from the E.coli containing luxR protein. Fig 5-1-2 is the result of the experiment.
                             The fluorescence of tagged GFP(BBa_K3580003) couldn’t be measured because the value was too low. The results indicate that excessive degredation occur with ssrA tagged protein both in vivo and in vitro. Based on this data, we modified the degradation terms in the model.                            
                          </P>
                          
                        </v-col>
                      </v-row>

                      <v-row cols="12" sm="12" xs="12" md="12" lg="7" xl="7" class="row_max-box">
                        <figure class="fig_full_width" >
                          <img class="image_max" src="https://2020.igem.org/wiki/images/e/eb/T--Waseda--Plux-tet-GFPssrA-vitro-comment.png" alt="Fig 5-1-3 degradation tag assay in vitro">
                        <figcaption class="fig_title">Fig. 5-1-3 degradation tag assay in vitro</figcaption>
                        </figure>
                      </v-row>
                      
                      <v-row cols="12" sm="12" xs="12" md="12" lg="7" xl="7" class="row_max-box"> 
                       <v-col>
                          <p class="p_indent">      
                            We regard our BBa_K3580101 as an improved version from pre-existing BBa_K3052001, which has only limonene synthase.   Our improved part can use the set of Isopentenyl Diphosphate (IPP), and Dimethylallyl Diphosphate (DMAPP) both of which are synthesized through not only mevalonate pathway used here but also the other famous non-mevalonate pathway.
                              Thus, the set is produced in so many engineered pathways, including the addgene plasmid used here, as an important intermediate set for bioproduction.  From this view point, we are sure that the simple combination of the two enzymes in this part satisfied convienience and modularity in synthetic biology than pre-existing BBa_K3052001.                        
                          </p>
                        </v-col>
                      </v-row>

                      <v-row cols="12" sm="12" xs="12" md="12" lg="7" xl="7" class="row_max-box">
                        <figure class="fig_full_width" >
                          <img class="image_max" src="https://2020.igem.org/wiki/images/f/f7/T--Waseda--monoterpene_2-2-2_GCMS_analysis_results_of_limonene_synthesis_system.png" alt="Fig. 5-1-4 GC/MS analysis results of limonene synthesis system">
                        <figcaption class="fig_title">Fig. 5-1-4 GC/MS analysis results of limonene synthesis system</figcaption>
                        </figure>
                      </v-row>


                      <v-row cols="12" sm="12" xs="12" md="12" lg="7" xl="7" class="row_max-box" id="NewTop">
                        <figure class="fig_full_width" >
                          <img class="image_max" src="https://2020.igem.org/wiki/images/f/fa/T--Waseda--monoterpene_2-2-4_Yields_of_monoterpene_per_reaction_solution_in_this_experiment_.png" alt="Fig. 5-1-5 Yields of monoterpene per reaction solution in this experiment">
                        <figcaption class="fig_title">Fig. 5-1-5 Yields of monoterpene per reaction solution in this experiment</figcaption>
                        </figure>
                      </v-row>

                      
                      
                      
                      
                      
                      
                      
                      <v-row class="row_max-box" id="section_03" >
                        <h2 class="h2_text">New Parts</h2>
                      </v-row>   

                      <v-row cols="12" sm="12" xs="12" md="12" lg="7" xl="7" class="row_max-box">
                        <figure class="fig_full_width" >
                          <img class="image_max" src="https://2020.igem.org/wiki/images/2/2a/T--Waseda--alanine_racemase_parts.png" alt="Fig 5-1-6 Our new part BBa_K3580200">
                        <figcaption class="fig_title">Fig 5-1-6 Our new part BBa_K3580200</figcaption>
                        </figure>
                      </v-row>                    

                      
                      
                      <v-row cols="12" sm="12" xs="12" md="12" lg="7" xl="7" class="row_max-box">

                        <v-col>
                          <p class="p_indent">                              
                            In our project, we inserted this part between bacteriophage T5 promoter for <i>E. coli</i> RNA polymerase and lambda t0 terminator of pCA24N(-gfp) planmid.
                             This plasmid was transformed into the BL21(DE3) star strain. As this vector is chloramphenicol resistant, we cultured the bacteria in media containing chloramphenicol.
                              After expression induction by IPTG, the BL21 cells were collected by centrifugation, then sonicated and His-Tag purification was performed. (wikiマテメソハイパーリンク) The His-Tag purified Alr was confirmed with SDS-PAGE(Fig.5-1-7). The concentration of purified racemase was quantified with the Bradford method. 

                          </p>
                        </v-col>
                      </v-row>

                      <v-row cols="12" sm="12" xs="12" md="12" lg="7" xl="7" class="row_max-box">
                        <figure class="fig_full_width" >
                          <img class="image_max" src="https://2020.igem.org/wiki/images/8/8a/T--Waseda--racemase_purification_sds.png" alt="Fig.5-1-7  SDS-PAGEs of purified <i>E. coli</i> BL21(DE3)star containing BBa_K3580200">
                        <figcaption class="fig_title">Fig.5-1-7  SDS-PAGEs of purified <i>E. coli</i> BL21(DE3)star containing BBa_K3580200</figcaption>
                        </figure>
                      </v-row>

                                        



                      <v-row cols="12" sm="12" xs="12" md="12" lg="7" xl="7" class="row_max-box">

                        <v-col>
                          <p class="p_indent">     
                            We decided to assay AR by using PURE frex provided by GeneFrontier, Inc. As PURE frex does not contain any extra metabolic enzymes other than those involved in transcription and translation, we would be able to perform the assays without considering the problems of controlling the metabolic system. (wikiマテメソハイパーリンク)                        
                          </P>
                          <p class="p_indent">     
                            Consequently, to assay the activity of purified AR, the racemization reaction was performed with the following solution(Table.1) and incubated at 37°C for 1 h. The sample was Filtered using centrifugal filter device at 14,000g for 30min (Amicon Ultra-0.5 Centrifugal Filter Devices 3K) and the filtered sample was collected.
                             The filter device was washed prior to centrifugation of the sample using the buffer used in the AR reaction. the sample was centrifuged to collect the filtered product. Filtering allowed us to collect substances other than AR from the incubated product.
                              Fluorescence values of GFPS1 synthesized by the combination of PURE frex containing 19 L-amino acids and a plasmid encoding the reporter protein GFPS1 with L-alanine, D-alanine, and the reaction solution filtration products of AR and D-alanine (presumably containing PLP, potassium phosphate, and racemic alanine) were measured.(Fig.5-1-8)
                         
                          </p>
                        </v-col>
                      </v-row>

                      <v-row cols="12" sm="12" xs="12" md="12" lg="7" xl="7" class="row_max-box">
                        <figure class="fig_full_width" >
                          <img class="image_max" src="https://2020.igem.org/wiki/images/3/36/T--Waseda--racemase_201023_bar.png" alt="Fig.5-1-8 Effect of L-alanine substrate repletion for translation by racemase">
                        <figcaption class="fig_title">Fig.5-1-8 Effect of L-alanine substrate repletion for translation by racemase</figcaption>
                        </figure>
                      </v-row>


                      <v-row cols="12" sm="12" xs="12" md="12" lg="7" xl="7" class="row_max-box">

                        <v-col>
                          <p class="p_indent"> 
                            The results demonstrated that GFP could not be synthesized by D-alanine alone, but L-alanine produced by racemase-mediated racemization of D-alanine and L-alanine could be used for translation, creating a situation in which fluorescence was restored by the synthesized GFP.                               
                          </p>
                        </v-col>

                      </v-row>

                      <v-row cols="12" sm="12" xs="12" md="12" lg="7" xl="7" class="row_max-box">

                        <v-col>
                        
                          <table class="table_main">
                            <caption>Table1. Alr racemization reaction assay solution </caption>
                            <tr class="tr_main"><th class="th_main">Solution</th><th class="th_main">Final Concentration</th></tr>
                            <tr class="tr_main"><td class="td_main">Alanine Racemase</td><td>57.5 µg/ml</td></tr>
                            <tr class="tr_main"><td class="td_main">D- or L- alanine</td><td>5mM</td></tr>
                            <tr class="tr_main"><td class="td_main">PLP </td><td>10µM</td></tr>
                            <tr class="tr_last"><td class="td_last">Potassium Phosphate Buffer pH7.6</td><td class="td_last">50mM</td></tr>
                            </table>
                          
                        </v-col>
                      </v-row>

                      <v-span></v-span>

                       <v-row cols="12" sm="12" xs="12" md="12" lg="7" xl="7" class="row_max-box">
                        <figure class="fig_full_width" >
                          <img class="image_max" src="https://2020.igem.org/wiki/images/f/f2/T--Waseda--monoterpene_2-2-3_GCMS_analysis_results_of_sabinene_synthesis_system.png" alt="Fig. 5-1-9 GC/MS analysis results of sabinene synthesis system">
                        <figcaption class="fig_title">Fig. 5-1-9 GC/MS analysis results of sabinene synthesis system</figcaption>
                        </figure>
                      </v-row>                 



                      <v-row cols="12" sm="12" xs="12" md="12" lg="7" xl="7" class="row_max-box">

                        <v-col>
                          <p class="p_indent"> 
                            By similar GC/MS analysis with SIM, we confirmed the world's first report of sabinene synthesis using cell extracts.  Although elaborative reconstituted system by mixing of purified enzymes has been reported (Srividya Narayanan et al 2015), (Korman Tyler P et al 2017).
                              Extract-base system with not only simple but engineering principle must provide much contribution to iGEM and DIY biology which as large number of players. Furthermore, extract systems do not require expensive coenzymes (Dudly et al 2019). As well as limonene detection in Fig 2-2-2, we firstly confirmed sabinene retention time and SIM signal at the m/z values (77, 91, and 93).
                                From our cell-free production, we then detected sabinene SIM signal and chromatogram peak which cannot find from the negative control.  Also, from the system containing sabinene synthase and GPP synthase, a peak with the same retention time as the standard limonene product and ions with m/z values characteristic in limonene at that retention time were detected. 
                                 This was consistent with the fact that the paper that referred to the sabinene synthase used in this experiment also reported the synthesis of limonene as a by-product (Srividya Narayanan. et al 2015).                             
                          </p>
                        </v-col>
                      </v-row>



                            
                      <v-row cols="12" sm="12" xs="12" md="12" lg="7" xl="7" class="row_max-box">
                        <figure class="fig_full_width" >
                          <img class="image_max" src="https://2020.igem.org/wiki/images/f/fa/T--Waseda--monoterpene_2-2-4_Yields_of_monoterpene_per_reaction_solution_in_this_experiment_.png" alt="Fig. 5-1-10  Yields of monoterpene per reaction solution in this experiment">
                        <figcaption class="fig_title">Fig. 5-1-10  Yields of monoterpene per reaction solution in this experiment</figcaption>
                        </figure>
                      </v-row>                    



                      <!-- <v-row cols="12" sm="12" xs="12" md="12" lg="7" xl="7" class="row_max-box">

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
                      </v-row> -->


                    <!-- <v-template  v-scroll="pushScrollY" id="section_01"><v-col class="last_message"></v-col></v-template>
                    <v-template  v-scroll="pushScrollY" id="section_02"><v-col class="last_message"></v-col></v-template>
                    <v-template  v-scroll="pushScrollY" id="section_03"><v-col class="last_message"></v-col></v-template> -->
                    <v-template  v-scroll="pushScrollY" id="section_04"><v-col class="last_message"></v-col></v-template>
                    <!-- <v-template  v-scroll="pushScrollY" id="section_05"><v-col class="last_message"></v-col></v-template> -->
                    
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
      check: [false, false, false, false],
      desserts: [
          {
            name: 'BBa_K3580001',
            des: 'GFPssrA LVA degradation tag',
            type: 'Coding',
            Lengt: '750',
            link: 'http://parts.igem.org/Part:BBa_K3580001',
          },
          {
            name: 'BBa_K3580002',
            des: 'GFPssrA LVA degradation tag',
            type: 'Reporter',
            Lengt: '891',
            link: 'http://parts.igem.org/Part:BBa_K3580002',
          },
          {
            name: 'BBa_K3580003',
            des: 'GFPssrA LVA degradation tag',
            type: 'Composite',
            Lengt: '980',
            link: 'http://parts.igem.org/Part:BBa_K3580003',
          },         
          {
            name: 'BBa_K3580101',
            des: 'Ptrc-trGPPS-LS',
            type: 'Generato',
            Lengt: '4030',
            link: 'http://parts.igem.org/Part:BBa_K3580101',
          },  
          {
            name: 'BBa_K3580102',
            des: 'Ptrc-trGPPS-SS',
            type: 'Generato',
            Lengt: '4030',
            link: 'http://parts.igem.org/Part:BBa_K3580102',
          },         
          {
            name: 'BBa_K3580103',
            des: 'enzymes of mevalonate pathway that synthesize IPP and DMAPP from Ac-CoA ',
            type: 'Generator',
            Lengt: '10293',
            link: 'http://parts.igem.org/Part:BBa_K3580103',
          }, 
          {
            name: 'BBa_K3580200',
            des: 'alanine rasemase + His tag',
            type: 'Codimg',
            Lengt: '1131',
            link: 'http://parts.igem.org/Part:BBa_K3580200',
          },
      ],
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
        'section_01','section_02','section_03','section_04'
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

.table-font-size {
 font-size: 40px !important;
}
table.v-table thead th {
      font-size: 40px !important;
}
table.v-table tbody td {
    font-size: 40px !important;
}



.table_main{
  border-collapse:collapse;
  margin:0 auto;

  margin: auto
}
.th_main{
  border-bottom:2px solid #000;
}
.td_main,.th_main{
  padding:10px;
  align-self: center;
  margin: auto
}
.td_last,.th_last{
  padding:10px;
  align-self: center;
  margin: auto;
  border-bottom:2px solid #000;
}
</style>

