
//code for login redirects//////////////////////////////////////
////////////////////////////////////////////////////////////////

	Accounts.onLogin(function(){
			FlowRouter.go('dashboard');
		$('.modal-backdrop').remove();
	});

	Accounts.onLogout(function(){
		FlowRouter.go('home')
	});
//login logout redirects ends //////////////////////////////////
////////////////////////////////////////////////////////////////

//Routing //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
FlowRouter.route('/',{
	name:'home',
	action ()
	{
		if(Meteor.userId())
		{
			FlowRouter.go('Dashboard');
		}
		else {
				BlazeLayout.render('Home');
		}

	}
});

FlowRouter.route('/Dashboard',{
	name:"dashboard",
	action()
	{
		BlazeLayout.render('MainLayout',{
				main : 'Dashboard'
		});
	}
});

FlowRouter.route('/Instructor',{
	name:"Instructor",
	action()
	{
		BlazeLayout.render('MainLayout',{

		});
	}
});


var adminRoutes = FlowRouter.group({
	prefix: '/admin',
	name:'admin'
});

adminRoutes.route('/users',{
	name:"users",
	action()
	{
		BlazeLayout.render('MainLayout',{
			main:'Users'
		});
	}
});
//Routing Ends /////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
