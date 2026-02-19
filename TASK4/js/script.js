function checkNumber() {
  const value = document.getElementById("num").value;
  const result = document.getElementById("result");

  try {
    if (value === "") {
      throw "Input is empty!";
    }

    if (isNaN(value)) {
      throw "Please enter a valid number!";
    }

    const square = value * value;
    result.style.color = "green";
    result.innerHTML = "Square is: " + square;

  } catch (error) {
    result.style.color = "red";
    result.innerHTML = error;
  }
}
