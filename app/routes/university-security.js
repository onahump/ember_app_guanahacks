import Route from '@ember/routing/route';

export default Route.extend({
	actions:{
		clickMeToComplain:function(){
			this.transitionTo("complaint")
		},
		clickMeToMap:function(){
			this.transitionTo("complaint")
		}
	}
});
