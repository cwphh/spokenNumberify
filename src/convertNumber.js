function convertNumber (num) {
	try {
		var ret = '';
		var digits = num.toString().length;
		var numStr = num.toString();
		if (digits <= 3){
			ret += createHundreds (num);
		} else if (digits > 3 && digits < 7){
			var thousands = numStr.substring (0, digits-3);
			ret += createHundreds (thousands) + ' thousand';
			var hundreds = parseInt (numStr.substring (numStr.length -3));
			if (hundreds != 0){
				if (hundreds < 100){
					ret += ' and ';	
				}
				ret += ' ' + createHundreds (hundreds);
			}
		} else if (digits >= 7 && digits < 10){
			var millions = numStr.substring (0, digits-6);
			ret += createHundreds (millions) + ' million';
			var thousands = numStr.substring (1, digits-3);
			if (thousands != 0){
				ret += ' ' + createHundreds (thousands) + ' thousand';
			}
			var hundreds = numStr.substring (4, digits);
			if (hundreds != 0){
				ret += ' ' + createHundreds (hundreds);
			}
		} else if (digits >= 10 && digits <= 12){
			var billions = numStr.substring (0, digits-9);
			ret += createHundreds (billions) + ' billion';
			var millions = numStr.substring (digits, digits-6);
			console.log (millions);
			ret += createHundreds (millions) + ' million';
		}
		ret += '.';
		return ret;
	}catch (err){
		console.log (err);
	}
}