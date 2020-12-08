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
                            <h1 class='h1_text' pushElementOffsetTop>Entrepreneurship</h1>
                          </v-col>
                        </v-row>
                    </v-row>
                    
                    <v-row v-scroll="pushScrollY" id="OverviewTop"> 


                    </v-row>


                      <v-row cols="12" sm="12" xs="12" md="12" lg="7" xl="7" class="row_max-box">

                        <v-col>
                          <h3>Introduction</h3>
                          <p class="p_indent">   
                            It is important to consider how we implement our project in the real world. Thus, to give back to society through our iGEM activities, we organized educational activities and entrepreneurship. It is not realistic to think about worldwide problems, so we tackled issues which are close to us and try to realize in fact.
Here, we would like to introduce our business activities.

                          </p>
                        </v-col>
                      </v-row>


                      <v-row cols="12" sm="12" xs="12" md="12" lg="7" xl="7" class="row_max-box">

                        <v-col>
                          <h3></h3>
                          <p class="p_indent">         
                            First, we interviewed citizens and experts to verify the validity, safety, and ethics of the project. Consequently, all the aspects were confirmed. ( Go to Human Practice page) 

We decided to create our business model because we were interested in the social implementation of our project.  It's not a good idea to implement your research project directly into real-world. It's important to adapt the implementation to the real-world needs. 


                   
                          </P>
                          <p class="p_indent"> 
                            To learn the basics of business model, we first went to interview Mr. Watanabe, who is the representative director of Maximize, inc. as well as an expert in business model creation, we learned the basics of business model creation from them. The important things of the business model are 4 points: The What, Why, How and Who (Fig).                                
                          </p>
                        </v-col>
                      </v-row>

                      <v-row cols="12" sm="12" xs="12" md="12" lg="7" xl="7" class="row_max-box">
                        <figure class="fig_full_width" >
                          <img class="image_max" src="https://2020.igem.org/wiki/images/c/c7/T--Waseda--InpriFig1.png" alt="Logo">
                        
                        </figure>
                      </v-row>
                



                   

                      <v-row cols="12" sm="12" xs="12" md="12" lg="7" xl="7" class="row_max-box">

                        <v-col>
                          <h3></h3>
                          <p class="p_indent">  
                            Like planning for scientific research, business model creation should also learn from previous success.  From Mr. Watanabe’s point of view, a business has a higher chance of success when two of four points are changed from the existing successful business. These is called a business model innovation.                            
                          </P>
                          <p class="p_indent">  
                            After the interview, we brainstormed to create a business model based on “SAMURAI” System                            
                          </p>
                        </v-col>
                      </v-row>

                    



                      <v-row cols="12" sm="12" xs="12" md="12" lg="7" xl="7" class="row_max-box">

                        <v-col>
                          <h3></h3>
                          <p class="p_indent"> 
                            The smell of monoterpenes has the ability to repel insects. These are natural and are less likely to cause allergies than commonly used artificial products. People living with animals and families with small children have needed our products based on natural products.                           
                          </P>
                          <p class="p_indent"> 
                            Monoterpene synthesis can take advantage of cell-free system. Monoterpenes are toxic in the cell and difficult to synthesize on a large scale. However, the cell-free system avoids toxicity and allows the mass synthesis of monoterpenes. (Go to monoterpenes synthesis)                              
                          </p>
                        </v-col>
                      </v-row>
                      <v-row cols="12" sm="12" xs="12" md="12" lg="7" xl="7" class="row_max-box">

                        <v-col>
                          
                          <p class="p_indent">     
                            These are the "How" and "Who" of the four points of the business model. We have also made strong changes in the "What".                        
                          </P>
                          <p class="p_indent">
                            We would like to take the advantage of the safe biotechnological properties of the cell-free system.                                
                          </p>
                        </v-col>
                      </v-row>

                
                      <v-row cols="12" sm="12" xs="12" md="12" lg="7" xl="7" class="row_max-box">

                        <v-col>
                 
                          <p class="p_indent">     
                            We thought about producing the insect repellent of monoterpene in real-time, when we want to use it. The effectiveness of the insect repellent is reduced due to evaporation, using a monoterpene that has already been created. By producing it in real-time, contrary, the effect of the insect repellent could keep constant and for a longer time. 
