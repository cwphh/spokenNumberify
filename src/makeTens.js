function makeTens(num) {
	try {

		var ret;
		var ones = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
		var tens = ['none', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
		var numStr = num.toString ();
		var num = parseInt(num);

		if (num < 10){
			ret = ones [num];
		}else if (num === 10){
			ret = tens [1];
		}else if (num > 10 && num < 20){
			switch (num) {
			    case 11:
			        ret = "eleven";
			        break;
			    case 12:
			        ret = "twelve";
			        break;
			    case 13:
			        ret = "thirteen";
			        break;
			    case 14:
			        ret = "fourteen";
			        break;
			    case 15:
			        ret = "fifteen";
			        break;
			    case 16:
			        ret = "sixteen";
			        break;
			    case 17:
			        ret = "seventeen";
			        break;
			    case 18:
			        ret = "eighteen";
			        break;
			    case 19:
			        ret = "nineteen";
			        break;
			}
		}else{
			if (parseInt(numStr[1]) === 0){
				ret = tens [parseInt(numStr[0])];
			}else{
				ret = tens [parseInt(numStr[0])] + ' ' + ones [parseInt(numStr[1])];
			}
			
		}

		return ret;
	}catch (err){
		console.log (err);
	}
}