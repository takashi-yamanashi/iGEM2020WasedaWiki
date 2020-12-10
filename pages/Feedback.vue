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
                                <circle fill="none" cx="100" cy="100" r="80" stroke="#F4CCCB" stroke-width="18" id="triangle" :style="{ 'stroke-dashoffset': scrollPer}" transform='rotate(270 100 100)'/>  
                                <!-- style="stroke-dasharray: 420.293; stroke-dashoffset: 210.293;" -->
                                
                                Sorry, your browser does not support inline SVG. 
                              </svg>
                              <img z-indx="10" class="navi_svg" src="https://2020.igem.org/wiki/images/2/2f/T--Waseda--iGEM2020wikiicons-award.svg">
            
                        </v-row>

            
                    <v-row class="navi_text">
                        <!-- <a href="Protocol#S12"><v-row :class="{ 'title_text': true, 'title_text_active': check[0] }">Cell extract(S12)</v-row></a> -->
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
                            <h1 class='h1_text' pushElementOffsetTop>Feedback comment</h1>
                          </v-col>
                        </v-row>
                    </v-row>
                    
                    <v-row v-scroll="pushScrollY" id="OverviewTop"> 
                      <v-row class="row_max-box">
                        <h2 class="h2_text">Feedback comment (Team Waseda)</h2>
                      </v-row>
                      </v-row>

                      <v-row cols="12" sm="12" xs="12" md="12" lg="7" xl="7" class="row_max-box">

                        <v-col>
                          
                          <p class="p_indent" id="S12"> 
                             
                          </p>
                          
                        </v-col>
                      </v-row>

                      <v-row cols="12" sm="12" xs="12" md="12" lg="7" xl="7" class="row_max-box">

                        <div>
                        
                          <h1 class='firstHeading' id="section_01">Judging_Feedback For Waseda</h1>
                           <!-- start content -->

                            <div style='margin:5px 20px;'><span style='font-size:18px;font-weight:bold'>Comments from the judges</span>
                                <div style='padding: 0 0 10px 40px;'><br>Judge 1<ul>
                                    <li style='padding-right:60px;'>The team members of the project are very happy and hardworking. I like the inspiration of the project and the design made by the team members, as well as the details of the project. The presentation was also very good </li>
                                    <li style='padding-right:60px;'>If the team can let more members participate in the process of answering, it will better show the division of labor and cooperation of the team. The design of part can also be a little more complicated. It's just my personal suggestion. I really appreciate this project</li>
                                    </ul><br>Judge 2<ul>
                                    <li style='padding-right:60px;'>Fantastic job guys! Good example of engineering success. I like how you seamlessly move back and forth between your models and experiments. 
                                    Great job with the modelling app! I believe you have created a superb tool to encourage and help young students. The app has a lot of potential.
                                    Finally, loved the Samurai vs Zombie story. Kudos on getting across your project in such an innovative way. If this were an anime, I would be hooked!</li><li style='padding-right:60px;'>Once again, great job guys. I have a few suggestions for future work.
                                    1) Test the model with stochastic simulations and check whether quorum sensing allows creation of spatio-temporal patterns. I believe the unstable steady-state might persist longer with quorum sensing and stochasticity and this will enable pattern formation.
                                    2) Another thing to consider is the role of stochasticity in fate determination. If the system is noisy, and you perform your experiment in multiple replicates with similar starting relative concentrations for Zombie and Samurai, would all the tubes have the same fate? Or would you find a distribution of cell fates?
                                    3) Good job in figuring out how to tackle cross-talk! I would also suggest performing a more thorough bifurcation analysis of different system parameters and identify regions in the parameter phase space which allow bistability. Also, it would be helpful to compare the identified region with biologically feasible values.
                                    I believe adding the stochastic element with bifurcation analysis will help you to publish the model in a computational biology journal. All the best!</li>
                                    </ul><br>Judge 3<ul>
                                        <li style='padding-right:60px;'>Team Waseda clearly put in considerable effort into making their project accessible to a wide audience. This project demonstrates excellent design and story telling. The team has done an excellent job communicating the sophisticated modeling effort that underlies your Zombies vs Samurai project. </li>
                                        <li style='padding-right:60px;'>The team could more carefully consider the effect of noise and stochastic behavior in their models. </li>
                                    </ul><br>Judge 4<ul>
                                        <li style='padding-right:60px;'>Very impressive amount of work you were able to do in vitro. I think your idea to promote and explain your work using a story is very original. I loved your app too. And finally great job in applying engineering principles, DBTL cycle and taking calibrated measurement. true engineers you are! Good luck next year in implementing in vivo.</li>
                                        <li style='padding-right:60px;'>Consider adding noise and stochasticity into your models because you will need those for in vivo experiments.
                                    Your wiki have some broken links. The "project" tab gets me into a locked state which then does not show up any content. I had to exit the page and restart to see content again.
                                    And finally next year I hope you feel more relaxed when interacting with judges whose questions were not for criticizing your work but for understanding your work better of helping you improve your work. We really are not that scary ;-)
                                    </li></ul><br>Judge 5<ul>
                                        <li style='padding-right:60px;'>This project is super cool, and it's even more awesome that you were able to obtain experimental data during COVID. Doing cell-free expression at home is clever. The use of synthetic biology was interesting, and your parts characterization were good. Very happy to see you used FITC units for the in vitro assays to calibrate your measurements for others to compare data. Fun presentation video, great story-telling, and overall great project. Congratulations teams for all your hard work, and I hope you learned a lot through this experience! Make sure to teach your future students what you've learned, and best wishes for all of your futures :) </li><li style='padding-right:60px;'>- the rationale for your choice of promoters, ribosomal binding site (RBS) strength, and degradation tag should be discussed more when you introduce genetic circuit maps and interaction diagrams between operons/genes, especially because you are modelling your circuits and need to initialize your parameters for expression strength.
                                    - your human practices needs more structure. It is obvious that you conducted stakeholder engagement and educational outreach, but next time be more clear about how human practices affected your project direction. 
                                    - for entrepreneurship, everything is about money. You need to not only complete a business canvas, but you need to think about the economics of the company. How many kits will you sell at a time, and what are the factors that need to be accounted for in the production cost calculation? Why are you selling it at $3? Is this based on what consumers told you would be reasonable? Just like you developed a good model of your genetic circuits, you should also put in the same efforts to delineate the finances for your business plan IF you want to REALLY strive for the Entrepreneurship special prize. 
                                    - </li></ul><br>Judge 6<ul>
                                        <li style='padding-right:60px;'>I think this is probably most innovative and unique Integrated Human Practices with the software tool designed for students. truly amazing work. I'm also very impressed at the amount of experimental data you were able to produce.</li>
                                        <li style='padding-right:60px;'>Very excited to see young entrepreneurs. However, I would recommend taking a hard look at your business canvas and figuring how much it would cost to achieve an MVP, and evaluate how you can scale up production. If you were to create a successful business, strong tech alone is not enough. You will need to really dive into the economics of your market and your manufacturing/supply chain. I think you guys are on the right track, but definitely think deeper about your product market fit.</li>
                                        </ul>
                                </div>
                            </div>
                                                                    
                                    
                            <br><div style="margin:5px 20px;">
                                <span style='font-size:18px;font-weight:bold'>Details of the votes</span>
                                    <div style='width:800px;margin: 0 0 0 40px;'>The tables below present the actual number of votes by the judges. They are provided to help you
                                                understand how the judges interpreted your project. Each row represents one aspect of your project. The boxes contain the number of votes. Higher
                                            votes are on the left.
                                            
                                            <table id='votes'>
                                                <tr>
                                                    <td colspan=9 style='padding-top:10px;'>Project - Standard track</td>
                                                </tr>
                                                <tr>
                                                    <td style='width:15px'></td>
                                                        <td class='box' >2</td>
                                                        <td class='box' >3</td>
                                                        <td class='box' >1</td>
                                                        <td class='box' ></td>
                                                        <td class='box' ></td>
                                                        <td class='box' ></td>
                                                    <td style='padding-left:30px; height:40px;'>How much did the team accomplish (addressed a real world problem, produced Biobricks, carried out Human Practices, created a wiki, presentation, poster, etc.)?</td>
                                                </tr>
                                                
                                                <tr>
                                                    <td style='width:15px'></td>
                                                    <td class='box' >1</td>
                                                    <td class='box' >4</td>
                                                    <td class='box' >1</td>
                                                    <td class='box' ></td>
                                                    <td class='box' ></td>
                                                    <td class='box' ></td>
                                                    <td style='padding-left:30px;'>How impressive is this project? </td>
                                                </tr>

          
                                                
                                                <tr>
                                                    <td style='width:15px'>
                                                    </td><td class='box' >1
                                                    </td><td class='box' >3
                                                    </td><td class='box' >2
                                                    </td><td class='box' >
                                                    </td><td class='box' >
                                                    </td><td class='box' >
                                                    </td><td style='padding-left:30px;'>Did the project work or is it likely to work?
                                                </td></tr>
                                                
                                                <tr><td style='width:15px'></td><td class='box' ></td><td class='box' >2</td><td class='box' >2</td><td class='box' >2</td><td class='box' ></td><td class='box' >
                                                    </td><td style='padding-left:30px;'>Is the project likely to have an impact?
                                                </td></tr><tr><td style='width:15px'></td><td class='box' >2</td><td class='box' >1</td><td class='box' >3</td><td class='box' ></td><td class='box' ></td><td class='box' >
                                                    </td><td style='padding-left:30px;'>How well were engineering principles used (e.g., design-build-test cycle, use of standards, modularity, etc.)?
                                                </td></tr><tr><td style='width:15px'></td><td class='box' >3</td><td class='box' >2</td><td class='box' >1</td><td class='box' ></td><td class='box' ></td><td class='box' >
                                                    </td><td style='padding-left:30px;'>How thoughtful and thorough was the team's consideration of human practices?
                                                </td></tr><tr><td style='width:15px'></td><td class='box' >3</td><td class='box' >2</td><td class='box' >1</td><td class='box' ></td><td class='box' ></td><td class='box' >
                                                    </td><td style='padding-left:30px;'>How much of the work did the team do themselves and how much was done by others?
                                                </td></tr><tr><td style='width:15px'></td><td class='box' >3</td><td class='box' >2</td><td class='box' >1</td><td class='box' ></td><td class='box' ></td><td class='box' >
                                                    </td><td style='padding-left:30px;'>Did the team design a project based on synthetic biology and standard components (Biobricks, software, etc.)?
                                                </td></tr><tr><td style='width:15px'></td><td class='box' >1</td><td class='box' >2</td><td class='box' >2</td><td class='box' >1</td><td class='box' ></td><td class='box' >
                                                    </td><td style='padding-left:30px;'>Are the project components well documented on the team's wiki/Registry pages (parts should be documented in the Registry)?
                                                </td></tr><tr><td style='width:15px'></td><td class='box' ></td><td class='box' >1</td><td class='box' >2</td><td class='box' >3</td><td class='box' ></td><td class='box' >
                                                    </td><td style='padding-left:30px;'>How competent were the team members at answering questions?</td></tr><tr><td colspan=9 style='padding-top:10px;'>Project - Special track
                                                </td></tr><tr><td><td colspan=9>No votes cast for this category 


                                                </td></tr><tr><td colspan=9 style='padding-top:10px;'>Wiki

                                                </td></tr><tr><td style='width:15px'></td><td class='box' >1</td><td class='box' >3</td><td class='box' >1</td><td class='box' ></td><td class='box' >1</td><td class='box' >
                                                    </td><td style='padding-left:30px;'>How well does the wiki communicate the team's project and their goals?</td></tr><tr><td style='width:15px'></td><td class='box' >3</td><td class='box' ></td><td class='box' >2</td><td class='box' >1</td><td class='box' ></td><td class='box' >
                                                    </td><td style='padding-left:30px;'>Did the team clearly document their project and support their results with convincing evidence?</td></tr><tr><td style='width:15px'></td><td class='box' >1</td><td class='box' ></td><td class='box' >2</td><td class='box' >2</td><td class='box' >1</td><td class='box' >
                                                    </td><td style='padding-left:30px;'>Is the wiki well designed, functional, and easy to navigate?</td></tr><tr><td style='width:15px'></td><td class='box' >1</td><td class='box' >1</td><td class='box' >3</td><td class='box' ></td><td class='box' >1</td><td class='box' >
                                                    </td><td style='padding-left:30px;'>Will the wiki be a compelling record of the team's project for future teams?</td></tr><tr><td colspan=9 style='padding-top:10px;'>Presentation</td></tr><tr><td style='width:15px'></td><td class='box' >1</td><td class='box' >5</td><td class='box' ></td><td class='box' ></td><td class='box' ></td><td class='box' >
                                                    </td><td style='padding-left:30px;'>How well does the presentation communicate the team's project and their goals?</td></tr><tr><td style='width:15px'></td><td class='box' >1</td><td class='box' >4</td><td class='box' >1</td><td class='box' ></td><td class='box' ></td><td class='box' >
                                                    </td><td style='padding-left:30px;'>Do the presentation design elements effectively communicate the technical content?</td></tr><tr><td style='width:15px'></td><td class='box' >2</td><td class='box' >2</td><td class='box' >2</td><td class='box' ></td><td class='box' ></td><td class='box' >
                                                    </td><td style='padding-left:30px;'>Did you find the presentation engaging?</td></tr><tr><td style='width:15px'></td><td class='box' >1</td><td class='box' >3</td><td class='box' >2</td><td class='box' ></td><td class='box' ></td><td class='box' >
                                                    </td><td style='padding-left:30px;'>Were reference material and data acknowledged appropriately?</td></tr><tr><td colspan=9 style='padding-top:10px;'>Poster</td></tr><tr><td style='width:15px'></td><td class='box' >2</td><td class='box' >4</td><td class='box' ></td><td class='box' ></td><td class='box' ></td><td class='box' >
                                                    </td><td style='padding-left:30px;'>How well does the poster communicate the team's project and their goals?</td></tr><tr><td style='width:15px'></td><td class='box' >3</td><td class='box' >3</td><td class='box' ></td><td class='box' ></td><td class='box' ></td><td class='box' >
                                                    </td><td style='padding-left:30px;'>Did you find the poster engaging?</td></tr><tr><td style='width:15px'></td><td class='box' >1</td><td class='box' >4</td><td class='box' >1</td><td class='box' ></td><td class='box' ></td><td class='box' >
                                                    </td><td style='padding-left:30px;'>Do the poster design elements effectively communicate the technical content?</td></tr><tr><td style='width:15px'></td><td class='box' >1</td><td class='box' >4</td><td class='box' >1</td><td class='box' ></td><td class='box' ></td><td class='box' >
                                                    </td><td style='padding-left:30px;'>Were reference material and data acknowledged appropriately?</td></tr><tr><td colspan=9 style='padding-top:10px;'>Integrated Human Practices</td></tr><tr><td style='width:15px'></td><td class='box' >1</td><td class='box' >3</td><td class='box' >1</td><td class='box' >1</td><td class='box' ></td><td class='box' >
                                                    </td><td style='padding-left:30px;'>How well was their Human Practices work integrated throughout the project?</td></tr><tr><td style='width:15px'></td><td class='box' >2</td><td class='box' >1</td><td class='box' >2</td><td class='box' >1</td><td class='box' ></td><td class='box' >
                                                    </td><td style='padding-left:30px;'>How inspiring an example is it to others?</td></tr><tr><td style='width:15px'></td><td class='box' ></td><td class='box' >4</td><td class='box' >1</td><td class='box' >1</td><td class='box' ></td><td class='box' >
                                                    </td><td style='padding-left:30px;'>To what extent is the Human Practices work documented so that others can build upon it?</td></tr><tr><td style='width:15px'></td><td class='box' >1</td><td class='box' >2</td><td class='box' >1</td><td class='box' >2</td><td class='box' ></td><td class='box' >
                                                    </td><td style='padding-left:30px;'>How thoughtfully was it implemented? How well did they explain the context, rationale, and prior work?</td></tr><tr><td style='width:15px'></td><td class='box' >1</td><td class='box' >2</td><td class='box' >3</td><td class='box' ></td><td class='box' ></td><td class='box' >
                                                    </td><td style='padding-left:30px;'>How well did it incorporate different stakeholder views?</td></tr><tr><td style='width:15px'></td><td class='box' ></td><td class='box' >4</td><td class='box' >2</td><td class='box' ></td><td class='box' ></td><td class='box' >
                                                    </td><td style='padding-left:30px;'>To what extent did they convince you that their Human Practices activities helped create a project that is responsible and good for the world?</td></tr><tr><td colspan=9 style='padding-top:10px;'>Education</td></tr><tr><td style='width:15px'></td><td class='box' >4</td><td class='box' >1</td><td class='box' >1</td><td class='box' ></td><td class='box' ></td><td class='box' >
                                                    </td><td style='padding-left:30px;'>How well did their work promote mutual learning and/or a dialogue?</td></tr><tr><td style='width:15px'></td><td class='box' >1</td><td class='box' >3</td><td class='box' >2</td><td class='box' ></td><td class='box' ></td><td class='box' >
                                                    </td><td style='padding-left:30px;'>Is it documented in a way that others can build upon?</td></tr><tr><td style='width:15px'></td><td class='box' >2</td><td class='box' >2</td><td class='box' >2</td><td class='box' ></td><td class='box' ></td><td class='box' >
                                                    </td><td style='padding-left:30px;'>Was it thoughtfully implemented?</td></tr><tr><td style='width:15px'></td><td class='box' >2</td><td class='box' >4</td><td class='box' ></td><td class='box' ></td><td class='box' ></td><td class='box' >
                                                    </td><td style='padding-left:30px;'>Did the team convince you that their activities would enable more people to shape, contribute to, and/or participate in synthetic biology?</td></tr><tr><td colspan=9 style='padding-top:10px;'>Model</td></tr><tr><td style='width:15px'></td><td class='box' >2</td><td class='box' ></td><td class='box' >4</td><td class='box' ></td><td class='box' ></td><td class='box' >
                                                    </td><td style='padding-left:30px;'>How impressive is the modeling?</td></tr><tr><td style='width:15px'></td><td class='box' >2</td><td class='box' >2</td><td class='box' >2</td><td class='box' ></td><td class='box' ></td><td class='box' >
                                                    </td><td style='padding-left:30px;'>Did the model help the team understand a part, device, or system?</td></tr><tr><td style='width:15px'></td><td class='box' ></td><td class='box' >5</td><td class='box' >1</td><td class='box' ></td><td class='box' ></td><td class='box' >
                                                    </td><td style='padding-left:30px;'>Did the team use measurements of a part, device, or system to develop the model?</td></tr><tr><td style='width:15px'></td><td class='box' >1</td><td class='box' >2</td><td class='box' >3</td><td class='box' ></td><td class='box' ></td><td class='box' >
                                                    </td><td style='padding-left:30px;'>Does the modeling approach provide a good example for others?</td></tr><tr><td colspan=9 style='padding-top:10px;'>Measurement</td></tr><tr><td><td colspan=9>No votes cast for this category</td></tr><tr><td colspan=9 style='padding-top:10px;'>Entrepreneurship</td></tr><tr><td style='width:15px'></td><td class='box' ></td><td class='box' >1</td><td class='box' >4</td><td class='box' >1</td><td class='box' ></td><td class='box' >
                                                    </td><td style='padding-left:30px;'>Has the team discovered their first potential customers and identified any unmet needs not yet covered by other existing solutions?</td></tr><tr><td style='width:15px'></td><td class='box' ></td><td class='box' ></td><td class='box' >1</td><td class='box' >2</td><td class='box' >3</td><td class='box' >
                                                    </td><td style='padding-left:30px;'>Has the team shown that their solution is possible, scalable, and inventive?</td></tr><tr><td style='width:15px'></td><td class='box' ></td><td class='box' >1</td><td class='box' ></td><td class='box' >1</td><td class='box' >4</td><td class='box' >
                                                    </td><td style='padding-left:30px;'>Has the team presented logical product development plans with realistic milestones, timelines, resources, and risks?</td></tr><tr><td style='width:15px'></td><td class='box' ></td><td class='box' ></td><td class='box' >2</td><td class='box' >4</td><td class='box' ></td><td class='box' >
                                                    </td><td style='padding-left:30px;'>Has the team outlined the skills, capabilities, and stakeholders required to be credible in developing their solution further?</td></tr><tr><td style='width:15px'></td><td class='box' ></td><td class='box' ></td><td class='box' >2</td><td class='box' >3</td><td class='box' >1</td><td class='box' >
                                                    </td><td style='padding-left:30px;'>Has the team considered the positive and negative long-term impacts of their fully developed solution?</td></tr><tr><td colspan=9 style='padding-top:10px;'>Software Tool</td></tr><tr><td><td colspan=9>No votes cast for this category</td></tr><tr><td colspan=9 style='padding-top:10px;'>Hardware</td></tr><tr><td><td colspan=9>No votes cast for this category</td></tr><tr><td colspan=9 style='padding-top:10px;'>Plant Synthetic Biology</td></tr><tr><td><td colspan=9>No votes cast for this category</td></tr><tr><td colspan=9 style='padding-top:10px;'>Sustainable</td></tr><tr><td><td colspan=9>No votes cast for this category</td></tr><tr><td colspan=9 style='padding-top:10px;'>Inclusivity</td></tr><tr><td><td colspan=9>No votes cast for this category</td></tr><tr><td colspan=9 style='padding-top:10px;'>New Basic Part</td></tr><tr><td style='width:15px'></td><td class='box' >1</td><td class='box' ></td><td class='box' >3</td><td class='box' >2</td><td class='box' ></td><td class='box' >
                                                    </td><td style='padding-left:30px;'>How does the documentation compare to BBa_K863006 and BBa_K863001?</td></tr><tr><td style='width:15px'></td><td class='box' ></td><td class='box' >1</td><td class='box' >3</td><td class='box' >1</td><td class='box' >1</td><td class='box' >
                                                    </td><td style='padding-left:30px;'>How new/innovative is it?</td></tr><tr><td style='width:15px'></td><td class='box' >1</td><td class='box' >4</td><td class='box' >1</td><td class='box' ></td><td class='box' ></td><td class='box' >
                                                    </td><td style='padding-left:30px;'>Did the team show the part works as expected (modeling data can be acceptable)?</td></tr><tr><td style='width:15px'></td><td class='box' ></td><td class='box' >5</td><td class='box' >1</td><td class='box' ></td><td class='box' ></td><td class='box' >
                                                    </td><td style='padding-left:30px;'>Is it useful to the community?</td></tr><tr><td style='width:15px'></td><td class='box' ></td><td class='box' >2</td><td class='box' >2</td><td class='box' >2</td><td class='box' ></td><td class='box' >
                                                    </td><td style='padding-left:30px;'>How well characterized (experimentally measured or modeled) is this Basic Part when tested in a device?</td></tr><tr><td colspan=9 style='padding-top:10px;'>New Composite Part</td></tr><tr><td style='width:15px'></td><td class='box' >1</td><td class='box' ></td><td class='box' >3</td><td class='box' >2</td><td class='box' ></td><td class='box' >
                                                    </td><td style='padding-left:30px;'>How does the documentation compare to BBa_K404122 and BBa_K863005?</td></tr><tr><td style='width:15px'></td><td class='box' ></td><td class='box' >1</td><td class='box' >2</td><td class='box' >1</td><td class='box' >2</td><td class='box' >
                                                    </td><td style='padding-left:30px;'>How new/innovative is it?</td></tr><tr><td style='width:15px'></td><td class='box' >2</td><td class='box' >2</td><td class='box' >2</td><td class='box' ></td><td class='box' ></td><td class='box' >
                                                    </td><td style='padding-left:30px;'>Did the team show the part works as expected (modeling data can be acceptable)?</td></tr><tr><td style='width:15px'></td><td class='box' ></td><td class='box' >3</td><td class='box' >2</td><td class='box' >1</td><td class='box' ></td><td class='box' >
                                                    </td><td style='padding-left:30px;'>Is it useful to the community?</td></tr><tr><td style='width:15px'></td><td class='box' ></td><td class='box' >2</td><td class='box' >2</td><td class='box' >2</td><td class='box' ></td><td class='box' >
                                                    </td><td style='padding-left:30px;'>How well characterized (experimentally measured or modeled) is this Composite Part?</td></tr><tr><td colspan=9 style='padding-top:10px;'>Part Collection</td></tr><tr><td style='width:15px'></td><td class='box' >4</td><td class='box' >1</td><td class='box' >1</td><td class='box' ></td><td class='box' ></td><td class='box' >
                                                    </td><td style='padding-left:30px;'>Is this collection a coherent group of parts meant to be used as a collection, or just a list of all the parts the team made?</td></tr><tr><td style='width:15px'></td><td class='box' >1</td><td class='box' >1</td><td class='box' >3</td><td class='box' >1</td><td class='box' ></td><td class='box' >
                                                    </td><td style='padding-left:30px;'>How does the documentation compare to the BBa_K747000-095 collection?</td></tr><tr><td style='width:15px'></td><td class='box' ></td><td class='box' >2</td><td class='box' >4</td><td class='box' ></td><td class='box' ></td><td class='box' >
                                                    </td><td style='padding-left:30px;'>Is the collection fully documented on the Registry so any user could use the parts correctly?</td></tr><tr><td style='width:15px'></td><td class='box' >1</td><td class='box' >5</td><td class='box' ></td><td class='box' ></td><td class='box' ></td><td class='box' >
                                                    </td><td style='padding-left:30px;'>Did the team finish building a functional system using this collection?</td></tr><tr><td style='width:15px'></td><td class='box' ></td><td class='box' >3</td><td class='box' >2</td><td class='box' >1</td><td class='box' ></td><td class='box' >
                                                    </td><td style='padding-left:30px;'>Is it useful to the community?</td>
                                                    </tr>
                                                    
                                            
                                            </table>
                                                    
                                    </div>
                                    <!-- end content -->
                                    <div class='visualClear'></div>
                            </div>
                             <!-- close content_Page -->

                        </div> <!-- close contentWrap -->
                      </v-row>


         



                    <!-- <v-template  v-scroll="pushScrollY" id="section_01"><v-col class="last_message"></v-col></v-template> -->
                    <!-- <v-template  v-scroll="pushScrollY" id="sectio/n_02"><v-col class="last_message"></v-col></v-template> -->
                    <v-template  id="section_03"><v-col class="last_message"></v-col></v-template>
                    <v-template  id="section_04"><v-col class="last_message"></v-col></v-template>

 
                </v-col>
            </v-row>
        </v-container>

    </v-container>
    
  <!-- </v-layout> -->
</template>
<script>

const pageTitle = 'Protocol';
const pageDes = "iGEM2020 Team Waseda's" + pageTitle + "page";
const pageUrl = 'https://2020.igem.org/Team:Waseda/Protocol';


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
      check: [false, false, false,],

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
        'S12','section_03','section_04',
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
    background-image: url("https://2020.igem.org/wiki/images/4/4e/T--Waseda--MakiRed.png");
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
      position:absolute; top:35px; left:15px; 
      width: 170px;
      height: 170px;
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

#votes .box {
    width:15px;
    border:1px solid gray;
    text-align:center;
}
#votes tr,td {
    line-height: 150%;
    margin:0;
}
</style>
