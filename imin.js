#!/usr/bin/env node

const program = require('commander');

program
	.command('version')
	.description('Hello to users')
	.action(() => {
		console.log('Hello Users!')
	});

program.parse(process.argv);