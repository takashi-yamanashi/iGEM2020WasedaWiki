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
                        <a href="Attributions#OtherTop"><v-row :class="{ 'title_text': true, 'title_text_active': check[5] }">Other</v-row></a> -->
                        

                    </v-row>
                    </v-col>
                </v-col>



                <v-col class="main_text" cols="12" lg="10" xl="10">
                  
                    <v-row justify="center" text-align="left">
                        <v-row cols="12" class='h1_box'>
                          <v-col class='h1_box_text'> 
                            <h1 class='h1_text' pushElementOffsetTop>Racemase ~War in the mirror~</h1>
                          </v-col>
                        </v-row>
                    </v-row>
                    
                    <v-row v-scroll="pushScrollY" id="section_01"> 
                      <v-row class="row_max-box">
                        <h2 class="h2_text">Introduction</h2>
                      </v-row>
                      </v-row>

                      <v-row cols="12" sm="12" xs="12" md="12" lg="7" xl="7" class="row_max-box">

                        <v-col>
                          
                          <p class="p_indent">  
                              In the zombie vs. Samurai storyline, we envisioned a scenario in which one side deprives their opponent of the food they need.  A battle between two enantiomers, that is to say, one side has D amino acid and the other has L amino acid derived food as their food source, and both sides converts their opponent’s amino acid and deprives the of their food                          
                          </P>
                          <p class="p_indent">                              
                          </p>
                        </v-col>
                      </v-row>

                      <v-row cols="12" sm="12" xs="12" md="12" lg="7" xl="7" class="row_max-box">
                        <figure class="fig_full_width" >
                          <img class="image_max" src="https://2020.igem.org/wiki/images/c/c7/T--Waseda--racemase_war_1st.png" alt="Fig. 3-2-1 Images of War In The Mirror in the Zombie vs Samurai storyline">
                        <figcaption class="fig_title">Fig. 3-2-1 Images of War In The Mirror in the Zombie vs Samurai storyline</figcaption>
                        </figure>
                      </v-row>
                

                        
                    <v-row cols="12" sm="12" xs="12" md="12" lg="7" xl="7" class="row_max-box">

                        <v-col>
                          
                          <p class="p_indent">   
                              Although there is not yet a translation and transcription system that efficiently encorporates D amino acids, it is known that the natural enyme chemically synthesized with D amino acids would be active.A protein made up of only d-amino acids act on substrates with opposite chirality, as demonstrated using the HIV protease.[Milton et.al 1992]                         
                          </P>
                          <p class="p_indent">  
                              Besides, practical usage of D-amino acids is advancing in the field of Biotechnology today.  Peptides composed of D-amino acids are not susceptible to degradation by protease in L-body organisms, thus are highly stable. [Tugyi et.al 2005][ Garton et.al 2018] Consequently, researchers are seeking a way to make the target of D-amino acid Peptide Aptamers(A type of antibody) L-body organisms’ protein. [Oberthür et.al 2015][ Majier et.al 2016][ Schumacher et.al 1996][ Funke et.al 2009]Currently, target proteins are synthesized with D-bodies, and L-body peptide aptamers that bonds to the protein are artificially evolutionized. When protein is expressed with the obtained amino acid sequence with D-amino acids, the binding site would consist of L-bodies. [Oberthür et.al 2015][ Majier et.al 2016][ Schumacher et.al 1996][ Funke et.al 2009]                            
                          </p>
                          <p class="p_indent">  
                              Such storyline can be applied to our real experimental system by adopting racemase, an enzyme which catalyzes interconversion of D amino acid and L amino acid.  Racemase catalyzes interconversion between L-amino acid and D-amino acid. There are many kinds of racemases and each corresponds to respective amino acid. This year, we focused especially on alanine racemase. Alanine racemase (AR) is a fold type III racemase enzyme catalyze the conversion of L-alanine to D-alanine. [Walish 1989]This enzyme provides D-alanine consuming L-alanine and using pyridoxal 5- phosphate (PLP) as a cofactor. AR is unique to prokaryotes and plays an important role in a biosynthesis. [Walish 1989] [Azam et.al 2016] Since D-alanine is used as a necessary component of the peptidoglycan layer of bacterial cell walls, lack of alanine racemase can result in the inhibition of growth of prokaryotes. [Azam et.al 2016] As it is generally absent in higher eukaryotes such as human but is ubiquitous throughout bacteria. Therefore, alanine racemase is recognized as an attractive target for antibacterial drug development. [Azam et.al 2016]
                            </p>
                        </v-col>
                      </v-row>



                      <v-row cols="12" sm="12" xs="12" md="12" lg="7" xl="7" class="row_max-box">

                        <v-col>
                          <h3>Experiment</h3>
                          <p class="p_indent">
                              In this experiment, alanine racemase (AR) gene carried on our new part (BBa_K3580200) on a T5 promoter-controlled pCA24N vector was transformed into the BL21(DE3) star strain. After expression induction by IPTG, the BL21 cells were collected by centrifugation, then sonicated and His-Tag purification was performed(Fig.)(Fig.). The meanings of each abbreviation are given in Table 1.                            
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

                      <v-row cols="12" sm="12" xs="12" md="12" lg="7" xl="7" class="row_max-box">
                        <figure class="fig_full_width" >
                          <img class="image_max" src="https://2020.igem.org/wiki/images/b/b8/T--Waseda--racemase_expression.png" alt="Fig.3-2-2 Purification of alanine racemase expressed in <i>E. Coli</i>">
                        <figcaption class="fig_title">Fig.3-2-2 Purification of alanine racemase expressed in <i>E. Coli</i></figcaption>
                        </figure>
                      </v-row>




                      <v-row cols="12" sm="12" xs="12" md="12" lg="7" xl="7" class="row_max-box">
                        <figure class="fig_full_width" >
                          <img class="image_max" src="https://2020.igem.org/wiki/images/8/8a/T--Waseda--racemase_purification_sds.png" alt="Fig. 3-2-3 SDS-PAGEs of purified <i>E. coli</i> BL21(DE3)star containing BBa_K3580200">
                        <figcaption class="Fig. 3-2-3 SDS-PAGEs of purified <i>E. coli</i> BL21(DE3)star containing BBa_K3580200"></figcaption>
                        </figure>
                      </v-row>

                      <v-row cols="12" sm="12" xs="12" md="12" lg="7" xl="7" class="row_max-box">
                        <figure class="fig_full_width" >
                          <img class="image_max" src="https://2020.igem.org/wiki/images/9/90/T--Waseda--racemase_table1_sds.png" alt="Table.3-2-1 Each meaning of abbriviation">
                        <figcaption class="fig_title">Table.3-2-1 Each meaning of abbriviation</figcaption>
                        </figure>
                      </v-row>





                    <v-row cols="12" sm="12" xs="12" md="12" lg="7" xl="7" class="row_max-box">

                        <v-col>

                          <p class="p_indent">        
                              To assess the activity of purified racemase, fluorescence values of GFPS1 synthesized by a combination of GFPS1 plasmid, L-alanine, D-alanine, and purified AR were measured in the Pure System, a reconstituted CFPS that contains no enzymes other than the translation system(Fig. 3-2-4)[Shimizu et.al 2001].
                          </p>
                        </v-col>
                      </v-row>

                      <v-row cols="12" sm="12" xs="12" md="12" lg="7" xl="7" class="row_max-box">
                        <figure class="fig_full_width" >
                          <img class="image_max" src="https://2020.igem.org/wiki/images/a/a1/T--Waseda--racemase_puresystem.png" alt="Fig. 3-2-4 Cell-free protein synthesis in the PURE system">
                        <figcaption class="fig_title">Fig. 3-2-4 Cell-free protein synthesis in the PURE system</figcaption>
                        </figure>
                      </v-row>
                    <v-row cols="12" sm="12" xs="12" md="12" lg="7" xl="7" class="row_max-box">

                        <v-col>
                          
                          <p class="p_indent"> 
                              The natural translation system is difficult to take up D-amino acids. [Kuncha 2019]19 amino acids other than alanine are L-bodies, so if only alanine is D-body, even if the sequence is correct, it has no activity as an enzyme(Fig. 3-2-5).                              
                          </p>
                        </v-col>
                      </v-row>

                      <v-row cols="12" sm="12" xs="12" md="12" lg="7" xl="7" class="row_max-box">
                        <figure class="fig_full_width" >
                          <img class="image_max" src="https://2020.igem.org/wiki/images/2/2a/T--Waseda--racemase_pure_alanine.png" alt="Fig. 3-2-5 Cell-free protein synthesis under each alanine conditions">
                        <figcaption class="fig_title">Fig. 3-2-5 Cell-free protein synthesis under each alanine conditions</figcaption>
                        </figure>
                      </v-row>


                      <v-row cols="12" sm="12" xs="12" md="12" lg="7" xl="7" class="row_max-box">

                        <v-col>
                          
                          <p class="p_indent">    
                              Since GFP is composed of L-amino acids, when GFPS1 takes up L-alanine, the system would give off fluorescent effect, and when D-alanine and AR are added, the racemized L-alanine can be used for translation and the fluorescence value was expected to be restored(Fig. 3-2-6). The evaluation of the effect of amino acids on the synthesis of a reporter protein is the most appropriate methodology for this scenario as a "food source".                          
                          </p>
                        </v-col>
                      </v-row>

                      <v-row cols="12" sm="12" xs="12" md="12" lg="7" xl="7" class="row_max-box">
                        <figure class="fig_full_width" >
                          <img class="image_max" src="https://2020.igem.org/wiki/images/e/e5/T--Waseda--racemase_pure_racemase.png" alt="Fig. 3-2-6 Cell-free protein synthesis using racemization of alanine by racemase">
                        <figcaption class="fig_title">Fig. 3-2-6 Cell-free protein synthesis using racemization of alanine by racemase</figcaption>
                        </figure>
                      </v-row>


                      <v-row cols="12" sm="12" xs="12" md="12" lg="7" xl="7" class="row_max-box">

                        <v-col>
                          
                          <p class="p_indent"> 
                              We decided to assay AR by using PURE frex donated by GeneFrontier, Inc. As PURE frex does not contain any extra metabolic enzymes other than those involved in transcription and translation, we would be able to perform the assays without having to control the metabolic system, which have plagued the assays with extract based CFPS. First, we identified problems with commercial D-alanine that may be contaminated with L-alanine (Fig. 3-2-7). 
                                The fluorescence values of the expressed GFP were measured by real-time PCR and the measured fluorescence values were quantitatively calibrated by FITC.
                           
                          </P>
                          <p class="p_indent">                              
                          </p>
                        </v-col>
                      </v-row>

                      <v-row cols="12" sm="12" xs="12" md="12" lg="7" xl="7" class="row_max-box">
                        <figure class="fig_full_width" >
                          <img class="image_max" src="https://2020.igem.org/wiki/images/0/0f/T--Waseda--racemase_201020_bar.png" alt="Fig. 3-2-7 Effect of L-alanine substrate repletion for translation by racemase">
                        <figcaption class="fig_title">Fig. 3-2-7 Effect of L-alanine substrate repletion for translation by racemase</figcaption>
                        </figure>
                      </v-row>


                      <v-row cols="12" sm="12" xs="12" md="12" lg="7" xl="7" class="row_max-box">

                        <v-col>
                          
                          <p class="p_indent">      
                              Fig. 3-2-7 shows a comparison of the fluorescence values at a plateau. Although slightly synthesized GFP was identified by contaminating L-alanine with commercially available D-alanine, was found to be acceptable as a negative control, so the assay with AR was confirmed by the combination of each alanine and racemase (Fig. 3-2-8) (Fig. 3-2-9).
                      
                          </P>
                          
                        </v-col>
                      </v-row>

                      <v-row cols="12" sm="12" xs="12" md="12" lg="7" xl="7" class="row_max-box">
                        <figure class="fig_full_width" >
                          <img class="image_max" src="https://2020.igem.org/wiki/images/5/59/T--Waseda--racemase_201023_time.png" alt="Fig. 3-2-8 Temporal variation of GFP fluorescence value in each condition">
                        <figcaption class="fig_title">Fig. 3-2-8 Temporal variation of GFP fluorescence value in each condition</figcaption>
                        </figure>
                      </v-row>


                      <v-row cols="12" sm="12" xs="12" md="12" lg="7" xl="7" class="row_max-box">
                        <figure class="fig_full_width" >
                          <img class="image_max" src="https://2020.igem.org/wiki/images/3/36/T--Waseda--racemase_201023_bar.png" alt="Fig. 3-2-9 Effect of L-alanine substrate repletion for translation by ">
                        <figcaption class="fig_title">Fig. 3-2-9 Effect of L-alanine substrate repletion for translation by racemase</figcaption>
                        </figure>
                      </v-row>



                      <v-row cols="12" sm="12" xs="12" md="12" lg="7" xl="7" class="row_max-box">

                        <v-col>
                          
                          <p> 
                              Fig. 3-2-8 shows the temporal variation of GFP fluorescence value.                           
                          </P>
                          <p>
                              Fig. 3-2-9 shows a comparison of the fluorescence values of each sample at 120 min, when GFP expression seems to have plateaued.                              
                          </p>
                        </v-col>
                      </v-row>
                      <v-row cols="12" sm="12" xs="12" md="12" lg="7" xl="7" class="row_max-box">

                        <v-col>
                                                      
                          <p class="p_indent"> 
                              The results demonstrated that GFP could not be synthesized by D-alanine alone, but L-alanine produced by racemase-mediated racemization of D-alanine and L-alanine could be used for translation, creating a situation in which fluorescence was restored by the synthesized GFP.  In other words, we succeeded in creating a situation in which the opponent’s food was converted into food for themselves in the Zombie vs. Samurai scenario.  Additionally, when the amount of D alanine reacting with alanine racemase was reduced, the fluorescence value of the synthesized GFP was lower but significantly higher than that of the negative control, confirming the deprivation even in a situation where food was originally low (Fig. 3-2-9 ).                             
                          </p>
                        </v-col>
                      </v-row>


                      <v-row cols="12" sm="12" xs="12" md="12" lg="7" xl="7" class="row_max-box">
                        <figure class="fig_full_width" >
                          <img class="image_max" src="https://2020.igem.org/wiki/images/7/70/T--Waseda--racemase_201022_bar.png" alt="Fig. 3-2-10 Assay results with low levels of D-alanine substrate reacting with racemase">
                        <figcaption class="fig_title">Fig. 3-2-10 Assay results with low levels of D-alanine substrate reacting with racemase</figcaption>
                        </figure>
                      </v-row>


                      <v-row cols="12" sm="12" xs="12" md="12" lg="7" xl="7" class="row_max-box">

                        <v-col>
                          
                          <p class="p_indent">   
                              This result indicates that the system is highly sensitive to the substrate, as the corresponding expression of the reporter was lowered in a low substrate situation.                         
                          </P>
                          <p class="p_indent">        
                              We also used an extract-based CFPS system for assays of purified racemase, prior to performing experiments in the PURE system. As with the PURE system method, fluorescence of GFPS1 synthesized by a combination of GFPS1 plasmid, L-alanine, D-alanine, and purified AR were measured in CFPS of dialyzed extract of <i>E. coli</i>. The results of this experiment are shown in Fig3-2-11.                      
                          </p>
                        </v-col>
                      </v-row>

                      <v-row cols="12" sm="12" xs="12" md="12" lg="7" xl="7" class="row_max-box">
                        <figure class="fig_full_width" >
                          <img class="image_max" src="https://2020.igem.org/wiki/images/0/0b/T--Waseda--racemase_200922_bar.png" alt="Fig. 3-2-11Aranine racemase assay using extract-based CFPS">
                        <figcaption class="fig_title">Fig. 3-2-11Aranine racemase assay using extract-based CFPS</figcaption>
                        </figure>
                      </v-row>



                      <v-row cols="12" sm="12" xs="12" md="12" lg="7" xl="7" class="row_max-box">

                        <v-col>
                          
                          <p class="p_indent"> 
                              As the results show, we were not able to consistently achieve the results we expected. Despite various subsequent trials and errors, we were unable to successfully achieve the theoretical results. We hypothesized that the main reason for this is that L-alanine is replenished by various enzymatic metabolic pathways in the extract solution and cannot be fully controlled, hence, we attempted to assay AR after adding the enzyme inhibitor, beta-Chloro-L-alanine[Whalen et,al 1985] [Arfin et.al 1971], in <i>E.coli</i> crude extract. Since beta-Chloro-L-alanine is known to irreversibly inhibit PLP dependent enzyme including AR[Manning et.al 1974] [Mobashery et.al 1987], the beta-Chloro-L-alanine reacted extract was dialyzed to reduce the amount of beta-Chloro-L-alanine in the sample. Thus, AR was added to the dialyzed reaction solution which theoretically does not contain β-Chloro-L-alanine(Fig.3-2-12).                             
                          </p>
                        </v-col>
                      </v-row>

                      <v-row cols="12" sm="12" xs="12" md="12" lg="7" xl="7" class="row_max-box">
                        <figure class="fig_full_width" >
                          <img class="image_max" src="https://2020.igem.org/wiki/images/9/9d/T--Waseda--201002_bar.png" alt="Fig.3-2-12 Inhibitory effects of beta-chloro-L-alanine">
                        <figcaption class="fig_title">Fig.3-2-12 Inhibitory effects of beta-chloro-L-alanine</figcaption>
                        </figure>
                      </v-row>



                      <v-row cols="12" sm="12" xs="12" md="12" lg="7" xl="7" class="row_max-box">

                        <v-col>
                          
                          <p class="p_indent"> 
                              Fig3-2-12 shows that the inhibition of metabolic synthesis of L-alanine by β-chloro-L-alanine is weak and difficult to control. After that, we tried to react the extract with β-chloro-L-alanine at higher concentrations, but its ability as an extract for CFPS was greatly reduced.                           
                          </P>
                          <p class="p_indent"> 
                              As a result, despite various subsequent trials and errors, we were unable to successfully achieve the theoretical results. Conversely, it is clear that the robustness found in living life in general is also found in the extract-based CFPS such as the one used in this experiment.                             
                          </p>
                        </v-col>
                      </v-row>


                      
                      <v-row cols="12" sm="12" xs="12" md="12" lg="7" xl="7" class="row_max-box">

                        <v-col>
                          <h3>Summary</h3>
                          <p class="p_indent">   
                              In our project, alanine racemase was expressed in<i> E. coli</i> and purified to create a situation with and without L-alanine as a substrate required for the cell-free protein synthesis of the reporter protein. Different situations resulted in different expression of GFP in the cell-free system, which indirectly assayed racemization by racemase. Our experiments were performed in the PURE system and achieved theoretical results in each condition, consistent with the 'war in the mirror' scenario. Furthermore, the system was confirmed to be sensitive to substrate amount.                         
                          </P>
                          <p class="p_indent">    
                              Alanine racemase is generally absent in higher eukaryotes such as human but is ubiquitous throughout bacteria. Some bacteria are known to be resistant in a variety of settings (optimal pH[Watanabe et.al 2002], etc) and should be considered when performing drug discovery assays.                           
                          </p>
                        </v-col>
                      </v-row>







                    <v-row> 
                      <v-row class="row_max-box">
                        <h2 class="h2_text">Material and methods</h2>
                      </v-row>
                      </v-row>




                    <v-row cols="12" sm="12" xs="12" md="12" lg="7" xl="7" class="row_max-box">
                        <v-col>
                          <h3>Expression and purification of alanine racemase</h3>
                          <p>
                              The composition of buffers used was as follows: <br/>
                                           Buffer S, 50mM Tris-Cl pH 7.6, 300mM NaCl, 0.05% TritonX-100, 1mM DTT; <br/>
                                           Buffer W, 50mM Tris-Cl pH 7.6, 300mM NaCl, 1mM imidazole, 1mM DTT; <br/>
