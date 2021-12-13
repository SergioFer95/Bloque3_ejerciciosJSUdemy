'use strict';

window.addEventListener("load", () => {

    // TRABAJO SOBRE EL BOTÓN:
    var button = document.querySelector('[customName="btn"]');

    var results = document.querySelector('[customName="results"]');
    results.style.display = "none";

    var user;
    button.addEventListener("click", () => {

        var answerName = document.querySelector("#name").value;
        var answerSurname = document.querySelector("#surname").value;
        var answerAge = document.querySelector("#age").value;

        user = {
            name: answerName,
            surname: answerSurname,
            age: answerAge
        }

        results.style.display = "block";

        var paragraph = document.createElement("p");
        paragraph.append("Nombre: " + answerName);
        paragraph.append("Apellido: " + answerSurname);
        paragraph.append("Edad: " + answerAge);

        results.append(paragraph);




        return console.log(user);
    });

    
});