

let count=1;
let sumPrice=0;


function cardHandler(e){

const price=e.childNodes[3].childNodes[5].innerText.split(' ')[0];
const productPrice=parseFloat(price);
sumPrice+=productPrice;
const product=e.childNodes[3].childNodes[3].innerText;

const listContainer =document.getElementById("product-name-container");
let p  =document.createElement("p");
p.innerHTML=`${count ++ }   ${product}`;
p.setAttribute("class","font-medium text-2xl")
listContainer.appendChild(p);
const totalPrice= document.getElementById('totalPrice').innerText =sumPrice.toFixed(2);


if(totalPrice >0){

document.getElementById("purchaseBtn").removeAttribute("disabled");

if(totalPrice>=200){
document.getElementById("applyBtn").removeAttribute("disabled");


}else{
document.getElementById("applyBtn").setAttribute("disabled");

}

}else{
document.getElementById("purchaseBtn").setAttribute("disabled");


}




}


document.getElementById("couponField").addEventListener("keyup",function(event){

const coupon =event.target.value;

if(coupon === "SELL200"){
const discount=20;
const totalPriceString= document.getElementById('totalPrice').innerText;
const discountString= document.getElementById('discount');
const totalPrice =parseFloat(totalPriceString);

// SELL200
const currentDiscount=((totalPrice*discount)/100).toFixed(2);
discountString.innerText =currentDiscount;
const grandTotal=document.getElementById("total");

const finalTotal=totalPrice -currentDiscount;
grandTotal.innerText=finalTotal.toFixed(2);

console.log( currentDiscount)
}else if(coupon != 'SELL200'){
document.getElementById('discount').innerText=0.0;
document.getElementById("total").innerText=0.0;




}
})


function goHome(){

location.href ="index.html";
document.getElementById('discount').innerText=0.0;
document.getElementById("total").innerText=0.0;

}

