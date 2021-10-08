//HTML-objekter
    const boxOneDiv = document.getElementById("box1-div");
    const boxTwoDiv = document.getElementById("box2-div");
    const numberOfLivesDiv = document.getElementById("number-of-lives-div");
    const numberOfRightAnswersDiv = document.getElementById("number-of-right-answers-div");
    const numberOfWrongAnswersDiv = document.getElementById("number-of-wrong-answers-div");
    const outputDiv = document.getElementById("output-div");
    const refreshBtn = document.getElementById("refresh-button");

// Variabler
    const image = `<img src="images/person1.jpg">`;
    let countRight = 0;     //Brukeren starter med å ha gjettet null ganger.
    let countWrong = 0;     //Brukeren starter med å ha gjettet null ganger.
    let score = 0;          //Brukeren starter med å ha oppnådd null i score.
    let numberOfLives;      //Brukeren startet med å ha fem liv før tilleggsfunksjonalitet.
    
// Funksjoner
    function setDifficulty(){ //Denne funksjonen lar brukeren bestemme vanskelighetsgrad.
        let difficultyPrompt = parseInt(prompt("Hvor mange liv ønsker du? Fra 1 til 10?"));
        if(difficultyPrompt >= 1 && difficultyPrompt <= 10){
            numberOfLives = difficultyPrompt;
        }else{
            alert("Beklager, prøv igjen.");
        }
    };

    function randomNumber(){ //Math.random brukes for å sette en av de to boksene som den riktige.
        return Math.floor(Math.random() * 2 + 1);
    };

    //Funksjon som teller riktig/feil gjettet, og hvor mange liv brukeren har.
    function gatherFunctions(){
        if(randomNumber() === 1){ //Setter en av de to boksene tilfeldig som den riktige.
            score++;               //Brukeren får poeng.
            if(score === 3 | score === 5 | score === 7) { //Dersom brukeren får 3, 5, 7 i score,
                numberOfLives++;                          //vil brukeren få ett liv til.
            }
            countRight++;           //Brukeren har gjettet riktig.
            outputDiv.innerHTML = "Riktig gjettet."
        }else{                      //Hvis boksen ikke har verdi 1 vil
            numberOfLives--;        //brukeren miste liv,
            countWrong++;           //fordi brukeren gjettet feil.
            outputDiv.innerHTML = "Feil gjettet."
        }

        numberOfLivesDiv.innerHTML = "";
        for (let i=0; i < numberOfLives; i++){          //Løkke som legger til bilde.
            numberOfLivesDiv.innerHTML += `${image}`;
        }

        numberOfRightAnswersDiv.innerHTML = `<p>Antall riktige: ${countRight}</p>`; //Skriver ut antall ganger gjettet riktig.
        numberOfWrongAnswersDiv.innerHTML = `<p>Antall feil: ${countWrong}</p>`;    //Skriver ut antall ganger gjettet feil.

        if(score === 10){      //if-funksjon som avgjør at brukeren har vunnet spillet.
            boxOneDiv.innerHTML = "";
            boxOneDiv.style.width = '0';
            boxOneDiv.style.height = '0';
            boxOneDiv.style.border = '0';
            boxTwoDiv.innerHTML = "";
            boxTwoDiv.style.width = '0';
            boxTwoDiv.style.height = '0';
            boxTwoDiv.style.border = '0';
            numberOfLivesDiv.innerHTML = "";
            numberOfRightAnswersDiv.innerHTML = "";
            numberOfWrongAnswersDiv.innerHTML = "";
            outputDiv.innerHTML = `<p>GRATULERER, DU VANT!</p><img src="images/fireworks.jpg">`;
        }
        if(numberOfLives === -1){ //if-(tilleggs)funksjon som avgjør at brukeren har tapt spillet.
            alert("GAME OVER");
            //her kunne vi fikset noe mer spennende.
        }
    };

    refreshBtn.onclick = function restartGame(){ //Tilleggsfunksjon som resetter og starter spillet på nytt
        numberOfLives = 0;
        score = 0;
        countRight = 0;
        countWrong = 0;
        numberOfRightAnswersDiv.innerHTML = `<p>Antall riktige: 0</p>`;
        numberOfWrongAnswersDiv.innerHTML = `<p>Antall feil: 0</p>`;
        outputDiv.innerHTML = "Klikk på en av boksene for å begynne spillet";
        initGame();
    };

// Events
    function initGame(){ //Funksjon som starter spillet.
        setDifficulty(); //Tilleggsfunksjon

        console.log(`NumberOfLives = ${numberOfLives}`);
        console.log(`Score = ${score}`);
    
        numberOfLivesDiv.innerHTML ="";
        for (let i=0; i < numberOfLives; i++){
            numberOfLivesDiv.innerHTML += `${image}`;
        }
        boxOneDiv.addEventListener("click", gatherFunctions);
        boxTwoDiv.addEventListener("click", gatherFunctions);
    }
    initGame(); //Kjør spillet.



    //tilleggsfunksjon: brukeren kan bestemme vanskelighetsgrad ved å skrive/velge hvor mange liv de vil ha.
    //      - dette kan ordnes med f.eks en prompt hvor let numberOfLives = verdien til prompt,
    //        ...for enkelthets skyld kan denne funksjonen få navnet level(); for øyeblikket

    //tilleggsfunksjon: brukeren kan restarte spillet med en knapp for å begynne på nytt.
    //      - dette kan ordnes med f.eks en funksjon som setter score, countRight, countWrong og numberOfLives
    //        ...til 0. deretter en onclick-event / add.EventListener som først kjører denne funksjonen, og
    //        ...deretter de resterende funksjonene (level(), randomNumber(), gatherFunctions() osv.)
    //        ... men denne funksjonen skal bare kjøres når knappen blir trykket på, vi vil ikke at
    //        ...spillet skal restartes ut av det blå.