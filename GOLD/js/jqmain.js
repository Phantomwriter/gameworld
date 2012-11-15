
////////////////////////////////////////////////////////////////////////
// Jquery mainjs
// GOLD VERSION
// Howard Livingston
// Gameworld App-Project 1
// MiU-10/2012
// Robin Alarcon

////////////////////////////////////////////////////////////////////////

function go(x) {
		var theElement = document.getElementById(x);
		return theElement;
		}

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
			saveData(data);
		} 
	}	
	);
	var saveData= function(data){
			var id=Math.floor(Math.random()*100000001);
		console.log(data);
		var item            ={};
			item.fname		=['First Name:', $('#fname').value];
			item.lname		=['Last Name:', $('#lname').value];
			item.pword		=['Password:', $('#pword').value];
			item.cpword		=['Confirm Password:', $('#cpword').value];
			item.email		=['Email:', $('#email').value];
			item.friends    =['I have:', $('#quantity').value];
			item.day		=['Day:', $('#day').value];
			item.month		=['Month:', $('#month').value];		
			item.year		=['year:', $('#year').value];		


				localStorage.setItem(id, JSON.stringify(item));
					alert("Information is saved!");	


} 	
	});
	
	var saveData =$('submit');
		saveData.on("click");
	

var autofillData = function (){
	 
};

var getData = function(){

};



var	deleteItem = function (){
			
};
					
var clearLocal = function(){

};





