window.document.getElementById("message").style.display = "none";

function showMessage(){
	window.document.getElementById("message").style.display = "block";
	setTimeout(hideMessage,5000);
}

function hideMessage(){
	$(".alert").alert('close')
}

