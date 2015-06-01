Template.register.events({
	"click #register-btn":function (event, template){
		event.preventDefault();
		var username = template.find("#username").value;
		var password = template.find("#password").value;
		var firstName = template.find("#first-name").value;
		var lastName = template.find("#last-name").value;
		var email = template.find("#email").value;
		
		Accounts.createUser({

			username:username, 
			password:password,
			email:email,
			profile:{
				firstName:firstName,
				lastName:lastName,
			}

		}, function(error, result){
			if(error){
				console.log(error.reason);
			} else {
				console.log("Shit looks mighty safe from here Chief, move along.");
			}
		});

	}
});
