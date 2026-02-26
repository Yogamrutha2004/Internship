function forLoop() {
    let result = "For Loop: ";
    for (let i = 1; i <= 5; i++) {
        result += i + " ";
    }
    document.getElementById("output").innerHTML = result;
}

function whileLoop() {
    let result = "While Loop: ";
    let i = 1;
    while (i <= 5) {
        result += i + " ";
        i++;
    }
    document.getElementById("output").innerHTML = result;
}

function doWhileLoop() {
    let result = "Do-While Loop: ";
    let i = 1;
    do {
        result += i + " ";
        i++;
    } while (i <= 5);
    document.getElementById("output").innerHTML = result;
}

function forEachLoop() {
    let result = "ForEach Loop: ";
    let arr = [10, 20, 30, 40];
    arr.forEach(function(num) {
        result += num + " ";
    });
    document.getElementById("output").innerHTML = result;
}

function nestedLoop() {
    let result = "Nested Loop:<br>";
    for (let i = 1; i <= 3; i++) {
        let row = "";
        for (let j = 1; j <= 3; j++) {
            row += i + "," + j + " ";
        }
        result += row + "<br>";
    }
    document.getElementById("output").innerHTML = result;
}

function breakLoop() {
    let result = "Break Example: ";
    for (let i = 1; i <= 5; i++) {
        if (i === 3) break;
        result += i + " ";
    }
    document.getElementById("output").innerHTML = result;
}

function continueLoop() {
    let result = "Continue Example: ";
    for (let i = 1; i <= 5; i++) {
        if (i === 3) continue;
        result += i + " ";
    }
    document.getElementById("output").innerHTML = result;
}
