getContacts=function() {
  var text = Session.get("searchQuery")?Session.get("searchQuery"):""; 
  res=Contacts.find(
        {$and: [
          {userId : Meteor.user()._id},
          {name: {$regex: ".*"+text+".*", $options: 'i'}}
        ]}, 
        {sort: {name: 1}}
      );
  return res;
}
Template.contacts.helpers({
  isDirectoryEmpty : function() {
    if (Contacts.find({userId : Meteor.user()._id}).count() === 0) {
      return true;
    }
    return false;
  },
  contacts : function(){
    return getContacts();
  }
});

Template.contacts.events({
  'click .addContact' : function() {
    Router.go('contactCreate');
  }
});