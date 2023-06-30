// Select Elements
const submitBtn = document.querySelector(".submit");
const rating = document.querySelector('.rating')
const thank = document.querySelector(".thank");
const ratingNumber = document.querySelectorAll('.rating-number')
const ratingPoints = document.querySelector(".rating-points");

// Submit Btn
submitBtn.addEventListener('click', () => {
    rating.classList.add('hide')
    thank.classList.remove('hide')
})


// Toggle rating class
for (let i = 0; i < ratingNumber.length; i++) {
    ratingNumber[i].addEventListener('click', () => {
        ratingNumber[i].classList.toggle('active');
        ratingPoints.textContent = ratingNumber[i].textContent;
        }
    )
}