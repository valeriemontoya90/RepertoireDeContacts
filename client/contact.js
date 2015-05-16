Template.contact.events({
  	'click .contact' : function() {
    	Session.set("selected_contact", this._id);
	},
	'click .delete' : function() {
		var choix = confirm("Ce contact sera supprimé");
		if (choix) Contacts.remove(this._id);
		return false;
	}
});