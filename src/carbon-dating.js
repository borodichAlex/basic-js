const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;
// MODERN_ACTIVITY / sampleActivity
module.exports = function dateSample(sampleActivity) {
	if (typeof sampleActivity !== 'string'
		|| isNaN(parseFloat(sampleActivity))
		|| sampleActivity <= 0
		|| sampleActivity >= MODERN_ACTIVITY) {
		return false
	}

	let rate = Math.LN2.toFixed(3) / HALF_LIFE_PERIOD;

	return Math.ceil(Math.log((MODERN_ACTIVITY / parseFloat(sampleActivity))) / rate);


};
