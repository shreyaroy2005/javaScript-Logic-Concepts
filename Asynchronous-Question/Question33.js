//!33.Write code that fetches from an invalid URL and catches the network error with .catch(). (Medium) 
// Explanation: Call fetch('invalid-url').catch(error => 
// console.log('Fetch error', error)) to handle and log 
// the error. 

fetch("https://dummyjson.com/products")
.then((data) =>{
console.log(data);

})
.catch((err) => {
    console.log("Fetch error", err);
    
})