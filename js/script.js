const prices = [
    {
        pageViews: "10k pageviews",
        pricePerMonth: 8
    },
    {
        pageViews: "50k pageviews",
        pricePerMonth: 12
    },
    {
        pageViews: "100k pageviews",
        pricePerMonth: 16
    },
    {
        pageViews: "500k pageviews",
        pricePerMonth: 24
    },
    {
        pageViews: "1M pageviews",
        pricePerMonth: 36
    }
]

const $slider = document.querySelector(".slider__range");
const $page = document.querySelector(".card__subscription__page");
const $price = document.querySelector(".card__subscription__choose__price");
const $switch = document.querySelector(".switch__checkbox");
const $sliderProgress = document.querySelector(".slider__progress");
const $btn = document.querySelector(".btn");

let pageViews = "100k pageviews";
let pricePerMonth = 16;

const discount = (num, percentage)=>{
    return (num/100) * percentage;
};

const refreshPrice = ()=>{
    if($switch.checked){
        $page.textContent = pageViews;
        $price.textContent = `$${pricePerMonth - discount(pricePerMonth, 25)}.00`;
    }else{
        $page.textContent = pageViews;
        $price.textContent = `$${pricePerMonth}.00`;
    };
};

const refreshValue = ()=>{
    $slider.addEventListener("input", ()=>{
        let value = $slider.value;
        pageViews = prices[value].pageViews;
        pricePerMonth = prices[value].pricePerMonth;
        
        let renderSlider = (value - $slider.min)/($slider.max - $slider.min) * 100;
        $slider.style.background = `linear-gradient(to right, var(--Soft-Cyan) 0%, var(--Soft-Cyan) ${renderSlider}%, var(--Light-Grayish-BlueSlider) ${renderSlider}%, var(--Light-Grayish-BlueSlider) 100%)`;

        refreshPrice();
    });
};

const toggleDiscount = ()=>{
    $switch.addEventListener("change", refreshPrice);
};

$btn.addEventListener("click",e=>{
    e.preventDefault();
});

refreshValue();
toggleDiscount();

