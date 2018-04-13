var message = document.querySelector("#message");
var form = document.querySelector("form");

form.addEventListener("submit", function(event) {
	event.preventDefault();
	var article = new FormData(form);
	ajaxPost("https://oc-jswebsrv.herokuapp.com/article", article, function(reponse) {
		console.log(reponse);
		message.textContent = "L'article a bien été ajouté.";
		setTimeout(function() {
			message.textContent = "";
		}, 3000);
		form.reset();	
	});
});
