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
                        <a href="Human_Practices#Overview"><v-row :class="{ 'title_text': true, 'title_text_active': check[0] }">Overview</v-row></a>
                        <a href="Human_Practices#RIKOTEN"><v-row :class="{ 'title_text': true, 'title_text_active': check[1] }">RIKOTEN</v-row></a>
                        <!-- <a href="Attributions#VideoTop"><v-row :class="{ 'title_text': true, 'title_text_active': check[2] }">Video</v-row></a>
                        <a href="Attributions#WikiTop"><v-row :class="{ 'title_text': true, 'title_text_active': check[3] }">Wiki</v-row></a>
                        <a href="Attributions#HPTop"><v-row :class="{ 'title_text': true, 'title_text_active': check[4] }">HP</v-row></a>
                        <a href="Attributions#OtherTop"><v-row :class="{ 'title_text': true, 'title_text_active': check[5] }">Other</v-row></a> -->
                        

                    </v-row>
                    </v-col>
                </v-col>

                <v-col class="main_text" cols="12" lg="10" xl="10">
                     <v-row justify="center" text-align="left">
                        <v-row cols="12" class='h1_box'>
                          <v-col class='h1_box_text' id="Overview"> 
                            <h1 class='h1_text' pushElementOffsetTop>Human Practices</h1>
                          </v-col>
                        </v-row>
                    </v-row>
                    
                    <v-row v-scroll="pushScrollY" id="OverviewTop"> 
                      <v-row class="row_max-box">
                        <h2 class="h2_text">Overview</h2>
                      </v-row>
                      <v-row cols="12" sm="12" xs="12" md="12" lg="6" xl="6" class="row_max-box">
                        <v-col >
                          
                          <P class="p_indent">
                            The field "synthetic biology" has various reputations from person to person.  Synthetic biology is a very attractive field for iGEMers, while the general public opinion on genetic engineering using living organisms can be often negative, such as "scary" or "ethical issues''.
                          </p>
                          <p class="p_indent"> 
                            Today, a lot of things related to genetic engineering such as genetically modified crops are surrounding us, but the lack of opportunities to learn about these biotechnologies has led to widespread vague and inaccurate information.                            
                          </P>
                          <p class="p_indent">       
                            It is very dangerous from a safety point of view that people evaluate rapidly developing field "synthetic biology" by sentiment without proper knowledge.  We prefer to discuss the attractive point and safety of synthetic biology through dialogue after communicating proper knowledge.                        
                          </p>
                          <p class="p_indent"> 
                            When we started our project, we wanted to make sure that it was something that would be understood by the general public.  In our survey, we found that cell-free protein synthesis and synthetic biology have come to be linked in recent years.  We thought that we could tell biotechnology properly because a project in a cell-free system wouldn't be linked to bioethics.                           
                          </P>
                          <p class="p_indent">     
                            We conducted further research on this project, which is very attractive to iGEMers.  Then, we decided to summarize our findings and present them.                         
                          </p>
                          
                        </v-col>
                      </v-row>


                      <v-row cols="12" sm="12" xs="12" md="12" lg="6" xl="6" class="row_max-box">
                        <figure class="fig_mid_width" >
                          <img class="image_max" src="https://2020.igem.org/wiki/images/c/c2/T--Waseda--rikotenpicture2.png" alt="Fig. 6.1.1 explanation of the poster">
                        <figcaption class="fig_title">Fig. 6-1-2 explanation of the poster</figcaption>
                        </figure>
                      </v-row>

                      <v-row cols="12" sm="12" xs="12" md="12" lg="6" xl="6" class="row_max-box">
                        <v-col>
                          <p class="p_indent">            
                             In order to explain the results of the survey to a large number of citizens and engage in dialogues, we exhibited at RIKOTEN, the science festival at Waseda University.                  
                             At RIKOTEN, we provided a visual and tactile experience of synthetic biology in addition to lectures on the results of our survey.
                             We did lectures to a total of 272 people and conducted questionnaires before and after the lecture on the cognition of synthetic biology and cell-free system.
                          </P>
                        </v-col>
                      </v-row>

                      <v-row cols="12" sm="12" xs="12" md="12" lg="6" xl="6" class="row_max-box">
                        <figure class="fig_mid_width" >
                          <img class="image_max" src="https://2020.igem.org/wiki/images/3/3c/T--Waseda--HPrikotensummary.png" alt="Fig. 6-1-2 Questionnaire summary ">
                        <figcaption class="fig_title">Fig. 6-1-2 Questionnaire summary </figcaption>
                        </figure>
                      </v-row>

                      
                      <v-row cols="12" sm="12" xs="12" md="12" lg="6" xl="6" class="row_max-box">
                        <v-col>
                          <p class="p_indent">    
                            Before the lecture, only 23% of the responders knew synthetic biology, but after the lecture, 93% of them said they came to be interested in it.  As for the cell-free system, 89% of the responders didn't know it before the lecture, but 27% of them understood completely, 64% of them almost understood that we succeeded in getting a total of 91%  to understand it.
                            After the lecture, those with vague concerns got to have clear opinions compared to before.
                          
                          </p>
                        </v-col>
                      </v-row>


                      <v-row cols="12" sm="12" xs="12" md="12" lg="6" xl="6" class="row_max-box">
                        <v-col>     
                          <p class="p_indent">    
                            Next, based on the evaluations we received from general public, we started basic experiments related to the project.  This year, due to the strong influence of COVID-19, we decided to focus on cell-free projects.                          
                          </p>
                                                   
                          
                          <p class="p_indent" >       
                            The relevance and scientific value of the project were established through expert opinions and discussions at the Spring Japan Meetup. In addition, the project was designed with the utmost consideration for safety under the supervision of the PI, Professor Daisuke Kiga, who is an expert in synthetic biology.                       
                          </p>
                          <p class="p_indent" id="RIKOTEN">
                            Since the project began, we have continued to connect with the public.
                            At times, as educators, we have taught high school students what synthetic biology is. (Go to the Education page.)
                            At other times, as an entrepreneur, I carefully researched and brushed up on real-world problems, discussing them with people and experts in the field who were facing real-world problems. (Go to Entrepreneurship page. )
                                                      
                          </p>
                          
                        </v-col>
                      </v-row>

                    </v-row>

                    
                    <v-row v-scroll="pushScrollY" id="RIKOTENTop"> 
                      <v-row class="row_max-box">
                        <h2 class="h2_text">RIKOTEN</h2>
                      </v-row>
                      
                      <v-row cols="12" sm="12" xs="12" md="12" lg="6" xl="6" class="row_max-box">
                        <v-col>
                          <h3>About</h3>
                          <p class="p_indent">     
                            RIKOTEN, sponsored by Faculty of Science and Engineering Waseda Univ., is one of the highly regarded school festival in Tokyo.  Actually, RIKOTEN is awarded a 4th prize in “School festival Grand Prix 2019”.  RIKOTEN is a kind of science festival that allow visitors to experience science through hands -on activities, and approximately 20000 people visit every year because of the quality.                        
                          </P>
                          <p class="p_indent">                              
                          </p>
                        </v-col>
                      </v-row>

                      <v-row cols="12" sm="12" xs="12" md="12" lg="6" xl="6" class="row_max-box">
                        <figure class="fig_full_width" >
                          <img class="image_max" src="https://2020.igem.org/wiki/images/c/cb/T--Waseda--rikotenpicture1.png" alt="Fig. 6-1-1 Image of RIKOTEN 2019">
                        <figcaption class="fig_title">Fig 6-2-1 Image of RIKOTEN 2019</figcaption>
                        </figure>
                      </v-row>
                      <v-row cols="12" sm="12" xs="12" md="12" lg="6" xl="6" class="row_max-box">
                        <v-col>
                          <p class="p_indent">    
                            We, iGEM Waseda 2020 team, exhibited in RIKOTEN to promote synthetic biology and check the level of general public awareness of synthetic biology.  Specifically, we did the following.       
                          </P>
                          <p>     
                            1.	Posters and explanation about our research <br />
                            2. Synthetic biology explanatory video broadcast <br />
                            3.	Exploring inside cells using VR headset<br />
                            4.	Display of GFP (in tube) created in cell-free system <br />
                            5.	Display of GFP model made with a 3D printer <br />
                            6.	Questionnaires about synthetic biology and cell-free system <br />
                         
                          </p>
                        </v-col>
                      </v-row>

                      <v-row cols="12" sm="12" xs="12" md="12" lg="6" xl="6" class="row_max-box">
                        <v-col>
                          <h3>1. Posters and explanation about our research</h3>
                          <p class="p_indent">   
                            We explained about what synthetic biology is and what is done in the field, using our research as an example. We received favorable reviews on how we taught each person individually and carefully.                         
                          </P>
                        </v-col>
                      </v-row>

                      <v-row cols="12" sm="12" xs="12" md="12" lg="6" xl="6" class="row_max-box">
                        <figure class="fig_full_width" >
                          <img class="image_max" src="https://2020.igem.org/wiki/images/c/c2/T--Waseda--rikotenpicture2.png" alt="Logo">
                        <figcaption class="fig_title">Fig. 6-2-2 explanation of the poster</figcaption>
                        </figure>
                      </v-row>
                      
                  

                      <v-row cols="12" sm="12" xs="12" md="12" lg="6" xl="6" class="row_max-box">
                        <v-col>
                          <h3>2. Synthetic biology explanatory video broadcast</h3>
                          <p class="p_indent">     
                            We showed Synthetic biology explanation video and distributed materials.                        
                            In that these materials, we worked to properly describe the aspects of expectations and anxieties about synthetic biology.
                          </P>
                          <p class="p_indent">                              
                          </p>
                        </v-col>
                      </v-row>
                      <v-row cols="12" sm="12" xs="12" md="12" lg="6" xl="6" class="row_max-box">
                        <v-col>
                          <h3>3. Exploring inside cells using VR headset</h3>
                          <p class="p_indent">                   
                            Using VR headset, we explored as if we were actually inside the cell.  This innovative experience gave a positive impression to not only those who were familiar with the scheme in the cell but also without background knowledge like children.         
                          </P>
                          <p class="p_indent">      
                          </p>
                        </v-col>
                      </v-row>

                      <v-row cols="12" sm="12" xs="12" md="12" lg="6" xl="6" class="row_max-box">
                        <figure class="fig_mid_width" >
                          <img class="image_max" src="https://2020.igem.org/wiki/images/a/ac/T--Waseda--rikotenpicture5.png" alt="Logo">
                        <figcaption class="fig_title">Fig.1.3  exploring inside cells using VR headsst</figcaption>
                        </figure>
                      </v-row>

                      <v-row cols="12" sm="12" xs="12" md="12" lg="6" xl="6" class="row_max-box">
                        <v-col>
                          <h3>4. Display of GFP (in tube) created in cell-free system</h3>
                          <p class="p_indent">  
                            Proteins made in a cell-free system do not use genetically modified cells and can be use outside of the lab.
                            Therefore, we created GFP in cell-free and showed the real-protein GFP, then were able to deepen the understanding of the general public,                           
                          </P>
                        </v-col>
                      </v-row>
                      <v-row cols="12" sm="12" xs="12" md="12" lg="6" xl="6" class="row_max-box">
                        <v-col>
                          <h3>5. Display of GFP model made with a 3D printer</h3>
                          <p class="p_indent">                   
                            We displayed a GFP model made by a 3D printer and coated with fluorescent paint that reacts to a specific wavelength (the fluorescence wavelength of GFP). This GFP model was built from scratch for the exhibition.         
                            (This work has evolved more, Go to Another Area page)
                          </P>
                        </v-col>
                      </v-row>
                      <v-row cols="12" sm="12" xs="12" md="12" lg="6" xl="6" class="row_max-box">
                        <v-col>
                          <h3>6. Questionnaires about synthetic biology and cell-free system</h3>
                          <p class="p_indent">                        
                            We conducted two questionnaires about synthetic biology before and after experiencing our exhibition.  In the questionnaire asked before the exhibition, we asked about their awareness of synthetic biology and cell-free system. The survey results revealed the following.     
                          </P>
                        </v-col>
                      </v-row>

                      <v-row cols="12" sm="12" xs="12" md="12" lg="6" xl="6" class="row_max-box">
                        <figure class="fig_full_width" >
                          <img class="image_max" src="https://2020.igem.org/wiki/images/c/ce/T--Waseda--HPQuestionnairea1.png" alt="Fig 6-2-4 the first questionnaire before lecture">
                        <figcaption class="fig_title">Fig 6-2-4 the questionnaire before lecture</figcaption>
                        </figure>
                      </v-row>

                  

                      <v-row cols="12" sm="12" xs="12" md="12" lg="6" xl="6" class="row_max-box">
                        <v-col>
                          
                          <p class="p_indent">                              
                            About 80% of respondents said they had never heard of synthetic biology and about 90% had 
                            never heard of cell-free systems. In other words, these were found to be a quite unrecognized field to the the general public..
                            In the questionnaire which was asked after our exhibition, we asked about the impression of synthetic biology and understanding of cell-free system. The survey results revealed the following. 

                          </p>
                        </v-col>
                      </v-row>

                      <v-row cols="12" sm="12" xs="12" md="12" lg="6" xl="6" class="row_max-box">
                        <figure class="fig_full_width" >
                          <img class="image_max" src="https://2020.igem.org/wiki/images/7/73/T--Waseda--HPQuestionnairea2.png" alt="Fig 6-2-5 the questionnaire after lecture">
                        <figcaption class="fig_title">Fig 6-2-5 the questionnaire after lecture</figcaption>
                        </figure>
                      </v-row>


                      <v-row cols="12" sm="12" xs="12" md="12" lg="6" xl="6" class="row_max-box">
                        <v-col>
                          <p class="p_indent">   
                            The survey results demonstrate that we were successful in attracting people interested in synthetic biology.  As for the cell-free system, 27% of the respondents said they completely understood it, 64% said they almost understood it.  We are able to raise the understanding of cell-free system, a total of 90%.  Spreading the correct knowledge of synthetic biology leads to better understanding and approval by the general public. Therefore, by teaching factual information on synthetic biology, those who visited our exhibition were able to achieve a positive perception of the safety of synthetic biology.                         

                            
                          </P>
                        </v-col>
                      </v-row>




<v-row cols="12" sm="12" xs="12" md="12" lg="6" xl="6" class="row_max-box">
<h2>Integreate Human Practice is <nuxt-link to='Entrepreneurship'>GO to Entrepreneurship page !!!! </nuxt-link></h2>
                      </v-row>

                      







                      <!-- <v-row cols="12" sm="12" xs="12" md="12" lg="6" xl="6" class="row_max-box">
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
                      </v-row> -->
                      
                    </v-row>

                
                <v-template  v-scroll="pushScrollY" id="section_06"><v-col class="last_message"></v-col></v-template>
                    

                </v-col>
            </v-row>
        </v-container>

    </v-container>
    
  <!-- </v-layout> -->
</template>
<script>

const pageTitle = 'Human_Practices';
const pageDes = "iGEM2020 Team Waseda's" + pageTitle + "page";
const pageUrl = 'https://2020.igem.org/Team:Waseda/Human_Practices';


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
      check: [false, false, false],

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
        'Overview', 'RIKOTEN', 'section_06'
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
    background-image: url("https://2020.igem.org/wiki/images/1/18/T--Waseda--MakiBlack.png");
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

