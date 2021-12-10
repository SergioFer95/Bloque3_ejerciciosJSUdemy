'use strict';

window.addEventListener("load", () => {

    // TRABAJO SOBRE EL BOTÓN:
    var button = document.querySelector('[customName="btn"]');

    var results = document.querySelector('[customName="results"]');

    var newButtom;
    var user;
    var completeAnswers;
    button.addEventListener("click", () => {

        var answerName = document.querySelector("#name").value;

        var answerSurname = document.querySelector("#surname").value;

        var answerAge = document.querySelector("#age").value;

        // completeAnswers = anserName[answerName + " " + answerSurname + " " + answerAge
        // ]

        user = {
            name: answerName,
            surname: answerSurname,
            age: answerAge
        }

        console.log(user);

        return () => {
            newButtom = document.createElement("div");
            document.body.insertAdjacentHTML("button");

            return newButtom;

            // newButtom = document.body.createElement('<button customName="newButtom">Ver respuestas</button>')
        }


    });

});