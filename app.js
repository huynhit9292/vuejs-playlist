new Vue({
  el: '#vue-app',
  data: {
    name: 'Shaun',
    job: 'ninja',
    website: 'http://www.theninja.com',
    tag: '<a href="http://www.theninja.com">tag website</a>'
  },
  methods: {
    greet: function(time){
      return 'Good ' + time + this.name;
    }
  }
});
