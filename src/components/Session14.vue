<template>
  <div v-el:anchor class="session">
    <div class="scene" v-bind:style="{display: sceneDisplay, opacity: scene1Opacity}">
        <img src="/static/assets/app_0_logo.png" />
        <h2>
          {{{ $t('scene14.title') }}}
        </h2>
      </div>
    </div>

    <div class="scene" v-bind:style="{display: sceneDisplay, opacity: scene2Opacity}">
      <div class="circle">
        <div class="point1">
          <div class="point">
            <div class="dot">
            </div>
          </div>
        </div>

        <div class="text1">
          1. 資訊接觸
        </div>

        <div class="point2">
          <div class="point">
            <div class="dot">
            </div>
          </div>
        </div>

        <div class="text2">
          2. 情感聯繫
        </div>

        <div class="point3">
          <div class="point">
            <div class="dot">
            </div>
          </div>
        </div>

        <div class="text3">
          3. 意識認同
        </div>

        <div class="point4">
          <div class="point">
            <div class="dot">
            </div>
          </div>
        </div>

        <div class="text4">
          4. 下定決策
        </div>

        <div class="point5">
          <div class="point">
            <div class="dot">
            </div>
          </div>
        </div>

        <div class="text5">
          5. 行動參與
        </div>

        <div class="point6">
          <div class="point">
            <div class="dot">
            </div>
          </div>
        </div>

        <div class="text6">
          6. 長期行為
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    entered: function () {
      this.sceneDisplay = 'flex'
    },
    left: function () {
      this.sceneDisplay = 'none'
    },
    scroll: function (p) {
      console.log(p)
      if (p <= 0.333) {
        this.scene1Opacity = p * 3
        this.scene2Opacity = 0
      } else if (p <= 0.666) {
        this.scene1Opacity = 1
        this.scene2Opacity = p * 3 - 1
      } else {
        this.scene1Opacity = (1 - p) * 3
        this.scene2Opacity = (1 - p) * 3
      }
    }
  },
  data: () => {
    return {
      sceneDisplay: 'none',
      scene1Opacity: 0,
      scene2Opacity: 0
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
  height: 300vh;
  background-color: #2C3249;
}

.scene {
  width: 100vw;
  max-width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

h2 {
  font-size: 28px;
  color: #FFFFFF;
  letter-spacing: -0.68px;
  line-height: 50px;
  text-shadow: 6px 2px 9px rgba(0,0,0,0.77);
  text-align: center;
}

.circle {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 540px;
  height:540px;
  border-radius: 100%;
  border: 3px solid #979797;
}

.point1 {
  position: absolute;
  top: 0px;
  left: 358px;
}

.text1 {
  position: absolute;
  top: 0px;
  left: 408px;
  font-size: 26px;
  color: #FFFFFF;
  letter-spacing: -0.63px;
  line-height: 46px;
}

.point2 {
  position: absolute;
  top: 220px;
  left: 520px;
}

.text2 {
  position: absolute;
  top: 220px;
  left: 570px;
  font-size: 26px;
  color: #FFFFFF;
  letter-spacing: -0.63px;
  line-height: 46px;
  white-space: nowrap;
}

.point3 {
  position: absolute;
  top: 440px;
  left: 445px;
}

.text3 {
  position: absolute;
  top: 440px;
  left: 495px;
  font-size: 26px;
  color: #FFFFFF;
  letter-spacing: -0.63px;
  line-height: 46px;
  white-space: nowrap;
}

.point4 {
  position: absolute;
  top: 500px;
  left: 145px;
}

.text4 {
  position: absolute;
  top: 500px;
  left: 0px;
  font-size: 26px;
  color: #FFFFFF;
  letter-spacing: -0.63px;
  line-height: 46px;
  white-space: nowrap;
}

.point5 {
  position: absolute;
  top: 280px;
  left: -19px;
}

.text5 {
  position: absolute;
  top: 280px;
  left: -159px;
  font-size: 26px;
  color: #FFFFFF;
  letter-spacing: -0.63px;
  line-height: 46px;
  white-space: nowrap;
}


.point6 {
  position: absolute;
  top: 60px;
  left: 56px;
}

.text6 {
  position: absolute;
  top: 60px;
  left: -84px;
  font-size: 26px;
  color: #FFFFFF;
  letter-spacing: -0.63px;
  line-height: 46px;
  white-space: nowrap;
}

.point {
  width: 36px;
  height: 36px;
  border: 2px solid #fff;
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.dot {
  width: 20px;
  height: 20px;
  border-radius: 100%;
  background-color: #fff;
}

</style>
