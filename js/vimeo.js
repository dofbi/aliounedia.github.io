//Vimeo  Api  . Vimeo Api , by Alioune Dia, Inspired by 
//Andrew Nesbitt

Vimeo       = function(){
	var self    = this 
	this.videos = [];
	//this.keyword; // Keyword to filter videos by.
	//this.user = 'user20281826'
	//this.user = 'user202823'
	//this.user   = 'forwardtechnology'
	//this.type   = 'videos';

}

//Format  Video
Vimeo.prototype.load =  function(data){
	for( i = 0; i< data.length; i++) {
		this.videos.push(
		{
		 title : data[i].title ,
		 url   : data[i].url ,
		 thumbnail_medium : data[i].thumbnail_medium 
		});
	}
		
}

//render a item
VimeoView =  Backbone.View.extend({
	initialize : function(){
		this.render();
		return this
	},
	render : function(){
		return Mustache.render(
			"<li>{{title}}<li>", this.model);
	}
}
)

//render a collection 
VimeosView =  Backbone.View.extend({
	el: $("#vimeo"),
	initialize : function(){
		this.render();
		return this
	},
	render : function(){
		var v ="";
		_.each(this.model , 
			function(video){
			//test
		alert("video" + video.url);
		v   = v + new VimeoView({model : video}).render().$el
			
			}
		)
		this.$el.append(v);
	}
}
)

//Initializing videos
my_init = function(){
  	var options;
  	options = {
    		url :"http://vimeo.com/api/v2/forwardtechnology/videos.json",
		port: 80,
  	}
	$.ajax({
              url: options.url,
              dataType: "jsonp",
              crossDomain: true
		 
            }
	).done(function(data){
		 v = new Vimeo()
		 v.load(data);
		 new  VimeosView({model: v.videos});
	}
	)
}

$(function(){
	my_init();
})
