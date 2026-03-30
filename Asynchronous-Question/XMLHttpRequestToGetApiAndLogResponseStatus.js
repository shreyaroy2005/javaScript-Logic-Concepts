//!4. Use XMLHttpRequest to make a GET request to a public API (e.g., JSONPlaceholder) and log the response status. (Medium) 
// Explanation: Create an XMLHttpRequest, use 
// open('GET', url), send(), and add a load event 
// listener to log xhr.status.

// new akta request object tori korchi 
let request = new XMLHttpRequest();

// open function ta request object ar modhe lagay ar get amne jei API url ta debo seta theke deta nite aste chai.
request.open("GET", "https://jsonplaceholder.typicode.com/posts");

//akhon response ale amake janao and status dekhao
request.addEventListener("load", function(){
    console.log(request.status);
    
});

// request ta asle pathao 

request.send();
