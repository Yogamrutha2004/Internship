function showDeclaration() {
    function greet() {
        return "Hello from Function Declaration!";
    }
    document.getElementById("output").innerText = greet();
}

function showExpression() {
    const greet = function() {
        return "Hello from Function Expression!";
    };
    document.getElementById("output").innerText = greet();
}

function showArrow() {
    const greet = () => "Hello from Arrow Function!";
    document.getElementById("output").innerText = greet();
}

function showParameters() {
    function add(a, b) {
        return "Sum is: " + (a + b);
    }
    document.getElementById("output").innerText = add(5, 3);
}

function showCallback() {
    function processUser(name, callback) {
        return callback(name);
    }

    function greet(name) {
        return "Hello " + name + " (Callback executed)";
    }

    document.getElementById("output").innerText =
        processUser("Student", greet);
}


window.addEventListener('DOMContentLoaded', () => {
    document.getElementById('output').innerText = 'Click a button to see the output!';
});
