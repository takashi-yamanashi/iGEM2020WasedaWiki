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
                        <a href="Team#PI"><v-row :class="{ 'title_text': true, 'title_text_active': check[0] }">PI</v-row></a>
                        <a href="Team#Member"><v-row :class="{ 'title_text': true, 'title_text_active': check[1] }">Member</v-row></a>
                        <!-- <a href="Attributions#VideoTop"><v-row :class="{ 'title_text': true, 'title_text_active': check[2] }">Video</v-row></a>
                        <a href="Attributions#WikiTop"><v-row :class="{ 'title_text': true, 'title_text_active': check[3] }">Wiki</v-row></a>
                        <a href="Attributions#HPTop"><v-row :class="{ 'title_text': true, 'title_text_active': check[4] }">HP</v-row></a>
                        <a href="Attributions#OtherTop"><v-row :class="{ 'title_text': true, 'title_text_active': check[5] }">Other</v-row></a>
                         -->

                    </v-row>
                    </v-col>
                </v-col>

                <v-col class="main_text" cols="12" lg="10" xl="10">
                    <v-row justify="center" text-align="center" id="PI">
                        <v-row cols="12" class="image_top" id="WetLabTop"></v-row>
                    </v-row>

                    <v-row v-scroll="pushScrollY" > 
                      <v-col>
                      <v-row >
                        <h2>PI</h2>
                      </v-row>
                      <v-row id="Member">
                        <P>
                          <b>Daisuke Kiga </b><br />
                          - Professor of Waseda University
                        </p>
                      </v-row>
                      </v-col>
                    </v-row>

                    <v-row>
                        <v-col cols="12">
                            <v-row >
                                <h2>Member</h2>
                            </v-row>
                        </v-col>
                        

                        <v-col
                        v-for="(n, i) in items"
                        :key="i"
                        col="4"
                        >


                        <v-dialog
                        v-model="dialog"
                        width="500px"
                        >
                        <template v-slot:activator="{ on, attrs }">
                            
                            <v-btn
                            text
                            v-bind="attrs"
                            v-on="on"
                            width="300px"
                            height="300px"
                            >
                            
                            <v-img class='image_max' aspect-ratio="1" :src="n.img"></v-img>
                            <!-- <v-img
                            :src="`https://picsum.photos/500/300?image=${n * 5 + 10}`"
                            :lazy-src="`https://picsum.photos/10/6?image=${n * 5 + 10}`"
                            aspect-ratio="1"
                            class="grey lighten-2"
                        > -->
                            <template v-slot:placeholder>
                            <v-row
                                class="fill-height ma-0"
                                align="center"
                                justify="center"
                            >
                                
                            </v-row>
                            </template>
                        <!-- </v-img> -->

                            </v-btn>
                        </template>
                        <v-card>
                                <v-img
                                class="white--text align-end"
                                height="500px"
                                :src="n.img"
                                >
                                <v-card-title>{{ n.title }}</v-card-title>
                                </v-img>

                                <v-card-subtitle class="pb-0">
                                    <p><b> Age </b>{{ n .age }}</P>
                                </v-card-subtitle>


                                <v-card-text class="text--primary">
                                <div><p><b>Major</b><br/>{{n.Major}}</p></div>
                                </v-card-text>

                                <v-card-text class="text--primary">
                                <div><p><b>Motivation</b><br/>{{n.des}}</p></div>
                                </v-card-text>


                        </v-card>
                        </v-dialog>


                        </v-col>
                    </v-row>

                    <v-row v-scroll="pushScrollY" id="NaviLast"> 
                      <v-col>
                        <v-row class="last_message">
                            <P>
                              <!-- 'LAST Massege Here' -->
                            </P>
                        </v-row>
                      </v-col>
                    </v-row>
 
                </v-col>
            </v-row>
        </v-container>

    </v-container>
    
  <!-- </v-layout> -->
