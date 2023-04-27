const express = require('express');
const path = require('path'); // NEW

const app = express();
const port = process.env.PORT || 3000;
const DIST_DIR = path.join(__dirname, '../build'); // NEW
const HTML_FILE = path.join(DIST_DIR, 'index.html'); // NEW
const mockResponse = {
	foo: 'bar',
	bar: 'foo',
};
app.use(express.static(DIST_DIR)); // NEW
app.get('/api', (req, res) => {
	res.send(mockResponse);
});
app.get('/', (req, res) => {
	res.sendFile(HTML_FILE); // EDIT
});
app.listen(port, function () {
	console.log('App listening on port: ' + port);
});

if (process.env.NODE_ENV === 'development') {
	var livereload = require('livereload');
	var connectLiveReload = require('connect-livereload');

	const liveReloadServer = livereload.createServer();
	liveReloadServer.watch(path.join(__dirname, '../build'));
	liveReloadServer.server.once('connection', () => {
		setTimeout(() => {
			liveReloadServer.refresh('/');
		}, 100);
	});
	app.use(connectLiveReload());
}
