let _input =`# hello
# hello
# hello
# hello
# hello
# hello
# hello
# hello
# hello
# hello
# hello`

var demo = new Vue({
  el: '#editor',
  data: {
    input: _input,
    isfull: true
  },
  filters: {
    marked: marked
  },
  methods: {
    full: function (){
      this.isfull = false;
    },
    small: function (){
      this.isfull = true;
    }
  }
})