let startBtn = document.getElementById("start");
let budgetValue = document.getElementsByClassName("budget-value")[0];
let dayBudgetValue = document.getElementsByClassName("daybudget-value")[0];
let levelValue = document.getElementsByClassName("level-value")[0];
let expensesValue = document.getElementsByClassName("expenses-value")[0];
let optionalExpensesValue = document.getElementsByClassName(
  "optionalexpenses-value"
)[0];
let incomeValue = document.getElementsByClassName("income-value")[0];
let monthSavingsValue =
  document.getElementsByClassName("monthsavings-value")[0];
let yearSavingsValue = document.getElementsByClassName("yearsavings-value")[0];

let expensesItem = document.getElementsByClassName("expenses-item");
let expensesBtn = document.getElementsByTagName("button")[0];
let optionalExpensesBtn = document.getElementsByTagName("button")[1];
let countBtn = document.getElementsByTagName("button")[2];
let optionalExpensesItem = document.querySelectorAll(".optionalexpenses-item");
let IncomeItem = document.querySelector(".choose-income");
let checkSavings = document.querySelector("#savings");
let sumValue = document.querySelector(".choose-sum");
let percentValue = document.querySelector(".choose-percent");
let yearValue = document.querySelector(".year-value");
let monthValue = document.querySelector(".month-value");
let dayValue = document.querySelector(".day-value");

let money;
let time;

startBtn.addEventListener("click", function () {
  time = prompt("ամիս, ամսաթիվ");
  money = +prompt("ամսվա կտրվածքով ձեր գումfարը", "ՉԽԱՓԵՍ!!!");

  while (isNaN(money) || money === "" || money === null) {
    money = +prompt("ամսվա կտրվածքով ձեր գումfարը", "ՉԽԱՓԵՍ!!!");
  }
  appData.budget = money;
  appData.timeData = time;
  budgetValue.textContent = money.toFixed();
  yearValue.value = new Date(Date.parse(time)).getFullYear();
  monthValue.value = new Date(Date.parse(time)).getMonth() + 1;
  dayValue.value = new Date(Date.parse(time)).getDate();
});

expensesBtn.addEventListener("click", function () {
  let sum = 0;

  for (let i = 0; i < expensesItem.length; i++) {
    let a = expensesItem[i].value;
    let b = expensesItem[++i].value;

    if (
      typeof a === "string" &&
      typeof a != null &&
      typeof b != null &&
      a != "" &&
      b != "" &&
      a.length < 50
    ) {
      console.log("done");
      appData.expenses[a] = b;
      sum += +b;
    } else {
      i--;
    }
  }
  expensesValue.textContent = sum;
});

optionalExpensesBtn.addEventListener("click", function () {
  for (i = 0; i < optionalExpensesItem.length; i++) {
    let opt = optionalExpensesItem[i].value;
    appData.optionalExpenses[i] = opt;
    optionalExpensesValue.textContent += appData.optionalExpenses[i] + " ";
  }
});

countBtn.addEventListener("click", function () {
  if (appData.budget != undefined) {
    appData.moneyPerDay = (appData.budget / 30).toFixed();
    dayBudgetValue.textContent = appData.moneyPerDay;
    
    if (appData.moneyPerDay < 150000) {
      levelValue.textContent = "Բոմժոտ ես ոնց որ";
    } else if (appData.moneyPerDay > 150000 && appData.moneyPerDay < 500000) {
      levelValue.textContent = "յոլա կեթաս";
    } else if (appData.moneyPerDay > 500000) {
      levelValue.textContent = "Հարգանքներիս Հավաստիքը";
    } else {
      levelValue.textContent = "ինչ-որ բան թերի է";
    }
  } else {
    dayBudgetValue.textContent = "ինչ-որ բան թերի է";
  }
});

IncomeItem.addEventListener("input", function () {
  let items = IncomeItem.value;
  appData.income = items.split(", ");
  incomeValue.textContent = appData.income;
});

checkSavings.addEventListener("click", function () {
  if (appData.savings === true) {
    appData.savings = false;
  } else {
    appData.savings = true;
  }
});

sumValue.addEventListener("input", function () {
  if (appData.savings === true) {
    let sum = +sumValue.value;
    let percent = +percentValue.value;
    appData.monthIncome = (sum / 100 / 12) * percent;
    appData.yearIncome = (sum / 100) * percent;

    monthSavingsValue.textContent = appData.monthIncome.toFixed(1);
    yearSavingsValue.textContent = appData.yearIncome.toFixed(1);
  }
});

percentValue.addEventListener("input", function () {
  if (appData.savings === true) {
    let sum = +sumValue.value;
    let percent = +percentValue.value;
    appData.monthIncome = (sum / 100 / 12) * percent;
    appData.yearIncome = (sum / 100) * percent;

    monthSavingsValue.textContent = appData.monthIncome.toFixed(1);
    yearSavingsValue.textContent = appData.yearIncome.toFixed(1);
  }
});

let appData = {
  budget: money,
  expenses: {},
  optionalExpenses: {},
  income: [],
  timeData: time,
  savings: false,
}
console.log(yearSavingsValue);
