type a1 = number;
type a2 = a1 extends string ? string : null;
type a3 = undefined;
type a4 = number;

// nested conditional 
type d = a1 extends null 
? null 
: a3 extends number 
? number 
: a4 extends null
? null 
:never;

type Sheik ={
    wife1: string;
    wife2: string;
}

type CheckProp<T,H> = H extends keyof Sheik ? true : false;
type CheckWife1 = CheckProp<Sheik, 'wife2'>


// another example
type Friends = "rakin" | "sakin" | "dakin";
type RemoveFriend<T, K> = T extends K ? never : T;
type CurrentFriend = RemoveFriend<Friends, "sakin"> 