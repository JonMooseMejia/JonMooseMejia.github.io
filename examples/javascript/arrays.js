// JavaScript Document
			var person = new Array();
		
			person[0] = prompt("What is your Name?");
			person[1] = prompt("Where do you live?");
			person[2] = prompt("What do you do for a living?");
		
			for (var i = 0; i < person.length; i++) {
				document.getElementById(i).innerHTML = person[i];
			}
	document.getElementById("title").innerHTML = "Thank you for your information! You supplied this information:";