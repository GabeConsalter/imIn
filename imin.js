#!/usr/bin/env node

const program = require('commander'),
	packageJson = require('./package.json');

program
	.version(packageJson.version);

program
	.command('hello')
	.description('Hello to users')
	.action(() => {
		console.log('Hello Users!')
	});

program.parse(process.argv);