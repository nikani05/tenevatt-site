let currentIndex1 = 0;

function moveSlider(direction) {
    const track = document.getElementById('sliderTrack'); // ID первого слайдера
    const slides = track.querySelectorAll('.photo-item');
    const totalSlides = slides.length;

    currentIndex1 += direction;

    if (currentIndex1 < 0) currentIndex1 = 0;
    if (currentIndex1 > totalSlides - 1) currentIndex1 = totalSlides - 1;

    // Листаем ровно по одному кадру (100%)
    track.style.transform = `translateX(-${currentIndex1 * 100}%)`;
}


let currentIndex2 = 0;

function moveSlider2(direction) {
    const track = document.getElementById('sliderTrack2');
    const slides = track.querySelectorAll('.photo-item');
    const totalSlides = slides.length; // Тут их 4

    currentIndex2 += direction;

    // Ограничения (листаем по одной картинке)
    if (currentIndex2 < 0) {
        currentIndex2 = 0;
    }
    if (currentIndex2 > totalSlides - 1) {
        currentIndex2 = totalSlides - 1;
    }

    // Сдвигаем на 100% ширины за каждый шаг
    const offset = currentIndex2 * 100;
    track.style.transform = `translateX(-${offset}%)`;
}