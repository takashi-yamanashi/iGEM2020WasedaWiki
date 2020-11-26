<template>

<html>

	
	
<div class="page_wrapper">
<div class="page_center">


<div style="padding: 20px 0px; width:95%; margin:auto; font-size:14px;">
<!---<h1> Poster: Waseda </h1>--->
<!---<br><br>--->

<!---<h3> Poster Template </h3>	--->
<!---<p> This poster template will let you create an interactive poster! The poster is divided in two parts: the visual overview on the left and the documentation on the right. The visual overview is broken down into sections that the user can click on. When a user clicks on a poster section in the visual overview, the documentation on the right will display the text and graphics associated with this section of the poster. You can find the documentation on how to use this template, as well as an example here: <a href="https://2020.igem.org/Competition/Deliverables/Poster">https://2020.igem.org/Competition/Deliverables/Poster</a></p>	--->



<!---</div>--->





<!---Place the content of your poster inside this div---> 	
<div class="poster_w content"> 
						

<!--This is the first row of the poster, it contains the title section --->	
<div class="row">
	<!-- This creates a full width section with the id 'title' , 
	since it will be the default section loaded, we add the class 'first_text' --->
	<div class="section full first_text" id="title">
		
		<!--Here is the image used for the full width section, the size is: 150 x 1200 pixels -->
		<img src="https://2020.igem.org/wiki/images/9/9b/T--Waseda--Poster_Title150_1200.png">
		
		<!--Info: Place the title and text for this section, it will appear when the user clicks on it
			since the first_text class is used above, this section will appear by default -->		
		<div class="info">
			<!--Write the title of the section -->
			<div class="title"><h1>Zombie vs Samurai</h1></div>
			<!--Write the text explaining this section -->
			<div class="text">
        <h3>2020 IGEM Waseda Team Member</h3>
           
          Takashi Yamanashi, 
          Ryota Miyachi,
          Takurou Shioi,
          Yuya Otsuki,
          Kanta Suga,
          Kae Nakamura,
          Rei Abe,
          Saho Fujieda,
          Satohiro Takizawa,
          Takaomi Yamada,
          Yuji Kamei,
          Takuma Kawabata,
          Aimi Watanabe,
          Yuri Hayashi,
          and Daisuke Kiga  <br /> &nbsp;&nbsp;&nbsp;&nbsp;<br />

        <h3>Acknowledgements</h3>
          Toru Asahi,
          Kosuke Kataoka,
          Akifumi Nishida,
          Satoshi Miyanaga,
          Junichi Saito,
          Tomohiro Inoue,
          Maximize, Inc.,
          ASOBIchanson.inc

         <br />&nbsp;&nbsp;&nbsp;&nbsp;<br />

        <h3>Sponsors</h3>
          <div class="subsection full">
            <figure>
                <img src="https://2020.igem.org/wiki/images/9/90/T--Waseda--Poster_Sponsor.png" alt="Special Thanks">
                <figcaption class="fig_title">Special Thanks</figcaption>
            </figure>
          </div>
        <br />&nbsp;&nbsp;
        <h3>Reference</h3>
        <p class="ref_text">
        [1] Alonso-Gutierrez, J. et al.  (2013). Metabolic engineering of Escherichia coli for limonene and perillyl alcohol production. Metabolic engineering, 19, 33-41.<br />
        [2] Dudley, Q. M. et al. (2019). Cell-free biosynthesis of limonene using enzyme-enriched Escherichia coli lysates. Synthetic Biology, 4(1), ysz003.<br />
        [3] Srividya, N. et al. (2015). Functional analysis of (4S)-limonene synthase mutants reveals determinants of catalytic outcome in a model monoterpene synthase. Proceedings of the National Academy of Sciences, 112(11), 3332-3337.<br />
        [4] Korman, T. P. et al. (2017). A synthetic biochemistry platform for cell free production of monoterpenes from glucose. Nature communications, 8(1), 1-8.<br />
        [5] Mass Spectrometry Data Center, William E. Wallace, "Mass Spectra" in NIST Chemistry WebBook, NIST Standard Reference Database Number 69, Eds. P.J. Linstrom and W.G. Mallard, National Institute of Standards and Technology, Gaithersburg MD, 20899, https://doi.org/10.18434/T4D303, (retrieved October 22, 2020).<br />
        </p>


      </div>
		</div>
	</div>
</div>
			
	
<!--This is the second row of the poster, it contains the introduction section --->		
<div class="row">
	<!-- This creates a full width section with the id 'introduction' --->
	<div class="section full" id="introduction">
		<!--Here is the image used for the full width section, the size is: 200 x 1200 pixels -->
		<img src="https://2020.igem.org/wiki/images/1/13/T--Waseda--Poster_Overview200_1200.png">
		
		<!--Info: Place the title and text for this section, it will appear when the user clicks on it-->		
		<div class="info">
			<!--Write the title of the section -->
			<div class="title"><h1>Overview</h1></div>
			<!--Write the text explaining this section -->
			<div class="text">
          <div class="subsection full">
            <figure>
                <img src="https://2020.igem.org/wiki/images/1/17/T--Waseda--Poster_Overview_main.png" alt="Fig.1 Our DBTL cycles">
                <figcaption class="fig_title">Fig.1 Our DBTL cycle</figcaption>
            </figure>
          </div>
        
        <br />
         &nbsp;&nbsp;&nbsp;&nbsp;We love easy-to-modulate <b>cell-free system</b>. However, through our human practice activities during the initial phase of our iGEM project, we realized that Synbio and cell-free system are unrecognized from general public.
         Thus, we selected the theme which is not only interesting as a story but also biologically important. Here was beginning of the story for information processing where mathematical modeling and wet experiment interacted each other through <b>Design-Build-Test-Learn (DBTL) cycle</b>.
          <br /> &nbsp;&nbsp;&nbsp;&nbsp;<br />

        &nbsp;&nbsp;&nbsp;&nbsp;
        This battle story also expanded into war in the mirror which can be broken by racemase. Our success in monoterpene productions for Zombie and Samurai also gave us an entry point for creation of our business model which was pivoted by interviews to experts.
           Our experience in Synbio modeling was implanted in a smartphone application which we utilized when we had a chance to educate high school students. By using our user-friendly application, they could understand a behavior of toggle switch circuit, which was one of the first successes in Synbio and important to understand cell-fate decision in developmental biology and regenerative medicine.

      </div>
		</div>
	</div>
