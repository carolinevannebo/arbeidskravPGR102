//HTML-objekter
    const boxOneDiv = document.getElementById("box1-div");
    const boxTwoDiv = document.getElementById("box2-div");
    const numberOfLivesDiv = document.getElementById("number-of-lives-div");
    const numberOfRightAnswersDiv = document.getElementById("number-of-right-answers-div");
    const numberOfWrongAnswersDiv = document.getElementById("number-of-wrong-answers-div");
    const outputDiv = document.getElementById("output-div");

// Variabler
    //var randomNumber;
    const image = `<img src="images/person1.jpg">`;
    let countRight = 0; //Brukeren starter med å ha gjettet null ganger.
    let countWrong = 0;
    let score = 0;
    let numberOfLives = 5;
        
// Funksjoner

    function randomNumber() {
        return Math.floor(Math.random() * 2 + 1);
    };
    const gameClicks = ["string1" , "string2"];
    gameClicks.pop()
    gameClicks.push()
     
    //Hovedfunksjon som kjøres ved event.
    function gatherFunctions(){
        if(randomNumber() === 1) { //Setter en av de to boksene tilfeldig som den riktige.
            score++;
            if(score === 3 | score === 5 | score === 7) {
                numberOfLives++;
            }
            countRight++
        }else{
            numberOfLives--;
            countWrong++;
        }
        numberOfLivesDiv.innerHTML = "";

        for (let i=0; i< numberOfLives; i++) {
            numberOfLivesDiv.innerHTML += `${image}`;
        }

        numberOfRightAnswersDiv.innerHTML = `<p>Antall riktige: ${countRight}</p>`;
        numberOfWrongAnswersDiv.innerHTML = `<p>Antall feil: ${countWrong}</p>`;

        if(score === 10) {
            alert("You win!");
        }

        if(numberOfLives === -1 ) {
            alert("You lose!")
        }
    };
// Events
    function initGame() {

        console.log(`NumberOfLives=${numberOfLives}`);
        console.log(`Score=${score}`);
    
        numberOfLivesDiv.innerHTML ="";
        for (let i=0; i< numberOfLives; i ++) {
            numberOfLivesDiv.innerHTML += `${image}`;
        }
        boxOneDiv.addEventListener("click", gatherFunctions);
        boxTwoDiv.addEventListener("click", gatherFunctions);
    
    }
    
    initGame();

    