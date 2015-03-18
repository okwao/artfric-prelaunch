Meteor.methods({
	emailer: function (to, from, subject, text) {

		this.unblock();

		console.log(to, from, subject, text)

		Email.send({
			to: to,
			from: from,
			subject: subject,
			text: text
		});
	}
});