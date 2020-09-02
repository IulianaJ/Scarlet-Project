var allObjects = [
    {
        image: "../Scarlet/img/4cb9045ab276e8b9b129cd5e327a4ea1.png",
        title: "Scarlet Duet",
    },

    {
        image: "../Scarlet/img/34383-5-silver-ring-photos.png",
        title: "Calyope",
    },

    {
        image: "../Scarlet/img/Image_1.png",
        title: "Calipso",
    },

    {
        image: "../Scarlet/img/Img_2.png",
        title: "Fortuna",
    },

    {
        image: "../Scarlet/img/Img_4.png",
        title: "Afrodite",
    },
    {
        image: "../Scarlet/img/Img_5.png",
        title: "Dyonis",
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
    var button = document.createElement("button");
    card.appendChild(button);
    button.setAttribute("class", "button3");
    button.innerText = "View product";
}

