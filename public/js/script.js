$(document).ready(function(){

	$('ul').on('click','li',function(event)
	{
		//on off the class on li
		$(this).toggleClass("completed");
		
	});

	$('ul').on('click','span',function( event ){
		//fadesout the li
		$(this).parent().fadeOut(500,function(){
			//removes the li
			$(this).remove();
		})
		//stops event bubbling
		event.stopPropagation();
	});

	$("#input").on("keypress",function( obj ){
		if( obj.which===13)
		{
			// grabbing input val
			var newToDo=$(this).val();
			$(this).val("");
			// adding a new li
			if( newToDo!=="" )
				$('ul').append('<li><span><i class="fa fa-trash-o"></i></span> ' + newToDo + '</li>'); // append
		}
	});

	$("#title").on("keypress",function(event) {
		if( event.which===13)
		{
			// grabbing input val
			var title=$(this).val();
			// console.log(title);
			$(this).val("");
			// adding a new li
			if( title!=="" )
				$(this).attr('placeholder',title);  
		}
	});

	$('.fa-pencil').click(function(){
		$("#input").fadeToggle();
	});

});