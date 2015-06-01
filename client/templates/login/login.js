Template.login.events({
	"click #login-btn":function (event, template){
		event.preventDefault();
		var username = template.find("#username").value;
		var password = template.find("#password").value;
		
		Meteor.loginWithPassword(username, password, function(error){
         	if (error){
              	console.log(error.reason);
         	}else{
         		$('.dropdown-menu').hide();
				Router.go('characters');
         	}
        });
	}
});
