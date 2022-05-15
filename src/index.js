
import { doc } from "prettier";
import { registerImage } from "./lazy";

//crear una imagen
// agregar imagen

const minimum = 1;
const maximum = 122;
//crear funcion random q genere numeros del 1 al 122
const random = () => Math.floor(Math.random() * (maximum - minimum)) + minimum;

const createImageNode = () => {
    const container = document.createElement('div');
    container.className = "container";
    container.id ="containerID";

    const imagen = document.createElement('img');
    imagen.className = 'imagen';
    imagen.id = "imagen";
    imagen.dataset.src = `https://randomfox.ca/images/${random()}.jpg`; // to do
    container.appendChild(imagen);

    return container;
};

const mountNode = document.getElementById("images");

//Buttons
const addButton = document.getElementById("Add-Button");
const cleanButton = document.getElementById("Clean-Button");

const addImage = () => {
    const newImage = createImageNode();
    mountNode.append(newImage);
    registerImage(newImage);
};

//remove all images
const cleanAll =() => {
    document.getElementById('images').innerHTML = ''; 
}

addButton.addEventListener("click", addImage);

cleanButton.addEventListener("click", cleanAll);

