
var sandwiches = `{ "sandwich": "hamburger", "calories": "260" }`;
var fries = `{ "fries_size": "Large French Fries", "calories": "570" }`;



var objSandwich = JSON.parse(sandwiches);
var objFries = JSON.parse(fries);

document.getElementById("sandwich").innerHTML = "My favorite sandwich is a " + objSandwich.sandwich + 
 " which has approximately " + objSandwich.calories + " calories, along with it I enjoy eating " + objFries.fries_size + " which have about " + objFries.calories + " calories."
