const photo = document.querySelector('#main-photo');
const photoAuthor = document.querySelector('#photo-author-anchor');
const photoDescription = document.querySelector('#description');

const buttonLeft = document.querySelector('#left-button');
const buttonRight = document.querySelector('#right-button');

const kitties = [];

kitties[1] = {
    src: 'https://i.imgur.com/d2eIISv.jpg',
    description: 'Este gatito se ve muy feliz, miren nada más sus ojitos cerraditos y sus patitas hacia arriba.',
    author: 'Pixabay',
    authorSite: 'https://www.pexels.com/@pixabay/',
    alt: 'Gatito, Acostado, En, Superficie'
};
kitties[2] = {
    src: 'https://i.imgur.com/GJbSmUJ.jpg',
    description: 'Este gatito en su instinto por esconderse nos regaló una de las fotos más bonitas.',
    author: 'Francesco Ungaro',
    authorSite: 'https://www.pexels.com/@francesco-ungaro/',
    alt: 'Gato Atigrado Naranja Cerca De La Ventana'
};
kitties[3]= {
    src: 'https://i.imgur.com/S2zOnV6.jpg',
    description: 'Estos dos gatitos parecen estar divirtiéndose con un juguete colgante. Amo cuando hacens esas cosas.',
    author: 'Pixabay',
    authorSite: 'https://www.pexels.com/@pixabay/',
    alt: 'Gatitos Atigrados En Edredón Floral'
};
kitties[4] = {
    src: 'https://i.imgur.com/L9dFzJT.jpg',
    description: 'Este gatito aparte de tierno parece estar posando al más puro estilo de Latrell Spencer.',
    author: 'Anel Rossouw',
    authorSite: 'https://www.pexels.com/@anelrossouw/',
    alt: 'Foto De Gatito Atigrado Gris Acostado'
};
kitties[5] = {
    src: 'https://i.imgur.com/c3Pg72P.jpg',
    description: 'Qué más decir de este gatito, su rostro plácido y sereno es suficiente para disfrutar de esta fotografía.',
    author: 'Ihsan Adityawarman',
    authorSite: 'https://www.pexels.com/@ihsanaditya/',
    alt: 'Fotografía En Primer Plano De Gato Atigrado Durmiendo'
};

photo.src = kitties[1].src;
photo.alt = kitties[1].alt;
photoDescription.innerText = kitties[1].description;

photoAuthor.innerText = kitties[1].author;
photoAuthor.href = kitties[1].authorSite;

buttonLeft.addEventListener('click', slideLeft);
buttonRight.addEventListener('click', slideRight);

let photoPosition = 1;

function slideLeft () {
    if (photoPosition === 1 ) {
    } else {
        photo.src = kitties[photoPosition - 1].src;
        photo.alt = kitties[photoPosition - 1].alt;
        photoDescription.innerText = kitties[photoPosition - 1].description;

        photoAuthor.innerText = kitties[photoPosition - 1].author;
        photoAuthor.href = kitties[photoPosition - 1].authorSite;

        photoPosition--;
    }
}
function slideRight () {
    if (photoPosition === 5 ) {
    } else {
        photo.src = kitties[photoPosition + 1].src;
        photo.alt = kitties[photoPosition + 1].alt;
        photoDescription.innerText = kitties[photoPosition + 1].description;

        photoAuthor.innerText = kitties[photoPosition + 1].author;
        photoAuthor.href = kitties[photoPosition + 1].authorSite;

        photoPosition++;
    }
}