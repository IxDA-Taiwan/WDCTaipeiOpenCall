<template>
  <div id="welcome" v-el:anchor class="welcome">
      <video id="welcomevideo" v-el:video autoplay loop muted class="welcome">
        <source src="/static/assets/wdc_Smile_1080.mp4" />
      </video>
  </div>
</template>

<script>
export default {
  methods: {
    entered: function () {
      document.getElementById('welcomevideo').play()
    },
    left: function () {
      document.getElementById('welcomevideo').pause()
    },
    scroll: function (p) {
    }
  },
  data: () => {
    return {
      before: null,
      after: null,
      inscreen: null,
      progress: 0
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

div.welcome {
  height: 100vh;
  min-height: 640px;
  /*background-image: url(/static/assets/wdc_Smile.jpg);*/
  background-size: cover;
  background-position: center;
}

video.welcome {
    height: 100%;
    width: 177.77777778vh; /* 100 * 16 / 9 */
    min-width: 100%;
    min-height: 56.25vw; /* 100 * 9 / 16 */
    position: fixed;
    left: 50%; /* % of surrounding element */
    top: 50%;
    transform: translate(-50%, -50%); /* % of current element */
    z-index: -1;
    background-image: url(/static/assets/wdc_Smile.jpg);
    background-size: cover;
}
</style>
