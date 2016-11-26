


var postSignUp = function(userId, info){
	console.log(userId);
	console.log(info);
	Roles.addUsersToRoles(userId, ['normal-user', info.profile.profession ]);
}


AccountsTemplates.configure({

	postSignUpHook: postSignUp

});


import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
  if(Seats.find().count() == 0)
	  {
		  for(var j = 10  ; j >= 1 ; j--)
			  {
				  for(var i=65 ; i < 75 ; i++)
					  {
									Seats.insert({
										row:String.fromCharCode(i),
										col: j,
										status: "Available",
										user: null
									});


					  }
			  }
	  }
});
