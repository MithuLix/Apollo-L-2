interface interF {
    userId: number,
    id: number,
    title: string,
    body: string
}

const getTo = async():Promise<interF> => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    return await response.json(); 
}

const getToData = async (): Promise<void> => {
    const output = await getTo();
    console.log(output);
}

getToData();




// const makePromise = () => {
//     return  new Promise<string>((resolve, reject) => {
//         const data: string = "data is fetching"
//         if (data) {
//             resolve(data)
//         } else {
//             reject("failed to fetch ?")
//         }
//     })
// };

// const getPromiseData = async (): Promise<void> => {
//     const data = await makePromise();
//     console.log(data);
// }