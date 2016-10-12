import Vue from 'vue'
import App from './App'
import VueI18n from 'vue-i18n'
import locales from './locales'
import VueRouter from 'vue-router'
import vueScroll from 'vue-scroll'

Vue.use(vueScroll)
console.log('vuescroll initial')

/* i18n */
Vue.use(VueI18n)
Object.keys(locales).forEach((lang) => {
  Vue.locale(lang, locales[lang])
})

/* VueRouter */
Vue.use(VueRouter)
const router = new VueRouter({
  hashbang: false,
  history: true,
  linkActiveClass: 'active'
})

/* router change language */
const routes = {
  '/': {
    lang: 'zhTW',
    component: Vue.extend({
      template: ''
    })
  },
  '/en': {
    lang: 'en',
    component: Vue.extend({
      template: ''
    })
  }
}
router.map(routes)
router.beforeEach((transition) => {
  if (transition.to.lang) {
    console.log('Language changed ' + transition.to.lang)
    Vue.config.lang = transition.to.lang
  }
  transition.next()
})

router.start(Vue.extend({
  components: {
    App
  },
  methods: {
    onScroll: function (e, p) {
      this.$broadcast('scroll', p)
    }
  }
}), 'body')
