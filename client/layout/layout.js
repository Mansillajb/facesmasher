Template.layout.helpers({
	'toggleLogin':function(){
		return Session.get('loginTemplate');
	},
	'toggleRegister':function(){
		return Session.get('registerTemplate');
	},
	'consoleLog':function(){
		return Session.get('consoleOutput');
	}
});


Template.layout.events({
	'click #regDisplay':function(event, template){
		event.preventDefault();
		console.log("Rendering Registration Template");
		event.stopPropagation();
		Session.set('loginTemplate', false);
		Session.set('registerTemplate', true);
	},

	'click #logDisplay':function(event, template){
		event.preventDefault();
		event.stopPropagation();
		console.log("Rendering Login Template");
		Session.set('registerTemplate', false);
		Session.set('loginTemplate', true);
	}
});

Template.layout.events({
	"click #logout-btn":function (event, template){
	event.preventDefault();
	Meteor.logout();
	console.log("Yea you are nobody to me now Mr. ");
	console.log(Meteor.user());	
	}
});

Template.layout.onRendered(function(){
	Session.set('loginTemplate', true);
	Session.set('registerTemplate', false);

});

