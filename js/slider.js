let offset = 0;
const sliderLine = document.querySelector('.slider_line');

document.querySelector('.slider_next').addEventListener('click', function () {
    offset = offset + 1052;
    if (offset > 2108){
        offset = 0;
    }
    sliderLine.style.left = -offset + 'px';
});

document.querySelector('.slider_prev').addEventListener('click', function () {
    offset = offset - 1055;
    if (offset < 0 ){
        offset = 2108;
    }
    sliderLine.style.left = -offset + 'px';
}); 