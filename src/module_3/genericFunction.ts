 const createArray = (param: string): string[] => {
    return [param]
 }
 const createArray1 = <X,Y>(param1:X, param2:Y): [X,Y] => {
    return [param1, param2]
 }
 
function createArray2<X,Y>(param1:X, param2:Y): [X,Y] {
    return [param1, param2]
 }

 const result1 = createArray1<string, string>("Bangladesh", "country")
 const result2 = createArray1<boolean, Array<string>>(false, ["usa"])

 type Name = { name: string}
 const result3 = createArray1<Name, boolean>({name: "bangla"}, false)

 

 ///spread operator
const createMeIntoSpread1=<T>(myInfo:T)=> {
   const spread1 = 'kaha ka';
   const newData = {...myInfo, spread1};
   return newData;
}
const myInfo ={
   name: "persinax",
   age: 20,
   salary: 2555500
};
const result5 = createMeIntoSpread1(myInfo)


