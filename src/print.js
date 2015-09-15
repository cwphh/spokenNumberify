function printEquivalent(equivalent) {
	try {
		$('#output').html (equivalent.charAt(0).toUpperCase() + equivalent.slice(1));
		$('#inputForm').removeClass('has-error');
		$('#inputForm').addClass('has-success');
	}catch (err){
		console.log (err);
	}
}
function printError(message) {
	try {
		$('#output').html (message);
		$('#inputForm').removeClass('has-success');
		$('#inputForm').addClass('has-error');
	}catch (err){
		console.log (err);
	}
}