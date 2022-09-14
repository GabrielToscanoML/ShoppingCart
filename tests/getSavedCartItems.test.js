const localStorageSimulator = require('../mocks/localStorageSimulator');
const getSavedCartItems = require('../helpers/getSavedCartItems');

localStorageSimulator('getItem');

describe('4 - Teste a função getSavedCartItems', () => {
  // implemente seus testes aqui
  it('Verifica se ao executar "getSavedCartItems" o método "localStorage.getItem" é chamado', () => {
    const callFunction = getSavedCartItems();
    expect(localStorage.getItem).toBeCalled();
  });

  it('Verifica se ao executar "getSavedCartItems" o método "localStorage.getItem" contém o parametro "cartItems"', () => {
    const callFunction = getSavedCartItems();
    expect(localStorage.getItem).toBeCalledWith('cartItems');
  });
});
