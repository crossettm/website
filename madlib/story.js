console.log("start program");

var userName = prompt("Please enter your name.");

var vehicle = prompt("Please enter a type of vehicle.");
var adjective = prompt("Please enter an adjective.");

var verb = prompt("Please enter a verb \(past tense\).");

var place = prompt("Please enter a 'common' place \(no proper nouns\).");

var punishment = prompt("Please enter form of punishment.");

var emotion = prompt("Please enter an emotion.");

document.write(userName + " ran to the " + adjective + " " + vehicle + " and got ready to leave." + "  " + userName + " glanced at the time and " + verb + "." + "  'Late again!!!'" + "   " + userName + " sped off to the " + place + " as quickly as possible." + punishment.toUpperCase() + "!!!" + "  That's what " +  userName + "'s" + " boss said " + userName + " would get the next time " + userName + " was late." + "  Understandably, " + userName + " was feeling " + emotion + "...");

console.log("end program");