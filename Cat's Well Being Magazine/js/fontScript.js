/*
   This script is for changing font size. 
   Except for the navigation menu of text such as on the side bar 
   or on the top navigation tabs, text can be resized without 
   assistive technology up to 200 percent without loss of content or functionality. 
   Referred the Lecture 7.3.5: What can we do with these elements when we have them
   and adapted to my site by changing to appropriate font size for my site and 
   selecting <article> as affected area to maintain the site design.
*/

// get all the elements in article tag
var allArticles = document.getElementsByTagName("article");

// change font size when 'A' is clicked on the site
document.getElementById("smallA").onclick = function() { changeSize("1.0em") };
document.getElementById("mediumA").onclick = function() { changeSize("1.5em") };
document.getElementById("largeA").onclick = function() { changeSize("2.0em") };

// go through allArticles and change the font size of each article
function changeSize(c){
	for(var i=0; i < allArticles.length; i++){ allArticles[i].style.fontSize = c; }
};