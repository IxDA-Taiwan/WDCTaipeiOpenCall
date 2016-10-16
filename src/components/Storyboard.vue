<template>
  <div class="storyboard">
    <scrollfire @progress="progress" @left="left" multiple></scrollfire>
    <div class="session1" v-bind:class="[fixed]">
      <div class="scene fixed text" v-bind:style="{opacity: opacity1}">
        {{{ $t('scene1.title1') }}}
      </div>
      <div class="float" style="right: 10vw" v-bind:style="{top: top1 + 'vh'}">
        <img src="/static/assets/bg_newspaper1.png" />
      </div>
      <div class="float" style="left: 10vw" v-bind:style="{top: top2 + 'vh'}">
        <img src="/static/assets/bg_newspaper2.png" />
      </div>
      <div class="float" style="right: 25vw" v-bind:style="{top: top3 + 'vh'}">
        <img src="/static/assets/bg_newspaper3.png" />
      </div>
      <div class="float" style="left: 25vw" v-bind:style="{top: top4 + 'vh'}">
        <img src="/static/assets/bg_newspaper4.png" />
      </div>
      <div class="scene fixed text" v-bind:style="{opacity: opacity2}">
        {{{ $t('scene1.title2') }}}
      </div>
    </div>
    <div class="session2">
      <div class="scene">
        <div class="title">
          {{{ $t('scene2.title1') }}}
        </div>
      </div>
      <div class="diseases">
        <div class="disease">
          <img src="/static/assets/icn_intestine.png" v-bind:style="{marginTop: diseasetop1  + 'px'}" />
          <div>{{{ $t('scene2.disease1') }}}</div>
        </div>
        <div class="disease">
          <img src="/static/assets/icn_heart.png" v-bind:style="{marginTop: diseasetop2 + 'px'}" />
          <div>{{{ $t('scene2.disease2') }}}</div>
        </div>
        <div class="disease">
          <img src="/static/assets/icn_diabetes.png" v-bind:style="{marginTop: diseasetop3 + 'px'}" />
          <div>{{{ $t('scene2.disease3') }}}</div>
        </div>
        <div class="disease">
          <img src="/static/assets/icn_fat.png" v-bind:style="{marginTop: diseasetop4 + 'px'}" />
          <div>{{{ $t('scene2.disease4') }}}</div>
        </div>
      </div>
      <div class="scene">
        <img src="/static/assets/icn_ exclamation.png" />
          <div class="title2">
            {{{ $t('scene2.title2') }}}
          </div>
      </div>
    </div>
    <div class="session3">
      <div class="scene">
        <div class="chain chain1-1" v-bind:style="{left: chain1left + 'vw'}"></div>
        <div class="chain chain1-2" v-bind:style="{left: chain1left + 'vw'}">
          <img src="/static/assets/icn_ship.png" />
        </div>
        <div class="chain chain1-3" v-bind:style="{left: chain1left + 'vw'}">
          <div>
            {{{ $t('scene3.chain1title') }}}
            <div style="font-size:32px;line-height:50px;margin-top: 30px;">{{{ $t('scene3.chain1') }}}</div>
          </div>

        </div>
      </div>

      <div class="scene">
        <div class="chain chain2-1" v-bind:style="{right: chain2left + 'vw'}"></div>
        <div class="chain chain2-2" v-bind:style="{right: chain2left + 'vw'}">
          <img src="/static/assets/icn_pesticide.png" />
        </div>
        <div class="chain chain2-3" v-bind:style="{right: chain2left + 'vw'}">
          <div>
            {{{ $t('scene3.chain2title') }}}
            <div style="font-size:32px;line-height:50px;margin-top: 30px;">{{{ $t('scene3.chain2') }}}</div>
          </div>
        </div>
      </div>

      <div class="scene">
        <div class="chain chain1-1 chain3-1" v-bind:style="{left: chain3left + 'vw'}"></div>
        <div class="chain chain1-2" v-bind:style="{left: chain3left + 'vw'}">
          <img src="/static/assets/icn_can.png" />
        </div>
        <div class="chain chain1-3" v-bind:style="{left: chain3left + 'vw'}">
          <div>
            {{{ $t('scene3.chain3title') }}}
            <div style="font-size:32px;line-height:50px;margin-top: 30px;">{{{ $t('scene3.chain3') }}}</div>
          </div>

        </div>
      </div>

      <div class="scene">
        <div class="chain chain2-1 chain4-1" v-bind:style="{right: chain4left + 'vw'}"></div>
        <div class="chain chain2-2" v-bind:style="{right: chain4left + 'vw'}">
          <img src="/static/assets/icn_fly.png" />
        </div>
        <div class="chain chain2-3 " v-bind:style="{right: chain4left + 'vw'}">
          <div>
            {{{ $t('scene3.chain4title') }}}
            <div style="font-size: 32px; line-height: 50px; margin-top: 30px;">{{{ $t('scene3.chain4') }}}</div>
          </div>
        </div>
      </div>
    </div>

    <div class="session4">
      <div class="scene">
        <div class="title">
          {{{ $t('scene4.title1') }}}
        </div>
      </div>
      <div class="people">
        <div class="group">
          <img src="/static/assets/icn_takeout.png" v-bind:style="{marginTop: peopletop1  + 'px'}" />
          <div>95%</div>
          <div>{{{ $t('scene4.people1') }}}</div>
        </div>
        <div class="group">
          <img src="/static/assets/icn_foodfrom.png" v-bind:style="{marginTop: peopletop2 + 'px'}" />
          <div>85%</div>
          <div>{{{ $t('scene4.people2') }}}</div>
        </div>
        <div class="group">
          <img src="/static/assets/icn_safefood.png" v-bind:style="{marginTop: peopletop3 + 'px'}" />
          <div>42%</div>
          <div>{{{ $t('scene4.people3') }}}</div>
        </div>
      </div>
    </div>

    <div class="session5">
      <div class="scene fixed text" v-bind:style="{opacity: opacity3}">
        {{{ $t('scene5.title1') }}}
      </div>
      <div class="scene fixed text" v-bind:style="{opacity: opacity4}">
        <img src="/static/assets/icn_questionmark.png" style="display: block; margin: 30px;" />
        {{{ $t('scene5.title2') }}}
        <div style="height: 125px;"></div>
      </div>
    </div>

    <div class="video1">
      <div class="scene">
        <video id="video1" v-el:video1 loop class="wdcvideo" preload="auto">
          <source src="/static/assets/video1.mp4" />
        </video>
      </div>
    </div>

    <div class="session6">
      <div class="scene text">
        <img src="/static/assets/icn_questionmark.png" style="display: block; margin: 30px;" />
        <div class="title">{{{ $t('scene6.title') }}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import scrollfire from 'vue-scrollfire'

export default {
  data: () => {
    return {
      opacity1: 0,
      opacity2: 0,
      opacity3: 0,
      opacity4: 0,
      s5bottom: -180,
      top1: 200,
      top2: 200,
      top3: 200,
      top4: 200,
      diseasetop1: 0,
      diseasetop2: 300,
      diseasetop3: 180,
      diseasetop4: 60,
      chain1left: -100,
      chain2left: -100,
      chain3left: -100,
      chain4left: -100,
      rest1display: 'none',
      rest2display: 'none',
      rest3display: 'none',
      rest4display: 'none'
    }
  },
  components: {
    scrollfire: scrollfire
  },
  methods: {
    progress: function (props) {
      let el = this
      let p = props.top / window.innerHeight
      el.opacity1 = 0
      el.opacity2 = 0

      if (p < 1) {
        el.opacity1 = p
      }
      if (p >= 1 && p < 2) {
        el.opacity1 = 2 - p
      }
      if (p >= 2 && p < 3) {
        el.opacity2 = p - 2
      }
      if (p >= 3 && p < 4) {
        el.opacity2 = 4 - p
        el.diseasetop1 = 0
        el.diseasetop2 = 300
        el.diseasetop3 = 180
        el.diseasetop4 = 60
      }
      if (p >= 5 && p < 5.3) {
        el.diseasetop1 = (5.3 - p) * 0
        el.diseasetop2 = (5.3 - p) * 1000
        el.diseasetop3 = (5.3 - p) * 600
        el.diseasetop4 = (5.3 - p) * 200
      }
      if (p >= 5.3 && p < 6) {
        el.diseasetop1 = 0
        el.diseasetop2 = 0
        el.diseasetop3 = 0
        el.diseasetop4 = 0
      }
      if (p >= 6 && p < 6.1) {
        el.chain1left = -100
      }
      if (p >= 6.1 && p < 7.1) {
        console.log('c1 in')
        el.chain1left = 0
        el.chain2left = -100
      }
      if (p >= 7.1 && p < 8.1) {
        console.log('c2 in')
        el.chain2left = 0
        el.chain3left = -100
      }
      if (p >= 8.1 && p < 9.1) {
        console.log('c3 in')
        el.chain3left = 0
        el.chain4left = -100
      }
      if (p >= 9.1 && p < 10.1) {
        console.log('c4 in')
        el.chain4left = 0
      }
      if (p >= 10.1 && p < 12) {
        el.opacity3 = 0
      }
      if (p >= 12 && p < 13) {
        el.opacity3 = p - 12
        el.opacity4 = 0
      }
      if (p >= 13 && p < 14) {
        el.opacity3 = 14 - p
      }
      if (p >= 14 && p < 15) {
        el.opacity3 = 0
        el.opacity4 = p - 14
        el.s5bottom = -180
      }
      if (p >= 15 && p < 16) {
        el.opacity4 = 1
        el.s5bottom = 0
        console.log(el.s5bottom)
      }
      if (p >= 16 && p < 17) {
        el.opacity4 = 17 - p
        el.s5bottom = -180
      }

      if (p >= 17 && p < 18) {
        el.opacity4 = 0
        this.$els.video1.volume = p - 17
        this.$els.video1.play()
      }

      if (p >= 16) {
        this.$els.video1.currentTime = 0
      }

      if (p >= 18 && p < 19) {
        this.$els.video1.volume = 1
      }

      if (p >= 19) {
        console.log('pause')
        this.$els.video1.pause()
      }

      el.top1 = (2 - p) * 120 - 10
      el.top2 = (2 - p) * 100 + 20
      el.top3 = (2 - p) * 100 + 50
      el.top4 = (2 - p) * 125 - 15
    },
    left: (el) => {
      el.opacity1 = 0
      el.opacity2 = 0
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.storyboard {
  overflow: hidden;
}

.session1 {
  width: 100vw;
  max-width: 100%;
  min-width: 1024px;
  height: 400vh;
  background-color: #2C3249;
  background-image: url(/static/assets/bg_1_1.jpg);
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
}

.session2 {
  width: 100vw;
  max-width: 100%;
  min-width: 1024px;
  height: 200vh;
  background-color: #2C3249;
  position: relative;
}

.session2 .title {
  padding: 30px 0;
  margin: 50px 0;
}

.session2 .title2 {
  border-top: 1px solid #fff;
  border-bottom: 1px solid #fff;
  padding: 30px 0;
  margin: 50px 0;
}

.session3 {
  width: 100vw;
  max-width: 100%;
  min-width: 1024px;
  height: 400vh;
  background-color: #2C3249;
  position: relative;
}

.diseases {
  position: absolute;
  top: 70vh;
  width: 100vw;
  max-width: 100%;
  display: flex;
  flex-direction: row;
  padding: 0 10vw;
  box-sizing: border-box;
}

.disease {
  flex: 1;
  font-size: 22px;
  color: #FFFFFF;
  letter-spacing: -0.53px;
  line-height: 41px;
  width: 200px;
  padding-top: 10px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.disease img {
  border: 6px solid #D8D8D8;
  border-radius: 100%;
  transition: margin-top 0.3s;
}

.fixed {
  position: fixed;
  top: 0;
  pointer-events: none;
}

.scene {
  height: 100vh;
  width: 100vw;
  max-width: 100%;
  color: white;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-weight: 200;
  font-size: 63px;
  letter-spacing: -1.52px;
  line-height: 85px;
  text-shadow: 6px 2px 9px rgba(0,0,0,0.77);
}

.text {
  background: -moz-linear-gradient(top, rgba(0,0,0,0.0) 0%, rgba(0,0,0,0.65) 50%, rgba(0,0,0,0) 100%); /* FF3.6-15 */
  background: -webkit-linear-gradient(top, rgba(0,0,0,0.0) 0%, rgba(0,0,0,0.65) 50%, rgba(0,0,0,0) 100%); /* Chrome10-25,Safari5.1-6 */
  background: linear-gradient(to bottom, rgba(0,0,0,0.0) 0%, rgba(0,0,0,0.65) 50%, rgba(0,0,0,0) 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
}

.float {
  position: fixed;
}

.chain1-1 {
  width: 50%;
  height: 100vh;
  background-image: url(/static/assets/bg_1_8.png);
  background-position: center;
  background-size: cover;
  box-sizing: border-box;;
  position: absolute;
  left: -100vw;
  border-right: 10px solid #F3BB63;
  transition: left 0.5s;
}

.chain1-2 {
  width: 100%;
  height: 100vh;
  box-sizing: border-box;
  position: absolute;
  left: -100vw;
  transition: left 0.5s;
  transition-delay: 0.25s;
}

.chain1-2 img {
  margin-top: 100px;
  margin-right:10px;
}

.chain1-3 {
  width: 100%;
  height: 100vh;
  padding-left: 50%;
  box-sizing: border-box;
  position: absolute;
  left: -100vw;
  transition: left 0.5s;
  transition-delay: 0.75s;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: left;
}
.chain2-1 {
  width: 50%;
  height: 100vh;
  background-image: url(/static/assets/bg_1_9.png);
  background-position: center;
  background-size: cover;
  box-sizing: content-box;
  position: absolute;
  right: -100vw;
  border-left: 10px solid #F3BB63;
  transition: right 0.5s;
}

.chain2-2 {
  width: 100%;
  height: 100vh;
  box-sizing: border-box;
  position: absolute;
  right: -100vw;
  transition: right 0.5s;
  transition-delay: 0.25s;
}

.chain2-2 img {
  margin-top: 100px;
  margin-right:10px;
}

.chain2-3 {
  width: 100%;
  height: 100vh;
  padding-right: 50%;
  box-sizing: border-box;
  position: absolute;
  right: -100vw;
  transition: right 0.5s;
  transition-delay: 0.75s;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: right;
}

.chain3-1 {
  background-image: url(/static/assets/bg_1_10.png);
}

.chain4-1 {
  background-image: url(/static/assets/bg_1_11.png);
}

.session4 {
  width: 100vw;
  max-width: 100%;
  min-width: 1024px;
  height: 100vh;
  background-color: #2C3249;
  position: relative;
}

.session4 .title {
  margin: 0 100px 200px 100px;
}


.people {
  position: absolute;
  top: 50vh;
  width: 100vw;
  max-width: 100%;
  display: flex;
  flex-direction: row;
  padding: 0 10vw;
  box-sizing: border-box;
}

.people .group {
  flex: 1;
  font-size: 22px;
  color: #FFFFFF;
  letter-spacing: -0.53px;
  line-height: 41px;
  width: 200px;
  padding-top: 10px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.people .group img {
  transition: margin-top 0.3s;
}

.fixed {
  position: fixed;
  top: 0;
}

.session5 {
  width: 100vw;
  max-width: 100%;
  min-width: 1024px;
  height: 600vh;
  background-image: url(/static/assets/bg_2_3.png);
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
}

.session5 .record {
  position: fixed;
  z-index: 10000;
  width: 100vw;
  max-width: 100%;
  min-width: 1024px;
  height: 180px;
  background: #F3BB63;
  bottom: -180px;
  transition: bottom 1s;

}

.session5 .record .controller {
  display: flex;
  flex-direction: column;
  color: white;
  padding: 30px 50px;
}

.session5 .record .controller .top {
  flex: 1;
  display: flex;
  flex-direction: row;
}

.session5 .record .controller .top .left {
  flex: 2;
  font-size: 20px;
  text-align: center;
  justify-content: center;
  align-items: center;
}
.session5 .record .controller .top .right {
  flex: 8;
  font-size: 20px;
  text-align: center;
  justify-content: center;
  align-items: center;
}

.session6 {
  width: 100vw;
  max-width: 100%;
  min-width: 1024px;
  height: 100vh;
  background-image: url(/static/assets/bg_2_3.png);
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
}

.video1 {
  background-color: #000;
}

.wdcvideo {
  width: 100%;
  height: 100%;
}
</style>
