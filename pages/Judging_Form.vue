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
                            <h1 class='h1_text' pushElementOffsetTop>Judging Form</h1>
                          </v-col>
                        </v-row>
                    </v-row>
                    
                    <v-row v-scroll="pushScrollY" id="section_01"> 
                      <v-row class="row_max-box">
                        <h2 class="h2_text"></h2>
                      </v-row>
                    </v-row>

                    <v-row cols="12" sm="12" xs="12" md="12" lg="7" xl="7" class="row_max-box">

                        <v-col cols="12" class="row_max-box">


                            <!-- info -->


                            <table id='table_info' width='100%' border='0' cellspacing='0' cellpadding='0' style='margin-left: 10px;background-color: white; padding-left: 10px;line-height: 150%; padding-right:2px;padding-top:3px;' >
                                <tr>
                                    <td width=150 valign='top'><big>Team:</big>
                                    </td><td>Waseda
                                </td></tr>
                                <tr>
                                    <td align='top'><big>iGEM Year:</big>
                                    </td><td colspan=9>2020
                                </td></tr>
                                <tr>
                                    <td valign='top'><big>Track:</big>
                                    </td><td colspan=9>Information Processing
                                </td></tr>
                                <tr>
                                    <td valign='top'><big>Project Name:</big>
                                    </td><td colspan=9>Zombie vs Samurai -Strategic struggle in cell-free systems-
                                </td></tr>
                                <tr>
                                    <td valign='top'><big>Project Abstract: </big>
                                    </td><td colspan=9 style='padding-right:20px;line-height:120%;'>Cell-free systems are a flexible, quick, and powerful tool in synthetic biology that enables us to conduct back and forth the lab experiments and modeling. In order to continue our project under restricted lab access by COVID-19, We conducted projects (modeling and wet experiment, education, entrepreneurship) with cell-free systems. 


                                        The modeling is based on the struggle between Zombie and Samurai.
                                        Zombies attack humans and turn them into zombies. On the contrary, humans help zombies and return them to humans.&#12288;In modeling, completion of the system was achieved by adapting the quorum sensing systems.
                                        We have confirmed working quorum sensing systems in the cell-free system. 


                                        It's important to know the smell to distinguish between Zombie and Samurai.
                                        We have created multiple monoterpene (Limonene, Sabinene) from glucose in cell-free systems.


                                        Finally, we are attempting to make gene circuit of model of these story.

                                    </td> 
                                </tr>
                           </table><br>



                            <a name='iGEM_Medals'></a>

                            <!-- medals -->


                            <table id='table_medals' width='100%' border='0' cellspacing='0' cellpadding='0' style='margin-left: 10px;border: 1px solid gray;background-color: white; padding-left: 10px;10;line-height: 200%; padding-right:2px;padding-top:3px;' >
                                <tr>
                                    <td colspan=9><big><b>iGEM Medals</b></big>
                                </td></tr>

                                <div></div>
                                <tr><td colspan=9>All qualified teams are eligible for medals at the 2020 Giant Jamboree. 
                                    Every team can win their own medal based on their achievements; there is no limit to the number of Gold, Silver, or Bronze medals that can be given at the Giant Jamboree. </td></tr>
                                <tr><td colspan=9>To be judged for a specific prize or medal criterion,
                                    <b>you must document your achievements for that prize/criterion on the specified page</b>.
                                    Please see <a href='https://2020.igem.org/Judging/Pages_for_Awards'>Pages for Awards</a> for more information.
                                 </td></tr>
                                <tr><td colspan=9>You must convince the judges that your work meets the medal criteria.
                                    If the judges are not convinced, you will not be awarded the medal.
                                </td></tr>
                                <tr><td colspan=9>Details for 2020 iGEM Medal Criteria can be found on the
                                    <a href='https://2020.igem.org/Judging/Medals'>Medals</a> page.
                                </td></tr>
                                
                                <tr><td colspan=9 style='font-weight:bold; padding:10 0 0 20;font-size:120%;'><br>Requirements for a Bronze Medal (must complete all):
                                </td></tr>
                                <tr>
                                    <td colspan=9><span style='font-weight:bold;'>1  Competition Deliverables: </span>Convince the judges that you have completed the following <a href='https://2020.igem.org/Competition/Deliverables'>Competition Deliverables:</a>
                                </td></tr>

                                <ul>
                                    <li>Wiki</li>
                                    <li>Poster </li>
                                    <li>Presentation Video</li>
                                    <li>Project Promotion Video</li>
                                    <li>Judging Form</li>
                                </ul>

                                <tr><td colspan=9><span style='font-weight:bold;'>2 Attributions: </span>Describe what work your team members did and what other people did for your project.
                                </td></tr><tr><td colspan=9>Required link: <a href='https://2020.igem.org/Team:Waseda/Attributions'>https://2020.igem.org/Team:Waseda/Attributions</a>
                                </td><tr>
                                        <td colspan=9 style='padding-left:5px;width:500px;border:1px solid gray; background-color:rgb(238,238,238)'><span style='color:rgb(0,0,0)'>This team can be evaluated for this medal.</span></td>
                                    </tr>
                                <tr><td colspan=9 style='height:2px'></td>

                                </tr><tr><td colspan=9><span style='font-weight:bold;'>3 Project Description: </span>Describe how and why you chose your iGEM project.
                                </td></tr><tr><td colspan=9>Required link: <a href='https://2020.igem.org/Team:Waseda/Description'>https://2020.igem.org/Team:Waseda/Description</a>
                                </td></tr><tr><td colspan=9 style='padding-left:5px;width:500px;border:1px solid gray; background-color:rgb(238,238,238)'><span style='color:rgb(0,0,0)'>This team can be evaluated for this medal.</span></td></tr>
                                <tr><td colspan=9 style='height:2px'>
                                </td></tr><tr><td colspan=9><span style='font-weight:bold;'>4 Contribution: </span>Make a useful contribution for future iGEM teams.
                                </td></tr><tr><td colspan=9>Required link: <a href='https://2020.igem.org/Team:Waseda/Contribution'>https://2020.igem.org/Team:Waseda/Contribution</a>
                                </td></tr><tr><td colspan=9 style='padding-left:5px;width:500px;border:1px solid gray; background-color:rgb(238,238,238)'><span style='color:rgb(200,0,0)'>This team will not be evaluated for this medal because this page is empty</span></td></tr><tr><td colspan=9 style='height:2px'></td>
                                </tr><tr><td colspan=9>If your team added information to an existing Part for this criterion, enter the existing Part Number below. Clearly document the contribution on that Part's Main Page on the Registry (see the <a href='http://parts.igem.org/Help:Document_Parts'>Registry Document Parts</a> page for instructions).
                                </td></tr><tr><td colspan=9 style='padding-left:5px;width:500px;border:1px solid gray; background-color:rgb(216,228,188)'>Part Number(s): 
                                    <br><a href='http://parts.igem.org/Part:BBa_K1529321'>BBa_K1529321</a>
                                    <br><span style='color:rgb(0,0,0)'>This part can be evaluated for this medal.</span>
                                </td></tr>
                                    
                                    
                                
                                <tr><td colspan=9 style='height:2px'></td>
                                </tr><tr><td colspan=9 style='font-weight:bold; padding:10 0 0 20;font-size:120%;'><br>Additional Requirements for a Silver Medal (must complete all):
                                </td></tr><tr><td colspan=9><span style='font-weight:bold;'>1 Engineering Success: </span>Demonstrate engineering success in at least one aspect of your project. This achievement should be distinct from your Contribution for Bronze.
                                </td></tr><tr><td colspan=9>Required link: <a href='https://2020.igem.org/Team:Waseda/Engineering'>https://2020.igem.org/Team:Waseda/Engineering</a>
                                </td></tr><tr><td colspan=9 style='padding-left:5px;width:500px;border:1px solid gray; background-color:rgb(238,238,238)'><span style='color:rgb(0,0,0)'>This team can be evaluated for this medal.</span></td></tr><tr><td colspan=9 style='height:2px'></td>
                                </tr><tr><td colspan=9>If your team created a new Part for this criterion, enter the new Part Number you have characterized below. Clearly document the contribution on that Part's Main Page on the Registry (see the <a href='http://parts.igem.org/Help:Document_Parts'>Registry Document Parts</a> page for instructions).
                                </td></tr><tr><td colspan=9 style='padding-left:5px;width:500px;border:1px solid gray; background-color:rgb(216,228,188)'>Part Number(s): 
                                    <br><a href='http://parts.igem.org/Part:BBa_K3580200'>BBa_K3580200</a>
                                    <br><span style='color:rgb(0,0,0)'>This part can be evaluated for this medal.</span>
                                </td></tr>

                                    


                                <tr><td colspan=9 style='height:2px'></td>
                                </tr><tr><td colspan=9><span style='font-weight:bold;'>2 collaboration: </span> collaborate with one (or more) 2020 iGEM team(s) in a meaningful way.
                                </td></tr><tr><td colspan=9>Required link: <a href='https://2020.igem.org/Team:Waseda/Collaborations'>https://2020.igem.org/Team:Waseda/Collaborations</a>
                                </td></tr><tr><td colspan=9 style='padding-left:5px;width:500px;border:1px solid gray; background-color:rgb(238,238,238)'><span style='color:rgb(0,0,0)'>This team can be evaluated for this medal.</span></td></tr><tr><td colspan=9 style='height:2px'></td>
                                </tr><tr><td colspan=9><span style='font-weight:bold;'>3 Human Practices: </span>Explain how you have determined your work is responsible and good for the world.
                                </td></tr><tr><td colspan=9>Required link: <a href='https://2020.igem.org/Team:Waseda/Human_Practices'>https://2020.igem.org/Team:Waseda/Human_Practices</a>
                                </td></tr><tr><td colspan=9 style='padding-left:5px;width:500px;border:1px solid gray; background-color:rgb(238,238,238)'><span style='color:rgb(0,0,0)'>This team can be evaluated for this medal.</span></td></tr><tr><td colspan=9 style='height:2px'></td>
                                </tr><tr><td colspan=9><span style='font-weight:bold;'>4 Proposed Implementation: </span>Explain how you would implement your project in the real world.
                                </td></tr><tr><td colspan=9>Required link: <a href='https://2020.igem.org/Team:Waseda/Implementation'>https://2020.igem.org/Team:Waseda/Implementation</a>
                                </td></tr><tr><td colspan=9 style='padding-left:5px;width:500px;border:1px solid gray; background-color:rgb(238,238,238)'><span style='color:rgb(0,0,0)'>This team can be evaluated for this medal.</span></td></tr><tr><td colspan=9 style='height:2px'></td>
                                </tr><tr><td colspan=9 style='font-weight:bold; padding:10 0 0 20;font-size:120%;'><br>Additional Requirements for a Gold Medal: (Must complete two OR more)
                                </td></tr><tr><td colspan=9><span style='font-weight:bold;'>1 Integrated Human Practices: </span>Demonstrate how your team responded to your human practices reflections, research, and/or engagement.
                                You should show how your activities impacted your project purpose, design and/or execution.
                                </td></tr><tr><td colspan=9>Required link: <a href='https://2020.igem.org/Team:Waseda/Human_Practices'>https://2020.igem.org/Team:Waseda/Human_Practices</a>
                                </td></tr><tr><td colspan=9 style='padding-left:5px;width:500px;border:1px solid gray; background-color:rgb(238,238,238)'><span style='color:rgb(0,0,0)'>This team can be evaluated for this medal.</span></td></tr><tr><td colspan=9 style='height:2px'></td>
                                </tr><tr><td colspan=9><span style='font-weight:bold;'>2 Improvement of an Existing Part: </span>Make a new Part that improves the function of an existing Part. This improvement must be distinct from your work for Bronze and Silver medals.
                                </td></tr><tr><td colspan=9>Enter the part number for the existing part you are improving in the box below:

                                </td></tr><tr><td colspan=9 style='padding-left:5px;width:500px;border:1px solid gray; background-color:rgb(216,228,188)'>Part Number(s): 
                                    <br><a href='http://parts.igem.org/Part:BBa_K934025'>BBa_K934025</a>
                                    <br><span style='color:rgb(0,0,0)'>This part can be evaluated for this medal.</span>
                                </td></tr>
                                

                                <tr><td colspan=9 style='height:2px'></td>
                                <tr><td colspan=9>Enter the part number of your new part in the box below:

                                </td></tr><tr><td colspan=9 style='padding-left:5px;width:500px;border:1px solid gray; background-color:rgb(216,228,188)'>Part Number(s): 
                                    <br><a href='http://parts.igem.org/Part:BBa_K3580003'>BBa_K3580003</a>
                                    <br><span style='color:rgb(0,0,0)'>This part can be evaluated for this medal.</span>
                                </td></tr>


                                <tr><td colspan=9 style='height:2px'></td>
                                </tr><tr><td colspan=9><span style='font-weight:bold;'>3 Project Modeling: </span>Use modeling to gain insight into how your project works or should be implemented. Explain your model's assumptions, data, parameters, and results in a way that anyone could understand.
                                </td></tr><tr><td colspan=9>Required link: <a href='https://2020.igem.org/Team:Waseda/Model'>https://2020.igem.org/Team:Waseda/Model</a>
                                </td></tr><tr><td colspan=9 style='padding-left:5px;width:500px;border:1px solid gray; background-color:rgb(238,238,238)'><span style='color:rgb(0,0,0)'>This team can be evaluated for this medal.</span></td></tr>
                                <tr><td colspan=9 style='height:2px'>
                                </td></tr><tr><td colspan=9><span style='font-weight:bold;'>4 Proof of Concept: </span>Expand upon your Silver medal work for Proposed Implementation and develop a proof of concept for your project.
                                </td></tr><tr><td colspan=9>Required link: <a href='https://2020.igem.org/Team:Waseda/Proof_Of_Concept'>https://2020.igem.org/Team:Waseda/Proof_Of_Concept</a>
                                </td></tr><tr><td colspan=9 style='padding-left:5px;width:500px;border:1px solid gray; background-color:rgb(238,238,238)'><span style='color:rgb(200,0,0)'>This team will not be evaluated for this medal because the required page still contains the 'judges-will-not-evaluate' div</span></td></tr><tr><td colspan=9 style='height:2px'></td>
                                </tr><tr><td colspan=9><span style='font-weight:bold;'>5 Partnership: </span> collaborate throughout the year with at least one other 2020 iGEM team on a set of shared objectives related to both of your projects.
                                            This partnership should go beyond a Silver medal collaboration.
                                </td></tr><tr><td colspan=9>Required link: <a href='https://2020.igem.org/Team:Waseda/Partnership'>https://2020.igem.org/Team:Waseda/Partnership</a>
                                </td></tr><tr><td colspan=9 style='padding-left:5px;width:500px;border:1px solid gray; background-color:rgb(238,238,238)'><span style='color:rgb(0,0,0)'>This team can be evaluated for this medal.</span></td></tr><tr><td colspan=9 style='height:2px'></td>
                                </tr><tr><td colspan=9><span style='font-weight:bold;'>6 Science Communications: </span>Develop and implement science communication, education, and/or outreach materials related to synthetic biology. All activities must follow <a href='https://2020.igem.org/Safety/Policies#subjects'>Safety</a> policies for Human Subjects Research.
                                </td></tr><tr><td colspan=9>Required link: <a href='https://2020.igem.org/Team:Waseda/Education'>https://2020.igem.org/Team:Waseda/Education</a>

                                </td></tr><tr><td colspan=9 style='padding-left:5px;width:500px;border:1px solid gray; background-color:rgb(238,238,238)'><span style='color:rgb(0,0,0)'>This team can be evaluated for this medal.</span></td></tr><tr><td colspan=9 style='height:2px'></td>
                                </tr><tr><td colspan=9><span style='font-weight:bold;'>7 Excellence in Another Area: </span>Demonstrate excellence in another area related to synthetic biology.
                                </td></tr><tr><td colspan=9 style='position:relative;padding-left:5px;width:500px;border:1px solid gray; background-color:rgb(216,228,188)'>Link to page on your team's wiki: <a href='http://2020.igem.org/Team:Waseda/Excellence_in_Another_Area'>Team:Waseda/Excellence_in_Another_Area</a></td>
                                </tr><tr><td colspan=9 style='height:2px'>
                                </td></tr>
                            </table>



                            
                            <div style='height: 3px'></div>
                            <table id='table_medals' width='100%' border='0' cellspacing='0' cellpadding='0' style='margin-left: 10px;border: 1px solid gray;background-color: white; padding-left: 10px;10;line-height: 150%; padding-right:2px;padding-top:3px;' >
                        

                                <tr><td colspan=9><a name='iGEM_Prizes'></a><big><b>iGEM Special Prizes</b></big></td></tr>
                                    
                                <tr><td colspan=9>All teams are eligible for special prizes at the Jamborees. Your team will be evaluated by the judges if (1) you have documented your special prize activity on your wiki on the specified page, AND (2) you have explained on this form why you think your team is eligible for this prize. <a href='https://2020.igem.org/Judging/Awards#SpecialPrizes'>More information on special prizes</a>
                                </td></tr><tr><td style='width:30px;vertical-align:top'>-</td><td colspan=9 style='font-weight:bold'>Education
                                </td></tr><tr><td colspan=9>Required link: <a href='https://2020.igem.org/Team:Waseda/Education'>https://2020.igem.org/Team:Waseda/Education</a>
                                </td></tr><tr><td colspan=9 style='padding-left:5px;width:500px;border:1px solid gray; background-color:rgb(238,238,238)'><span style='color:rgb(0,0,0)'>This team can be evaluated for this prize.</span></td></tr><tr><td colspan=9 style='height:2px'></td>
                                </tr><tr><td colspan=9>Please write about 150 words on why you think your team is eligible for this prize:
                                </td></tr><tr><td colspan=9 style='padding:5px;width:500px;border:1px solid gray; background-color:rgb(216,228,188)'><div class='filled_box' style='white-space:pre-wrap;min-height:2em;width:90%;margin:0 20px 5px 0;'>    In our educational project, we created an application to give students an intuitive understanding of the mathematical background of a genetic toggle switch. 

                                    In Japan, there is a problem that mathematical methods of biology are rarely dealt with in high school classes, so this project was carried out to contribute to solving that problem.

                                    This application is intended for use in beginner classes in Synthetic Biology and is open to the public for access by a wider audience. In fact, the application was used not only in the high school classes we taught, but also in synthetic biology classes at our university, so the goal of making it available to a wider audience was successful. 

                                    We also believe that our application, which gives students an intuitive understanding of the mathematical background of synthetic biology, facilitated open dialogue on synthetic biology.</div></td></tr><tr><td colspan=9 style='height:2px'></td>
                                </tr><tr><td style='width:30px;vertical-align:top'>-</td><td colspan=9 style='font-weight:bold'>Hardware
                                </td></tr><tr><td colspan=9>Required link: <a href='https://2020.igem.org/Team:Waseda/Hardware'>https://2020.igem.org/Team:Waseda/Hardware</a>
                                </td></tr><tr><td colspan=9 style='padding-left:5px;width:500px;border:1px solid gray; background-color:rgb(238,238,238)'><span style='color:rgb(200,0,0)'>This team will not be evaluated for this prize because the required page still contains the 'judges-will-not-evaluate' div</span><br><span style='color:rgb(200,0,0)'>This team will not be evaluated for this prize because they have not entered an explanation below</span></td></tr><tr><td colspan=9 style='height:2px'></td>
                                </tr><tr><td colspan=9>Please write about 150 words on why you think your team is eligible for this prize:
                                </td></tr><tr><td colspan=9 style='padding:5px;width:500px;border:1px solid gray; background-color:rgb(216,228,188)'><div class='filled_box' style='white-space:pre-wrap;min-height:2em;width:90%;margin:0 20px 5px 0;'></div></td></tr><tr><td colspan=9 style='height:2px'></td>
                                </tr><tr><td style='width:30px;vertical-align:top'>-</td><td colspan=9 style='font-weight:bold'>Inclusion
                                </td></tr><tr><td colspan=9>Required link: <a href='https://2020.igem.org/Team:Waseda/Inclusion'>https://2020.igem.org/Team:Waseda/Inclusion</a>
                                </td></tr><tr><td colspan=9 style='padding-left:5px;width:500px;border:1px solid gray; background-color:rgb(238,238,238)'><span style='color:rgb(200,0,0)'>This team will not be evaluated for this prize because they have not entered an explanation below</span></td></tr><tr><td colspan=9 style='height:2px'></td>
                                </tr><tr><td colspan=9>Please write about 150 words on why you think your team is eligible for this prize:
                                </td></tr><tr><td colspan=9 style='padding:5px;width:500px;border:1px solid gray; background-color:rgb(216,228,188)'><div class='filled_box' style='white-space:pre-wrap;min-height:2em;width:90%;margin:0 20px 5px 0;'></div></td></tr><tr><td colspan=9 style='height:2px'></td>
                                </tr><tr><td style='width:30px;vertical-align:top'>-</td><td colspan=9 style='font-weight:bold'>Integrated Human Practices
                                </td></tr><tr><td colspan=9>Required link: <a href='https://2020.igem.org/Team:Waseda/Human_Practices'>https://2020.igem.org/Team:Waseda/Human_Practices</a>
                                </td></tr><tr><td colspan=9 style='padding-left:5px;width:500px;border:1px solid gray; background-color:rgb(238,238,238)'><span style='color:rgb(0,0,0)'>This team can be evaluated for this prize.</span></td></tr><tr><td colspan=9 style='height:2px'></td>
                                </tr><tr><td colspan=9>Please write about 150 words on why you think your team is eligible for this prize:
                                </td></tr><tr><td colspan=9 style='padding:5px;width:500px;border:1px solid gray; background-color:rgb(216,228,188)'><div class='filled_box' style='white-space:pre-wrap;min-height:2em;width:90%;margin:0 20px 5px 0;'>    From the beginning of our project, we have been in dialogue with many people about safety, ethics, scientific and real-world impacts.

                                    Firstly, We have interviewed and lectured to the general public about the project and synthetic biology. (Go to our Human Practices wiki page)
                                https://2020.igem.org/Team:Waseda/Human_Practices

                                    Secondly, We also teach a class on more deep synthetic biology to students. We were able to use our software tool to make the class interactive. (Go to our Education wiki page)
                                https://2020.igem.org/Team:Waseda/Education

                                    Finally, We have been in dialogue with many experts to create and validate the business model. Then, we learned about the difficulties of applying our project to the real-world and found out about the possible applications of our project.
                                (Go to our Entrepreneurship wiki and presentation video, 14:05 ~)
                                https://2020.igem.org/Team:Waseda/Entrepreneurship

                                    In those dialogues, we have made the project better by pivoting and brush up the project. </div></td></tr><tr><td colspan=9 style='height:2px'></td>
                                </tr><tr><td style='width:30px;vertical-align:top'>-</td><td colspan=9 style='font-weight:bold'>Measurement
                                </td></tr><tr><td colspan=9>Required link: <a href='https://2020.igem.org/Team:Waseda/Measurement'>https://2020.igem.org/Team:Waseda/Measurement</a>
                                </td></tr><tr><td colspan=9 style='padding-left:5px;width:500px;border:1px solid gray; background-color:rgb(238,238,238)'><span style='color:rgb(200,0,0)'>This team will not be evaluated for this prize because the required page still contains the 'judges-will-not-evaluate' div</span><br><span style='color:rgb(200,0,0)'>This team will not be evaluated for this prize because they have not entered an explanation below</span></td></tr><tr><td colspan=9 style='height:2px'></td>
                                </tr><tr><td colspan=9>Please write about 150 words on why you think your team is eligible for this prize:
                                </td></tr><tr><td colspan=9 style='padding:5px;width:500px;border:1px solid gray; background-color:rgb(216,228,188)'><div class='filled_box' style='white-space:pre-wrap;min-height:2em;width:90%;margin:0 20px 5px 0;'></div></td></tr><tr><td colspan=9 style='height:2px'></td>
                                </tr><tr><td style='width:30px;vertical-align:top'>-</td><td colspan=9 style='font-weight:bold'>Model
                                </td></tr><tr><td colspan=9>Required link: <a href='https://2020.igem.org/Team:Waseda/Model'>https://2020.igem.org/Team:Waseda/Model</a>
                                </td></tr><tr><td colspan=9 style='padding-left:5px;width:500px;border:1px solid gray; background-color:rgb(238,238,238)'><span style='color:rgb(0,0,0)'>This team can be evaluated for this prize.</span></td></tr><tr><td colspan=9 style='height:2px'></td>
                                </tr><tr><td colspan=9>Please write about 150 words on why you think your team is eligible for this prize:
                                </td></tr><tr><td colspan=9 style='padding:5px;width:500px;border:1px solid gray; background-color:rgb(216,228,188)'><div class='filled_box' style='white-space:pre-wrap;min-height:2em;width:90%;margin:0 20px 5px 0;'>    Our team is eligible for this prize because we actively used Design-Build-Test-Learn (DBTL) cycle. 

                                    We designed a genetic circuit that realizes a bistable system switched by the number of cells. Before implementing the genetic circuit in a wet experiment, we modeled it and simulated the behavior. Through the simulation, we discovered some problems like degradation time and crosstalk ratio, so we introduced new technology and verified its usefulness by conducting wet experiments. 

                                    Based on the results, we re-simulated and confirmed that the designed system works. Moreover, we devised a way to explain this modeling ingeniously. 

                                    Modeling plays an essential role in synthetic biology, but it is difficult to explain it accurately. To solve this problem, we likened this bi-stable system to the war between zombies and humans. We are convinced that this interesting story attract anyone, including the general public, and make the system easier to understand.
                                </div></td></tr><tr><td colspan=9 style='height:2px'></td>
                                </tr><tr><td style='width:30px;vertical-align:top'>-</td><td colspan=9 style='font-weight:bold'>Plant Synthetic Biology
                                </td></tr><tr><td colspan=9>Required link: <a href='https://2020.igem.org/Team:Waseda/Plant'>https://2020.igem.org/Team:Waseda/Plant</a>
                                </td></tr><tr><td colspan=9 style='padding-left:5px;width:500px;border:1px solid gray; background-color:rgb(238,238,238)'><span style='color:rgb(200,0,0)'>This team will not be evaluated for this prize because the required page still contains the 'judges-will-not-evaluate' div</span><br><span style='color:rgb(200,0,0)'>This team will not be evaluated for this prize because they have not entered an explanation below</span></td></tr><tr><td colspan=9 style='height:2px'></td>
                                </tr><tr><td colspan=9>Please write about 150 words on why you think your team is eligible for this prize:
                                </td></tr><tr><td colspan=9 style='padding:5px;width:500px;border:1px solid gray; background-color:rgb(216,228,188)'><div class='filled_box' style='white-space:pre-wrap;min-height:2em;width:90%;margin:0 20px 5px 0;'></div></td></tr><tr><td colspan=9 style='height:2px'></td>
                                </tr><tr><td style='width:30px;vertical-align:top'>-</td><td colspan=9 style='font-weight:bold'>Software Tool
                                </td></tr><tr><td colspan=9>Required link: <a href='https://2020.igem.org/Team:Waseda/Software'>https://2020.igem.org/Team:Waseda/Software</a>
                                </td></tr><tr><td colspan=9 style='padding-left:5px;width:500px;border:1px solid gray; background-color:rgb(238,238,238)'><span style='color:rgb(200,0,0)'>This team will not be evaluated for this prize because they have not entered an explanation below</span></td></tr><tr><td colspan=9 style='height:2px'></td>
                                </tr><tr><td colspan=9>Please write about 150 words on why you think your team is eligible for this prize:
                                </td></tr><tr><td colspan=9 style='padding:5px;width:500px;border:1px solid gray; background-color:rgb(216,228,188)'><div class='filled_box' style='white-space:pre-wrap;min-height:2em;width:90%;margin:0 20px 5px 0;'></div></td></tr><tr><td colspan=9 style='height:2px'></td>
                                </tr><tr><td style='width:30px;vertical-align:top'>-</td><td colspan=9 style='font-weight:bold'>Supporting Entrepreneurship
                                </td></tr><tr><td colspan=9>Required link: <a href='https://2020.igem.org/Team:Waseda/Entrepreneurship'>https://2020.igem.org/Team:Waseda/Entrepreneurship</a>
                                </td></tr><tr><td colspan=9 style='padding-left:5px;width:500px;border:1px solid gray; background-color:rgb(238,238,238)'><span style='color:rgb(0,0,0)'>This team can be evaluated for this prize.</span></td></tr><tr><td colspan=9 style='height:2px'></td>
                                </tr><tr><td colspan=9>Please write about 150 words on why you think your team is eligible for this prize:
                                </td></tr><tr><td colspan=9 style='padding:5px;width:500px;border:1px solid gray; background-color:rgb(216,228,188)'><div class='filled_box' style='white-space:pre-wrap;min-height:2em;width:90%;margin:0 20px 5px 0;'>    We learned the basics of the business model and dialogue with many people to create a robust business model. We found that we could apply our project by analyzing the needs of the real-world in detail. 

                                    Our projects for material detection, based on software and cell-free systems, are projects that have the powerful advantages of synthetic biology but are also safe.

                                    We have discussed them often with experts in the field and are beginning to apply our project to the real-world. 

                                    Especially regarding water quality inspection, we interviewed real-world experts and academic experts to examine the validity. Then, we planned the first demonstration experiment.

                                    Our projects help us to know the real-world in more detail.
                                Then, we believe we can contribute to creating a sustainable world by us to take appropriate action.
                                (More information, Go to our wiki and presentation video(14:05 ~) )</div></td></tr><tr><td colspan=9 style='height:2px'></td>
                                </tr><tr><td style='width:30px;vertical-align:top'>-</td><td colspan=9 style='font-weight:bold'>Sustainable Development Impact
                                </td></tr><tr><td colspan=9>Required link: <a href='https://2020.igem.org/Team:Waseda/Sustainable'>https://2020.igem.org/Team:Waseda/Sustainable</a>
                                </td></tr><tr><td colspan=9 style='padding-left:5px;width:500px;border:1px solid gray; background-color:rgb(238,238,238)'><span style='color:rgb(200,0,0)'>This team will not be evaluated for this prize because the required page still contains the 'judges-will-not-evaluate' div</span><br><span style='color:rgb(200,0,0)'>This team will not be evaluated for this prize because they have not entered an explanation below</span></td></tr><tr><td colspan=9 style='height:2px'></td>
                                </tr><tr><td colspan=9>Please write about 150 words on why you think your team is eligible for this prize:
                                </td></tr><tr><td colspan=9 style='padding:5px;width:500px;border:1px solid gray; background-color:rgb(216,228,188)'>
                            
                            <div class='filled_box' style='white-space:pre-wrap;min-height:2em;width:90%;margin:0 20px 5px 0;'></div></td></tr><tr><td colspan=9 style='height:2px'></td>
                            </tr>
                            
                            </table><div style='height: 3px'></div>

                            <table id='table_medals' width='100%' border='0' cellspacing='0' cellpadding='0' style='margin-left: 10px;border: 1px solid gray;background-color: white; padding-left: 10px;10;line-height: 150%; padding-right:2px;padding-top:3px;' >
                            <table>

                                <tr><td colspan=9><a name='Team_Parts'></a><big><b>Part Awards</b></big>
                                </td></tr><tr><td colspan=9>All part related documentation must be on their respective part Registry page. 
                                To help the judges evaluate your parts, please identify your highest quality part for each of the following prizes:
                                </td></tr><tr><td style='width:30px;vertical-align:top'>-</td><td colspan=9 style='font-weight:bold'>Best New Basic Part
                                </td></tr><tr><td colspan=9>Provide the name of your one best Basic Part.
                                </td></tr><tr><td colspan=9>Each part must be fully documented in the Registry.
                                </td></tr>
                                    <tr><td colspan=9 style='padding-left:5px;width:500px;border:1px solid gray; background-color:rgb(216,228,188)'>Part Number: 
                                        <table style='background-color:rgb(216,228,188);margin-left:100px'>
                                        <tr><td style='width:130px;text-align:left;'><a href='http://parts.igem.org/Part:BBa_K3580200'>BBa_K3580200</a></td><td colspan=9 style='text-align:left'><span style='color:rgb(0,0,0)'>This part can be evaluated for this prize.</span>
                                        </td></tr>
                                        </table></td></tr>
                                    <tr><td colspan=9 style='height:2px'></td>
                                    </tr><tr><td style='width:30px;vertical-align:top'>-</td><td colspan=9 style='font-weight:bold'>Best New Composite Part
                                    </td></tr><tr><td colspan=9>Provide the name of your one best Composite Part.
                                    </td></tr><tr><td colspan=9>Each part must be fully documented in the Registry.
                                    </td></tr>

                                    <tr><td colspan=9 style='padding-left:5px;width:500px;border:1px solid gray; background-color:rgb(216,228,188)'>Part Number:
                                    <table style='background-color:rgb(216,228,188);margin-left:100px'>
                                        <tr><td style='width:130px;text-align:left;'><a href='http://parts.igem.org/Part:BBa_K3580003'>BBa_K3580003</a></td>
                                        <td colspan=9 style='text-align:left'><span style='color:rgb(0,0,0)'>This part can be evaluated for this prize.</span>
                                        </td></tr>
                                    </table></td></tr>
                                
                                <tr><td colspan=9 style='height:2px'></td>
                                </tr><tr><td style='width:30px;vertical-align:top'>-</td><td colspan=9 style='font-weight:bold'>Best Part Collection
                                </td></tr><tr><td colspan=9>List all of the Parts in this collection. You must provide a minimum of three parts to be considered for the Best Part Collection Prize. 
                                </td></tr><tr><td colspan=9>Each part must be fully documented in the Registry,
                                                but you can also provide an overview on your wiki <a href='https://2020.igem.org/Team:Waseda/Part_Collection'>Part Collection page.</a>
                                </td></tr>
                                    <tr><td colspan=9 style='padding-left:5px;width:500px;border:1px solid gray; background-color:rgb(216,228,188)'>Part Number(s):
                                    
                                    <table style='background-color:rgb(216,228,188);margin-left:100px'>
                                        <tr><td style='width:130px;text-align:left;'><a href='http://parts.igem.org/Part:BBa_K3580101'>BBa_K3580101</a></td><td colspan=9 style='text-align:left'><span style='color:rgb(0,0,0)'>This part can be evaluated for this prize.</span>
                                        </td></tr><tr><td style='width:130px;text-align:left;'><a href='http://parts.igem.org/Part:BBa_K3580102'>BBa_K3580102</a></td><td colspan=9 style='text-align:left'><span style='color:rgb(0,0,0)'>This part can be evaluated for this prize.</span>
                                        </td></tr><tr><td style='width:130px;text-align:left;'><a href='http://parts.igem.org/Part:BBa_K3580103'>BBa_K3580103</a></td><td colspan=9 style='text-align:left'><span style='color:rgb(0,0,0)'>This part can be evaluated for this prize.</span>
                                        </td></tr>
                                    </table>
                                    </td></tr>
                                
                                <tr><td colspan=9 style='height:2px'></td>
                                </tr>
                                <tr><td colspan=9>Please write about 150 words describing the function of this Part Collection, and give the Range of Part Numbers.
                                </td></tr><tr><td colspan=9 style='padding:5px;width:500px;border:1px solid gray; background-color:rgb(216,228,188)'><div class='filled_box' style='white-space:pre-wrap;min-height:2em;width:90%;margin:0 20px 5px 0;'>   These parts are a parts collection showing that different types of monoterpenes can be easily created in cell-free system. Since the cell-free system is very modular, it is possible to divide the parts and use them.

                                    We regard our BBa_K3580101 as an improved version from pre-existing BBa_K3052001, which has only limonene synthase. Our improved part can use the set of Isopentenyl Diphosphate (IPP), and Dimethylallyl Diphosphate (DMAPP) both of which are synthesized through not only mevalonate pathway used here but also the other famous non-mevalonate pathway. Thus, the set is produced in so many engineered pathways, including the addgene plasmid used here or BBa_K3052003, as an important intermediate set for bioproduction. From this view point, we are sure that the simple combination of the two enzymes in this part satisfied convienience and modularity in synthetic biology than pre-existing BBa_K3052001.

                                    Furthermore, we showed the high modularity of these systems by creating different monoterpenes (sabinene), 
                                In oder to create sabinene, you change only one parts ( BBa_K358010101 to BBa_K3580102) in the system described above.</div>
                                </td></tr>

                                
                                
                            </table>
                            </table>
                              

                        </v-col>


                    </v-row>


         



                    <!-- <v-template  v-scroll="pushScrollY" id="section_01"><v-col class="last_message"></v-col></v-template> -->
                    <v-template  id="section_02"><v-col class="last_message"></v-col></v-template>
                    <v-template  id="section_03"><v-col class="last_message"></v-col></v-template>
                    <!-- <v-template  v-scroll="pushScrollY" id="section_04"><v-col class="last_message"></v-col></v-template> -->

 
                </v-col>
            </v-row>
        </v-container>

    </v-container>
    
  <!-- </v-layout> -->
</template>
<script>

const pageTitle = 'Judging_Form';
const pageDes = "iGEM2020 Team Waseda's" + pageTitle + "page";
const pageUrl = 'https://2020.igem.org/Team:Waseda/Judging_Form';


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
        'section_01','section_02','section_03',
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
td {vertical-align:top;}
ul {padding-left:20px;line-height:1em;}

</style>


