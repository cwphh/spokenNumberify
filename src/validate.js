function validateNumber() {
	try {
		var valid = true;
		var errorTxt;
		var iptVal = parseInt ($('#inputNumber').val());
		if (isNaN(iptVal)){
			valid = false;
			errorTxt = 'This number is invalid';
		}
		if (iptVal>999){
			valid = false;
			errorTxt = 'This number exceeds the maximum 
			of 999';
		}
		if (valid){
			var spokenEq = convertToSpoken (iptVal);
			printOutput (spokenEq, true);
		}else{
			printOutput (errorTxt, false);
			
		}
		console.log (iptVal);
	}catch (err){
		console.log (err);
	}
}