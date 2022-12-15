function getData() {
  fetch('purchaseorders.json')
  .then(response => response.json())
  .then(data => {  
    const purchaseOrders = data.mvPurchaseOrders;
    for (let i = 0; i < purchaseOrders.length; i++) {
        const item = purchaseOrders[i].PurchaseOrderTypeAbbreviation + " - " + purchaseOrders[i].PurchaseOrderNo;
        document.getElementById('item' + (i + 1)).innerHTML = item;

        const text = "Purchase Order Address: " + purchaseOrders[i].PurchaseOrderAddress + "<br>" + 
        "Purchase Order Contact Person: " + purchaseOrders[i].PurchaseOrderContactPerson + "<br>" + 
        "Purchase Order Status: " + purchaseOrders[i].PurchaseOrderStatus + "<br>" + 
        "Purchase Order Details: ";
        document.getElementById('text' + (i + 1)).innerHTML = text;
    }
    
    for (let i = 0; i < purchaseOrders.length; i++) {
        const purchaseOrderDetails = purchaseOrders[i].PurchaseOrderDetails;
        for (let j = 0; j < purchaseOrderDetails.length; j++) {
            document.getElementById('detail' + (i + 1) + '_1_' + (j + 1)).innerHTML = purchaseOrderDetails[j].PurchaseOrderRowProductSKU;
            document.getElementById('detail' + (i + 1) + '_2_' + (j + 1)).innerHTML = purchaseOrderDetails[j].PurchaseOrderRowQuantity;
            document.getElementById('detail' + (i + 1) + '_3_' + (j + 1)).innerHTML = purchaseOrderDetails[j].PurchaseOrderRowUnitPriceWithoutTaxOrDiscount;
            document.getElementById('detail' + (i + 1) + '_4_' + (j + 1)).innerHTML = purchaseOrderDetails[j].PurchaseOrderRowTotalAmount;
        }
    }
    });
}

getData();

var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}