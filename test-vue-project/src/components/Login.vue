<template src='./login.html'></template>

// import licLogin from './licensee/login-components'

<script>
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
      this.msg = 'something is done!'

      return this.msg
    }
  }
}
</script>
