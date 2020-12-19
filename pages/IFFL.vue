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
                              <img z-indx="10" class="navi_svg" src="https://2020.igem.org/wiki/images/c/c3/T--Waseda--iGEM2020wikiicons-model.svg">
            
                        </v-row>

            
                    <v-row class="navi_text">
                        <!-- <a href="Model#ZScircuit"><v-row :class="{ 'title_text': true, 'title_text_active': check[0] }">Zombie vs Samurai</v-row></a> -->
                        <a href="Model#IFFL"><v-row :class="{ 'title_text': true, 'title_text_active': check[1] }">IFFL</v-row></a>
                        <!-- <a href="Attributions#VideoTop"><v-row :class="{ 'title_text': true, 'title_text_active': check[2] }">Video</v-row></a>
                        <a href="Attributions#WikiTop"><v-row :class="{ 'title_text': true, 'title_text_active': check[3] }">Wiki</v-row></a>
                        <a href="Attributions#HPTop"><v-row :class="{ 'title_text': true, 'title_text_active': check[4] }">HP</v-row></a>
                        <a href="Attributions#OtherTop"><v-row :class="{ 'title_text': true, 'title_text_active': check[5] }">Other</v-row></a>
                         -->

                    </v-row>
                    </v-col>
                </v-col>



                <v-col class="main_text" cols="12" lg="10" xl="10">
                  
                    <v-row justify="center" text-align="left" id="ZScircuit">
                        <v-row cols="12" class='h1_box'>
                          <v-col class='h1_box_text'> 
                            <h1 class='h1_text' pushElementOffsetTop>IFFL Modeling</h1>
                          </v-col>
                        </v-row>
                    </v-row>
                    

                      <v-row> 
                        <v-row class="row_max-box" id="IFFL">
                          <h2 class="h2_text">Multi IFFL</h2>
                        </v-row>
                      </v-row>


                      <v-row cols="12" sm="12" xs="12" md="12" lg="7" xl="7" class="row_max-box">
                        <figure class="fig_mid_width" >
                          <img class="image_max" src="https://2020.igem.org/wiki/images/a/a1/T--Waseda--IFFL_about.png" alt="Fig 4-2-1 Incoherent feed forward loop">
                        <figcaption class="fig_title">Fig 4-2-1 Incoherent feed forward loop</figcaption>
                        </figure>
                      </v-row>

                      <v-row cols="12" sm="12" xs="12" md="12" lg="7" xl="7" class="row_max-box">
                        <p class="p_indent"> <br></p>
                        <figure class="fig_mid_width" >
                          <img class="image_max" src="https://2020.igem.org/wiki/images/1/1a/T--Waseda--yamaiffl_ode_1.png" alt="Fig yamaiffl">
                        
                        </figure>
                      </v-row>

                      
                      
                      <v-row cols="12" sm="12" xs="12" md="12" lg="7" xl="7" class="row_max-box">

                        <v-col>
                          
                          <p class="p_indent">       
                            In the incoherent feed forward loop(Fig 4-2-1), the expressions of each gene: x,y, and z are formulated as the differential-equation (1), (2) and (3).
                          </P>
                          
                        </v-col>
                      </v-row>


                      <v-row cols="12" sm="12" xs="12" md="12" lg="7" xl="7" class="row_max-box">

                        <v-col>
                          <p>Table 4-2-1 description of each parameter of IFFL</p>

                        <template>
                          <v-simple-table>
                            <template v-slot:default>
                              <thead>
                                <tr>
                                  <th class="table-font-size">
                                    Variables
                                  </th>
                                  <th class="table-font-size">
                                    Description
                                  </th>
                                  <th class="table-font-size">
                                    unit
                                  </th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr
                                  v-for="item in  desserts5"
                                  :key="item.name"
                                >
                                  <td class="table-font-sizet">{{item.name}}</td>
                                  <td class="table-font-sizet">{{ item.value }}</td>
                                  <td class="table-font-sizet">{{ item.unit }}</td>
                                </tr>
                              </tbody>
                            </template>
                          </v-simple-table>
                        </template>
                        <template>
                          <v-simple-table>
                            <template v-slot:default>
                              <thead>
                                <tr>
                                  <th class="table-font-size">
                                    Parameters
                                  </th>
                                  <th class="table-font-size">
                                    Description
                                  </th>
                                  <th class="table-font-size">
                                    unit
                                  </th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr
                                  v-for="item in  desserts6"
                                  :key="item.name"
                                >
                                  <td class="table-font-sizet">{{item.name}}</td>
                                  <td class="table-font-sizet">{{ item.value }}</td>
                                  <td class="table-font-sizet">{{ item.unit }}</td>
                                </tr>
                              </tbody>
                            </template>
                          </v-simple-table>
                        </template>


                        </v-col>
                      </v-row>

                      <v-row cols="12" sm="12" xs="12" md="12" lg="7" xl="7" class="row_max-box">
                        <figure class="fig_full_width" >
                          <img class="image_max" src="https://2020.igem.org/wiki/images/b/b3/T--Waseda--Muitl_IFFL.png" alt="Fig 4-2-2 Multi IFFL">
                        <figcaption class="fig_title">Fig 4-2-2 Multi IFFL</figcaption>
                        </figure>
                      </v-row>

                      <v-row cols="12" sm="12" xs="12" md="12" lg="7" xl="7" class="row_max-box">

                        <v-col>
                          <h3></h3>
                          <p class="p_indent"> 
                            We designed an expanded IFFL system containing two target genes (Z1,Z2) each of which with different peak time to the other. We call this Multi -target- IFFL, or Multi IFFL. By adjusting the parameters for each activation and repression, we can provide a time difference in the generation of each pulse. To check whether the designed multi-target IFFL can really generate two pulses with a time delay, we extensively searched for parameter space for the system.
                          </P>
                          <p class="p_indent">   
                            We first investigated how the concentration of Z changes over time when the parameters Kx and Ky are changed independently in Formula (3).
                            When searching, we varied Kx and Ky from 1 to 1000 every 100 and other parameters were fixed as shown on Table-4-2-2, Table-4-2-3 respectively.

                          </p>
                        </v-col>
                      </v-row>

                      <v-row cols="12" sm="12" xs="12" md="12" lg="7" xl="7" class="row_max-box">
                        
                        <figure class="fig_mid_width" >
                          <img class="image_max" src="https://2020.igem.org/wiki/images/6/67/T--Waseda--IFFL_independent_search_kxandky.png" alt="Fig 4-2-3 Kx and Ky search independently">
                        <figcaption class="fig_title">Fig 4-2-3 Kx and Ky search independently</figcaption>
                        </figure>
                      </v-row>
                      
                      <v-row cols="12" sm="12" xs="12" md="12" lg="7" xl="7" class="row_max-box"><br></v-row>

                      <v-row cols="12" sm="12" xs="12" md="12" lg="7" xl="7" class="row_max-box">

                        <v-col>
                          <p>Table 4-2-2 Fixed parameters in the Kx search</p>
                        <template>
                          <v-simple-table>
                            <template v-slot:default>
                              <thead>
                                <tr>
                                  <th class="table-font-size">
                                    parameter
                                  </th>
                                  <th class="table-font-size">
                                    value
                                  </th>
                                 
                                </tr>
                              </thead>
                              <tbody>
                                <tr
                                  v-for="item in  desserts7"
                                  :key="item.name"
                                >
                                  <td class="table-font-sizet">{{item.name}}</td>
                                  <td class="table-font-sizet">{{ item.value }}</td>
                                  
                                </tr>
                              </tbody>
                            </template>
                          </v-simple-table>
                        </template>

                        </v-col>
                      </v-row>
                      <v-row cols="12" sm="12" xs="12" md="12" lg="7" xl="7" class="row_max-box"><br></v-row>
                      

                      <v-row cols="12" sm="12" xs="12" md="12" lg="7" xl="7" class="row_max-box">
                        <v-col>
                          <p>Table 4-2-3 Fixed parameters in the Ky search</p>
                        <template>
                          <v-simple-table>
                            <template v-slot:default>
                              <thead>
                                <tr>
                                  <th class="table-font-size">
                                    parameter
                                  </th>
                                  <th class="table-font-size">
                                    value
                                  </th>
                                 
                                </tr>
                              </thead>
                              <tbody>
                                <tr
                                  v-for="item in  desserts8"
                                  :key="item.name"
                                >
                                  <td class="table-font-sizet">{{item.name}}</td>
                                  <td class="table-font-sizet">{{ item.value }}</td>
                                  
                                </tr>
                              </tbody>
                            </template>
                          </v-simple-table>
                        </template>

                        </v-col>
                      </v-row>

                      <v-row cols="12" sm="12" xs="12" md="12" lg="7" xl="7" class="row_max-box">

                        <v-col>
                          
                          <p class="p_indent">     
                            Next, we constructed a heatmap to check how much time (t) of the pulse peak is delayed as we simultaneously changed the parameters Kx and Ky in the formula (3). Fig. 4-2-4 is the results.                    
                            Other parameters are fixed as shown on Table 4-2-4.
                          </p>
                        </v-col>
                      </v-row>



                      <v-row cols="12" sm="12" xs="12" md="12" lg="7" xl="7" class="row_max-box">

                        <v-col>
                          <p>Table.4-2-4 parameter set to AHL-R protein crosstalk</p>
                        <template>
                          <v-simple-table>
                            <template v-slot:default>
                              <thead>
                                <tr>
                                  <th class="table-font-size">
                                    parameter
                                  </th>
                                  <th class="table-font-size">
                                    value
                                  </th>
                                  
                                </tr>
                              </thead>
                              <tbody>
                                <tr
                                  v-for="item in  desserts9"
                                  :key="item.name"
                                >
                                  <td class="table-font-sizet">{{item.name}}</td>
                                  <td class="table-font-sizet">{{ item.value }}</td>
                                 
                                </tr>
                              </tbody>
                            </template>
                          </v-simple-table>
                        </template>

                        </v-col>
                      </v-row>



                    <v-row cols="12" sm="12" xs="12" md="12" lg="7" xl="7" class="row_max-box">

                        <v-col>
                          
                          <p class="p_indent">   
                            Furthermore, in order to evaluate the balance of the pulse shape, we calculated the ratio of the peak concentration to the following steady-state concentration for each parameter and presented it in a heat map. This is called the ratio heatmap. (Fig 4-2-5)                          
                          
                          </p>
                        </v-col>
                      </v-row>

                      <v-row cols="12" sm="12" xs="12" md="12" lg="7" xl="7" class="row_max-box">
                        <figure class="fig_full_width" >
                          <figcaption class="fig_title">The ratio is calculated as formula (4).</figcaption>
                          <img class="image_max" src="https://2020.igem.org/wiki/images/c/cb/T--Waseda--yamaIFFL_ODE_2.png" alt="The ratio is calculated as formula">
                        
                        </figure>
                      </v-row>

                      <v-row cols="12" sm="12" xs="12" md="12" lg="7" xl="7" class="row_max-box">
                        <figure class="fig_full_width" >
                          <img class="image_max" src="https://2020.igem.org/wiki/images/9/96/T--Waseda--ratio_heatmap.png" alt="Fig 4-2-5 Ratio heatmap">
                        <figcaption class="fig_title">Fig 4-2-5 Ratio heatmap</figcaption>
                        </figure>
                      </v-row>

                      <v-row cols="12" sm="12" xs="12" md="12" lg="7" xl="7" class="row_max-box">

                        <v-col>
                         
                          <p class="p_indent">
                            Based on these two indicators, we multiplied the cross heatmap by the value of the time heatmap and the ratio heatmap for each parameter to find out which parameter has both time difference and balance, comprehensively .To make this cross heatmap, we subtracted a certain constant number of time values from the time heatmap because we have to make the time delay above a certain level. If the time heatmap is negative, it is treated as 0. This is called time processed heatmap. Fig 4-2-6 is the time processed heat map, calculated by subtracting 4 from the all values of the time heatmap.                            
                          </p>
                        </v-col>
                      </v-row>

                      <v-row cols="12" sm="12" xs="12" md="12" lg="7" xl="7" class="row_max-box">
                        <figure class="fig_full_width" >
                          <img class="image_max" src="https://2020.igem.org/wiki/images/0/04/T--Waseda--time_heatmap_processed.png" alt="Fig 4-2-6 time processed heatmap">
                        <figcaption class="fig_title">Fig 4-2-6 time processed heatmap</figcaption>
                        </figure>
                      </v-row>

                      <v-row cols="12" sm="12" xs="12" md="12" lg="7" xl="7" class="row_max-box">
                        <figure class="fig_full_width" >
                          <figcaption class="fig_title">The values of the cross heatmap were calculated as the formula (5)</figcaption>
                          <img class="image_max" src="https://2020.igem.org/wiki/images/2/24/T--Waseda--yamaIFFL_ODE_3.png" alt="formula (5)">
                        
                        </figure>
                      </v-row>




                      <v-row cols="12" sm="12" xs="12" md="12" lg="7" xl="7" class="row_max-box">

                        <v-col>
                          
                          <p class="p_indent">   
                            We selected the optimal parameter for the multi IFFL in the resulting match heatmap as the one with the highest score.  Two pulses were generated using the optimal parameter in practice (Fig 4-2-7)(Table 4-2-5, 4-2-6).  Yellow indicates the temporal variation of the concentration of Z1 and green indicates that of Z2.  As a result, we succeeded in creating pulses with a time difference.                         
                          </p>
                        </v-col>
                      </v-row>



                      <v-row cols="12" sm="12" xs="12" md="12" lg="7" xl="7" class="row_max-box">

                        <v-col>
                          <p>Table 4-2-5</p>
                        <template>
                          <v-simple-table>
                            <template v-slot:default>
                              <thead>
                                <tr>
                                  <th class="table-font-size">
                                    parameter
                                  </th>
                                  <th class="table-font-size">
                                    value
                                  </th>
                                  
                                </tr>
                              </thead>
                              <tbody>
                                <tr
                                  v-for="item in  desserts10"
                                  :key="item.name"
                                >
                                  <td class="table-font-sizet">{{item.name}}</td>
                                  <td class="table-font-sizet">{{ item.value }}</td>
                                 
                                </tr>
                              </tbody>
                            </template>
                          </v-simple-table>
                        </template>

                        </v-col>
                      </v-row>




                      <v-row cols="12" sm="12" xs="12" md="12" lg="7" xl="7" class="row_max-box">

                        <v-col>
                          <p>Table 4-2-6</p>
                        <template>
                          <v-simple-table>
                            <template v-slot:default>
                              <thead>
                                <tr>
                                  <th class="table-font-size">
                                    parameter
                                  </th>
                                  <th class="table-font-size">
                                    value
                                  </th>
                                  
                                </tr>
                              </thead>
                              <tbody>
                                <tr
                                  v-for="item in  desserts11"
                                  :key="item.name"
                                >
                                  <td class="table-font-sizet">{{item.name}}</td>
                                  <td class="table-font-sizet">{{ item.value }}</td>
                                 
                                </tr>
                              </tbody>
                            </template>
                          </v-simple-table>
                        </template>

                        </v-col>
                      </v-row>






                      <v-row cols="12" sm="12" xs="12" md="12" lg="7" xl="7" class="row_max-box">
                        <figure class="fig_full_width" >
                          <img class="image_max" src="https://2020.igem.org/wiki/images/e/ed/T--Waseda--IFFL_result_final.png" alt="Fig 4-2-7 Multi IFFL with the optimal parameters">
                        <figcaption class="fig_title">Fig 4-2-7 Multi IFFL with the optimal parameters</figcaption>
                        </figure>
                      </v-row>


                      
                


