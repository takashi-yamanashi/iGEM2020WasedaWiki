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
                        <!-- <a href="Attributions#WetLabTop"><v-row :class="{ 'title_text': true, 'title_text_active': check[0] }">Wet Lab</v-row></a>
                        <a href="Attributions#ModelingTop"><v-row :class="{ 'title_text': true, 'title_text_active': check[1] }">Modeling </v-row></a>
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
                            <h1 class='h1_text' pushElementOffsetTop>Modeliing</h1>
                          </v-col>
                        </v-row>
                    </v-row>
                    
                    <v-row v-scroll="pushScrollY" id="OverviewTop"> 
                      <v-row class="row_max-box">
                        <h2 class="h2_text">Zombie vs Samurai circuit</h2>
                      </v-row>
                      </v-row>

                      <v-row cols="12" sm="12" xs="12" md="12" lg="7" xl="7" class="row_max-box">

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
                          <img class="image_max" src="https://2020.igem.org/wiki/images/4/4a/T--Waseda--zombi_R_NoAHL_Nopro_image.PNG" alt="Fig.4-1-1 Zombie vs Samurai circuit">
                        <figcaption class="fig_title">Fig.4-1-1 Zombie vs Samurai circuit</figcaption>
                        </figure>
                      </v-row>


                      <v-row cols="12" sm="12" xs="12" md="12" lg="7" xl="7" class="row_max-box">

                        <v-col>
                          <h3></h3>
                          <p class="p_indent"> 
                            Our Zombie vs Samurai Circuit is as shown in Fig.4-1-1. To demonstrate this model, we solved the ordinary differential equations containing Hill repression and activation terms.
                             The ideal results for the war between Samurai and Zombie are in the Fig.4-1-2. This ideal result has previously been achieved with ordinary toggle switch genetic circuits without cell-cell communication.
                              Since the nullcline indicates the concentration when it does not change with time, the number of shared points of the two nullclines corresponds to the number of stable states.
                             As shown in Fig.4-1-2, there are three shared points on the nullcline, two of them are stable equilibrium points and the system is bistable.                           
                          </P>
                        </v-col>
                      </v-row>

                      <v-row cols="12" sm="12" xs="12" md="12" lg="7" xl="7" class="row_max-box">
                        <figure class="fig_full_width" >
                          <img class="image_max" src="https://2020.igem.org/wiki/images/5/53/T--Waseda--idealnullcline_timecourase.png" alt="Fig.4-1-2 the ideal results of our gene circuit">
                        <figcaption class="fig_title">Fig.4-1-2 the ideal results of our gene circuit</figcaption>
                        </figure>
                      </v-row>

                      <v-row cols="12" sm="12" xs="12" md="12" lg="7" xl="7" class="row_max-box">

                        <v-col>
                          <h3></h3>
                          <p class="p_indent"> 
                            Before modeling of in vitro systems with cell-cell communication, we established differential-equation (1) to (6) based modeling for the same circuit which works in living E coli cells because of accumulated cases for such in vivo models.
                             We formulated equations assuming that the system has a sufficient amount of R protein and the concentration of I protein activates the corresponding promoter directly (Fig.4-1-3). The meaning of each parameter is as shown in Table.4-1-1.                            
                          </P>
                          <p class="p_indent">    
                            ddt[lacI]=a1zn1Kn11+zn1+a2Kn22Kn22+[CI]n2−dlac[lacI]     (1)<br/>
                            </p>
                          <p class="p_indent"> 
                            ddt[CI]=a3wn3Kn33+wn3+a4Kn44Kn44+[lacI]n4−dCI[CI]   (2)<br/>
                            </p>
                          <p class="p_indent"> 
                            ddt[luxI]=a5Kn55Kn55+[CI]n5−dlux[luxI]  (3)<br/>
                            </p>
                          <p class="p_indent"> 
                            ddt[RhlI]=a6Kn66Kn66+[lacI]n6−drhl[RhlI] (4)<br/>
                            </p>
                          <p class="p_indent"> 
                            dzdt=∑λz[luxI]i−dzz  (5)<br/>
                            </p>
                          <p class="p_indent"> 
                            dwdt=∑λw[RhlI]i−dww  (6)<br/>
                            </p>
                        </v-col>
                      </v-row>

                      <v-row cols="12" sm="12" xs="12" md="12" lg="7" xl="7" class="row_max-box">

                        <v-col>
                          
                          <p class="p_indent">   
                            \( 
                              1 + 2 = 3 \\
                              2 - 3 = 5 \\
                              3 \times 2 = 6 \\
                              6 \div 3 = 2
                               \)                        
                          </P>
                          <p class="p_indent">  
                            <p>
                              \begin{eqnarray}
                              \frac{ d }{ dt } [LacI] & = & \frac{\alpha_1 z^{n_1} }{ K_1^{n_1} + z^{n_1} } + \frac{ \alpha_2 K^{n_2} }{ K_2^{n_2} + [CI]^{n_2} } - d_{Lac} [LacI] \\
                              \frac{ d }{ dt } [CI] & = & \frac{ \alpha_3 w^{n_3} }{ K_3^{n_3} + w^{n_3} } + \frac{ \alpha_4 K^{n_4} }{ K_4^{n_4} + [LacI]^{n_4} } - d_{CI} [CI] \\
                              \frac{ d }{ dt } [LuxI] & = & \frac{ \alpha_5 w^{n_5} }{ K_5^{n_5} + w^{n_5} } - d_{LuxI} [LuxI] \\
                              \frac{ d }{ dt } [RhlI] & = & \frac{ \alpha_6 w^{n_6} }{ K_6^{n_6} + w^{n_6} } - d_{RhlI} [RhlI] \\
                              \frac{ d }{ dt } z & = & \sum_{i=1}^N{ \lambda_z [LuxI]_i } - d_{z} z \\
                              \frac{ d }{ dt } w & = & \sum_{i=1}^N{ \lambda_w [RhlI]_i } - d_{w} w
                              \end{eqnarray}

                            </p>                            
                          
                        </v-col>
                      </v-row>

                      <div>
                        $$
                        x = \frac{-b \pm \sqrt{b^2-4ac}}{2a}
                        $$
                      </div>



                      <v-row cols="12" sm="12" xs="12" md="12" lg="7" xl="7" class="row_max-box">
                        <figure class="fig_full_width" >
                          <img class="image_max" src="" alt="Logo">
                        <figcaption class="fig_title"></figcaption>
                        </figure>
                      </v-row>

                      <v-row cols="12" sm="12" xs="12" md="12" lg="7" xl="7" class="row_max-box">

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
                      </v-row><v-row cols="12" sm="12" xs="12" md="12" lg="7" xl="7" class="row_max-box">

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
                      </v-row><v-row cols="12" sm="12" xs="12" md="12" lg="7" xl="7" class="row_max-box">

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
                      </v-row><v-row cols="12" sm="12" xs="12" md="12" lg="7" xl="7" class="row_max-box">

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
                      </v-row><v-row cols="12" sm="12" xs="12" md="12" lg="7" xl="7" class="row_max-box">

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
                      </v-row><v-row cols="12" sm="12" xs="12" md="12" lg="7" xl="7" class="row_max-box">

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
                      </v-row><v-row cols="12" sm="12" xs="12" md="12" lg="7" xl="7" class="row_max-box">

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
                      </v-row><v-row cols="12" sm="12" xs="12" md="12" lg="7" xl="7" class="row_max-box">

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
                      </v-row><v-row cols="12" sm="12" xs="12" md="12" lg="7" xl="7" class="row_max-box">

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
                      </v-row>

                      <v-row cols="12" sm="12" xs="12" md="12" lg="7" xl="7" class="row_max-box">

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
                      </v-row>
                



                    <v-template  v-scroll="pushScrollY" id="section_01"><v-col class="last_message"></v-col></v-template>
                    <v-template  v-scroll="pushScrollY" id="section_02"><v-col class="last_message"></v-col></v-template>
                    <v-template  v-scroll="pushScrollY" id="section_03"><v-col class="last_message"></v-col></v-template>
                    <v-template  v-scroll="pushScrollY" id="section_04"><v-col class="last_message"></v-col></v-template>

 
                </v-col>
            </v-row>
        </v-container>

    </v-container>
    
  <!-- </v-layout> -->
</template>




<script>
export default {
  head() {
    return {
      script: [
        {
          src: "https://2020.igem.org/common/MathJax-2.5-latest/MathJax.js?config=TeX-AMS-MML_SVG"
        }
      ],
    }
  },
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

