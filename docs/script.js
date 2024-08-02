const slides = document.getElementsByClassName('slide');

const showImage = n => {
    let i;
    if (n > slides.length) slideIndex = 1;
    if (n < 1) slideIndex = slides.length;
    for (i = 0; i < slides.length; i++) slides[i].style.display = 'none';
    slides[slideIndex -1].style.display = 'block';
}

const slideRight = n => {
    showImage(slideIndex += n);
}

let slideIndex = 1;
showImage(slideIndex);