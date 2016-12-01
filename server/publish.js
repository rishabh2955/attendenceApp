Meteor.publish('allUsers', function(){
	if(Roles.userIsInRole(this.userId, 'instructor'))
	return Meteor.users.find({});
});