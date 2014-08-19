define([
        'jquery',
        'backbone'
        
        ], function( $, Backbone) {
       
       var appRouter = Backbone.Collection.extend({

             routes: {
	            "listName": "listName",
	            "listNameAndAge": "listNameAndAge",
	            "*actions": "defaultRoute" // Backbone will try match the route above first
        	} ,
        	defaultRoute:function(){
        		console.log("default");

        	},
        	listName:function(){
        		var student1=new studentModel();
				student1.set({ name: "Thomas", age: 20});
				student1.getName();
				var student2=new studentModel();
				student2.set({ name: "Arun", age: 30});
				var student3=new studentModel();
				student3.set({ name: "Rahul", age: 40});

				////backbone collection

				var studentCollection=Backbone.Collection.extend({
						model:studentModel
				})
				var studentCollection1=new studentCollection([student1,student2,student3]);
				var studentView=Backbone.View.extend({
						 initialize: function(){
					            console.log("student view initialized");
					            this.$el.html('');
					            this.collection=studentCollection1;
					            this.render();

					        },
					     render:function(){
						     	_(this.collection.models).each(function(item){
						     		htm='<div>NAME:'+item.get("name")+'</div><div>AGE:'+item.get("age")+'</div><br/>';
						     		$("#studentList").append(htm);
						     		console.log("htm=="+htm);

						     	})
					    	}
				})
				var studentView1=new studentView({ el: $("#studentList")});

        	},
        	listNameAndAge:function() {
        		var studentModel=Backbone.Model.extend({
				defaults: {
		            name: 'Fetus',
		            age: 0,
		            
		        },
				initialize:function(){
				console.log ("student model initialized");
				console.log("name default="+this.get("name"));
				
				},
				getName:function() {

					console.log("name="+this.get("name"));
				}
	
		})
		
        		
        	}

                                                             
       return appRouter;
       });



  
   