To implement those features, we use the SAMURAI System using the mulit IFFL system.  
(GO to Model page)  
                         
                          </p>
                        </v-col>
                      </v-row>

                      <v-row cols="12" sm="12" xs="12" md="12" lg="7" xl="7" class="row_max-box">
                        <figure class="fig_full_width" >
                          <img class="image_max" src="https://2020.igem.org/wiki/images/4/44/T--Waseda--InpriFig2.png" alt="Logo">
                        <figcaption class="fig_title">Fig 6-5-2  The insect repellent of monoterpene</figcaption>
                        </figure>
                      </v-row>
                
                      <v-row cols="12" sm="12" xs="12" md="12" lg="7" xl="7" class="row_max-box">

                        <v-col>
                          <h3></h3>
                          <p class="p_indent">    
                            We would like to challenge the already established insect repellent market by updating the "How" and "Who" and "What" of existing better business model.  
The most important thing about business success is matching the business model you create with the real-world issues. 
                        
                          </P>
                          <p class="p_indent">  
                            Many early business models are unsuccessful because they do not match the real-world needs. 
In order to improve the business model, it is important to repeat steps to verify the real-world needs and restructure the business model.
                            
                          </p>
                        </v-col>
                      </v-row>

                      <v-row cols="12" sm="12" xs="12" md="12" lg="7" xl="7" class="row_max-box">
                        <figure class="fig_full_width" >
                          <img class="image_max" src="https://2020.igem.org/wiki/images/2/28/T--Waseda--InpriFig3.png" alt="Logo">
                        <figcaption class="fig_title">Fig 6-5-3 The process of business model improvement</figcaption>
                        </figure>
                      </v-row>
                
                      <v-row cols="12" sm="12" xs="12" md="12" lg="7" xl="7" class="row_max-box">

                        <v-col>
                          
                          <p class="p_indent"> 
                            We interviewed many people to explore the needs of our business model. The business model was more improved while addressing the challenges that emerged from the interview.                           
                          </P>
                         
                        </v-col>
                      </v-row>

                      <v-row cols="12" sm="12" xs="12" md="12" lg="7" xl="7" class="row_max-box">
                        <figure class="fig_full_width" >
                          <img class="image_max" src="https://2020.igem.org/wiki/images/8/81/T--Waseda--InpriFig4.png" alt="Logo">
                        <figcaption class="fig_title">Fig 6-5-4 Improved business model </figcaption>
                        </figure>
                      </v-row>


                        <v-row cols="12" sm="12" xs="12" md="12" lg="7" xl="7" class="row_max-box">
                        <figure class="fig_full_width" >
                          <img class="image_max" src="https://2020.igem.org/wiki/images/5/5d/T--Waseda--InpriFig5.png" alt="Logo">
                        <figcaption class="fig_title"></figcaption>
                        </figure>
                      </v-row>


                
                      <v-row cols="12" sm="12" xs="12" md="12" lg="7" xl="7" class="row_max-box">

                        <v-col>
                     
                          <p class="p_indent">  
                            Through this verification, we were able to confirm that there is a definite need for our business model. But, surprisingly, in those interviews, we found that there was another great need. 
