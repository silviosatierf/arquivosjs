/*  
Este arquivo contém todas as funções usadas nos exercícios da lista 2 (Aula 02). 
    
DATA: 16-08-2019
ALUNA: Flora Balieiro 
TURMA: 2º ADS (manhã)
*/

function EX_01_mediaNotas() {
    /*
    EXERCÍCIO 01: Faça um programa que receba quatro nostas de um aluno, 
    calcule e mostre a média aritmética das notas e a mensagem de aprovado ou reprovado, 
    considerando para aprovação média 7. 
    */

    var n1 = parseFloat(document.getElementById("nota1").value) //função parseInt() converte strig para número inteiro
    var n2 = parseFloat(document.getElementById("nota2").value) //função parseFloat() converte strig para número decimal
    var n3 = parseFloat(document.getElementById("nota3").value)
    var n4 = parseFloat(document.getElementById("nota4").value)

    var media = (n1 + n2 + n3 + n4) / 4

    //mostra o valor das variáveis no console (não aparece para o usuário)
    console.log(n1, n2, n3, n4, media)
        

    if (media >=6) {
        alert("Parabéns, sua média foi " + media
            + " você foi aprovado!");
    } else {
        alert("Sua média foi " + media
            + " você foi reprovado");
    }
}
   
function EX_02_aprovadoReprovadoExame() {
    /*
    EXERCÍCIO 02: Faça um programa que receba duas notas, calcule e mostre a média aritmética
    e uma mensagem de acordo com as seguintes regras: 
    0,0 a 2,9 = Reprovado
    3,0 a 6,9 = Exame
    7,0 a 10,0 = Aprovado
    */

    var p1 = parseFloat(document.getElementById("prova1").value) //função parseInt() converte strig para número inteiro
    var p2 = parseFloat(document.getElementById("prova2").value) //função parseFloat() converte strig para número decimal    
    var notaFinal = (p1 + p2) / 2

    //mostra o valor das variáveis no console (não aparece para o usuário)
    console.log(p1, p2, notaFinal)  

    if (notaFinal > 6.9) {
        alert("Média: " + notaFinal
            + "\nAPROVADO");
    } else if (notaFinal < 2.9) {
        alert("Média: " + notaFinal
            + "\nREPROVADO");
    } else {
        alert("Média: " + notaFinal
        + "\nEXAME");
    }
}

function EX_03_menor(){
//EXERCÍCIO 03: Faça um programa que receba dois números e mostre o menor.
var num1 = Number(document.getElementById("num1").value)
var num2 = Number(document.getElementById("num2").value)

if (num1 > num2) {
    alert("O menor número é o segundo: " + num2);
} else {
    alert("O menor número é o primeiro: " + num1);
}

}

function EX_04_maior(){
//EXERCÍCIO 04: Faça um programa que receba dois números e mostre o maior.
var num1 = Number(document.getElementById("num1").value) //a função Number() é semelhante à parseFloat()
var num2 = Number(document.getElementById("num2").value)

if (num1 > num2) {
    alert("O maior número é o primeiro: " + num1);
} else {
    alert("O  maior número é o segundo: " + num2);
}

}

function EX_05_escolheOperacoes(){
/*
    EXERCÍCIO 05: Faça um programa que receba dois números e 
    execute as operações listadas abaixo de acordo com a escolha, de 1 a 5, do usuário:
    1 -- média entre os números digitados
    2 -- diferença do maior pelo menor
    3 -- produto entre os números digitados
    4 -- divisão do primeiro pelo segundo

    Se a opção for inválida, mostre uma mensagem de erro e termine a execussão do programa.
    Lembre-se de que, na operação 4, o segundo número deve ser diferente de zero.
*/
    
    var userOption = Number(document.getElementById("escolha").value); //Lembrar da função Number() para transformar string em numérico

    var value1 = Number(document.getElementById("valor1").value);
    var value2 = Number(document.getElementById("valor2").value);
    var resultado

    //função switch()
    switch (userOption) {
        case 1: //1 -- média entre os números digitados
          resultado = (value1 + value2)/ 2
          break;//não entra no case de baixo

        case 2: //2 -- diferença do maior pelo menor
            if (value1 >= value2){
               resultado = value1 - value2
            }
            else {
               resultado = value2 - value1
            }          
        break;//não entra no case de baixo

        case 3: //3 -- produto entre os números digitados
            resultado = value1 * value2;
        break;//não entra no case de baixo

        case 4://4 -- divisão do primeiro pelo segundo
            if (value2 != 0){
                resultado = value1 / value2;
            }
            else {
                resultado = "Divisão por zero!"
            }
        break;//não entra no case de baixo
        
        default: resultado = "Opção inválida!"
    }
        alert("Resultado " + resultado)
}
function EX_07_salario(){
    var sal = Number(document.getElementById("salario").value);
    if (sal < 500){
        var novo = sal + sal*30/100
            alert ("Novo valor " + novo )
    }
    else{
        alert ("Não tem direito a aumento");
    }
}


