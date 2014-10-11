Crack.Router.map(function() {
	this.route('login', { path: '/'});
	this.resource('chats');
	// // NO);	, function() {
	// // 	this.route("room", {path : ':room_id'});
 //    });
});


Crack.ApplicationRoute = Ember.Route.extend({
  model: function() {
    return this.store.find('chat');
  }
});