//! 11. Use Promise.all to run multiple fetch requests and process results together. (Medium) 
// Explanation: Call Promise.all([fetch(url1), 
// fetch(url2)]), then in .then use Promise.all again on 
// JSON conversions, handling both results.

let Promise1 = new Promise((rel,rej) => {
    rel("hello Wold")
});
let Promise2 = new Promise((rel,rej) => {
    rel("hi Shreya")
});
let Promise3 = new Promise((rel,rej) => {
    rel("javascript")
})

Promise.all([Promise1, Promise2, Promise3])
.then((data) => {
    console.log(data);
    
})
.catch((err) => {
    console.log(err);
    
})