// write out variables on paper to start

var output = document.getElementById("output-target");
console.log(output);
var keypress = document.getElementById("keypress-input");
var colorBtn = document.getElementById("add-color");
var hulkifyBtn = document.getElementById("make-large");
var captureItBtn = document.getElementById("add-border");
var roundedBtn = document.getElementById("add-rounding");
var header = document.getElementById("page-header");
var title = document.getElementById("page-title");
var guineaPig = document.getElementById("guinea-pig");

// getElementsByClassName always returns array.
var articleEl = document.getElementsByClassName("article-section")

// have to add event listener (click 5, mouseover 1, mouseout 2, )

// mouseover event listener
title.addEventListener("mouseover", function() {
	output.innerHTML = "You moved your mouse over the header";
  })

// mouseout event listener
title.addEventListener("mouseout", function() {
	output.innerHTML = "You left Me!";
})

// color btn event listener

colorBtn.addEventListener("click", function() {
	guineaPig.classList.toggle("blue");
})

hulkifyBtn.addEventListener("click", function() {
	guineaPig.classList.toggle("hulky");
})

captureItBtn.addEventListener("click", function() {
	guineaPig.classList.add("border");
})

roundedBtn.addEventListener("click", function() {
	guineaPig.classList.add("round");
})


// article.addEventListener("click", function() {
// 	output.innerHTML = 
// 	// going to return whatever is in the output-target <div>

// })

// Joe's explanation ***********************************************

// var articleEl = document.getElementsByClassName("article-section");
// console.log("articleEl", articleEl);

// function handleSectionClick(mouseEvent) {
// 	console.log(mouseEvent);
// 	var elementText = mouseEvent.target.innerHTML;
// 	outputEl.innerHTML = "You clicked on the " + elementText + "section"
// }

// for (var i = 0; i < articleEl.length; i++) {
// 	articleEl.item(i).addEventListener("click", handleSectionClick);
// }




