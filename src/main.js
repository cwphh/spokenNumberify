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