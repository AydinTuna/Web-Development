class Request {
    get(url) {  // GET Request
        return new Promise((resolve,reject) => {
            fetch(url)
            .then(response => response.json())
            .then(data => resolve(data))
            .catch(err => reject(err)); 
        });
    }
}
const request = new Request();
let albums;

request.get("https://jsonplaceholder.typicode.com/albums")
.then(albums => console.log(albums))    // Senkron
.catch(err => console.log(err));

// console.log(albums)   Asenkron


