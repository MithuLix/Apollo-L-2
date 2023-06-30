class BankAccount{
    id: number;
    name: string;
    private _balance: number;
    protected _balanceProtected: number;

    constructor(id: number, name: string, balance: number, _balanceProtected:number){
        this.id = id;
        this.name = name;
        this._balance = balance
        this._balanceProtected = _balanceProtected
    }
    //getter
    get balance():number{
        return this._balance;
    }
    getBalance():number{
        return this._balance;
    }
    //setter
    set deposit(amount:number){
        this._balance = this.balance + amount
    }
    // addDeposit(amount:number){
    //     this._balance = this._balance + amount;
    // }
}

class StudentAccount extends BankAccount{
    test(){
        this._balanceProtected
    }
}

const myAccount2 = new BankAccount(34, "Mithu", 100000, 25000);
// myAccount2.addDeposit(500000);
myAccount2.getBalance();
console.log(myAccount2.balance);
myAccount2.deposit = 768;
console.log(myAccount2.balance);
