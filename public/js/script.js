$('document').ready(
	$('li').on("click",function()
	{
		// console.log( $(this).css("color") );
		if(  $(this).css("color")=== "rgb(0, 0, 0)" )
		{
			$(this).css({
				textDecoration:"line-through",
				color:'gray'
			});
		}
		else{
			$(this).css({
				textDecoration:"none",
				color:'black'
			});
		}
	}
	)
);