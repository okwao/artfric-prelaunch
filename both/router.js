Router.configure({
	layoutTemplate: 'layout'
});

Router.route('/', function(){
	this.render('home');
	name: 'home'
});

Router.route('/success', function(){
	this.render('success');
	name: 'success'
});