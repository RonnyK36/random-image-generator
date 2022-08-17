const imageContainerEl = document.querySelector(".image-container");
const btnEl = document.querySelector(".btn");

btnEl.addEventListener("click", () => {

    addNewImages();
});

function addNewImages() {
    let imageNumber = 10;
    for (let index = 0; index < imageNumber; index++) {
        const newIgmEl = document.createElement("img");
        newIgmEl.src = `https://picsum.photos/700?random=${Math.ceil(Math.random() * 2000)}`;
        imageContainerEl.appendChild(newIgmEl);
    }
}