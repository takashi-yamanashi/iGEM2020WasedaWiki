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
                                <circle fill="none" cx="100" cy="100" r="80" stroke="#3E4651" stroke-width="18" id="triangle" :style="{ 'stroke-dashoffset': scrollPer}" transform='rotate(270 100 100)'/>  
                                <!-- style="stroke-dasharray: 420.293; stroke-dashoffset: 210.293;" -->
                                
                                Sorry, your browser does not support inline SVG. 
                              </svg>
                              <img z-indx="10" class="navi_svg" src="https://2020.igem.org/wiki/images/7/71/T--Waseda--iGEM2020wikiicons-hp.svg">
            
                        </v-row>
            
                    <v-row class="navi_text">
                        <a href="Excellence_in_Another_Area"><v-row :class="{ 'title_text': true, 'title_text_active': check[0] }">Genegram</v-row></a>
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
                            <h1 class='h1_text' pushElementOffsetTop>Excellence in Another Area</h1>
                          </v-col>
                        </v-row>
                    </v-row>
                    
                    <v-row v-scroll="pushScrollY" id="section_01"> 
                      <video autoplay muted width="100%" height="auto" controls>
                          <source src="https://2020.igem.org/wiki/images/9/93/T--Waseda--anotherareavideo.mp4 " type="video/mp4">
                      Your browser does not support the video tag.
                      </video>
                    </v-row>

                      <v-row cols="12" sm="12" xs="12" md="12" lg="7" xl="7" class="row_max-box">
                        <v-col cols="12" class="row_max-box">

                            <p>  <br/>   

                              Have you ever thought of taking a closer look at the properties and characteristics of a protein before expressing it?
                              <br/> 
                            </p>  
                            <p>     <br/> 
                               This is appealing to synthetic biologists, especially iGEMers.<br/> 
                            </p>
                            <p>
                                <br/> 
                                We came up with an application called Genegram from the name of our Track, Information Processing. With Genegram, you can scan DNA sequence of a protein with your smartphone like a QR code.  <br/> <br/> 

                                 The application will go through three processes - Cell Processing, Pure System Processing, and 3D Printer Processing - before displaying the output on the screen. At this point, it is possible to interpret the process of actual gene expression.<br/> <br/> 

                            </p>
                          <p>
                                Proteins seen on the screen by this process can be viewed in 3D from any angle. Genegram also reminds us that we are blindly looking at the parts information (genetic information) that we see, but they are synthesized through actual processes                              
                          </p>

                          <figure class="fig_sm_width" >
                            <img class="image_max" src="https://2020.igem.org/wiki/images/e/ea/T--Waseda--cellprocessing.png" alt="Cell Processing mode">
                          <figcaption class="fig_title">Cell Processing mode</figcaption>
                          </figure>

                    
                                                    <p>
                              The three methods are displayed after the following processes. They can't only be created through Genegram, they can actually be created.
                              </p>
                     


                          <figure class="fig_sm_width" >
                              <img class="image_max" src="https://2020.igem.org/wiki/images/d/d8/T--Waseda--yamaAnotherGFPCode.png" alt="ATGC">
                            <figcaption class="fig_title">ATGC</figcaption>
                          </figure>

                          <p>
                                                            <br /> <br />
                                  The start point for all of process is 720-character information.

                                    
                                    <br />
                                    This is information that is loved by many iS. ("E0040”)


                          </p>


                          <p>So how is it handled in the real world?
                                    The three methods displayed Genegram are the following processes in the real-world.
                                        <br /> <br />
                          </p>

                          <figure class="fig_sm_width" >
                            <img class="image_max" src="https://2020.igem.org/wiki/images/a/a6/T--Waseda--cellprocessing2.png" alt="cell-GFP">
                          
                          </figure>

                        </v-col>                      
                        <v-col cols="12" class="row_max-box">
                          <h3>Cell Processing</h3>
                          

                            <p>
                            1. Converts the GFP sequence into a cell-free optimized GFPS1 (part number) sequence. <br/>
                            2. Convert the GFPS1 sequence information into DNA. <br/>
                            3. DNA is transformed into a plasmid. <br/>
                            4. Transforms the plasmid into a cell, and the cell converts the GFPS1 coding region on the plasmid from DNA to RNA. <br/>
                            5. The cell undergoes further conversion from RNA to protein. <br/>
                            6. The GFPS1 protein with a fluorescent activity is produced. <br/>

                            </p>


                          <figure class="fig_sm_width" >
                            <img class="image_max" src="https://2020.igem.org/wiki/images/0/04/T--Waseda--Pure_System_Processing2.png" alt="cell-GFP">
                          
                          </figure>

                        </v-col>
                        <v-col cols="12" class="row_max-box">
                          <h3>PURE System Processing</h3>
                          

                            <p>
                            1. Converts the GFP sequence into a cell-free optimized GFPS1 (part number) sequence.<br/>
                            2. Converts the GFPS1 sequence information into DNA.<br/>
                            3. Converts DNA to a plasmid form(or amplified through PCR).<br/>
                            4. Protein synthesis Using Recombinant Elements (PURE) system is adopted to convert DNA into RNA.<br/>
                            5. The conversion of RNA to protein takes place in the solutions.<br/>
                            6. GFPS1 protein with a fluorescent activity is produced.<br/>
                            


                            </p>
                          <figure class="fig_sm_width">
                            <img class="image_max" src="https://2020.igem.org/wiki/images/9/95/T--Waseda--3D_Printer_Processing2.png" alt="cell-GFP">
                          
                          </figure>

                        </v-col>
                        
                        <v-col cols="12" class="row_max-box">
                          <h3>3D Printer Processing</h3>
                          

                            <p>
                            1. Convert the GFP code sequence to the 1EMA code sequence, which is a type of GFP which has its three-dimensional structure decoded.<br/>
                            2. Convert that information to pdb Format.<br/>
                            3. Convert pdb Format to STL Format through software such as chimera.<br/>
                            4. Use a 3DPrinter to convert STL Formated data to an object with a three-dimensional structure<br/>
                            5. Color the printed object according to the characteristics of the material (Optional).<br/>
                            </p>
                            <p>
                            
                                We actually processed the information in three ways. These processes are very beautiful.        


                                With Genegram, you can also see how the protein will appear when expressed in cell processing, pure processing, and 3D printer processing. You can see the detailed shape of the protein with 3D printer processing. This allows you to view the protein from various angles in 3D before expressing it for the first time. Also, the parts numbers of the iGEM parts are displayed, so you can easily browse the parts page. 
                                It gives us a feeling of a world where these processes can be performed with a single swipe.
                                                                                      
                            </p>

                            <h3>In the future...</h3>
                            <p>

                                
                                At the moment, the focus is on proteins, but it will be possible to read the sequences of viruses and E.coli and display them.  Then, for example, we will be able to look at a smallpox pathogen, Variola virus, which does not exist today. Observing the Variola virus in such way may lead to many discoveries.  By creatively using Genegram, it may evoke us and trigger many outstanding innovations.
                            
                              
                            </p>
                            <figure class="fig_mid_width" >
                              <img class="image_max" src="https://2020.igem.org/wiki/images/d/de/T--Waseda--yamaAnotherAreafull.png" alt="Logo">
                          
                            </figure>

                        </v-col>
                    </v-row>

                    <!-- <v-template  v-scroll="pushScrollY" id="section_01"><v-col class="last_message"></v-col></v-template> -->
                    <v-template  v-scroll="pushScrollY" id="section_02"><v-col class="last_message"></v-col></v-template>
                    <!-- <v-template  v-scroll="pushScrollY" id="section_03"><v-col class="last_message"></v-col></v-template>
                    <v-template  v-scroll="pushScrollY" id="section_04"><v-col class="last_message"></v-col></v-template> -->

 
                </v-col>
          </v-row>
        </v-container>

    </v-container>
    
  <!-- </v-layout> -->
</template>


<script>

const pageTitle = 'Excellence_in_Another_Area';
const pageDes = "iGEM2020 Team Waseda's" + pageTitle + "page";
const pageUrl = 'https://2020.igem.org/Team:Waseda/Excellence_in_Another_Area';


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
      check: [false, false, ],

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
        'section_01','section_02',
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

