//Vimeo  Api  . Vimeo Api , by Alioune Dia, Inspired by 
//Andrew Nesbitt  
Vimeo  = function(){
var self = this 
this.videos = [];
this.keyword; // Keyword to filter videos by.
//this.user = 'user20281826'
//this.user = 'user202823'
this.user   = 'forwardtechnology'
this.type = 'videos';
}
//Send request 
Vimeo.prototype.request = function(){
	var self = this;
  	var options;
  	//var data = ''
  	options = {
    	url :"http://vimeo.com/api/v2/" + this.user + "/" + this.type + ".json",
	port: 80,
  	}
	alert(options.url);
	$.ajax({
            url : 'http://http://vimeo.com/api/v2/forwardtechnology/videos.json',
    		dataType : 'jsonp',
		//callback
    		success : function(data){alert('data' + data )} 
		
	});
}
//Format  Video
Vimeo.prototype.format =  function(data){
	for( i = 0; i< data.length; i++) {
		alert('Title ' + data[i].title);
		alert('Url  ' + data[i].url);
		alert('thumbnail_medium' + data[i].thumbnail_medium);
	}
}
//Initializing videos
$(function(){
	alert('testons');
	v = new  Vimeo()
	v.request()
})