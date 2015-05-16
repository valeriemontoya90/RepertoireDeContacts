Template.contactEdit.events({
	'click #submit_contact' : function( event, template ){
		event.preventDefault();
		var $name = template.find( ".name" );
		var $telephone = template.find( ".telephone" );
		var $email = template.find( ".email" );
		Contacts.update(Contacts.findOne(Session.get("selected_contact"))._id, {
			$set: {name: $name.value}
		});
		Contacts.update(Contacts.findOne(Session.get("selected_contact"))._id, {
			$set: {telephone: $telephone.value}
		});
		Contacts.update(Contacts.findOne(Session.get("selected_contact"))._id, {
			$set: {email: $email.value}
		});
		Router.go("/contacts/"+Session.get("selected_contact"));
	}
});