<template>
  <div class="poster">
    <div class="topper">
      <img :src="topperImg" alt="">
      <div class="userInfo name">{{ name }}</div>
      <div class="userInfo age">{{ age }}</div>
      <div class="userInfo grade">{{ grade }}</div>
      <div class="userInfo comesFrom">{{ comesFrom }}</div>
      <div class="userInfo school">{{ school }}</div>
    </div>

    <div class="bodyWrapper" :style="{backgroundImage:`url(${bgImgUrl})`}">
      <div class="block" :style="{backgroundImage:`url(${boxImg1})`, backgroundSize: '100% 100%'}">{{ desc }}</div>

      <div class="evaluation">
        <div class="bow" :style="{backgroundImage:`url(${bowImg})`, backgroundSize: '100% 100%'}">
          <span class="bowTitle">营员评估</span>
        </div>
        <div class="characterTitle">内外向</div>
        <div class="character" :style="{backgroundImage:`url(${boxImg1})`, backgroundSize: '100% 100%'}">
          <div class="topperText">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{ topperText }}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;—— 荣格“</div>
          <div class="redRowWrapper">
            <div class="redRow" v-bind:style="{left: redRowPercentage + '%', backgroundImage:`url(${rowImg})`, backgroundSize: '100% 100%'}"></div>
          </div>
          <div class="redBar"></div>
          <img :src="characterImg"/>
          <div class="bottomSummary">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{ characterSummary }}</div>
        </div>
        <div class="cable">
          <div class="radarTitle">学习力及成长性六维图</div>
        </div>
        <div class="block" :style="{backgroundImage:`url(${boxImg1})`, backgroundSize: '100% 100%'}">
          <div class="radar">
            <v-chart :options="polar" @finished="rendered"/>
          </div>
          <div class="summary">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{ summary }}</div>
        </div>
      </div>

      <div class="reuseableGroup">
        <div class="bow" :style="{backgroundImage:`url(${bowImg})`, backgroundSize: '100% 100%'}">
          <span class="bowTitle">学习力属性</span>
        </div>
        <div class="title1">学习能力</div>
        <div class="block tiny" :style="{backgroundImage:`url(${boxImg3})`, backgroundSize: '100% 100%'}">
          <div class="definition">以最快速度，最短时间学到新知识，获得新信息的能力</div>
          <div class="content">
            <div class="icon icon1" :style="{backgroundImage:`url(${iconImg1})`, backgroundSize: '100% 100%'}"></div>
            <div class="bar">
              <div class="filled" v-bind:style="{width: (score1 * 10) + '%'}"></div>
            </div>
            <div class="score">{{score1}}</div>
          </div>
          <div class="scoreSummary">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{ scoreSummary1 }}</div>
        </div>
        <div class="cable">
          <div class="tit title2">学习投入</div>
        </div>
        <div class="block tiny" :style="{backgroundImage:`url(${boxImg3})`, backgroundSize: '100% 100%'}">
          <div class="definition">是指心理上对学习的认同，并将学习效率视为一个人价值观的反映</div>
          <div class="content">
            <div class="icon icon2" :style="{backgroundImage:`url(${iconImg2})`, backgroundSize: '100% 100%'}"></div>
            <div class="bar">
              <div class="filled" v-bind:style="{width: (score2 * 10) + '%'}"></div>
            </div>
            <div class="score">{{score2}}</div>
          </div>
          <div class="scoreSummary">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{ scoreSummary2 }}</div>
        </div>
        <div class="cable">
          <div class="tit title3">学习主动性</div>
        </div>
        <div class="block tiny" :style="{backgroundImage:`url(${boxImg3})`, backgroundSize: '100% 100%'}">
          <div class="definition">是指主体在学习活动中表现出的一种积极的心理状态</div>
          <div class="content">
            <div class="icon icon3" :style="{backgroundImage:`url(${iconImg3})`, backgroundSize: '100% 100%'}"></div>
            <div class="bar">
              <div class="filled" v-bind:style="{width: (score3 * 10) + '%'}"></div>
            </div>
            <div class="score">{{score3}}</div>
          </div>
          <div class="scoreSummary">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{ scoreSummary3 }}</div>
        </div>
      </div>

      <div class="reuseableGroup">
        <div class="bow" :style="{backgroundImage:`url(${bowImg})`, backgroundSize: '100% 100%'}">
          <span class="bowTitle">成长属性</span>
        </div>
        <div class="title1">影响力</div>
        <div class="block tiny" :style="{backgroundImage:`url(${boxImg3})`, backgroundSize: '100% 100%'}">
          <div class="definition" style="text-align: center;">在领导活动中影响和改变他人心理和行为的能力</div>
          <div class="content">
            <div class="icon icon4" :style="{backgroundImage:`url(${iconImg4})`, backgroundSize: '100% 100%'}"></div>
            <div class="bar">
              <div class="filled" v-bind:style="{width: (score4 * 10) + '%'}"></div>
            </div>
            <div class="score">{{score4}}</div>
          </div>
          <div class="scoreSummary">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{ scoreSummary4 }}</div>
        </div>
        <div class="cable">
          <div class="tit title2">团队协作</div>
        </div>
        <div class="block tiny" :style="{backgroundImage:`url(${boxImg3})`, backgroundSize: '100% 100%'}">
          <div class="definition">建立在团队的基础之上，发挥团队精神、互补互助以达到团队最大工作效率的能力</div>
          <div class="content">
            <div class="icon icon5" :style="{backgroundImage:`url(${iconImg5})`, backgroundSize: '100% 100%'}"></div>
            <div class="bar">
              <div class="filled" v-bind:style="{width: (score5 * 10) + '%'}"></div>
            </div>
            <div class="score">{{score5}}</div>
          </div>
          <div class="scoreSummary">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{ scoreSummary5 }}</div>
        </div>
        <div class="cable">
          <div class="tit title3">创造力</div>
        </div>
        <div class="block tiny" :style="{backgroundImage:`url(${boxImg3})`, backgroundSize: '100% 100%'}">
          <div class="definition">创造力是指产生新思想，发现和创造新事物的能力</div>
          <div class="content">
            <div class="icon icon6" :style="{backgroundImage:`url(${iconImg6})`, backgroundSize: '100% 100%'}"></div>
            <div class="bar">
              <div class="filled" v-bind:style="{width: (score6 * 10) + '%'}"></div>
            </div>
            <div class="score">{{score6}}</div>
          </div>
          <div class="scoreSummary">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{ scoreSummary6 }}</div>
        </div>
      </div>

      <div class="reuseableGroup">
        <div class="bow" :style="{backgroundImage:`url(${bowImg})`, backgroundSize: '100% 100%'}">
          <span class="bowTitle">课程评价</span>
        </div>
        <div class="block tiny" style="min-height: 500px;" :style="{backgroundImage:`url(${boxImg3})`, backgroundSize: '100% 100%', minHeight: '500px'}">
          <div class="definition"><p>最喜欢的课程</p>{{ favCourse }}</div>
        </div>
        <div class="cable"></div>
        <div class="block tiny" style="min-height: 600px;" :style="{backgroundImage:`url(${boxImg3})`, backgroundSize: '100% 100%', minHeight: '600px'}">
          <div class="definition"><p>印象最深刻的研学目的地</p>{{ deepImpression }}</div>
        </div>
        <!-- <div class="cable"></div>
        <div class="block tiny" style="min-height: 340px;">
          <div class="definition"><p>您对于本次活动的评价，您觉得哪里可以做得更好</p>{{ userEvaluation }}</div>
        </div> -->
      </div>

      <div class="blank">
        <div class="finalSummary">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{ finalSummary }}</div>
      </div>

      <div class="sign" :style="{backgroundImage:`url(${signImg})`, backgroundSize: '100% 100%'}"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Poster',
  data () {
    return {
      initial: true,
      rendering: true,
      topperImg: 'http://static.chreta.com/topper.png',
      bgImgUrl: 'http://static.chreta.com/background.png',
      boxImg1: 'http://static.chreta.com/box_1.png',
      boxImg3: 'http://static.chreta.com/bg_3.png',
      bowImg: 'http://static.chreta.com/bow.png',
      rowImg: 'http://static.chreta.com/row.png',
      signImg: 'http://static.chreta.com/sign.png',
      characterImg: 'http://static.chreta.com/character.png',
      iconImg1: require('../assets/icon_1.png'),
      iconImg2: require('../assets/icon_2.png'),
      iconImg3: require('../assets/icon_3.png'),
      iconImg4: require('../assets/icon_4.png'),
      iconImg5: require('../assets/icon_5.png'),
      iconImg6: require('../assets/icon_6.png'),
      polar: {},
      topperText: '“我们天生就具有某种个性，使我们位于非常内向和非常外向的连续体之间的某一点上。如果我们在必要时能在内向和外向这一点上。如果我们在必要时能在内向和外向这一连续体上自由地移动，我们就能更好地适应这个社会。',
      summary: '本次营会通过导师使用专业的记录方法（观测结果主要来源），结合蒙趣素养的心理评估系统，得到学习力属性、成长属性两大维度，学习能力、学习投入、学习主动性、影响力、团队协作、创造力六个小维度的观测反馈。'
    }
  },
  props: {
    posterId: {
      type: Number,
      default: 0
    },
    desc: String,
    name: String,
    age: String,
    grade: String,
    comesFrom: String,
    school: String,
    characterScore: Number,
    characterSummary: String,
    redRowPercentage: Number,
    score1: Number,
    scoreSummary1: String,
    score2: Number,
    scoreSummary2: String,
    score3: Number,
    scoreSummary3: String,
    score4: Number,
    scoreSummary4: String,
    score5: Number,
    scoreSummary5: String,
    score6: Number,
    scoreSummary6: String,
    finalSummary: String,
    favCourse: String,
    deepImpression: String,
    userEvaluation: String
  },
  mounted: function () {
    this.rendering = true
    this.polar = {
      toolbox: {
        show : false
      },
      polar: {
        indicator : [
          { text: '学习力', max: 10},
          { text: '创造力', max: 10},
          { text: '团队协作', max: 10},
          { text: '影响力', max: 10},
          { text: '主动性', max: 10},
          { text: '学习投入', max: 10}
        ],
        name: {
          textStyle: {
            color: '#fff'
          },
          fontSize: 26
        },
        splitArea: {
          show: true,
          areaStyle: {
            color: ['#f6efe8', '#e7e7e7']
          }
        },
        splitLine: {
          show: true,
          lineStyle: {
            color: '#203f84'
          }
        }
      },
      calculable : true,
      series : [
        {
          name: '',
          type: 'radar',
          symbol: 'circle',
          symbolSize: 22,
          clickable: false,
          itemStyle: {
            normal: {
              lineStyle: {
                color: '#df2d3e',
                width: 3
              }
            }
          },
          data : [
            {
              value : [this.score1, this.score2, this.score3, this.score4, this.score5, this.score6],
              name : '',
              itemStyle: {
                normal: {
                  color: '#203f84'
                }
              }
            }
          ]
        }
      ]
    }
  },
  methods: {
    rendered () {
      setTimeout(() => {
        this.rendering = false
      }, 1500)
    }
  },
  watch: {
    posterId: function(val, oldVal) {
      console.log('rendering')
      this.rendering = true

      this.polar = {
        toolbox: {
          show : false
        },
        polar: {
          indicator : [
            { text: '学习力', max: 10},
            { text: '创造力', max: 10},
            { text: '团队协作', max: 10},
            { text: '影响力', max: 10},
            { text: '主动性', max: 10},
            { text: '学习投入', max: 10}
          ],
          name: {
            textStyle: {
              color: '#fff'
            },
            fontSize: 26
          },
          splitArea: {
            show: true,
            areaStyle: {
              color: ['#f6efe8', '#e7e7e7']
            }
          },
          splitLine: {
            show: true,
            lineStyle: {
              color: '#203f84'
            }
          }
        },
        calculable : true,
        series : [
          {
            name: '',
            type: 'radar',
            symbol: 'circle',
            symbolSize: 22,
            clickable: false,
            itemStyle: {
              normal: {
                lineStyle: {
                  color: '#df2d3e',
                  width: 3
                }
              }
            },
            data : [
              {
                value : [this.score1, this.score2, this.score3, this.score4, this.score5, this.score6],
                name : '',
                itemStyle: {
                  normal: {
                    color: '#203f84'
                  }
                }
              }
            ]
          }
        ]
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.poster {
  width: 1200px;
  font-size: 2rem;
  .topper {
    position: relative;
    width: 1200px;
    height: 1150px;
    .userInfo {
      color: #203f84;
      position: absolute;
      left: 32%;
      font-size: 3.5rem;
      font-weight: bold;
      z-index: 200;
      &.name {
        top: 22%;
      }
      &.age {
        top: 29%;
      }
      &.grade {
        top: 34.5%;
      }
      &.comesFrom {
        left: 36%;
        top: 41%;
      }
      &.school {
        top: 47.5%;
      }
    }
    img {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      width: 100%;
      height: 1150px;
      z-index: 100;
    }
  }

  .bodyWrapper {
    position: relative;
    width: 1080px;
    padding: 60px;
    .block {
      padding: 60px 80px;
      background-size: 100% 100%;
      color: #ffffff;
      text-align: start;
    }
    .cable {
      width: 732px;
      height: 138px;
      margin: 0 auto;
      border-left: 20px solid #df2d3e;
      border-right: 20px solid #df2d3e;
      margin-top: 0;
    }
    .evaluation {
      position: relative;
      .bow {
        width: 763px;
        height: 254px;
        margin: 60px auto 0;
        background-size: 100% 100%;
        .bowTitle {
          position: absolute;
          left: 50%;
          top: 30px;
          transform: translateX(-50%);
          font-size: 3.5rem;
          font-weight: bold;
          color: #ffffff;
        }
      }
      .characterTitle {
        position: absolute;
        left: 50%;
        top: 180px;
        transform: translateX(-50%);
        font-size: 3.5rem;
        font-weight: bold;
        color: #2e4cb1;
      }
      .character {
        background-size: 100% 100%;
        padding: 60px 80px;
        margin: 0 auto;
        font-size: 2rem;
        text-align: start;
        color: #fff;
        .redRowWrapper {
          width: 580px;
          height: 52px;
          margin: 0 auto;
          position: relative;
          .redRow {
            position: absolute;
            transform: translateX(-100%);
            background-size: 100% 100%;
            width: 64px;
            height: 44px;
          }
        }
        .redBar {
          width: 576px;
          height: 12px;
          background: #df2d3e;
          margin: 0 auto;
          transform: translateX(2px);
        }
        img {
          width: 580px;
          margin: 0 170px;
        }
        .topperText {
          margin: 30px;
        }
        .bottomSummary {
          margin: 30px;
        }
      }
      .radarTitle {
        width: 100%;
        padding-top: 65px;
        font-size: 3.5rem;
        font-weight: bold;
        color: #2e4cb1;
      }
      .radar {
        margin: 0 auto;
        width: 658px;
        height: 535px;
        .echarts {
          width: 100%;
          height: 100%;
        }
      }
      .summary {
        margin: 30px;
      }
    }

    .reuseableGroup {
      position: relative;
      .bow {
        width: 763px;
        height: 254px;
        margin: 60px auto 0;
        background-size: 100% 100%;
        .bowTitle {
          position: absolute;
          left: 50%;
          top: 30px;
          transform: translateX(-50%);
          font-size: 3.5rem;
          font-weight: bold;
          color: #ffffff;
        }
      }
      .tit {
        padding-top: 65px;
        width: 100%;
        // position: absolute;
        // left: 50%;
        // transform: translateX(-50%);
        font-size: 3.5rem;
        font-weight: bold;
        color: #2e4cb1;
      }
      .title1 {
        width: 100%;
        position: absolute;
        left: 50%;
        top: 180px;
        transform: translateX(-50%);
        font-size: 3.5rem;
        font-weight: bold;
        color: #2e4cb1;
      }
      // .title2 {
      //   top: 728px;
      // }
      // .title3 {
      //   top: 1328px;
      // }
      .block.tiny {
        padding: 60px 100px;
        background-size: 100% 100%;
        font-size: 2.2rem;
      }
      .content {
        display: flex;
        justify-content: space-around;
        align-items: center;
        margin: 50px auto;
        height: 62px;
        width: 780px;
        line-height: 50px;
        .icon {
          width: 62px;
          height: 62px;
          &.icon1 {
            background-size: 100% 100%;
          }
          &.icon2 {
            background-size: 100% 100%;
          }
          &.icon3 {
            background-size: 100% 100%;
          }
          &.icon4 {
            background-size: 100% 100%;
          }
          &.icon5 {
            background-size: 100% 100%;
          }
          &.icon6 {
            background-size: 100% 100%;
          }
        }
        .bar {
          width: 530px;
          height: 55px;
          background: #ffffff;
          border-radius: 30px;
          .filled {
            background: #df2d3e;
            border-radius: 30px;
            height: 100%;
          }
        }
        .score {
          color: #ffffff;
        }
      }
      .scoreSummary {
        margin: 50px auto;
      }
    }

    .blank {
      margin-top: 100px;
      padding: 60px 80px;
      background: transparent;
      border: 16px dotted #2e4cb1;
      color: #000;
      text-align: start;
      .finalSummary {
        color: #000;
        font-size: 2.2rem;
      }
    }

    .sign {
      margin: 50px auto 0;
      width: 823px;
      height: 901px;
      background-size: 100% 100%;
    }
  }
}
</style>