Buffer E, 50mM Tris-Cl pH 7.6, 300mM NaCl, 100mM imidazole, 1mM DTT; <br/>
Buffer D, 50mM Tris-Cl pH 8.0, 100mM NaCl, 100µM EDTA, 1mM DTT;<br/>
                          </P>
                          <p class="p_indent">  
                              For the purification of alanine racemase, our new part (BBa_K3580201) on the <i>E. coli</i> BL21(DE3)star strain on a T5 promoter-controlled, chloramphenicl-resistant pCA24N vector was transformed by the heat shock method on LB agar media. The transformed BL21(DE3)star was grown overnight on 3 ml of LB media with 25ng/µl chloramphenicol(LB-Cm). The culture medium was diluted 100-fold in 200 ml of fresh LB-Cm and incubated at 37°C, 140 rpm until OD 600nm =0.7-0.8. IPTG was then added to the culture medium to a final concentration of 1mM and incubated at 30°C, 140 rpm for 19 hours. After incubation, the cells were collected by centrifugation and frozen at -80°C. The bacteria suspended in Buffer S was sonicated and the lysate was centrifuged for 10 min at 12,000 rpm and the supernatant was collected. The supernatant was rotated with equilibrated Ni beads (50% slurry, His 60 Ni super flow resin, takara) for 1 hour at 4°C. Rotated material was passed through a 20 ml Open column (Econopak, biorad) and washed twice with Buffer W. The alanine racemase His-Tag was purified by elution of 1 ml each with Buffer E. SDS-PAGE confirmed a concentrated fraction and the sample was dialyzed with Buffer D. The dialyzed samples were stored at -80°C. The concentration of the purified racemase was quantified by the Bradford method using a dilution series of BSA(Bio-Rad).                           
                          </p>
                        </v-col>
                      </v-row>

                    <v-row cols="12" sm="12" xs="12" md="12" lg="7" xl="7" class="row_max-box">
                        <v-col>
                          <h3>Racemase assay in a PURE system</h3>
                          <p class="p_indent">                            
                          Indirect assays for AR were performed using the PURE frex donated by Gene Frontier Inc.  The combinations are shown on Table.3-2-2. The racemization reaction was performed in solution with final concentrations of 5 mM D-alanine, 10 µM PLP, 50 mM potassium phosphate, and 57.5 µg/ml AR mixed together and incubated at 37°C for 1 h. The amount of racemase used was determined taking into account the amount of D-alanine substrate and Vmax[Strych et.al 2007][Ju et.al 2010].The sample was Filtered using centrifugal filter device at 14,000g for 30min (Amicon Ultra-0.5 Centrifugal Filter Devices 3K) and the filtered sample was collected. The filter device was washed prior to centrifugation of the sample using the buffer used in the AR reaction. the sample was centrifuged to collect the filtered product. Filtering allowed us to collect substances other than AR from the incubated product.CFPS reactions were performed on a 10µl scale and racemization reactions were performed on a 100µl scale.                   
                          </p>
                        </v-col>
                      </v-row>

                      <v-row cols="12" sm="12" xs="12" md="12" lg="7" xl="7" class="row_max-box">
                        <figure class="fig_full_width" >
                          <img class="image_max" src="https://2020.igem.org/wiki/images/7/76/T--Waseda--racemase_table2_pure.png" alt="Table.3-2-2 Compositon used in the PURE system">
                        <figcaption class="fig_title">Table.3-2-2 Compositon used in the PURE system</figcaption>
                        </figure>
                      </v-row>
                      
                      
                      <v-row cols="12" sm="12" xs="12" md="12" lg="7" xl="7" class="row_max-box">

                        <v-col>
                          <h3>Racemase assay in an extract-based CFPS</h3>
                          <p class="p_indent"> 
                              The purified AR was assayed indirectly by an extract-based cell-free protein synthesis system (CFPS). Fluorescence values of GFPS1 synthesized in CFPS of dialyzed <i>E. coli</i> crude extract by a combination of GFPS1 plasmid, L-alanine, D-alanine and purified AR were measured. The compositions are as follows(Table3-2-3 ).The composition of mixA and mixB are as follows(Table.3-2-4)(Table.3-2-5).                           
                          </P>
                          
                        </v-col>
                      </v-row>

                      <v-row cols="12" sm="12" xs="12" md="12" lg="7" xl="7" class="row_max-box">
                        <figure class="fig_full_width" >
                          <img class="image_max" src="https://2020.igem.org/wiki/images/1/14/T--Waseda--racemase_table3_extract.png" alt="Table.3-2-3 Compositon used in the extract-based CFPS">
                        <figcaption class="fig_title">Table.3-2-3 Compositon used in the extract-based CFPS</figcaption>
                        </figure>
                      </v-row>
                      
                      


                      <v-row cols="12" sm="12" xs="12" md="12" lg="7" xl="7" class="row_max-box">
                        <figure class="fig_full_width" >
                          <img class="image_max" src="https://2020.igem.org/wiki/images/0/02/T--Waseda--racemase_table4_mixA.png" alt="Table.3-2-4 Composition of mixA">
                        <figcaption class="fig_title">Table.3-2-4 Composition of mixA</figcaption>
                        </figure>
                      </v-row>
                      
                      
                    


                      <v-row cols="12" sm="12" xs="12" md="12" lg="7" xl="7" class="row_max-box">
                        <figure class="fig_full_width" >
                          <img class="image_max" src="https://2020.igem.org/wiki/images/9/9b/T--Waseda--racemase_table5_mixB.png" alt="Table.3-2-5Composition of mixB">
                        <figcaption class="fig_title">Table.3-2-5Composition of mixB</figcaption>
                        </figure>
                      </v-row>
                      
                      
                      
                      <v-row cols="12" sm="12" xs="12" md="12" lg="7" xl="7" class="row_max-box">

                        <v-col>
                          <h3> Cell extract(S12) preparation for Racemase assay</h3>
                          <p class="p_indent">  
                             
