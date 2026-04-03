//! 22.Use async/await to handle fetching data and catching errors in a try/catch block. (Medium) 
// Explanation: Inside an async function, use a try 
// { const res = await fetch(url); } catch(e) { ... } to 
// catch any fetch errors. 

async function fetchingData() {
    try {
        const res = await fetch("https://dummyjson.com/products");
        const data = res.json();
        console.log(data);
        
    } catch (error) {
        console.log("data is not there",error);
        
    }
}

fetchingData()