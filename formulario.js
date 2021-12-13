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

        // Validación del formulario:

        if(answerName.trim() == null || answerName.trim().length == 0){
            alert("El nombre no es váido");
            return false;
        }
        
        if(answerSurname.trim() == null || answerName.trim().length == 0){
            alert("El Apellido no es váido");
            return false;
        } 

        if(answerAge.trim() == null || answerName.trim().length == 0 || answerAge == isNaN){
            alert("La edad no es váida");
            return false;
        }

        // Para que esto fuese funcional, el evento debería de ser "submit" en vez de "click". El problema es que si usaba el evento "submit", me enviaba la información y no la recogía de la forma que el ejercicio me pedía, por lo que he preferido usar este otro evento "click" para realizar un "simulacro" de envio de formulario.


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