function printEquivalent(equivalent) {
	try {
		$('#output').html (equivalent);
		$('#inputForm').removeClass('has-error');
		$('#inputForm').addClass('has-success');
	}catch (err){
		console.log (err);
	}
}