//HTML-objekter
    const boxOneDiv = document.getElementById("box1-div");
    const boxTwoDiv = document.getElementById("box2-div");
    const numberOfLivesDiv = document.getElementById("number-of-lives-div");
    const numberOfRightAnswersDiv = document.getElementById("number-of-right-answers-div");
    const numberOfWrongAnswersDiv = document.getElementById("number-of-wrong-answers-div");
    const outputDiv = document.getElementById("output-div");

// Variabler
    const image = `<img src="images/person1.jpg">`;
    let countRight = 0;     //Brukeren starter med å ha gjettet null ganger.
    let countWrong = 0;     //Brukeren starter med å ha gjettet null ganger.
    let score = 0;          //Brukeren starter med å ha oppnådd null i score.
    let numberOfLives = 5;  //Brukeren starter med å ha fem liv.
        
// Funksjoner
    function randomNumber() { //Math.random brukes for å sette en av de to boksene som den riktige.
        return Math.floor(Math.random() * 2 + 1);
    };
     
    //Hovedfunksjon som kjøres ved event.
    function gatherFunctions(){
        if(randomNumber() === 1) { //Setter en av de to boksene tilfeldig som den riktige.
            score++;               //Score teller.
            if(score === 3 | score === 5 | score === 7) { //Dersom brukeren får 3, 5, 7 i score, vil brukeren få ett liv til.
                numberOfLives++;   //Antall liv teller.
            }
            countRight++        //Antall ganger gjettet riktig teller.
        }else{                  //Hvis ikke vil brukeren miste liv per gang feil gjettet.
            numberOfLives--;    //Ellets mister brukeren liv.
            countWrong++;       //Pga. at brukeren gjettet feil.
        }
        numberOfLivesDiv.innerHTML = "";

        for (let i=0; i< numberOfLives; i++) {          //Løkke som legger til bilde.
            numberOfLivesDiv.innerHTML += `${image}`;
        }

        numberOfRightAnswersDiv.innerHTML = `<p>Antall riktige: ${countRight}</p>`; //Skriver ut antall ganger gjettet riktig.
        numberOfWrongAnswersDiv.innerHTML = `<p>Antall feil: ${countWrong}</p>`;    //Skriver ut antall ganger gjettet feil.

        if(score === 10) {      //if-funksjon som avgjør at brukeren har vunnet spillet
            alert("You win!");
        }

        if(numberOfLives === -1 ) { //if-funksjon som avgjør at brukeren har tapt spillet
            alert("You lose!")
        }
    };
// Events
    function initGame() { //Main-funksjon som starter spillet

        //console.log(`NumberOfLives=${numberOfLives}`);
        //console.log(`Score=${score}`);
    
        numberOfLivesDiv.innerHTML ="";
        for (let i=0; i< numberOfLives; i ++) {
            numberOfLivesDiv.innerHTML += `${image}`;
        }
        boxOneDiv.addEventListener("click", gatherFunctions);
        boxTwoDiv.addEventListener("click", gatherFunctions);
    
    }
    
    initGame(); //Kjør funksjon

    