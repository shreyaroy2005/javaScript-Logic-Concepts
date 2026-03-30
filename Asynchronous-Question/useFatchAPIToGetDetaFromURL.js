//! 5. Use the Fetch API to get data from a URL and process the JSON response. (Medium) 
// Explanation: Use fetch(url).then(response => 
// response.json()).then(data => { handle data 
//  }).

// jokhom function ar modhe {} use kori tokhon value retun kortei hoy tahole porer then a deta undefind ase.

fetch("https://dummyjson.com/products")
.then((response) => {
    return response.json();
})
.then((deta) => {
    console.log(deta);
    
})
.catch((err) => {
    console.log("Error", err);
    
})