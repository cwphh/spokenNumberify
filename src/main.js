$( document ).ready(function() {
	try {
		$('#inputNumber').focus ();	
		$('#inputNumber').keyup(function() {
			validate(); 
		});
	}catch (err){
		console.log (err);
	}
});