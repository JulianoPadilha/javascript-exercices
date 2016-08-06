//Calcularemos a área do triângulo através da fórmula de Heron.
var p = (5 + 6 + 7) /2; 
var area = Math.sqrt(p * (p - 5) * (p - 6) * (p - 7)); //A função sqrt() do Objeto Math é usado para calcular a raiz quadrada.

console.log(area);