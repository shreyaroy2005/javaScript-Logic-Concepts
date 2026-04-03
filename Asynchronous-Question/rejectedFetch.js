//! 14. Write code that handles a rejected fetch (e.g., wrong URL) using .catch(). (Medium) 
// Explanation: Use fetch(wrongUrl).then(...).catch(error => 
// console.log('Fetch failed:', error)). 

fetch("https://dummyjson.com/productts")
.then((result) => {
    console.log(result);
})
.catch((err) => {
 console.log("Fetch failed:", err);
})