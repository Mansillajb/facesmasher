Template.characterProfile.events({
	"click #saveCharacter":function (event, template){

		// Ability Scores
		var strength = template.find("#str-score").value;
		var dexterity = template.find("#dex-score").value;
		var constitution = template.find("#con-score").value;
		var intellect = template.find("#int-score").value;
		var wisdom = template.find("#wis-score").value;
		var charisma = template.find("#cha-score").value;

		//Item Bonus
		var strengthBonus = template.find("#str-bonus").value;
		var dexterityBonus = template.find("#dex-bonus").value;
		var constitutionBonus = template.find("#con-bonus").value;
		var intellectBonus = template.find("#int-bonus").value;
		var wisdomBonus = template.find("#wis-bonus").value;
		var charismaBonus = template.find("#cha-bonus").value;

		//Temp Score
		var strengthTemp = template.find("#str-temp").value;
		var dexterityTemp = template.find("#dex-temp").value;
		var constitutionTemp = template.find("#con-temp").value;
		var intellectTemp = template.find("#int-temp").value;
		var wisdomTemp = template.find("#wis-temp").value;
		var charismaTemp = template.find("#cha-temp").value;

		//BSON object for the database
		var abilities = {
			STR:{
				score:strength,
				bonus:strengthBonus,
				temp:strengthTemp
			},
			DEX:{
				score:dexterity,
				bonus:dexterityBonus,
				temp:dexterityTemp
			}
			CON:{
				score:constitution,
				bonus:constitutionBonus,
				temp:constitutionTemp
			},
			INT:{
				score:intellect,
				bonus:intellectBonus,
				temp:intellectTemp
			},
			WIS:{
				score:wisdom,
				bonus:wisdomBonus,
				temp:wisdomTemp
			},
			CHA:{
				score:charisma,
				bonus:charismaBonus,
				temp:charismaTemp
			}
		};

		
		console.log( "Pushing it real good " + Meteor.user().username );
		Characters.update( this._id, { $set:{ abilities:abilities } } );
		template.find( "#str" ).value="";
	}
});




