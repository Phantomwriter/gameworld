
////////////////////////////////////////////////////////////////////////
// GOLD VERSION
// Howard Livingston
// Gameworld App-Project 1
// MiU-10/2012
// Robin Alarcon

////////////////////////////////////////////////////////////////////////



//Call function short-cut
function go(x) {
		var theElement = document.getElementById(x);
		return theElement;
		}
		

//Get the radio button data			
function getSelectedRadio(){
		var radios =document.forms[0].deviceValue;
	for(var i=0; i<radios.length; i++){
		if(radios[i].checked){
			deviceValue = radios[i].value;
		}
	}
}


//Get the checkbox data
function getCheckboxValue(){
		if(go('selectValue').checked){
				selectValue= go('selectValue').value;
		
			}else{
			selectValue="No";
	}
}


//Pick a theme for the groups
function pickATheme(){
		var formTag = document.getElementsByTagName("form");
			selectLi = go('select');
			makeSelect = document.createElement('select');
			makeSelect.setAttribute("id", "groups");
	for(var i=0, j=contactGroups.length; i<j; i++){
		var makeOption = document.createElement('option');
		var optText= contactGroups[i];
			makeOption.setAttribute("value", optText);
			makeOption.innerHTML =optText;
			makeSelect.appendChild(makeOption);
			
			}
			
			selectLi.appendChild(makeSelect);
}	
				

//Toggle control 
function toggleControls(n){
	switch(n) {
		case"on":
		go('contactForm').style.display ="none";
		go('clear').style.display ="inline";
		go('displayLink').style.display ="none";
		go('addNew').style.display ="listview";
		break;
	case "off":
		go('contactForm').style.display ="block";
		go('clear').style.display ="inline";
		go('displayLink').style.display ="inline";
		go('addNew').style.display ="listview";
		go('items').style.display="none";
		break;
	default:
		return false;
	}
}


//Store data
function storeData(key){
		//if there is no key, this means this a brand new item and we need a new key
		if(!key){
		var id					=Math.floor(Math.random()*100000001);
		}else{
		//Set the id to the existing key that we're editing so that it will save over the data	
		//The key is the same key that's been passed along from the edit/submit event handler
		//to the validate function and then passed here into the store data function
			id = key;
		}
		
		getSelectedRadio();
		getCheckboxValue();
		
		var item            ={};
			item.group		=["group:", go('groups').value];
			item.fname		=["First Name:", go('fname').value];
			item.lname		=["Last Name:", go('lname').value];
			item.pword		=["Password:", go('pword').value];
			item.cpword		=["Confirm Password:", go('cpword').value];
			item.email		=["Email:", go('email').value];
			item.selectValue=["What will you use Wolflinx for?:",selectValue];
			item.deviceValue=["What device are you using?:",deviceValue];
			item.friends  	=["I have:", go('friends').value];
			item.date		=["Date:", go('date').value];
			item.comments	=["comments:", go('comments').value];
		
	localStorage.setItem(id, JSON.stringify(item));
			alert("Information is saved!");		
		
}


//Get data
function getData(){
	toggleControls("on");
	
	if(localStorage.length === 0){
		alert("There's no Data in Local Storage so default data was entered");
		autoFillData();
	}
		var makeDiv = document.createElement('div');
			makeDiv.setAttribute("id", "items");
		var makeList = document.createElement('ul');
			makeDiv.appendChild(makeList);
			document.body.appendChild(makeDiv);
			go('items').style.display ="block";
	for(var i=0, len=localStorage.length; i<len;i++){
		var makeli =document.createElement('li');
		var linksLi= document.createElement('li');
			makeList.appendChild(makeli);
		var key =localStorage.key(i);
		var value=localStorage.getItem(key);
		var obj=JSON.parse(value);
		var makeSubList = document.createElement('li');
			makeli.appendChild(makeSubList);
			getImage(obj.group[1], makeSubList);
		for(var n in obj){
			var makeSubli =document.createElement('li');
			makeSubList.appendChild(makeSubli);
			var optSubText = obj[n][0] + " " + obj[n][1];
				makeSubli.innerHTML = optSubText;
				makeSubList.appendChild(linksLi);
		}
		makeItemLinks(localStorage.key(i), linksLi); 
	}
}
	
 
//Getting image for the right category
function getImage(pickATheme, makeSubList){
    var imageLi = document.createElement('li'); 
    	makeSubList.appendChild(imageLi);
    var newImg = document.createElement('img');
    var setSrc = newImg.setAttribute("src", "images/" + pickATheme + ".png");
    	imageLi.appendChild(newImg);
    }


//Auto populate Local Storage
function autoFillData(){
    	for (var n in json){
    		var id = Math.floor(Math.random() * 100000001);
    			localStorage.setItem(id, JSON.stringify(json[n]));
    	}
    }


