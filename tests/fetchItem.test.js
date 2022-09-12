require('../mocks/fetchSimulator');
const { fetchItem } = require('../helpers/fetchItem');
const item = require('../mocks/item');

describe('2 - Teste a função fetchItem', () => {
  // implemente seus testes aqui
  it('Verifica se "fetchItem" é uma função:', () => {
    expect(typeof fetchItem).toBe('function');
  });

  it('Verifica se o fetch é chamado com o argumento "MLB1615760527"', async () => {
    await fetchItem('MLB1615760527');
    expect(fetch).toBeCalled();
  });

  it('Verifica se a função com o argumento "MLB1615760527" utiliza o endpoint correto', async () => {
    await fetchItem('MLB1615760527');
    expect(fetch).toBeCalledWith('https://api.mercadolibre.com/items/MLB1615760527');
  });

  it('Verifica a função com o argumento "MLB1615760527"', async () => {
    const actual = await fetchItem('MLB1615760527');
    const expected = (item);
    expect(actual).toEqual(expected)
  });

  it('Verifica se ao chamar a função sem argumentos retorna erro', async () => {
    try{
      await fetchItem();
    }
    catch(err){
      expect(err).toEqual(new Error('You must provide an url'));
    }
  });
});