<!-- 
                    <v-template  v-scroll="pushScrollY" id="section_01"><v-col class="last_message"></v-col></v-template>
                    <v-template  v-scroll="pushScrollY" id="section_02"><v-col class="last_message"></v-col></v-template> -->
                    <v-template  v-scroll="pushScrollY" id="section_03"><v-col class="last_message"></v-col></v-template>
                    <!-- <v-template  v-scroll="pushScrollY" id="section_04"><v-col class="last_message"></v-col></v-template> -->

 
                </v-col>
            </v-row>
        </v-container>

    </v-container>
    
  <!-- </v-layout> -->
</template>



<script>

const pageTitle = 'IFFL';
const pageDes = "iGEM2020 Team Waseda's" + pageTitle + "page";
const pageUrl = 'https://2020.igem.org/Team:Waseda/IFFL';


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
      check: [false, false, false, ],

      
      desserts5: [
          {
            name: '[x]',
            value: 'Concentration of protein x',
            unit:'µM',
          },{
            name: '[y]',
            value: 'Concentration of protein y',
            unit:'µM',
          },{
            name: '[z]',
            value: 'Concentration of protein z',
            unit:'µM',
          },
       ],
      desserts6: [   
          {
            name: 'a1',
            value: 'Maximum expression rate of protein X',
            unit:'µM/min',
          },{
            name: 'a2',
            value: 'Mamimum expression rate of protein Y, when promoter of z is activated by protein X',
            unit:'µM/min',
          },{
            name: 'αx',
            value: 'Mamimum expression rate of protein Z, when promoter of z is activated by protein X',
            unit:'µM/min',
          },{
            name: 'αy',
            value: 'Mamimum expression rate of z, when promoter of protein Z is activated by protein Y',
            unit:'µM/min',
          },{
            name: 'K1',
            value: 'x concentration at which the expression rate of y is half of α2',
            unit:'µM',
          },{
            name: 'Kx',
            value: 'x concentration at which the expression rate of y is half of αx',
            unit:'µM',
          },{
            name: 'Ky',
            value: 'x concentration at which the expression rate of y is half of αy',
            unit:'µM',
          },{
            name: 'βk(k=1,x,y)',
            value: 'Hill coefficient',
            unit:'-',
          },{
            name: 'dk(k=x,y,z)',
            value: 'Degradation rate',
            unit:'/min',
          },
      ],
      desserts7: [   
          {
            name: 'ax',
            value: '4000',
          },{
            name: 'βx',
            value: '1',
          },{
            name: 'βy',
            value: '2',
          },{
            name: 'Ky',
            value: '50',
          },
      ],
      desserts8: [   
          {
            name: 'ax',
            value: '4000',
          },{
            name: 'βx',
            value: '1',
          },{
            name: 'βy',
            value: '2',
          },{
            name: 'Kx',
            value: '8',
          },
      ],
       desserts9: [   
          {
            name: 'ax',
            value: '4000',
          },{
            name: 'βx',
            value: '1',
          },{
            name: 'βy',
            value: '2',
          },
      ],
       desserts10: [   
          {
            name: 'αx',
            value: '2500',
          },{
            name: 'βx',
            value: '1',
          },{
            name: 'βy',
            value: '2',
          },{
            name: 'kx',
            value: '8',
          },{
            name: 'ky',
            value: '10',
          },{
            name: 'dz',
            value: '1',
          },
      ],
       desserts11: [   
          {
            name: 'αx',
            value: '3500',
          },{
            name: 'βx',
            value: '1',
          },{
            name: 'βy',
            value: '2',
          },{
            name: 'kx',
            value: '650',
          },{
            name: 'ky',
            value: '600',
          },{
            name: 'dz',
            value: '2',
          },
      ]


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
        'ZScircuit','IFFL','section_03',
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
    background-image: url("https://2020.igem.org/wiki/images/7/73/T--Waseda--MakiGold.png");
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
 font-size: 20px !important;
}
// table.v-table thead th {
//       font-size: 40px !important;
// }
// table.v-table tbody td {
//     font-size: 40px !important;
// }


</style>

