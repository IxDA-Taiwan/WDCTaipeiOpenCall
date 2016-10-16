<template>
  <div v-el:anchor class="session">
    <div class="scene">
      <video id="video1" v-el:video2 loop class="wdcvideo" preload="auto">
        <source src="/static/assets/video2.mp4" />
      </video>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    entered: function () {
      this.$els.video2.play()
    },
    left: function () {
      this.$els.video2.pause()
      this.$els.video2.currentTime = 0
    },
    scroll: function (p) {
      if (p <= 0.5) {
        this.$els.video2.volume = p * 2
      } else {
        this.$els.video2.volume = 1
      }
      console.log(this.$els.video2.volume)
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
  height: 100vh;
  background-color: #2C3249;
}

.scene {
  width: 100vw;
  max-width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
  opacity: 1;
  display: flex;
  align-items: center;
  justify-content: center;
}

.wrap {
  position: relative;
  width: 1024px;
  height: 650px;
  overflow: hidden;
}

.content {
  width: 1000px;
  padding: 20px;
  box-sizing: border-box;
  background: rgba(255,255,255,0.16);
  border: 1px solid #FFFFFF;
  border-radius: 25px;
  font-size: 28px;
  color: #FFFFFF;
  letter-spacing: -0.68px;
  line-height: 50px;
  text-shadow: 6px 2px 9px rgba(0,0,0,0.77);
}

.wdcvideo {
  width: 100%;
  height: 100%;
}
</style>
