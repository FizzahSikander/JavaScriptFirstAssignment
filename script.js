const account = {
  name: "Fizzah",
  expenses: [],
  income: [],
  getName: function () {
    console.log(this);
    alert(`Account name: ${this.name}`);
  },
  addExpenses: function () {
    let type = prompt("what was your expense?(food,gas/etc)");
    let ammount = parseFloat(prompt("how much is your expense?"));
    this.expenses.push({ type, ammount });
  },
  getIncome: function () {
    let addedIncome = parseFloat(prompt("how much is your income?"));
    this.income.push({ addedIncome });
  },
  getList: function () {
    console.log(this);
    let incomes = "";
    this.income.forEach(function (income, index) {
      incomes += "Income nr " + (index + 1) + ": " + income.addedIncome + "\n";
    });
    let expense = "";
    this.expenses.forEach(function (Expenses, index) {
      expense += "Expense nr " + (index + 1) + ": " + Expenses.ammount + " for " + Expenses.type + "\n";
    });
    alert(`Income:${incomes},Expense:${expense}`);
  },
  getSummary: function () {
    console.log(this);
    let totalIncome = 0;
    let totalExpenses = 0;
    this.income.forEach(function (income) {
      totalIncome = totalIncome + income.addedIncome;
    });
    this.expenses.forEach(function (expense) {
      totalExpenses = totalExpenses + expense.ammount;
    });
    alert(`Fizzah ,your total income is  ${totalIncome},
    total expense is  ${totalExpenses} ,
    balances are: ${totalIncome - totalExpenses}`);
  },
};

function menu() {
  const choice = parseFloat(
    prompt("EXPENSE TRACKER \n Please choose between 1) Display account name 2) Add Income 3) Add Expenses 4) Get List 5) Get Summary")
  );
  if (choice === 1) {
    account.getName();
    menu()
  }
  if (choice === 2) {
    account.getIncome();
    menu()
  }
  if (choice === 3) {
    account.addExpenses();
    menu()
  }
  if (choice === 4) {
    account.getList();
    menu()
  }
  if (choice === 5) {
    account.getSummary();
    menu()
  }
}
menu();