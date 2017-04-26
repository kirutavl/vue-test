// import Login from '../login-component'

module.exports = {
  created: function () {
    this.mininMethod()
  },
  methods: {
    mininMethod: function () {
      console.log('hello from mixin!')
    }
  }
}
