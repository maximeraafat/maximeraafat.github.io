function slide(sliderElement) {
    let sliderWrapper = sliderElement.closest('.slider-wrapper');
    let slideValue = sliderElement.value;

    let cropElement = sliderWrapper.querySelector('.img-crop');
    let lineElement = sliderWrapper.querySelector('.line');

    cropElement.style.clipPath = "polygon(" + slideValue + "% 0, 100% 0%, 100% 100%, " + slideValue + "% 100%)"; // move crop
    lineElement.style.left = slideValue + "%"; // move line
    lineElement.style.display = (slideValue == 0 || slideValue == 100) ? "none" : "block"; // hide line if slider is at 0 or 100
}