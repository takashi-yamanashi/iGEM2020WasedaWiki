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
                        <a href="Collaborations#Qdai"><v-row :class="{ 'title_text': true, 'title_text_active': check[0] }">Qai</v-row></a>
                        <a href="Collaborations#japansummermeetup"><v-row :class="{ 'title_text': true, 'title_text_active': check[1] }"> Summer Meetup</v-row></a>
                        <a href="Collaborations#japanspringmeetup"><v-row :class="{ 'title_text': true, 'title_text_active': check[2] }"> Spring Meetup</v-row></a>
                        <!-- <v-row :class="{ 'title_text': true, 'title_text_active': check[3] }"> Top2 4 </v-row>
                        <v-row :class="{ 'title_text': true, 'title_text_active': check[4] }"> Title1 5 </v-row> -->
                        

                    </v-row>
                    </v-col>
                </v-col>

                <v-col class="main_text" cols="12" lg="10" xl="10">
                    <v-row justify="center" text-align="left">
                        <v-row cols="12" class='h1_box'>
                          <v-col class='h1_box_text' id="Qdai"> 
                            <h1 class='h1_text' pushElementOffsetTop>Collaborations</h1>
                          </v-col>
                        </v-row>
                    </v-row>
                    
                    <v-row v-scroll="pushScrollY" id="Qdaitop"> 
                      <v-row class="row_max-box">
                        <h2 class="h2_text">Qdai</h2>
                      </v-row>
                      <v-row cols="12" sm="12" xs="12" md="12" lg="6" xl="6" class="row_max-box">
                        <v-col >
                          <h3>About</h3>
                            <P class="p_indent">
                              We collaborated with the Qdai Team about the modeling of the project. 
                              The same style of project modeling could us to easily connect with each other’s projects. 
                              Based on our knowledge, we cooperated with Qdai Team on the modeling of their project.
                              They gave us deep insight into our models from a wet aspect and could us to create a more powerful model.
                            </p>
                          
                        </v-col>
                        <v-col cols="12" sm="12" xs="12" md="12" lg="6" xl="6">
                          <figure>
                            <img class="image_max" src="https://2020.igem.org/wiki/images/6/65/T--Waseda--QdaiWasedaLogo.png">
                            <figcaption class="fig_title">Fig 7.4  Qdai-Waseda Collabration Logo</figcaption>
                          </figure>
                        </v-col>
                      </v-row>
                      <v-row class="row_max-box">
                        <h3>Why did we decide to do this collaboration?</h3>
                        
                          <P class="p_indent">
                            We had much knowledge of modeling of quorum sensing system and creating gene circuits.
                            However, they lacked knowledge of how to model projects based on wet systems created for real-world problems. 
                            In synthetic biology, modeling is very important for standardization. 
                            A good modeled project is able to be easily connected to other projects.
                          </P>
                          <p class="p_indent">  
                            Our goal was to solve a complex problem, and we needed to be able to connect other projects to our project.
                            That’s why we decided to work with the Qdai team, who have a deep knowledge of wet lab and a strong focus on real-world problems.
                          </p>
                      
                      </v-row>
                      <v-row class="row_max-box" cols="12" sm="12" xs="12" md="12" lg="6" xl="6">
                        <v-row  class="row_max-box">
                          <v-col>
                            <img class="image_max" src="https://2020.igem.org/wiki/images/f/f4/T--Waseda--QdaiWasedaAllMember.png">
                          </v-col>
                          <v-col cols="12" sm="12" xs="12" md="12" lg="6" xl="6">
                            <h3>How did we help each other?</h3>
                            <P class="p_indent"> 
                              We had a better understanding of each other’s projects through chatting and online meeting.
                              We learned a detailed understanding of the Qdai Team’s project, “a phosphoric acid storage system”.
                              Then, we proposed the modeling of the system. We also discussed other collaborate between our projects.
                              </p>
                          </v-col>
                        </v-row>
                      </v-row>
                      <v-row  fluid ma-0 pa-0 class="row_max-box" id="japansummermeetup">
                        <v-col class="row_max-box">
                          <h3>What did we learn from this collaboration?</h3>
                            <p class="p_indent">
                              Through this collaboration, we have become very aware of the scalability of our model.
                              We also learned about the difficulties of applying our model to the project based on wet systems, and the importance of collaboration with other teams. 
                              Connecting our projects with the project based on wet systems for solving real-world problems has a big impact. 
                              The first step in this process, it was very successful to collaborate with the Qdai Team.
                            </p>
                        </v-col>
              
                      </v-row>
                     

                    </v-row>
                    <v-row v-scroll="pushScrollY" id="section_02" > 
                      <v-row class="row_max-box">
                        <h2 class="h2_text">Japan Summer Meetup</h2>
                      </v-row>
                      <v-row class="row_max-box">
                        <v-col cols="12" sm="12" xs="12" md="12" lg="6" xl="6" >
                          <h3>About</h3>
                            <p class="p_indent">
                              We hosted the <a class="link_style" href="https://2020.igem.org/Calendar/Events#Japan_Summer_Meetup"> "iGEM Japan Summer Meetup"</a> online on 29th August. 
   
                              We invited other iGEM teams in Japan (
                                <a class="link_style" href="https://2020.igem.org/Team:Botchan_Lab_Tokyo/Collaborations"> Botchan lab</a> ,                                
                                <a class="link_style" href="https://2020.igem.org/Team:Qdai/Collaborations"> Qdai</a>,
                                <a class="link_style" href="https://2020.igem.org/Team:KAIT_Japan/Collaborations"> KAIT</a>
                                
                                ) to join us and work with them to organize the event.  
                            </p>
                          
                        </v-col>
                        <v-col cols="12" sm="12" xs="12" md="12" lg="6" xl="6">
                          <img src="https://2020.igem.org/wiki/images/b/b3/T--Waseda--JapanteamAllLLogo.png">
                        </v-col>
                      </v-row>
                      <v-row class="row_max-box">

                        <v-col>
                          <h3>How did we help each other?</h3>
                          <p class="p_indent">
                            This event had three major outcomes. Firstly, the Japanese iGEM team presented their projects for the year and discussed them with each other. We were able to brush up on our projects by supplementing our previous perspectives with perspectives that the teams had not had before.  
                          </P>
                          <p class="p_indent">  
                            Secondly, in order to expand the circle of discussion on synthetic biology in Japan, not only the four teams participating in iGEM2020, but also the four teams that will be participating next year (Tokyo University, Gunma University, Gifu University, Kyoto University ) also gave a short presentation (on the prospects for next year's project) and had a discussion with us. We were inspired by the interesting project ideas of the teams that will participate in next year's conference.  
                          </p>
                          <p class="p_indent">  
                            Finnaly, we invited an expert in entrepreneurship to discuss our projects from an entrepreneurial perspective while learning what it takes to start a business. As a result, we was able to know what kind of things are required in the real-world.                             
                          </p>
                        </v-col>
                      </v-row>

                      <v-row  fluid ma-0 pa-0 class="row_max-box">
                        <v-col class="row_max-box">
                          <h3>What did we learn from this collaboration?</h3>
                            <p class="p_indent"> 
                              The meetup gave us an opportunity to get to know each other's teams and collaborate with each other. With the participation of so many new iGEMers, we could feel the expansion of the Japanese community.  We hope to continue this great meetup event in the coming year and beyond. 
                            </p>
                        </v-col>
              
                      </v-row>
                      <v-row  fluid ma-0 pa-0 class="row_max-box">
                        <figure class="fig_mid_width" >
                            <img class="image_max" src="https://2020.igem.org/wiki/images/2/28/T--Waseda--japansummermeetup.png">
                            <figcaption class="fig_title">Fig 7.4　Japan Summer Meetup </figcaption>
                          </figure>
                         
                      </v-row>

                    </v-row>
                  
                    <v-row v-scroll="pushScrollY" id="section_03" >
                      <v-row class="row_max-box">
                        <h2 class="h2_text">Japan Spring Meetup</h2>
                      </v-row>
                      <v-row class="row_max-box">
                        <v-col >
                          <h3>About</h3>
                            <P class="p_indent">
                             We participated in the Japan Spring Meetup hosted by <a class="link_style" href="https://2020.igem.org/Team:Botchan_Lab_Tokyo/Collaborations"> Team Botchan Lab.!</a><br/>
                            Good collaboration was born the event and our project was brushed up!　
                            </p>
                          
                        </v-col>

                      </v-row>

                    </v-row>

                    <!-- <v-row v-scroll="pushScrollY" id="section_04" > area 4 </v-row>
                    <v-row v-scroll="pushScrollY" id="section_05" > area 5 </v-row> -->
                    <v-template  v-scroll="pushScrollY" id="section_06"><v-col class="last_message"></v-col></v-template>
                    

                    
                </v-col>

            </v-row>
            <v-row justify="center" align="center">
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
        'Qdaitop', 'section_02', 'section_03', 'section_06'
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


.link_style:link {
  text-decoration: underline;
}
.link_style:visited {
  color: rgb(80,126,164);
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
    // margin-bottom: 10px;
    &_text{
      padding: 0;
      margin: 0,
    }
  }
  &_text {
    font-size: 60px;
  }
}

.image_max {
  width:100%;
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
</style>
