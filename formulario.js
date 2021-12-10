'use strict';

window.addEventListener("load", () => {

    // TRABAJO SOBRE EL BOTÓN:
    var button = document.querySelector('[customName="btn"]');
    
    button.addEventListener("click", () => {

        var answerName = document.querySelector("#name").value;

        var answerSurname = document.querySelector("#surname").value;

        var answerAge = document.querySelector("#age").value;

        var completeAnswers = answerName + " " + answerSurname + " " + answerAge;

        console.log(completeAnswers);

        // Intenta crear otra función aquí dentro que cree un botón, con el que podamos dar click y ver los resultados del formulario
        
    });

    



    // button.addEventListener("click", () => {

    // });

    // var showResults = document.querySelector('[customName="showResults"]');

    // showResults.addEventListener("click", () =>{
    //     document.write(completeAnswers);
    // })

});