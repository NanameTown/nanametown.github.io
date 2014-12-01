$(function(){
	var url = document.location.href;
	var root = url.replace(new RegExp("nanametown\.github\.io.*"),"nanametown.github.io/");

	$(".subsection a").each(function(index){
		$(this).attr("href",function(i, val){
			return root+$(this).attr("id")+"/index.html";
		});
	});
});