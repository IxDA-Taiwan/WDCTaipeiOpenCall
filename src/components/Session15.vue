<template>
  <div v-el:anchor class="session">
    <div class="scene">
      <div class="content">
          針對臺北區域在地的農民進行資源整合，並以地理位置的便利性幫助臺北在地農產/食材透過數位渠道的推廣新鮮提供給用戶，將本地食材的介紹，農民的故事，農戶的地址清楚的擺在使用者眼前。讓上班族在購買與選擇食材的同時也深入了解自己每天吃下肚的食材來源，並可周末期間親自參與生產，見證這個食材安全的見證過程。同時建立起穩固的安心農產供應練 ，為下一步進行準備。
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
    },
    scroll: function (p) {
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

</style>
