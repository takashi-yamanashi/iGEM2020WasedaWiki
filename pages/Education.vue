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
                        <a href="Education#section_01"><v-row :class="{ 'title_text': true, 'title_text_active': check[0] }">Overview</v-row></a>
                        <a href="Education#section_02"><v-row :class="{ 'title_text': true, 'title_text_active': check[1] }">Motivation</v-row></a>
                        <a href="Education#section_03"><v-row :class="{ 'title_text': true, 'title_text_active': check[2] }">Method</v-row></a>
                        <!-- <a href="Education#section_04"><v-row :class="{ 'title_text': true, 'title_text_active': check[3] }">Wiki</v-row></a>
                        <a href="Education#section_05"><v-row :class="{ 'title_text': true, 'title_text_active': check[4] }">HP</v-row></a>
                        <a href="Education#section_06"><v-row :class="{ 'title_text': true, 'title_text_active': check[5] }">Other</v-row></a>
                         -->

                    </v-row>
                    </v-col>
                </v-col>



                <v-col class="main_text" cols="12" lg="10" xl="10">
                  
                    <v-row justify="center" text-align="left">
                        <v-row cols="12" class='h1_box'>
                          <v-col class='h1_box_text'> 
                            <h1 class='h1_text' pushElementOffsetTop>Education</h1>
                          </v-col>
                        </v-row>
                    </v-row>
                    
                    <v-row v-scroll="pushScrollY" id="section_01"> 
                      <v-row class="row_max-box">
                        <h2 class="h2_text">Overview</h2>
                      </v-row>
                      </v-row>

                      <v-row cols="12" sm="12" xs="12" md="12" lg="7" xl="7" class="row_max-box">

                        <v-col>
                          
                          <p class="p_indent"> 
                            At initial stage of our iGEM activity, we realized that not only those with little scientific knowledge but also students who aspired to be scientists didn’t recognize synthetic biology.  As iGEMers, who mainly work with synthetic biology, we felt the need to spread the knowledge of its potential to produce world-changing results in both engineering and physiological sciences. This year, we’re attracting attention with an interesting story whose subject is gene circuit. We tried to spread toggle switch, which was core of the circuit and starting point of synthetic biology.                           
                          </P>
                         
                        </v-col>
                      </v-row>

                      <v-row cols="12" sm="12" xs="12" md="12" lg="7" xl="7" class="row_max-box">
                        <figure class="fig_mid_width" >
                          <img class="image_max" src="https://2020.igem.org/wiki/images/2/21/T--Waseda--Education_Application_student.png" alt="Fig. 6-3-1 Education Application Student">
                        <figcaption class="fig_title">Fig. 6-3-1 Education Application Student</figcaption>
                        </figure>
                      </v-row>

                      <v-row cols="12" sm="12" xs="12" md="12" lg="7" xl="7" class="row_max-box">

                        <v-col>
                          
                          <p class="p_indent">      
                            We decided to develop a smartphone application (fig. 6-3-1) for better understanding of mathematical modeling of synthetic biology for the synthetic biology beginners. Mathematical modeling is fundamental in synthetic biology, for engineering principle requires such modeling.  We fortunately had a chance to lecture Waseda University High School students. The lecture was held through a widely used video communication service, zoom.                        
                          </p>
                        </v-col>
                      </v-row>
                
                
                <v-row> 
                      <v-row class="row_max-box" id="section_02">
                        <h2 class="h2_text">Motivation</h2>
                      </v-row>
                      </v-row>

                      <v-row cols="12" sm="12" xs="12" md="12" lg="7" xl="7" class="row_max-box">

                        <v-col>
                          
                          <p class="p_indent">  
                            In Japanese curricula, we rarely use mathematical methods in high school biology.  Therefore, biology using mathematical models, including synthetic biology is unfortunately not known well.  However, we thought that we might be able to teach synthetic biology intuitively and clearly to high school students depending on our ingenuity. Hence, we lectured synthetic biology to students at Waseda University high school.                            
                          </p>
                        </v-col>
                      </v-row>
                
                
                
                <v-row id="section_03"> 
                      <v-row class="row_max-box">
                        <h2 class="h2_text">Method</h2>
                      </v-row>
                      </v-row>

                      <v-row cols="12" sm="12" xs="12" md="12" lg="7" xl="7" class="row_max-box">

                        <v-col>
                          <h3>-About the lecture-</h3>
                          <p class="p_indent">  
                            One of our main goals was to promote synthetic biology, so we needed an easy to understand way to teach synthetic biology. We designed a curriculum for students who aren't familiar with synthetic biology to understand intuitively. Specifically, we used a lot of visual expressions such as pictures, diagrams and tables in lecture slides fig 6-3-2                          
                          </P>
                          
                        </v-col>
                      </v-row>

                      <v-row cols="12" sm="12" xs="12" md="12" lg="7" xl="7" class="row_max-box">
                    

  

                        <v-row class="fig_full_width">
                        <object data="https://2020.igem.org/wiki/images/b/be/T--Waseda--Slide_material_for_education.pdf" type="application/pdf" width="100%" height="500px">
                          <p><b>Fig 6-3-2 lecture slides</b>: <a href="pdf.pdf">Download</a>.</p>
                        </object>
                        </v-row>

                      </v-row>



                      <v-row cols="12" sm="12" xs="12" md="12" lg="7" xl="7" class="row_max-box">

                        <v-col>
                          <p class="p_indent"> 
                            Also, we developed an easy to use application, with which students experience hands-on modeling. In this application, students can easily understand the mechanism of toggle switch instinctively.                            
                          </p>
                        </v-col>
                      </v-row>





                      <v-row cols="12" sm="12" xs="12" md="12" lg="7" xl="7" class="row_max-box">
                        <figure class="fig_full_width" >
                          <img class="image_max" src="https://2020.igem.org/wiki/images/f/f0/T--Waseda--Education_Application_Explanation.png" alt="fig 6-3-3 toggle switch simulator">
                        <figcaption class="fig_title">fig 6-3-3 toggle switch simulator</figcaption>
                        </figure>
                      </v-row>


                    <v-row cols="12" sm="12" xs="12" md="12" lg="7" xl="7" class="row_max-box">
                        <v-row>
                          <video width="100%" height="auto" controls>
                            <source src="https://2020.igem.org/wiki/images/8/8a/T--Waseda--Education_application_usage_example.mp4" type="video/mp4">
                          Your browser does not support the video tag.
                          </video>
                        </v-row>
                    </v-row>

                    <v-row cols="12" sm="12" xs="12" md="12" lg="7" xl="7" class="row_max-box">

                        <v-col>
                          
                          <p class="p_indent"> 
                            If you want to try this, you can find it <a class="link_style"  href="https://tomoino.github.io/education-tool/">Here</a> !                             
                          </p>
                        </v-col>
                      </v-row>



                      <v-row cols="12" sm="12" xs="12" md="12" lg="7" xl="7" class="row_max-box">

                        <v-col>
                          
                          <p class="p_indent">  
                            The application shows how genetic circuit works, especially about toggle switch. Rates of change in repressor concentrations move according to parameter values(⑤).  Resulting in visual information such as graph or color transitions (③, ④, ⑥).  Each student can move the parameter values(⑤), watching the feedback, and learn how each parameter affects the result.                          
                          </P>
                          <p class="p_indent">       
                            We also thought that education should be equal.  In recent years, educational gaps have been widening. Especially, the digital divide has become a growing problem, especially with the nowadays increase in home learning due to COVID-19. We discussed to aim for a better way to implement broad and equal education. As an example, we made sure that the application we developed was available in everyone's smartphone. This allowed students who didn't have a computer to use the application.                        
                          </p>
                        </v-col>
                      </v-row>




                      <v-row cols="12" sm="12" xs="12" md="12" lg="7" xl="7" class="row_max-box">

                        <v-col>
                          
                          <p class="p_indent"> 
                            We also carefully make allowance for the teaching format. Conscious of current issues like COVID-19, we explored online education, using ZOOM to connect with students in real time. In addition, we made it possible for students to work in small groups so that they could actively respond to each other. By assigning one iGEMers for every four students, we made it easier for them to ask questions to the iGEMer. We got several positive comments from the students at this time such as, "I felt fresh to understand organisms using mathematical models" or "I knew the usefulness of mathematical models in biology."                           
                          </P>
                 
                        </v-col>
                      </v-row>




                      <v-row cols="12" sm="12" xs="12" md="12" lg="7" xl="7" class="row_max-box">

                        <v-col>
                          <h3>-other activities-</h3>
                          <p class="p_indent">    
                            To advance this project, we consulted with a number of experts, including our PI Dr. Kiga. 
                            After the lecture to high school students, we further developed our activities based on the experience and the application we made.
                        
                          </P>
                          <p class="p_indent">     
                            The tools we used in our lecture such as application and lecture slides were also used in synthetic biology classes at university.  
                            In addition, we held many seminars and workshops ourselves, as well as dialogues with experts. 
                            In online meetups with Japanese iGEMers, we introduced our application and encouraged them to use it.
                                                    
                          </p>
                        </v-col>
                      </v-row>


                      <v-row cols="12" sm="12" xs="12" md="12" lg="7" xl="7" class="row_max-box">

                        <v-col>
                          
                          <p class="p_indent">  
                            We also worked hard to get the word out about iGEM. In japan, the only team that has existed so far is the team consisting of international students. Therefore, we explained iGEM to the aforementioned Waseda high school, as well as other schools like Waseda Honjo, Waseda Saga. As a result, we made a contribution to establish a high school team for coming year.                          
                          </P>
                          <p class="p_indent">                              
                            It is important to survey past iGEM projects before starting a new team or establishing a new project. We developed tools to look for past projects, and we taught iGEMers and future iGEMers how to use them.<br />
                            Besides, throughout our iGEM activities, we have had many opportunities to explain iGEM to venture capitalists and business courses.

                          </p>

                          <p class="p_indent">  
                            Interacting with many people and developing knowledge with  each other is very important. Accordingly, we have been working with Niwa Ryo, our iGEM ambassador, to organize irregular reading circles of the iGEM wiki. There, iGEMers and future iGEMers from all over Japan get together to read iGEM wiki. We got lecture how to read iGEM wiki and what is the main point of wiki, conducting discussions to exchange ideas with many of our colleagues to deepen our knowledge.                          
                          </P>
                        </v-col>
                      </v-row>



                      <v-row cols="12" sm="12" xs="12" md="12" lg="7" xl="7" class="row_max-box">

                        <v-col>
                          <h3>Reference</h3>
                          <p>
                            (1) Gardner, T. et al. (2000). Construction of a genetic toggle switch in Escherichia coli. <i>Nature</i>, 403(6767), 339-342.<br />
                            (2) Ishimatsu, K. et al.  (2014). General applicability of synthetic gene-overexpression for cell-type ratio control via reprogramming. <i>ACS synthetic biology</i>, 3(9), 638-644.
  
                            
                          </P>
                       
                        </v-col>
                      </v-row>




                    <!-- <v-template  v-scroll="pushScrollY" id="section_01"><v-col class="last_message"></v-col></v-template>
                    <v-template  v-scroll="pushScrollY" id="section_02"><v-col class="last_message"></v-col></v-template>
                    <v-template  v-scroll="pushScrollY" id="section_03"><v-col class="last_message"></v-col></v-template> -->
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

