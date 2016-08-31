var vue = require('vue');
var vueresource = require('vue-resource');
vue.use(vueresource);
new vue({
		el:"#getData",
		data:{
			mydata:""
		},
		ready : function(){
			this.getData()
		},
		methods:{
			reverse:function(){
				return this.hello.reverse();
			},
			getData:function(){
				this.$http.get('/dummy.txt').then((response)=>{
					this.mydata = response.text();
				},(response)=>{
					this.mydata = "failed";
				});
			}
		}
	});
