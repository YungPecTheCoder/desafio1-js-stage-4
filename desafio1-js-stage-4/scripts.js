number1 = prompt('Digite o primeiro número')
number2 = prompt('Digite o segundo número')

result1 = Number(number1) + Number(number2)
result2 = Number(number1) - Number(number2)
result3 = Number(number1) * Number(number2)
result4 = Number(number1) / Number(number2)
result5 = Number(number1) % Number(number2)

alert(`A soma dos dois números é ${result1}.`)
alert(`A subtração dos dois números é ${result2}.`)
alert(`A multiplicação dos dois números é ${result3}.`)
alert(`A divisão dos dois números é ${result4}.`)
alert(`O resto dos dois números é ${result5}.`)


if(result1%2 == 0) {
    alert("A soma dos dois números é par.")
} else{
    alert("A soma dos dois números é impar.")
}

if(Number(number1) == Number(number2)) {
    alert("Os números inseridos são iguais.")
} else {
    alert("Os números inseridos são diferentes.")
}