const program = require('commander');

program
	.command('hello')
	.description('Hello to users')
	.action(() => {
		console.log('Hello Users!')
	});

program.parse(process.argv);