</div>
				

<!--This is the forth row of the poster, it contains the inspiration, problem and idea sections --->				
<div class="row">
	
	<!-- This creates a forth  width section with the id 'inspiration' --->	
	<div class="section quarter" id="Zombiesec1">
		<!--Here is the image used for the third width section, the size is:  300 x 300 pixels  -->	
		<img src="https://2020.igem.org/wiki/images/e/ee/T--Waseda--Poster_ZombieSection1340_300.png">

    <!--Info: Place the title and text for this section, it will appear when the user clicks on it-->		
		<div class="info">
			
			<!--Write the title of the section -->
			<div class="title"><h1>Scenario</h1></div>
			<!--Write the text explaining this section -->
			<div class="text"> 
        &nbsp;&nbsp;&nbsp;&nbsp;The story we developed was the war between zombies and Samurai.
         Both Zombie and Samurai are essentially human beings, but their states switch by some factor. Zombies are able to make Samurai join their group by releasing communication molecules. On the other hand, Samurai also try to save the companion.
         At the end of the battle, the winner side is defined by the concentration of communication molecules in the field.
        <br />

          <div class="subsection full">
            <figure>
                <img src=" https://2020.igem.org/wiki/images/6/6a/T--Waseda--Poster_animationinteg.gif" alt="Fig.1 The overview of our scenario">
                <figcaption class="fig_title">Fig.1 The overview of our scenario</figcaption>
            </figure>
          </div>
        
        <br />

        &nbsp;&nbsp;&nbsp;&nbsp;A genetic circuit for the Zombie and Samurai war consists of two sub-systems; toggle switch and cell-cell communication module (shown above).
          The two states, Zombie and Samurai, are achieved by two stable states of a toggle switch circuit composed of two repressors each of which inhibiting gene expression of the other.

        <br />

      </div>
		</div>			

	</div>

	
	<!-- This creates a forth  width section with the id 'problem' --->	
	<div class="section quarter" id="ZombieSec3">
		<!--Here is the image used for the third width section, the size is:  300 x 300 pixels  -->	
		<img src="https://2020.igem.org/wiki/images/f/f1/T--Waseda--Poster_ZombieSection3340_300.png">
		
		<!--Info: Place the title and text for this section, it will appear when the user clicks on it-->			
		<div class="info">

			<!--Write the title of the section -->
			<div class="title"><h1>degradation-dilution term</h1></div>
			<!--Write the text explaining this section -->
			<div class="text">
        &nbsp;&nbsp;&nbsp;&nbsp;In contrast to cellular system, a cell-free system lacks cell growth and has much smaller degradation-dilution term, which lead to longer operating time (shown as Fig.1).
         We thus estimated operation time for state-switch between Zombie and Samurai in our cell-free system.
        
        
        <br />

          <div class="subsection full">
            <figure>
                <img src="https://2020.igem.org/wiki/images/f/fd/T--Waseda--Poster_testtube.png" alt="Fig.1 Comparison of cell and cell-free">
                <figcaption class="fig_title">Fig.1 Comparison of cell and cell-free</figcaption>
            </figure>
          </div>
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;Figure 2 shows the relationship between this degradation rate and operation time for state switching.
         The blue point is about normal protein degradation, and the green point shows the case of the LVA degradation tag are introduced on the protein.
          Considering a system based only on normal protein degradation of a cell-free system without growth of volume, it takes too much time to operate a state-switch between Samurai and Zombie. 



        <br />

          <div class="subsection full">
            <figure>
                <img src="https://2020.igem.org/wiki/images/0/0c/T--Waseda--Poster_degradationtime.png" alt="Fig.2 Degradation ratio and time of transition between equilibrium points ">
                <figcaption class="fig_title">Fig.2 Degradation ratio and time of transition between equilibrium points </figcaption>
            </figure>
          </div>
        <br />


      </div>
		</div>	
	</div>			
			
	<!-- This creates a forth  width section with the id 'idea' --->	
	<div class="section quarter" id="ZombieSec5">
		<!--Here is the image used for the third width section, the size is:  300 x 300 pixels  -->	
		<img src="https://2020.igem.org/wiki/images/6/60/T--Waseda--Poster_ZombieSection5340_300.png">
		
		<!--Info: Place the title and text for this section, it will appear when the user clicks on it-->		
		<div class="info">
		
			<!--Write the title of the section -->
			<div class="title"><h1>War in cell-free system</h1></div>
			<!--Write the text explaining this section -->
			<div class="text">


        &nbsp;&nbsp;&nbsp;&nbsp;Our simulation showed fate of the battle between Zombies and Samurai in the test tube.
         Depending on initial concentration of components, we can prepare a Zombie test tube and a Samurai test tube which are stable state.
         Then, by mixing Zombie and Samurai cell-free solutions in various ratios, the battle started. When Zombie state cell-free solution and Samurai state cell-free solution were mixed at a ratio of 2:8, the mixed solution was stable in the Samurai state.
         This means that the Samurai have beaten the Zombie. However, a slight change of the ratio completely turned their fate. When the Zombie and Samurai solutions were mixed at a ratio of 3:7, the mixed solution was stable in the Zombie state and the Zombie will destroyed the Samurai.  
          
          
         <br />         
          <div class="subsection full">
            <figure>
                <img src="https://2020.igem.org/wiki/images/1/10/T--Waseda--Poster_Basictimecourse.png" alt="Fig.1 Basic war in cell-free system">
                <figcaption class="fig_title">Fig.1 Basic war in cell-free system</figcaption>
            </figure>
          </div>
        <br />

      </div>
		</div>
	</div>

  	<!-- This creates a forth width section with the id 'idea' --->	
	<div class="section quarter" id="ZombieSec7">
		<!--Here is the image used for the third width section, the size is:  300 x 300 pixels  -->	
		<img src="https://2020.igem.org/wiki/images/7/74/T--Waseda--Poster_ZombieSection7340_300.png">
		
		<!--Info: Place the title and text for this section, it will appear when the user clicks on it-->		
		<div class="info">
		
			<!--Write the title of the section -->
			<div class="title"><h1>War with crosstalk</h1></div>
			<!--Write the text explaining this section -->
			<div class="text">
        &nbsp;&nbsp;&nbsp;&nbsp;Because of the same activation by Samurai signaling molecule for the both repressors, Samurai state seems to be not stable.
         By additional effect from the messy crosstalk, two nullclines have only one intersection, and the system looses bistability (shown center of figure 1 below).
          However, when we reduce the maximum expression by Rhl promoter to 1/10, phase space analysis shows both stabilities of Zombie and Samurai state (shown right of figure 1 below). 

        <br />
          <div class="subsection full">
            <figure>
                <img src="https://2020.igem.org/wiki/images/d/de/T--Waseda--Poster_Sample1_crosstalksum.png" alt="Fig.1 Phase space analysis of the severe crostalk between R proteins and Promotes">
                <figcaption class="fig_title_small">Fig.1 Phase space analysis of the severe crostalk between R proteins and Promotes</figcaption>
            </figure>
          </div>
        <br />
          &nbsp;&nbsp;&nbsp;&nbsp;Moreover, for this modeling, we drew a timecourse of mixed Zombie and Samurai.
           We found that even if we consider the crosstalk, the two powers can compete and be biased to either side depending on their ratios.
        <br />
            Therefore, Wet-Dry experiment cycle showed that our cell-free system works as designed in the scenario.

        <br />

         <div class="subsection full">
            <figure>
                <img src="https://2020.igem.org/wiki/images/7/7c/T--Waseda--Poster_crosstalktimecourse.png" alt="Fig.2 War in the cell-free system containing crosstalk between R proteins and Promotes">
                <figcaption class="fig_title_small">Fig.2 War in the cell-free system containing crosstalk between R proteins and Promotes</figcaption>
            </figure>
          </div>

         <br />


      </div>
		</div>
	</div>
		
