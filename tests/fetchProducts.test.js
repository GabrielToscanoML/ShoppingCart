require('../mocks/fetchSimulator');
const { expect } = require('@jest/globals');
const { fetchProducts } = require('../helpers/fetchProducts');
const computadorSearch = require('../mocks/search');

describe('1 - Teste a função fetchProducts', () => {
  // implemente seus testes aqui
  it('Verifica se "fetchProducts" é uma função:', () => {
    expect(typeof fetchProducts).toBe('function');
  });

  it('Verifica se o fetch é chamado com o argumento "computador"', async () => {
    await fetchProducts('computador');
    expect(fetch).toBeCalled();
  });

  it('Verifica se a função com o argumento "computador" utiliza o endpoint correto', async () => {
    await fetchProducts('computador');
    expect(fetch).toBeCalledWith('https://api.mercadolibre.com/sites/MLB/search?q=computador');
  });

  it('Verifica a função com o argumento "computador"', async () => {
    const actual = await fetchProducts('computador');
    const expected = (computadorSearch);
    expect(actual).toEqual(expected)
  });

  it('Verifica se ao chamar a função sem argumentos retorna erro', async () => {
    try{
      await fetchProducts();
    }
    catch(err){
      expect(err).toEqual(new Error('You must provide an url'));
    }
  });
});
