"use strict";

/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 10
   Case Problem 2

   Author: Ayden McCLurg
   Date:   
   
   Filename: hg_report.js
	
*/


// adds the title, manufacturer, ID, price, platform, esrb, condition, releases and summary
var gameReport = "<h1>"+itemTitle+"</h1>";
gameReport += "<h2>By:" +itemManufacturer+"</h2>";
gameReport += "<img src='hg_"+ itemID +".png' alt='" + itemID + "' id='gameImg'/>";
gameReport += "<table>";
gameReport += "<tr><th>Product ID</th><td>"+itemID+"</td></tr>";
gameReport += "<tr><th>List Price</th><td>"+itemPrice+"</td></tr>";
gameReport += "<tr><th>Platform</th><td>"+itemPlatform+"</td></tr>";
gameReport += "<tr><th>ESRB Ratings</th><td>"+itemESRB+"</td></tr>";
gameReport += "<tr><th>Condition</th><td>"+itemCondition+"</td></tr>";
gameReport += "<tr><th>Releases</th>"+itemRelease+"</tr>";
gameReport += "</table>";
gameReport += itemSummary;

// adds the game report to the first article
document.getElementsByTagName("article")[0].innerHTML = gameReport;

// setting the sum and count values
var ratingsSum = 0;
var ratingsCount = ratings.length;
// adds rating one by one and loops it
for(var i = 0; i < ratings.length; i++){
   ratingsSum += ratings[i];
}

// outputs avg rating for all ratings
var ratingsAvg = ratingsSum / ratingsCount;
var ratingReport = "<h1>Customer Reviews</h1>";
ratingReport += "<h2>" + ratingsAvg + "out of 5 stars  (" + ratingsCount + "reviews)</h2>";
// loop through arrays to get the first 3 from the array name, title, and date
for(var w = 0; w < 3; w++){
   ratingReport += "<div class='review'>";
   ratingReport += "<h1>" + ratingTitles[w] + "</h1>";
   ratingReport += "<table>";
   ratingReport += "<tr><th>By</th><td>" + ratingAuthors[w] + "</td></tr>";
   ratingReport += "<tr><th>Review Date</th><td>" + ratingDates[w] + "</td></tr>";
   ratingReport += "<tr><th>Rating</th><td>";
   // loops the rating array to match the rating score to the rating
   for(var r = 0; r < ratings[w]; r++){
      ratingReport += "<img src='hg_star.png' />"
   }
   // adds the summary of the ratings
   ratingReport += "</td></tr></table>";
   ratingReport += ratingSummaries[w];
   ratingReport += "</div>";
}
// adds rating report to the first aside element
document.getElementsByTagName("aside")[0].innerHTML = ratingReport;