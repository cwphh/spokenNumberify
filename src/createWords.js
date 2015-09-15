function createWords (num) {
	try {
		var ret = 'oops, can\'t work out ' + num;
		var numStr = num.toString ();
		var ones = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
		
		ret = 'num digits ' + numStr.length;

		if (numStr.length === 6){
			ret = ones [parseInt (numStr[0])] + ' hundred';
			if (parseInt (numStr[1]) != 0 || parseInt (numStr[2]) != 0){
				ret += ' and ' + makeTens (parseInt(numStr[1]+numStr[2]));
			}
			ret += ' thousand';
			if (parseInt (numStr[3]) != 0){
				ret += ' ' + ones [parseInt (numStr[3])] + ' hundred';
			}
			if (parseInt (numStr[4]) != 0){
				ret += ' and ' + makeTens (parseInt(numStr[4]+numStr[5]));
			}
		}

			
		if (numStr.length === 5){
			if (parseInt (numStr[2]) === 0){
				ret = makeTens (parseInt(numStr[0]+numStr[1])) + ' thousand and ' + makeTens (numStr.substr(numStr.length - 2));
			}else{
				ret = makeTens (parseInt(numStr[0]+numStr[1])) + ' thousand ' + ones [parseInt (numStr[2])] + ' hundred and ' + makeTens (numStr.substr(numStr.length - 2));	
			}
		}
		
		if (numStr.length === 4){
			ret = ones [parseInt (numStr[0])] + ' thousand';
			

			if (parseInt (numStr[1]) === 0){
				ret += ' and ' + makeTens (numStr.substr(numStr.length - 2));
			}else{
				ret += ones [parseInt (numStr[1])] + ' hundred and ' + makeTens (numStr.substr(numStr.length - 2));
			}
		}

		if (numStr.length === 3){
			ret = ones [parseInt (numStr[0])] + ' hundred';
			if (parseInt (numStr[1]) != 0 || parseInt (numStr[2]) != 0){
				ret += ' and ' + makeTens (numStr.substr(numStr.length - 2));
			}
		}
		if (numStr.length < 3){
			ret = makeTens (num);
		}
		ret += '.';
		return ret;
	}catch (err){
		console.log (err);
	}
}