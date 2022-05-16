
const isIntersecting = (entry) => {
    return entry.isIntersecting; // true dentro de la pantalla
};

const loadImage = (entry) => {
    const container = entry.target;
    const imagen = container.firstChild;
    const url = imagen.dataset.src;
    imagen.src = url;
    //const loadedImages = [];
    //loadedImages.push(imagen);
    //console.log(loadedImages.length);
   
    
    //desregistra la imagen (unlisten)
    observer.unobserve(container);
};

// se utieliza la api intersection observer creando una instancia
const observer = new IntersectionObserver((entries) => {
    entries
        .filter(isIntersecting)
        .forEach(loadImage)
});

// alucion al intersection observer
export const registerImage = (imagen) => {
    observer.observe(imagen);
}
