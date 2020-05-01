//Check off specific Todos by Clicking ;listener needed to be added to parent so we can account for elements that aren't there yet, so that's why li is specified here!
$('ul').on('click', 'li', function() {
	$(this).toggleClass('completed');
});

//add event object and method to stop it from bubbling
$('ul').on('click', 'span', function(event) {
	$(this).parent().fadeOut(500, function() {
		//the "this" below is referring to the li, not the span!
		$(this).remove();
	});
	event.stopPropagation();
});

$("input[type='text']").on('keypress', function(event) {
	if (event.which === 13) {
		//grabbing new todo text from input
		var todoText = $(this).val();
		$(this).val('');
		//create new li and add to ul; take a string of HTML and append()
		$('ul').append('<li><span><i class="fas fa-trash-alt"></i> </span>' + todoText + '</li>');
	}
});

$('.fa-plus').click(function() {
	$("input[type='text']").fadeToggle();
});
