<template>
  <div class="footer">
    <div class="footer-container">
      <div class="wrap">
        <div class="group">
          <span class="title">
            執行單位
          </span>
          <img src="/static/assets/logo_continuum.png" style="margin-right: 30px;" />
          <img src="/static/assets/logo_ixda.png" />
        </div>
        <div class="group">
          <span class="title">
            主辦單位
          </span>
          <img src="/static/assets/logo_creative.png" />
        </div>
        <div class="group">
          <span class="title">
            指導單位
          </span>
          <img src="/static/assets/logo_wdc.png" style="margin-right: 30px;"/>
          <img src="/static/assets/logo_gov.png" />
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

.footer-container {
  position: absolute;
  z-index: 99999;
  width:100vw;
  max-width: 100%;
  height: 730px;
  background-color: #333;
  box-shadow: 0px -4px 20px 0px rgba(0,0,0,0.50);
}

.footer {
  position: relative;
  width:100vw;
  max-width: 100%;
  height: 730px;
}

.wrap {
  width: 800px;
  margin: 0 auto;

}

.title {
  font-weight: 200;
  font-size: 22px;
  color: #FFFFFF;
  letter-spacing: -0.53px;
  text-shadow: 6px 2px 9px rgba(0,0,0,0.77);
  line-height: 58px;
  height: 58px;
  display: inline-block;
  border-right: 1px solid #fff;
  width: 200px;
  margin-right: 50px;
}

.group {
  line-height: 126px;
  height: 126px;
  margin: 50px 0;
  vertical-align: middle;
  justify-content: center;
  align-items: center;
}
.group > * {
  vertical-align: middle;
}
</style>
