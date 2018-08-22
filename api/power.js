var rp = require("request-promise-native");


const url = 'http://www.cityofames.net/PowerWatch_GetData.aspx/GetDetails';

class AmesPowerAPI {
	
	static getCurrentState() {
		return rp(url).then(
			function (body) {
				var splitState = body.split('&');

				var state = {};

				splitState.map(function(val) {
					var kvPair = val.split('=');
					state[kvPair[0]] = kvPair[1];
				});

				return state;

			}
		);
	}
}


exports.AmesPowerAPI = AmesPowerAPI;
