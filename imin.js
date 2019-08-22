#!/usr/bin/env node
const program = require('commander'),
	packageJson = require('./package.json'),
	Scan = require('./commands/Scan'),
	Access = require('./commands/Access');

program
	.version(packageJson.version);

program
	.command('scan <host> <port>')
	.description('Scan a target to see port\'s status')
	.action((host, port) => {
		console.clear();
		console.log(`Scanning port ${port} in ${host}...`);
		setTimeout(async () => console.log(`Port ${port} is ${await Scan.checkStatus(host, port)}`), 500);
	});

program
	.command('access <host> <dictionaryPath>')
	.description('Try to access host with brute force method using a dictionary json file')
	.action(async (host, dictionary) => {
		console.clear();
		console.log(`Trying to access ${host} with dictionary combinations...`);

		try {
			dictionary = require(dictionary)
		} catch (error) {
			if (error.code === 'MODULE_NOT_FOUND') {
				console.log('Dictionary not found\nAborting');
			}

			process.exit();
		}

		dictionary.forEach(async (phrase, i) => {
			await Access.try(host, phrase)
				.then(success => {
					if (success) {
						console.log(`I'm in!\nAuth:\n\tusername: ${phrase.username}\n\tpassword: ${phrase.password}`)
						process.exit();
					} else if (i === dictionary.length - 1) {
						console.log(`I'm out!\nNone of the combinations worked`);
						process.exit();
					}
				});
		});
	});

program.parse(process.argv);