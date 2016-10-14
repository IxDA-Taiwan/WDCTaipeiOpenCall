<template>
  <div v-el:anchor class="session">
    <div class="scene">
      <div class="scene text">
        <img src="/static/assets/icn_questionmark.png" style="display: block; margin: 30px;" />
        <div class="title1">
          {{{ $t('scene11.title') }}}
        </div>
      </div>
    </div>

    <div class="fixed-scene text" v-bind:style="{opacity: recordOpacity, display: display}">
      {{{ $t('scene11.title2') }}}
      <div style="height: 125px;"></div>
    </div>
    <div class="record" v-bind:style="{bottom: controllerBottom + 'px'}">
      <div class="controller">
        <div class="top">
          <div class="left">
            <div>{{{ $t('scene5.record.name') }}}</div>
            <div>{{{ $t('scene5.record.who') }}}</div>
          </div>
          <div class="right">
            {{{ $t('scene5.record.speak') }}}
          </div>
        </div>
        <div class="bottom">

        </div>
      </div>
    </div>

    <div class="scene init">
      <div class="scene text">

      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    entered: function () {
      this.display = 'block'
    },
    left: function () {
      this.recordOpacity = 0
      this.controllerBottom = -200
    },
    scroll: function (p) {
      this.recordOpacity = 0
      this.controllerBottom = -200
      if (p > 0.25) {
        this.recordOpacity = (p < 0.5) ? (p - 0.25) * 4 : 1
      }
      if (p >= 0.5 && p <= 0.75) {
        this.controllerBottom = 0
      }
      if (p > 0.75) {
        this.recordOpacity = 1 - (p - 0.75) * 4
      }
    }
  },
  data: () => {
    return {
      before: null,
      after: null,
      inscreen: null,
      progress: 0,
      recordOpacity: 0,
      controllerBottom: -200,
      display: 'none'
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
  height: 300vh;
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
  background-attachment: fixed;
  height: 200vh;
}

.text {
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

.title1 {
  border-top: 1px solid #fff;
  border-bottom: 1px solid #fff;
}

.title2 {
  font-weight: 200;
  font-size: 63px;
  color: #FFFFFF;
  letter-spacing: -1.52px;
  line-height: 85px;
  text-shadow: 6px 2px 9px rgba(0,0,0,0.77);
}


.record {
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

.record .controller {
  display: flex;
  flex-direction: column;
  color: white;
  padding: 30px 50px;
}

.record .controller .top {
  flex: 1;
  display: flex;
  flex-direction: row;
}

.record .controller .top .left {
  flex: 2;
  font-size: 20px;
  text-align: center;
  justify-content: center;
  align-items: center;
}
.record .controller .top .right {
  flex: 8;
  font-size: 20px;
  text-align: center;
  justify-content: center;
  align-items: center;
}

</style>
