Crack.Router.map(function() {
	this.route('login', { path: '/'});
	this.resource('rooms', function() {
		this.route('chat');
	});
	// // NO);	, function() {
	// // 	this.route("room", {path : ':room_id'});
 //    });
});


Crack.ApplicationRoute = Ember.Route.extend({
	model: function() {
    	// return this.store.find('message');
  	}
});

Crack.RoomsRoute = Ember.Route.extend({
	model: function() {
    	// return this.store.find('message');	REPLACE WITH ROOMS!
  	}
});

Crack.RoomsChatRoute = Ember.Route.extend({
	model: function() {
    	return this.store.find('message');
  	}
});