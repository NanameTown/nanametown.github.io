$(function(){
	var url = document.location.href;
	var parameter = document.location.search.replace("?","");
	var root = url.replace(new RegExp("nanametown\.github\.io.*"),"nanametown.github.io/");
	var hm_url = "";

	if(parameter){
		call_text(root+parameter);
	}

	$("#articles a").each(function(index){
		$(this).attr("href",function(i, val){
			return "javascript:void(0)";
		});
	});

	$(".subsection a").each(function(index){
		$(this).attr("href",function(i, val){
			return "javascript:void(0)";
		});
	});

	$(".subsection a").click(function(){
		hm_url = root+$(this).attr("id")+"/"+$(this).attr("id")+".hm";
		document.location.href = root+"index.html?"+$(this).attr("id")+"/"+$(this).attr("id")+".hm";
		console.log(hm_url);
		call_text(hm_url);
	});
});

function call_text(url){
	$.ajax({
		type: "GET",
		url: url,
		dataType: "txt",
		success: function(data, status, xhr){
			console.log(url);
			if(xhr.status===200 || data.length>0 && xhr.status===0){
				$("#articles").html((data.match(/<body>[\s\S]*(?=<\/body>)/))[0].replace(/<body>/,""));
			}else{
				$("#articles").html("<h2>この記事は存在しないか、通信エラーの可能性があります。</h2>");
			}
		}
 	});
}