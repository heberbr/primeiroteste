/* ==========================================
OPERADORES DE COMPARAÇÃO 

> MAIOR
< MENOR
>= Maior igual a
<= Menor igal a
== Igual a
=== igual e do mesmo tipo
!= Diferente de
!== Diferente, inclusive do tipo

================================================*/

 // DESAFIO 1
 const idade = 17
 // verificar se a pessoa é maior igual a 18 anos
 // se sim, deixar entrar, se não, bloquear a entrada
 // se a pessosa tiver 17 anos
 // avisar para voltar quando fizer 18 anos
 if(!(idade >=18) || idade === 17) {
     console.log('Bloquear a entrada')
 } else {
     console.log('Deixar entrar')
 }




 /* =====================================================

     OPERADORES LÓGICOS

     && "E" As duas condições devem ser verdadeiras 
         para qie a condição final seja verdadeira.
        "OU" Uma das condições deve ser verdadeira
        para que a confição final seja verdadeira.
        "NÃO" Nega uma condição
==========================================================*/

console.log(5 == 5 && 6 == 6) // true
console.log(5 == 5 && 6 != 6) // false

console.log(5 != 5 || 6 == 6) // true
console.log(5 == 5 || 6!= 6) // true

console.log(!(5 > 6)) // true
console.log(!(5 < 6)) // true

// dar bonificação de 500 reaiss
// sse vender possuir 100 ou menos pontos
// mas deve possuir mais de 50 pontos


/* =================================================
OPERADORES ARITMÉTICOS

* Multiplicação
/ Divisão
% Resto da divisão
+ Adição
- Subtração

===================================================*/

console.log( 2 * 2) //4
console.log( 2 / 2) //1
console.log( 2 % 1.5) //0.5
console.log( 2 + 2) //4
console.log( 2 - 2) //0 