The preparation of <i>E. coli</i> extracts for the racemase assay essentially followed the method described on extract protocol( <nuxt-link to='Protocol'> Go to Protocol page </nuxt-link>)

                          </P>
                          <p class="p_indent">  
                              As we wanted to exclude small molecules in the extract, especially amino acids in this case, from the extract, we dialyzed the extract using S12 Buffer after run-off reaction according to Jewett's method[Silverman et.al 2019].The run-off reaction was performed by incubating the extracts in 15 ml tubes in a shaker at 80 min, 37°C, 220 rpm, shaded with aluminum foil.                            
                          </p>

                       
                        </v-col>
                      </v-row>

                      
                    
                      
                      <v-row cols="12" sm="12" xs="12" md="12" lg="7" xl="7" class="row_max-box">

                        <v-col>
                          <h3>Reaction of the extract with beta-chloro-L-alanine</h3>
                          <p class="p_indent">                            
                         The extract was incubated with 40 mM beta-chloro-L-alanine at 37°C for 80 min. The reaction solution was then dialyzed in S12 Buffer four times to exclude β-chloro L-alanine.                           
                          </p>
                        </v-col>
                      </v-row>

                      
       

                      
                      <v-row cols="12" sm="12" xs="12" md="12" lg="7" xl="7" class="row_max-box">

                        <v-col>
                          <h3>Measurement of fluorescence values during the reaction</h3>
                          <p class="p_indent">                            
                          Measurements of cell-free expressed GFP fluorescence values were performed by real-time PCR(Step One Plus Real-Time PCR System, Applied Biosystems, Mx3005P, Stratagene California) and the measured fluorescence values were quantitatively calibrated by FITC.                          
                          </p>
                        </v-col>
                      </v-row>

                      
                      
                      
                      
                      <v-row cols="12" sm="12" xs="12" md="12" lg="7" xl="7" class="row_max-box">

                        <v-col>
                          <h3>Reference</h3>
                          <p >
                              [Milton et.al 1992] Milton, R., Milton, S., & Kent, S. (1992). Total chemical synthesis of a D-enzyme: The enantiomers of HIV-1 protease show reciprocal chiral substrate specificity [corrected]. Science, 256(5062), 1445-1448. doi:10.1126/science.1604320
