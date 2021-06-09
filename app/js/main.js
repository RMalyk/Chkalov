$(function () {
    $('.slider-box').slick({
        prevArrow: '<button class="slider-btn-left"></button>',
        nextArrow: '<button class="slider-btn-right"></button>',
        dots: true,
        dotsClass: 'slick-dots',
    });
});

let stepsSlider = document.getElementById('slider-floor');
let input0 = document.getElementById('input-with-keypress-0');
let input1 = document.getElementById('input-with-keypress-1');
let inputs = [input0, input1];



noUiSlider.create(stepsSlider, {
    start: [6, 21],
    connect: true,
    step: 1,
    range: {
        'min': 6,
        'max': 21
    },
    format: {
        to: function (value) {
            return parseInt(value);
        },
        from: function (value) {
            return parseInt(value);
        }
    }
});
stepsSlider.noUiSlider.on('update', function (values, handle) {
    inputs[handle].value = values[handle];
});