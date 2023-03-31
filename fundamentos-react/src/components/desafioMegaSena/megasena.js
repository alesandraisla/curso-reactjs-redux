function gerarNumeroNaoContido(min, max, array) {
  const aleatorio = parseInt(Math.random() * (max + 1 - min) + min);
  return array.includes(aleatorio)
    ? gerarNumeroNaoContido(min, max, array)
    : aleatorio;
}

function gerarNumeros(qt) {
  const numeros = Array(qt)
    .fill(0)
    .reduce((nums) => {
      const novoNumero = gerarNumeroNaoContido(1, 60, nums);
      return [...nums, novoNumero];
    }, [])
    .sort((n1, n2) => n1 - n2); // ordem crescente

  return numeros;
}

console.log(gerarNumeros(7));
