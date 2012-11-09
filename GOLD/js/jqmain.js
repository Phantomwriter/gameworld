
////////////////////////////////////////////////////////////////////////
// Jquery mainjs
// GOLD VERSION
// Howard Livingston
// Gameworld App-Project 1
// MiU-10/2012
// Robin Alarcon

////////////////////////////////////////////////////////////////////////



$('#home').on('pageinit', function(){
		console.log("Home page loaded!");
});


$('#signUpPage').on('pageinit', function(){
		console.log("Sign up loaded!");
	var signUpForm = $('#signUpForm'),
		signUpErrorsLink = $('#signUpErrorsLink');
		signUpForm.validate({
			invalidHandler: function(form, validator){
			signUpErrorsLink.click();
			var html = '';
			for(var key in validator.submitted){
				var label= $('label [for^="'+ key +'"]').not('[generated]');
				var legend = label.closest('fieldset').find('.ui-controlgroup-label');
				var fieldName = legend.length ? legend.text() : label.text();
				html += '<li>'+ fieldName +'</li>';
				};
			$("signUpPageErrors ul").html(html);
			},
			submitHandler: function(){
	var data = signUpForm.serializeArray();
			$.jStorage.set(data);
			alert("Data Saved");
		} 
	});
	



var autofillData = function (){
	 
};

var getData = function(){

};



var	deleteItem = function (){
			
};
					
var clearLocal = function(){

};
});	




