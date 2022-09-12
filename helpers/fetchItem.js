const fetchItem = async (item) => {
  // seu código aqui
  const items = `https://api.mercadolibre.com/items/${item}`;
  const response = await fetch(items);
  const data = await response.json();
  return data;
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchItem,
  };
}
