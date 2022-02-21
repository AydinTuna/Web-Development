class Request {
    constructor() {
        this.xhr = new XMLHttpRequest();
    }

    // Get Requets

    get(url) {
        this.xhr.open("GET",url);

        this.xhr.onload = function() {

            if (this.xhr.status === 200) {
                console.log(this.xhr.responseText);
            }
        }.bind(this); 
        
        this.xhr.send();
    
    }
    
}
const request = new Request();
request.get("https://jsonplaceholder.typicode.com/users");  
