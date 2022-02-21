function getTextFile() {
    fetch("example.txt")
    .then(response => console.log(response))
    .catch(err => console.log(err));

}

getTextFile();