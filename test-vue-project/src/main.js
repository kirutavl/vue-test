// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import myMixin from './mixins/mixin'

Vue.config.productionTip = false

var Component = Vue.extend({
  mixins: [myMixin],
  methods: {
    doSomething: function (event) {
      event.preventDefault()
      this.msg = 'something on licensee is done!'

      return this.msg
    }
  }
})

/* eslint-disable no-new */
new Component({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
