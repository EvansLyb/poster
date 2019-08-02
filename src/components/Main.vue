<template>
  <div class="main">
    <div class="tips">
      <h1>{{ msg }}</h1>
      <input type="file" id="file" ref="file" v-on:change="uploaded()"/>
      <div class="progress">
        <div class="bar">
          <div class="filled" v-bind:style="{width: progress + '%'}"></div>
        </div>
        <div class="dt">已完成 {{ current }}/ {{ totalLen }}</div>
      </div>
    </div>
    <div class="outputing" v-if="outputing">正在打包导出...</div>
    <Poster
      id="poster"
      ref="poster"
      v-bind:posterId="posterId"
      desc="《随便乱写123期，撑多久时代峻峰斯蒂芬交底书降低佛但是。时代峻峰ID姜思达符文润文时间地方女屌丝是是是是结尾方面。撑多久时代峻峰斯蒂芬交底书降低佛但是。时代峻峰ID姜思达符文润文时间地方女屌丝是是是是结尾方面。撑多久时代峻峰斯蒂芬交底书降低佛但是。时代峻峰ID姜思达符文润文时间地方女屌丝是是是是结尾方面。撑多久时代峻峰斯蒂芬交底书降低佛但是。时代峻峰ID姜思达符文润文时间地方女屌丝是是是是结尾方面。撑多久时代峻峰斯蒂芬交底书降低佛但是。时代峻峰ID姜思达符文润文时间地方女屌丝是是是是结尾方面。撑多久时代峻峰斯蒂芬交底书降低佛但是。时代峻峰ID姜思达符文润文时间地方女屌丝是是是是结尾方面。撑多久时代峻峰斯蒂芬交底书降低佛但是。时代峻峰ID姜思达符文润文时间地方女屌丝是是是是结尾方面。"
      v-bind:name="name"
      v-bind:age="age"
      v-bind:grade="grade"
      v-bind:comesFrom="comesFrom"
      v-bind:school="school"
      v-bind:characterScore="characterScore"
      v-bind:characterSummary="characterSummary"
      v-bind:redRowPercentage="redRowPercentage"
      v-bind:favCourse="favCourse"
      v-bind:deepImpression="deepImpression"
      v-bind:userEvaluation="userEvaluation"
      v-bind:score1="score1"
      v-bind:scoreSummary1="scoreSummary1"
      v-bind:score2="score2"
      v-bind:scoreSummary2="scoreSummary2"
      v-bind:score3="score3"
      v-bind:scoreSummary3="scoreSummary3"
      v-bind:score4="score4"
      v-bind:scoreSummary4="scoreSummary4"
      v-bind:score5="score5"
      v-bind:scoreSummary5="scoreSummary5"
      v-bind:score6="score6"
      v-bind:scoreSummary6="scoreSummary6"
      v-bind:finalSummary="finalSummary"
    />
  </div>
</template>

<script>
const Papa = require('papaparse')
const domToImage = require('dom-to-image')
const FileSaver = require('file-saver')
const JSZip = require('jszip')
import Poster from './Poster'
import summaryData from './summary'

