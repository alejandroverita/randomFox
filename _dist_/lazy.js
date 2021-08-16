const isIntersecting = (entry) => entry.isIntersecting; //true (dentro de la pantalla)

const loadImage = (entry) => {
    const container = entry.target; //regresa un container (DIV)
    const imagen = container.firstChild;
    const url = imagen.dataset.src
    //cargar la imagen.
    imagen.src=url

    // console.log(entry);

    //desregistrar el evento
    observer.unobserve(container);
};

const observer = new IntersectionObserver((entries)=>{
    entries.filter(isIntersecting).forEach(loadImage);
});

export const registerImage = (imagen) => {
    //intersectationObservador -> observer(imagen)
    observer.observe(imagen)
}