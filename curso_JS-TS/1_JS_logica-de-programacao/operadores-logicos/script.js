/*
OPERADORES LÓGICOS:
&& -> AND -> E - Todas as expressões precisam ser verdadeiras para retornar true
|| -> OR -> OU - 
! -> NOT -> NÃO - 
*/

const usuario = 'Hugo';
const senha = '123456';

const vaiLogar = usuario === 'Hugo' && senha === '12345';

console.log(vaiLogar);