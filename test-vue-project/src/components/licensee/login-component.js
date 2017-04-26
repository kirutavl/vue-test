export default {
  name: 'login',
  data () {
    return {
      msg: 'Welcome to Login'
    }
  },
  methods: {
    doSomething: function (event) {
      event.preventDefault()
      this.msg = 'something on licensee is done!'

      return this.msg
    }
  }
}
