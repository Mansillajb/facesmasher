Router.configure({
	layoutTemplate:"layout",
	notFoundTemplate: 'notFound'
});

Router.route('/', {
	name:"index"
});

Router.route('/characterProfile/:_id', {
	name:"characterProfile",
	data:function(){
		return Characters.findOne({'_id':this.params._id});
	}
});

Router.route('/register', {
	name:"register"
});

Router.route('/characters', {
	name:"characters"
});

var checkLogin = function () {
	if (Meteor.user()===null ) {
		Router.go('index');
	} else {
		this.next();
	}
};

Router.onBeforeAction(checkLogin, {only: 'characters'});