</template>
<script>
export default {
  data: () => {
    return {
      fab: false,
      scrollY: 0,
      scrollPer: 510.293,
      sectionOffsetTop: [],
      dialog: false,
      check: [false, false, false],

      items:[
        {
          title: 'Ryota Miyachi',
          age: '22',
          Major: 'Electrical Engineering and Bioscience',
          des: 'iGEM is a great opportuniity to experience the importance and challenges of teamwork in an international setting and to deepen my understanding of biology and contributions of science to society.',
          img: 'https://2020.igem.org/wiki/images/c/c4/T--Waseda--Miyachi.png',
        },
        {
          title: 'Takashi Yamanashi',
          age: '22',
          Major: 'Electrical Engineering and Bioscience',
          des: 'iGEM ​​looked interesting!',
          img: 'https://2020.igem.org/wiki/images/8/82/T--Waseda--Yamanashi.png',
        },
        {
          title: 'Takuro Shioi',
          age: '22',
          Major: 'Electrical Engineering and Bioscience',
          des: 'I would like to team up with highly motivated members, to learn the latest biotechnology, and to communicate with aspiring foreigners.',
          img: 'https://2020.igem.org/wiki/images/e/e3/T--Waseda--Shioi.png',
        },
        {
          title: 'Kanta Suga',
          age: '21',
          Major: 'Electrical Engineering and Bioscience',
          des: "I'm glad to join this year's iGEM ! I want to develop not only my wet lab skill but also modeling skill through this great competition.",
          img: 'https://2020.igem.org/wiki/images/3/3c/T--Waseda--Suga.png',
        },
        {
          title: 'Satohiro Takizawa',
          age: '21',
          Major: 'Medical Bioscience',
          des: 'I wanted to experience such a international competition. I’m also interested in synthetic biology,',
          img: 'https://2020.igem.org/wiki/images/c/c1/T--Waseda--Takizawa.png',
        },
        {
          title: ' Kae Nakamura',
          age: '20',
          Major: 'Electrical Engineering and Bioscience',
          des: 'I joined iGEM because I wanted to develop my knowledge around synthetic biology and meet people whose interest matches mine.',
          img: 'https://2020.igem.org/wiki/images/9/9c/T--Waseda--Nakamura.png',
        },
        {
          title: 'Takaomi Yamada',
          age: '20',
          Major: 'Medical Bioscience',
          des: ' I think to participate in iGEM is a great opportunity for me to improve my experimental technique and increase my knowledge of biosynthesis, so I joined in.',
          img: 'https://2020.igem.org/wiki/images/7/7a/T--Waseda--Yamada.png',
        },
        {
          title: 'Rei Abe',
          age: '20',
          Major: 'Medical Bioscience',
          des: 'To improve my technical skills and to acquire experiences at biological fields',
          img: 'https://2020.igem.org/wiki/images/4/47/T--Waseda--Abe.png',
        },
        {
          title: 'Yuya Ostuki',
          age: '20',
          Major: 'Electrical Engineering and Bioscience',
          des: " iGEM is a good opportunity for me to study synthetic biology. Also it's an opportunity to think about biology education as I want to be a high school teacher.",
          img: 'https://2020.igem.org/wiki/images/9/9b/T--Waseda--Otsuki.png',
        },
        {
          title: 'Saho Fujieda',
          age: '20',
          Major: 'Medical Bioscience',
          des: "I am interested in synthetic biology and wanted to experience conducting experiments from scratch. I thought I could make friends who were interested in the same field on a global level.",
          img: 'https://2020.igem.org/wiki/images/6/6f/T--Waseda--Fujieda.png',
        },
        {
          title: 'Yuri Hayashi',
          age: '19',
          Major: 'Electrical Engineering and Bioscience',
          des: 'iGEM gives me practical science knowledge and skills. I want to work for biology in the future.',
          img: 'https://2020.igem.org/wiki/images/1/10/T--Waseda--Hayashi.png',
        },
        {
          title: 'Kawabata Takuma',
          age: '19',
          Major: 'Electrical Engineering and Bioscience',
          des: 'To improve my experimental skills and learn many things about Bioscience. To experience and come up on a global stage.',
          img: 'https://2020.igem.org/wiki/images/8/8e/T--Waseda--Kawabata.png',
        },
        {
          title: 'Aimi Watanabe',
          age: '18',
          Major: 'Electrical Engineering and Bioscience',
          des: "I would like to learn bio-science and how iGEM's research is because I'm interested in biology.",
          img: 'https://2020.igem.org/wiki/images/f/f8/T--Waseda--Watanabe.png',
        },
        {
          title: 'Yuji Kamei',
          age: '18',
          Major: 'Electrical Engineering and Bioscience',
          des: 'Motivation for iGEM is a chance for me to create an own project,to gain experience in the lab and to make new friends.',
          img: 'https://2020.igem.org/wiki/images/6/6e/T--Waseda--Kamei.png',
        },
        {
          title: 'iGEM Waseda',
          age: '1',
          Major: 'iGEM Waseda',
          des: 'We are first Year for iGEM !',
          img: 'https://2020.igem.org/wiki/images/9/9d/T--Waseda--iGEM2020lWasedaLogo.png',
        },
      ],

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
        'PI', 'Member', 'NaviLast'
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
  background-image: url("https://2020.igem.org/wiki/images/0/02/T--Waseda--Teamtoppic.png")
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

