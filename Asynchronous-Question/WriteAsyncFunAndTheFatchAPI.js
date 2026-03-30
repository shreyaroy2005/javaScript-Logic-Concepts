//! 6. Write an async function that uses await to wait for the Fetch API call to complete and then logs the data. (Medium) 
// Explanation: Use async function, then const 
// response = await fetch(url) and const data = await 
// response.json(), then log or return the data. 

async function fatchTheAPIData() {
    const response = await fetch("https://dummyjson.com/products");
    const data = await response.json();
    console.log(data);

}



fatchTheAPIData();