People who are concerned about whether or not they contain the substance that causes allergies are careful to determine whether or not they contain the source of their allergies. 
We got the inspiration for detecting allergens and pivoted to a business model for substance detection using the cell-free system. 
                          
                          </P>
                         
                        </v-col>
                      </v-row>

                    
                
                      <v-row cols="12" sm="12" xs="12" md="12" lg="7" xl="7" class="row_max-box">

                        <v-col>
                          <h3>Integrated Human Practice </h3>
                           <h3>1. Improve our business model</h3>
                          <p class="p_indent"> 
                            The need for substance detection was discovered through interviews with primary human practice. The potential need for material detection is strong in three market segments : medical, soil and water. Therefore, we pivoted our business model and created a new business model for substance detection along with business model canvas (nine axes format).                            
                          </P>
                          
                        </v-col>
                      </v-row>

                      <v-row cols="12" sm="12" xs="12" md="12" lg="7" xl="7" class="row_max-box">
                        <figure class="fig_full_width" >
                          <img class="image_max" src="https://2020.igem.org/wiki/images/1/1c/T--Waseda--BusinessModel_Canvas.png " alt="Logo">
                        <figcaption class="fig_title">Fig 6-5-5　 Business model canvas on Detection kit (nine axes format) </figcaption>
                        </figure>
                      </v-row>
                
                      <v-row cols="12" sm="12" xs="12" md="12" lg="7" xl="7" class="row_max-box">

                        <v-col>
                          
                          <p class="p_indent">
                            Although existing substance detection kits such as pH assay kits, flu test kits and pack tests are mass-produced and are inexpensive, their usage are limited to detection of ordinary conditions and familiar substances. As a result, only a small number of kits are available for the detection of special substances. Therefore, we had decided to develop a cell-free detection kit that can be used for the detection of special substances with minor demand.                               
                          </p>
                        </v-col>
                      </v-row>

        
            
                
                      <v-row cols="12" sm="12" xs="12" md="12" lg="7" xl="7" class="row_max-box">

                        <v-col>
                        
                          <p class="p_indent">  
                            It has already been proven that many substances can be detected using the cell-free system. On the other hand, because of the limited needs in the market, it is difficult to make a business out of selling the kit alone. Therefore, we have decided to provide a software package to support the necessary DNA designing process for detection along with the kit. Additionally, our software can be systematized to automatically select what is needed for the detection, allowing each person to create customized detection kit.

                          
                          </P>
                        
                        </v-col>
                      </v-row>

                      <v-row cols="12" sm="12" xs="12" md="12" lg="7" xl="7" class="row_max-box">
                        <figure class="fig_full_width" >
                          <img class="image_max" src="https://2020.igem.org/wiki/images/6/6e/T--Waseda--Detection_kit.png " alt="Logo">
                        <figcaption class="fig_title">Fig 6-5-6  Our Detection kit idea </figcaption>
                        </figure>
                      </v-row>
                
                      <v-row cols="12" sm="12" xs="12" md="12" lg="7" xl="7" class="row_max-box">

                        <v-col>
                       
                          <p class="p_indent">    
                            We validated the detection kit to make it more concrete. 
First, the construction of the cell-free system as hardware was validated by conducting a project which adopted a number of cell-free systems. 
Secondly, the verification of the software creation required a comparison of the modeling results with experimental results to accurately understand the behavior of the modules. We verified the behavior of the system in a cell-free system by using several systems.                         
                          </P>
                         
                        </v-col>
                      </v-row>

                
                      <v-row cols="12" sm="12" xs="12" md="12" lg="7" xl="7" class="row_max-box">

                        <v-col>
                       
                          <p class="p_indent">     
                            
	For example, with respect to spinach growth, an imbalance of potassium and magnesium in the soil can lead to the development of yellowing symptoms in the leaves. [Ministry of Agriculture, Forestry and Fisheries of Japan, 2019]
                       
                          </P>
                          <p class="p_indent">   
                            Like this, enabling an effortless measuring process of substance balance is a major advantage of our hardware.                            
                          </p>
                        </v-col>
                      </v-row>

                  
                
                      <v-row cols="12" sm="12" xs="12" md="12" lg="7" xl="7" class="row_max-box">

                        <v-col>
                          <h3>2. Start searching our target substances </h3>
                          <p class="p_indent">      
                            
After creating a business model canvas based on this idea, we realized that we needed to create an established detection kit and enhance our software in the early stages. 
The first substances that should be established for detection were characterized by the following characteristics. 
                      
                          </P>
                          <p class="p_indent"> 
                            1. Substances that need to be tested regularly 
2. Substances that are needed on a local municipal basis rather than on an individual basis 
                             
                          </p>
                        </v-col>
                      </v-row>

                 
                
                      <v-row cols="12" sm="12" xs="12" md="12" lg="7" xl="7" class="row_max-box">

                        <v-col>
                          
                          <p class="p_indent">   
                            We interviewed a number of people in order to examine what substances were appropriate as the primary targets of our kit. 
