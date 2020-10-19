document.getElementById("result").disabled = true;

document.getElementById("calc").onclick = (event) => {
    event.preventDefault();   

    let result = document.getElementById('result');
    let message = document.getElementById('message');
    document.getElementById('message').textContent = "";
    const radioButton = document.querySelector('input[name="operator"]:checked')
    if (radioButton) {
        let number1 = document.getElementById('numberOne').value.toString();
        let number2 = document.getElementById('numberTwo').value.toString();

        if (number1 === "") {
            message.innerHTML = 'Please input the value for the text field number one';
        } else if (number2 === "") {
            message.innerHTML = 'Please input the value for the text field number two';
        } else {
            if (radioButton.value === "add") {
                result.value = parseFloat(number1) + parseFloat(number2);
            }
            else if (radioButton.value === "subtract") {
                result.value = parseFloat(number1) - parseFloat(number2);
            } else if (radioButton.value === "multiply") {
                result.value = parseFloat(number1) * parseFloat(number2);
            } else if (radioButton.value === "divide") {
                if (number2 !== "0") {
                    result.value = parseFloat(number1) / parseFloat(number2);
                } else {
                    result.value = "";
                    message.innerHTML = 'The second operand must not be zero';
                }
            }

        }


    } else {
        message.textContent = 'Please choose a operator to perform the calculation'
    }
}

document.getElementById('numberOne').onblur = (e)=>{

const data = parseFloat(e.target.value);
    if(isNaN(data)){
        document.getElementById('message').innerHTML = 'Your the number one must have numberic datatype';
    }
    if(e.target.value === ""){
        document.getElementById('message').innerHTML = "";
    }
}

document.getElementById('numberTwo').onblur = (e)=>{

    const data = parseFloat(e.target.value);
    
    if(isNaN(data)){
        document.getElementById('message').innerHTML = 'Your the number two must have numberic datatype'

    }
    if(e.target.value === ""){
        document.getElementById('message').innerHTML = "";
    }
}
// document.getElementById('numberOne').addEventListener('input',()=>{
//     document.getElementById('message').innerHTML = "";
// })

// document.getElementById('numberTwo').addEventListener('input',()=>{
//     document.getElementById('message').innerHTML = "";
// })