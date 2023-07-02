interface Model<TData, TMethods>{
    data: TData;
    methods:TMethods
}

interface IUserCombine {
    firstName: string;
    lastName:string
}

// methods
interface IMethodsCombine {
    fullName():string;
}

// combine IUserCombine and IMethodsCombine
type model = Model<IUserCombine, IMethodsCombine>

class UserModel implements model {
    data: IUserCombine;
    methods: IMethodsCombine;
    constructor(firstName:string, lastName:string){
        this.data = {firstName,lastName}
        this.methods = {
            fullName:() => `${firstName} ${lastName}`
        }
    }
}

const user1 = new UserModel("Mithu", "Islam");
console.log(user1.methods.fullName());
