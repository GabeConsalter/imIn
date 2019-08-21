#!/usr/bin/env node
const program = require('commander'),
	packageJson = require('./package.json'),
	Scan = require('./commands/Scan');

program
	.version(packageJson.version);

program
	.command('scan <targetIP> <port>')
	.description('Scan a target to see port\'s status')
	.action(async (targetIP, port) => {
		console.log(`Port ${port} is ${await Scan.checkStatus(targetIP, port)}`);
	});

program.parse(process.argv);