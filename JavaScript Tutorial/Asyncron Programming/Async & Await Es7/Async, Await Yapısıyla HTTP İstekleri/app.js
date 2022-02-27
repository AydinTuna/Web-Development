class Request {
    async get(url) {  // GET Request
        // return new Promise((resolve, reject) => {
        //     fetch(url)
        //         .then(response => response.json())
        //         .then(data => resolve(data))
        //         .catch(err => reject(err));
        // });

        const response = await fetch(url);  // Response Object
        const responseData = await response.json(); // JSON Object
        return responseData;
    }

    async post(url, data) {
        // return new Promise((resolve, reject) => {
        //     fetch(url, {
        //         method: 'POST',
        //         body: JSON.stringify(data),
        //         headers: {
        //             'Content-type': 'application/json; charset=UTF-8',
        //         },
        //     })
        //     .then(response => response.json())
        //     .then(data => resolve(data))
        //     .catch(err => reject(err)); 
        // });

        const response = await fetch(url, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        }); // Response Object

        const responseData2 = await response.json();
        return responseData2;
    }

    async put(url, data) {
        // return new Promise((resolve, reject) => {
        //     fetch(url, {
        //         method: "PUT",
        //         body: JSON.stringify(data),
        //         headers: {
        //             'Content-type': 'application/json; charset=UTF-8',
        //         },
        //     })
        //         .then(response => response.json())
        //         .then(data => resolve(data))
        //         .catch(err => reject(err));
        // });

        const response = await fetch(url, {
            method: "PUT",
            body: JSON.stringify(data),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        });

        const responseData3 = await response.json();
        return responseData3;

    }

    async delete(url) {
        // return new Promise((resolve, reject) => {
        //     fetch(url, {
        //         method: "DELETE"
        //     })
        //         .then(response => resolve("Veri işlemi başarılı"))
        //         .catch(err => reject(err));
        // });

        const response = await fetch(url, {
            method: "DELETE"
        })
        
        return "Veri silme işlemi başarılı";
    }
}
const request = new Request();

// GET
// request.get("https://jsonplaceholder.typicode.com/albums")
// .then(albums => console.log(albums))    // Senkron
// .catch(err => console.log(err));

// POST
// request.post("https://jsonplaceholder.typicode.com/albums", {userId: 1,title: "BenBaho"})
// .then(newAlbum => console.log(newAlbum))
// .catch(err => console.log(err));

// PUT
// request.put("https://jsonplaceholder.typicode.com/albums/1", {userId: 1, title: "Hello World!"})
// .then(uptAlbum => console.log(uptAlbum))
// .catch(err => console.log(err));

// DELETE
// request.delete("https://jsonplaceholder.typicode.com/albums/2")
// .then(delAlbum => console.log(delAlbum))
// .catch(err => console.log(err));