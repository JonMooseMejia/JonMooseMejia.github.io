// JavaScript Document
function tellFortune(numKids, partner, location, jobTitle) {
    let future = "You will be a " + jobTitle + " in " + location + ", and married to " + partner + " with " + numKids + " kids."
    return(future)
    
}
   
tellFortune(3, 'william', 'Dublin', "Engineer");
tellFortune(3000, 'Jasmine', 'Spain', "Plumber");
tellFortune(0, 'Julissa', 'El Salvador', "Musician");
document.getElementById("fortune1").innerHTML = tellFortune(3, 'william', 'Dublin', "Engineer");
document.getElementById("fortune2").innerHTML = tellFortune(4, 'Jasmine', 'Spain', "Plumber");
document.getElementById("fortune3").innerHTML = tellFortune(0, 'Julissa', 'El Salvador', "Musician");


