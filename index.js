function validatename(){
	var firstname=document.getElementById("name").value;
	var rel=/^[a-zA-z\s\'\-]{3,15}$/;
	if (rel.test(firstname)){
	document.getElementById("message1").style.color="grey";
  	document.getElementById("message1").innerHTML ="Input accepted";
	return true;} 
	else
	{
		document.getElementById("message1").style.color="red";
		document.getElementById("message1").innerHTML ="<b>Please write correct name between 3-15 characters</b>";
	return false;}
	
}
function validatename1(){
	var firstname=document.getElementById("name1").value;
	var rel=/^[a-zA-z\s\'\-]{3,15}$/;
	if (rel.test(firstname)){
	document.getElementById("validname").style.color="grey";
  	document.getElementById("validname").innerHTML ="Input accepted";
	return true;} 
	else
	{
		document.getElementById("validname").style.color="red";
		document.getElementById("validname").innerHTML ="<b>Please write correct name between 3-15 characters</b>";
	return false;}
	
}
function validatenumber()  
{  
var x=document.getElementById("contactNum").value;  
var rel=/^\d{3}-\d{3}-\d{4}$/;  
if(rel.test(x)){
  document.getElementById("message2").style.color="grey";	
  document.getElementById("message2").innerHTML="valid";  
  return true;  
  }
else
{
	document.getElementById("message2").style.color="red";	
    document.getElementById("message2").innerHTML="<b>write in xxx-xxx-xxxx format</b>";  
    return false;
}	
}
function validateemail(){
var e= document.getElementById("email").value;
var rel=/^([A-Za-z0-9\_\.])+\@([A-Za-z0-9\_\.])+\.([A-Za-z]{2,4})$/;
if (rel.test(e)){
	document.getElementById("message3").style.color="grey";
  	document.getElementById("message3").innerHTML ="Input accepted";
	return true;} 
	else
	{
		document.getElementById("message3").style.color="red";
		document.getElementById("message3").innerHTML ="<b>Email should be of form abc@xyz.com</b>";
	return false;}
}
function validateemail1(){
var e= document.getElementById("email1").value;
var rel=/^([A-Za-z0-9\_\.])+\@([A-Za-z0-9\_\.])+\.([A-Za-z]{2,4})$/;
if (rel.test(e)){
	document.getElementById("validemail").style.color="grey";
  	document.getElementById("validemail").innerHTML ="Input accepted";
	return true;} 
	else
	{
		document.getElementById("validemail").style.color="red";
		document.getElementById("validemail").innerHTML ="<b>Email should be of form abc@xyz.com</b>";
	return false;}
}
function validatetime(){
var t= document.getElementById("time").value;
var rel=/^([0-9]{2})+\:([0-9]{2})$/;
if (rel.test(t)){
	document.getElementById("message4").style.color="grey";
  	document.getElementById("message4").innerHTML ="Input accepted";
	return true;} 
	else
	{
		document.getElementById("message4").style.color="red";
		document.getElementById("message4").innerHTML ="<b>Time should be in HH:MM format</b>";
	return false;}
}
function validateno(){
var n= document.getElementById("persons").value;
if (n>0){
	document.getElementById("message5").style.color="grey";
  	document.getElementById("message5").innerHTML ="Input accepted";
	return true;} 
	else
	{
		document.getElementById("message5").style.color="red";
		document.getElementById("message5").innerHTML ="<b>Atleast there should be 1 person</b>";
	return false;}
}





/*Reserved*/

var modal=document.getElementById("myModal");
var btn = document.getElementById("reservationbtn");
var btn1=document.getElementById("printbook");
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
var e=document.getElementById("email").value;
var n=document.getElementById("persons").value;
var name=document.getElementById("name").value;
var date=document.getElementById("date").value;
var time=document.getElementById("time").value;
var num=document.getElementById("contactNum").value;
if (e==""||name ==""||num == ""||time == ""||date == ""||n<=0)
      { 
         alert("Form not filled correctly. \nOr\nThere may be some empty input.");  	
         return false; 
      }  	
else{ 
document.getElementById("modal-body").innerHTML="Your table is booked. Below are the details:"+"</br>"+"Name: "+name.toUpperCase()+"</br>"+"Contact Number: "+num+"</br>"+"Email: "+e+"</br>"+"No. of Persons: "+n+"</br>On "+date+" at "+time;
  modal.style.display = "block";
}
}
btn1.onclick= function(){
window.print();
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}




/*contact button*/
function contactbutton() {
	// var emailcon = document.getElementById("email3").value;
	// console.log(emailcon);
	console.log("hello");
	var e= document.getElementById("email1").value;
	var firstname=document.getElementById("name1").value;
	console.log(e);
	if(e != "" || firstname != ""){
	document.getElementById("conbutton").innerHTML = "We will contact you at "+e+" as soon as possible..";
	document.getElementById("awe").remove();
	}
	else{
		document.getElementById("conbutton").innerHTML = "Fill the Info correctly";
	}
   }