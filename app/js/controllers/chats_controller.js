Crack.ChatsController = Ember.ArrayController.extend({
  actions: {
    createPost: function(){

     var post = this.store.createRecord('chat', {
       username: this.get('newUsername'),
       message: this.get('newMessage'),
       timestamp: new Date(),
     });
     this.set('newUsername', '');
     this.set('newMessage', '');

     post.save();
    }
  },
});