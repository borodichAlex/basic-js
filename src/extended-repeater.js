module.exports = function repeater(str, options) {

	function repeatSub(string, times, separator, defaultSeparator, addition) {
		let result = '';
		if (times === undefined) times = 1;

		for (let i = 0; i <= times - 1; i++) {
			let defaultStr = string + '';

			if (addition !== undefined) {
				defaultStr += repeatSub(addition, options.additionRepeatTimes, options.additionSeparator, '|')
			}

			result += defaultStr;
			if (i < times - 1) result += separator || defaultSeparator;
		}
		return result;
	}

	return repeatSub(str, options.repeatTimes, options.separator, '+', options.addition);

};
