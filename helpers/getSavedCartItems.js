const getSavedCartItems = (item) => {
  localStorage.getItem(item);
};

if (typeof module !== 'undefined') {
  module.exports = getSavedCartItems;
}
