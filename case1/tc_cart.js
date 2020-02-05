"use strict";

/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 10
   Case Problem 1

   Author: 
   Date:   
   
   Filename: tc_cart.js
	
*/
//sets total to 0, adds rows of categories
var orderTotal = 0;
var cartHTML = "<table>";
cartHTML += "<tr>";
cartHTML += "<th>Item</th><th>Description</th><th>Price</th><th>Qty</th><th>Total</th>";
cartHTML += "</tr>";

// calculates the prices of the item gets description and quantity
for(var i = 0; i < item.length; i++){
   cartHTML += "<tr>";
   cartHTML += "<td><img src='tc_" + item[i] + ".png' alt='" + item[i] + "' /></td>";
   cartHTML += "<td>" + itemDescription[i] + "</td>";
   cartHTML += "<td>$" + itemPrice[i] + "</td>";
   cartHTML += "<td>" + itemQty[i] + "</td>";
   
   // mutiplay the cost and the amount thats being bought
   var itemCost = itemPrice[i] * itemQty[i];
   cartHTML += "<td>$" + itemCost + "</td>";
   cartHTML += "</tr>";
   orderTotal += itemCost;
}

// adds the total to the order to the Html
cartHTML += "<tr>";
cartHTML += "<td colspan='4'>SubTotal</td>";
cartHTML += "<td>$" + orderTotal + "</td>";
cartHTML += "</tr>";
cartHTML += "</table>";
document.getElementById("cart").innerHTML = cartHTML;
