Template.characters.events({
	"click #save-btn":function (event, template){
		event.preventDefault();
		var characterName = template.find("#character-name").value
		console.log("Yea im saving some shit (By shit I mean: " + characterName + ".) for you bro.");
		
		//OPTION 1
		//empty character object
		var newCharacter = {};
		//add properties
		newCharacter["name"] = characterName;
		
		//OPTION 2
		// {
		// 	"name": characterNamera
		// }

		Characters.insert(newCharacter);
		console.log("From Database BELOW");
		
		//fetch()[0]["name"] 
		console.log(Characters.find({name: characterName}).fetch()[0]["name"]);

	},
	'click .character':function(){
		Router.go("characterProfile", {_id: this._id});
		console.log("fuck bitches, get monkeys" + this._id);
	}
});

Template.characters.helpers({
	'characters':function(){
		return Characters.find();
	}
});

Template.characters.onRendered(function(){
	Session.set('consoleOutput', "Character Roster");

});