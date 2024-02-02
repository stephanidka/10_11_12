const button = document.querySelector(".button");
const resultDiv = document.querySelector(".resultDiv")

let quanyity = 2;
let price = 15000000;

function calculateTotalPrice(){
    const totalPrice = quanyity * price; 
    alert (`Стоимость ${totalPrice} рублей`);
    resultDiv.textContent = `Стоимость ${totalPrice} рублей`
    console.log("получилось")
}

button.addEventListener('click', calculateTotalPrice)