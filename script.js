const input1 = document.getElementById('num1');
const input2 = document.getElementById('num2');
const botaoCalcular = document.getElementById('botaoSomar');
const displayResultado = document.getElementById('resultadoSoma');
botaoCalcular.addEventListener('click', () => {
 // Conversão explícita de String para Number
 const valor1 = Number(input1.value);
 const valor2 = Number(input2.value);
 
 const soma = valor1 + valor2;
 displayResultado.innerText = `Resultado: ${soma}`;
});