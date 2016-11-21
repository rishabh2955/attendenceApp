

/*#######################################################
############# Adding Logout functionnality ##############
#######################################################*/
Template.MainNav.events({
	'click .logout': ()=> {
	AccountsTemplates.logout();

	}
});

/*#######################################################
############# Adding Logout functionnality END ##########
#######################################################*/


Template.Users.onCreated(function(){
	this.autorun(()=> {
		this.subscribe('allUsers');
	});
});

Template.Users.helpers({
	user: function(){
		return Meteor.users.find();
	},
	userEmail:function(){
		return this.emails[0].address;
	},
	student:function(){
		return this.profile.profession === 'student';
	}

});
