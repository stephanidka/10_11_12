const prices = document.querySelectorAll('.price')
const button = document.getElementById('button')
const result = document.querySelector('.result')
const price = document.querySelector('#price')
const newPrice = document.querySelector('#newPrice')


const pricesArray = Array.from(prices);
const sum = pricesArray.reduce((accumulator, currentValue) => {
    const value = parseInt(currentValue.textContent) || 0;
    return accumulator + value;
    }, 0)
price.textContent = sum;

function useCoupon(){
    const newSum = sum - (sum/100 * 20); 
    price.classList.add('strike'); 
    newPrice.textContent = newSum;
}

button.addEventListener('click', useCoupon)