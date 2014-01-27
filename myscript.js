$(document).ready(function(){
	$fullPrice = 0;
	
	$("#Price").live('click', function(){
		alert($fullPrice);
	});
	
  $(".mylist").live('click', function(){
 	var $bubble = $(this).find (".ui-li-count");
	var $price = $bubble.html();

	$fullPrice+= Number($price);
	
	var $mytext = $(this).text();
	var $index = $mytext.indexOf($price);
	var $textNoPrice = $mytext.substr(0, $index);
	
 	$("#secondList").append("<li><center>"+$textNoPrice+"</center></li>");
	$("#secondList").listview("refresh");
 });
  
  $("#menupage").live('pagebeforeshow',function(){
   $fullPrice = 0;
  });
  
  });
