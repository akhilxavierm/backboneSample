define([
        'jquery',
        'backbone',
        'models/studentModel',
        'collections/studentCollection',
        'views/studentView',
        
        ], function( $, Backbone,studentModel,studentCollection,studentView) {
       
       var appRouter = Backbone.Router.extend({

             routes: {
             	"listName": "listName",
	            "listNameAndAge": "listNameAndAge"
	            
        	} ,

        	defaultRoute:function(){
        		
        		console.log("default");

        	},
        	listNameAndAge:function(){

        		
        		var student1=new studentModel();
				student1.set({ name: "Thomas", age: 20});
				student1.getName();
				var student2=new studentModel();
				student2.set({ name: "Arun", age: 30});
				var student3=new studentModel();
				student3.set({ name: "Rahul", age: 40});
				var studentCollection1=new studentCollection([student1,student2,student3]);
				var studentView1=new studentView({ collection:studentCollection1});
				setTimeout(function () {
					console.log("inside settimeout");
					studentCollection1.pop();
					
				},3000);

        	},
        	listNameOnly:function(){
        		var student1=new studentModel();
				student1.set({ name: "Thomas", age: 20});
				student1.getName();
				var student2=new studentModel();
				student2.set({ name: "Arun", age: 30});
				var student3=new studentModel();
				student3.set({ name: "Rahul", age: 40});
				var studentCollection1=new studentCollection([student1,student2,student3]);
				var studentView1=new studentView({ model:student1});
        	}
        	
        });

                                                             
       return appRouter;
       });



  
   