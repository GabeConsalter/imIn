#!/usr/bin/env node

const program = require('commander'),
	packageJson = require('./package.json');

program
	.version(packageJson.version);

program.parse(process.argv);