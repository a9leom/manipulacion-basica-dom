const h1 = document.querySelector('h1');
const form = document.querySelector('#form');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btn-calcular');
const pResult = document.querySelector('#result');

btn.addEventListener('click', sumarInputValues);

function sumarInputValues(event) {
    const sumaInputs = Number(input1.value) + Number(input2.value);
    pResult.innerText = `Resultado: ${sumaInputs}`;
}