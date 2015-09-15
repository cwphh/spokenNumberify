function validate() {
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
			errorTxt = 'This number exceeds the maximum of 999';
		}
		if (!valid){
			printError (errorTxt);
		}else{
			printEquivalent ('all good');
		}
	}catch (err){
		console.log (err);
	}
}