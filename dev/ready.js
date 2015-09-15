
$( document ).ready(function() {
	try {
		$('#inputNumber').focus ();	
	    $('#inputNumber').keyup(function() {
		  validateNumber(); 
		});
	}catch (err){
		console.log (err);
	}
});

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
			errorTxt = 'This number exceeds the maximum of 999';
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

function convertToSpoken (iptVal){
	try{
		var ret;
		var numStr = iptVal.toString ();
		ret = convertChunk (numStr);
		return ret;
	}catch (err){
		
	}
}

function makeTens (chunk){
	try{
		var ret;
		switch (chunk) {
		    case '11':
		        ret = "eleven";
		        break;
		    case '12':
		        ret = "twelve";
		        break;
		    case '13':
		        ret = "thirteen";
		        break;
		    case '14':
		        ret = "fourteen";
		        break;
		    case '15':
		        ret = "fifteen";
		        break;
		    case '16':
		        ret = "sixteen";
		        break;
		    case '17':
		        ret = "seventeen";
		        break;
		    case '18':
		        ret = "eighteen";
		        break;
		    case '19':
		        ret = "nineteen";
		        break;
		}
		return ret;

	}catch (err){
		
	}
}


function convertChunk (chunk){
	try{
		var ret;
		var ones = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
		var tenty = ['eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
		var tens = ['none', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

		if (chunk.length === 3){
			ret = ones[parseInt(chunk[0])] + ' hundred';
			if (parseInt(chunk[1]) === 1){
				ret += ' and ' + tenty [parseInt(chunk[1])];
			}else{
				ret += ' and ' + tens [parseInt(chunk[1])];
				ret += ' ' + ones [parseInt(chunk[2])];
			}
		}else{
			ret = 'dunno';
		}
		return ret;

	}catch (err){
		
	}
}
function printOutput (message, valid){
	try{
		$('#output').html (message);
		if (valid){
			$('#inputForm').removeClass('has-error');
			$('#inputForm').addClass('has-success');
		}else{
			$('#inputForm').addClass('has-error');
			$('#inputForm').removeClass('has-success');
		}
	}catch (err){
		
	}
}
