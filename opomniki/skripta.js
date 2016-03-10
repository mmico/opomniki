window.addEventListener('load', function() {
	//stran nalozena
		
	//Posodobi opomnike
	var posodobiOpomnike = function() {
		var opomniki = document.querySelectorAll(".opomnik");
		
		for (i = 0; i < opomniki.length; i++) {
			var opomnik = opomniki[i];
			var casovnik = opomnik.querySelector("span");
			var cas = parseInt(casovnik.innerHTML);
	
			//TODO: 
			// - če je čas enak 0, izpiši opozorilo "Opomnik!\n\nZadolžitev NAZIV_OPOMNIK je potekla!"
			if (cas>0){
				casovnik.innerHTML=cas-1;
			}
			else {
				var naziv=opomnik.querySelector(".naziv_opomnika").innerHTML;
				alert(naziv);
				document.querySelector("#opomniki").removeChild(opomnik);
			}
			// - sicer zmanjšaj čas za 1 in nastavi novo vrednost v časovniku
		}
	}
	setInterval(posodobiOpomnike, 1000);
	
	var izvediPrijavo=function(event){
		var ime=document.querySelector("#uporabnisko_ime").value;
		document.querySelector("#uporabnik").innerHTML=ime;
		document.querySelector(".pokrivalo").style.display="none";
		
	}
	
	var zacetekOpomnika=function(event){
		var ime=document.querySelector("#naziv_opomnika").value;
		var cas=document.querySelector("#cas_opomnika").value;
		document.querySelector("#opomniki").innerHTML+="<div class='opomnik rob senca'><div class='naziv_opomnika'>"+ime+"</div><div class='cas_opomnika'> Opomnik čez <span>"+cas+"</span> sekund.</div></div>";
	}
	
	document.querySelector("#prijavniGumb").addEventListener('click',izvediPrijavo);
	document.querySelector("#dodajGumb").addEventListener('click',zacetekOpomnika);
});

