/* 
   This JS is used as a template for the following global parts
   repeatedly used throughout the site: contact form, 
   top navigation tabs, side bar, and go-to-top icon.     
*/

/* Contact form JS -----------------------------------*/

/* To open/close the contact form on top right */

function openForm() { document.getElementById("myForm").style.display = "block";}
function closeForm() { document.getElementById("myForm").style.display = "none";}


/* Top nav tabs template JS -----------------------------------*/

/* Template for top navi tabs using Handlebars' partials */

// find a current page
var path = window.location.pathname;
var page = path.split("/").pop();
// console.log(page); for debugging

// set the active status as false by default and true if the current page is matched
var a, b, c, d, e, f = false;
switch( page ) {
    case 'index.html':		a = true;
        break;
    case 'happiness.html':	b = true;
        break;
    case 'strength.html':	c = true;
        break;
    case 'prevention.html':	d = true;
        break;
    case 'food.html':		e = true;
        break;
    case 'report.html':		f = true;
        break;
    default:			a= true;
        break;
}

// register partials and replace name and  url for each top navi tab
Handlebars.registerPartial("activeTab", 
	'<a class ="nav-link active" href= {{url}} >{{name}}</a></li>');
Handlebars.registerPartial("normalTab", 
	'<a class ="nav-link" href= {{url}} >{{name}}</a></li>');

// pre-compile the top navi tab section to make rendering fast for other pages
var templateSrc = document.getElementById("template").innerHTML;
var template = Handlebars.compile(templateSrc);
var data = {
   tab: [
	{ name: "HOME", 	url: "index.html", 	active: a },
	{ name: "Happiness", 	url: "happiness.html", 	active: b },
	{ name: "Strength", 	url: "strength.html", 	active: c },
	{ name: "Prevention", 	url: "prevention.html", active: d },
	{ name: "Food", 	url: "food.html", 	active: e },
	{ name: "Report", 	url: "report.html", 	active: f }
	]
}
document.getElementById("topNav").innerHTML += template(data);


/* Side bar template JS -----------------------------------*/

/* Template for side navi objects using Handlebars' partials */

// register partials and replace name, url, image, and alt for each side navi object
Handlebars.registerPartial("sideNavList",
	'<a href={{urlS}}><img class ="sideNavImages" src={{img}} alt={{alt}}><br><p class="arcText">{{nameS}}</p></a>');

// grab the sideNavTemplate section and pre-compile it
var SideNavtemplateSrc = document.getElementById("sideNavTemplate").innerHTML;
var SideNavtemplate = Handlebars.compile(SideNavtemplateSrc);

// store each side navi data in this order: name, URL, image, and altered text
var dataS = {
   object: [
	{ nameS:"Make Your Cat Happy", urlS: "happiness.html", img: "img/happy_cat.jpg", 
	alt:"A cat happily sunbathing in garden : a small version of carousel picture that is linked to 'Make Your Cat Happy' page."},

	{ nameS:"Make Your Cat Strong", urlS: "strength.html", img: "img/cat_playing.jpg", 
	alt:"A kitten playing with butterfly in gardent: a small version of carousel picture that is linked to 'Make Your Cat Strong' page." },

	{ nameS:"   Prevent Disease   ", urlS: "prevention.html", img: "img/healthy_cat.jpg", 
	alt:"A cat picture with illustrations and comments necessary for disease prevention: a small version of carousel picture that is linked to 'Prevent Disease' page."},

	{ nameS:"   Food is Everything ", urlS: "food.html", img: "img/cat_loves_eating.jpg", 
	alt:"A cat enjoying eating: a small version of carousel picture that is linked to 'Food is Everything' page."},

	{ nameS:"      Project Report    ", urlS: "report.html", img: "img/project-report.png", 
	alt:"A notebook and pencils: a small version of carousel picture that is linked to 'Project Report' page."}
	]
}
document.getElementById("sideNav").innerHTML += SideNavtemplate(dataS);


/* Arctext (external library) JS -----------------------------------*/

// This JS enables displaying the arc texts
$('.arcText').arctext({radius: 170, dir: -1});


/* Go-to-Top icon JS -----------------------------------*/

/* Go-to-Top image button on bottom right of each page */

//Get the button
var mybutton = document.getElementById("topBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
