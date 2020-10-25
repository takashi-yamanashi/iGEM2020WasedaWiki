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
                        <a href="Attributions#WetLabTop"><v-row :class="{ 'title_text': true, 'title_text_active': check[0] }">Wet Lab</v-row></a>
                        <a href="Attributions#ModelingTop"><v-row :class="{ 'title_text': true, 'title_text_active': check[1] }">Modeling </v-row></a>
                        <a href="Attributions#VideoTop"><v-row :class="{ 'title_text': true, 'title_text_active': check[2] }">Video</v-row></a>
                        <a href="Attributions#WikiTop"><v-row :class="{ 'title_text': true, 'title_text_active': check[3] }">Wiki</v-row></a>
                        <a href="Attributions#HPTop"><v-row :class="{ 'title_text': true, 'title_text_active': check[4] }">HP</v-row></a>
                        <a href="Attributions#OtherTop"><v-row :class="{ 'title_text': true, 'title_text_active': check[5] }">Other</v-row></a>
                        

                    </v-row>
                    </v-col>
                </v-col>

                <v-col class="main_text" cols="12" lg="10" xl="10">
                    <v-row justify="center" text-align="centre">
                        <v-row cols="12" class="image_top" id="WetLabTop"></v-row>
                    </v-row>
                    
                    <v-row v-scroll="pushScrollY" id="WetLab"> 
                      <v-col>
                      <v-row >
                        <h2>Wet Lab</h2>
                      </v-row>
                      <v-row >
                        <P>
                          <b>Ryota Miyachi </b><br />
                          - Electrical Engineering and Bioscience student. 
                          He was responsible for Racemase project and experimented in Wet Lab.
                        </p>
                      </v-row>
                      <v-row >
                        <P>
                          <b>Takuro Shioi </b><br />
                          - Electrical Engineering and Bioscience student. 
                          He was responsible for Gene circuit project and experimented in Wet Lab.
                        </p>
                      </v-row>
                      <v-row >
                        <P>
                          <b>Takashi Yamanashi</b><br />
                          - Electrical Engineering and Bioscience student. 
                          He was responsible for Gene circuit project and experimented in Wet Lab.
                        </p>
                      </v-row>


                      <v-row>
                        <P>
                          <b>Yuya Otsuki</b><br />
                          - Electrical Engineering and Bioscience student.
                          He was responsible for Monoterpene project and experimented in Wet Lab.
                        </p>
                      </v-row>

                      <v-row >
                        <P>
                          <b>Kanta Suga</b><br />
                          - Electrical Engineering and Bioscience student.
                          He was responsible for Gene circuit project and experimented in Wet Lab.
                        </p>
                      </v-row>
                      <v-row>
                        <P>
                          <b>Kae Nakamura</b><br />
                          - Electrical Engineering and Bioscience student.
                          She was responsible for Racemase project and experimented in Wet Lab.
                        </p>
                      </v-row>
                      <v-row id="ModelingTop"> 
                        <P>
                          <b>Saho Fujieda </b><br />
                          - Medical Bioscience student.
                          She was responsible for Racemase project and experimented in Wet Lab.
                        </p>
                      </v-row>
                      <v-row>
                        <P>
                          <b>Satohiro Takizawa</b><br />
                          - Medical Bioscience student. 
                          He was responsible for Racemase project and experimented in Wet Lab.
                        </p>
                      </v-row>
                      <v-row>
                        <P>
                          <b>Yuji Kamei</b><br />
                            - Electrical Engineering and Bioscience student. 
                            He was responsible for Monoterpene and Gene circuit project and experimented in Wet Lab.
                        </p>
                      </v-row>
                      
                      </v-col>
                    </v-row>

                    <v-row v-scroll="pushScrollY" id="Modeling" > 
                      <v-col >
                        <v-row>
                          <h2>Modeling & Software</h2>
                        </v-row>
                        <v-row>
                          <P>
                            <b>Takuro Shioi</b><br />
                            - Electrical Engineering and Bioscience student.
                            He was responsible for Gene circuit project and designed models.
                          </p>
                        </v-row>
                        <v-row>
                          <P>
                            <b>Kanta Suga</b><br />
                            - Electrical Engineering and Bioscience student.
                            He was responsible for IFFL project and designed models.
                          </p>
                        </v-row>

                        <v-row id="VideoTop">
                          <P>
                            <b>Takashi Yamanashi</b><br />
                            - Electrical Engineering and Bioscience student.
                            He developed software tools which are useful for our projects.
                          </p>
                        </v-row>

                        <v-row>
                          <P>
                            <b>Tomohiro Inoue (Special support)</b><br />
                            - Electrical Engineering and Bioscience student.
                            He helped us developing software tools 
                          </p>
                        </v-row>


                      </v-col>
                    </v-row>
                  
                    

                    <v-row v-scroll="pushScrollY" id="NaviVideo" >
                      <v-col>
                        <v-row>
                          <h2>Video</h2>
                        </v-row>

                        <v-row>
                          <P>
                            <b>Kanta Suga</b><br />
                            - Electrical Engineering and Bioscience student.
                            He made video which explains our projects.
                          </p>
                        </v-row>

                        <v-row id="WikiTop">
                          <P>
                            <b>Rei Abe</b><br />
                            - Medical Bioscience student.
                            She made video which explains our projects.
                          </p>
                        </v-row>

                        <v-row>
                          <P>
                            <b>ASOBIchanson.inc (Special support)</b><br />
                            - They helped us making video which explains our projects.
                          </p>
                        </v-row>
                      </v-col>

                    </v-row>

                    <v-row v-scroll="pushScrollY" id="Wiki" >
                      <v-col>
                        <v-row>
                          <h2>Wiki</h2>
                        </v-row>

                        <v-row>
                          <P>
                            <b>Takashi Yamanashi</b><br />
                            - Electrical Engineering and Bioscience student.
                            He played a central part in making wiki pages by using software tools.
                          </p>
                        </v-row>

                        <v-row>
                          <P>
                            <b>Rei Abe</b><br />
                            - Medical Bioscience student.She designed our wiki pages.
                          </p>
                        </v-row>

                        <v-row>
                          <P>
                            <b>Yuji Kamei</b><br />
                            - Electrical Engineering and Bioscience student. 
                            He thought about the structure of wiki pages.
                          </p>
                        </v-row>
                        <v-row>
                          <P>
                            <b>Takuma Kawabata</b><br />
                            - Electrical Engineering and Bioscience student.
                            He thought about the structure of wiki pages.
                          </p>
                        </v-row>
                        <v-row>
                          <P>
                            <b>Aimi Watanabe </b><br />
                            - Electrical Engineering and Bioscience student. 
                            She thought about the structure of wiki pages.
                          </p>
                        </v-row>
                        <v-row id="HPTop">
                          <P>
                            <b>Yuri Hayashi</b><br />
                            - Electrical Engineering and Bioscience student.
                             She thought about the structure of wiki pages.
                          </p>
                        </v-row>
                        <v-row>
                          <P>
                            <b>Everyone </b><br />
                            - All members cooperated with each other and made wiki pages.                          
                          </p>
                        </v-row>
                      </v-col>


                    </v-row>

                    <v-row v-scroll="pushScrollY" id="HP" >
                      <v-col>
                        <v-row>
                          <h2>Human Practice</h2>
                        </v-row>
                        

                        <v-row>
                          <P>
                            <b>Yuya Otsuki</b><br />
                            - Electrical Engineering and Bioscience student.
                            He was responsible for Education and gave a lecture on Synthetic Biology to high school students.
                          </p>
                        </v-row>
                        <v-row>
                          <P>
                            <b>Satohiro Takizawa</b><br />
                            - Medical Bioscience student. 
                            He was responsible for Education.
                          </p>
                        </v-row>

                        <v-row> 
                          <P>
                            <b>Takashi Yamanashi</b><br />
                            - Electrical Engineering and Bioscience student.
                            He was responsible for Business model and tried to make our projects useful for society.
                          </p>
                        </v-row>

                        <v-row id="OtherTop">
                          <P>
                            <b>Saho Fujieda</b><br />
                            - Medical Bioscience student.
                            She was responsible for Business model and tried to make our projects useful for society.
                          </p>
                        </v-row>
                        <v-row>
                          <P>
                            <b>Maximize, Inc. (Special support)</b><br />
                            - They taught us how to plan business models and gave advise.
                          </p>
                        </v-row>
                      </v-col>

                    </v-row>

                    <v-row v-scroll="pushScrollY" id="NaviOther" > 
                      <v-col>
                        <v-row>
                          <h2>Other</h2>
                        </v-row>
                        <v-row>
                          <P>
                            <b>Takashi Yamanashi</b><br />
                            - Electrical Engineering and Bioscience student.
                            He was responsible for Collaborations and Excellence in Another Area.
                          </p>
                        </v-row>

                        <v-row>
                          <P>
                            <b>Yuji Kamei</b><br />
                            - Electrical Engineering and Bioscience student.
                             He came up with application which can connect DNA information and protein.
                          </p>
                        </v-row>


                        <v-row>
                          <P>
                            <b>Rei Abe</b><br />
                            - Medical Bioscience student. 
                            She researched about Racemase and gave us helpful information.
                          </p>
                        </v-row>


                        <v-row>
                          <P>
                            <b>Takaomi Yamada </b><br />
                            - Medical Bioscience student. 
                            He researched about Racemase and gave us helpful information.
                          </p>
                        </v-row>

                      </v-col>
                    </v-row>

                    
                    
                    <v-row v-scroll="pushScrollY" id="NaviLast" > 
                      <v-col>
                        <v-row class="last_message">
                            <P class="last_message_p"><b>
                              We appreciate all the person for helping our projects !</b><br />
                            </P>
                        </v-row>
                      </v-col>
                    </v-row>

                    
                    

                    
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
      check: [false, false, false, false, false, false, false, false],

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
        'WetLab', 'Modeling', 'NaviVideo', 'Wiki','HP', 'NaviOther', 'NaviLast'
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
  margin-top: 10px;
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
  font-size: 50px;
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
  margin:20px 0  200px 0;
  &_p{
    font-size: 40px;
  }
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

