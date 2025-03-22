function randomChoice(arr) {
  const randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex]; 
}

function change_icon() {
    const files = [
        "1.gif",
        "2.jpg",
        "3.gif",
        "4.gif",
        "5.jpg",
        "6.gif",
        "7.gif",
        "8.gif",
        "9.gif"
    ];

    let iconFile = "/img/icons/" + randomChoice(files);

    const icon = document.getElementById("icon");

    icon.src = iconFile;

    icon.addEventListener('click', change_icon)
}