 const createArray = (param: string): string[] => {
    return [param]
 }
 const createArray1 = <T>(param: T): T[] => {
    return [param]
 }

 const result1 = createArray1<string>("Bangladesh")
 const result2 = createArray1<boolean>(false)

 type Name = { name: string}
 const result3 = createArray1<Name>({name: "bangla"})