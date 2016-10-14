<template>
  <div v-el:anchor class="session">
    <!-- <div class="fixed-scene" v-bind:class="{ 'broken': broken }" v-bind:style="{ opacity: opacity, display: display}">
      <div class="title">{{{ $t('scene9.title') }}}</div>
      <div class="pyramid">
        <div class="caption c1" v-bind:class="{ 'broken': broken }">{{{ $t('scene9.caption1') }}}</div>
        <div class="caption c2" v-bind:class="{ 'broken': broken }">{{{ $t('scene9.caption2') }}}</div>
        <div class="caption c3" v-bind:class="{ 'broken': broken }">{{{ $t('scene9.caption3') }}}</div>
        <img class="puzzle p0" v-bind:class="{ 'broken': broken }" src="/static/assets/bg_pyramid0.png" />
        <img class="puzzle p1" v-bind:class="{ 'broken': broken }" src="/static/assets/bg_pyramid1.png" />
        <img class="puzzle p2" v-bind:class="{ 'broken': broken }" src="/static/assets/bg_pyramid2.png" />
        <img class="puzzle p3" v-bind:class="{ 'broken': broken }" src="/static/assets/bg_pyramid3.png" />
        <img class="puzzle p4" v-bind:class="{ 'broken': broken }" src="/static/assets/bg_pyramid4.png" />
      </div>
      <div class="reason" v-bind:class="{ 'broken': broken }">{{{ $t('scene9.reason') }}}</div>
    </div> -->
    <div class="scene">
      <div class="result">{{{ $t('scene9.result') }}}</div>
    </div>
  </div>
</template>

<script>
import $ from 'jquery'

export default {
  methods: {
    entered: function () {
      this.display = 'flex'
    },
    left: function () {
      this.display = 'none'
    },
    scroll: function (p) {
      this.display = 'flex'
      this.opacity = (p < 0.33) ? p * 4 : 1
      this.broken = (p > 0.33)
      let spans = $('.result span')
      $(spans[Math.floor(Math.random() * spans.length)]).css({'opacity': 0.2 + Math.random() * 0.9})
    }
  },
  data: () => {
    return {
      before: null,
      after: null,
      inscreen: null,
      progress: 0,
      display: 'none',
      opacity: 0,
      broken: false
    }
  },
  events: {
    'scroll': function (position) {
      const rect = this.$els.anchor.getBoundingClientRect()
      const top = document.documentElement.clientHeight - rect.top
      const bottom = rect.bottom
      if (bottom > 0 && top > 0) {
        if (!this.inscreen) {
          this.inscreen = true
          if (this.entered) {
            this.entered()
          }
        }
        this.progress = top / (top + bottom)
        this.scroll(this.progress)
        if (this.before) {
          this.before = false
        }
        if (this.after) {
          this.after = false
        }
      } else if (top <= 0) {
        if (!this.before) {
          this.before = true
          if (this.left) {
            this.left()
          }
        }
        if (this.inscreen) {
          this.inscreen = false
        }
        if (this.after) {
          this.after = false
        }
        this.progress = 0
      } else if (bottom <= 0) {
        if (!this.after) {
          this.after = true
          if (this.left) {
            this.left()
          }
        }
        if (this.inscreen) {
          this.inscreen = false
        }
        if (this.before) {
          this.before = false
        }
        this.progress = 100
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.session {
  width: 100vw;
  max-width: 100%;
  min-width: 1024px;
  height: 100vh;
  background-color: #2C3249;
  position: relative;
}

.scene {
  position: absolute;
  width: 100vw;
  max-width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.result {
  font-weight: 200;
  font-size: 63px;
  color: #FFFFFF;
  letter-spacing: -1.52px;
  line-height: 85px;
  text-shadow: 6px 2px 9px rgba(0,0,0,0.77);
  text-align: center;
}

.fixed-scene {
  width: 100vw;
  max-width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.fixed-scene.broken {
  position: absolute;
  top: 0vh;
}

.title {
  font-weight: 200;
  font-size: 63px;
  color: #FFFFFF;
  letter-spacing: -1.52px;
  line-height: 85px;
  text-shadow: 6px 2px 9px rgba(0,0,0,0.77);
  text-align: center;
}

.pyramid {
  width: 1000px;
  height: 450px;
  position: relative;
}

.caption {
  font-weight: 200;
  font-size: 22px;
  color: #FFFFFF;
  letter-spacing: -0.53px;
  line-height: 41px;
  position: absolute;
  left: 500px;
  transition: opacity 0.5s;
}

.caption.broken {
  opacity: 0;
}

.caption.c1 {
  top: 80px;
  z-index: 100;
}

.caption.c2 {
  top: 200px;
  z-index: 100;
}

.caption.c3 {
  top: 320px;
  z-index: 100;
}

.puzzle {
  transition: all 0.2s;
}

.puzzle.p0 {
  position: absolute;
  top: 20px;
  left: 425px;
}

.puzzle.p0.broken {
  top: 130px;
  left: 460px;
  transform: rotate(15deg);
}

.puzzle.p1 {
  position: absolute;
  top: 171px;
  left: 376px;
}

.puzzle.p1.broken {
  top: 270px;
  left: 260px;
}

.puzzle.p2 {
  position: absolute;
  top: 168px;
  left: 522px;
}

.puzzle.p2.broken {
  top: 292px;
  left: 702px;
}

.puzzle.p3 {
  position: absolute;
  top: 260px;
  left: 284px;
}

.puzzle.p3.broken {
  left: 100px;
}

.puzzle.p4 {
  position: absolute;
  top: 268px;
  left: 449px;
}

.puzzle.p4.broken {
  left: 439px;
}

.caption:before {
  content: '';
  display: inline-block;
  width: 270px;
  height: 1px;
  margin: 0.4em;
  background-color: #fff;
}

.reason {
  font-weight: 200;
  font-size: 32px;
  color: #FFFFFF;
  letter-spacing: -0.77px;
  line-height: 55px;
  text-shadow: 6px 2px 9px rgba(0,0,0,0.77);
  opacity: 0;
}

.reason.broken {
  opacity: 1;
}
</style>
