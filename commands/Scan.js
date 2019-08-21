const net = require('net');

const Scan = {
	checkStatus: (targetIP, port) => {
		console.log(`Scanning port ${port} in ${targetIP}...`);
		
		return new Promise(resolve => {
			const socket = new net.Socket();

			socket.setTimeout(5000);

			socket.once('error', exception => {
				socket.destroy();
				resolve(`closed - ${exception.code}`);
			});

			socket.once('timeout', () => {
				socket.destroy();
				resolve('closed - TIMEOUT');
			});

			socket.connect(port, targetIP, () => {
				socket.end();
				resolve('open');
			});
		});
	}
}

module.exports = Scan;