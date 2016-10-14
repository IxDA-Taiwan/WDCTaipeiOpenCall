<template>
  <div v-el:anchor class="session">
    <div class="scene" v-bind:style="{display: sceneDisplay, opacity: sceneOpacity}">
      <div class="wrap">
        <div class="title" v-bind:class="app1Title">
          {{{ $t('scene16.app1.title') }}}
        </div>

        <div class="refrigerator" v-bind:class="refrigerator">
          <img src="/static/assets/app_01_refrigerator.png" />
        </div>

        <div class="mom" v-bind:class="mom">
          <img src="/static/assets/app_01_Cmom.png" />
        </div>

        <div class="main" v-bind:class="main">
          <div class="main-wrap">
            <img class="man" src="/static/assets/app_01_Cmain.png" />
            <img class="food" src="/static/assets/app_01_food.png" />
          </div>
        </div>

        <div class="caption1" v-bind:class="app1caption1">
          {{{ $t('scene16.app1.caption') }}}
          <hr/>
          {{{ $t('scene16.app1.content') }}}
        </div>

        <div class="title" v-bind:class="app2Title">
          {{{ $t('scene16.app2.title') }}}
        </div>

        <div class="caption1" v-bind:class="app2caption1">
          {{{ $t('scene16.app2.caption') }}}
        </div>

        <div class="app2content" v-bind:class="app2content">
          <hr/>
          <span class="small">{{{ $t('scene16.app2.content') }}}</span>
        </div>

        <div class="mobile" v-bind:class="mobile">
          <img src="/static/assets/app_01_phone.png" />
        </div>

        <div class="app" v-bind:class="app">
          <img class="app02" src="/static/assets/app_02_app.jpeg" />
          <img class="app03" src="/static/assets/app_03_app.jpeg" />
          <img class="app04" src="/static/assets/app_04_app.jpeg" />
        </div>

        <div class="plant" v-bind:class="plant">
          <img src="/static/assets/app_02_plant.png" />
        </div>

        <div class="farmer" v-bind:class="farmer">
          <img src="/static/assets/app_02_Cfarmer.png" />
        </div>

        <div class="cart" v-bind:class="cart">
          <div class="cart-wrap">
            <img src="/static/assets/app_02_cart.png" />
            <img class="carrots" src="/static/assets/app_02_carrots.png" />
          </div>
        </div>

        <div class="box" v-bind:class="box">
          <img src="/static/assets/app_02_box1.png" />
        </div>

        <div class="title" v-bind:class="app3Title">
          {{{ $t('scene16.app3.title') }}}
        </div>

        <div class="girl" v-bind:class="girl">
          <img src="/static/assets/app_03_Cgirl.png" />
        </div>

        <div class="hotpot" v-bind:class="hotpot">
          <div class="hotpot-wrap">
            <img class="pot" src="/static/assets/app_01_pot.png" />
            <img class="smoke" src="/static/assets/app_01_pot_smoke1.png" />
            <img class="pot-table" src="/static/assets/app_01_pot_table.png" />
          </div>
        </div>

        <div class="caption1" v-bind:class="app3caption1">
          {{{ $t('scene16.app3.caption') }}}
        </div>

        <div class="app3content" v-bind:class="app3content">
          <hr/>
          <span class="small">{{{ $t('scene16.app3.content') }}}</span>
        </div>

        <div class="title" v-bind:class="app4Title">
          {{{ $t('scene16.app4.title') }}}
        </div>

        <div class="caption1" v-bind:class="app4caption1">
          {{{ $t('scene16.app4.caption') }}}
        </div>

        <div class="app3content" v-bind:class="app4content">
          <hr/>
          <span class="small">{{{ $t('scene16.app4.content') }}}</span>
        </div>

        <div class="map" v-bind:class="map">
          <img src="/static/assets/app_04_map.png" style="width: 731px; height: 388px;" />
        </div>

        <div class="mapmark" v-bind:class="mapmark">
          <img src="/static/assets/app_04_mapmark2.png" style="width: 107.5px; height: 152.5px; margin-right: 30px;"/>
          <img src="/static/assets/app_04_mapmark2.png" style="width: 86px; height: 122px; margin-bottom: 30px; margin-right: 30px;"/>
          <img src="/static/assets/app_04_mapmark2.png" style="width: 86px; height: 122px;"/>
        </div>

        <div class="title" v-bind:class="app5Title">
          {{{ $t('scene16.app5.title') }}}
        </div>

        <div class="beer" v-bind:class="app5Title">
          <img src="/static/assets/app_04_beer.png" />
        </div>

        <div class="ghost" v-bind:class="app5Title">
          <img src="/static/assets/app_04_ghost.png" />
        </div>

        <div class="light" v-bind:class="app5Title">
          <div class="light-wrap">
            <img class="light1" src="/static/assets/app_04_light.png" />
            <img class="light2" src="/static/assets/app_04_light.png" />
          </div>
        </div>

        <div class="table" v-bind:class="app5Title">
          <img src="/static/assets/app_04_table.png" />
        </div>

        <div class="caption1" v-bind:class="app5caption1">
          {{{ $t('scene16.app5.caption') }}}
        </div>

        <div class="app3content" v-bind:class="app5caption2">
          <hr />
          {{{ $t('scene16.app5.content') }}}
        </div>

        <div class="store" v-bind:class="app5caption1">
          <img src="/static/assets/app_05_store.png" />
        </div>

        <div class="box2" v-bind:class="app5caption1">
          <img src="/static/assets/app_05_box.png" />
        </div>

        <div class="mom2" v-bind:class="app5caption1">
          <img src="/static/assets/app_01_Cmom.png" />
        </div>
