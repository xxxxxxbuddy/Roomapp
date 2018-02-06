function validate_required(field,alerttxt)  //必填项
{
with (field)
{
if (value==null||value=="")
  {alert(alerttxt);return false}
else {return true}
}
}
function timecheck{
	var s = $('starttime').val();
	var e = $('endtime').val();
	if (s > e) {
		alert("结束时间不能早于开始时间")；
	}
}
$('#endtime').change(timecheck());
$(document).ready(function(){
	change();
	timecheck();
	validate_email();
})
addEventsListener("#endtime");
function validate_email(field,alerttxt)
{
with (field)
	{
	apos=value.indexOf("@")
	dotpos=value.lastIndexOf(".")
	if (apos<1||dotpos-apos<2) 
  		{alert(alerttxt);return false}
	else {return true}
	}
}