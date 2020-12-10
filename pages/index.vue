<template>
<!-- </v-layout> -->
<v-container fluid ma-0 pa-0 fill-height class="top_bg"> 
  <v-container fluid ma-0 pa-0 class="top_bg_top1">
    <v-row justify="center" align="center" class="top_bg_top1_1">
      <v-col cols="12" sm="8" md="6" class="top_bg_top1_2">

      </v-col>
    </v-row>

  </v-container>


  <v-container fluid pa-0 class="top_bg_top2"> 
    <v-row justify="center" class="top_bg_top2_1"></v-row>

    <v-row justify="center">
      <v-col cols="11" xs="11" sm="8" md="7" lg="8" xl="7" class="top_bg_top2_2">
        <v-row>
          <video width="100%" height="auto" controls>
            <source src="https://2020.igem.org/wiki/images/d/d5/T--Waseda--StoryShortMovie.mp4" type="video/mp4">
          Your browser does not support the video tag.
          </video>
        </v-row>
        
        <v-row  class="row_max-box">
          <v-col>
            

              <p class="p_indent">     
                  Once upon a time, there was a strange battle between two forces. 
                  One force was limonene scented zombies, and the other was Sabinene scented samurais. 
                  Limonene and Sabinene are aroma compounds which are often found in perfume and essential oils.
                  Each force released AHL, which made members of the opponent their companion. 
                  For example, if samurai members absorb a large amount of AHL released by the zombie force, the samurai members became members of the zombie force. 
                  The same happed vice versa. 
                  This story about an odd and strange struggle between two such forces ...
              </p>
          </v-col>
        </v-row>
        
      </v-col>
    </v-row>
  </v-container>

  <v-container fluid pa-0 class="top_bg_top3_5">
    <v-row justify="center" class="top_bg_top3_5_32">
      <v-col cols="12" xs="11" sm="11" md="10" lg="8" xl="7" justify="center" align="center">
          <h2 class="h2_text">Project Overview</h2>
      </v-col>
      <v-col cols="11" xs="11" sm="11" md="10" lg="8" xl="7">
          <v-row>
              
              
              <h3>How do you like our story?</h3>
              <p class="p_indent">     
                We love easy-to-modulate cell-free system. However, through our human practice activities during the initial phase of our iGEM project, we realized that Synbio and cell-free system are unrecognized from general public.
                  Thus, we selected the theme which is not only interesting as a story but also biologically important. Here was beginning of the story for information processing where mathematical modeling and wet experiment interacted each other through Design-Build-Test-Learn (DBTL) cycle. This battle story also expanded into war in the mirror which can be broken by racemase.  Our success in monoterpene productions for Zombie and Samurai also gave us an entry point for creation of our business model which was pivoted by interviews to experts.
                    Our experience in Synbio modeling was implanted in a smartphone application which we utilized when we had a chance to educate high school students.  By using our user-friendly application, they could understand a behavior of toggle switch circuit, which was one of the first successes in Synbio and important to understand cell-fate decision in developmental biology and regenerative medicine.
              </p>
              

          </v-row>
          <figure class="fig_full_width" >
              <img class="image_max" 
                  src="https://2020.igem.org/wiki/images/2/2a/T--Waseda--TopFig1.png" alt="Fig. 1-1 Project Overview">
              <figcaption class="fig_title">Fig. 1-1 Project Overview</figcaption>
          </figure>
      </v-col>

    </v-row>

    <v-row justify="center" align="center" class="top_bg_top3_5_31"></v-row>




  </v-container>

  <v-container fluid pa-0 class="top_bg_top3_5">

    <v-row justify="center">
      <v-col cols="12" xs="11" sm="11" md="10" lg="8" xl="7" justify="center" align="center">
          <h2 class="h2_text">ZOMBIE vs. SAMURAI gene circuit</h2>
      </v-col>
      <v-col cols="11" xs="11" sm="11" md="10" lg="8" xl="7">
          <figure class="fig_full_width" >
              <img class="image_max" 
                  src="https://2020.igem.org/wiki/images/5/54/T--Waseda--TopFig2.png" alt="fig. 1-2  DBTL - ZOMBIE vs. SAMURAI gene circuit">
              <figcaption class="fig_title">fig. 1-2  DBTL - ZOMBIE vs. SAMURAI gene circuit</figcaption>
          </figure>

          <p class="p_indent"></p>
          <p class="p_indent">     
            For Zombie vs. Samurai war, we completed information processing project in which Modeling and wet experiments interacted in turn.
              Detailed information of the wet-dry interaction can be found here (Go to <nuxt-link to='Model'>Model page</nuxt-link>).
          </p>

      </v-col>

      </v-row>
      <v-row justify="center" align="center" class="top_bg_top3_5_41"></v-row>

      <v-row justify="center">
      <v-col cols="12" xs="11" sm="11" md="10" lg="8" xl="7" justify="center" align="center" class="top_bg_top3_5_42">
          <h2 class="h2_text">Improvement in degradation both in vitro and in vivo</h2>
      </v-col>
      <v-col cols="11" xs="11" sm="11" md="10" lg="8" xl="7" class="top_bg_top3_5_43">
          <v-row class="row_max-box">
            <v-col>
              <p class="p_indent"><br/></p>
                <p class="p_indent">     
                    Rapid protein degradation is required to achieve working ZOMBIE vs SRAMURAI gene circuit in a cell-free system.
                     Therefore, we constructed plux/tet-GFPssrA ( <a class="link_style"  href="http://parts.igem.org/Part:BBa_K3580003">BBa_K3580003</a> ) by improving plux/tet-GFP ( <a class="link_style"  href="http://parts.igem.org/Part:BBa_K934025">BBa_K934025</a> ) and test the effect of degradation tag in quorum sensing system.
                      We compared the fluorescence value of the GFP and tagged GFP both in vivo and in vitro. As a result, the value of tagged GFP was lower than that of normal GFP in both vivo and vitro, indication that degradation of GFP accelerated by the ssrA tag.
                      (Go to <nuxt-link to='QS'>Gene Circuit Experiment</nuxt-link>).
                  </p>
            </v-col>
          </v-row>
        </v-col>



      <v-col cols="12" xs="11" sm="11" md="10" lg="8" xl="7" justify="center" align="center" >
          <h2 class="h2_text">cross talk of cell-cell communication molecules when they work in vitro </h2>
      </v-col>

        <v-col cols="11" xs="11" sm="11" md="10" lg="8" xl="7">
          <v-row class="row_max-box">
            <v-col>
                <p class="p_indent">     
                    There is one more factor to be considered for a working genetic circuit. That is crosstalk between the quorum sensing (QS) systems. We tested the crosstalk between the lux and rhl QSsystem in Cell-free to see if it is an acceptable amount to accomplish the gene circuit.
                  </p>
            </v-col>
          </v-row>
        </v-col>


      </v-row>
    </v-container>

  <v-container fluid pa-0 class="top_bg_top3_5">

    <v-row justify="center">
      <v-col cols="12" xs="11" sm="11" md="10" lg="8" xl="7" justify="center" align="center">
          <h2 class="h2_text">cell-free monoterpene synthesis</h2>
      </v-col>
      <v-col cols="11" xs="11" sm="11" md="10" lg="8" xl="7" class="top_bg_top3_5_52">

          <p class="p_indent"></p>
          <p class="p_indent">     
            One of our projects is synthesizing monoterpenes (limonene and sabinene) with cell free system, which has two strong points in bioproduction. Monoterpenes are useful for fragrance, fuel, and pesticides.
            In contrast with monoterpene synthesis using engineered microorganisms, cell-free synthesis can avoid the restriction caused by using living cells which is suffered from toxicity of monoterpenes. 
            The second strong point of the cell-free systems is its modularity of reaction solution. 
            When you make <i>E.coli</i> synthesizing monoterpenes, you have to introduce all kinds of gene required to synthesize monoterpenes into one cell. 
            In contrast, cell-free reaction allow mixing of multiple cell extract in any ratio and many combinations. 
            You can see our success in synthesis of monoterpenes (limonene and sabinene) here. (Go to  <nuxt-link to='Monoterpene'> Monoterpenes </nuxt-link>) We think these strong points can achieve the engineering spirit of iGEM.

          </p>

            <figure class="fig_full_width" >
              <img class="image_max" 
                  src="https://2020.igem.org/wiki/images/b/b3/T--Waseda--monoterpene_2-2-1_Parts_and_metabolic_pathways_in_this_experiment_and_a_schematic_diagram_of_the_experiment.png" alt="Fig. 1-3 Monoterpenes Overview">
              <figcaption class="fig_title">Fig. 1-3 Monoterpenes Overview</figcaption>
          </figure>

      </v-col>

      </v-row>



    <v-row justify="center" align="center" class="top_bg_top3_5_51"></v-row>
    
    <v-row justify="center">
      <v-col cols="12" xs="11" sm="11" md="10" lg="8" xl="7" justify="center" align="center">
          <h2 class="h2_text">Generating two pulses through modeling</h2>
      </v-col>
      <v-col cols="11" xs="11" sm="11" md="10" lg="8" xl="7">
          <v-row>
              <p class="p_indent">     
                To construct a system in which the scent automatically change over time, we have developed a multi-target IFFL, an extension of the incoherent feed forward loop (IFFL).
                The IFFL is a kind of basic gene circuit in which concentration of gene Z change like a pulse over time. In Multi IFFL, we planned to control the expression timing of multiple genes Z with the same gene X and gene Y. 
                We have extensively explored the model parameters to see if this system can actually create a time difference in the expression of the two genes. By balancing the shape of the two pulses and the time difference between the two peaks, we were able to create two pulses with a time lag in the model.
                ( GO to <nuxt-link to='IFFL'>IFFL</nuxt-link> page )

              </p>
          </v-row>
          <figure class="fig_full_width" >
              <img class="image_max" 
                  src="https://2020.igem.org/wiki/images/a/a5/T--Waseda--TopFig4.png" alt="Fig. 1-4  IFFL Overview">
              <figcaption class="fig_title">Fig. 1-4 IFFL Overview</figcaption>
          </figure>
      </v-col>

    </v-row>

        
    
  </v-container>

  <v-container fluid pa-0 class="top_bg_top6">
    <v-row justify="center" >
      <v-col cols="12" xs="11" sm="11" md="10" lg="8" xl="7" justify="center" align="center">
          <h2 class="h2_text">War in the mirror: racemase</h2>
      </v-col>
      <v-col cols="11" xs="11" sm="11" md="10" lg="8" xl="7">
          <v-row>
              <p class="p_indent">     
                In the zombie vs. Samurai storyline, we envisioned a scenario in which one side deprives their opponent of the food they need. That is to say, one side consumes D-amino acid and the other consumes L-amino acid derived food, and both sides converts their opponent’s amino acid to make them edible only for themselves. 
                We especially focused on alanine racemase (AR), known as an attractive target for the antibacterial drug development. We confirmed the conversion by using cell-free protein synthesis dependent on D-alanine and racemase. ( Go to <nuxt-link to='Racemase'>Racemase</nuxt-link> page.) 

              </p>
          </v-row>
          <figure class="fig_full_width" >
              <img class="image_max" 
                  src="https://2020.igem.org/wiki/images/2/27/T--Waseda--TopFig5.png" alt="Fig. 1-5 Racemase Overview">
              <figcaption class="fig_title">Fig. 1-5 Racemase Overview</figcaption>
          </figure>
      </v-col>

    </v-row>
    

     
    <v-row justify="center" align="center" class="top_bg_top6_1"></v-row>

    <v-row justify="center">
      <v-col cols="12" xs="11" sm="11" md="10" lg="8" xl="7" justify="center" align="center">
          <h2 class="h2_text_hp">Intreactions between reseaech activities and Human Practice activities <br/>
            Feedbacks from Human Practice activities to our reseaech activities </h2>
      </v-col>
      <v-col cols="11" xs="11" sm="11" md="10" lg="8" xl="7">
          <v-row>
              <p class="p_indent">     
                Our iGEM wet and modeling studies has interacted with human practice activity throughout the year.
                  As described above and on human practice page ( GO to <nuxt-link to='Human_Practices'>Human Practices</nuxt-link> page ), our initial interaction with society made us confident to center our project around cell-free system.
                    Note that we, cell-free iGMEers, have to consider safety in recombinant DNA and other experiments, as cell-based iGEMers.  Our plasmid and extract preparations were in compliance with domestic laws.
              </p>
              <p class="p_indent">    
                  Another HP activity was education to high school students. ( Go to <nuxt-link to='Education'>Education</nuxt-link> page.) 
                  Their feedbacks were important to apply our project to entrepreneurship activity.  
                  Additionally, although our app for modeling of synthetic genetic circuit was initially for the students, not only modeling-oriented team members but the other members came to understand each piece of our project from modeling point of view.  Such point of view is also important for daily design of experiments. 
              </p>
              <p class="p_indent">   
              At other times, as an entrepreneur, we carefully researched and brushed up applications of cell free system on real-world problems, discussing them with general public and experts in the field who were facing real-world problems. (Go to <nuxt-link to='Entrepreneurship'>Entrepreneurship</nuxt-link> page. ) Sometimes, our Entrepreneurship active asked new experiments and modeling which also expanded scope of our research.

              </p>
          </v-row>
          <figure class="fig_full_width" >
              <img class="image_max" 
                  src="https://2020.igem.org/wiki/images/1/11/T--Waseda--TopFig7.png" alt="Fig. 1-7 Human Practice">
              <figcaption class="fig_title">Fig. 1-6 Human Practice</figcaption>
          </figure>
      </v-col>

    </v-row>
  </v-container>


  <!-- <div class="medalfix" :class="{del: isActive}">
    <img class="image_max" src="https://2020.igem.org/wiki/images/2/29/T--Waseda--TrackIcon_Information.svg" alt="Medal">
    We are the proud winners of the iGEM 2020
    <button v-on:click="isActive = !isActive"><span class="close">×</span></button>

    <b>Information Processing Track award!</b>
    Check out our other
    <nuxt-link to="Achivement"> achievements.</nuxt-link>
  </div> -->

