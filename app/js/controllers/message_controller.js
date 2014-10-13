Crack.MessageController = Ember.ObjectController.extend({
	test: 1,

	hash: function() {
		// console.log('Hay');
		var hash = md5(this.get('model.email'));
		// console.log(hash);
		this.model.set('avatarUrl', 'http://www.gravatar.com/avatar/' + hash + '?s=60&d=http://placekitten.com/g/40/50');
		// console.log(this.model); 
		// return '';
		// return 'http://www.gravatar.com/avatar/' + hash + '?s=60&d=http://placekitten.com/g/40/50';
		}.property('model.avatarUrl'),

	// console: function() {
	// 	console.log('hay');
	// }.property('model.poop')			TAKE OFF THE .property suffix and the console.log won't run, proving that a controller property that is a function is incomplete with mention of what property it modifies...

});


	// hash: function() {
	// 	var hash = md5(this.get('model.email'));
	// 	return hash;
	// }.property('model.hash')
