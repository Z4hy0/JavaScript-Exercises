/*
    2 - IMC
    Formula do IMC 
    IMC = Peso / (altura * altura)

    Elabore um algoritmo que dado o peso e a altura de um adulto mostra a condição de acordo com a tabela a seguir.

    IMC em adultos Condição:
    - Abaixo de 18.5 Abaixo do peso;
    - Entre 18.5 e 25 Peso normal;
    - 25 e 30 Acima do peso;
    - 30 e 40 Obeso;
    - Acima de 40 Obesidade grave;
*/

const peso = 200;
const altura = 1.80;

const imc = peso / (altura*altura);
console.log(imc.toFixed(2));

if(imc < 18.5){
    console.log('Abaixo do peso');
}else if(imc > 18.5 && imc < 25){
    console.log('Peso Normal');
}else if(imc > 25 && imc < 30){
    console.log('Acima do Peso!');
}else if(imc > 30 && imc < 40){
    console.log('Obeso!!');
}else{
    console.log('Obesidade grave!!!');
}