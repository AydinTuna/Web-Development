const button = document.createElement("button");
button.innerText = "Takipçileri Tara";

document.querySelector("header").appendChild(button);

function sleep(ms) {
    return new Promise(resolve=>setTimeout(resolve,ms));
}

var namesTakipEdilen = [];
var namesTakipçi = [];
var finalList = [];

async function takipciFunc() {
    document.querySelector("a.-nal3 ").click();
    button.remove();
    ht = 1;
    last_ht = 0;
    while (ht!=last_ht) {
        last_ht = ht;
        await sleep(1000);
        document.querySelector("div.isgrP").scrollTo(0,document.querySelector("div.isgrP").scrollHeight);
        ht = document.querySelector("div.isgrP").scrollHeight;
        linksTakipçi = document.querySelectorAll("a.FPmhX.notranslate._0imsa ");
    }
}

async function takipEdilen() {
    ht = 1;
    last_ht = 0;
    while (ht!=last_ht) {
        last_ht = ht;
        await sleep(1000);
        document.querySelector("div.isgrP").scrollTo(0,document.querySelector("div.isgrP").scrollHeight);
        ht = document.querySelector("div.isgrP").scrollHeight;
        linksTakipEdilen = document.querySelectorAll("a.FPmhX.notranslate._0imsa ");
    }
}
button.addEventListener("click", async ()=> {
    await takipciFunc();
    linksTakipçi.forEach(element => {
        namesTakipçi.push(element.innerText);
    });
    document.querySelector("body > div.RnEpo.Yx5HN > div > div > div:nth-child(1) > div > div:nth-child(3) > button").click();
    await sleep(1000);
    document.querySelector("#react-root > section > main > div > header > section > ul > li:nth-child(3) > a").click();
    await sleep(1000);
    await takipEdilen();
    linksTakipEdilen.forEach(element=> {
        namesTakipEdilen.push(element.innerText);
    });
    namesTakipEdilen.forEach(element=> {
        if(namesTakipçi.includes(element))return;
        finalList.push(element);
    });
    document.querySelector("body > div.RnEpo.Yx5HN > div > div > div:nth-child(1) > div > div:nth-child(3) > button").click();
    await sleep(1000);

    const container = document.createElement("div");
    container.class = "container";
    container.id = "div";
    const h1 = document.createElement("h1");
    h1.innerText = "Takip etmeyenler";
    h1.id = "title";
    container.appendChild(h1);
    const list = document.createElement("ul");
    list.id = "ul";
    container.appendChild(list);

    document.querySelector("header").appendChild(container);

    await sleep(1000);

    finalList.forEach(element=> {
        const li = document.createElement("li");
        li.innerText = "@" + element;
        li.id = "li";
        list.appendChild(li);
    });
});
