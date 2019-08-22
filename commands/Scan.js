const net = require('net');

const Scan = {
	checkStatus: (host, port) => {
		return new Promise(resolve => {
			const socket = new net.Socket();

			socket.setTimeout(20000);

			socket.once('error', exception => {
				socket.destroy();
				resolve(`closed - ${exception.code}`);
			});

			socket.once('timeout', () => {
				socket.destroy();
				resolve('closed - TIMEOUT');
			});

			socket.connect(port, host, () => {
				socket.end();
				resolve('open');
			});
		});
	}
}

module.exports = Scan;