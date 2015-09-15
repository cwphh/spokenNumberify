function printError(message) {
	try {
		$('#output').html (message);
		$('#inputForm').removeClass('has-success');
		$('#inputForm').addClass('has-error');
	}catch (err){
		console.log (err);
	}
}