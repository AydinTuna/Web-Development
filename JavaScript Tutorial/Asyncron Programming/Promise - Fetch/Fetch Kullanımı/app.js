function getTextFile() {    // Text dosyası
    fetch("example.txt")
    .then(response => response.text())
    .then(data => console.log(data))
    .catch(err => console.log(err));
}

function getJsonFile() {    // Local bir json dosyasından veri alma
    fetch("example.json")
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(err => console.log(err));
}

function getExternalAPI() {
    fetch("https://v6.exchangerate-api.com/v6/c96c671b626a17923cb824b8/latest/USD")
    .then(response => response.json())
    .then(data => console.log(data.conversion_rates.TRY))
    .catch(err => console.log(err));
}

// getTextFile();
// getJsonFile();
getExternalAPI();