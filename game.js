function guessTheBakeryItem() {

    const items = [
        { name: "Cupcake", clue: "This small, sweet treat comes in a cup-shaped paper." },
        { name: "Croissant", clue: "A buttery, flaky pastry that's often shaped like a crescent." },
        { name: "Donut", clue: "This item is fried and often has a hole in the middle." },
        { name: "Eclair", clue: "A long, cream-filled pastry often covered in chocolate." }
        { name: "Tart", clue: "This dessert typically has a crust and is filled with fruit or custard." },
        { name: "Macaron", clue: "A small, round, delicate cookie made of almond flour, with a creamy filling." },
        { name: "Brownie", clue: "A dense, fudgy dessert often made with chocolate and nuts." }
    ];

    const randomItem = items[Math.floor(Math.random() * items.length)];
    
    const userGuess = prompt(`Guess the bakery item!\nClue: ${randomItem.clue}`);

    if (userGuess.toLowerCase() === randomItem.name.toLowerCase()) {
        alert("Correct! You guessed it right! 🎉");
        displayGameResult(`Correct! The bakery item is ${randomItem.name}.`);
    } else {
        alert(`Wrong! The correct answer is ${randomItem.name}.`);
        displayGameResult(`Wrong! The correct answer is ${randomItem.name}.`);
    }
}

function displayGameResult(resultMessage) {
    document.getElementById("gameResult").style.display = "block";
    document.getElementById("resultText").textContent = resultMessage;
}

document.getElementById("startGameButton").addEventListener("click", function() {
    guessTheBakeryItem();
});
