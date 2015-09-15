function createOnes(num) {
	try {
		var ret;
		var ones = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
		ret = ones [num];
		return ret;
	}catch (err){
		console.log (err);
	}
}