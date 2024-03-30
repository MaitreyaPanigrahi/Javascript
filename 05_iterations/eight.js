const myNums = [1, 2, 3];

// const initialValue = 0;
// const total = myNums.reduce((acc, currVal) => {
//   console.log(`Acc value is ${acc}  and currVal is ${currVal} 
//     and summing them give ${acc + currVal}`);
//   return acc + currVal;
// }, initialValue);

// console.log(total);

const shoppingCart = [
  {
    itemName: "js course",
    price: 2999,
  },
  {
    itemName: "data science course",
    price: 12999,
  },
  {
    itemName: "py course",
    price: 999,
  },
  {
    itemName: "mobile dev course",
    price: 5999,
  },
];

const totalPrice = shoppingCart.reduce((acc,currItem)=>
{
   return acc + currItem.price 
},0 )

console.log(totalPrice);