</v-container>
<!-- </v-layout> -->
</template>

<script>

const pageTitle = 'Main';
const pageDes = "iGEM2020 Team Waseda's Wiki";
const pageUrl = 'https://2020.igem.org/Team:Waseda';


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

  components: {

  },
  // data: () => {
  //   return {
  //     isActive: false,
  //   };
  // },
  
  // methods:{
  //   change:function(){
  //    this.isActive = !this.isActive;
  //   }
  // }
}
</script>

<style lang="scss" scoped>
.top_bg {
  margin-bottom: 50%;
  background-image: url("https://2020.igem.org/wiki/images/c/cf/T--Waseda--TopPageBackgroundWashi.jpg");
  background-size: 100% auto;
  background-repeat: repeat;

  &_top1{
    margin: 20px 0;
    background: rgba(0, 0, 0, 0.3) 0% 0% no-repeat padding-box;
    &_1{
      height: 0;
      margin-top: -80px;
      padding-top: 58%;
      background-size: contain;
      background-image: url("https://2020.igem.org/wiki/images/9/94/T--Waseda--TopMainImage.png");
    }
    &_2{
      margin-top: -58%;
    }
  }


  &_top2{
    margin: 20px 0;
    background: rgba(0, 0, 0, 0.3) 0% 0%  padding-box;
    background-repeat: repeat;

    &_1{
      height: 0;
      padding-top: 57%;
      background-size: contain;
      background-image: url("https://2020.igem.org/wiki/images/d/dc/T--Waseda--TopRaijinnSamuraiMonotone.png");
    }
    &_2{
      margin-top: -50%;
    }
  }
  
  &_top3_5{
    margin: 20px 0;
    background: rgba(37, 121, 255, 0.3) 0% 0% padding-box;
    background-repeat: repeat;
    &_31{
      height: 0;
      padding-top: 53%;
      background-size: contain;
      background-image: url("https://2020.igem.org/wiki/images/8/86/T--Waseda--TopMonotoneRaijinOnCloud.png");
    }
    &_32{
      margin-bottom: - 20%;
    }
    &_41{
      height: 0;
      padding-top: 57%;
      background-size: contain;
      background-image: url("https://2020.igem.org/wiki/images/f/fc/T--Waseda--MonotoneHuujinnoOnCloud.png");
    }
    &_42{
      margin-top: -23%;
    }    
    &_43{
      padding-top: 20px;
      margin-top: -12%;
    }
    &_51{
      height: 0;
      padding-top: 60%;
      background-size: contain;
      background-image: url("https://2020.igem.org/wiki/images/e/e4/T--Waseda--Tree.png");
    }
    &_52{
      margin-bottom: -15%;
    }
  }
  &_top6{
    margin: 20px 0 40px 0;
    background: rgba(87, 126, 11, 0.35) 0% 0% no-repeat padding-box;
    &_1{
      height: 0;
      padding-top: 57%;
      background-size: contain;
      background-image: url("https://2020.igem.org/wiki/images/1/1f/T--Waseda--TopRacemasePond.png");
    }
    &_2{
      margin-top: -57%;
    }
  }
}
.top_title {
  content: bottom;
}
.image {
  &_def {
  width :90%;
  }
  &_max {
    width: 100%;
  }
}

.h2_text {
  font-size: 50px;
  border-bottom: 5px solid black;
}
.h2_text_hp {
  font-size: 30px;
  border-bottom: 5px solid black;
}



.medalfix {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 200px;
    border: 3px solid black;
    z-index: 999;
    background-color: white;
    font-family: 'Noto Sans TC', sans-serif;
    font-size: 15px;
    color: black;
    line-height: 1.2em;
    font-weight: 300;
    padding: 10px;
}
.close {
    color: #111111;
    right: 8px;
    top: 10px;
    position: absolute;
    font-size: 16px;
    font-weight: bold;
}
.del {
  display: none;
}
</style>

