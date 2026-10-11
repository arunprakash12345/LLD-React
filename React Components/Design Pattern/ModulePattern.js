const wallet = (function () {
    let balance = 1000;

    function deposit(amount) {
        if (amount <= 0) return "Invalid amount";

        balance += amount;
        return balance;
    }

    function withdraw(amount) {
        if (amount <= 0 || amount > balance) {
            return "Invalid withdrawal";
        }

        balance -= amount;
        return balance;
    }

    function getBalance() {
        return balance;
    }

    return {
        deposit,
        withdraw,
        getBalance
    };
})();

console.log(wallet.getBalance()); // 1000

wallet.deposit(500);
console.log(wallet.getBalance()); // 1500

wallet.withdraw(200);
console.log(wallet.getBalance()); // 1300

console.log(wallet.balance); // undefined