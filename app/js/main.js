$(function() {
    $('.slider-box').slick({
        prevArrow: '<button class="slider-btn-left"></button>',
        nextArrow: '<button class="slider-btn-right"></button>',
        dots: true,
        dotsClass: 'slick-dots',
    });
});

let sliders = document.getElementsByClassName('slider');
let inputs = document.getElementsByClassName('input-slider');
console.log(sliders);
let sliderObj = [
    sliderFloor = {
        start: [6, 21],
        step: 1,
        connect: true,
        orientation: "horizontal",
        range: {
            'min': 6,
            'max': 21
        },
        format: {
            to: function parseInt(value) {
                return value;
            },
            from: function parseInt(value) {
                return value;
            }
        }
    },
    sliderPlochad = {
        start: [34, 126],
        step: 5,
        connect: true,
        orientation: "horizontal",
        range: {
            'min': 34,
            'max': 126
        },
        format: {
            to: function parseInt(value) {
                return value;
            },
            from: function parseInt(value) {
                return value;
            }
        }
    },
];

for (let i = 0; i < sliders.length; i++) {

    noUiSlider.create(sliders[i], sliderObj[i]);

    // for (let i = 0; i < allValues.length; i++) { inputs[i].value = allValues[i] }
    sliders[i].noUiSlider.on('slide', addValues);
}

function addValues() {
    let allValues = [];

    for (let i = 0; i < sliders.length; i++) { allValues.push(sliders[i].noUiSlider.get()); };
    allValues = allValues.flat(Infinity);

    for (let i = 0; i < allValues.length; i++) { inputs[i].value = allValues[i] }
}