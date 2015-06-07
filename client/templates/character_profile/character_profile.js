Template.characterProfile.events({
	"click #saveCharacter":function (event, template){
		var str = template.find("#str").value
		var strength = {};
		strength.score = str;
		
		console.log(str);
		Characters.update(this._id, {$set:{str:strength}})
		template.find("#str").value="";
	}
});