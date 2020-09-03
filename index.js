var allObjects = [
    {
        image: "./img/4cb9045ab276e8b9b129cd5e327a4ea1.png",
        title: "Scarlet Duet",
        name: "scarlet"
    },

    {
        image: "./img/34383-5-silver-ring-photos.png",
        title: "Calyope",
        name: "calyope"
    },

    {
        image: "./img/Image_1.png",
        title: "Calipso",
        name: "calipso"
    },

    {
        image: "./img/Img_2.png",
        title: "Fortuna",
        name: "fortuna"
    },

    {
        image: "./img/Img_4.png",
        title: "Afrodite",
        name: "afrodite"
    },
    {
        image: "./img/Img_5.png",
        title: "Dyonis",
        name: "dyonis"
    },

];

for (var i = 0; i < allObjects.length; i++) {
    showCard(allObjects[i], "container");
}
for (var i = 0; i < allObjects.length; i++) {
    showCard(allObjects[i], "container1");
}

function showCard(obj, ID) {
    var card = document.createElement("div");
    var image = document.createElement("img");
    var hash = document.createElement("h2");
    card.id = "containerElem";
    image.setAttribute("src", obj.image);
    hash.innerHTML = obj.title;
    card.appendChild(image);
    card.appendChild(hash);
    document.getElementById(ID).appendChild(card);
    var button = document.createElement("a");
    card.appendChild(button);
    button.setAttribute("class", "button3");
    button.setAttribute("href", `${obj.name}.html`)
    button.innerText = "View product";
}