export default {
  name: 'Main',
  data () {
    return {
      outputing: false,
      summaryData: summaryData,
      progress: 0,
      posterId: 0,
      totalLen: 0,
      current: 0,
      name: '',
      age: '',
      grade: '',
      comesFrom: '',
      school: '',
      favCourse: '',
      deepImpression: '',
      userEvaluation: '',
      characterScore: 0,
      characterSummary: '',
      redRowPercentage: 0,
      score1: 0,
      scoreSummary1: '',
      score2: 0,
      scoreSummary2: '',
      score3: 0,
      scoreSummary3: '',
      score4: 0,
      scoreSummary4: '',
      score5: 0,
      scoreSummary5: '',
      score6: 0,
      scoreSummary6: '',
      finalSummary: ''
    }
  },
  props: {
    msg: String
  },
  components: {
    Poster
  },
  mounted: function () {
  },
  methods: {
    uploaded () {
      this.file = this.$refs.file.files[0]

      Papa.parse(this.file, {
        complete: ({ data }) => {
          console.log(data)
          this.totalLen = data.length - 1
          const zip = new JSZip()
          let folder = 'my-images'

          let setCharacterSummary = (score) => {
            let dataGroup = this.summaryData[0]
            let segData = []
            if (score < 4) {
              segData = dataGroup[0]
            } else if (score < 5) {
              segData = dataGroup[1]
            } else if (score < 7) {
              segData = dataGroup[2]
            } else if (score < 8) {
              segData = dataGroup[3]
            } else {
              segData = dataGroup[4]
            }

            let randomIndex = Math.floor(Math.random()*3)
            let randomSummaryIndex
            let polling = true
            const intervalHandler = setInterval(() => {
              if (!polling) {
                clearInterval(intervalHandler)
              } else {
                randomSummaryIndex = Math.floor(Math.random()*3)
                if (randomSummaryIndex !== randomIndex) {
                  polling = false
                  this.characterSummary = segData[randomIndex] + '一段文本一段文本一段文本一段文本一段文本一段文本一段文本一段文本一段文本一段文本'
                  this.finalSummary = this.finalSummary + segData[randomSummaryIndex] + '一段文本一段文本一段文本一段文本一段文本一段文本一段文本一段文本一段文本一段文本'
                }
              }
            }, 10)
            return
          }

          let setScoreSummary = (order, score) => {
            let dataGroup = this.summaryData[order]
            let segData = []
            if (score < 6.5) {
              segData = dataGroup[0]
            } else if (score < 7) {
              segData = dataGroup[1]
            } else if (score < 7.5) {
              segData = dataGroup[2]
            } else if (score < 8) {
              segData = dataGroup[3]
            } else if (score < 8.5) {
              segData = dataGroup[4]
            } else if (score < 9) {
              segData = dataGroup[5]
            } else if (score < 9.5) {
              segData = dataGroup[6]
            } else {
              segData = dataGroup[7]
            }

            let randomIndex = Math.floor(Math.random()*3)
            let randomSummaryIndex
            let polling = true
            const intervalHandler = setInterval(() => {
              if (!polling) {
                clearInterval(intervalHandler)
              } else {
                randomSummaryIndex = Math.floor(Math.random()*3)
                if (randomSummaryIndex !== randomIndex) {
                  polling = false
                  this['scoreSummary' + order] = segData[randomIndex] + '一段文本一段文本一段文本一段文本一段文本一段文本一段文本一段文本一段文本一段文本'
                  this.finalSummary = this.finalSummary + segData[randomSummaryIndex] + '一段文本一段文本一段文本一段文本一段文本一段文本一段文本一段文本一段文本一段文本'
                }
              }
            }, 10)
            return
          }

          let getScore = (answer, direction) => {
            switch (answer) {
              case '非常明显':
                return direction == 1 ? 5 : 1
                break
              case '比较明显':
                return direction == 1 ? 4 : 2
                break
              case '不置可否':
                return 3
              case '不明显':
                return direction == 1 ? 2 : 4
                break
              case '完全不':
                return direction == 1 ? 1 : 5
                break
            }
          }

          let renderPoster = (_i, end) => {
            this.characterScore = 0
            this.characterSummary = ''
            this.redRowPercentage = 0
            this.score1 = 0
            this.scoreSummary1 = ''
            this.score2 = 0
            this.scoreSummary2 = ''
            this.score3 = 0
            this.scoreSummary3 = ''
            this.score4 = 0
            this.scoreSummary4 = ''
            this.score5 = 0
            this.scoreSummary5 = ''
            this.score6 = 0
            this.scoreSummary6 = ''
            this.finalSummary = ''

            const start = 7

            let dataLine = data[_i]
            if ((typeof dataLine[1] == 'undefined' || !dataLine[1]) && _i != end) {
              this.current = _i
              this.progress = (_i / end) * 100
              return renderPoster(++_i, end)
            }

            this.name = dataLine[1]
            this.age = dataLine[3]
            this.grade = dataLine[4]
            this.comesFrom = dataLine[5]
            this.school = dataLine[6]
            this.favCourse = dataLine[37]
            this.deepImpression = dataLine[38]
            this.userEvaluation = dataLine[39]

            this.characterScore += getScore(dataLine[start + 0], 1)
            this.characterScore += getScore(dataLine[start + 1], 1)
            this.characterScore += getScore(dataLine[start + 2], 0)
            this.characterScore += getScore(dataLine[start + 3], 1)
            this.characterScore += getScore(dataLine[start + 4], 0)
            this.characterScore = parseFloat((this.characterScore * 0.4).toFixed(1))
            if (this.characterScore == 10 || this.characterScore == 10.0) {
              this.characterScore = 9.8
            }
            this.redRowPercentage = this.characterScore * 10
            setCharacterSummary(this.characterScore)

            this.score1 += getScore(dataLine[start + 5], 1)
            this.score1 += getScore(dataLine[start + 6], 0)
            this.score1 += getScore(dataLine[start + 7], 1)
            this.score1 += getScore(dataLine[start + 8], 0)
            this.score1 += getScore(dataLine[start + 9], 0)
            this.score1 = parseFloat(((this.score1 * 0.2) + 5).toFixed(1))
            if (this.score1 == 10 || this.score1 == 10.0) {
              this.score1 = 9.8
            }
            setScoreSummary(1, this.score1)

            this.score2 += getScore(dataLine[start + 10], 1)
            this.score2 += getScore(dataLine[start + 11], 1)
            this.score2 += getScore(dataLine[start + 12], 0)
            this.score2 += getScore(dataLine[start + 3], 1)
            this.score2 += getScore(dataLine[start + 9], 0)
            this.score2 = parseFloat(((this.score2 * 0.2) + 5).toFixed(1))
            if (this.score2 == 10 || this.score2 == 10.0) {
              this.score2 = 9.8
            }
            setScoreSummary(2, this.score2)

            this.score3 += getScore(dataLine[start + 13], 1)
            this.score3 += getScore(dataLine[start + 14], 0)
            this.score3 += getScore(dataLine[start + 15], 0)
            this.score3 += getScore(dataLine[start + 16], 0)
            this.score3 += getScore(dataLine[start + 7], 1)
            this.score3 = parseFloat(((this.score3 * 0.2) + 5).toFixed(1))
            if (this.score3 == 10 || this.score3 == 10.0) {
              this.score3 = 9.8
            }
            setScoreSummary(3, this.score3)

            this.score4 += getScore(dataLine[start + 17], 1)
            this.score4 += getScore(dataLine[start + 18], 0)
            this.score4 += getScore(dataLine[start + 19], 1)
            this.score4 += getScore(dataLine[start + 0], 1)
            this.score4 += getScore(dataLine[start + 2], 0)
            this.score4 = parseFloat(((this.score4 * 0.2) + 5).toFixed(1))
            if (this.score4 == 10 || this.score4 == 10.0) {
              this.score4 = 9.8
            }
            setScoreSummary(4, this.score4)

            this.score5 += getScore(dataLine[start + 20], 0)
            this.score5 += getScore(dataLine[start + 21], 1)
            this.score5 += getScore(dataLine[start + 22], 0)
            this.score5 += getScore(dataLine[start + 23], 0)
            this.score5 += getScore(dataLine[start + 1], 1)
            this.score5 = parseFloat(((this.score5 * 0.2) + 5).toFixed(1))
            if (this.score5 == 10 || this.score5 == 10.0) {
              this.score5 = 9.8
            }
            setScoreSummary(5, this.score5)

            this.score6 += getScore(dataLine[start + 24], 1)
            this.score6 += getScore(dataLine[start + 25], 0)
            this.score6 += getScore(dataLine[start + 26], 1)
            this.score6 += getScore(dataLine[start + 27], 0)
            this.score6 += getScore(dataLine[start + 13], 1)
            this.score6 = parseFloat(((this.score6 * 0.2) + 5).toFixed(1))
            if (this.score6 == 10 || this.score6 == 10.0) {
              this.score6 = 9.8
            }
            setScoreSummary(6, this.score6)

            this.posterId = _i
            setTimeout(() => {
              let node = document.getElementById('poster')
              domToImage.toBlob(node, {
                quality: 0.1
              }).then(blob => {
                zip.file(`${folder}/${_i}.png`, blob, {
                  createFolders: true
                })
                // TODO
                this.current = _i
                this.progress = (_i / end) * 100
                if (_i == end) {
                  this.outputing = true
                  zip.generateAsync({
                    type: 'blob'
                  }).then(data => {
                    FileSaver.saveAs(data, 'output.zip')
                    this.outputing = false
                  })
                  return 'done'
                }
                return renderPoster(++_i, end)
              }).catch(err => {
                console.log(err)
              })
            }, 800)
          }

          renderPoster(1, this.totalLen)
        }
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
a {
  color: #42b983;
}
.progress {
  display: flex;
  align-items: center;
  .bar {
    margin: 0 auto;
    width: 600px;
    height: 50px;
    background: #ffffff;
    border-radius: 30px;
    border: 2px solid #000;
    .filled {
      padding: 0;
      margin: 0;
      height: 100%;
      background: #42b983;
      border-radius: 30px;
    }
  }
  .dt {
    padding-left: 16px;
    font-size: 3rem;
    color: #42b983;
    font-weight: bold;
  }
}
.outputing {
  color: #42b983;
  font-weight: bold;
  font-size: 8rem;
}
.tips {
  display: flex;
  align-items: center;
  justify-content: center;
  justify-items: center;
  width: 100vw;
  text-align: center;
}
#file {
  padding-left: 10px;
}
</style>
