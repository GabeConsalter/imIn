const Client = require('ssh2').Client;

const Access = {
	try: (host, { username, password }) => {
		const connection = new Client();

		return new Promise(resolve => {
			connection
				.on('ready', () => resolve({success: true}))
				.on('error', error => resolve({success: false, error}))
				.connect({ host, username, password });
		});
	}
}

module.exports = Access;