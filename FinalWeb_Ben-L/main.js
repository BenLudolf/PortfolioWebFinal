var currentSlide = 0;
var slides = document.querySelectorAll('.slide');
var totalSlides = slides.length;
var quote = document.querySelector('.quote');
var quoteString;
var rnd;

randomQuote();
showSlide(currentSlide);

function randomQuote (){
    fetch ('https://type.fit/api/quotes').then(r => r.json()).then(data => {
        console.log (data);
        rnd = Math.floor(Math.random() * data.length);
        quoteString = data[rnd].text;
        quote.innerHTML = quoteString;
})
}

function showSlide(slideIndex) {
    for (var i = 0; i < totalSlides; i++) {
        slides[i].style.display = "none";
    }
    if (slideIndex < 0) {
        currentSlide = totalSlides - 1;
    } else if (slideIndex >= totalSlides) {
        currentSlide = 0;
    } else {
        currentSlide = slideIndex;
    }
    slides[currentSlide].style.display = "block";
}
function showPreviousSlide() {
    showSlide(currentSlide - 1);
}

function showNextSlide() {
    showSlide(currentSlide + 1);
}

setInterval(showNextSlide, 5000);