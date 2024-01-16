/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {
  const categoryObj = {};

  for (let i = 0; i < transactions.length; i++) {
    const { price, category } = transactions[i];
    if (!categoryObj[category]) {
      categoryObj[category] = 0;
    }
    categoryObj[category] += price;
  }

  const resultArray = [];

  for (const category in categoryObj) {
    resultArray.push({ category: category, totalSpent: categoryObj[category] });
  }

  return resultArray;
  
}

module.exports = calculateTotalSpentByCategory;
