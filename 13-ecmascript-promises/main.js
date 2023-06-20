let x = 10;

const myPromise = new Promise((resolve, reject) => {
    console.log("Inside the promise executor");
    setTimeout(()=>{
        if (x >= 10){
            resolve('ijse');
        }else{
            reject();
        }
    }, 5000);
});

subscriber();
async function subscriber(){
    console.log("Entered into the subscriber function")
    try {
        const value = await myPromise;
        console.log("Wadea Goda", value);
    }catch(err){
        console.log("Wadea Kachal");
    }finally {
        console.log("Ban Choon");
    }
}

// /* Subscriber 1 */
// myPromise.then(()=>{
//     console.log("Subscriber1: Wade Goda!");
// }).catch(()=>{
//     console.log("Subscriber1: Wade Kachal");
// }).finally(()=>{
//     console.log("Subscriber1: Nawa gilunath ban choon");
// });
//
// /* Subscriber 2 */
// myPromise.then(()=>{
//     console.log("Subscriber2: Wade Goda!");
// }).catch(()=>{
//     console.log("Subscriber2: Wade Kachal");
// }).finally(()=>{
//     console.log("Subscriber2: Nawa gilunath ban choon");
// });

// myPromise.then(()=>{
//     console.log("Wade Goda, Kiwwa widihatama unaa..!");
// });
//
// myPromise.catch(()=>{
//     console.log("Wade Kachal!");
// });
//
// myPromise.finally(()=> {
//     console.log("Nawa gilunath ban choon");
// });