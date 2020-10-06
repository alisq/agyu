
//this generated artist-info
function artistInfo() {

}


//this generates related content by artist
function related(rel,artist) {

	c = ""
    for(r=0;r<rel.length;r++) {
    	//console.log(rel[r])
        c+=	"<div class='teaser'>"+
        		"<a href='/agyu/public/artwork.html?id="+rel[r].nid+"'>"+
        		"<img src='"+rel[r].field_images.split(",")[0]+"' />"+
        		"<strong>"+rel[r].title+"</strong><br />"+
        		artist+
        	"</a>"+
        	"</div>"
   }

    return c
}