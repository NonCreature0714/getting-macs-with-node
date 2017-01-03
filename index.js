const fs = require('fs');
var ifs = {
	eth0: String,
	wlan0: String
};

fs.readFile('/sys/class/net/eth0/address', 'utf8', (err, data) => {
	if(err) {
		return console.log(err);
	}
	ifs.eth0 = data;
	process.emit('eth0complete');
});

fs.readFile('/sys/class/net/wlan0/address', 'utf8', (err, data) => {
	if(err) {
		return console.log(err);
	}
	ifs.wlan0 = data;
	process.emit('wlan0complete');
});
//console.log('eth0: ' + ifs.eth0 + ' ; wlan0: ' + ifs.wlan0); 

process.on('eth0complete', () => {
	//console.log('eth0: ' + ifs.eth0);
	process.on('wlan0complete', () => {
		console.log('Eth0: ' + ifs.eth0 + ' ... wlan0: ' + ifs.wlan0);
	});
});
//process.on('wlan0complete', () => {
//	console.log('wlan0: ' + ifs.wlan0);
//});
