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
                        <a href="Model#ZScircuit"><v-row :class="{ 'title_text': true, 'title_text_active': check[0] }">Zombie vs Samurai</v-row></a>
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
                            <h1 class='h1_text' pushElementOffsetTop>Modeling</h1>
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
                          
                          <p class="p_indent">           
                            Our team is eligible for this prize because we actively used dry-wet cycles.  We designed a genetic circuit that realizes a bistable system switched by the number of cells.  Before implementing the genetic circuit in a wet experiment, we modeled it and simulated the behavior.  Through the simulation, we discovered some problems like degradation time and crosstalk ratio, so we introduced new technology and verified its usefulness by conducting wet experiments.  Based on the results, we re-simulated and confirmed that the designed system works. Moreover, we devised a way to explain this modeling ingeniously. Modeling plays an essential role in synthetic biology, but it is difficult to explain it accurately.  To solve this problem, we likened this bi-stable system to the war between zombies and humans.  We are convinced that this interesting story attract anyone, including the general public, and make the system easier to understand.                  
                          </P>
                          
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
                            Our Zombie vs Samurai Circuit is as shown in Fig.4-1-1. To demonstrate this model, we solved the ordinary differential equations containing Hill repression and activation terms. The ideal results for the war between Zombies and Samurai are in the Fig.4-1-2. This ideal result has previously been achieved with ordinary toggle switch genetic circuits without cell-cell communication, so we tried to develop this simulation and realize a toggle switch including cell-cell communication. Since the nullcline indicates the concentration when it does not change with time, the number of shared points of two nullclines corresponds to the number of stable states. As shown in Fig.4-1-2, there are three shared points on the nullcline and two of them are stable equilibrium points, so the system is bistable. </P>
                        </v-col>
                      </v-row>

                      <v-row cols="12" sm="12" xs="12" md="12" lg="7" xl="7" class="row_max-box">
                        <figure class="fig_full_width" >
                          <img class="image_max" src="https://2020.igem.org/wiki/images/5/53/T--Waseda--idealnullcline_timecourase.png" alt="Fig.4-1-2 the ideal results of our gene circuit">
                        <figcaption class="fig_title">Fig.4-1-2 the ideal results of our gene circuit</figcaption>
                        </figure>
                      </v-row>

                    

                                            <v-row cols="12" sm="12" xs="12" md="12" lg="7" xl="7" class="row_max-box">
                        <figure class="fig_full_width" >
                          <img class="image_max" src="https://2020.igem.org/wiki/images/4/4a/T--Waseda--zombieequation1.png" alt="Fig.4-1-3 assumed Circuit; I protein directly activates promoter ">
                        <figcaption class="fig_title">Fig.4-1-3 Basic equations of our gene circuit</figcaption>
                        </figure>
                      </v-row>





                      <v-row cols="12" sm="12" xs="12" md="12" lg="7" xl="7" class="row_max-box">
                        <figure class="fig_full_width" >
                          <img class="image_max" src="https://2020.igem.org/wiki/images/2/25/T--Waseda--zombi_NoR_NoAHL_Nopro.PNG" alt="Fig.4-1-3 assumed Circuit; I protein directly activates promoter ">
                        <figcaption class="fig_title">Fig.4-1-3 assumed Circuit; I protein directly activates promoter </figcaption>
                        </figure>
                      </v-row>

                      <v-row cols="12" sm="12" xs="12" md="12" lg="7" xl="7" class="row_max-box">
                        <p class="p_indent">  <br/>                         
                          </P>
                      </v-row>

                      
                      <v-row cols="12" sm="12" xs="12" md="12" lg="7" xl="7" class="row_max-box">

                        <v-col>
                          <p>Table.4-1-1 description of each parameter</p>
                        <template>
                          <v-simple-table>
                            <template v-slot:default>
                              <thead>
                                <tr>
                                  <th class="table-font-size">
                                    parameter
                                  </th>
                                  <th class="table-font-size">
                                    description
                                  </th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr
                                  v-for="item in  desserts"
                                  :key="item.name"
                                >
                                  <td class="table-font-sizet">{{item.name}}</td>
                                  <td class="table-font-sizet">{{ item.des }}</td>
                                </tr>
                              </tbody>
                            </template>
                          </v-simple-table>
                        </template>

                        </v-col>
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
                          <img class="image_max" src="https://2020.igem.org/wiki/images/0/0e/T--Waseda--zombieequation2.png" alt="Fig.4-1-3 assumed Circuit; I protein directly activates promoter ">
                        <figcaption class="fig_title">Fig.4-1-5  Basic equation for nullcline </figcaption>
                        </figure>
                      </v-row>

                      <v-row cols="12" sm="12" xs="12" md="8" lg="7" xl="7" class="row_max-box">

                        <v-col>
                          <p>Table.4-1-2 basic parameter set</p>
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
                                  <th class="table-font-size">
                                    unit
                                  </th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr
                                  v-for="item in  desserts2"
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
                        <figure class="fig_mid_width" >
                          <img class="image_max" src="https://2020.igem.org/wiki/images/9/9a/T--Waseda--basicnullcline3.png" alt="Fig.4-1-4 the basic nullcline of LacI and CI">
                        <figcaption class="fig_title">Fig.4-1-4 the basic nullcline of LacI and CI</figcaption>
                        </figure>
                      </v-row><v-row cols="12" sm="12" xs="12" md="12" lg="7" xl="7" class="row_max-box">

                        <v-col>
                          
                          <p class="p_indent">   
                            At the same time, we drew Fig.4-1-5 as the time-course of each molecular concentration by using the same parameter set. It also showed there were two final stable states when the initial concentration of AHL was changed. Other initial values of this simulation were as shown in Table.4-1-3.                         
                          </P>
                          <p class="p_indent">   
                            Fig.4-1-6 illustrates the behavior of our gene circuit. When the zombie state cell is induced with a samurai signal, the cell fate will change depending on the size of the signal. If the zombie receives a large number of samurai signals, the zombie will not be able to withstand the signal and will turn into a samurai. However, if samurai signal received by the zombie state cell is not enough, the zombie can revert back to being a zombie again, without completely transforming into a samurai. As a result, we were able to create two final states simply by changing the initial concentration of communication molecules.                           
                          </p>
                        </v-col>
                      </v-row>

                      <v-row cols="12" sm="12" xs="12" md="12" lg="7" xl="7" class="row_max-box">
                        <figure class="fig_full_width" >
                          <img class="image_max" src="https://2020.igem.org/wiki/images/b/b1/T--Waseda--basictimecourse.png" alt="Fig.4-1-5 the time-course of each molecule concentration">
                        <figcaption class="fig_title">Fig.4-1-5 the time-course of each molecule concentration</figcaption>
                        </figure>
                      </v-row>


                         <v-row cols="12" sm="12" xs="12" md="12" lg="7" xl="7" class="row_max-box">
                          </v-row>

                      <v-row cols="12" sm="12" xs="12" md="12" lg="7" xl="7" class="row_max-box">
                        <figure class="fig_full_width" >
                          <img class="image_max" src="https://2020.igem.org/wiki/images/a/ac/T--Waseda--behaviornullandtime2.png" alt="Fig.4-1-6 the concept behavior of our gene circuit">
                        <figcaption class="fig_title">Fig.4-1-6 the concept behavior of our gene circuit </figcaption>
                        </figure>
                      </v-row>


                      <v-row cols="12" sm="12" xs="12" md="12" lg="7" xl="7" class="row_max-box">

                        <v-col>
                          <p>Table.4-1-3 basic initial values</p>
                        <template>
                          <v-simple-table>
                            <template v-slot:default>
                              <thead>
                                <tr>
                                  <th class="table-font-size">
                                    variable
                                  </th>
                                  <th class="table-font-size">
                                    value
                                  </th>
                                  <th class="table-font-size">
                                    unit
                                  </th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr
                                  v-for="item in  desserts3"
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

                        <v-col>
                          <h3></h3>
                          <p class="p_indent"> 
                            In contrast to cellular system, a cell-free system lacks cell growth and has much smaller degradation- dilution term, which lead to longer operating time.  To solve this problem, we first investigated the size of the required degradation term.  Operation time for the state switch was estimated from the time that high concentration of Samurai repressors at one equilibrium point are reduced by degradation to the repressor concentration at another equilibrium point. Although we did not consider the term of synthesis in this calculation, there was no problem because this assumption without protein synthesis shows shorter operation time than a case with protein synthesis.                            
                            By using parameters from reference (Maurizi MR,1992)  , we thus estimated operating time for state-switch between Zombie and Samurai in our cell-free system.  
                            We used the value of the equilibrium point of CI in Fig.4-1-5 and hold the equations (13) to (15). The time t1 at which the system reached one equilibrium point and the time t2 at which the system reached the other equilibrium point are expressed by equations (13) and (14), respectively. Besides, the difference between t1 and t2 is expressed as t by equation (15). We illustrated Fig.4-1-7 as the relationship between this degradation and time (equation (15)) and found that it takes too much time (approximately 20x104 min = 300 hours) to operate a state-switch between Samurai and Zombie.
                             The blue point is about normal protein degradation, and the green point shows the case of the LVA degradation tag are introduced on the protein. This estimation of switching time implies the importance of repressor production in our system.

                          </P>
                        
                        </v-col>
                      </v-row>

                                            <v-row cols="12" sm="12" xs="12" md="12" lg="7" xl="7" class="row_max-box">
                        <figure class="fig_mid_width" >
                          <img class="image_max" src="https://2020.igem.org/wiki/images/8/83/T--Waseda--zombieequation3.png" alt="Fig.4-1-4 the basic nullcline of LacI and CI">
                        <figcaption class="fig_title">Fig.4-1-9 The equation fow analysis of degradation</figcaption>
                        </figure>
                      </v-row>




                      <v-row cols="12" sm="12" xs="12" md="12" lg="7" xl="7" class="row_max-box">
                        <figure class="fig_mid_width" >
                          <img class="image_max" src="https://2020.igem.org/wiki/images/c/cb/T--Waseda--degradationvst.png" alt="Fig.4-1-7 degradation ratio and time of transition between equilibrium points">
                        <figcaption class="fig_title">Fig.4-1-7 degradation ratio and time of transition between equilibrium points</figcaption>
                        </figure>
                      </v-row>
                      
                      
                      <v-row cols="12" sm="12" xs="12" md="12" lg="7" xl="7" class="row_max-box">

                        <v-col>
                          
                          <p class="p_indent">  
                             Our simulation can show the fate of the battle between Zombie and Samurai in the test tube(Fig.4-1-8).  Depending on initial concentration of components, we can prepare a Zombie test tube and a Samurai test tube which are stable state. Then, by mixing Zombie and Samurai cell-free solutions in various ratios, the battle started. To realize this battle, we used the same parameter as Table.4-1-2 and Table.4-1-3, and created datasets which were stabilized in two states with different values.  We took the final point of dataset, added it together in various ratios such as 8:2 or 7:3, and then had it calculated again as a new initial value.                           
                             As a result, we succeeded in showing that the mixing ratios produced two states. When Samurai state cell-free solution and Zombie state cell-free solution were mixed at a ratio of 8:2, the mixed solution was stable in the Samurai state. This means that the Samurai have beaten the Zombie. However, a slight change of the ratio completely turned their fate. When the Samurai and Zombie solutions were mixed at a ratio of 7:3, the mixed solution was stable in the Zombie state and the Zombie will destroyed the Samurai.
                          </P>
                        </v-col>
                      </v-row>

                      <v-row cols="12" sm="12" xs="12" md="12" lg="7" xl="7" class="row_max-box">
                        <figure class="fig_full_width" >
                          <img class="image_max" src="https://2020.igem.org/wiki/images/f/f3/T--Waseda--basicwarincellfree.png" alt="Fig. 4-1-8 basic war in the cell-free system">
                        <figcaption class="fig_title">Fig. 4-1-8 basic war in the cell-free system</figcaption>
                        </figure>
                      </v-row>
                      
                      <v-row cols="12" sm="12" xs="12" md="12" lg="7" xl="7" class="row_max-box">

                        <v-col>
                          
                          <p class="p_indent">   
                            For artificial genetic circuits intercellular communication, we had to consider two types of signal crosstalks; one is the activation of the R protein with different communication molecules and the other is the activation of the promoter with different R proteins.  Especially, we dealt with and modeled R　protein and Promoter crosstalk.                         
                          </P>
                          <p class="p_indent">        
                            We needed to set the R protein concentration to see the crosstalk between AHL and R protein, so the Fig.4-1-3 was modified to Fig.4-1-9, and we consider the new reaction shown in Fig.4-1-10.                      
                          </p>
                        </v-col>
                      </v-row>

                      <v-row cols="12" sm="12" xs="12" md="12" lg="7" xl="7" class="row_max-box">
                        <figure class="fig_full_width" >
                          <img class="image_max" src="https://2020.igem.org/wiki/images/4/4a/T--Waseda--zombi_R_NoAHL_Nopro_image.PNG" alt="Fig.4-1-9　Improved circuit for crosstalk">
                        <figcaption class="fig_title">Fig.4-1-9　Improved circuit for crosstalk</figcaption>
                        </figure>
                      </v-row>
                      
                      
                      
                      <v-row cols="12" sm="12" xs="12" md="12" lg="7" xl="7" class="row_max-box">

                        <v-col>
                          
                          <p class="p_indent">  
                             We hold formulated equations (16) to (21), which is similar to equations (1) to (6), but we changed the first terms of equations (16) and (17) compared to equations (1) and (2). Thinking of R protein binding to DNA, we were able to regard R proteins as competitive inhibition each other. We assumed there was no great difference in promoter activation between any activated proteins, so we simply summed them up, forming equations (16) to (17). Using the parameters shown as Table.4-1-4, we drew a nullcline as Fig.4-1-11 by setting the change with time 0 of equations (16) to (21).                          
                          </P>
                        </v-col>
                      </v-row>

                      <v-row cols="12" sm="12" xs="12" md="12" lg="7" xl="7" class="row_max-box">
                        <figure class="fig_full_width" >
                          <img class="image_max" src="https://2020.igem.org/wiki/images/7/7f/T--Waseda--zombi1_R_NoAHL_pro.PNG" alt="Fig.4-1-10　Improved circuit diagram for AHL-R protein crosstalk">
                        <figcaption class="fig_title">Fig.4-1-10　Improved circuit diagram for AHL-R protein crosstalk</figcaption>
                        </figure>
                      </v-row>



                       <v-row cols="12" sm="12" xs="12" md="12" lg="7" xl="7" class="row_max-box">
                        <figure class="fig_mid_width" >
                          <img class="image_max" src="https://2020.igem.org/wiki/images/3/33/T--Waseda--zombieequation4.png" alt="Fig.4-1-4 the basic nullcline of LacI and CI">
                        <figcaption class="fig_title">Fig.4-1-13 The Equation for containing crostalk between R protein and promoter</figcaption>
                        </figure>
                      </v-row>

                      <v-row cols="12" sm="12" xs="12" md="12" lg="7" xl="7" class="row_max-box">

                        <v-col>
                          <p>Table.4-1-4 parameter set to AHL-R protein crosstalk</p>
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
                                  <th class="table-font-size">
                                    unit
                                  </th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr
                                  v-for="item in  desserts4"
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

                        <v-col>
                          <p class="p_indent"> 
                            The actual measurements of the wet experiments showed that there was severe crosstalks between R proteins and promoters. Even with the identified severe crosstalks between Rhl promoter and LuxR-3OC6HSL complex, reduction of maximum activity of  Rhl promoter allowed us to prepare test tubes for Samurai and Zombie. Because of the same activation by samurai signaling molecule for the both repressors, Samurai state seemed not to be stable (Fig.4-1-11 center). However, we could reduce CI repressor production from Rhl promoter by mutations at its DNA sequence. Even though such reduction had a risk of unitability of Zombie state, adequate modulation of maximum activity of Rhl promoter kept the stability. When we reduce the maximum expression by Rhl promoter to 1/10 compared with Lux promoter activity, phase space analysis show both stabilities of Zombie and Samurai state; the reduction did not change the number of intersections of nullclines (Fig.4-1-11 right).  Moreover, for this model we drew Fig.4-1-12 as a time course of mixed Zombie and Samurai. We found that even if we consider crosstalk, the two powers can compete and be biased to either side depending on their ratios.                           
                          </P>
                        </v-col>
                      </v-row>

                      <v-row cols="12" sm="12" xs="12" md="12" lg="7" xl="7" class="row_max-box">
                        <figure class="fig_full_width" >
                          <img class="image_max" src="https://2020.igem.org/wiki/images/e/e3/T--Waseda--RPcrosstalkgraphimprove2.png" alt="Fig.4-1-11 phase space analysis of the severe crostalk between R proteins and Promotes ">
                        <figcaption class="fig_title">Fig.4-1-11 phase space analysis of the severe crostalk between R proteins and Promotes </figcaption>
                        </figure>
                        
                      </v-row>
                      
                      
                      


                      <v-row cols="12" sm="12" xs="12" md="12" lg="7" xl="7" class="row_max-box" >
                        <figure class="fig_full_width" >
                          <img class="image_max" src="https://2020.igem.org/wiki/images/2/21/T--Waseda--R_Pcrosswarincellfree.png" alt=" Fig.4-1-12 war in the cell-free system containing crosstalk between R proteins and ">
                        <figcaption class="fig_title"> Fig.4-1-12 war in the cell-free system containing crosstalk between R proteins and </figcaption>
                        </figure>
                      </v-row>
                      
                      
                      <v-row cols="12" sm="12" xs="12" md="12" lg="7" xl="7" class="row_max-box">

                        <v-col>

                          <p class="p_indent">  
                            Considering these modeling results, Wet-Dry cycle showed that our cell-free system works as intended in the scenario.                          
                          </P>
                          
                        </v-col>
                      </v-row>

                      <v-row cols="12" sm="12" xs="12" md="12" lg="7" xl="7" class="row_max-box">

                        <v-col>
                          <h3>Reference</h3>
                          <p>
                            [1] Maurizi MR. Proteases and protein degradation in Escherichia coli. Experientia. 1992 Feb 15 48(2):178-201                            
                          </P>
                          
                        </v-col>
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
                          <p>Table.4-1-4 parameter set to AHL-R protein crosstalk</p>
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








                      <!-- <v-row cols="12" sm="12" xs="12" md="12" lg="7" xl="7" class="row_max-box">

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
                      </v-row> -->


                      
                


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

