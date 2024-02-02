const prices = document.querySelectorAll('.price')
const button = document.getElementById('button')
const result = document.querySelector('.result')

const pricesArray = Array.from(prices);
const sum = pricesArray.reduce((accumulator, currentValue) => {
    const value = parseInt(currentValue.textContent) || 0;
    return accumulator + value;
    }, 0)
result.textContent = "Итого: " + sum;

function useCoupon(){
    const newSum = sum - (sum/100 * 20);  
    result.textContent = "Итого: " + newSum;
}

button.addEventListener('click', useCoupon)