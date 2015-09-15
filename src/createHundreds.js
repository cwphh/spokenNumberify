function createHundreds (num) {
	try {
		var ret = '';
		var ones = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
		var tens = ['none', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
		var numStr = num.toString ();
		var num = parseInt(num);
		if (numStr.length === 3){
			if (parseInt(numStr[0]) != 0){
				ret += createOnes(parseInt(numStr[0])) + ' hundred';
			}
			
			if (parseInt(numStr[1]) != 0 || parseInt(numStr[2]) != 0 ){
				ret += ' and ';
				ret += createTens (parseInt(numStr[1]+ numStr[2]));
			}
		}else if (numStr.length == 2){
			ret += createTens (parseInt(numStr[0]+ numStr[1]));
		}else if (numStr.length == 1){
			ret += createTens (parseInt(numStr[0]));
		}
		return ret;
	}catch (err){
		console.log (err);
	}
}