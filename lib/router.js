Router.configure({
	layoutTemplate: 'layout',
	notFoundTemplate: 'layoutNotFound'
});

Router.map(function() {

	this.route('contacts', {
		path: '/',
		data: function() {
			return Contacts.find({ userId : Meteor.user()})._id ;
		}
	});

	this.route('resultsBarSearch', {
		path: '/contacts/search',
	});

	this.route('contactCreate', {
		path: '/contacts/create',
	});

	this.route('contactDetail', {
		path: '/contacts/:_id',
		data: function() {
			return Contacts.findOne(Session.get("selected_contact"));
		}
	});
	
	this.route('contactEdit', {
		path: '/contacts/:_id/edit',
		data: function() {
			return Contacts.findOne(Session.get("selected_contact"));
		}
	});
});