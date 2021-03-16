const frm = document.getElementById("QAcontainer");
let createform = document.createElement('form'); // Create New Element Form
createform.setAttribute("action", ""); // Setting Action Attribute on Form
createform.setAttribute("method", "post"); // Setting Method Attribute on Form
frm.appendChild(createform);

let heading = document.createElement('h3'); // Heading of Form
heading.innerHTML = "Stuur je antwoorden in en maak kans op een prijs";
createform.appendChild(heading);

let messagebreak = document.createElement('br');
createform.appendChild(messagebreak);

let namelabel = document.createElement('label'); // Create Label for Name Field
namelabel.innerHTML = "Naam: "; // Set Field Labels
createform.appendChild(namelabel);

let inputelement = document.createElement('input'); // Create Input Field for Name
inputelement.setAttribute("type", "text");
inputelement.setAttribute("name", "Naam");
createform.appendChild(inputelement);

let newLine = document.createElement('br');
createform.appendChild(newLine);

let messagelabel = document.createElement('label'); // Append Textarea
messagelabel.innerHTML = localStorage.getItem("Antwoord 1");
createform.appendChild(messagelabel);

let newLine1 = document.createElement('br');
createform.appendChild(newLine1);

let messagelabel2 = document.createElement('label'); // Append Textarea
messagelabel2.innerHTML = localStorage.getItem("Antwoord 2");
createform.appendChild(messagelabel2);

let newLine2 = document.createElement('br');
createform.appendChild(newLine2);

let messagelabel3 = document.createElement('label'); // Append Textarea
messagelabel3.innerHTML = localStorage.getItem("Antwoord 3");
createform.appendChild(messagelabel3);

let newLine3 = document.createElement('br');
createform.appendChild(newLine3);

let messagelabel4 = document.createElement('label'); // Append Textarea
messagelabel4.innerHTML = localStorage.getItem("Antwoord 4");
createform.appendChild(messagelabel4);

let newLine4 = document.createElement('br');
createform.appendChild(newLine4);

let question = document.createElement('p'); 
question.innerHTML = "Wil je onze nieuwsbrief ontvangen?";
createform.appendChild(question);

let options = ["Ik ontvang jullie mail al", "Ja", "Geen belangstelling"]
for (var i=0; i< options.length; i++){
    var dailyMailLabel = document.createElement("label");
    dailyMailLabel.class = "radio";
    var dailyMail = document.createElement("input");
    dailyMail.type = "radio";
    dailyMail.value = options[i];
    dailyMail.name = "newsletter";

    dailyMailLabel.appendChild(dailyMail);
    dailyMailLabel.appendChild(document.createTextNode(options[i]));

    createform.appendChild(dailyMailLabel);
}

let submitelement = document.createElement('input'); // Append Submit Button
submitelement.setAttribute("type", "submit");
submitelement.setAttribute("name", "dsubmit");
submitelement.setAttribute("value", "Verstuur");
createform.appendChild(submitelement);                  