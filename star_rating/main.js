const ratings = {
    sony:4.3,
    philips:2.9,
    samsung:1.9,
    mi:3,
    lg:4.6
}

const starMax = 5;

document.addEventListener('DOMContentLoaded', getRatings());

function getRatings(){
    for(let rating in ratings)
    {
        const starPercentage = (ratings[rating] / starMax) * 100;
        const starPercentageRounded = `${Math.round(starPercentage/10)*10}%`;
        console.log(starPercentageRounded);
        document.querySelector(`.${rating} .stars-inner`).style.width = starPercentageRounded;
        document.querySelector(`.${rating} .rating`).innerHTML = ratings[rating];
    }
}

const productSelect = document.querySelector('#product-select');
const ratingControl = document.querySelector('#rating-control');

let product;
productSelect.addEventListener('change', function(e){
    product=e.target.value;
    ratingControl.disabled = false;
})
ratingControl.addEventListener('blur', function(e){
    const rating = e.target.value;
    console.log(rating);
    if(rating>5 || rating<1)
    {
        alert('Please rate between 1 and 5');
        return;
    }
    ratings[product]= rating;
    getRatings();
})