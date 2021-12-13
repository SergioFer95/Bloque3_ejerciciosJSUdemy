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
        var answerAge = parseInt(document.querySelector("#age").value);


        // Validación del formulario:

        if(answerName.trim() == null || answerName.trim().length == 0){
            alert("El nombre no es váido");
            return false;
        }

        if(answerSurname.trim() == null || answerSurname.trim().length == 0){
            alert("El Apellido no es váido");
            return false;
        } 

        if(answerAge == undefined || answerAge <= 0 || isNaN(answerAge)){
            alert("La edad no es váida");
            return false;

        }else if(answerAge <= 17){
            alert("Eres menor de edad y no puedes participar en la encuesta.");
            return false;
        }

        // Fin de la validación del formulario


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