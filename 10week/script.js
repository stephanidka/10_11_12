const button = document.querySelector(".button");
const resultDiv = document.querySelector(".resultDiv")
const priceDiv = document.querySelectorAll(".price")

let quanyity = 2;
let price = 15000000;
priceDiv.forEach(div =>{
    div.textContent = `${price} рублей`;
})

function calculateTotalPrice(){
    const totalPrice = quanyity * price; 
    alert (`Стоимость ${totalPrice} рублей`);
    resultDiv.textContent = `Стоимость ${totalPrice} рублей`
    console.log("получилось")
}

button.addEventListener('click', calculateTotalPrice)