</div>		



<!--This is the forth row of the poster, it contains the inspiration, problem and idea sections --->				
<div class="row">
	
	<!-- This creates a third  width section with the id 'inspiration' --->	
	<div class="section wide_thirds" id="zombieSec2">
		<!--Here is the image used for the third width section, the size is:  400 x 300 pixels  -->	
		<img src="https://2020.igem.org/wiki/images/0/0d/T--Waseda--Poster_ZombieSection2340_450.png">
				
		<!--Info: Place the title and text for this section, it will appear when the user clicks on it-->		
		<div class="info">
			
			<!--Write the title of the section -->
			<div class="title"><h1>established differential-equation</h1></div>
			<!--Write the text explaining this section -->
			<div class="text">  
        &nbsp;&nbsp;&nbsp;&nbsp;In order to model our systems, we established differential-equations. In this modeling, we assumed the behavior of <i>E. coli in vivo</i>, and used parameters adjusted somewhat to behave as designed.
          From the appearance of the nullcline (shown below), the equilibrium points are arranged in the same way as a normal toggle switch.
        <br />

          <div class="subsection full">
            <figure>
                <img src="https://2020.igem.org/wiki/images/c/c5/T--Waseda--Poster_EquationNullcline.png" alt=">Fig.1 The equation of our modeling and nullcline">
                <figcaption class="fig_title">Fig.1 The equation of our modeling and nullcline</figcaption>
            </figure>
          </div>
        <br />


        &nbsp;&nbsp;&nbsp;&nbsp;The graphs shown below illustrates the behavior of our gene circuit. When the zombie state cell is induced with a samurai signal, the cell fate will change depending on the size of the signal.
         Thus, we were able to create two final states simply by changing the initial concentration of communication molecules


        <br />

          <div class="subsection full">
            <figure>
                <img src="https://2020.igem.org/wiki/images/3/36/T--Waseda--Poster_Behavior.png" alt="Fig.2 The concept behavior of our gene circuit">
                <figcaption class="fig_title">Fig.2 The concept behavior of our gene circuit </figcaption>
            </figure>
          </div>
        <br />


      </div>
		</div>			
	
	</div>

	
	<!-- This creates a third  width section with the id 'problem' --->	
	<div class="section quarter" id="ZobieSec4">
		<!--Here is the image used for the third width section, the size is:  300 x 300 pixels  -->	
		<img src="https://2020.igem.org/wiki/images/e/ef/T--Waseda--Poster_ZombieSection4340_300.png">
		
		<!--Info: Place the title and text for this section, it will appear when the user clicks on it-->			
		<div class="info">

			<!--Write the title of the section -->
			<div class="title"><h1>degradation-tag</h1></div>
			<!--Write the text explaining this section -->
			<div class="text">
        &nbsp;&nbsp;&nbsp;&nbsp;To see the improvement in degradation effect by LVA degradation tagging, we constructed an improved part (BBa_K3580003) by a modification of an existing part: Plux/tet-GFP(BBa_K934025). 
          
          <br />

          <div class="subsection full">
            <figure>
                <img src="https://2020.igem.org/wiki/images/0/0c/T--Waseda--Poster-Plux-tet-GFP-improve-ppt_.png" alt="Fig.1 Improve Parts">
                <figcaption class="fig_title">Fig.1 Improve Parts</figcaption>
            </figure>
          </div>

  
        <br />
        
        &nbsp;&nbsp;&nbsp;&nbsp;In order to compare in vivo activity of these parts (BBa_K3580003 and BBa_K934025), we first measured the fluorescence of GFP 240 minutes after the start of induction.
         The fluorescence of tagged GFP (BBa_K3580003) was lower than that of normal GFP (BBa_K934025) at 240 min point. This result shows that tagged GFP was successfully degraded as we planned.
                  
          <br />

          <div class="subsection full">
            <figure>
                <img src="https://2020.igem.org/wiki/images/1/12/T--Waseda--Poster-Plux-tet-GFPssrA-vivo-comment_revised_.png" alt="Fig.2 compare in vivo activity of these parts">
                <figcaption class="fig_title">Fig.2 compare in vivo activity of these parts</figcaption>
            </figure>
          </div>

        <br />
          &nbsp;&nbsp;&nbsp;&nbsp;Then, we compared the fluorescence of GFP in a cell-free system which consisted of cruedextract of E.coli containing luxR protein. 
          Because of the programmed degradation, the fluorescence of tagged GFP(BBa_K3580003) showed slight signal nearly equal to a negative control where neither the template GFP DNA nor the inducer AHL existed.
           The results show that LVA degradation tagged protein can be degraded exceptionally both in vivo and in vitro.
          
          <br />

          <div class="subsection full">
            <figure>
                <img src="https://2020.igem.org/wiki/images/5/56/T--Waseda--Poster-Plux-tet-GFPssrA-vitro-comment_revised.png" alt="Fig.3 compare in a cell-free activity of these parts">
                <figcaption class="fig_title">Fig.3 compare in a cell-free activity of these parts</figcaption>
            </figure>
          </div>


      </div>
		</div>	
	</div>			
			
	<!-- This creates a third width section with the id 'idea' --->	
	<div class="section wide_thirds" id="ZombieSec6">
		<!--Here is the image used for the third width section, the size is:  400 x 300 pixels  -->	
		<img src="https://2020.igem.org/wiki/images/d/d2/T--Waseda--Poster_ZombieSection6340_450.png">
		
		<!--Info: Place the title and text for this section, it will appear when the user clicks on it-->		
		<div class="info">
		
			<!--Write the title of the section -->
			<div class="title"><h1>crosstalk</h1></div>
			<!--Write the text explaining this section -->
			<div class="text">
        &nbsp;&nbsp;&nbsp;&nbsp;When we construct and model the “zombie vs samurai” system, a potential problem was crosstalk, by which a promoter in a quorum sensing (QS) systems is activated unexpectedly by another type of QS components.
         Consequently, we some experiments to reveal which combination of QS systems have less crosstalk ability in a cell-free system.
                
        <br />
          &nbsp;&nbsp;&nbsp;&nbsp;For the crosstalk experiments, we constructed two kinds of cell-free translation systems containing a substantial amount of R protein (luxR,rhlR).
           In those systems, we put signaling molecule (3OHSL-C4 or 3OHSL-C6) and target genes (plux/tet-GFP or prhl-RR-GFP), respectively. We measured the fluorescence of GFP expressed from plux/tet-GFP and prhl(RR)-GFP on a RT-qPCR machine.
            By measuring the fluorescence of FITC atthe same time, we were able to quantitatively compare the fluorescence values of GFP in different runs.
                
        <br />
            &nbsp;&nbsp;&nbsp;&nbsp;Firstly, we conducted the experiment in a cell-free system with RhlR protein. As a result, in contrast to strong activation in the combination among 3OC4HSL , RhlR, and Prhl(RR) promoter, the other combinations showed little fluorescence. 
        
         <br />

          <div class="subsection full">
            <figure>
                <img src="https://2020.igem.org/wiki/images/7/77/T--Waseda--Poster-crosstalk_results_rhlR.png" alt="Fig.1 RhlR crosstalk results">
                <figcaption class="fig_title">Fig.1 RhlR crosstalk results</figcaption>
            </figure>
          </div>

        <br />
          &nbsp;&nbsp;&nbsp;&nbsp;Next, we conducted the experiment in a cell-free system with LuxR protein. As shown in two red bars, LuxR protein with 3OC6HSL activates not only Lux promoter but Rhl promoter. Althogh we tested another LuxR-responsible promoter, PRhlLR, it showd another cross talk from RhlR protein.
        <br />

                

          <div class="subsection full">
            <figure>
                <img src="https://2020.igem.org/wiki/images/b/bd/T--Waseda--Poster-crosstalk_results_luxR.png" alt="Fig.2 LuxR crosstalk results">
                <figcaption class="fig_title">Fig.2 LuxR crosstalk results</figcaption>
            </figure>
          </div>


      </div>
		</div>
	</div>

		
