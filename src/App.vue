<template>
  <div id="app">
    <navigation></navigation>
    <hello></hello>
    <div class="storyboard">
      <storyboard></storyboard>
      <session8></session8>
      <session9></session9>
      <!-- <session10></session10> -->
      <!-- <session11></session11> -->
      <session12></session12>
      <session13></session13>
      <session14></session14>
      <session15></session15>
      <session16></session16>
    </div>
    <wdcfooter></wdcfooter>
  </div>
</template>

<script>
import Hello from './components/Hello'
import Navigation from './components/Navigation'
import Storyboard from './components/Storyboard'
import Session8 from './components/Session8'
import Session9 from './components/Session9'
// import Session10 from './components/Session10'
// import Session11 from './components/Session11'
import Session12 from './components/Session12'
import Session13 from './components/Session13'
import Session14 from './components/Session14'
import Session15 from './components/Session15'
import Session16 from './components/Session16'
import Wdcfooter from './components/Wdcfooter'

export default {
  components: {
    Hello,
    Navigation,
    Storyboard,
    Session8,
    Session9,
    // Session10,
    // Session11,
    Session12,
    Session13,
    Session14,
    Session15,
    Session16,
    Wdcfooter
  }
}
</script>

<style>
@import url('https://cdnjs.cloudflare.com/ajax/libs/normalize/4.2.0/normalize.css');

@import url(http://fonts.googleapis.com/earlyaccess/notosanstc.css);

body, #app {
  width: 100vw;
  max-width: 100%;
  min-width: 1024px;
  font-family: 'Noto Sans TC', sans-serif;
}

.session {
  overflow: hidden;
}
</style>
