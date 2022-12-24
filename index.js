function evalua() {
    var ratingPoint = document.getElementById("range").value;
    var resultDisplay = document.getElementById("result");
    if (ratingPoint > 3) {
        resultDisplay.style.color = "green";
        resultDisplay.style.fontWeight = "700";
        resultDisplay.style.fontSize = "20px";
    } else if (ratingPoint <= 3) {
        resultDisplay.style.color = "red";
        resultDisplay.style.fontWeight = "500";
        resultDisplay.style.fontSize = "18px";
    }

    resultDisplay.innerText = `You given ${ratingPoint} Out of 5`;
}