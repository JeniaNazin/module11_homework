const myStore = {
  "tomatoes": 18,
  "potatoes": 20,
  "cucumbers": 5,
  "price": function() {
    alert('unavailable');
  }
}
myStore.melon = +prompt('Enter the number of melons');
myStore.price();
console.log(myStore);