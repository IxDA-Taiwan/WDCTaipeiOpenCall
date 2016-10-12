<template>
  <div v-el:anchor class="session">
    <div class="scene" v-bind:style="{display: sceneDisplay, opacity: sceneOpacity}">
      <div class="wrap">
        <div class="title" v-bind:style="{top: titleTop + 'vh'}">
          {{{ $t('scene12.title') }}}
        </div>
        <img class="mom" src="/static/assets/app_01_Cmom.png" v-bind:style="{left: momPosition + 'vw'}">
        <img class="farmer" src="/static/assets/app_02_Cfarmer.png" v-bind:style="{right: farmerPosition + 'vw'}">
        <div class="bg">
          <img src="/static/assets/app_01_bg.png">
        </div>
        <div class="ground"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    entered: function () {
      this.sceneDisplay = 'block'
    },
    left: function () {
      this.sceneDisplay = 'none'
    },
    scroll: function (p) {
      this.sceneOpacity = (p >= 0.33333) ? 1 : p * 3
      this.titleTop = (p >= 0.33333) ? (70 - p * 90) : 40
      if (p <= 0.33333) {
        this.farmerPosition = 0
        this.momPosition = 0
      } else if (p > 0.33333 && p <= 0.66666) {
        this.farmerPosition = (p - 0.33333) * 3 * 30
        this.momPosition = (p - 0.33333) * 3 * 30
      } else if (p > 0.66666) {
        this.farmerPosition = 30
        this.momPosition = 30
        this.sceneOpacity = (1 - p) * 3
      }
    }
  },
  data: () => {
    return {
      before: null,
      after: null,
      inscreen: null,
      progress: 0,
      sceneDisplay: 'none',
      sceneOpacity: 0,
      titleTop: -10,
      farmerPosition: 0,
      momPosition: 0
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
  height: 200vh;
  background-color: #2C3249;
  overflow: hidden;
}

.scene {
  width: 100vw;
  max-width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  opacity: 0;
  overflow: hidden;
}

.wrap {
  position: relative;
  width: 100vw;
  max-width: 100%;
  height: 100vh;
  overflow: hidden;
}

.title {
  font-family: NotoSansCJKtc-DemiLight;
  font-size: 63px;
  color: #FFFFFF;
  letter-spacing: -1.52px;
  line-height: 85px;
  text-shadow: 6px 2px 9px rgba(0,0,0,0.77);
  width: 100vw;
  max-width: 100%;
  text-align: center;
  top: -200px;
  position: absolute;
}

.ground {
  width: 100vw;
  max-width: 100%;
  top: 90vh;
  height: 10vh;
  background-color: #5E816D;
  position: absolute;
  z-index: -2;
}

.mom {
  position: absolute;
  bottom: 5vh;
  z-index: -1;
  left: 30vw;
}

.bg {
  position: absolute;
  bottom: 5vh;
  z-index: -1;
  width: 100%;
  text-align: center;
}

.bg img {
  width: 140px;
}

.farmer {
  position: absolute;
  bottom: 5vh;
  z-index: -1;
  transform: rotateY(180deg);
  right: 30vw;
}
</style>
