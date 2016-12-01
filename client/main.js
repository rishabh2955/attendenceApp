

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

/*#######################################################
############# Create class functionality ################
#######################################################*/
Template.Dashboard.events({
		'click .js-create-class':function(event){
			$('#mymodal').modal('show');
		},
		'submit .js-enter-class':function(event){
			var class_id = event.target.class_id.value;

			if(Class.findOne({'class_id':class_id}) && Meteor.userId())
			{
				console.log(class_id);
				FlowRouter.go('class');
				return false
			}
			return false
		}
});
Template.Createclass.events({
	'submit .js-add-class' : function(event	){
		var class_id , subject;
		class_id = event.target.class_id.value;
		subject  = event.target.subject.value;
		console.log("id: "+class_id+" subject: "+subject);
		if(Meteor.user())
		{
			Class.insert
			({
					class_id:class_id,
					subject:subject,
					createdOn : new Date(),
					username: Meteor.user()._id,
					Enrolled: []
				});
		}

		event.target.class_id.value = "";
		event.target.subject.value = "";

		$('#mymodal').modal('hide');
		return false;
	}
});
/*#######################################################
############# Create class functionality END ############
#######################################################*/

/*#######################################################
############# Seats functionality added  ################
#######################################################*/
Template.seats.helpers({
	seats:function()
	{
		return Seats.find({},{sort:[["col","desc"],["row":"desc"]]});
	},
	isBooked:function(status)
	{
		if(status == "booked")
				return true;
	}
});


Template.seats.events({
	'click .js-set-seat':function(event)
	{
		if((Accounts.user().roles[1] = 'student'))
		{
		var User = Meteor.user();
		if(Seats.findOne({'user' :User}))
			{
				alert("proxies are not allowed");
				console.log(Seats.findOne({'user' :User } ));
			}

		else
			{
		$(event.target).css("background","green");
		var seat_id =  this._id;
		console.log(seat_id);
		Seats.update({_id: seat_id},{$set:{status:"booked",user:User}});
	}
	}
	}

	});



Template.Seats_Admin.helpers({
	seats:function()
	{
		return Seats.find({}, {sort:[["col","asc"],["row":"asc"]]});
	},
	isBooked:function(status)
	{
		if(status == "booked")
				return true;
	}

});
/*#######################################################
############# Create class functionality END ############
#######################################################*/
