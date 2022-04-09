//getting input from user and showing it on ui
//deleting items with click
//calculations
//local storage 
//remaining
//localstorage for sum and cross

const itemName = document.querySelector(".itemName");
const totalBalance = document.querySelector(".balance");
const amount = document.querySelector(".amount");
const submitBtn = document.querySelector(".submit");
const list = document.querySelector('.list');
const deletebtn = document.querySelector('.deleteBtn');
let arr = [];
let counter  = 0;
let sumAll = 0;
let item = 0;
let price  = 0;
updateuiListItems(item,price);


submitBtn.addEventListener('click',function(e){
  e.preventDefault();

if(itemName.value.trim() === '' || amount.value.trim() === ''){
    alert('please enter values');
    return;
}
 item =  itemName.value;
 price =  +amount.value;
updateuiListItems(item,price);

arr[counter] = price;
counter++;
sumAll = sum(arr);
updateUICounts(sumAll);

});

function updateuiListItems(item,price){
    
        
        const entry = document.createElement('li');
        entry.innerHTML = `<div class="minus"><button onclick="lostLives(this)"  class="deleteBtn">X</button><span>${item} </span> <span>${price}</span></div>`;
        list.appendChild(entry);
    
    
    
    }

function lostLives(el){
    arr =  arr.filter(x=> x != (el.parentNode.lastChild.innerHTML));
      
   
     
      sumAll = sum(arr);
    updateUICounts(sumAll);
 

   const element = el.parentNode.parentNode;
    element.remove();

    const toremove =  el.parentNode.firstChild.nextSibling.innerHTML;
    
}

function sum(arr) {
    const reducer = (sum, val) => sum + val;
    const initialValue = 0;
    return arr.reduce(reducer, initialValue);
  }

  function updateUICounts(sumVal){
      totalBalance.innerHTML = sumVal;
  }






