/** @format */

let result = document.querySelector("#result");

console.log(operasi);

let content = document.querySelector("#content");

let operation = (event) => {
    let num1 = document.querySelector("#input1").value;
    let num2 = document.querySelector("#input2").value;
    let operasi = document.querySelector("#operasi").value;
    event.preventDefault();

    if (operasi == "*") {
        content.innerHTML = `${Number(num1) * Number(num2)}`;
    } else if (operasi == "/") {
        content.innerHTML = `${Number(num1) / Number(num2)}`;
    } else if (operasi == "+") {
        content.innerHTML = `${Number(num1) + Number(num2)}`;
    } else if (operasi == "-") {
        content.innerHTML = `${Number(num1) - Number(num2)}`;
    } else if (operasi == "%") {
        content.innerHTML = `${Number(num1) % Number(num2)}`;
    } else if (operasi == "**") {
        content.innerHTML = `${Number(num1) ** Number(num2)}`;
    }
};

result.addEventListener("click", operation);
