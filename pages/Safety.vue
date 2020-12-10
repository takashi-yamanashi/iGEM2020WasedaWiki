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
                            <h1 class='h1_text' pushElementOffsetTop>Safty</h1>
                          </v-col>
                        </v-row>
                    </v-row>
                    

                    <v-row v-scroll="pushScrollY" > 
                      <v-row class="row_max-box">
                        <h2 class="h2_text">iGEM Waseda Safety Form</h2>
                      </v-row>
                    </v-row>

                    <v-row cols="12" sm="12" xs="12" md="12" lg="7" xl="7" class="row_max-box">

                        <v-col cols="12" class="row_max-box">
                            <h3>Official Safety Form Page</h3>
                            <p class="p_indent"> 
                                You can see the safety form for all teams.
                                If you want to see a safety form other than the Waseda team, please go to <a class="link_style"  href="https://2020.igem.org/Safety/Final_Safety_Form">Official Page</a>.
                            </p>
                            <p class="p_indent">At iGEM 2020, the safety form was submitted through the online form. </p>

                        </v-col>

                        <v-col cols="12" class="row_max-box">
                            <h3>Part 1: Overview</h3>
                            <p > 
                              Q1. Please upload a photo or two of your lab to the iGEM 2020 server (include your team name in the file name), preferably showing the relevant safety features and paste the link here: (Instructions on how to upload an image to our servers can be found <a href="https://2020.igem.org/Resources/Wiki_Editing_Help">here</a>) 
                            </p><br>
                            <p>
                                A. https://2020.igem.org/File:T--Waseda--Lab_photo1.jpeg & https://2020.igem.org/File:T--Waseda--Lab_photo2.jpeg
                            </p><br>


                            <p>Q2. Describe the goal of your project: what is your engineered organism supposed to do? Please include specific technical details and names of important parts.
                                (Even though your project might change, please describe the main project idea you are working on right now. See the example answers for help.)
                            </p><br>
                            <p>
                                A. Our project consists three projects: construction of gene circuit, generation of monoterpene, and generation of D-amino acid with racemase in a cell-free system.<br>
                                Our bacteria will be engineered to construct plasmids for our project.<br>
                                We will use engineered organisms to construct plasmids for the cell-free system and to make the cell extract.<br>
                                The gene circuit project will use essential promoters and proteins for quorum sensing associated with the Lux, Las, Rhl, Lac, CI, and AraC systems.<br>
                                The monoterpene project will make limonene, pinene, and sabinene from glucose.<br>
                                We will use mevalonate pathway and GPPS to synthesize them.<br>
                                The racemase project will make alanine racemase to convert L-alanine amino acid to D-alanine amino acid.<br>
                            

                            </p><br>

                            <h3>Part 2: Identifying possible risks</h3>

                            <p>
                                iGEM has developed a Risk Assessment Tool to help you identify possible risks to you, your colleagues, communities, or the environment. We encourage you to use this tool before filling in this part of the form. What are you using / planning to use? Some organisms and parts present risks beyond what is ordinary for lab work in synthetic biology. As your project progresses, you should consider the risks presented by each organism and part you plan to use.    
                            </p><br>

                            <p>
                                Q3. Which whole organisms, including viruses and cell lines, are you planning to use or using in your project?
                                Please provide as much detail as possible (such as strain information). If you are not using an organism, please note this.
                            </p><br>

                            <p>
                                A. BL21(DE3)Star is used for the cell-free system. DH5alpha and AG1(ME5305) are used for plasmid transformation and Miniprep.
                            </p><br>

                            <p>
                                Q4. What risks could these organisms pose to you or your colleagues in the laboratory, or to your community or the environment if they escape the lab?
                                If you are not using an organism, please note this.


                            </p><br>

                            <p>
                                A. The strains used in this study are said to be unable to live in environments outside the laboratory.
                                Therefore, there is no risk to our community.                                
                            </p><br>

                            <p>
                                Q5. What organisms are you using as chasses in your project?
                                For the purposes of iGEM, a chassis is the organism in which you are putting your parts, or which you are modifying in your project. Many teams will use a common lab organism as a chassis. Some teams may use a more exotic organism. Some project may not involve a chassis.
                            </p><br>
                            <p>
                                 Escherichia coli (give names of all strains you are using)<br>
                                 BL21(DE3)Star, DH5alpha, AG1(ME5305)
                            </p><br>
                            <p>
                                Q6. What risks could your chassis pose to you or your colleagues in the laboratory, or to your community or the environment if they escape the lab?
                                If not using a chassis organism, please note this.


                            </p><br>
                            <p>
                                A. The gene circuit, alanine racemase, and alpha-pinene are non-toxic substances.
                                Therefore, there is no risk to our community.
                            </p><br>
                            <p>
                                Q7. Which chemicals are you using in your project that might be hazardous?
                            </p><br>
                            <p>
                                Mutagens<br>
                                 Other controlled chemicals<br>
                                 - EtBr, EtOH, Isopropyl Myristate, hexane, dodecane, ethyl acetate.
                            </p><br>
                            <p>
                                <b>Parts</b>
                            </p><br>
                            <p>
                                This part of the form is for you to tell us about the parts you are planning to make or have developed during your project. It summarises information that might already have been submitted through
                                <a href="https://2020.igem.org/Safety/Check_In">Check-in forms</a>. if you submitted a
                                <a href="https://2020.igem.org/Safety/Check_In">Check-in form</a> for a part, you should still include it in this section. You may omit parts that were already in the Registry if you are using them without significant modifications. <br>
                                
                                For more information on virulence factors see the <a href="https://2020.igem.org/Safety/Policies">Safety Policy</a>
                                page and the <a href="https://2020.igem.org/Safety/White_List">White List</a>.
                            </p><br>
                            <p>
                                Q8. As part of your project, are you are planning to make / have made new parts or substantively changed existing parts in the Registry.
                            </p><br>
                            <p>
                               A.  Yes (All relevant new or revised parts should be described on a spreadsheet) 
                            </p><br>
                            <p>
                                Q9. Part information is submitted in a spreadsheet.<br>
                                Instructions for parts spreadsheet: Remember to change the filename of your spreadsheet! Put your team's name in place of "TeamName". Please visit this page to download a blank copy of the spreadsheet for this question.<br>

                                DOWNLOAD SPREADSHEET <a href="https://2020.igem.org/wiki/images/1/14/TeamName_Safety2020_Spreadsheet.xlsx">here</a>

                            </p><br>
                            <p>
                                A. Species name of parent organism (including strain): For an organism, give the scientific name of the species. Include a strain name or number (such as "K-12" for E. coli K-12) if there is one. For a part, give the name and strain of the organism that the part originally came from. If the part has no natural comparator, note this.<br>  <br> 

                                B. Risk Group: Give the Risk Group of the organism in column A. You may use a categorization according to your home country, according to the USA, or according to the WHO. If the organism falls into an 'in-between' or special category such as 2+ or 2-Agricultural, explain this category in the Notes column. If you cannot find any Risk Group categorization for this organism, write "N/A" and explain in the Notes column. (Multicellular organisms generally do not have a Risk Group.)
                                Help about <a href="https://2020.igem.org/Safety/Risk_Groups"> Risk Groups and Safety Levels</a><br> <br> 

                                D. Disease risk to humans: Does this organism cause any disease in humans? If yes, what disease does it cause?<br> <br> 

                                E. Disease or other risks to the environment: Does the organism cause plant or animal diseases or would in any other way pose a risk to the environment if accidentally released?<br> <br> 

                                F. Part number/name: For a part: If it has a Registry part number (like BBa_XXXXX), write that number. If it has no Registry part number, give a short name for the part. (For example: "Actin", "Alcohol Dehydrogenase".) For a whole organism, leave this column blank.<br> <br> 

                                G. Natural function of part: For a part: Briefly describe what the part does in its parent organism. (If it is an enzyme, what reaction does it catalyze? If it is a receptor, what molecules does it bind to? Etc.) For a whole organism, leave this column blank.<br> <br> 

                                H. How did you acquire it: Describe how you acquired the organism/part. If you have not acquired it yet, describe how you plan to acquire it. (For example: did you receive the part DNA from another lab? Did you order the part DNA from a synthesis company? Did you use PCR to isolate the part from genomic DNA of its parent organism? Did you order the cell line from a company?)<br> <br> 

                                I. How will you use it: Describe how you are using the organism/part in the lab. (For example: "This organism is our chassis." "This part senses when the cells are exposed to glucose." "This organism is the source for a part that we are isolating by PCR." "This part produces the toxin which our bio-sensor is designed to detect.")<br> <br> 

                                J. Notes: Use this column to give any additional information that is necessary.<br> <br> 

                            </p><br>
                            <p>
                                A. Waseda Team's spreadsheet, Download 
                                <a href="https://2020.igem.org/wiki/images/3/3e/T--Waseda--Safety2020_Spreadsheet.xls">here</a>
                            </p><br>
                            <p>
                                Q10. What experiments will you do with your organisms and parts?<br>
                                Please explain briefly. We are particularly keen to understand the boundaries or scope of your project. You should include the names of species / cell lines / strains. You should include experiments involving parts taken from other organisms, even if they are being synthesized rather than isolated from nature – you need not include any parts already in the registry.
                            </p><br>
                            <p>
                                A. BL21(DE3) Star will be used to create extract. Transcription-translation of enzyme related to gene circuits, alanine racemase, and alpha pinene is performed using an extract-based cell-free system.
                            </p><br>
                            <p>
                                Q11. What risks could arise from these experiments?<br>
                                For example, could they produce aerosols making it more likely that you could inhale something? Or are you using needles and could accidentally stick yourself? Could you produce something that is not inactivated using standard lab protocols? If you are not conducting any experiments, please note this.
                            </p><br>
                            <p>
                                A. There is no risk to our community.
                            </p><br>
                            <p>
                                Q12. Are you collecting any data about people, such as their opinions, quotations, health information, gender, behavior, attitudes, or concerns?<br>
                                This includes surveys and interviews carried out as part of human practices work, whether anonymous or not.
                            </p><br>
                            <p>
                                A. Yes<br>
                                (Please read iGEM's policy on 
                                <a href="https://2020.igem.org/Safety/Policies#subjects">Human Subjects Research</a>
                                very carefully. For good reasons, many countries require formal approval for Human Subjects Research, as well as consent procedures for participants. You may need formal permission from a Research Ethics Committee, Institutional Research Board, or equivalent. Remember compliance with relevant laws and regulations is a requirement for participation in iGEM.)
                            </p><br>
                            <p>
                                Q13. Imagine that your project was fully developed into a real product that real people could use. How would people use it?<br>
                                Check all appropriate boxes and expand in the comments section. (Note: iGEM teams should not release modified organisms into the natural environment but you could imagine such a release if your project was fully developed.)
                            </p><br>
                            <p>
                                A.  * In agriculture / on a farm (Examples: cells that guard against pests, engineered rice plants, cells that promote growth of crop plants)<br>
                                 * In a small enclosed device (Examples: a bio-sensing strip with cells that detect arsenic)<br>
                                 * In the natural environment (Examples: cells that remove pollution from lakes, engineered forest trees that can resist drought)<br>
                                 * Other (Examples: bacteria that live on Mars, or a software project)<br>
                                 - Our products are cell-free system. Thus, the above products are not GMO.  

                            </p><br>
                            <p>
                                Q14. What safety, security or ethical risks would be involved with such a use?<br>
                                Virtually all modern life science and biotechnology carries with it some risks. These can be identified and managed helping to ensure your work makes a positive impact on the world.
                                 Basic risks are managed for you in many institutions. As you think about how your project might enter the real world, being a responsible biological engineer will require you to think about and manage these risks yourselves. You can find some great resources on the 
                                 <a href="https://2020.igem.org/Safety">Safety and Security</a> and 
                                 <a href="https://2020.igem.org/Human_Practices">Human Practices</a> hubs on our wiki. It is even possible that software projects could also pose relevant risks.

                            </p><br>
                            <p>
                                A. The cell-free system is a powerful platform and dangerous gene synthesis should be avoided.
                            </p><br>


                            <h3>Part 3: Managing the risks you have identified</h3>
                            <p>
                                It is impossible to remove all risk from any biological activity. Instead, we attempt to manage these risks - to reduce them to an acceptable level. In this section, you should outline what steps have been taken (or you are planning to take) to reduce any risks you identified in Part 2 of the form, in particular Question 11.
                            </p><br>
                            <p>
                                Q15. How will experts overseeing your project help to manage any of the risks you identified in this form?<br>
                                For example, who is responsible for the safety and security of biology labs at your institution? What role has any institutional biosafety officer played in reviewing your work? What skills do these experts have that might help? For example, do they have a long history of working with an organism or part that might pose a risk? How familiar are they with the experimental procedures and practices you will be, or are, using?
                            </p><br>
                            <p>
                                A. Professor Daisuke kiga is responsible in the lab. He is a professor of Waseda University.
                                He supported us design our project to be safe.
                            </p><br>
                            <p>
                                Q16. What rules or guidance cover your work which could help to manage any of the risks you identified in Part 2 of this form (in particular Question 11)?<br>
                                For example: In your country / region, what are the laws and regulations that govern biosafety or biosecurity in research laboratories? Please give a link to these regulations, or briefly describe them if you cannot give a link.What are the guidelines for laboratory biosafety and biosecurity? Please give a link to these guidelines, or briefly describe them if you cannot give a link.
                            </p><br>
                            <p>
                                A. There is the Cartagena law in Japan.<br>
                                    In addition, there is an ethics committee at Waseda University, examination based on the law.<br>
                                    Our project safety was designed according to the rules of Waseda University and approved by Waseda University.
                            </p><br>
                            <p>
                                Q17. Have your team members received any safety training?<br>
                                For the purposes of iGEM, biosafety and biosecurity training covers the procedures and practices used to manage risks from accidents or deliberate misuse of your projects to your team, colleagues, communities and the environment. All team members are expected to be aware of these risks and to work to manage them.
                            </p><br>
                            <p>
                                A. <br>* Yes, we have already received safety training.
                                <br>*   Yes, we have already received security training.
                                
                            </p><br>
                            <p>
                                Q18. Please select the topics that you learned about (or will learn about) in your safety training.

                            </p><br>
                            <p>
                                A.  <br>* Lab access and rules (including appropriate clothing, eating and drinking, etc.
                                    <br>* Responsible individuals (such as lab or departmental specialist or institutional biosafety officer)
                                    <br>* Differences between biosafety levels
                                    <br>* Biosafety equipment (such as biosafety cabinets)
                                    <br>* Good microbial technique (such as lab practices)
                                    <br>* Disinfection and sterilization
                                    <br>* Emergency procedures
                                    <br>* Transport rules
                                    <br>* Physical biosecurity
                                    <br>* Personnel biosecurity
                                    <br>* Dual-use and experiments of concern
                                    <br>* Data biosecurity
                                    <br>* Chemicals, fire and electrical safety

                            </p><br>
                            <p>
                                Q19. Which work areas do you use / are you using to handle biological materials?<br>
                                Please check all the containment provisions you are using. If you are using more than one space please check all that apply and note this in the other work area box.
                            </p><br>
                            <p>
                                A. 
                                <br>* Open bench
                                <br>* Biosafety cabinet (please note there are important differences between biosafety cabinets and laminar flow hoods / clean benches. iGEM encourages the use of biosafety cabinets but discourages the use of laminar flow hoods or clean benches. This 
                                <a href="https://ehs.umich.edu/wp-content/uploads/2018/09/EHS-Ventilation-Whats-the-Difference.pdf" target="_blank">Factsheet</a> from the University of Michigan helps explain the differences.)

                            </p><br>
                            <p>
                                Q20. What is the biosafety Level of your work space?<br>
                                Help about<a href="https://2020.igem.org/Safety/Risk_Groups"> Risk Groups and Safety Levels</a><br>
                                If you are working in a biosafety cabinet it may be a biosafety level 2 space (then select Level 2), but biosafety cabinets are sometimes also used in a biosafety level 1 laboratory to provide a sterile work space (then select Level 1). If in any doubt, please discuss this with a biosafety professional or your instructors, supervisors or lab techs to make sure you understand how the equipment you use helps to manage risks.
                            </p><br>
                            <p>
                                A. Level 1 (low risk)
                            </p><br>
                            <p>
                                Q21. What other risk management tools will cover you work?<br>
                                Please select as many as are relevant, including those that happen automatically at your institution and are not specifically connected to your project. If in any doubt, please discuss this with a biosafety professional or your instructors, supervisors or lab techs to make sure you understand how the equipment you use helps to manage risks.
                            </p><br>
                            <p>
                                A. 
                                 <br>* Accident reporting (measures to record any accidents)
                                 <br>* Personal Protective Equipment (including lab coats, gloves, eye protection, etc)
                                 <br>* An inventory control system (measures to track who has what materials and where they are)
                                 <br>* Access controls (measures to control who can access your work spaces, or where materials are kept)
                                 <br>* Medical surveillance (measures to find out if you get sick because of something you were using)
                                 <br>* Waste management system (measures to make sure waste is not hazardous before it leaves your institution)
                                 <br>* Special procedures or protocols that address safety or security

                            </p><br>
                            <p>
                                Q22. How will the rules, training, containment and other procedures and practices help to manage any of the risks you identified in Part 2 of this form (in particular Question 10)?<br>
                                Please give details of any steps you have taken to manage any risks identified. This might include how any of the following have helped manage risks: the rules you identified, the training you have had, the equipment you have used, the spaces you have worked in, and the procedures and protocols you have followed. It might also include things you deliberately didn't do. For example, if you are not conducting any experiments, especially on grounds of safety, security or as a responsible scientist / engineer, please note this. Examples might include, making sure you only use non-pathogenic strains of an organism, deciding that animal use experiments are not yet warranted, or avoiding plant infection experiments because the affected plant is found in your country. Please also consider waste treatment – how will you know that any waste produced in your project will be successfully inactivated?

                                
                            </p><br>
                            <p>
                                A. We will replace risk involving operations to alternative non-risk involved operations when possible. If the alternative operation is not available, well-trained scientist/engineer will conduct the operation following the safety manual.
                            </p><br>

                            <h3>Part 4: Compliance with iGEM’s rules and policies</h3>
                            <p>
                                Q23. Are you planning to/ have released any organism or product derived from your project?<br>
                                For the purposes of iGEM, release includes putting any engineered organism or product from one into the environment, yourselves or volunteers (including by eating or drinking), or into a device that will be placed in the environment.
                            </p><br>

                            <p>
                                A. No
                            </p><br>

                            <p>
                                Q24 Are you planning to use, or using any animals (including insects and invertebrates) not on the 
                                <a href="https://2020.igem.org/Safety/White_List">Whitelist?</a>
                            </p><br>

                            <p>
                                A. No
                            </p><br>

                            <p>
                                Q25. Are you planning to use / have used any vertebrates (e.g. rats, mice, guinea pigs, hamsters) or higher order invertebrates (e.g. cuttlefish, octopus, squid, lobster)?
                            </p><br>

                            <p>
                                A. No
                            </p><br>

                            <p>
                                Q26. Are you planning to use, or using any parts not on the
                                <a href="https://2020.igem.org/Safety/White_List">Whitelist?</a>
                            </p><br>

                            <p>
                                A. No
                            </p><br>

                            <p>
                                Q27. Are you planning to carry out any of the activities not on the Whitelist?<br>
                                These include experiments likely to bias the inheritance frequency of a genetic marker in an organism’s progeny, such as through the creation of a gene drive, experiments likely to confer resistance to the World Health Organization's list of Critically Important Antimicrobials, and experiments likely to increase the hazard posed by your project.
                            </p><br>

                            <p>
                                A. No
                            </p><br>


                            <p>
                                Q28. Are you planning to use, or using any parts or organisms obtained from outside the lab or regular suppliers?
                            </p><br>


                            <p>
                                A. No
                            </p><br>


                            <p>
                                Q29. What else can you tell us about any risks associated with your project, how you are managing them, or your compliance with iGEM’s safety and security 
                                
                                <a href="https://2020.igem.org/Safety/Rules">rules</a>
                                and 
                                <a href="https://2020.igem.org/Safety/Policies">policies?</a><br>
                                This can include any improvements you would like to see to our safety and security efforts, or anything that has not been sufficiently clear, or where additional guidance would be useful, or where you see important uncertainties.

                            </p><br>


                            <p>
                                A. None
                            </p><br>
                        </v-col>


                    </v-row>

         



                    <v-template  v-scroll="pushScrollY" id="section_01"><v-col class="last_message"></v-col></v-template>
                    <v-template  v-scroll="pushScrollY" id="section_02"><v-col class="last_message"></v-col></v-template>
                    <v-template  v-scroll="pushScrollY" id="section_03"><v-col class="last_message"></v-col></v-template>
                    <!-- <v-template  v-scroll="pushScrollY" id="section_04"><v-col class="last_message"></v-col></v-template> -->

 
                </v-col>
            </v-row>
        </v-container>

    </v-container>
    
  <!-- </v-layout> -->
</template>
<script>

const pageTitle = 'Safety Form';
const pageDes = "iGEM2020 Team Waseda's" + pageTitle + "page";
const pageUrl = 'https://2020.igem.org/Team:Waseda/Safety';


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
        'section_01','section_01','section_03',
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
<<<<<<< HEAD
=======

>>>>>>> main
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

</style>