//Links for the items
function makeItemLinks(key, linksLi){
		var editLink=document.createElement('a');
			editLink.href ="#";
			editLink.key = key;
		var editText ="Edit Contact";
			editLink.addEventListener("click", editItem);
			editLink.innerHTML = editText;
			linksLi.appendChild(editLink);
		
		var breakTag =document.createElement('br');
			linksLi.appendChild(breakTag);
		
		
		var deleteLink=document.createElement('a');
			deleteLink.href="#";
			deleteLink.key =key;
		var deleteText ="Delete Contact";
			deleteLink.addEventListener("click", deleteItem);
			deleteLink.innerHTML=deleteText;
			linksLi.appendChild(deleteLink);
}


//Edit item
function editItem(){
		var value = localStorage.getItem(this.key);
		var item = JSON.parse(value);
			toggleControls("off");
			go('groups').value=item.group[1];
			go('fname').value=item.fname[1];
			go('lname').value=item.lname[1];
			go('pword').value=item.pword[1];
			go('cpword').value=item.cpword[1];
			go('email').value=item.email[1];
			go('selectValue').value=item.selectValue[1];
			go('deviceValue').value=item.deviceValue[1];
			go('friends').value=item.friends[1];
			go('date').value=item.date[1];
			go('comments').value=item.comments[1];
		var radios=document.forms[0].deviceValue;
		for(var i=0; i<radio.length; i++){
			if(radio[i].value == "CellPhone" && item.deviceValue[1] =="CellPhone"){
				radio[i].setAttribute("checked","checked");
			}else if(radio[i].value =="Tablet" && item.deviceValue[i] == "Tablet") {
				radio[i].setAttribute("checked","checked");
		}
	}
		if(item.text[1] =="Yes")     {
			go('text').setAttribute("checked","checked");
	}
			go('friends').value=item.friends[1];
			go('date').value=item.date[1];
			go('comments').value=item.comments[1];
			
			save.removeEventListener("click", storeData);
		
			go('submit').value ="Edit Contact";
		var editSubmit = go('submit');
			editSubmit.addEventListener("click", validate);
			editSubmit.key = this.key;
	
}


//Delete Item
function deleteItem(){
		var ask = confirm("R U sure U want 2 delete the content?");
		if(ask){
			localStorage.removeItem(this.key);
				alert("Deleted successfully!");
					window.location.reload();
		
		}else{
			alert("Content not deleted");
		
	}
}


//Clear local storage
function clearLocal(){
		if(localStorage.length === 0){
			alert("There's no data to clear!");
		}else{
			localStorage.clear();
				alert("All contacts are deleted!");
				window.location.reload();
					return false;
	}
}	


//Validate groups, first and last name and email
function validate(e){
		var getGroup = go('groups');
		var getFname =go('fname');
	    var getLname =go('lname');
		var getEmail =go('email');
		errMsg.innerHTML = "";
			getGroup.style.border ="1px solid black";
			getFname.style.border ="1px solid black";
		    getLname.style.border ="1px solid black";
			getEmail.style.border ="1px solid black";
	
		var messageAry = [];
			if(getGroup.value === "--Who R U?--"){
		var groupError = "Please choose a group.";
			getGroup.style.border ="3px solid orange";
			messageAry.push(groupError);
	}

//first name validation
	if(getFname.value === ""){
		var fNameError = "You forgot your first name";
			getFname.style.border ="3px solid orange";
			messageAry.push(fNameError);
	}

//last name validation
	if(getLname.value === ""){
		var lNameError = "You forgot your last name";
			getLname.style.border ="3px solid orange";
			messageAry.push(lNameError);
	}

//email validation
		var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	if(!(re.exec(getEmail.value))){
		var emailError = "Please enter a valid email address.";
			getEmail.style.border ="3px solid orange";
			messageAry.push(emailError);
	
	}
	//If there were errors, display them on the screen.
		if(messageAry.length >= 1){
			for(var i =0, j=messageAry.length; i < j; i++){
				var txt =document.createElement('li');
				txt.innerHTML=messageAry[i];
				errMsg.appendChild(txt);
			}
			e.preventDefault();
			return false;
		}else{
		//Send the key value from the edit function
		storeData(this.key);
		
	}
}


//Local variables and function calls
		var contactGroups =["--Main Interests--", "On-Line Games", "Console Games", "Phone Apps" , "Card Games" , "Manual Games"],
			deviceValue,				
			selectValue = "No",
			errMsg = go('errors');
		
		
pickATheme();

//Set Link and Submit Click Events
	
		var displayLink = go('displayLink');
			displayLink.addEventListener("click", getData);
		var clearLink =go('clear');
			clearLink.addEventListener("click", clearLocal);
		var save= go('submit');
			save.addEventListener("click", validate);







































