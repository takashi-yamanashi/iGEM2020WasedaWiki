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
                                <circle fill="none" cx="100" cy="100" r="80" stroke="#ACC1D3" stroke-width="18" id="triangle" :style="{ 'stroke-dashoffset': scrollPer}" transform='rotate(270 100 100)'/>  
                                <!-- style="stroke-dasharray: 420.293; stroke-dashoffset: 210.293;" -->
                                
                                Sorry, your browser does not support inline SVG. 
                              </svg>
                              <img z-indx="10" class="navi_svg" src="https://2020.igem.org/wiki/images/7/72/T--Waseda--iGEM2020wikiicons-04.svg">
            
                        </v-row>

            
                    <v-row class="navi_text">
                        <a href="Monoterpene#setction_01"><v-row :class="{ 'title_text': true, 'title_text_active': check[0] }">GC/MS analysis</v-row></a>
                        <a href="Monoterpene#setction_02"><v-row :class="{ 'title_text': true, 'title_text_active': check[1] }">In vivo monoterpene synthesis </v-row></a>
                        <a href="Monoterpene#setction_03"><v-row :class="{ 'title_text': true, 'title_text_active': check[2] }">Cell-free monoterpene synthesis</v-row></a>
                        

                    </v-row>
                    </v-col>
                </v-col>



                <v-col class="main_text" cols="12" lg="10" xl="10">
                  
                    <v-row justify="center" text-align="left">
                        <v-row cols="12" class='h1_box'>
                          <v-col class='h1_box_text'> 
                            <h1 class='h1_text' pushElementOffsetTop>Monoterpene</h1>
                          </v-col>
                        </v-row>
                    </v-row>
                    
                    <v-row v-scroll="pushScrollY" > 
                      <v-row class="row_max-box">
                        <h2 class="h2_text">3-3-1. GC/MS analysis</h2>
                      </v-row>
                      </v-row>

                      <v-row cols="12" sm="12" xs="12" md="12" lg="7" xl="7" class="row_max-box">

                        <v-col id="section_01">
                          <h3>3-3-1-1 Introduction</h3>
                          <p class="p_indent">     
                              First, we confirmed that GC/MS could detect each monoterpene and confirmed the retention time and mass spectrum of each monoterpene.                       
                          </P>
                          
                        </v-col>
                      </v-row>
                      
                      <v-row cols="12" sm="12" xs="12" md="12" lg="7" xl="7" class="row_max-box">

                        <v-col>
                          <h3>Materials and Methods</h3>
                          
                          <p class="p_indent">     
                              300 µl dodecane (Nacalai tesque) containing limonene (Wako) or sabinene (Sigma) and 700 µl ethyl acetate (Nacalai tesque) were mixed and analyzed by GC/MS.  The concentration of monoterpenes contained in dodecane was adjusted to a final concentration of 100 µl when mixed with ethyl acetate.  Also, the peak area of each monoterpene measured here was used to quantify monoterpenes in later experiments. GC/MS analysis was performed on an Agilent 7890B GC with Agilent 5977B MS using a constant flow rate of 1.2 ml/min of helium carrier gas and using HP-5MS (30 m, 0.25 mm, 0.25 µm) column.  The inlet temperature was 300 ℃ and initial column temperature was 40 ℃ for 1 min.  The column was then heated to 300 ℃ at a rate of 15 ℃/min and held at 300 ℃ for 2 min.  The Injection volume was 1 µl with the split ratio 10:1.  In this experiment, SIM mode was used for the analysis.  Ions with four m/z values characteristic of limonene (68 and 93) and sabinene (77 and 91, 93) were analyzed to confirm the presence of monoterpenes.  And for quantitative analysis, 93 m/z was used in each monoterpene analyzes.  These m/z values were selected by referring to the mass spectrum of each monoterpene present in NIST Standard Reference database.  The above GC/MS analysis method was also used in the subsequent analysis of in vivo monoterpene synthesis and cell-free monoterpene synthesis.                         
                          </p>
                        </v-col>
                      </v-row>

                
                      
                      
                      <v-row cols="12" sm="12" xs="12" md="12" lg="7" xl="7" class="row_max-box">

                        <v-col>
                          <h3>Result</h3>
                          <p class="p_indent">  
                              The retention time for the peak of each monoterpene was observed was confirmed by comparing with a monoterpene-free solvent.  In this analysis method, the retention time for the peak of limonene was 8.07 min, and the retention time for the peak of sabinene was 8.45 min (Figure 3-3-1-1)                          
                          </P>
                          
                        </v-col>
                      </v-row>

                      <v-row cols="12" sm="12" xs="12" md="12" lg="7" xl="7" class="row_max-box">
                        <figure class="fig_full_width" >
                          <img class="image_max" src="https://2020.igem.org/wiki/images/d/dd/T--Waseda--monoterpene_3-3-1-1_Major_peak_for_standard_products_of_each_monoterpene.png" alt="Fig. 3-3-1-1 Major peak for standard products of each monoterpene">
                        <figcaption class="fig_title">Fig. 3-3-1-1 Major peak for standard products of each monoterpene</figcaption>
                        </figure>
                      </v-row>
                      
                      
                      
                      <v-row cols="12" sm="12" xs="12" md="12" lg="7" xl="7" class="row_max-box">

                        <v-col>
                          
                          <p class="p_indent">  
                              In addition, during the retention time when the peak of each monoterpene standard appeared, ions with the m/ z value selected to confirm the presence of each monoterpene were detected.  We were also able to observe the peak of the standard product for the 93 m/z ion used to detect the monoterpene (Figure. 3-3-1-2).                           
                          </P>
                          
                        </v-col>
                      </v-row>

                      <v-row cols="12" sm="12" xs="12" md="12" lg="7" xl="7" class="row_max-box">
                        <figure class="fig_full_width" >
                          <img class="image_max" src="https://2020.igem.org/wiki/images/d/da/T--Waseda--monoterpene_3-3-1-2_93_mz_ion_peak_for_standard_product_of_each_monoterpene.png" alt="Fig. 3-3-1-2 93 m/z ion peak for standard product of each monoterpene">
                        <figcaption class="fig_title">Fig. 3-3-1-2 93 m/z ion peak for standard product of each monoterpene</figcaption>
                        </figure>
                      </v-row>
                      
                      
                      
                      <v-row cols="12" sm="12" xs="12" md="12" lg="7" xl="7" class="row_max-box">

                        <v-col>
                          
                          <p class="p_indent">  
                              Therefore, in the subsequent experiments, we decided to confirm each monoterpene at the retention time of each monoterpene confirmed here.  And we decided to quantify each monoterpene using a peak of 93 m/z.                            
                          </p>
                        </v-col>
                      </v-row>













                    <v-row > 
                      <v-row class="row_max-box">
                        <h2 class="h2_text">3-3-2. In vivo monoterpene synthesis</h2>
                      </v-row>
                      </v-row>





                        <v-row cols="12" sm="12" xs="12" md="12" lg="7" xl="7" class="row_max-box" id="section_02">

                        <v-col>
                          <h3>Introduction</h3>

                        </v-col>
                      </v-row>

                      <v-row cols="12" sm="12" xs="12" md="12" lg="7" xl="7" class="row_max-box">
                        <figure class="fig_full_width" >
                          <img class="image_max" src="https://2020.igem.org/wiki/images/c/c6/T--Waseda--monoterpene_3-3-2-1_Schematic_of_in_vivo_limonene_synthesis.png" alt="Fig. 3-3-2-1 Schematic of <i>in vivo</i> monoterpene synthesis">
                        <figcaption class="fig_title">Fig. 3-3-2-1 Schematic of <i>in vivo</i> monoterpene synthesis</figcaption>
                        </figure>
                      </v-row>


                    
                    
                    <v-row cols="12" sm="12" xs="12" md="12" lg="7" xl="7" class="row_max-box">

                        <v-col>
                          
                          <p class="p_indent">   
                              Before monoterpene synthesis with cell-free system, we confirmed activity of the genes by monoterpene production with <i>E.coli</i>  In this experiment, DH5-alpha transformed with a plasmid encoding enzymes of the mevalonate pathway (pBbA5c-MevT-MBI from addgene) and a plasmid encoding GPP synthetase and monoterpene synthase (BBa_K3580101 / BBa_K3580102) were used.                         
                          </P>
                         
                        </v-col>
                      </v-row>


                    <v-row cols="12" sm="12" xs="12" md="12" lg="7" xl="7" class="row_max-box">

                        <v-col>
                          <h3>Materials and Methods</h3>
                          <p class="p_indent">    
                              H5-alpha transformed with pBbA5c-MevT-MBI and BBa_K3580101 / BBa_K3580102 were used in this experiment.  DH5-alpha was selected as the strain used because it was based on the strain used in the 2019 XJTU-CHINA team's limonene production project.  And DH5-alpha transformed with only pBbA5c-MevT-MBI was used as negative control.  Strains of transformed DH5-alpha were grown in 2xYT media (16 g/L tryptone, 10 g/L yeast extract, 7 g/L NaCl.  These components were purchased from Nakalai tesque) containing 25 ng/µl (Nakalai tesque) of chloramphenicol and 1 % in mass percent concentration of glucose (Wako).                        
                          </P>
                          <p class="p_indent">  
                              After culturing overnight (37℃, 180 rpm, 14 h) on 3 ml scales, 500 µM IPTG (Nacalai tesque) to induce expression and 500 µl dodecane overlay to capture monoterpene were added when OD600 exceeded 1.5.  After induction by IPTG, strains were continuously cultured at 30 ℃ and 200 rpm for 2 days (48 h). After 2 days of culture, 300 µl dodecane overlays were collected, mixed with 700 µl ethyl acetate and analyzed by GC/MS.  The GC / MS methods used were as described in 3-3-1.                            
                          </p>
                        </v-col>
                      </v-row>
                


                    <v-row cols="12" sm="12" xs="12" md="12" lg="7" xl="7" class="row_max-box">

                        <v-col>
                          <h3>Results</h3>
                          <p class="p_indent">  
                              From GC/MS analysis, we confirmed limonene from the introduced pathway.  Ions with two characteristic m/z values (68, 93) in limonene were detected in the limonene synthesis system using BBa_K3580101.  Also, GC chromatogram of the ion having 93 m/z from the complete limonene pathway shows a peak higher than that from a negative control (Figure. 3-3-2-2). Therefore, the yield of synthesized limonene per culture solution was calculated to be 0.161 µM.                          
                          </P>
                          
                        </v-col>
                      </v-row>

                      <v-row cols="12" sm="12" xs="12" md="12" lg="7" xl="7" class="row_max-box">
                        <figure class="fig_full_width" >
                          <img class="image_max" src="https://2020.igem.org/wiki/images/5/5f/T--Waseda--monoterpene_3-3-2-2_GCMS_analysis_results_of_in_vivo_limonene_synthesis_system.png" alt="Fig. 3-3-2-2 GC/MS analysis results of <i>in vivo</i> limonene synthesis system ">
                        <figcaption class="fig_title">Fig. 3-3-2-2 GC/MS analysis results of <i>in vivo</i> limonene synthesis system </figcaption>
                        </figure>
                      </v-row>
                


                    <v-row cols="12" sm="12" xs="12" md="12" lg="7" xl="7" class="row_max-box">

                        <v-col>
                          
                          <p class="p_indent"> 
                              On the other hand, in the sabinene synthesis system in which BBa_K3580101 was introduced, there was no  difference from the negative control in the detection result of the ion having 93 m/z, which is the most characteristic in sabinene.  It is thought that this is because the retention time overlapped with some substance with ion close to 93 m/z.  For this reason, we thought it difficult to detect sabinene in the in vivo system used this time.                          
                          </P>
                        </v-col>
                      </v-row>

                      <v-row cols="12" sm="12" xs="12" md="12" lg="7" xl="7" class="row_max-box">
                        <figure class="fig_full_width" >
                          <img class="image_max" src="https://2020.igem.org/wiki/images/6/6f/T--Waseda--monoterpene_3-3-2-3_Analysis_results_by_GCMS_of_ions_with_93_mz_for_in_vivo_sabinene_synthesis_system.png" alt="Fig. 3-3-2-3 Analysis results by GC/MS of ions with 93 m/z for <i>in vivo</i> sabinene synthesis system">
                        <figcaption class="fig_title">Fig. 3-3-2-3 Analysis results by GC/MS of ions with 93 m/z for <i>in vivo</i> sabinene synthesis system</figcaption>
                        </figure>
                      </v-row>
                
















                    <v-row > 
                      <v-row class="row_max-box">
                        <h2 class="h2_text">3-3-3 Cell-free monoterpene synthesis</h2>
                      </v-row>
                      </v-row>


                    <v-row cols="12" sm="12" xs="12" md="12" lg="7" xl="7" class="row_max-box" id="section_03">

                        <v-col>
                          <h3>Introduction</h3>
                          
                        </v-col>
                      </v-row>

                      <v-row cols="12" sm="12" xs="12" md="12" lg="7" xl="7" class="row_max-box">
                        <figure class="fig_full_width" >
                          <img class="image_max" src="https://2020.igem.org/wiki/images/b/b3/T--Waseda--monoterpene_2-2-1_Parts_and_metabolic_pathways_in_this_experiment_and_a_schematic_diagram_of_the_experiment.png " alt="Fig. 3-3-3-1 Parts and metabolic pathways in this experiment and a schematic diagram of the experiment ">
                        <figcaption class="fig_title">Fig. 3-3-3-1 Parts and metabolic pathways in this experiment and a schematic diagram of the experiment </figcaption>
                        </figure>
                      </v-row>
                


                    <v-row cols="12" sm="12" xs="12" md="12" lg="7" xl="7" class="row_max-box">

                        <v-col>
                          
                          <p class="p_indent"> 
                              As a preparatory step to implement a zombie and samurai scent-based discrimination system that operates in a cell-free system, we attempted to synthesize limonene and sabinene in a cell-free system.  In this cell-free monoterpene synthesis, we mixed two E. coli extracts each of which has either first 7 or last 2 enzymes of a pathway from Ac-CoA, which is a major intermediate of cell central metabolism.  Through mevalonate pathway, the former extract one (derived from E. coli into which pBbA5c-MevT-MBI has been introduced) can provide IPP and DMAPP, which can also be used as intermediates for other important biosynthesis.  Here we indeed supplemented only glucose and acetate as carbon sources.                             
                          </P>
                          <p class="p_indent">  
                              We obtained expression system for those seven genes from addgene and have converted this into Biobrick RFC 1000 format by synonymous replacement (BBa_K3580103).  In order to take advantage of an engineering principle of synthetic biology we provided two biobrick parts (BBa_K3580101, BBa_K3580102) for the source for the latter extract.  BBa_K3580101 has GPP synthase (GPPS) and limonene synthase.  Although GPP synthase is shared with BBa_K3580101, BBa_K3580102 has sabinene synthase, which has one point mutation in limonenesynthase (Srividya Narayanan et al 2015) and a new coding sequence for Parts registry of iGEM (See here for more details on this experiments).                             
                          </p>
                        </v-col>
                      </v-row>




                    <v-row cols="12" sm="12" xs="12" md="12" lg="7" xl="7" class="row_max-box">

                        <v-col>
                          <h3>Materials and Methods</h3>
                          <p>   
                              Cell growth and extract preparation                         
                          </P> 

                          <p class="p_indent">  
                              Transformed DH5-α strains were grown in 2xYT medium containing 25 ng/µl chloramphenicol and 1% glucose concentration. This is the same as in vivo monoterpene synthesis.  After culturing overnight (37℃, 180 rpm, 14 h) on 6 ml scales, 6 ml culture were added to 100 ml 2xYT medium containing 25 ng / µl chloramphenicol and 1% glucose concentration. Then, the culture was continued at 37 ℃ and 250 rpm, and when OD600 exceeded 0.6, 500 µM IPTG and 500 µL dodecane overlay were added.  After that, the strains into which BBa_K3580102 (Ptrc-trGPPS-SS) or pBbA5c-MevT-MBI was introduced were continuously cultured for 30℃, 250rpm, 22 h, and the strains into which BBa_K3580101 (Ptrc-trGPPS-LS) was introduced were continuously cultured for 30℃, 250rpm, 6 h.  After culturing, a cell extract was prepared according to step 3 and subsequent steps of the extract preparation protocol. ( <nuxt-link to='Protocol'>Here</nuxt-link> ) However, the Buffer E used did not contain dithiothreitol.                          
                          </P>                   
                        </v-col>
                      </v-row>



                    <v-row cols="12" sm="12" xs="12" md="12" lg="7" xl="7" class="row_max-box">

                        <v-col>
                          <p>Preparation of reaction solution for monoterpene synthesis and reaction conditions</p>
                          <p class="p_indent"> 
                              The preparation of the reaction solution for monoterpene synthesis is based on a recent paper from Jwett lab (Dudly et al 2019).  100 µl fraction of the mixed extract and 100 µl fraction of the solution containing the substrate etc. were mixed to prepare the 200 µl reaction solution.  The reaction contains 200 mM glucose, 8 mM magnesium acetate (Nakalai tesque), 10 mM ammonium acetate (Nakalai tesque), 134 mM potassium acetate (Nakalai tesque), 100 mM Bis Tris buffer (Bis Tris was purchased from Sigma, hydrochloric acid was purchased from Nakalai tesque), 10 mM potassium phosphate (Nakalai tesque), and the enzymes contained in the extract. The ratio of enzymes contained in the reaction solution could be adjusted by changing the mixing ratio of the extracts.  200 µl dodecane overlay was added to the prepared reaction solutions, and the reaction solutions were incubated at 30 ℃ for 2 days.  After two days reaction, 150 µl dodecane overlay was collected, mixed with 150 µl dodecane and 700 µl ethyl acetate, and then analyzed by GC/MS.  The GC / MS methods used were as described in 3-3-1.                           
                          </P>
                          <p class="p_indent">                              
                          </p>
                        </v-col>
                      </v-row>


                        <v-row cols="12" sm="12" xs="12" md="12" lg="7" xl="7" class="row_max-box">

                        <v-col>
                          <h3>Results and Discussion</h3>
                          
                        </v-col>
                      </v-row>

                      <v-row cols="12" sm="12" xs="12" md="12" lg="7" xl="7" class="row_max-box">
                        <figure class="fig_full_width" >
                          <img class="image_max" src="https://2020.igem.org/wiki/images/f/f7/T--Waseda--monoterpene_2-2-2_GCMS_analysis_results_of_limonene_synthesis_system.png " alt="Fig. 3-3-3-2 GC / MS analysis results of limonene synthesis system ">
                        <figcaption class="fig_title">Fig. 3-3-3-2 GC / MS analysis results of limonene synthesis system </figcaption>
                        </figure>
                      </v-row>
                



                        <v-row cols="12" sm="12" xs="12" md="12" lg="7" xl="7" class="row_max-box">

                        <v-col>
                          
                          <p class="p_indent">   
                              We confirmed limonene synthesis GC/MS analysis with SIM.  In this SIM analysis, ions with four m/z values  characteristic in limonene (68 and 93) and sabinene (77 and 91, 93) were analyzed.   By using authentic limonene standard, we confirmed a retention time for GC and the characteristic limonene SIM signal at the specific m/z values.  At the same retention time with the standard, limonene-specific m/z value (68, 93) ions were detected in the selected ions (The upper right figure of Figure. 3-3-3-2).  We also draw a GC chart by summation of the signals from the selected ions (The lower left figure of Figure. 3-3-3-2).  By comparison with a negative control experiment which we omitted the extract containing GPP synthase and limonene synthase, we found clear peak from our limonene synthesis.                            
                          </p>
                        </v-col>
                      </v-row>
                    
                    <v-row cols="12" sm="12" xs="12" md="12" lg="7" xl="7" class="row_max-box">
                        <figure class="fig_full_width" >
                          <img class="image_max" src="https://2020.igem.org/wiki/images/f/f2/T--Waseda--monoterpene_2-2-3_GCMS_analysis_results_of_sabinene_synthesis_system.png " alt="Fig. 3-3-3-2 GC / MS analysis results of limonene synthesis system ">
                        <figcaption class="fig_title">Fig. 3-3-3-3 GC/MS analysis results of sabinene synthesis system </figcaption>
                        </figure>
                      </v-row>
                
                    
                    
                    
                    
                    <v-row cols="12" sm="12" xs="12" md="12" lg="7" xl="7" class="row_max-box">

                        <v-col>
                          
                          <p class="p_indent">   
                              By similar GC/MS analysis with SIM, we confirmed the world's first report of sabinene synthesis using cell extracts.  Although elaborative reconstituted system by mixing of purified enzymes has been reported (Srividya Narayanan et al 2015), (Korman Tyler P et al 2017).  Extract-base system with not only simple but engineering principle must provide much contribution to iGEM and DIY biology which as large number of players. Furthermore, extract systems do not require expensive coenzymes (Dudly et al 2019). As well as limonene detection in Fig 3-3-3-2, we firstly confirmed sabinene retention time and SIM signal at the m/z values (77, 91, and 93).  From our cell-free production, we then detected sabinene SIM signal and chromatogram peak which cannot find from the negative control.  Also, from the system containing sabinene synthase and GPP synthase, a peak with the same retention time as the standard limonene product and ions with m/z values characteristic in limonene at that retention time were detected.  This was consistent with the fact that the paper that referred to the sabinene synthase used in this experiment also reported the synthesis of limonene as a by-product (Srividya Narayanan. et al 2015).                            
                          </p>
                        </v-col>
                      </v-row>


                      
                      <v-row cols="12" sm="12" xs="12" md="12" lg="7" xl="7" class="row_max-box">
                        <figure class="fig_full_width" >
                          <img class="image_max" src="https://2020.igem.org/wiki/images/d/dd/T--Waseda--monoterpene_3-3-3-4_Unknown_by-product_of_cell-free_sabinene_synthesis.png" alt="Fig. 3-3-3-4 Unknown by-product of cell-free sabinene synthesis">
                        <figcaption class="fig_title">Fig. 3-3-3-4 Unknown by-product of cell-free sabinene synthesis</figcaption>
                        </figure>
                      </v-row>

                    
                    
                    
                    
                    
                    <v-row cols="12" sm="12" xs="12" md="12" lg="7" xl="7" class="row_max-box">

                        <v-col>
                          
                          <p class="p_indent">    
                              On the other hand, in the sabinene synthesis system using the extract, a large peak of an unknown substance with a mass spectrum similar to that of sabinene but with a different retention time was detected.   Therefore, we used the scan mode to obtain the Mass spectrum of this unknown substance and estimated what kind of substance was detected (Figure. 3-3-3-4).  This by-product was not detected in the <i>in vivo</i> system.  By-products other than limonene expected from the report in the paper that referred to the sequence of this part (Srividya Narayanan et al 2015) include alpha-pinene and beta-pinene, but the characteristic peaks of m/z values　(43, 77, 93) did not perfectly match when compared to the data in the NIST database. This by-product needs to be identified by obtaining a standard of the candidate substance and comparing it with its retention time.                          
                          </p>
                        </v-col>
                      </v-row>


                      
                      <v-row cols="12" sm="12" xs="12" md="12" lg="7" xl="7" class="row_max-box">
                        <figure class="fig_full_width" >
                          <img class="image_max" src="https://2020.igem.org/wiki/images/f/fa/T--Waseda--monoterpene_2-2-4_Yields_of_monoterpene_per_reaction_solution_in_this_experiment_.png " alt="Fig.3-3-3-5 Yields of monoterpene per reaction solution in this experiment ">
                        <figcaption class="fig_title">Fig.3-3-3-5 Yields of monoterpene per reaction solution in this experiment </figcaption>
                        </figure>
                      </v-row>



                      

                        <v-row cols="12" sm="12" xs="12" md="12" lg="7" xl="7" class="row_max-box">

                        <v-col>
                          
                          <p class="p_indent">   
                              Finally, each of monoterpenes were quantified based on peaks of substance having 93 m/z and each monoterpene standard curves.  Taking advantage of the modularity of the combination of extracts, we confirmed whether the yield of monoterpenes could be changed by changing the mixing ratio of the extract containing the enzyme of the mevalonate pathway and the extract containing GPP synthase and monoterpene synthase.  As a result, changes in the yield of monoterpenes due to the mixing ratio of the extracts were observed (Figure. 3-3-3-5).  The best yield of limonene per reaction solution with limonene synthase contained system was 0.73 µM, and the best yield of sabinene per reaction solution with sabinene synthase contained system was 4.60 µM.  From the relationship between the mixing ratio of the extracts and the yield of sabinene, the optimum mixing ratio of the extract containing the mevalonate pathway enzyme and the extract containing GPP synthase + sabinene synthase considered to exist between 8 : 2 and 2 : 8.  It was also considered that the yields of the limonene synthesis system were lower than the yields of the sabinene synthesis system because the amount of GPP synthase and limonene synthase expression were small because the culture time after induction of expression was short.  Therefore, increasing the mixing ratio of the extract containing GPP synthase and limonene synthase, or increasing the culture time after expression induction during the preparation of the extract, is expected to increase the yield of limonene.                           
                          </p>
                        </v-col>
                      </v-row>





                      

                        <v-row cols="12" sm="12" xs="12" md="12" lg="7" xl="7" class="row_max-box">

                        <v-col>
                          <h3>Reference</h3>
                          <p>
                            (1) Alonso-Gutierrez, J. et al. (2013). Metabolic engineering of Escherichia coli for limonene and perillyl alcohol production. Metabolic engineering, 19, 33-41.<br/>
                            (2) Dudley, Q. M. et al. (2019). Cell-free biosynthesis of limonene using enzyme-enriched Escherichia coli lysates. Synthetic Biology, 4(1), ysz003.<br/>
                            (3) Srividya, N. et al. (2015). Functional analysis of (4S)-limonene synthase mutants reveals determinants of catalytic outcome in a model monoterpene synthase. Proceedings of the National Academy of Sciences, 112(11), 3332-3337.<br/>
                            (4) Korman, T. P. et al. (2017). A synthetic biochemistry platform for cell free production of monoterpenes from glucose. Nature communications, 8(1), 1-8.<br/>
                            (5) Mass Spectrometry Data Center, William E. Wallace, "Mass Spectra" in NIST Chemistry WebBook, NIST Standard Reference Database Number 69, Eds. P.J. Linstrom and W.G. Mallard, National Institute of Standards and Technology, Gaithersburg MD, 20899, https://doi.org/10.18434/T4D303, (retrieved October 22, 2020).<br/>
                            
                          </P>
                          
                        </v-col>
                      </v-row>






<!-- 
                    <v-template  v-scroll="pushScrollY" id="section_01"><v-col class="last_message"></v-col></v-template>
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
const pageTitle = 'Monoterpene';
const pageDes = "iGEM2020 Team Waseda's" + pageTitle + "page";
const pageUrl = 'https://2020.igem.org/Team:Waseda/Monoterpene';


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

