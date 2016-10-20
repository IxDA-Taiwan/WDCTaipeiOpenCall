<template>
  <div class="session7" id="s2">
    <div class="title">{{{ $t('scene7.title') }}}</div>
    <div class="attitude">
      <div class="wrap">
        <div class="item" @click="attitudeClick(1)">
          <img class="hover" src="/static/assets/btn_type1_mouseover.png" />
          <img src="/static/assets/btn_type1_rest.png" />
        </div>
        <div class="item" @click="attitudeClick(2)">
          <img class="hover" src="/static/assets/btn_type2_mouseover.png" />
          <img src="/static/assets/btn_type2_rest.png" />
        </div>
        <div class="item" @click="attitudeClick(3)">
          <img class="hover" src="/static/assets/btn_type3_mouseover.png" />
          <img src="/static/assets/btn_type3_rest.png" />
        </div>
        <div class="item" @click="attitudeClick(4)">
          <img class="hover" src="/static/assets/btn_type4_mouseover.png" />
          <img src="/static/assets/btn_type4_rest.png" />
        </div>
      </div>
    </div>
    <div v-el:dialog1 class="scene fixed dialog" v-bind:style="{display: rest1display}">
      <div class="dialogbox">
        <img src="/static/assets/btn_type1_rest.png" />
        <div class="atitle">{{{ $t('scene7.attitude.rest1.title') }}}</div>
        <div class="acontent">{{{ $t('scene7.attitude.rest1.content') }}}</div>
        <div class="aquote">{{{ $t('scene7.attitude.rest1.quote') }}}</div>
        <div class="close" @click="attitudeClick(1)"></div>
      </div>
    </div>
    <div v-el:dialog2 class="scene fixed dialog" v-bind:style="{display: rest2display}">
      <div class="dialogbox">
        <img src="/static/assets/btn_type2_rest.png" />
        <div class="atitle">{{{ $t('scene7.attitude.rest2.title') }}}</div>
        <div class="acontent">{{{ $t('scene7.attitude.rest2.content') }}}</div>
        <div class="aquote">{{{ $t('scene7.attitude.rest2.quote') }}}</div>
        <div class="close" @click="attitudeClick(2)"></div>
      </div>
    </div>
    <div v-el:dialog3 class="scene fixed dialog" v-bind:style="{display: rest3display}">
      <div class="dialogbox">
        <img src="/static/assets/btn_type3_rest.png" />
        <div class="atitle">{{{ $t('scene7.attitude.rest3.title') }}}</div>
        <div class="acontent">{{{ $t('scene7.attitude.rest3.content') }}}</div>
        <div class="aquote">{{{ $t('scene7.attitude.rest3.quote') }}}</div>
        <div class="close" @click="attitudeClick(3)"></div>
      </div>
    </div>
    <div v-el:dialog4 class="scene fixed dialog" v-bind:style="{display: rest4display}">
      <div class="dialogbox">
        <img src="/static/assets/btn_type4_rest.png" />
        <div class="atitle">{{{ $t('scene7.attitude.rest4.title') }}}</div>
        <div class="acontent">{{{ $t('scene7.attitude.rest4.content') }}}</div>
        <div class="aquote">{{{ $t('scene7.attitude.rest4.quote') }}}</div>
        <div class="close" @click="attitudeClick(4)"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      rest1display: 'none',
      rest2display: 'none',
      rest3display: 'none',
      rest4display: 'none'
    }
  },
  methods: {
    attitudeClick: function (item) {
      switch (item) {
        case 1:
          this.rest1display = (this.rest1display === 'flex') ? 'none' : 'flex'
          break
        case 2:
          this.rest2display = (this.rest2display === 'flex') ? 'none' : 'flex'
          break
        case 3:
          this.rest3display = (this.rest3display === 'flex') ? 'none' : 'flex'
          break
        case 4:
          this.rest4display = (this.rest4display === 'flex') ? 'none' : 'flex'
          break
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.fixed {
  position: fixed;
  top: 0;
}

.scene {
  height: 100vh;
  width: 100vw;
  max-width: 100%;
  color: white;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-weight: 200;
  font-size: 63px;
  letter-spacing: -1.52px;
  line-height: 85px;
  text-shadow: 6px 2px 9px rgba(0,0,0,0.77);
}

.text {
  background: -moz-linear-gradient(top, rgba(0,0,0,0.0) 0%, rgba(0,0,0,0.65) 50%, rgba(0,0,0,0) 100%); /* FF3.6-15 */
  background: -webkit-linear-gradient(top, rgba(0,0,0,0.0) 0%, rgba(0,0,0,0.65) 50%, rgba(0,0,0,0) 100%); /* Chrome10-25,Safari5.1-6 */
  background: linear-gradient(to bottom, rgba(0,0,0,0.0) 0%, rgba(0,0,0,0.65) 50%, rgba(0,0,0,0) 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
}

.float {
  position: fixed;
}

.session7 {
  background-color: #F2BD5B;
  width: 100vw;
  max-width: 100%;
  min-width: 1024px;
  height: 100vh;
  border-bottom: 30vh solid #DD7F26;
  box-sizing: border-box;
  position: relative;
}

.session7 .title {
  padding-top: 10vh;
  color: #000;
  text-align: center;
  font-size: 43px;
  line-height: 85px;
}

.session7 .attitude {
  top: 0vh;
  position: absolute;
  width: 100%;
  height: 100vh;
  display: flex;

}

.session7 .attitude .wrap {
  display: flex;
  flex-direction: row;
  margin: 0 auto;
  align-items: center;
  justify-content: center;
}

.session7 .attitude .hover {
  position: absolute;
  opacity: 0;
  transition: opacity 0.5s;
}

.session7 .attitude .item {
  cursor: pointer;
}

.session7 .attitude .item:hover .hover {
  opacity: 1;
}


.session7 .dialog {
  background-color: rgba(0,0,0,0.5);
  z-index: 10000;
  pointer-events: auto;
}

.session7 .dialog .dialogbox {
  background: #F0F0F0;
  box-shadow: 0px 2px 38px 0px rgba(0,0,0,0.50);
  border-radius: 25px;
  width: 926px;
  height: 601px;
  position: relative;
  text-shadow: none;
}

.session7 .dialog .dialogbox img {
  top: -100px;
  left: 50px;
  position: absolute;
}

.session7 .dialog .dialogbox .atitle {
/* 情感聯結: */
  font-family: NotoSansCJKtc-Bold;
  font-size: 43px;
  color: #2C3249;
  letter-spacing: 0px;
  text-align: left;
  padding-left: 400px;
  padding-top: 60px;
}
.session7 .dialog .dialogbox .acontent {
  /* - 享受美味和收穫精神滿足 - 感受到歸: */
  font-weight: 200;
  font-size: 26px;
  color: #2C3249;
  letter-spacing: -0.63px;
  line-height: 45px;
  text-align: left;
  padding-left: 400px;
  padding-top: 20px;
}
.session7 .dialog .dialogbox .aquote {
  /* - 享受美味和收穫精神滿足 - 感受到歸: */
  font-weight: 200;
  font-size: 26px;
  color: #2C3249;
  letter-spacing: -0.63px;
  line-height: 45px;
  text-align: left;
  margin-left: 350px;
  margin-top: 30px;
  padding: 20px 50px;
  background-color: #F2BD5B;
}
.session7 .dialog .dialogbox .close {
  background-image: url(/static/assets/btn_close.png);
  background-position: center;
  background-repeat: no-repeat;
  width: 115px;
  height: 115px;
  position: absolute;
  border-radius: 100%;
  background-color: #F0F0F0;
  top:-25px;
  right:-25px;
  cursor: pointer;
}
</style>
