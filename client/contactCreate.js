Template.contactCreate.events({
	'click #submit_contact' : function ( event, template ){
		event.preventDefault();
		var $name = template.find( ".name" );
		var $telephone = template.find( ".telephone" );
		var $email = template.find( ".email" );
		if ( $name.value !== "" && $telephone.value !== "" && $email.value !== "" ){
			Contacts.insert( {
				userId : Meteor.user()._id,
				name : $name.value, 
				telephone : $telephone.value, 
				email : $email.value
			});
			Router.go("/");
		} else {
			alert("faut remplir correctement");
		}		
	}
});