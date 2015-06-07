Template.characters.events({
	"click #save-btn":function (event, template){
		event.preventDefault();
		var characterName = template.find("#character-name").value
		var characterClass = template.find("#character-class").value
		var characterRace = template.find("#character-race").value
		console.log("Yea im saving some shit (By shit I mean: " + characterName + ".) for you bro.");
		
		//OPTION 1
		//empty character object
		var newCharacter = {};
		//add properties
		newCharacter["owner"] = Meteor.userId();
		newCharacter["name"] = characterName;
		newCharacter["race"] = characterRace;
		newCharacter["class"] = characterClass;
		
		//OPTION 2
		// {
		// 	"name": characterNamera
		// }

		Characters.insert(newCharacter);
		template.find("#character-name").value="";
		template.find("#character-class").value="";
		template.find("#character-race").value="";
		template.find("character-name").focus();

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
		//get our id
		var myId = Meteor.userId();

		return Characters.find({ "owner": myId });
	}
});

Template.characters.onRendered(function(){
	Session.set('consoleOutput', "Character Roster");

});