// Crie um programa que armazene seu nome em uma variável e imprima a mensagem "Olá, [nome]" utilizando Template String
var nome = 'Jader'

document.write(`Olá, ${nome} <br>`)

// 2. Crie um programa com duas variáveis do tipo Double e imprima a soma das mesmas

num1 = 10.00
num2 = 15.20

document.write(`<br>A soma de ${num1} e ${num2} é :: ${num1+num2} <br>`)

// 3. Crie um programa que imprima o valor ao quadrado de um número

num3 = 6

document.write(`<br>O valor ao quadrado de  ${num3} é ${num3 ** 2} <br>`)

// 4. Crie um programa que imprima o dobro de um número

num4 = 50

document.write(`<br>O dobro de  ${num4} é igual a >> ${num4 * 2} <br>`)

// 5. Crie um programa que utilize os operadores aritméticos e imprima o antecessor e o sucessor de um número

num5 = 10
ant = 10 - 1
suc = 10 + 1

document.write(`<br>
                    O número base é:: ${num5}.<br>
                    Seu antecessor é ${ant} e seu sucessor é ${suc}
              <br>`)


// 6. Crie um programa que calcule e imprima o total de dias em 7 meses, considerando que cada mês tenha 30 dias

totalDias = 7 * 30

document.write(`<br>
                    Considerando um mês de 30 dias, 7 meses corresponde a ${totalDias} dias. 
              <br>`)

// 7. Crie um programa que calcule e imprima a média das cinco notas de um aluno

let notas = [10, 8, 6, 4, 9 ]
qtdeNotas = notas.length

total = 0
for (let nota of notas) {
   total += nota;
   }

document.write(`<br>
                    As notas do aluno são: ${notas}. <br>
                    Sua média é ${total / qtdeNotas}
              <br>`)

// 8. Crie um programa que converta metros para centímetros e imprima o resultado

num8 = 250

document.write(`<br>
                    Conversão de ${num8} metros em centímetros:: >> ${num8 * 100} cm. 
                <br>`)

// 9. Crie um programa que calcule o desconto na venda de um produto

num9 = 1200
desc = 30

document.write(`<br>
                    Aplicando desconto. Preço original do produto >> ${num9}. <br> Aplicado um desconto de ${desc} %! Valor de deconto é ${num9 * (desc/100)}. 
                <br>`)


// 10. Crie funções para as 4 operações aritméticas básicas

function soma(arg1, arg2){
  document.write(`<br>
                      A operação soma dentro da função de ${arg1} com ${arg2} é igual a ${arg1 + arg2}`)    
}

function subtracao(arg1, arg2){
  document.write(`<br>
                      A operação subtracao dentro da função de ${arg1} com ${arg2} é igual a ${arg1 - arg2}`)    
}

function multiplicacao(arg1, arg2){
  document.write(`<br>
                      A operação multiplicacao dentro da função de ${arg1} com ${arg2} é igual a ${arg1 * arg2}`)    
}

function divisao(arg1, arg2){
  document.write(`<br>
                      A operação divisao dentro da função de ${arg1} com ${arg2} é igual a ${arg1 / arg2}
                  <br>`)
}

soma(15,20)
subtracao(100,80)
multiplicacao(3,9)
divisao(20,5)

// 11. Utilizando instrução condicional, crie um programa que determine se uma pessoa é maior ou menor de idade

function verificaIdade(idade){
  if (idade > 17){
    document.write('<br>Maior de idade <br>')
  } else {
    document.write('<br>Menor de idade <br>')
  }
}

idade1 = verificaIdade(19)
idade2 = verificaIdade(17)

// 12. Utilizando instrução condicional e operadores relacionais, crie um programa que identifique se um determinado número inteiro é par ou ímpar

function ehPar(arg){
  if(arg % 2 ==0) {
    document.write(`<br>O número ${arg} é par <br>`)
    
  } else{
    document.write(`<br>O número ${arg} não é par <br>`)
    
    }
}

let numeros = [2,7,9,6]
for(let x of numeros){
ehPar(x)
}

// 13. Utilizando instrução condicional e operadores lógicos, crie um programa que simule um sistema de login

function verificaLogin(user, senha){
  if(user == 'admin' && senha == '123'){
    document.write(`<br> Usuário conectado! <br>` )
  } else{
    document.write(`<br> Usuário ou senha inválido <br>`)
  }
}

verificaLogin('admin', 1234)
verificaLogin('administrador', 1234)
verificaLogin('admin', 123)

// 14. Utilizando funções e estrutura condicional, crie um programa que calcule o IMC de uma pessoa, imprimir o valor do IMC e sua classificação

function calcIMC(altura, peso){
  imc = Number((peso / (altura **2 ) ) * 10000)
  if (imc <18.5){
    classif = 'Magreza || Obsidade Grau 0 '                
  } else if (imc > 18.4 && imc <25){
    classif = 'Normal || Obsidade Grau 0 '                
  } else if (imc > 24.9 && imc < 30) {
    classif = 'Sobrepeso || Obsidade Grau I '                
  } else if (imc > 29.9 && imc < 40) {
    classif = 'Obesidade || Obsidade Grau II '                
  } else{
    classif = 'Obesidade grave || Obsidade Grau III '                
  }
  document.write(`<br> 
                      Seu peso ${peso} KG e sua altura ${altura} cm <br>
                      Seu IMC é ${imc} e sua classificação é <strong>${classif}</strong>.
                  <br>`)
}

pessoa1 = calcIMC(181, 90)
pessoa2 = calcIMC(170, 120)

// 15. Utilizando o loop de repetição for, crie um programa que imprima qualquer tabuada

function tabuada(arg){
  document.write(`<h3> Tabuada do ${arg}</h3>`)
  for(x of [1,2,3,4,5,6,7,8,9,10]){
    // console.log(arg * x)
    document.write(`${arg} x ${x} = ${arg * x}<br>`)
  }
}

tabuada(2)
tabuada(9)

// // 16. Utilizando o loop de repetição for, instrução condicional, e operadores relacionais e lógicos crie um programa que conte a quantidade de vogais em uma String

texto = 'Quantas vogais tem aqui?'

function getCount(str) {
  qtdVogais = (str.match(/[aeiou]/ig)||[]).length;
  document.write(`<br> O texto "${str}" possui ${qtdVogais} vogais.`)
 }

 getCount(texto)

 