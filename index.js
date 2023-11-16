let itemscontainerelement=document.querySelector('.items-container');

function displayitems(){
  if(!itemscontainerelement){
    return;
  }
    let inner='';
    items.forEach(item=>{
    inner+=` <div class="item-container">
    <img src="${item.image_name}" alt="item image "      class="item-image">
     <div class="rating">
        ${item.rating.stars}*|${item.rating.count}
      </div>
     <div class="company-name">${item.company_name}</div>
     <div class="item-name">${item.item_name}</div>
      <div class="price">
       <span class="current-price">Rs.${item.current_price}</span>
       <span class="prev-price">Rs. ${item.prev_price}</span>
       <span class="Discount">(${item.discount}% off)</span>
    </div>
     <button class="add-to-bag" onclick="Addtobag(${item.id}); ">Add to Bag</  button>
    </div>`
    });
    itemscontainerelement.innerHTML=inner;
} 
let bagitem;


function OnLoad(){
let bagitemstr=localStorage.getItem('bagitem');
bagitem=bagitemstr ? JSON.parse(bagitemstr): [];
displayitems();
bagcnt();
}
OnLoad();

function Addtobag(itemId){
bagitem.push(itemId); 
localStorage.setItem('bagitem',JSON.stringify(bagitem));
bagcnt();
}

function bagcnt(){
let bagcntelement=document.querySelector('.itemcnt');
if(bagitem.length>0){
  bagcntelement.style.visibility='visible';
bagcntelement.innerText=bagitem.length;
}else{
  
  bagcntelement.style.visibility='hidden';
}}
