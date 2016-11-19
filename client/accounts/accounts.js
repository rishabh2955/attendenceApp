AccountsTemplates.addFields([
	{
		_id:'firstname',
		type:'text',
		required:true,
		displayName:'First Name'
	},
	{
		_id:'profession',
		type:'select',
		required:true,
		displayName: 'Profession',
		select: [
			{
				text:'Instructor',
				value:'instructor'
			},
			{
				text:'Student',
				value:'student'
			},
			{
				text:'Admin',
				value:'admin'
			}
		]
	 }
]);


