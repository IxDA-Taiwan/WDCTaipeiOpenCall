<template>
  <div class="navigation">
    <div class="left-side">
      <div class="scroll-container" style="display: block;">
        <div class="scroll" v-bind:class="$t('className')">
          <div class="icon-button" @click="menuHandler()">
            <div>
              <div class="icon-line"></div>
              <div class="icon-line"></div>
              <div class="icon-line"></div>
            </div>
          </div>
          <div class="scroll-hack">
            <div class="scroll-section">{{{ $t('initial.menu.title1') }}}</div>
            <div class="scroll-section">{{{ $t('initial.menu.title2') }}}</div>
            <div class="scroll-section">{{{ $t('initial.menu.title3') }}}</div>
            <div class="scroll-section">{{{ $t('initial.menu.title4') }}}</div>
          </div>
        </div>
      </div>
      <div class="menu-container" v-bind:class="{ 'open': menu.open }">
        <div class="close-button" @click="menuHandler()">
          <img src="/static/assets/btn_close.png" class="normal" />
          <img src="/static/assets/btn_close_press.png" class="press" />
        </div>
        <div class="menu-item">
          <span class="number">01.</span><span class="title">{{{ $t('initial.menu.title1') }}}</span>
        </div>
        <div class="menu-item">
          <span class="number">02.</span><span class="title">{{{ $t('initial.menu.title2') }}}</span>
        </div>
        <div class="menu-item">
          <span class="number">03.</span><span class="title">{{{ $t('initial.menu.title3') }}}</span>
        </div>
        <div class="menu-item">
          <span class="number">04.</span><span class="title">{{{ $t('initial.menu.title4') }}}</span>
        </div>
      </div>
      <div class="progress-container" style="display: none;">
        <span class="percentage">0%</span>
        <div class="progress" style="height: 80vh;"></div>
      </div>
    </div>
    <div class="right-side">
      <div class="social-buttons">
        <div class="element facebook"></div>
        <div class="element twitter"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      menu: {
        open: false
      }
    }
  },
  methods: {
    menuHandler: function () {
      this.menu.open = !this.menu.open
    }
  }
}
</script>

<style lang="scss">
.navigation {
  overflow: hidden;
  position: relative;
  width: 100vw;
  max-width: 100%;
  min-width: 1024px;
  pointer-events: none;

  .left-side {
    z-index: 9999;
    position: fixed;
    left: 0;
    top: 0;
    height: 100vh;
    min-height: 640px;
    width: 470px;
    background: -moz-linear-gradient(left, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0) 100%); /* FF3.6-15 */
    background: -webkit-linear-gradient(left, rgba(0,0,0,0.65) 0%,rgba(0,0,0,0) 100%); /* Chrome10-25,Safari5.1-6 */
    background: linear-gradient(to right, rgba(0,0,0,0.65) 0%,rgba(0,0,0,0) 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
    display: flex;
    align-items: center;

    .scroll-container {
      height: 100vh;
      display: none;
      min-height: 640px;
      position: relative;

      .scroll {
        display:flex;
        position: relative;

        .icon-button {
          background-color: rgba(255,255,255,0.27);
          border-radius: 100%;
          width: 75px;
          height: 75px;
          display: flex;
          justify-content: center;
          align-content: center;
          flex-direction: column;
          cursor: pointer;
          border: 1px solid #979797;
          transition: background-color 0.5s;
          pointer-events: auto;

          &:hover {
            background-color: #fff;
          }

          .icon-line {
            width: 32px;
            height: 2px;
            background-color: #F3BB63;
            margin: 10px auto;
          }
        }

        &.en {
          flex-direction: row-reverse;
          width: 100vh;
          height: 100vh;
          transform: rotate(-90deg);
          padding: 50px 50px 0 0px;

          .icon-button {
            transform: rotate(90deg);
          }

          .scroll-hack {
            display: flex;
            flex-direction: row-reverse;

            &:before {
              display: block;
              content: '';
              height: 1px;
              width: 100%;
              position: absolute;
              background-color: #fff;
              opacity: 0.5;
              top: 37px;
            }

            .scroll-section {
              width: 17vh;
              min-width: 100px;
              border-bottom: 3px solid #fff;
              height: 29px;
              margin: 7px 20px 0 0px;
              color: #fff;
              justify-content: center;
              align-items: center;
              display: flex;
              line-height: 1em;
              font-size: 0.6em;
            }
          }
        }

        &.zhTW {
          flex-direction: column;
          height: 100vh;
          padding: 50px 0 0 50px;

          .scroll-hack {
            &:before {
              display: block;
              content: '';
              width: 1px;
              height: 100%;
              position: absolute;
              background-color: #fff;
              opacity: 0.5;
              left: 37px;
            }

            .scroll-section {
              height: 17vh;
              min-height: 100px;
              border-right: 3px solid #fff;
              width: 29px;
              margin: 20px 0 20px 7px;
              color: #fff;
              justify-content: center;
              align-items: center;
              display: flex;
              line-height: 1em;
            }

          }
        }

        .scroll-hack {
          flex: 1;
          overflow: hidden;
          position: relative;
        }
      }
    }

    .menu-container {
      position: absolute;
      top: 0;
      left: -400px;
      width: 340px;
      background-color: #F3BB63;
      z-index: 10000;
      height: 100vh;
      transition: left 0.5s;
      border-left: 130px solid #E7AB4D;
      box-sizing: border-box;
      pointer-events: auto;

      &.open {
        left: 0px;
      }

      .close-button {
        width: 82px;
        height: 82px;
        margin-top: 50px;
        margin-left: 170px;
        cursor: pointer;
        .normal {
          transition: opacity 0.2s;
          position: absolute;
          opacity: 1;
        }
        .press {
          transition: opacity 0.2s;
          position: absolute;
          opacity: 0;
        }
        &:hover {
          .normal {
            opacity: 0;
          }
          .press {
            opacity: 1;
          }
        }
      }

      .menu-item {
        margin-top: 60px;
        font-size: 1.6em;
        cursor: pointer;

        span.number {
          margin-left: -60px;
        }

        span.title {
          margin-left: 35px;
        }
      }
    }

    .progress-container {
      height: 80vh;
      width: 120px;
      text-align: center;
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
      border-right: 3px solid #fff;

      .percentage {
        display: block;
        font-size: 63px;
        color: #F3BB63;
        letter-spacing: -1.52px;
        transform: rotate(-90deg);
      }

      .progress {
        position: absolute;
        right: -6px;
        bottom: 0px;
        width: 9px;
        background-color: #F3BB63;
        transition: height 0.5s;
        height: 0;
      }
    }
  }

  .right-side {
    z-index: 9999;
    position: fixed;
    right: 0;
    top: 0;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    pointer-events: none;

    .element {
      pointer-events: auto;
      width: 72px;
      height: 72px;
      background: #E36A59;
      opacity: 0.75;
      transition: opacity 1s;
      background-position: center;
      background-repeat: no-repeat;
      cursor: pointer;

      &:hover {
        opacity: 1;
      }

      &.facebook {
        background-image: url(/static/assets/icn_facebook.png);
      }
      &.twitter {
        background-image: url(/static/assets/icn_twitter.png);
      }
    }
  }
}

</style>
