//HTML-objekter
    var boxOneDiv = document.getElementById("box1-div");
    var boxTwoDiv = document.getElementById("box2-div");
    var numberOfLivesDiv = document.getElementById("number-of-lives-div");
    var numberOfRightAnswersDiv = document.getElementById("number-of-right-answers-div");
    var numberOfWrongAnswersDiv = document.getElementById("number-of-wrong-answers-div");
    var outputDiv = document.getElementById("output-div");

// Variabler
    var randomNumber;
    var image = `<img src="images/person1.jpg">`;
    var countRight = 0; //Brukeren starter med å ha gjettet null ganger.
    var countWrong = 0;

        
// Funksjoner

    //Setter en av de to boksene tilfeldig som den riktige.
    function setRandomNumber(){
        randomNumber = Math.floor(Math.random() * 2 + 1);
    };

    //Brukeren klikker på en av boksene og det sjekkes om boksen er den riktige.
    function spanFunction(){
        outputDiv.innerHTML = ""; //fjerner spill-instruksjonene så fort brukeren begynner spillet
        numberOfLivesDiv.innerHTML = `${image}${image}${image}${image}${image}`; //liv brukeren har igjen

        if(randomNumber === 1){
            countRight++
            numberOfRightAnswersDiv.innerHTML = `<p>Antall riktige: ${countRight}</p>`;
        }else if(randomNumber === 2){
            countWrong++
            numberOfWrongAnswersDiv.innerHTML = `<p>Antall feil: ${countWrong}</p>`;
        }
    };
      
    //Hvor mange liv personen har igjen, starter med 5, mister ett per feil, får ett ved 3, 5 og 7 riktige.
    function livesFunction(){
        if(countRight >= 3){
            numberOfLivesDiv.innerHTML += `${image}`;
        }
        if(countRight >= 5){
            numberOfLivesDiv.innerHTML += `${image}`;
        }
        if(countRight >= 7){
            numberOfLivesDiv.innerHTML += `${image}`;
        }
    };
    //bug: noen ganger får brukeren liv på 4 og 6 riktige... fordi bildene oppdateres før count.

    /*var livesLeft = [`${image}${image}${image}${image}${image}`];
    var arrayLength = livesLeft.length;
    for (var i = 5; i < arrayLength; i++) {
        console.log(arrayLength[i]);
    //Do something
    }*/

    function win(){
        if(countRight === 10){
            boxOneDiv.innerHTML = "";
            boxTwoDiv.innerHTML = "";
            numberOfLivesDiv.innerHTML = "";
            numberOfRightAnswersDiv.innerHTML = "";
            numberOfWrongAnswersDiv.innerHTML = "";
            alert("YOU WIN");
        }
    };//bug: vinner på 9 og ikke 10??? - fordi rightAnswers ikke oppdateres

    function lose(){
        if(numberOfLivesDiv = ""){
            alert("YOU LOSE")
        }
    };
        
    //Hovedfunksjon som kjøres ved event.
    function gatherFunctions(){
        setRandomNumber();
        livesFunction();
        spanFunction();
        win();
        lose();
    };
// Events
    //To click events for å kjøre hovedfunksjon.
    boxOneDiv.addEventListener("click", gatherFunctions);
    boxTwoDiv.addEventListener("click", gatherFunctions);

    