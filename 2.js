const menu = [
  { index: 1, name: 'sosiski', price: 10, description: 'Good eat' },
  { index: 2, name: 'milk', price: 15, description: 'Good drink' },
  { index: 3, name: 'Orange', price: 23, description: 'Fruit' },
];

const cart = {
  items: [],

  addItem(index, quantity) {
    const item = menu.find((item) => item.index === index);
    if (item) {
      const existingItem = this.items.find(
        (cartItem) => cartItem.index === index
      );
      if (existingItem) {
        existingItem.quantity += quantity;
      } else {
        this.items.push({ ...item, quantity });
      }
    } else {
      console.log('Item not found in the menu.');
    }
  },

  removeItem(index) {
    this.items = this.items.filter((item) => item.index !== index);
  },

  changeQuantity(index, newQuantity) {
    const item = this.items.find((item) => item.index === index);
    if (item) {
      item.quantity = newQuantity;
    } else {
      console.log('Item not found in the cart.');
    }
  },

  calculateTotal() {
    return this.items.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  },

  checkout() {
    console.log('Cart items:');
    this.items.forEach((item) => {
      console.log(
        `${item.name} x ${item.quantity} - $${item.price * item.quantity}`
      );
    });
    console.log(`Total: $${this.calculateTotal()}`);
  },
};

cart.addItem(1, 2);
cart.addItem(2, 1);
cart.changeQuantity(1, 3);
console.log(cart.items);
cart.checkout();