</div>		
							

<!--This is the fourth row of the poster, it contains the engineering section --->	
<!-- <div class="row"> -->
	<!-- This creates a full width section with the id 'engineering' --->
	<!-- <div class="section full" id="engineering"> -->
		<!-- <img src="https://2020.igem.org/wiki/images/0/02/T--Example--Poster_Engineering.png"> -->
		
		<!--Info: Place the title and text for this section, it will appear when the user clicks on it-->			
		<!-- <div class="info">	 -->
			<!--Write the title of the section -->
			<!-- <div class="title"><h1> Engineering</div> -->
			<!--Write the text explaining this section -->
			<!-- <div class="text"> Here you can explain the engineering process behind your project. </div> -->
		<!-- </div> -->
	<!-- </div> -->
<!-- </div> -->
			
<!--This is the fifth row of the poster, it contains the three nameless sections --->				
<div class="row">
	<!-- This creates a section quarter width section with the id 'section_1' --->	
	<div class="section quarter" id="section_1">
		<!--Here is the image used for the third width section, the size is:  400 x 300 pixels  -->	
		<img src="https://2020.igem.org/wiki/images/f/f5/T--Waseda--Poster_RacemaseLeft400_300.png">

    <!--Info: Place the title and text for this section, it will appear when the user clicks on it-->			
		<div class="info">
			<!--Write the title of the section -->
			<div class="title"><h1> Introduction</h1></div>
			<!--Write the text explaining this section -->
			<div class="text"> 
        &nbsp;&nbsp;&nbsp;&nbsp;In the Zombie vs. Samurai storyline, we envisioned a battle between two enantiomers, that is to say, one side has D amino acid and the other has L amino acid derived food as their food source, and both sides converts their opponent’s amino acid and deprives the of their food(Fig.1).
         Although there is not yet a translation and transcription system that efficiently incorporates D amino acids, it is known that the originally natural enzyme chemically synthesized with D amino acids would be active.
          <br />

          <div class="subsection full">
            <figure>
                <img src="https://2020.igem.org/wiki/images/0/06/T--Waseda--Poster_Racemase_introduction.png" alt="Fig.1Images of War In The Mirror in the Zombie vs Samurai story using racemase">
                <figcaption class="fig_title">Fig.1Images of War In The Mirror in the Zombie vs Samurai story using racemase</figcaption>
            </figure>
          </div>

        &nbsp;&nbsp;&nbsp;&nbsp;Such storyline can be applied to our real experimental system by adopting alanine racemase(AR) witch catalyze the conversion of L-alanine to D-alanine(Fig.1)[Walish 1989].
         Since D-alanine is used as a necessary component of the peptidoglycan layer of bacterial cell walls, lack of alanine racemase can result in the inhibition of growth of prokaryotes [Azam et.al 2016].
         Therefore, alanine racemase is recognized as an attractive target for antibacterial drug development [Azam et.al 2016].

          <br />

      </div>
    </div>
	</div>

	<!-- This creates a section quarter width section with the id 'section_2' --->		
	<div class="section quarter" id="section_2">
		<!--Here is the image used for the third width section, the size is:  400 x 300 pixels  -->	
		<img src="https://2020.igem.org/wiki/images/6/64/T--Waseda--Poster_RacemaseRight400_300.png">
		
    		<!--Info: Place the title and text for this section, it will appear when the user clicks on it-->		
		<div class="info">
			<!--Write the title of the section -->
			<div class="title"><h1>Experiment</h1></div>
			<!--Write the text explaining this section -->
			<div class="text"> 
        &nbsp;&nbsp;&nbsp;&nbsp;We purified alanine racemase and assayed the activity of AR using Cell-Free-Protein-Synthesis(CFPS)


          <br />

          <div class="subsection full">
            <figure>
                <img src="https://2020.igem.org/wiki/images/a/a0/T--Waseda--Poster_Racemase_pure_results.png" alt="Fig.1 Effect of L-alanine substrate repletion for translation by racemase">
                <figcaption class="fig_title">Fig.1 Effect of L-alanine substrate repletion for translation by racemase</figcaption>
            </figure>
          </div>
  
        &nbsp;&nbsp;&nbsp;&nbsp;The results demonstrated that GFP could not be synthesized by D-alanine alone, but L-alanine produced by racemase-mediated racemization of D-alanine and L-alanine could be used for translation, creating a situation in which fluorescence was restored by the synthesized GFP.	

        <br />

        Alanine racemase is recognized as an attractive target for antibacterial drug development [Azam et.al 2016]. Consequently, we believe that our experimental system would be useful in pharmaceutical development.

         <br />
         Our experiments were conducted following the protocol below.


          <div class="subsection full">
            <figure>
                <img src="https://2020.igem.org/wiki/images/6/64/T--Waseda--Poster_Racemase_Experiment_Detail.png" alt="Fig.2SDS-PAGEsofpurified<i>E.coli</i>BL21(DE3)starcontainingBBa_K3580200">
                <figcaption class="fig_title">Fig.2 SDS-PAGEsofpurified<i>E.coli</i>BL21(DE3)starcontainingBBa_K3580200</figcaption>
            </figure>
          </div>



      </div>
		</div>				
	
		
	</div>	
	
	<!-- This creates a third width section with the id 'section_3' -		 -->
	<div class="section quarter" id="section_3">
		<!--Here is the image used for the third width section, the size is:  400 x 300 pixels  -->	
		<img src="https://2020.igem.org/wiki/images/9/90/T--Waseda--Poster_MonoterpeneLeft400_300.png">
		
		<!--Info: Place the title and text for this section, it will appear when the user clicks on it-->
		<div class="info">
			<!--Write the title of the section -->
			<div class="title"><h1> Cell-free monoterpene synthesis</h1></div>
			<!--Write the text explaining this section -->
			<div class="text"> How can we observers distinguish between zombies and samurai?
          &nbsp;&nbsp;&nbsp;&nbsp;In our project we propose one unique identification method, though there is also a method using fluorescent protein.
            We propose a method of distinguishing the scents of zombies or samurai.
              For this project, we selected monoterpenes, especially limonene and sabinene, as the scented substances produced by zombies and samurai.         

          <br />

          <div class="subsection full">
            <figure>
                <img src="https://2020.igem.org/wiki/images/7/73/T--Waseda--HPQuestionnairea2.png" alt="Fig 6-2-5 the questionnaire after lecture">
                <figcaption class="fig_title">Fig 6-2-5 the questionnaire after lecture</figcaption>
            </figure>
          </div>

          <br />

          &nbsp;&nbsp;&nbsp;&nbsp;In this cell-free monoterpene synthesis, we mixed two E. coli extracts each of which has either first 8 or last 2 enzymes of a pathway from Ac-CoA, which is a major intermediate of cell central metabolism.
            Through mevalonate pathway, the former extract one (derived from E. coli into which pBbA5c-MevT-MBI has been introduced) can provide IPP and DMAPP, which can also be used as intermediates for other important biosynthesis. Here we indeed supplemented only glucose and acetate as carbon sources.
             In order to take advantage of an engineering principle of synthetic biology we provided two biobrick parts (BBa_K3580101 (New part), BBa_K3580102 (Improved part)) for the source for the latter extract.  BBa_K3580101 has GPP synthase (GPPS) and limonene synthase.
               Although GPP synthase is shared with BBa_K3580101, BBa_K3580102 has sabinene synthase, which has one point mutation in limonene synthase (Srividya Narayanan et al 2015) and a new coding sequence for Parts registry of iGEM (See here for more details on this experiments).  

       </div>


		</div>
	</div>	
  <!-- This creates a third width section with the id 'section_4' -		 -->
	<div class="section quarter" id="section_4">
		<!--Here is the image used for the third width section, the size is:  400 x 300 pixels  -->	

		<img src="https://2020.igem.org/wiki/images/3/34/T--Waseda--Poster_MonoterpeneRight400_300.png">
		
		<!--Info: Place the title and text for this section, it will appear when the user clicks on it-->
		<div class="info">
			<!--Write the title of the section -->
			<div class="title"><h1>Cell-free monoterpene synthesis</h1></div>
			<!--Write the text explaining this section -->
			<div class="text"> 

        &nbsp;&nbsp;&nbsp;&nbsp;We confirmed limonene synthesis GC/MS analysis with SIM.  In this SIM analysis, ions with four m/z values  characteristic in limonene (68 and 93) and sabinene (77 and 91, 93) were analyzed.
          By using authentic limonene standard, we confirmed a retention time for GC and the characteristic limonene SIM signal at the specific m/z values. At the same retention time with the standard, limonene-specific m/z value (68, 93) ions were detected in the selected ions.
            We also drew a GC chart by summation of the signals from the selected ions.  By comparison with a negative control experiment which we omitted the extract containing GPP synthase and limonene synthase, we found clear peak from our limonene synthesis
      
           <br />
          
          <div class="subsection full">
            <figure>
                <img src="https://2020.igem.org/wiki/images/7/73/T--Waseda--HPQuestionnairea2.png" alt="Fig 6-2-5 the questionnaire after lecture">
                <figcaption class="fig_title">Fig 6-2-5 the questionnaire after lecture</figcaption>
            </figure>
          </div>

          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;By similar GC/MS analysis with SIM, we confirmed the world's first report of sabinene synthesis using cell extracts. As well as limonene detection, we firstly confirmed sabinene retention time and SIM signal at the m/z values (77, 91, and 93).
           From our cell-free production, we then detected sabinene SIM signal and chromatogram peak which cannot find from the negative control.
             Also, from the system containing sabinene synthase and GPP synthase, a peak with the same retention time as the standard limonene product and ions with m/z values characteristic in limonene at that retention time were detected.
           
          <br />
          
          <div class="subsection full">
            <figure>
                <img src="https://2020.igem.org/wiki/images/7/73/T--Waseda--HPQuestionnairea2.png" alt="Fig 6-2-5 the questionnaire after lecture">
                <figcaption class="fig_title">Fig 6-2-5 the questionnaire after lecture</figcaption>
            </figure>
          </div>

          <br />

          &nbsp;&nbsp;&nbsp;&nbsp;Finally, each of monoterpenes were quantified based on peaks of substance having 93 m/z and each monoterpene standard curves.
            Taking advantage of the modularity of the combination of extracts, we confirmed whether the yield of monoterpenes could be changed by changing the mixing ratio of the extract containing the enzyme of the mevalonate pathway and the extract containing GPP synthase and monoterpene synthase.
              As a result, changes in the yield of monoterpenes due to the mixing ratio of the extracts were observed.  The best yield of limonene per reaction solution with limonene synthase contained system was 0.978 µM, and the best yield of sabinene per reaction solution with sabinene synthase contained system was 6.13 µM
           
          <br />
          
          <div class="subsection full">
            <figure>
                <img src="https://2020.igem.org/wiki/images/7/73/T--Waseda--HPQuestionnairea2.png" alt="Fig 6-2-5 the questionnaire after lecture">
                <figcaption class="fig_title">Fig 6-2-5 the questionnaire after lecture</figcaption>
            </figure>
          </div>

          <br />



      </div>
		</div>
	</div>
