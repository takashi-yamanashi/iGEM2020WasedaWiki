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
                        <a href="Implementation#Intro"><v-row :class="{ 'title_text': true, 'title_text_active': check[0] }">Intorduction</v-row></a>
                        <a href="Implementation#Learn"><v-row :class="{ 'title_text': true, 'title_text_active': check[1] }">Learn</v-row></a>
                        <a href="Implementation#bs"><v-row :class="{ 'title_text': true, 'title_text_active': check[2] }">Brainstorming</v-row></a>
                        <a href="Implementation#Interview"><v-row :class="{ 'title_text': true, 'title_text_active': check[3] }">Interview</v-row></a>
                        <!-- <a href="Attributions#HPTop"><v-row :class="{ 'title_text': true, 'title_text_active': check[4] }">HP</v-row></a>
                        <a href="Attributions#OtherTop"><v-row :class="{ 'title_text': true, 'title_text_active': check[5] }">Other</v-row></a>
                         -->

                    </v-row>
                    </v-col>
                </v-col>


                <v-col class="main_text" cols="12" lg="10" xl="10">
                     <v-row justify="center" text-align="left">
                        <v-row cols="12" class='h1_box'>
                          <v-col class='h1_box_text' id="Intro"> 
                            <h1 class='h1_text' pushElementOffsetTop>Implementation</h1>
                          </v-col>
                        </v-row>
                    </v-row>
                    
                    <v-row v-scroll="pushScrollY"> 

    

                     <v-row cols="12" sm="12" xs="12" md="12" lg="7" xl="7" class="row_max-box" id="section_01">
                        <v-col>
                          <h3>Intorduction</h3>
                          <p class="p_indent">  
                            Scientists in Synthetic biology always need to communicate with society.
                            We thought about how our project could contribute to society.
                          </P>
                          <p class="p_indent" id="Learn"> 
                            First, We interviewed citizens and experts to verify the validity, safety, and ethics of the project. As a results, we confilmed the validity, safety, and ethics of the project. ( Go to Human Practice page)
                            We decided to create our business model because we were very interested in the social implementation of our project.  It's not a good idea to implement your research project directly into real-world. It's important to adapt the implementation to the real-world needs.
                             
                          </p>
                        </v-col>
                      </v-row>


                    <v-row cols="12" sm="12" xs="12" md="12" lg="7" xl="7" class="row_max-box" id="section_02">
                        <v-col>
                          <h3>Learn business model</h3>
                          <p class="p_indent">  
                            To learn the basics of business model, first, we went to interview Mr. Watanabe, who is the representative director of Maximize, inc. and is an expert in business model creation, we learned the basics of business model creation from them. The important things of the business model are 4 points: The What, Why, How and Who.
                            As well as planning for scientific research, business model creation should learn from previous success.  From Mr. Watanabe’s point of view, a business has a higher probability of success when two of a four points are changed from the existing business success. The kind of change is called business model innovation.
                          </P>
                        </v-col>
                      </v-row>

                      <v-row cols="12" sm="12" xs="12" md="12" lg="7" xl="7" class="row_max-box" id="bs"> 
                        <figure class="fig_full_width" >
                          <img class="image_max" src="https://2020.igem.org/wiki/images/c/c7/T--Waseda--InpriFig1.png" alt="Fig. 6-5-1 The important things of the business model are 4 points">
                        <figcaption class="fig_title">Fig. 6-5-1 The important things of the business model are 4 points</figcaption>
                        </figure>
                      </v-row>




                    <v-row cols="12" sm="12" xs="12" md="12" lg="7" xl="7" class="row_max-box" id="section_03">
                        <v-col>
                          <h3>Brainstorming</h3>
                          <p class="p_indent">  
                            
                          
                          </P>
                          <p class="p_indent"> 
                            After the interview, we brainstormed to create a business model based on “SAMURAI” System (GO to Modelling page)
                          </p>
                          <p class="p_indent"> 
                            The smell of monoterpenes has the ability to repellents insects. These are natural and are less likely to cause allergies than currently the non-natural products in use. People living with animals and families with small children have needed our products based on natural products. 
                            
                            Monoterpene synthesis can take advantage of cell-free system. Monoterpenes are toxic in the cell and difficult to synthesize on a large scale. However, the cell-free system avoids toxicity and allows the mass synthesis of monoterpenes. (Go to monoterpen page)
                          </p>
                          <p class="p_indent"> 
                            These are the "How" and "Who" of the four points of the business model. We have also made strong changes in the "What".
                            
                            We would like to use the advantage of the safe biotechnological properties of the cell-free system.

                            We thought about producing the insect repellent of monoterpene in real-time, when we want to use it. The effectiveness of the insect repellent is reduced due to evaporation, using a monoterpene that has already been created. By producing it in real-time, contrary, the effect of the insect repellent could keep constant and for a longer time.
                            To implement those features, we use the SAMURAI System using the mulit IFFL system.
                             
                          </p>
                        </v-col>
                      </v-row>

                      <v-row cols="12" sm="12" xs="12" md="12" lg="7" xl="7" class="row_max-box">
                        <figure class="fig_full_width" >
                          <img class="image_max" src="https://2020.igem.org/wiki/images/4/44/T--Waseda--InpriFig2.png" alt="Fig. 6-5-2 Our business model concept">
                        <figcaption class="fig_title">Our business model concept</figcaption>
                        </figure>
                      </v-row>

                      <v-row cols="12" sm="12" xs="12" md="12" lg="7" xl="7" class="row_max-box">

                        <v-col>
                          <p class="p_indent" id="Interview">    
                            We would like to challenge the already established insect repellent market by updating the "How" and "Who" and "What" of existing better business model.                        
                          </P>
                        </v-col>
                      </v-row>


                      <v-row cols="12" sm="12" xs="12" md="12" lg="7" xl="7" class="row_max-box" id="section_04">

                        <v-col>
                          <h3>Interview</h3>
                          <p class="p_indent">   
                            　The most important thing about business success is matching the business model you create with the real-world issues.
                              Many early business models are unsuccessful because they do not match the real-world needs.
                              In order to improve the business model, it is important to repeat steps to verify the real-world needs and restructure the business model.
                          </P>
                          <p class="p_indent">                              
                          </p>
                        </v-col>
                      </v-row>

                      <v-row cols="12" sm="12" xs="12" md="12" lg="7" xl="7" class="row_max-box">
                        <figure class="fig_full_width" >
                          <img class="image_max" src="https://2020.igem.org/wiki/images/2/28/T--Waseda--InpriFig3.png" alt="Fig. 6-5-3 Hypothesis-Verification Step">
                        <figcaption class="fig_title">Fig. 6-5-3 Hypothesis-Verification Step</figcaption>
                        </figure>
                      </v-row>      

                                        



                      <v-row cols="12" sm="12" xs="12" md="12" lg="7" xl="7" class="row_max-box">


                        <v-col>
                          <p class="p_indent">  
                            We interviewed a wide range of people, including friends around us, business model experts, with allergies, and pet owners who could be customers. 
                            By interviewing many people, we were able to examine the business model from a variety of perspectives.
                            Then, our business model was more improved while addressing the challenges that emerged from the interview. 
                          </P>                      
                        </v-col>
                      </v-row>

                      <v-row cols="12" sm="12" xs="12" md="12" lg="7" xl="7" class="row_max-box">
                        <figure class="fig_full_width" >
                          <img class="image_max" src="https://2020.igem.org/wiki/images/8/81/T--Waseda--InpriFig4.png" alt="Fig. 6-5-4 online interview image">
                        <figcaption class="fig_title">Fig. 6-5-4 online interview image</figcaption>
                        </figure>
                      </v-row>    


                      <v-row cols="12" sm="12" xs="12" md="12" lg="7" xl="7" class="row_max-box">

                        <v-col>
                          <p class="p_indent"> 
                            Through this verification, we were able to confirm that there is a definite need for our business model. (Fig. 6-5-5 )                                                      
                          </P>
                        </v-col>
                      </v-row>



                      <v-row cols="12" sm="12" xs="12" md="12" lg="7" xl="7" class="row_max-box">
                        <figure class="fig_full_width" >
                          <img class="image_max" src="https://2020.igem.org/wiki/images/5/5d/T--Waseda--InpriFig5.png" alt="Fig. 6-5-5 Brushed business model">
                        <figcaption class="fig_title">Fig. 6-5-5 Brushed business model</figcaption>
                        </figure>
                      </v-row>                  
                      
                      
                      <v-row cols="12" sm="12" xs="12" md="12" lg="7" xl="7" class="row_max-box">

                        <v-col>

                          <p class="p_indent">  
                            But, surprisingly, in those interviews, we found that there was another great need.
                            People who are concerned about whether or not they contain the substance that causes allergies are careful to determine whether or not they contain the source of their allergies.
                          </p>
                          <p class="p_indent">  
                            We got the inspiration for detecting allergens and pivoted to a business model for substance detection using the cell-free system. (Go to integrate)
                            
                          </p>
                        </v-col>
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
export default {
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
        "section_01","section_02","section_03","section_04", 'section_06'
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