Here we would like to introduce the detection of substances in sewage treatment, for which there was a particularly large demand.
                         
                          </P>
                          <p class="p_indent">                              
                          </p>
                        </v-col>
                      </v-row>

                
                      <v-row cols="12" sm="12" xs="12" md="12" lg="7" xl="7" class="row_max-box">

                        <v-col>
                          <h3>Interview </h3>
                          <p class="p_indent">   
                            We interviewed several local agencies and experts, believing that resolving the issues that exist locally would best share their awareness of themselves and their problems and increase the success rate of the project.                          
                          </P>
                         
                        </v-col>
                      </v-row>

                    
                
                      <v-row cols="12" sm="12" xs="12" md="12" lg="7" xl="7" class="row_max-box">

                        <v-col>
                          <h3>(A) Interview with the Environmental Policy Division of the Chuo City  </h3>
                          <h3>1. Pre-interview hypothesis</h3>
                          <p class="p_indent">      
                            We thought that there would be a demand for water quality testing because there are many rivers in our hometown (Chuo City, Tokyo) and because the area faces Tokyo Bay. In addition, we thought that the city has tourist attractions such as Nihonbashi, Ginza, and Tsukiji, so the city would be willing to test water quality from the perspective of scenery. Therefore, we interviewed the person in charge of environmental policy in Chuo City.                       
                          </P>
                     
                        </v-col>
                      </v-row>

                    
                
                      <v-row cols="12" sm="12" xs="12" md="12" lg="7" xl="7" class="row_max-box">

                        <v-col>
                          <h3>2. Interviews on the current status of river water quality surveys</h3>
                          <p class="p_indent"> 
                            The Environmental Policy Division of Chuo City examines the legally required criterion of rivers. The criteria categories include pH, biochemical oxygen demand (BOD), chemical oxygen demand (COD), suspended solids (SS), dissolved oxygen (DO), and suspended solids (SS).  Since these principles have direct effects on our living environment, the emphasis is on whether or not they make the city residents feel uncomfortable when they use the waterfront.  
