"use strict";
class BankAccount {
    constructor(id, name, balance, _balanceProtected) {
        this.id = id;
        this.name = name;
        this._balance = balance;
        this._balanceProtected = _balanceProtected;
    }
    //getter
    get balance() {
        return this._balance;
    }
    getBalance() {
        return this._balance;
    }
    //setter
    set deposit(amount) {
        this._balance = this.balance + amount;
    }
}
class StudentAccount extends BankAccount {
    test() {
        this._balanceProtected;
    }
}
const myAccount2 = new BankAccount(34, "Mithu", 100000, 25000);
// myAccount2.addDeposit(500000);
myAccount2.getBalance();
console.log(myAccount2.balance);
myAccount2.deposit = 768;
console.log(myAccount2.balance);
