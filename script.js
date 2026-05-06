const button = document.getElementById("calculateBtn");

button.addEventListener("click", function(){

const income = Number(document.getElementById("incomeInput").value);
const expenses = Number (document.getElementById("expensesInput").value); 

const disponsibleIncome = income-expenses;
const recommendedRent = disponsibleIncome * 0.3; 

console.log("income:", income);
console.log("expenses:", expenses);

console.log("disponisbleIncome:", disponsibleIncome);
console.log("recommededRent:", recommendedRent); 

document.getElementById("rentResults").textContent ="R" + recommendedRent; 
});

