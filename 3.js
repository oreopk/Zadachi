const menu2 = [
  {
    index: 1,
    name: 'sosiski',
    price: 10,
    description: 'Good eat',
    Category: 'Food',
  },
  {
    index: 2,
    name: 'milk',
    price: 15,
    description: 'Good drink',
    Category: 'Drink',
  },
  {
    index: 3,
    name: 'Orange',
    price: 23,
    description: 'Fruit',
    Category: 'Food',
  },
  {
    index: 4,
    name: 'cola',
    price: 50,
    description: 'Good cola',
    Category: 'Drink',
  },
  {
    index: 5,
    name: 'Chocolate',
    price: 10,
    description: 'Sweet',
    Category: 'Food',
  },
];

function filterProducts(products, filters) {
  return products.filter((product) => {
    for (const key in filters) {
      if (filters[key] !== product[key]) {
        return false;
      }
    }
    return true;
  });
}
function sortProducts(arr, sortBy) {
  const sortedArr = [...arr];
  sortedArr.sort((a, b) => {
    if (a[sortBy] < b[sortBy]) {
      return -1;
    }
    if (a[sortBy] > b[sortBy]) {
      return 1;
    }
    return 0;
  });
  return sortedArr;
}
console.log('По цене');
const sortedProductsByPrice = sortProducts(menu2, 'price');
console.log(sortedProductsByPrice);
console.log('По категории');
const sortedProductsByCategory = sortProducts(menu2, 'Category');
console.log(sortedProductsByCategory);
console.log('       ');
console.log('Фильтр');
const filteredProducts = filterProducts(menu2, { price: 10, Category: 'Food' });
console.log('Фильтр = ', filteredProducts);
