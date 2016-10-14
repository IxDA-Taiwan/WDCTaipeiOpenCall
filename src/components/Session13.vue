<template>
  <div v-el:anchor class="session">
    <div class="scene" v-bind:style="{display: sceneDisplay, opacity: sceneOpacity}">
      <div class="wrap">
        <div class="arrow1">
          <img src="/static/assets/app_arrow01.png" />
        </div>
        <div class="arrow arrow2" v-bind:style="{opacity: group1Opacity}">
          <img class="arrow-img" src="/static/assets/app_arrow02.png" />
          <div class="text">回朔</div>
        </div>
        <div class="arrow arrow3" v-bind:style="{opacity: group2Opacity}">
          <img class="arrow-img" src="/static/assets/app_arrow02.png" />
          <div class="text">回朔</div>
        </div>
        <div class="arrow arrow4" v-bind:style="{opacity: group2Opacity}">
          <img class="arrow-img" src="/static/assets/app_arrow02.png" />
          <div class="text">回朔</div>
        </div>

        <div class="circle1">

        </div>
        <div class="text1">
          現況
        </div>
        <div class="circle2" v-bind:style="{opacity: group2Opacity}">
          <div class="text">
            1.0
          </div>
        </div>
        <div class="text2" v-bind:style="{opacity: group2Opacity}">
          在地農產電商平台
        </div>
        <div class="circle3" v-bind:style="{opacity: group1Opacity}">
          <div class="text">
            2.0
          </div>
        </div>
        <div class="text3" v-bind:style="{opacity: group1Opacity}">
          安心食材供應體系
        </div>
        <div class="circle4">
          <div class="circle5">
            <div class="text">
              無憂飲食<br/>
              方案
            </div>
          </div>
        </div>
        <div class="content">
          若將無憂的飲食選擇放置在長期目標燈塔的位置，第一階段我們期望透過台北在地農產電商平台拓展台北人對食安意識的認知，第二階段將安心食材透過供應體系將安心選擇推送到社會各個角落。
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
      if (p <= 0.25) {
        this.sceneOpacity = p * 4
        this.group1Opacity = 0
        this.group2Opacity = 0
      } else if (p <= 0.5) {
        this.sceneOpacity = 1
        this.group1Opacity = (p - 0.25) * 4
        this.group2Opacity = 0
      } else if (p <= 0.75) {
        this.sceneOpacity = 1
        this.group1Opacity = 1
        this.group2Opacity = (p - 0.5) * 4
      } else {
        this.sceneOpacity = (1 - p) * 4
        this.group1Opacity = 1
        this.group1Opacity = 1
      }
    }
  },
  data: () => {
    return {
      sceneDisplay: 'none',
      sceneOpacity: 0,
      group1Opacity: 0,
      group2Opacity: 0
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
  opacity: 0;
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

.circle1 {
  width: 120px;
  height: 120px;
  border-radius: 100%;
  background: #F3BB63;
  position: absolute;
  top: 200px;
  left: 0px;
}

.circle2 {
  width: 148px;
  height: 148px;
  border-radius: 100%;
  background: #F3BB63;
  position: absolute;
  top: 186px;
  left: 260px;
}
.circle2 .text {
 display: flex;
 align-items: center;
 justify-content: center;
 font-size: 31px;
 color: #FFFFFF;
 letter-spacing: -0.75px;
 line-height: 50px;
 width: 148px;
 height: 148px;
 text-align: center;
}

.circle3 {
  width: 168px;
  height: 168px;
  border-radius: 100%;
  background: #F3BB63;
  position: absolute;
  top: 176px;
  left: 520px;
}

.circle3 .text {
 display: flex;
 align-items: center;
 justify-content: center;
 font-size: 31px;
 color: #FFFFFF;
 letter-spacing: -0.75px;
 line-height: 50px;
 width: 168px;
 height: 168px;
 text-align: center;
}

.circle4 {
  width: 210px;
  height: 210px;
  border-radius: 100%;
  background: #F3BB63;
  position: absolute;
  top: 155px;
  left: 814px;
}

.circle5 {
  width: 190px;
  height: 190px;
  border-radius: 100%;
  background: #F3BB63;
  border: 7px solid #2C3249;
  display: inline-block;
  margin: 3px;
}

.circle5 .text {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 31px;
  color: #FFFFFF;
  letter-spacing: -0.75px;
  line-height: 50px;
  width: 190px;
  height: 190px;
  text-align: center;
}

.text3, .text2 {
  font-size: 31px;
  color: #F3BB63;
  letter-spacing: -0.75px;
  line-height: 50px;
}

.text1 {
  position: absolute;
  top: 380px;
  left: 30px;
  font-size: 31px;
  color: #D8D8D8;
  letter-spacing: -0.75px;
  line-height: 50px;
}

.text2 {
  position: absolute;
  top: 380px;
  left: 210px;
}

.text3 {
  position: absolute;
  top: 380px;
  left: 480px;
}

.arrow1 {
  position: absolute;
  top: 10px;
  left:60px;
}

.arrow {
  font-size: 31px;
  color: #FFFFFF;
  letter-spacing: -0.75px;
  line-height: 50px;
  text-align: center;
}

.arrow-img {
  width: 122px;
}

.arrow2 {
  position: absolute;
  top: 160px;
  left: 690px;
}

.arrow3 {
  position: absolute;
  top: 160px;
  left: 400px;
}

.arrow4 {
  position: absolute;
  top: 160px;
  left: 130px;
}

.title {
  font-weight: 200;
  font-size: 63px;
  color: #FFFFFF;
  letter-spacing: -1.52px;
  line-height: 85px;
  text-shadow: 6px 2px 9px rgba(0,0,0,0.77);
  width: 100vw;
  max-width: 100%;
  text-align: center;
  position: absolute;
}

.content {
  width: 100%;
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
  position: absolute;
  top: 450px;
}

</style>