[Tugyi et.al 2005] Tugyi, R., Uray, K., Iván, D., Fellinger, E., Perkins, A., & Hudecz, F. (2005). Partial d-amino acid substitution: Improved enzymatic stability and preserved ab recognition of a MUC2 epitope peptide. Proceedings of the National Academy of Sciences, 102(2), 413-418. doi:10.1073/pnas.0407677102
[Garton et.al 2018] Garton, M., Nim, S., Stone, T. A., Wang, K. E., Deber, C. M., & Kim, P. M. (2018). Method to generate highly stable D-amino acid analogs of bioactive helical peptides using a mirror image of the entire PDB. Proceedings of the National Academy of Sciences, 115(7), 1505-1510. doi:10.1073/pnas.1711837115
[Oberthür et.al 2015] Oberthür, D., Achenbach, J., Gabdulkhakov, A., Buchner, K., Maasch, C., Falke, S., Rehders, D., Klussmann, S., Betzel, C. (2015). Crystal structure of a mirror-image L-RNA aptamer (spiegelmer) in complex with the natural L-protein target CCL2. Nature Communications, 6(1), 6923. doi:10.1038/ncomms7923
[Majier et.al 2016] Maier, K., & Levy, M. (2016). From selection hits to clinical leads: Progress in aptamer discovery. Molecular Therapy.Methods & Clinical Development, 5, 16014. doi:10.1038/mtm.2016.14
[Schumacher et.al 1996] Schumacher, T. N. M., Mayr, L. M., Minor, D. L., Milhollen, M. A., Burgess, M. W., & Kim, P. S. (1996). Identification of d-peptide ligands through mirror-image phage display. Science, 271(5257), 1854-1857. doi:10.1126/science.271.5257.1854
[Funke et.al 2009] Funke, S. A., & Willbold, D. (2009). Mirror image phage display—a method to generate d-peptideligands for use in diagnostic or therapeutical applications. Mol.BioSyst., 5(8), 783-786. doi:10.1039/B904138A"
[Walish 1989] Walsh, C. T. (1989). Enzymes in the D-alanine branch of bacterial cell wall peptidoglycan assembly. The Journal of Biological Chemistry, 264(5), 2393-2396.
[Azam et.al 2016] Azam, M. A., & Jayaram, U. (2016). Inhibitors of alanine racemase enzyme: A review. Journal of Enzyme Inhibition and Medicinal Chemistry, 31(4), 517-526. doi:10.3109/14756366.2015.1050010
[Shimizu et.al 2001]Shimizu, Y., Inoue, A., Tomari, Y., Suzuki, T., Yokogawa, T., Nishikawa, K., & Ueda, T. (2001). Cell-free translation reconstituted with purified components. Nature Biotechnology, 19(8), 751-755. doi:10.1038/90802
[Kuncha et.al 2019] Kuncha, S. K., Kruparani, S. P., & Sankaranarayanan, R. (2019). Chiral checkpoints during protein biosynthesis. The Journal of Biological Chemistry, 294(45), 16535-16548. doi:10.1074/jbc.REV119.008166
[Whalen et,al 1985] Whalen WA, Wang MD, Berg CM. beta-Chloro-L-alanine inhibition of the Escherichia coli alanine-valine transaminase. J Bacteriol. 1985;164(3):1350-1352. doi:10.1128/JB.164.3.1350-1352.1985
[Arfin et.al 1971] Arfin, S., & Koziell, D. (1971). Inhibition of growth of salmonella typhimurium and of threonine deaminase and transaminase B by beta-chloroalanine. Journal of Bacteriology, 105(2), 519—522. doi:10.1128/jb.105.2.519-522.1971
[Manning et.al 1974] Manning JM, Merrifield NE, Jones WM, Gotschlich EC. Inhibition of bacterial growth by beta-chloro-D-alanine. Proc Natl Acad Sci U S A. 1974;71(2):417-421. doi:10.1073/pnas.71.2.417

