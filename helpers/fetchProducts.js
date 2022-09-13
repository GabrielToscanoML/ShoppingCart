const fetchProducts = async (product) => {
  // seu código aqui
  const products = `https://api.mercadolibre.com/sites/MLB/search?q=${product}`;
  const response = await fetch(products);
  const data = await response.json();
  return data;
};
console.log(fetchProducts('computador'));
if (typeof module !== 'undefined') module.exports = { fetchProducts };
