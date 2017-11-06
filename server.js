const app = require('./app');

app.set( 'port', 3000 );

// start the server for local runs
app.listen(
	app.get('port'),
	() => {
		const port = app.get('port');
		console.log('GraphQL Server Running at http://127.0.0.1:' + port );
	}
);
