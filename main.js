
const app = Vue.createApp({
  el: '#app',
  data(){
    return {
      hoge: 10,
      isAvailable: false,
      url: 'https://murasa.net'
    }
  }
})
// こいつなんか読み込まれん
var isAvailable = true

const vm = app.mount('#app')