</div>				
							

			
			
<!--This is the sixth row of the poster, it contains the results and references sections --->						
<div class="row">	
	<!-- This creates a third width section with the id 'results' --->	
	<div class="section third" id="resultleft">
		<!--Here is the image used for the third width section, the size is:  300 x 300 pixels  -->	
		<img src="https://2020.igem.org/wiki/images/2/2d/T--Waseda--Poster_HPLeft300_400.png">
		
		<!--Info: Place the title and text for this section, it will appear when the user clicks on it-->			
		<div class="info">
			<!--Write the title of the section -->
			<div class="title"><h1>Human Practices</h1></div>
			<!--Write the text explaining this section -->
			<div class="text">
        &nbsp;&nbsp;&nbsp;&nbsp;In order to promote dialogue with general public, we, iGEM Waseda team, exhibited at “RIKOTEN”, the science festival at Waseda University.
         There we did lectures to a total of 272 people and conducted questionnaires before and after the lecture on the awareness of synthetic biology and cell-free system.


          <br />
          
          <div class="subsection half">
            <figure>
                <img src="https://2020.igem.org/wiki/images/7/73/T--Waseda--HPQuestionnairea2.png" alt="Fig 6-2-5 the questionnaire after lecture">
                <figcaption class="fig_title_small">Fig 6-2-5 the questionnaire after lecture</figcaption>
            </figure>
          </div>

          <br />

          
          <div class="subsection half">
            <figure>
                <img src="https://2020.igem.org/wiki/images/7/73/T--Waseda--HPQuestionnairea2.png" alt="Fig 6-2-5 the questionnaire after lecture">
                <figcaption class="fig_title_small">Fig 6-2-5 the questionnaire after lecture</figcaption>
            </figure>
          </div>

          <br />

         &nbsp;&nbsp;&nbsp;&nbsp;Before the lecture, only 23% of the responders knew synthetic biology, but after the lecture, 93% of them said they came to be interested in it.
          As for the cell-free system, 89% of the responders didn't know it before the lecture, but 27% of them understood completely, 64% of them almost understood that we succeeded in getting a total of 91% to understand it.
           After the lecture, those with vague concerns got to have clear opinions compared to before.

          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;Through these dialogues, we found that little is known about synthetic biology, but also found that cell-free system is good field for citizens to take the first step to understand synthetic biology.
           Then, we started the project in earnest because we thought that by doing cell-free based project, we could combine the safety and explanation to the world with the fun of synthetic biology for iGEMers.


          <br />&nbsp;&nbsp;&nbsp;&nbsp;<br />
          Integrated Human Practices & Implementation, Go to Business Page !

      </div>
		</div>
					
	</div>
	
	<!-- This creates a third width section with the id 'references' --->	
	<div class="section third" id="references">
		<!--Here is the image used for the third width section, the size is:  300 x 300 pixels  -->	
		<img src="https://2020.igem.org/wiki/images/7/7a/T--Waseda--Poster_HPCenter300_400.png">
		
		<!--Info: Place the title and text for this section, it will appear when the user clicks on it-->			
		<div class="info">
			<!--Write the title of the section -->
			<div class="title"><h1>Business</h1></div>
			<!--Write the text explaining this section -->
			<div class="text">

          <div class="subsection wide_half">
            &nbsp;&nbsp;&nbsp;&nbsp; Through the interview about monoterpene business, we pivotted a business model of cell-free substance detection kit. 

            This kit is cheaper than existing kits and it can detect <b>rapidly</b> and <b>robustly.</b> <br />

            This kit is that it allows us to easily <b>determine the balance of substances</b> in a sample. This is our original technology made possible by our iGEM project. <br />

            We also will provide a software to support th DNA designing process.
            Then, anyone create customized detection kit for yourself !
          </div>


          <div class="subsection small_half">
            <img src="https://2020.igem.org/wiki/images/f/fb/T--Waseda--Poster_BusinessPivotModel.png" alt="Fig pivot business model">
          </div>
        
        
        <br />&nbsp;&nbsp;&nbsp;&nbsp; <br />
          <div class="clear"></div>

              We interviewed experts who may become our future clients. Through the interview, we found three demands.

              <br />
              <span>&nbsp;&nbsp;1. Check the balance of the Bacteria used in sewage treatments.</span>

              <br />
              <span>&nbsp;&nbsp;2. Measure the Balance of malignant Substances in sewage treatment.</span>

              <br />
              <span>&nbsp;&nbsp;3. Simple kit for each household to ensure high quality tap water.</span>
          
          
          <div class="subsection quarter">
           
            <figure class="figure_small">
                <img src="https://2020.igem.org/wiki/images/8/8a/T--Waseda--Poster_BusinessInterview.png" alt="Fig intreview">
                
            </figure>

            
          </div>

          <div class="subsection three_quarters">


            After the interview, we asked an expert on environmental bacteria for advice in the future. He asserted that he did not see any apparent technical problems and also mentioned the conditions in which testing must be conducted upon.
          </div>


             <br />&nbsp;&nbsp;<br />&nbsp;&nbsp;
              Our project has a big potential, but through these interviews, we discovered some points that we should focus on. For example, the suggested need to check the operation of the kit in a mixture-rich environment led us to pay special attention as we progressed with crosstalk experiments.
              And now, we're already ready to launch this as a business.
         
            
          <label>
            <span><img src="https://2020.igem.org/wiki/images/5/50/T--Waseda--Poster_BusinessModel_Canvas.png" alt="Fig.1 Business model canvas"></span>
            <input type="checkbox" name="checkbox">
          <div id="popup"><img src="https://2020.igem.org/wiki/images/5/50/T--Waseda--Poster_BusinessModel_Canvas.png" alt="Fig.1 Business model canvas"></div>
          </label>

     



          <br />



      </div>
		</div>	
	</div>

  	<!-- This creates a third width section with the id 'references' --->	
	<div class="section third" id="references">
		<!--Here is the image used for the third width section, the size is:  300 x 300 pixels  -->	
		<img src="https://2020.igem.org/wiki/images/b/b7/T--Waseda--Poster_HPRight300_400.png">
		
		<!--Info: Place the title and text for this section, it will appear when the user clicks on it-->			
		<div class="info">
			<!--Write the title of the section -->
			<div class="title"><h1>References and Acknowledgements</h1></div>
			<!--Write the text explaining this section -->
			<div class="text">If not already cited in other sections of your poster, what literature sources did you reference on this poster? Who helped or advised you? </div>
		</div>	
	</div>