<!--

        <div class="tomato" v-bind:class="tomato">
          <img src="/static/assets/app_03_tomato.png" />
        </div>

        <div class="circle" v-bind:class="circle">
          <img src="/static/assets/app_03_circle.png" />
        </div>

        <div class="questionmark" v-bind:class="questionmark">
          <img src="/static/assets/app_03_questionmark.png" />
        </div>

        <div class="heart" v-bind:class="heart">
          <img src="/static/assets/app_03_heart.png" />
        </div>

        <div class="title" v-bind:class="app4Title">
          {{{ $t('scene13.app4.title') }}}
        </div>

        <div class="caption1" v-bind:class="app4caption1">
          {{{ $t('scene13.app4.caption1') }}}
        </div>


        <div class="caption2" v-bind:class="app4caption2">
          {{{ $t('scene13.app4.caption2') }}}
        </div>

        <div class="beer" v-bind:class="beer">
          <img src="/static/assets/app_04_beer.png" />
        </div>

        <div class="ghost" v-bind:class="ghost">
          <img src="/static/assets/app_04_ghost.png" />
        </div>

        <div class="light" v-bind:class="light">
          <div class="light-wrap">
            <img class="light1" src="/static/assets/app_04_light.png" />
            <img class="light2" src="/static/assets/app_04_light.png" />
          </div>
        </div>

        <div class="table" v-bind:class="table">
          <img src="/static/assets/app_04_table.png" />
        </div>

        <div class="paper" v-bind:class="paper">
          <div class="paper-wrap">
            <img src="/static/assets/app_04_paper.png" />
            <img class="checkbox" src="/static/assets/app_04_checkbox.png" />
          </div>
        </div>

        <div class="title" v-bind:class="app5Title">
          {{{ $t('scene13.app5.title') }}}
        </div>

        <div class="caption1" v-bind:class="app5caption1">
          {{{ $t('scene13.app5.caption1') }}}
        </div>

        <div class="caption2" v-bind:class="app5caption2">
          {{{ $t('scene13.app5.caption2') }}}
        </div>

        <div class="store" v-bind:class="store">
          <img src="/static/assets/app_05_store.png" />
        </div>

        <div class="box2" v-bind:class="box2">
          <img src="/static/assets/app_05_box.png" />
        </div>

        <div class="mom2" v-bind:class="mom2">
          <img src="/static/assets/app_01_Cmom.png" />
        </div> -->

      </div>
      <div class="ground"></div>
      <div class="ground-farmer" v-bind:class="farmer">
        <img src="/static/assets/app_02_ground.png" />
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
      const i = p / 10 * 7
      this.app1Title.entered = (i < 0.175)
      this.sceneOpacity = (i < 0.1) ? (i * 10) : 1
      this.refrigerator.entered = (i >= 0.1 && i < 0.175)
      this.main.entered = (i >= 0.1 && i < 0.175) || (i >= 0.35 && i < 0.425) || (i >= 0.5)
      this.main.food = (i >= 0.35 && i < 0.425)
      this.girl.entered = (i >= 0.125 && i < 0.175)
      this.mom.entered = (i >= 0.125 && i < 0.175) || (i >= 0.375 && i < 0.425)
      this.app1caption1.entered = (i >= 0.125 && i < 0.175)

      this.app1caption1.entered = (i >= 0.125 && i < 0.175)

      this.app2Title.entered = (i >= 0.175 && i < 0.35)
      this.mobile.entered = (i >= 0.175 && i < 0.425)
      this.app.entered = (i >= 0.175 && i < 0.425)
      this.mobile.entered2 = (i >= 0.2 && i < 0.35)
      this.app.entered2 = (i >= 0.2 && i < 0.35)
      this.app2caption1.entered = (i >= 0.2 && i < 0.35)
      this.app2content.entered = (i >= 0.225 && i < 0.35)
      this.main.entered2 = (i >= 0.2 && i < 0.35)
      this.plant.entered = (i >= 0.2 && i < 0.35)
      this.farmer.entered = (i >= 0.2 && i < 0.35)
      this.cart.entered = (i >= 0.225 && i < 0.35)
      this.cart.carrots = (i >= 0.25 && i < 0.35)
      this.cart.go = (i >= 0.275)
      this.box = {
        entered: (i >= 0.2 && i < 0.35),
        incart: (i >= 0.25 && i < 0.35),
        go: (i >= 0.275 && i < 0.35),
        inhand: (i >= 0.275 && i < 0.35)
      }
      this.app3Title.entered = (i >= 0.35 && i < 0.425)
      this.hotpot.entered = (i >= 0.375 && i < 0.425)
      this.app3caption1.entered = (i >= 0.375 && i < 0.425)
      this.app3content.entered = (i >= 0.4 && i < 0.425)

      this.app4Title.entered = (i >= 0.425 && i < 0.5)
      this.app4caption1.entered = (i >= 0.45 && i < 0.5)
      this.mobile.entered3 = (i >= 0.425 && i < 0.5)
      this.app.entered3 = (i >= 0.425 && i < 0.5)
      this.app4content.entered = (i >= 0.475 && i < 0.5)
      this.map.entered = (i >= 0.45 && i < 0.5)
      this.mapmark.entered = (i >= 0.475 && i < 0.5)

      this.app5Title.entered = (i >= 0.5)
      this.app5caption1.entered = (i >= 0.525)
      this.app5caption2.entered = (i >= 0.55)
      // 0.25 手機移動 男出現 草出現 農地出現 農夫出現 一箱蘿蔔出現
      // this.mobile = {
      //   entered: (i >= 0.1 && i < 0.175) || (i >= 0.35 && i < 0.425),
      //   entered2: (i >= 0.175 && i < 0.35)
      // }
      // this.hotpot.entered = (i >= 0.15 && i < 0.175)
      // this.app1caption2.entered = (i >= 0.15 && i < 0.175)
      // this.app3Title.entered = (i >= 0.35 && i < 0.425)
      // this.girl.entered = (i >= 0.35 && i < 0.425)
      // this.tomato = {
      //   entered: (i >= 0.35),
      //   changed: (i >= 0.4),
      //   out: (i >= 0.425)
      // }
      // this.questionmark.entered = (i >= 0.375 && i < 0.4)
      // this.heart.entered = (i >= 0.4 && i < 0.425)
      // this.circle.entered = (i >= 0.375 && i < 0.425)
      // this.circle.run = (i >= 0.4)
      // this.app3caption1.entered = (i >= 0.375 && i < 0.425)
      // this.app3caption2.entered = (i >= 0.4 && i < 0.425)
      //
      // this.beer.entered = (i >= 0.425)
      // this.table.entered = (i >= 0.425)
      // this.app4Title.entered = (i >= 0.425 && i < 0.5)
      // this.light.entered = (i >= 0.425)
      // this.ghost.entered = (i >= 0.425)
      // this.paper = {
      //   entered: (i >= 0.45),
      //   checked: (i >= 0.475),
      //   out: (i >= 0.5)
      // }
      // this.app4caption1.entered = (i >= 0.45 && i < 0.5)
      // this.app4caption2.entered = (i >= 0.475 && i < 0.5)
      //
      // this.app5Title.entered = (i >= 0.5)
      // this.app5caption1.entered = (i >= 0.525)
      // this.app5caption2.entered = (i >= 0.55)
      // this.store.entered = (i >= 0.5)
      // this.mom2.entered = (i >= 0.525)
      // this.box2.entered = (i >= 0.55)
    }
  },
  data: () => {
    return {
      before: null,
      after: null,
      inscreen: null,
      progress: 0,
      sceneDisplay: 'block',
      sceneOpacity: 0,
      app1Title: {
        entered: 0
      },
      mobile: {
        entered: 0,
        entered2: 0,
        entered3: 0
      },
      mom: {
        entered: 0
      },
      app: {
        entered: 0,
        entered2: 0,
        entered3: 0
      },
      refrigerator: {
        entered: 0
      },
      main: {
        entered: 0,
        entered2: 0,
        food: 0
      },
      hotpot: {
        entered: 0
      },
      app1caption1: {
        entered: 0
      },
      app1caption2: {
        entered: 0
      },
      app2content: {
        entered: 0
      },
      app2Title: {
        entered: 0
      },
      plant: {
        entered: 0
      },
      farmer: {
        entered: 0
      },
      box: {
        entered: 0,
        go: 0,
        inhand: 0,
        changed: 0
      },
      cart: {
        entered: 0,
        carrots: 0,
        go: 0
      },
      app2caption1: {
        entered: 0
      },
      app2caption2: {
        entered: 0
      },
      app3Title: {
        entered: 0
      },
      girl: {
        entered: 0
      },
      app3caption1: {
        entered: 0
      },
      app3content: {
        entered: 0
      },
      tomato: {
        entered: 0,
        changed: 0,
        out: 0
      },
      circle: {
        entered: 0,
        run: 0
      },
      questionmark: {
        entered: 0
      },
      heart: {
        entered: 0
      },
      app4Title: {
        entered: 0
      },
      app4caption1: {
        entered: 0
      },
      app4content: {
        entered: 0
      },
      map: {
        entered: 0
      },
      light: {
        entered: 0
      },
      beer: {
        entered: 0
      },
      table: {
        entered: 0
      },
      ghost: {
        entered: 0
      },
      paper: {
        entered: 0,
        checked: 0
      },
      app5Title: {
        entered: 0
      },
      app5caption1: {
        entered: 0
      },
      app5caption2: {
        entered: 0
      },
      store: {
        entered: 0
      },
      box2: {
        entered: 0
      },
      mom2: {
        entered: 0
      },
      mapmark: {
        entered: 0
      }
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

.map {
  bottom: 0px;
  position: absolute;
  z-index: 20;
  left: 450px;
  transition: all 0.5s;
  opacity: 0;
}

.map.entered {
  opacity: 1;
  left: 250px;
}
.map img {
  display: block;
}

.mapmark {
  bottom: 50px;
  position: absolute;
  z-index: 20;
  left: 550px;
  transition: all 0.5s;
  opacity: 0;
}

.mapmark.entered {
  opacity: 1;
  left: 350px;
}

.session {
  width: 100vw;
  max-width: 100%;
  height: 600vh;
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
}

.wrap {
  position: relative;
  width: 1000px;
  height: 100vh;
  margin: 0 auto;
}

.title {
  transition: all 0.5s;
  font-weight: 200;
  font-size: 63px;
  color: #FFFFFF;
  letter-spacing: -1.52px;
  line-height: 70px;
  text-shadow: 6px 2px 9px rgba(0,0,0,0.77);
  text-align: center;
  left: 0px;
  top: 20px;
  width: 440px;
  text-align: right;
  opacity: 0;
  position: absolute;
  z-index: 100;
}

.title.entered {
  opacity: 1;
}

.caption1 {
  transition: all 0.5s;
  font-weight: 200;
  font-size: 22px;
  color: #FFFFFF;
  letter-spacing: -0.53px;
  opacity: 0;
  left: 660px;
  line-height: 41px;
  top: 20px;
  position: absolute;
  z-index: 100;
  width: 480px;
}

.caption2 {
  transition: all 0.5s;
  font-weight: 200;
  font-size: 22px;
  color: #FFFFFF;
  letter-spacing: -0.53px;
  line-height: 41px;
  opacity: 0;
  left: 660px;
  top: 100px;
  position: absolute;
  white-space: nowrap;
  z-index: 100;
}

.caption1.entered {
  opacity: 1;
  left: 460px;
}

.caption2.entered {
  opacity: 1;
  left: 460px;
}

.app2content {
  transition: all 0.5s;
  font-weight: 200;
  color: #FFFFFF;
  letter-spacing: -0.53px;
  opacity: 0;
  left: 460px;
  top: 50px;
  position: absolute;
  z-index: 100;
  width: 480px;
  font-size: 16px;
  line-height: 24px;
  text-shadow: 6px 2px 9px rgba(0,0,0,0.77);
}

.app2content.entered {
  opacity: 1;
}

.app3content {
  transition: all 0.5s;
  font-weight: 200;
  color: #FFFFFF;
  letter-spacing: -0.53px;
  opacity: 0;
  left: 460px;
  top: 100px;
  position: absolute;
  z-index: 100;
  width: 480px;
  font-size: 16px;
  line-height: 24px;
  text-shadow: 6px 2px 9px rgba(0,0,0,0.77);
}

.app3content.entered {
  opacity: 1;
}

.ground {
  width: 100vw;
  max-width: 100%;
  bottom: 0;
  height: 100px;
  background-color: #F3883D;
  position: absolute;
  z-index: -2;
}
.ground-farmer {
  width: 100vw;
  max-width: 100%;
  bottom: 0;
  height: 119px;
  position: absolute;
  z-index: -2;
}

.refrigerator {
  position: absolute;
  bottom: 50px;
  left: 400px;
  transition: all 0.5s;
  opacity: 0;
}

.refrigerator.entered {
  opacity: 1;
}

.mobile.entered {
  opacity: 1;
}

.app {
  position: absolute;
  top: 313px;
  left: 380px;
  transition: all 0.5s;
  opacity: 0;
  z-index: 0;
}

.app img {
  width: 240px;
  display: none;
}

.app.entered {
  opacity: 1;
}

.app.entered .app02 {
  display: block;
}

.app.entered2 {
  opacity: 1;
  left: 670px;
}

.app.entered2 .app03 {
  display: block;
}

.app.entered3 {
  opacity: 1;
  left: 151px;
}

.app.entered3 .app04 {
  display: block;
}

.mobile {
  position: absolute;
  top: 220px;
  left: 329px;
  transition: all 0.5s;
  opacity: 0;
  z-index: 0;
}

.mobile.entered {
  opacity: 1;
}

.mobile.entered2 {
  opacity: 1;
  left: 619px;
}

.mobile.entered3 {
  opacity: 1;
  left: 100px;
}

.hotpot {
  position: absolute;
  bottom: 30px;
  left: 0;
  z-index: 1;
  transition: all 0.5s;
  opacity: 0;
}

.hotpot.entered {
  left: 155px;
  opacity: 1;
}

.hotpot .hotpot-wrap {
  position: relative;
}

.hotpot .hotpot-wrap .pot {
  position: absolute;
  bottom: 118px;
  left: 60px;
}

.hotpot .hotpot-wrap .smoke {
  position: absolute;
  bottom: 210px;
  left: 90px;
  animation-name: smoke;
  animation-duration: 2s;
  animation-iteration-count: infinite;

}

.hotpot .hotpot-wrap .pot-table {
  position: absolute;
  bottom: 0px;
  left: 0px;
}

.mom {
  transition: all 0.5s;
  position: absolute;
  bottom: 30px;
  left: 0;
  z-index: 3;
  opacity: 0;
}

.mom.entered {
  left: 300px;
  opacity: 1;
}

.main {
  transition: all 0.5s;
  position: absolute;
  bottom: 30px;
  right: 0;
  z-index: 20;
  opacity: 0;
}

.main .food {
  display: none;
}

.main.food .food {
  display: block;
}

.main.entered {
  right: 290px;
  opacity: 1;
}

.main.entered2 {
  right: 290px;
  opacity: 1;
}

.main .main-wrap {
  position: relative;
}

.main .main-wrap .food {
  position: absolute;
  top: 25px;
  left:-50px;
}

.plant {
  transition: all 0.5s;
  position: absolute;
  bottom: 80px;
  right: -160px;
  opacity: 0;
}

.plant.entered {
  right: 40px;
  opacity: 1;
}

.farmer {
  transition: all 0.5s;
  position: absolute;
  bottom: 30px;
  left: -100px;
  z-index: 2;
  opacity: 0;
}

.farmer.entered {
  left: 100px;
  opacity: 1;
}

.ground-farmer {
  transition: all 0.5s;
  opacity: 0;
}

.ground-farmer.entered {
  opacity: 1;
}

.box {
  transition: all 0.5s;
  position: absolute;
  bottom: 130px;
  left: -90px;
  z-index: 2;
  opacity: 0;
  z-index: 6;
}

.box.entered {
  opacity: 1;
  left: 110px;
}

.box.go {
  transition: none;
  animation-name: box;
  animation-duration: 2s;
  animation-fill-mode: forwards;
}

.box.inhand {
  bottom: 220px;
  left: 480px;
  opacity: 1;
}

.box.changed {
  bottom: 30px;
  left: 240px;
  opacity: 1;
}

.cart {
  transition: all 0.5s;
  position: absolute;
  bottom: 0px;
  z-index: 5;
  left: -100px;
  opacity: 0;
}

.cart.entered {
  left: 100px;
  opacity: 1;
}

.cart.go {
  transition: none;
  animation-name: cart;
  animation-duration: 2s;
  animation-fill-mode: forwards;
}

.cart .cart-wrap {
  position: relative;
}

.cart .cart-wrap .carrots {
  position: absolute;
  left: -25px;
  top: -45px;
  opacity: 0;
}

.cart.carrots .cart-wrap .carrots {
  transition: all 0.5s;
  opacity: 1;
}

.girl {
  transition: all 0.5s;
  position: absolute;
  bottom: 30px;
  left: 20px;
  opacity: 0;
}

.girl.entered {
  left: 320px;
  opacity: 1;
}

.tomato {
  transition: all 0.5s;
  position: absolute;
  bottom: 30px;
  left: 40px;
  opacity: 0;
  z-index: 5;
}

.tomato.entered {
  left: 240px;
  opacity: 1;
}

.tomato.changed {
  bottom: 220px;
  left: 480px;
}

.tomato.out {
  bottom: 420px;
  opacity: 0;
}

.questionmark {
  position: absolute;
  bottom: 280px;
  left: 300px;
  opacity: 0;
}

.questionmark.entered {
  opacity: 1;
}

.heart {
  position: absolute;
  bottom: 280px;
  left: 300px;
  opacity: 0;
}

.heart.entered {
  opacity: 1;
}

.circle {
  transition: all 0.5s;
  position: absolute;
  bottom: 280px;
  left: 460px;
  opacity: 0;
}

.circle.entered {
  opacity: 1;
}

.circle.run {
  transform: rotateZ(180deg);
}

.beer {
  transition: all 0.5s;
  position: absolute;
  opacity: 0;
  bottom: 10px;
  left: 530px;
  z-index: 6;
}

.beer.entered {
  bottom: 210px;
  opacity: 1;
}

.light {
  transition: all 0.5s;
  position: absolute;
  opacity: 0;
  left: 530px;
  top: -200px;
  z-index: 6;
}

.light .light-wrap {
  position: relative;
}

.light .light1 {
  position: absolute;
  top: -200px;
}

.light .light2 {
  position: absolute;
  top: -250px;
  left: -50px;
}

.light.entered {
  top: 0;
  opacity: 1;
}

.ghost {
  transition: all 0.5s;
  position: absolute;
  opacity: 0;
  bottom: 20px;
  left: 0;
}

.ghost.entered {
  opacity: 1;
  left: 200px;
}

.table {
  transition: all 0.5s;
  position: absolute;
  bottom: 20px;
  left: 500px;
  opacity: 0;
}

.table.entered {
  left: 300px;
  opacity: 1;
}

.paper {
  transition: all 0.5s;
  position: absolute;
  opacity: 0;
  z-index: 9;
  top: 120px;
  left: 600px;
}

.paper-wrap {
  position: relative;
}

.paper .checkbox {
  position: absolute;
  opacity: 0;
  top: 10px;
  left: 80px;
}

.paper.entered {
  opacity: 1;
  top: 320px;
  left: 400px;
}

.paper.out {
  opacity: 0;
  top: 520px;
  left: 200px;
}

.paper.checked .checkbox {
  opacity: 1;
}

.store {
  position: absolute;
  bottom: 20px;
  right: 0px;
  transition: all 0.5s;
  z-index: 5;
  opacity: 0;
  right: -200px;
}

.store.entered {
  opacity: 1;
  right: 0px;
}

.mom2 {
  position: absolute;
  bottom: 80px;
  right: 100px;
  transition: all 0.5s;
  opacity: 0;
  transform: rotateY(180deg);
  right: -100px;
}

.mom2.entered {
  opacity: 1;
  right: 100px;
}

.box2 {
  position: absolute;
  bottom: 0px;
  right: -200px;
  transition: all 0.5s;
  opacity: 0;
  right: 0px;
  z-index: 6;
}

.box2.entered {
  opacity: 1;
  right: 0px;
}

.small {
}


@keyframes smoke {
    0% {bottom: 210px;}
    50% {bottom: 230px;}
}

@keyframes cart {
    0% {left: 110px;}
    25% {left: 110px;}
    50% {left: 600px;}
    100% {left: 2000px;}
}

@keyframes box {
    0% {
      bottom: 130px;
      left: 110px;
    }
    25% {
      bottom: 77px;
      left: 110px;
    }
    50% {
      bottom: 77px;
      left: 600px;
    }
    100% {
      bottom: 220px;
      left: 480px;
  }
}
</style>
