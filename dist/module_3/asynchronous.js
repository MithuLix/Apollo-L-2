"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const getTo = () => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield fetch('https://jsonplaceholder.typicode.com/posts');
    return yield response.json();
});
const getToData = () => __awaiter(void 0, void 0, void 0, function* () {
    const output = yield getTo();
    console.log(output);
});
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
