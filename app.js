new Vue({
  el: '#vue-app',
  data: {
    age: 25,
    x:0,
    y:0
  },
  methods: {
    add: function(){
      this.age++;
    },
    subtract: function(){
      this.age--;
    },
    updateXY: function(e){
      this.x = e.offsetX;
      this.y = e.offsetY;
    }
  }
});
