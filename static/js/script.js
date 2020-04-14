window.document.getElementById("Success alert").style.display = "none";

function showSuccess(){
	window.document.getElementById("Success alert").style.display = "block";
	setTimeout(hideSuccess,5000);
}

function hideSuccess(){
	window.document.getElementById("Success alert").style.display = "none";
}