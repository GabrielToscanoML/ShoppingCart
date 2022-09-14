// Esse tipo de comentário que estão antes de todas as funções são chamados de JSdoc,
// experimente passar o mouse sobre o nome das funções e verá que elas possuem descrições! 
// const { fetchProducts } = require('./helpers/fetchProducts');
// const { fetchItem } = require("./helpers/fetchItem");

// const { fetchItem } = require('./helpers/fetchItem');

// Fique a vontade para modificar o código já escrito e criar suas próprias funções!
const itemCarrinho = document.querySelector('.cart__items');
let totalPrice = 0.00;
const totalPriceHTML = document.querySelector('.total-price');

// botao e funcao de limpar o carrinho
const clearCartButton = document.querySelector('.empty-cart');
function clearCart() {
  while (itemCarrinho.lastChild) {
    itemCarrinho.removeChild(itemCarrinho.lastChild);
  }
}
clearCartButton.addEventListener('click', clearCart);

function cartItemClickListener(id) {
  for (let index = itemCarrinho.children.length - 1; index >= 0; index -= 1) {
    if (itemCarrinho.children[index].id === id) {
      itemCarrinho.children[index].remove();
    }
  }
}

/**
 * Função responsável por criar e retornar o elemento de imagem do produto.
 * @param {string} imageSource - URL da imagem.
 * @returns {Element} Elemento de imagem do produto.
 */
const createProductImageElement = (imageSource) => {
  const img = document.createElement('img');
  img.className = 'item__image';
  img.src = imageSource;
  return img;
};

/**
 * Função responsável por criar e retornar um item do carrinho.
 * @param {Object} product - Objeto do produto.
 * @param {string} product.id - ID do produto.
 * @param {string} product.title - Título do produto.
 * @param {string} product.price - Preço do produto.
 * @returns {Element} Elemento de um item do carrinho.
 */
 const createCartItemElement = ({ id, title, price }) => {
  totalPrice += price;
  totalPriceHTML.innerText = `VALOR TOTAL: R$ ${totalPrice}`;
  const li = document.createElement('li');
  itemCarrinho.appendChild(li);
  li.className = 'cart__item';
  li.innerText = `ID: ${id} | TITLE: ${title} | PRICE: $${price}`;
  li.id = id; // criando id auxiliar
  li.addEventListener('click', () => {
    cartItemClickListener(id);
    totalPrice -= price;
    totalPriceHTML.innerText = `VALOR TOTAL: R$ ${totalPrice}`;
  });
  return li;
};

/**
 * Função responsável por criar e retornar qualquer elemento.
 * @param {string} element - Nome do elemento a ser criado.
 * @param {string} className - Classe do elemento.
 * @param {string} innerText - Texto do elemento.
 * @returns {Element} Elemento criado.
 */
const createCustomElement = (element, className, innerText) => {
  const e = document.createElement(element);
  e.className = className;
  e.innerText = innerText;
  return e;
};

async function addItemCart(id) {
  const targetItem = await fetchItem(id);
  createCartItemElement({ 
    id: targetItem.id,
    title: targetItem.title,
    price: targetItem.price, 
  });
}
/**
 * Função responsável por criar e retornar o elemento do produto.
 * @param {Object} product - Objeto do produto. 
 * @param {string} product.id - ID do produto.
 * @param {string} product.title - Título do produto.
 * @param {string} product.thumbnail - URL da imagem do produto.
 * @returns {Element} Elemento de produto.
 */
const createProductItemElement = ({ id, title, thumbnail, price }) => {
  const section = document.createElement('section');
  section.className = 'item';
  const items = document.querySelector('.items');
  items.appendChild(section);
  section.appendChild(createCustomElement('span', 'item_id', id));
  section.appendChild(createCustomElement('span', 'item__title', title));
  section.appendChild(createCustomElement('span', 'item__price', price));
  section.appendChild(createProductImageElement(thumbnail));
  const addCartButton = createCustomElement('button', 'item__add', 'Adicionar ao carrinho!');
  addCartButton.addEventListener('click', () => {
    addItemCart(id);
  });
  section.appendChild(addCartButton);
  return section;
};

/**
 * Função que recupera o ID do produto passado como parâmetro.
 * @param {Element} product - Elemento do produto.
 * @returns {string} ID do produto.
 */
const getIdFromProductItem = (product) => product.querySelector('span.item_id').innerText;

const criandoListaDeItens = async () => {
  const produtos = await fetchProducts('computador');
  const listaProdutos = produtos.results;
  listaProdutos.forEach((item) => {
    createProductItemElement({
      id: item.id,
      title: item.title,
      thumbnail: item.thumbnail,
      price: `$${item.price}`,
    });
  });
};

window.onload = () => {
  totalPriceHTML.innerText = `VALOR TOTAL: R$ ${totalPrice}`;
  criandoListaDeItens();
};
