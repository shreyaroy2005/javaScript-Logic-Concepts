//! 15.Create an async function that fetches data, waits 1 second (using a delay promise), and then returns combined results. (Medium) 
// Explanation: Inside an async function, use await 
// fetch, then await response.json(), await 
// delay(1000), and return or log the combined data.

function delay(ms){
   return new Promise((res, rej)=>{
        setTimeout(res, ms);
    })
}

async function fetchDataWaits1Secound() {
    let fatchData = await fetch("https://dummyjson.com/products");
    let data = await fatchData.json();
    await delay(1000);
   return data;
}
fetchDataWaits1Secound()
.then((data) => {
    console.log(data);
})
.catch((err) => {
    console.log("error fetching data", err);
    
})