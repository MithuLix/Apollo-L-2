"use strict";
class BankAccounts {
    constructor(id, name, balance, _balanceProtected) {
        this.id = id;
        this.name = name;
        this._balance = balance;
        this._balanceProtected = _balanceProtected;
    }
    getBalance() {
        console.log(`My Current Balance is : ${this._balance}`);
    }
    addDeposit(amount) {
        this._balance = this._balance + amount;
    }
}
class StudentAcc extends BankAccounts {
    test() {
        this._balanceProtected;
    }
}
const myAccount = new BankAccounts(34, "Mithu", 2345234324234324, 65465465);
console.log(myAccount);
