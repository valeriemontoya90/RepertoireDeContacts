Template.searchBar.events({
  'keyup input' : function(event) {
  	if (event.which == 13 || event.keyCode == 13) {
    	event.preventDefault();
    	return false;
  	}
    var text = $("input").val();
    console.log("text:",text);
    Session.set("searchQuery", text);
  }
});