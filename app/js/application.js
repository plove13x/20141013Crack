window.Crack = Ember.Application.create({
	LOG_ACTIVE_GENERATION: true,
	LOG_TRANSITIONS: true
});

Crack.ApplicationAdapter = DS.FirebaseAdapter.extend({
  	firebase: new Firebase("https://crack.firebaseio.com/rooms/"),
	pathForType: function(type) {
    	return "general";
  	}
});



// Handlebars.registerHelper("hash", function(email) {
// var hash = md5(email);
// 	console.log(hash);
// 	return '<img src=\'http://www.gravatar.com/avatar/\' + hash + \'?s=60&d=http://placekitten.com/g/40/50\' />'
// });


// Handlebars.registerHelper("hash", function(email) {
// var hash = md5(email);
// 	console.log(hash);
// 	return hash;
// });


// {{#if this.email}}
// this.avatarUrl.set('http://www.gravatar.com/avatar/' + {{hash this.email}} + '?s=60&d=http://placekitten.com/g/40/50')
// {{else}}
// this.avatarUrl.set('http://www.gravatar.com/avatar/f6bfe421126c91d30029e954e8f1ee26?s=60&d=http://placekitten.com/g/40/50')
// {{/if}}