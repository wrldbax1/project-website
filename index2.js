
const navMenu = document.querySelector('#nav-menu')
const toggleMenu = document.querySelector('.header-toggle')
const closeMenu = document.querySelector('.header-close')
const navList = document.querySelector('.nav-list')

toggleMenu.addEventListener('click', () => {
    navMenu.classList.toggle('show')
})
closeMenu.addEventListener('click', () => {
    navMenu.classList.remove('show')
})
navList.addEventListener('click', () => {
    navMenu.classList.remove('show')
})




//BMI CALCULATOR SCRIPT
const button = document.querySelector('#btn');
const heightErr = document.querySelector('#height__error')
const weightErr = document.querySelector('#weight__error')
button.addEventListener('click', () => {
    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const result = document.querySelector('#result');

    let height_status = false, weight_status = false

    
    if(height === '' || isNaN(height) || (height <= 0)){
        heightErr.innerHTML = 'Please provide a valid height';
    }else{
        height.innerHTML = '';
        height_status = true
    }

       
    if(weight === '' || isNaN(weight) || (weight <= 0)){
        weightErr.innerHTML = 'Please provide a valid weight';
    }else{
        weightErr.innerHTML = '';
        weight_status = true
    }

    if(height_status && weight_status){
        // const bmi = (weight / (height * height) / 10000).toFixed(2);
        const bmi = (weight / ((height * height)/10000)).toFixed(2);

        if(bmi < 18.6){
            result.innerHTML = 'Under weight :   ' +  bmi
        } else if(bmi >= 18.6 && bmi < 24.9){
            result.innerHTML = 'Normal :   ' + bmi
        } else{
            result.innerHTML = 'Over Weight :   ' + bmi
        }
    } else{
        alert('Oops! There are issues with the form. Please review and correct the highlighted errors.'); 
        result.innerHTML = '';
    }

})

//SMOOTH SCROLL SCRIPT

document.addEventListener('DOMContentLoaded', function () {
    var smoothScrollLinks = document.querySelectorAll('.smooth');

    smoothScrollLinks.forEach(function (link) {
        link.addEventListener('click', function (event) {
            event.preventDefault();

            var targetId = this.getAttribute('href').substring(1); // Extract the target section ID
            var targetSection = document.getElementById(targetId);

            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});

//SLIDER 

document.addEventListener('DOMContentLoaded', function () {
    const slider = document.querySelector('.slider');
    const prevButton = document.querySelector('.prevbutton');
    const nextButton = document.querySelector('.nextbutton');
    let currentSlide = 0;

    function showSlide(index) {
        currentSlide = index;
        const translateValue = -currentSlide * 100;
        slider.style.transform = `translateX(${translateValue}%)`;
    }

    function nextSlide() {
        if (currentSlide < slider.children.length - 1) {
            showSlide(currentSlide + 1);
        }
    }

    function prevSlide() {
        if (currentSlide > 0) {
            showSlide(currentSlide - 1);
        }
    }

    // Event listeners for next and previous buttons
    nextButton.addEventListener('click', nextSlide);
    prevButton.addEventListener('click', prevSlide);
});




