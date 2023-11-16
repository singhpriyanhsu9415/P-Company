let bagitemobjects;
function OnLoad(){
  loadbagobject();
displaybagitem();
displaybagsummary();
}
OnLoad();

function loadbagobject(){
    bagitemobjects= bagitem.map(itemId=>{
        for(let i=0;i<items.length;i++){
if(itemId==items[i].id){
    return items[i];
} }
    })
};
function displaybagsummary(){
  let bagsummaryelement=document.querySelector('.bag-summary');

  let totalItem=bagitemobjects.length;
  let totalMRP=0;
  let totalDiscount=0;
  let finalPayment=0;

bagitemobjects.forEach(bagitem=>{
  totalMRP+=bagitem.prev_price;
  totalDiscount+=bagitem.discount;
  finalPayment=(totalMRP-totalDiscount+99);
})

  bagsummaryelement.innerHTML=`<div class="bag-details-container">
  <div class="price-header">PRICE DETAILS (${totalItem} Items) </div>
  <div class="price-item">
    <span class="price-item-tag">Total MRP</span>
    <span class="price-item-value">₹${totalMRP}</span>
  </div>
  <div class="price-item">
    <span class="price-item-tag">Discount on MRP</span>
    <span class="price-item-value priceDetail-base-discount">-₹${totalDiscount}</span>
  </div>
  <div class="price-item">
    <span class="price-item-tag">Convenience Fee</span>
    <span class="price-item-value">₹99</span>
  </div>
  <hr>
  <div class="price-footer">
    <span class="price-item-tag">Total Amount</span>
    <span class="price-item-value">₹${finalPayment}</span>
  </div>
</div>
<button class="btn-place-order">
  <div class="css-xjhrni">PLACE ORDER</div>
</button>
`;
}
function displaybagitem(){
let containerelement=document.querySelector('.bag-items-container');
let innerHTML='';
bagitemobjects.forEach(bagitem => {
  innerHTML+=generateinnerhtml(bagitem);
});
containerelement.innerHTML=innerHTML;
}

function removefrombag(itemId){
 bagitem=bagitem.filter(bagitemId=>bagitemId!=itemId);
 localStorage.setItem('bagitem',JSON.stringify(bagitem));
 
 let bagitemstr=localStorage.getItem('bagitem');
 bagitem=bagitemstr ? JSON.parse(bagitemstr): [];
 loadbagobject();
 displaybagitem();
 displaybagsummary();
}



function generateinnerhtml(item){
return ` <div class="bag-item-container">
<div class="item-left-part">
  <img class="bag-item-img" src="${item.image_name}">
</div>
<div class="item-right-part">
  <div class="company">${item.company_name}</div>
  <div class="item-name">M${item.item_name} </div>
  <div class="price-container">
    <span class="current-price">Rs ${item.current_price}</span>
    <span class="original-price">Rs ${item.prev_price}</span>
    <span class="discount-percentage">(${item.discount}% OFF)</span>
  </div>
  <div class="return-period">
    <span class="return-period-days">14 days</span> return available
  </div>
  <div class="delivery-details">
    Delivery by
    <span class="delivery-details-days">10 Oct 2023</span>
  </div>
</div>

<div class="remove-from-cart " onclick="removefrombag(${item.id})">X</div>
</div>`;
}