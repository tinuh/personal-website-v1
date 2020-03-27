document.getElementById("Success alert").style.display = "none";

function showSuccess(){
	document.getElementById("Success alert").style.display = "block";
	setTimeout(hideSuccess,5000);
}

function hideSuccess(){
	document.getElementById("Success alert").style.display = "none";
}