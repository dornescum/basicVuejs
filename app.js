const app = Vue.createApp({
	data() {
		return {
			title: 'just a test',
			btn1: true,
			btn2: false,
			btn3: false
		};
	},
	methods:{
		showBtn1(){
			this.btn1 = true;
			this.btn2 = false;
			this.btn3 = false;
		},
		showBtn2(){
			console.log('2');
			this.btn1 = false;
			this.btn2 = true;
			this.btn3 = false;
		},
		showBtn3(){
			console.log('3');
			this.btn1 = false;
			this.btn2 = false;
			this.btn3 = true;
			console.log('3');
		},
		changeTitle(){
			this.title = 'another test'
			console.log(this.title);
		}
	}
});
app.mount('#app');
