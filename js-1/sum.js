// escribe la función suma acá
function sum(a) {
  let total = 0;

  for (i = 1; i <= a; i++) {
    total = total + i;
  }
  return total;
}

// código de prueba
console.log(sum(4)); // 1 + 2 + 3 + 4 = 10
console.log(sum(10)); // 55
console.log(sum(15)); // 120
