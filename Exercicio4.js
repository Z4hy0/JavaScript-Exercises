function digaMeuNome(nome){
    return 'Meu nome é '+ nome;
}
digaMeuNome('Francisco');


function verificarIdade(idade){
    if(idade >= 18){
        console.log(digaMeuNome('Francisco') +  ' sou maior de idade');
    }else{
        console.log (digaMeuNome ('Susana') + ' sou menor de idade');
    }
}
verificarIdade(30);
