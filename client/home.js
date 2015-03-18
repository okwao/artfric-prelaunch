Template.home.events({
	'submit form': function(event){
		event.preventDefault();
		var email = event.target.email.value;
		console.log(email)
		document.getElementById("emailForm").reset();

		Emails.insert({address: email});

		Router.go('/success')
	}
})