define([
        'jquery',
        'backbone',
        'collections/studentCollection'
        ], function( $, Backbone,studentCollection) {
       
		var view=Backbone.View.extend({
								el: $("#studentList"),
								 initialize: function(){
							            console.log("student view initialized");
							            this.$el.html('');
							           // this.collection=studentCollection;
							            this.collection.bind('change',this.render)
							            this.render();

							        },
							     render:function(){
							     	console.log("inside rendeo")
								     	_(this.collection.models).each(function(item){
								     		htm='<div>NAME:'+item.get("name")+'</div><div>AGE:'+item.get("age")+'</div><br/>';
								     		$("#studentList").append(htm);
								     		console.log("htm=="+htm);

								     	})
							    	}
						})
		return view;
});
