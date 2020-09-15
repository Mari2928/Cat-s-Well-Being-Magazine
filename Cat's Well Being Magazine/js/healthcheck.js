/*
    This JS script displays/hides questions 
    while calculating the score to suggest advice.
    Referred Yes/No Diagnosis Tool: http://migo-media.com/yes-no/
    and adapted to my site by adding two variables, id_value and count, 
    adding score calculating system, and displaying the sample result
    based on the score calculated.
*/

var id_value = '';	// to find which answer was clicked
var count = 0;		// to count the health score

function getId(ele){	// store the id value
    id_value = ele.id; 
}

jQuery.noConflict();
(function($) {
	    $(function(){
	        $(".btn").on("click", function() {
			   document.getElementsByClassName("progress-img").innerHTML ='<img src="img/AI_health_check.jpg">';
			   if(id_value == '1y')	count+= 3; // Q1 is yes
			   if(id_value == '2y')	count+= 2; // Q2 is yes
			   if(id_value == '3y')	count+= 3; // Q3 is yes
			   if(id_value == '4y')	count+= 3; // Q4 is yes
			   id_value = '';		   // reset the id value

			   // display the result based on the score calculated
			   if(count >= 10) {
				document.getElementById("result_target").innerHTML = "RESULT: Go to see a doctor now and take a blood test to see the value of creatine and SDMA.";
			   }
			   else if(count > 0 && count < 10) {
				document.getElementById("result_target").innerHTML = "RESULT: Do urinary check and consider giving wet food.";
			   }
			   else {
				document.getElementById("result_target").innerHTML = "RESULT: Well done! Keep up his/her well being.";
			   }
			   // hidden the current question and display next question
			   $(this).closest("div").css("display","none");
			   id = $(this).attr("href");						   
			   $(id).addClass("positionFit").show("fast");
			});
});
})(jQuery)	
