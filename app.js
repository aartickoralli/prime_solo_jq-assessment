$("form").submit(function( event) {
	event.preventDefault();

	// stops the page from refreshing automatically

	var values = {};

	var $inputs = $("input");

	$inputs.each(function(){
		values[this.name] = $(this).val();
	});

	console.log(values);

	var score = parseInt(values.lastReviewScore);
	var scoreColor = "";

	switch (score) {
		case 1:
		scoreColor = "red";
		break;

		case 2: 
		scoreColor = "blue";
		break;

		case 3:
		scoreColor = "yellow";
		break;

		case 4:
		scoreColor = "green";
		break;

		case 5:
		scoreColor = "purple";
		break;

		default: 
		scoreColor = "black";

	}

	//var removeEmployee =  

	$content = $("<li>" + values.firstName + ", " + values.lastName + ", " + values.employeeNumber + ", " + values.employeeTitle + ", " +  "<span style='color:" + scoreColor + "'>" + values.lastReviewScore + "</span>" + "," + values.salary + " " + "<button class = myButtonClass>Remove Employee</button>" + "</li>");

	$("ul").append($content);
});



$('.myParentClass').on('click', '.myButtonClass',function(){
	//alert("You clicked a button!)");
$(this).parent().remove();
});
//here,the parent is li
