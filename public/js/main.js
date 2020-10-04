var teasers = [];
var lines = [];
var fulls = [];

fetch('http://agyu-drupal.codepanel.in/json/artworks')
	.then(response => response.json())
  	.then(data =>  {
  		console.log(data)
  		});

fetch('/json')
  .then(response => response.json())
  .then(data =>  {
  		

  		for (i =0; i<data.length;i++) {



  			 if (data[i].Title != "") {
  			var t = "<div class='teaser'>"+
					"<img class='teaser-img' src='"+data[i]["Image address"]+"'>"+
					"<h3 class='work-name'>"+data[i].Title+"</h3>"+
					"<p class='artist-name'>"+data[i].Artist+"</p>"+
					"</div>";

			var l = "<div class='line-teaser'>"+
					 "<div class='line-left'>"+
					 "<h3 class='work-name'>"+data[i].Title+"</h3>"+
					 "<p class='artist-name'>"+data[i].Artist+"</p>"+
					 "</div>"+
					 "<img class='teaser-img' src='"+data[i]["Image address"]+"'>"+
					 "<div class='empty'></div>"+
					 "<div class='line-right'>"+
					 "<p class='work-date'>"+data[i]["date of work"]+"</p></div>"+
					 "</div>";	




var f = "<div class='full'>"+


	"<div class='main-carousel'>"+
	  	"<div class='carousel-cell'>"+
	  		"<img class='full-img' src='"+data[i]["Image address"]+"'>"+
	  		"<p class='caption'>"+data[i]["Caption"]+"</p>"+
	  	"</div>"+
	  	"<div class='carousel-cell'>"+
	  		"<img class='full-img' src='"+data[i]["Image address"]+"'>"+
	  		"<p class='caption'>"+data[i]["Caption"]+"</p>"+
	  	"</div>"+
	  	"<div class='carousel-cell'>"+
	  		"<img class='full-img' src='"+data[i]["Image address"]+"'>"+
	  		"<p class='caption'>"+data[i]["Caption"]+"</p>"+
	  	"</div>"+	  		  	
	 "</div>"+
	"<div class='full-contents'>"+
	"<div class='full-left'>"+
	"<h3 class='work-name'>"+data[i].Title+"</h3>"+
	"<p class='artist-name'>"+data[i].Artist+"</p>"+
	"<p class='work-date'>"+data[i]["date of work"]+"</p>"+
	"</div>"+
	"<div class='full-middle'>"+
	"<div class='description'>"+data[i]["description long"]+
	"</div>"+
	"</div>"+
	"<div class='full-right'>"+
	"<p class='dimensions'>"+
	"<p class='medium'>"+data[i]["medium"]+"</p>"+
	"<p class='exhibition-history'>"+data[i]["xhibition history"]+"</p>"+
	"<p class='tags'>tags</p>"+
	"</div>";		

	teasers.push(t);
  			lines.push(l);
  			fulls.push(f)
}

  			

  		}

  	});



$(".teasers").click(function(){
	
	$("#container").empty();

	teasers.map(t=>$("#container").append(t))
})


$(".lines").click(function(){
	$("#container").empty();

	lines.map(t=>$("#container").append(t))
})






$(".fulls").click(function(){
	$("#container").empty();

	fulls.map(t=>$("#container").append(t))
})




