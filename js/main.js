$(function)(){
	$("div").slice(0,6).show();
	$("#loadmore").on('click', function(e){
		e.preventDefault();
		$("div:hidden").slice(0, 6).slideDown();
	})
}