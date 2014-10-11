Crack.Router.map(function() {
	this.resource('chats', { path: '/'});
});


Crack.ApplicationRoute = Ember.Route.extend({
  model: function() {
    return this.store.find('chat');
  }
});