</div>	


<!--This is the last row of the poster, it contains the title section --->	
<div class="row">
	<!-- This creates a full width section with the id 'title' , 
	since it will be the default section loaded, we add the class 'first_text' --->
	<div class="section full" id="lasttitle">
		
		<!--Here is the image used for the full width section, the size is: 150 x 1200 pixels -->
		<img src="https://2020.igem.org/wiki/images/2/2e/T--Waseda--Poster_Achivement150_1200.png">
		
		<!--Info: Place the title and text for this section, it will appear when the user clicks on it
			since the first_text class is used above, this section will appear by default -->		
		<div class="info">
			<!--Write the title of the section -->
			<div class="title"><h1> Poster Title</h1></div>
			<!--Write the text explaining this section -->
			<div class="text">You should list all authors and their affiliations here. You can also add the project's abstract.</div>
		</div>
	</div>
</div>

	
</div>	

	
<!--This is where the selected content will be displayed - Don't change this section!-->	
<div class="poster_w display">	
	<h3 id="section_title"></h3>		
	<p id="section_text"></p>		
</div>


</div>	
</div>


<html>

	<!---
		Introduction to the template:

		This is the code for the interactice team poster.
		The poster is wrapped with two general divs ( .page_wrapper, .page_center ) 
		The parts of the poster are placed in ( .poster_w )
		then the poster is split in the content side( .poster_w.content ) where the images and text are placed
		and the display side (.poster_w.display) where the current selection is loaded

		Sections ( .poster_w.content .row .section ) are placed in rows ( .poster_w.content .row )

		The rest of the CSS styles general tags 

		Questions? Please email hq@igem.org
	--->
	
	
	
	<!--------------------------------------------------->
	
	
	
	<!--Allow mobile scaling -->	
	<meta name="viewport" content="width=device-width, initial-scale=1" />

	<style>

	/*clear default wiki settings */
	#home_logo, #sideMenu, #sideMenu, #top_title, .patrollink {display:none;}
	#content {margin-left:0px; margin-top:-7px; padding:0px; width:100%;}
	body {background-color:white;}
	#bodyContent h1, #bodyContent h2, #bodyContent h3, #bodyContent h4, #bodyContent h5 {margin-bottom: 0px;}
	#bodyContent a[href ^="https://"], .link-https {padding-right:0px;}


		/*general page wrapper */
		.page_wrapper {
    		background-color: white;
    		display: block;
    		width: 100%;
		}
		
		/*center general content of the page */
		.page_center {
			margin: auto;
    		max-width: 1400px;
    		width: 95%;x
		}
		
			
		/*general poster wrapper */
		.poster_w{
			float:left;
			margin: 1% 2%;
			padding: 0px;
			width: 46%;
		}
		
		/*rows*/
		.poster_w.content .row { clear: both; float:left; width:100%; cursor: pointer;}
		
		/*sections */
		.poster_w.content .row .section, 
		.poster_w.display #section_text .subsection{ float:left; }	
		
		
		/*different section sizes*/
		.poster_w.content .row .section.full,
		.poster_w.display #section_text .subsection.full{ width: 99%; }	
			
		.poster_w.content .row .section.three_quarters,
		.poster_w.display #section_text .subsection.three_quarters { width:75%;}
		
		.poster_w.content .row .section.two_thirds,
		.poster_w.display #section_text .subsection.two_thirds{ width:66%;}

		.poster_w.content .row .section.half,
		.poster_w.display #section_text .subsection.half{ width:49.5%;}

    .poster_w.content .row .section.wide_half,
		.poster_w.display #section_text .subsection.wide_half{ width:57.5%;}
    .poster_w.content .row .section.small_half,
		.poster_w.display #section_text .subsection.small_half{ width:41.5%;}

    .poster_w.content .row .section.wide_thirds,
		.poster_w.display #section_text .subsection.wide_thirds{ width:37.125%;}
		
		.poster_w.content .row .section.third,
		.poster_w.display #section_text .subsection.third{ width:33%;}
		
		.poster_w.content .row .section.quarter,
		.poster_w.display #section_text .subsection.quarter{ width:24.75%;}	
		
		
		/*hide title, text and highlight images  by default*/
		.poster_w.content .row .section .info{ display: none;}
		
		
		/*font family freeroad*/
		@font-face {
			font-family: Freeroad_Regular;
   			src: url(https://2020.igem.org/wiki/images/9/9d/Freeroad_Regular.ttf);
		}	
		
		
		/*font family freeroad bold */
		@font-face {
			font-family: Freeroad_Bold;
			src: url(https://2020.igem.org/wiki/images/9/94/Freeroad_Bold.ttf);
		}


		/* styling titles h1, h2, h3, h4, h5, h6 */
		.poster_w  h1 {  font-size: 32px;}
		.poster_w  h2 {  font-size: 28px;}
		.poster_w  h3 {  font-size: 22px;}
		.poster_w  h4 {  font-size: 18px;}
		.poster_w  h5 {  font-size: 14px;}
		.poster_w  h6 {  font-size: 16px;}
		
		
		/* styling for the titles h1, h2*/
		.poster_w h1, 
		.poster_w h2 {
			border-bottom:0px; 
			color: #131C4E;
			font-family: Freeroad_Bold, Arial;
			line-height: initial;
		}

		/* styling for the titles h3, h4, h5, h6 */
		.poster_w h3, 
		.poster_w h4, 
		.poster_w h5, 
		.poster_w h6 { 
			border-bottom:0px; 
			color: #0069A6;  
			font-family: Freeroad_Regular, Arial;
			line-height: initial;
		}
		
		/*font size for text and lists*/
		.poster_w p, 
		.poster_w ol, 
		.poster_w ul  {
			font-size: 16px;
		}

		/*styling for lists */
		.poster_w ul {
			font-family:Arial; 
			list-style: disc;
			padding:0px;
		}
			
		/*styling for all images */
		.poster_w img{ margin-bottom: 0px;width: 100%;}	
		
		/*styling for when the user hovers on the image on the content side*/
		.poster_w.content img:hover{opacity: 25%;}
		.poster_w.display img:hover{opacity: 100%;}
		
		/*class for clearing between sections */
		.poster_w .clear{
			clear:both;
		}	
			
		
		/*mobile*/
						
		@media only screen and (max-width: 850px){
			.poster_w {width:100%;}
		}
		
    .fig_title {
      text-align:center;
      font-size: 0.8em;
    }
    .fig_title_small {
      text-align:center;
      font-size: 0.7em;
    }
    .figure_small {
      margin-block-start: 0.3em;
      margin-block-end: 0.3em;
      margin-inline-start: 1em;
      margin-inline-end: 1em;
    }

#popup{
  width:70%;

  box-sizing:border-box;
  display:none;
  position:fixed;
  top:50%;
  left:50%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}
img{
  width:100%;
}
label{
  display:block;
}
label span{
  display:block;
  color:#fff;
  width:100%;
  
  text-align:center;
}
label span:hover{
  cursor:pointer;
}
input[type="checkbox"]{
  display:none;
}

input[type="checkbox"]:hover + #popup{
  display:block;
  transition:.2s;
}

.ref_text {
  font-size: 0.7em  !important;
}

</style>



	
<script>

	$(document).ready(function(){ 
	
		//clear default settings 
		$("#HQ_page").attr('id','');
		
		
		//setup
		// grab .first_text class and append it 			
		var d_title = $('.first_text >  .info > .title' ).html();
		var d_text =  $('.first_text  > .info > .text'  ).html();
			
		
		//append .first_text
		$( "#section_title").append(d_title);
		$( "#section_text").append(d_text);
		
			
		//variables
		var clicked_id;	
		var p_title;
		var p_text;
		
		
		//when the user clicks on a .section
		$('.section').click(function() { 
			
			//get id of clicked element
    		clicked_id = $(this).attr('id');
			
			//empty display divs
			$( "#section_title" ).empty();
			$( "#section_text" ).empty();
			
			//get the content selected 
			p_title = $('#'+clicked_id+'> .info > .title' ).html();
			p_text =  $('#'+clicked_id+'> .info > .text'  ).html();
			
			//append selection
			$( "#section_title").append(p_title);
			$( "#section_text").append(p_text);
			
		});
	});


	
</script>

</html>




