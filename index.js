const path = require('path');
const fs = require('fs');
var ifs = {
	eth0: '',
	wlan0: ''
};
/*
fs.open('/sys/class/net/eth0/addess', 'r', (err, fd) => {
	if(err){
		if(err.code === 'ENOENT') {
			console.error('no address there');
			return;
		} else {
			throw err;
		}
	}
	console.log('Contents of the file are: ' + fd);
});
*/
