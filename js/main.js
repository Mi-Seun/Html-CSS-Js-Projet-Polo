window.onload = function(ev){
	//copie du menu aside dans le menu burger
	//-> utile pour écrire le menu qu'une seule fois
	document.querySelector('#menuburger').innerHTML = document.querySelector('#menuaside').innerHTML
}
