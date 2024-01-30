/*
    1) Faça um algoritmo que dado 3 notas tiradas por um aluno em um semestre da faculdade. Calcule e imprima a sua média e sua classificação conforme a tabela abaixo.

    Média = (nota 1 + nota 2 + nota 3) / 3;

    Classificação
    - Média menor que 5: Reprovado
    - Média entre 5 e 7: Recuperação;
    - Média acima de 7: Aprovado, passou de semestre.

*/

const nota1 = 10;
const nota2 = 8;
const nota3 = 10;

const media =(nota1 + nota2 + nota3) / 3;

console.log(media.toFixed(2));

if (media < 5){
    console.log('Reprovado');
} else if(media >= 5 && media <= 7){
    console.log('Recuperação');
}else{
    console.log('Passou de Semestre');
}