//////mainjs
requirejs.config({
                 baseUrl: 'js/lib',
                 paths: {
                     collections : '../collections',
                     models : '../models',
                     views : '../views'
                 },
                 shim: {
                    'backbone': {
                    deps: ['underscore', 'jquery'],
                    exports: 'Backbone'
                },

                 
                 'underscore': {
                 exports: '_'
                 }
                 }
});


require(['jquery', 'backbone','../router/router'], function ($, Backbone,appRouter ) {
    
        
                                    var router = new appRouter();
                                    Backbone.history.start();
             });

