window.document.getElementById("message").style.display = "none";

function showMessage(){
	window.document.getElementById("message").style.display = "block";
	setTimeout(hideMessage,5000);
}

function hideMessage(){
	window.document.getElementById("message").style.display = "none";
}