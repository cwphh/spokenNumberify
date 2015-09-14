// A $( document ).ready() block.
$( document ).ready(function() {
    
    ipt = $('#inputNumber');
    ipt.focus ();
    ipt.keyup(function() {
	  validateInput();
	});

});

function validateInput() { 
	console.log (ipt.val());
}