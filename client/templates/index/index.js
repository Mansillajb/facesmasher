Template.index.events({
	"click #login-call":function (event, template){
		event.preventDefault();
		console.log("things happen");
		//$('.dropdown-toggle').trigger('click');
		//$('.dropdown-toggle').trigger('click');
		$('.dropdown-open').show();
		$('.dropdown-menu').show();
		$('.dropdown-toggle').trigger('click');
		// event.stopPropagation();
		// //$('.dropdown-toggle').dropdown('toggle');



	}
});
