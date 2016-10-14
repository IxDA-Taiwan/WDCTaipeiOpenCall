<template>
  <div v-el:anchor class="session">
    <div class="scene init">
      <div class="scene text">
        {{{ $t('scene10.title') }}}
      </div>
    </div>
    <div class="fixed-scene" v-bind:style="{ opacity: pyramidOpacity, display: pyramidDisplay}">
      <div class="title2">{{{ $t('scene10.title2') }}}</div>
      <div class="pyramid">
        <div class="floor" v-bind:style="{ opacity: c1Opacity}">
          <div class="caption c1">{{{ $t('scene10.caption1') }}}</div>
          <img src="/static/assets/bg_pyramid_01.png">
        </div>
        <div class="floor" v-bind:style="{ opacity: c2Opacity}">
          <div class="caption c2">{{{ $t('scene10.caption2') }}}</div>
          <img src="/static/assets/bg_pyramid_02.png">
        </div>
        <div class="floor" v-bind:style="{ opacity: c3Opacity}">
          <div class="caption c3">{{{ $t('scene10.caption3') }}}</div>
          <img src="/static/assets/bg_pyramid_03.png">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    entered: function () {
    },
    left: function () {
      this.pyramidDisplay = 'none'
      this.pyramidOpacity = 0
    },
    scroll: function (p) {
      if (p > 0.222) {
        this.pyramidDisplay = 'flex'
        this.pyramidOpacity = (p < 0.444) ? (p - 0.222) * 4 : 1
        this.c1Opacity = 0
        this.c2Opacity = 0
        this.c3Opacity = 0
        if (p >= 0.5) {
          this.c1Opacity = 1
        }
        if (p >= 0.6) {
          this.c2Opacity = 1
        }
        if (p >= 0.7) {
          this.c3Opacity = 1
        }
      } else {
        this.pyramidDisplay = 'none'
        this.pyramidOpacity = 0
      }
    }
  },
  data: () => {
    return {
      before: null,
      after: null,
      inscreen: null,
      progress: 0,
      pyramidOpacity: 0,
      pyramidDisplay: 'none',
      c1Opacity: 0,
      c2Opacity: 0,
      c3Opacity: 0
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
  min-width: 100vh;
  height: 350vh;
  background-color: #2C3249;
  position: relative;
}

.scene {
  width: 100vw;
  max-width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.scene.init {
  background-color: #2C3249;
  background-image: url(/static/assets/bg_1_1.jpg);
  background-size: cover;
  background-position: center;
}

.text {
  background: -moz-linear-gradient(top, rgba(0,0,0,0.0) 0%, rgba(0,0,0,0.65) 50%, rgba(0,0,0,0) 100%); /* FF3.6-15 */
  background: -webkit-linear-gradient(top, rgba(0,0,0,0.0) 0%, rgba(0,0,0,0.65) 50%, rgba(0,0,0,0) 100%); /* Chrome10-25,Safari5.1-6 */
  background: linear-gradient(to bottom, rgba(0,0,0,0.0) 0%, rgba(0,0,0,0.65) 50%, rgba(0,0,0,0) 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
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

.title2 {
  font-weight: 200;
  font-size: 63px;
  color: #FFFFFF;
  letter-spacing: -1.52px;
  line-height: 85px;
  text-shadow: 6px 2px 9px rgba(0,0,0,0.77);
}

.pyramid {
  position: relative;
  width: 1020px;
  height: 430px;
}

.floor {
  position: absolute;
  width: 1020px;
  height: 430px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: opacity 0.5s;
}

.caption {
  font-weight: 200;
  font-size: 22px;
  color: #FFFFFF;
  letter-spacing: -0.53px;
  line-height: 41px;
  position: absolute;
}

.caption:before {
  content: '';
  display: inline-block;
  width: 220px;
  height: 1px;
  margin: 0.4em;
  background-color: #fff;
  position: absolute;
  top: 33px;
  left: -240px;
}

.c1 {
  left: 740px;
  top: 50px;
  z-index: 10000;
}

.c2 {
  left: 740px;
  top: 190px;
  z-index: 10001;
}

.c3 {
  left: 740px;
  top: 330px;
  z-index: 10002;
}
</style>