[Mobashery et.al 1987] Mobashery, S., & Johnston, M. (1987). Inactivation of alanine racemase by .beta.-chloro-L-alanine released enzymically from amino acid and peptide C10-esters of deacetylcephalothin.Biochemistry, 26(18), 5878-5884. doi:10.1021/bi00392a045
[Watanabe et.al 2002] Watanabe, A., Yoshimura, T., Mikami, B., Hayashi, H., Kagamiyama, H., & Esaki, N. (2002). Reaction mechanism of alanine racemase from bacillus stearothermophilus: X-ray crystallographic studies of the enzyme bound with N-(5'-phosphopyridoxyl)alanine. The Journal of Biological Chemistry, 277(21), 19166-19172. doi:M201615200
[Strych et.al 2007] Strych U, Davlieva M, Longtin JP, et al. Purification and preliminary crystallization of alanine racemase from Streptococcus pneumoniae. BMC Microbiol. 2007;7:40. Published 2007 May 17. doi:10.1186/1471-2180-7-40
[Ju et.al 2010]Ju, J., Xu, S., Furukawa, Y., Zhang, Y., Misono, H., Minamino, T., Nambe, K. Zhao, B. Ohnishi, K. (2010). Correlation between catalytic activity and monomer–dimer equilibrium of bacterial alanine racemases. The Journal of Biochemistry, 149(1), 83-89. doi:10.1093/jb/mvq120
[Silverman et.al 2019]Silverman, A. D., Kelley-Loughnane, N., Lucks, J. B., & Jewett, M. C. (2019). Deconstructing cell-free extract preparation for in vitro activation of transcriptional genetic circuitry. ACS Synthetic Biology, 8(2), 403-414. doi:10.1021/acssynbio.8b00430


                          </p>
                        </v-col>
                      </v-row>

                      
                      

     
                  





                    <!-- <v-template  v-scroll="pushScrollY" id="section_01"><v-col class="last_message"></v-col></v-template> -->
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
const pageTitle = 'Racemase';
const pageDes = "iGEM2020 Team Waseda's" + pageTitle + "page";
const pageUrl = 'https://2020.igem.org/Team:Waseda/Racemase';


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

