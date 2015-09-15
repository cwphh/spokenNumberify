function validate() {
	try {
		var valid = true;
		var errorTxt;
		var iptVal = parseInt ($('#inputNumber').val());
		if (isNaN(iptVal)){
			valid = false;
			errorTxt = 'Please enter a valid number';
		}
		if (iptVal>999999999999){
			valid = false;
			errorTxt = 'This number exceeds the maximum of 999999999999';
		}
		if (!valid){
			printError (errorTxt);
		}else{
			printEquivalent (convertNumber (iptVal));
		}
	}catch (err){
		console.log (err);
	}
}