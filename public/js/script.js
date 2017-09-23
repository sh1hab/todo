$('document').ready(

	

	$('ul').on("click","li",function()
	{
		//on off the class on li
		$(this).toggleClass("completed");
	}),

	$('ul').on("click","span",function( event ){
		//fadesout the li
		$(this).parent().fadeOut(500,function(){
			//removes the li
			$(this).remove();
		})
		//stops event bubbling
		event.stopPropagation();
	}),

	$("input[type='text']").on("keypress",function( obj ){
		if( obj.which===13)
		{
			// grabbing input val
			var todotext=$(this).val();
			// adding a new li
			$('ul').append("<li> <span> X </span>"+ todotext +" </li>");
		}
	}),

	);