const pageTitle = 'Model';
const pageDes = "iGEM2020 Team Waseda's" + pageTitle + "page";
const pageUrl = 'https://2020.igem.org/Team:Waseda/Model';


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

      desserts: [
          {
            name: 'α1',
            des: 'Maximum expression of rate LacI, when PLux is activated by C6',
          },
          {
            name: 'α2',
            des: 'Maximum expression of rate LacI, when Pλ is repressed by CI',
          },
          {
            name: 'α3',
            des: 'Maximum expression of rate CI, when PRhl is activated by C4',
          },{
            name: 'α4',
            des: 'Maximum expression of rate LacI, when PLac is repressed by LacI',
          },{
            name: 'α5',
            des: 'Maximum expression of rate LuxI, when Pλ is repressed by CI',
          },{
            name: 'α6',
            des: 'Maximum expression of rate RhlI, when PLac is repressed by LacI',
          },{
            name: 'K1',
            des: 'z concentration at which the expression rate of LacI is half ofα1',
          },{
            name: 'K2',
            des: 'CI concentration at which the expression rate of LacI is half ofα2',
          },{
            name: 'K3',
            des: 'w concentration at which the expression rate of CI is half ofα3',
          },{
            name: 'K4',
            des: 'LacI concentration at which the expression rate of CI is half ofα4',
          },{
            name: 'K5',
            des: 'CI concentration at which the expression rate of LuxI is half ofα5',
          },{
            name: 'K6',
            des: 'LacI concentration at which the expression rate of RhlI is half ofα6',
          },{
            name: 'Nk (k=1,2,3,4,5,6)',
            des: 'Hill coefficient',
          },{
            name: 'Dk (k= LacI, CI LuxI RhlI, z, w)',
            des: 'Degradation rate',
          },{
            name: 'λz,λw',
            des: 'ratio of AHL produced by cell i depending on the concentration of I protein',
          },

      ],
      desserts2: [
          {
            name: 'α1',
            value: '100',
            unit:'ｎM/min',
          },{
            name: 'α2',
            value: '500',
            unit:'ｎM/min',
          },{
            name: 'α3',
            value: '100',
            unit:'ｎM/min',
          },{
            name: 'α4',
            value: '100',
            unit:'ｎM/min',
          },{
            name: 'α5',
            value: '400',
            unit:'ｎM/min',
          },{
            name: 'α6',
            value: '100',
            unit:'ｎM/min',
          },{
            name: 'K1',
            value: '27',
            unit:'ｎM',
          },{
            name: 'K2',
            value: '30',
            unit:'ｎM',
          },{
            name: 'K3',
            value: '6',
            unit:'ｎM',
          },{
            name: 'K4',
            value: '50',
            unit:'ｎM',
          },{
            name: 'K5',
            value: '30',
            unit:'ｎM',
          },{
            name: 'K6',
            value: '50',
            unit:'ｎM',
          },{
            name: 'nk (k=1,2,3,4,5,6)',
            value: '2',
            unit:'-',
          },{
            name: 'dk (k= LacI, CI LuxI RhlI, z, w)',
            value: '1',
            unit:'/min',
          },{
            name: 'λz,λw',
            value: '1',
            unit:'-',
          },
      ],
      desserts3: [
          {
            name: 'LacI',
            value: '80',
            unit:'ｎM',
          },
          {
            name: 'CI',
            value: '70',
            unit:'ｎM',
          },
          {
            name: 'LuxI',
            value: '80',
            unit:'ｎM',
          },
          {
            name: 'RhlI',
            value: '80',
            unit:'ｎM',
          },
      ],
      desserts4: [
          {
            name: 'α1',
            value: '500',
            unit:'ｎM/min',
          }, {
            name: 'α2',
            value: '80',
            unit:'ｎM/min',
          }, {
            name: 'α3',
            value: '90',
            unit:'ｎM/min',
          }, {
            name: 'α4',
            value: '400',
            unit:'ｎM/min',
          }, {
            name: 'α5',
            value: '100',
            unit:'ｎM/min',
          }, {
            name: 'α6',
            value: '100',
            unit:'ｎM/min',
          }, {
            name: 'α7',
            value: '100',
            unit:'ｎM/min',
          }, {
            name: 'α8',
            value: '100',
            unit:'ｎM/min',
          },{
            name: 'k1',
            value: '50',
            unit:'ｎM',
          },{
            name: 'k2',
            value: '6',
            unit:'ｎM',
          },{
            name: 'k3',
            value: '20',
            unit:'ｎM',
          },{
            name: 'k4',
            value: '50',
            unit:'ｎM',
          },{
            name: 'k5',
            value: '30',
            unit:'ｎM',
          },{
            name: 'k6',
            value: '50',
            unit:'ｎM',
          },{
            name: 'k7',
            value: '6',
            unit:'ｎM',
          },{
            name: 'k8',
            value: '27',
            unit:'ｎM',
          },{
            name: 'nk(k=1,2,3,4,5,6)',
            value: '2',
            unit:'-',
          },{
            name: 'dk(k= LacI, CI LuxI RhlI, z, w)',
            value: '1',
            unit:'/min',
          },{
            name: 'λz,λw',
            value: '1',
            unit:'-',
          },
      ],
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

