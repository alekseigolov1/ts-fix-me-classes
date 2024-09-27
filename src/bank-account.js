var BankAccount = /** @class */ (function () {
    function BankAccount(initialAmount) {
        this.balance = initialAmount;
    }
    BankAccount.prototype.deposit = function (amount) {
        this.balance += amount;
        console.log(this.balance);
    };
    return BankAccount;
}());
var myAccount = new BankAccount(500);
console.log(myAccount.deposit(100)); // After fixing: will print 600
