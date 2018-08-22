var api = require('./api/power.js');

api.AmesPowerAPI.getCurrentState().then(function (result) {
	console.log(JSON.stringify(result));
}
);

