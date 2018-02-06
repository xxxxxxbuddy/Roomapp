function move_block(a){
	var c=(0-a)*1013;
	$('#switch_table1').css('left',c+'px')
	$('#switch_table2').css('left',c+'px')
	$('#switch_table3').css('left',c+'px')
}
function act(){
	var i=0;
	$('#choose_btns>div').click(function(){
		var c=$(this).attr('id');
		if(c=='date0') move_block(0);
		else if(c=='date1') move_block(1);
		else if(c=='date2') move_block(2);
		else if(c=='date3') move_block(3);
	})
}
$(document).ready(function(){
	act();
})