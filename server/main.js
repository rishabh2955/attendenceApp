var mySubmitFunc = function(error, state){
  if (!error) {
    if (state === "signIn") {
      // Successfully logged in
      	if(Roles.userIsInRole(this._id, 'admin'))
			{
				FlowRouter.go('users');
			}
    }
    if (state === "signUp") {
      // Successfully registered
      // ...
    }
  }
};


var postSignUp = function(userId, info){
	console.log(userId);
	console.log(info);
	Roles.addUsersToRoles(userId, ['normal-user', info.profile.profession ]);
}


AccountsTemplates.configure({
	onSubmitHook: mySubmitFunc,
	postSignUpHook: postSignUp
	 
});