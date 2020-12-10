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
                  
                    <v-row justify="center" text-align="left" id="section_01">
                        <v-row cols="12" class='h1_box'>
                          <v-col class='h1_box_text'> 
                            <h1 class='h1_text' pushElementOffsetTop>Achivement</h1>
                          </v-col>
                        </v-row>
                    </v-row>
                    
      
                    <v-row cols="12" sm="12" xs="12" md="12" lg="7" xl="7" class="row_max-box">

                        <v-col cols="12" class="row_max-box">
                            <h2>Award</h2>
                                <h3>&nbsp;&nbsp;Information Processing Track award !</h3>
                                <h3>&nbsp;&nbsp;Best Education (Nomination)</h3>


                            <p><br></p>
                            <h2>Criteria</h2>
                            <h3>Special achievement - World's first report!</h3>
                            <p>* Confirmed rhl system activity and crosstalk in a cell-free system.<br>
                                * Modeled in the cell-free system including crosstalk.<br>
                                * Sabinene synthesis using cell extracts.<br>
                                * Our original methodology, based on the substrate specificity of the racemase, was able to demonstrate the high accuracy of the experimental PURE system.<br>
                                * Proposal of substance detection kit to detect balance. (Business)<br>
                            </p>

                            <h3>Bronze</h3>
                            <p>
                                <b>1. Competition Deliverables</b><br>
                                    We have created a Wiki page and a Poster page, released a Presentation Video and a Project Promotion Video, submitted the judging form.<br><br>
                                <b>2. Attributions</b><br>
                                    We have received lots of help from professors and other people during the development of our project.<br><br>
                                <b>3. Project Description</b><br>
                                    We conducted the project through DBTL, such a dialogue with general public, modeling, and wet experiments.<br><br>
                                <b>4. Contribution</b><br>
                                    We revealed that Prhl(RR)-GFP (BBa_K1529321) can work in vitro.
                            </p>


                            <h3>Silver</h3>
                            <p>
                                <b>1. Engineering Success</b><br>
                                    We have proven that the functions of a constructed Alanine Racemase (BBa_K3580200) parts work as expected.<br><br>
                                <b>2. Collaboration</b><br>
                                    We collaborated with the 2019 iGEM Qdai Team to help each other's modeling.<br><br>
                                <b>3. Human Practices</b><br>
                                    Since the project began, we talked with the general public and confirmed the “safety” and “ethics” of our project around cell-free system. For more info, please refer to our Human Practices page (Wiki & Poster).<br><br>
                                <b>4. Proposed Implementation</b><br>
                                    We have proposed a business model based on the "SAMURAI System" (our project). For more info, please refer to our Implementation page (Wiki), Entrepreneurship page (Wiki & Poster).<br><br>
`


                            </p>

                            <h3>Gold</h3>
                            <p>
                                <b>1. Improvement of an Existing Part</b><br>
                                        To see the improvement in degradation effect by ssrA tagging, we construct a improved part (BBa_K3580003) by modification of an existing part: Plux/tet-GFP (BBa_K934025). For more info, please refer to our Degradation-tag page (Poster, Zombie vs Samurai 4).<br><br>
                                    <b>2. Project Modeling</b><br>
                                        We modeled the genetic circuit for the Zombie and Samurai war. Then, We have also achieved more robust modeling that reflects the results of the wet experiment. For more info, please refer to our Zombie vs Samurai page (Wiki & Poster).<br><br>
                                    <b>3. Integrated Human Practices</b><br>
                                        We have repeated dialogs and created a business model for socially implementing the project. For more info, please refer to our Entrepreneurship page (Wiki & Poster).<br><br>
                                    <b>4. Science Communication</b><br>
                                        We have taught high school students what synthetic biology is. For more info, please refer to our Education page (Wiki & Poster).<br><br>
                                    <b>5. Excellence in Another Area</b><br>
                                        We have created a concept art work to help many people get inspiration for our projects and synthetic biology.<br><br>

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

const pageTitle = 'Achivement';
const pageDes = "iGEM2020 Team Waseda's" + pageTitle + "page";
const pageUrl = 'https://2020.igem.org/Team:Waseda/Achivement';


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

