const localStorageSimulator = require('../mocks/localStorageSimulator');
const saveCartItems = require('../helpers/saveCartItems');

localStorageSimulator('setItem');

describe('3 - Teste a função saveCartItems', () => {
  // implemente seus testes aqui
  it('Verifica se ao executar "saveCartItems" com argumento, o método "localStorage.setItem" é chamado', () => {
    const callFunction = saveCartItems('item');
    expect(localStorage.setItem).toBeCalled();
  });

  it('Verifica se ao executar "saveCartItems" com argumento, o método "localStorage.getItem" contém o parametro "cartItems" e o próprio argumento', () => {
    const callFunction = saveCartItems('item');
    expect(localStorage.setItem).toContain('cartItems','item');
  });
});
