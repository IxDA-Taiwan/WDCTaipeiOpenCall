<template>
  <div class="session">
    <div class="vertical-titie">
      <div class="title">
        {{{ $t('scene8.verticalTitle2') }}}
      </div>
      <div class="title">
        {{{ $t('scene8.verticalTitle1') }}}
      </div>
    </div>
    <div class="bowl">
      <img src="/static/assets/bg_bowl.png" />
    </div>
    <div class="line">
      <div class="wrap">
        <div class="block">
          <div class="title1">
            {{{ $t('scene8.title1') }}}
          </div>
          <hr />
          <div class="title3">
            {{{ $t('scene8.content1') }}}
          </div>
        </div>
        <div class="block">
          <div class="title2">
            {{{ $t('scene8.title2') }}}
          </div>
          <hr />
          <div class="title4">
            {{{ $t('scene8.content2') }}}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.session {
  width: 100vw;
  max-width: 100%;
  min-width: 1024px;
  height: 1400px;
  background-color: #2C3249;
}

.vertical-titie {
  margin: 0 auto;
  width: 200px;
  display: flex;
  flex-direction: row;
  font-family: NotoSansCJKtc-Bold;
  font-size: 63px;
  color: #FFFFFF;
  letter-spacing: -1.52px;
  line-height: 68px;
  padding-top: 120px;
  height: 400px;
}
.vertical-titie .title {
  margin: 10px;
}

.bowl {
  position: absolute;
  width: 100vw;
  max-width: 100%;
  height: 50px;
  z-index: 10;
}

.bowl img {
  display: block;
  margin: 0 auto;
}

.line {
  padding-top: 10px;
  height: 500px;
  width: 1000px;
  margin: 0 auto;
}

.line .wrap {
  display: flex;
  flex-direction: row;
  margin: 240px auto;
  width: 1000px;
}

.line .wrap .block {
  flex: 1;
  padding: 50px;
  font-family: NotoSansCJKtc-DemiLight;
  font-size: 32px;
  color: #FFFFFF;
  letter-spacing: -0.77px;
  line-height: 55px;
  text-shadow: 6px 2px 9px rgba(0,0,0,0.77);
}

.line .wrap .block .title1 {
  text-align: right;
}

.line .wrap .block .title3 {
font-family: .PingFangTC-Light;
font-size: 22px;
color: #FFFFFF;
letter-spacing: -0.53px;
line-height: 41px;
text-align: right;
}

.line .wrap .block .title4 {
font-family: .PingFangTC-Light;
font-size: 22px;
color: #FFFFFF;
letter-spacing: -0.53px;
line-height: 41px;
}

.line:before {
  display: block;
  content: '';
  width: 4px;
  height: 800px;
  position: absolute;
  background-color: #F3BB63;
  left: 50%;
}

</style>