Besides, sudden deterioration of water quality is rare, and the criterion are met in most cases. However, there are occasional deterioration of BOD and DO levels and as a long-term measure, the Sewerage Department has requested that the sewage treatment capacity be increased.  
In addition, obtained information from such examination by Chuo City is provided to the Tokyo Metropolitan Government in the event of large-scale environmental problems such as red tide. The Tokyo Metropolitan Government is responsible for surveys and responses across multiple administrative areas.  
The survey itself is outsourced to a contractor and is conducted about four times a year at six locations in the ward.  The base of survey method is also set by law. The Environmental Policy Division feels that there is no problem with the established method. 
                           
                          </P>
                          
                        </v-col>
                      </v-row>

               
                
                      <v-row cols="12" sm="12" xs="12" md="12" lg="7" xl="7" class="row_max-box">

                        <v-col>
                          <h3>3. Matching our projects with the needs of the field</h3>
                          <p class="p_indent">  
                            This local agency has found that there is not much demand for our kits in terms of water quality testing. However, they noted the fact that our kits can quickly examine large numbers of samples and advised us that there would be a demand for our kits where they are responsibility in the safety of the citizens. (e.g., water department, fire and sewer department, dealing with water quality safety, health department where quick actions are needed in the event of food poisoning, etc. and that a need for our project may exist for problems caused by wild cat droppings in parks.                           
                          </P>
                        
                        </v-col>
                      </v-row>


                
                      <v-row cols="12" sm="12" xs="12" md="12" lg="7" xl="7" class="row_max-box">

                        <v-col>
                          <h3>4. Interview Summary  </h3>
                          <p class="p_indent">   
                            Water quality testing is mainly conducted in the city of Tokyo as an environmental measure, and the method and criterion are strictly regulated by law.
In the field of water quality testing, the Tokyo Metropolitan Government, which is a broad-based government agency, is also conducting research and taking measures to address categories that may affect health and the environment.
With our testing kits, samples can be tested quickly and in large scale, and there will be demand where safety is concerned.  We also found that there may be a need in terms of safety assurance in parks.  

                         
                          </P>
                       
                        </v-col>
                      </v-row>

                
                      <v-row cols="12" sm="12" xs="12" md="12" lg="7" xl="7" class="row_max-box">

                        <v-col>
                          <h3>(B) Interview with the Sewerage Department of Tokyo  </h3>
                          <h3>1. Pre-interview hypothesis </h3>
                          <p class="p_indent">
                            From interviews with local government officials, we considered further project matching and interviewed the Technology Development Division of the Tokyo Metropolitan Government's Bureau of Sewerage.  The team is an expert on the validation of new technologies and ideas related to sewerage projects, and we figured that an interaction with the team would significantly improve our project.                             
                          </P>
                        
                        </v-col>
                      </v-row>

                
                
                      <v-row cols="12" sm="12" xs="12" md="12" lg="7" xl="7" class="row_max-box">

                        <v-col>
                          <h3>2. Interviews on the current status of sewage treatment</h3>
                          <p class="p_indent">   
                            The Sewerage Bureau tests the quality of water discharged into public waters (rivers and seas) 2-24 times a year based on the Sewerage Law (the frequency varies depending on the analysis item). On the other hand, if abnormalities are suspected in the sewage inflow, a pack test is also used to quickly measure the water quality.  
These pack tests are a fairly popular and inexpensive method. Tokyo's tap water is of such high quality that it can be used as drinking water. In order to keep high quality of the water, great care is taken to control the quality of the water. For example, Gas chromatography is used for detection and measurement of 2-MIB (2-Methylisoborneol), which causes moldy odors of water. 
Water quality investigations at sewage treatment plants are performed chemically on the sewage inflow after the sewage has been treated through a tank containing activated sludge.  
Those in the treatment process and the treated water are measured in real time using sensors and other instruments, and the condition of the activated sludge is adjusted by changing the operating conditions in response to changes in the condition of sludge. 
However, it takes 0.5 to 1 day to adjust the condition of the activated sludge and to improve the conditions of the compounds after detecting abnormalities in the compounds in the wastewater.  During this time, the treated water quality may deteriorate.  

                         
                          </P>
                          <p class="p_indent">                              
                          </p>
                        </v-col>
                      </v-row>

                
                      <v-row cols="12" sm="12" xs="12" md="12" lg="7" xl="7" class="row_max-box">

                        <v-col>
                          <h3>3.Matching our projects with the needs of the field  </h3>
                          <p class="p_indent"> 
                            It has been found that sewage treatment plants are plagued with sewage treatment problems due to the condition of the activated sludge. To address the problem, it is important to measure the condition of the activated sludge tank accordingly. 
Consequently, there was a strong need for our project to be able to detect compounds and bacteria. So we discussed the issue in more detail.  
                           
                          </P>
                          
                        </v-col>
                      </v-row>


                      


                          <v-row cols="12" sm="12" xs="12" md="12" lg="7" xl="7" class="row_max-box">

                        <v-col>
                          <h3>4. Specific strategies </h3>
                          <p class="p_indent">   
                                                    AO (ANAEROBIC OXIC) AND A2O (ANAEROBIC ANOXIC OXIC) METHODS ARE USED FOR SEWAGE WATER TREATMENT
                          </P>
                          <p class="p_indent">                              
                          </p>
                        </v-col>
                      </v-row>

                      <v-row cols="12" sm="12" xs="12" md="12" lg="7" xl="7" class="row_max-box">
                        <figure class="fig_full_width" >
                          <img class="image_max" src="https://2020.igem.org/wiki/images/3/32/T--Waseda--Integrate_HP_AO.png " alt="Logo">
                        <figcaption class="fig_title">Fig 6-5-7  AO method and A2O method </figcaption>
                        </figure>
                      </v-row>


                      <v-row cols="12" sm="12" xs="12" md="12" lg="7" xl="7" class="row_max-box">
                        <figure class="fig_full_width" >
                          <img class="image_max" src="https://2020.igem.org/wiki/images/4/48/T--Waseda--Integrate_HP_A2O.png " alt="Logo">
                        <figcaption class="fig_title">Fig 6-5-7  AO method and A2O method </figcaption>
                        </figure>
                      </v-row>
                          <v-row cols="12" sm="12" xs="12" md="12" lg="7" xl="7" class="row_max-box">

                        <v-col>
                          <h3></h3>
                          <p class="p_indent">    
                            In these methods, phosphorus-storing bacteria are used to remove phosphorous (P) and nitrifying and denitrifying bacteria are used to remove nitrogen (N). However, both P and N are removed by the AO method. However, the removal of P and N are opposite functions. Therefore, if one of them becomes too strong, the removal of the other becomes insufficient. Under normal conditions, the rate of change is slow, but precipitation significantly changes the situation. Precipitation causes three to five times as much sewage to flow into the sewage treatment plant at once. When this happen, the condition of the activated sludge tank changes greatly due to changes in the balance of the sewage components.  There are many problems caused by the condition of activated sludge tanks in particular. 
One major problem is the growth of malignant bacteria, such as actinomycetes.  Actinomycetes surround the bacteria with mycolic acid, which prevents the bubbles from popping and causes bubbles to increase on the surface of the water. Since the acid is a substance that cannot be biologically treated, it remains floating on the surface of the water together with the activated sludge, which is unfavorable for solid-liquid separation in the sedimentation basin. In addition, suppressing the amount of air supply to prevent foaming causes problems such as not being able to supply the oxygen necessary for treatment, which worsens the quality of treated water, and the scum that remains on the surface of the water causes flies and odors to be generated.  
                        
                          </P>
                          <p class="p_indent">  
                            In order to prevent these problems, there was a need to determine the amount of actinomycetes and mycolic acid in the activated sludge and to measure the balance between them and various bacteria.  
They also pointed out that the kit may also be used as household tap water quality checking device.  
                            
                          </p>
                        </v-col>
                      </v-row>


                       <v-row cols="12" sm="12" xs="12" md="12" lg="7" xl="7" class="row_max-box">

                        <v-col>
                          <h3>5. Interview Summary</h3>
                          <p class="p_indent">   
                            In our sewage treatment, we found a great need that matched our project.   
Possible usage of our kit:  
①Check the balance of the Bacteria used in sewage treatment s   
②Measure the Balance of malignant Substances in sewage treatment  
③Simple kit for each household to ensure high quality tap water.  
We then held discussions with experts in the field to discuss specific issues to be addressed in the future.  

                         
                          </P>
                          <p class="p_indent">                              
                          </p>
                        </v-col>
                      </v-row>



 <v-row cols="12" sm="12" xs="12" md="12" lg="7" xl="7" class="row_max-box">

                        <v-col>
                          <h3>(C) Advice from the academic side </h3>
                          <p class="p_indent"> 
                            In answering this demand, we asked Dr. Nishida, an expert on environmental bacteria, for advice on whether our detection kit is technically unfeasible and what we should consider in the future.                           
                          </P>
                          <p class="p_indent">                              
                          </p>
                        </v-col>
                      </v-row>

                      <v-row cols="12" sm="12" xs="12" md="12" lg="7" xl="7" class="row_max-box">
                        <figure class="fig_full_width" >
                          <img class="image_max" src="https://2020.igem.org/wiki/images/3/31/T--Waseda--Interview.png " alt="Logo">
                        <figcaption class="fig_title">Fig 6-5-8 Interview </figcaption>
                        </figure>
                      </v-row>


 <v-row cols="12" sm="12" xs="12" md="12" lg="7" xl="7" class="row_max-box">

                        <v-col>
                          <h3></h3>
                          <p class="p_indent">  
                            Dr. Nishida said that he did not see any apparent technical problems that were absolutely unattainable and we were ready to conduct a demonstration of our kit. He also advised us to focus on the operation in a confined environment (e.g., sewage) and the quantitative nature of the materials to be tested.                          
                          </P>
                          <p class="p_indent">                              
                          </p>
                        </v-col>
                      </v-row>


 <v-row cols="12" sm="12" xs="12" md="12" lg="7" xl="7" class="row_max-box">

                        <v-col>
                          <h3>Summary</h3>
                          <p class="p_indent">   
                            We constructed our business model through discussing with a business expert. With our primary monoterpene insect repellent business model, we found the need for substance detection and pivoted our business model.
As our new business model, we devised a cell-free substance detection kit and a software package to support the necessary DNA designing process for detection.
To make our business model more concrete, we interviewed with professional institution which manages water quality examination. After that, we asked an expert for some advices from the academic viewpoint.
Now, we are ready to conduct a demonstration of our kit.
                         
                          </P>
                          <p class="p_indent">                              
                          </p>
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

const pageTitle = 'Entrepreneurship';
const pageDes = "iGEM2020 Team Waseda's" + pageTitle + "page";
const pageUrl = 'https://2020.igem.org/Team:Waseda/Entrepreneurship';


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
</style>

