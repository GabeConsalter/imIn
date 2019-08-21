#!/usr/bin/env node
const program = require('commander'),
	packageJson = require('./package.json'),
	Scan = require('./commands/Scan');

program
	.version(packageJson.version);

program
	.command('scan <host> <port>')
	.description('Scan a target to see port\'s status')
	.action(async (host, port) => {
		console.log(`Port ${port} is ${await Scan.checkStatus(host, port)}`);
	});

program.parse(process.argv);