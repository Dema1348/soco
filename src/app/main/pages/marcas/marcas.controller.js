(function() {
	'use strict';

	angular
		.module('app.pages.marcas')
		.controller('MarcasController', MarcasController);

	function MarcasController($timeout) {
        var vm = this;
        vm.reload=true;
		vm.slides=[{
            image: "./assets/almagro-1.jpg",
            id: 0
        },
        {
            image: "./assets/almagro-2.jpg" ,
            id: 1
        },
        {
            image: "./assets/almagro-3.jpg" ,
            id: 2
        },
        {
            image: "./assets/almagro-4.jpg" ,
            id: 3
        },
        {
            image: "./assets/almagro-5.jpg" ,
            id: 4
        },
        {
            image: "./assets/almagro-6.jpg" ,
            id: 5
        },
        {
            image: "./assets/almagro-7.jpg" ,
            id: 6
        },
        {
            image: "./assets/almagro-8.jpg" ,
            id: 7
        },
        {
            image: "./assets/almagro-9.jpg" ,
            id: 8
        },
        {
            image: "./assets/almagro-10.jpg" ,
            id: 9
        }]

        vm.clickTabs = function(type) {
           if(type=='A'){
            vm.reload=false;
            $timeout(function(){
             vm.reload=true;
             vm.slides=[{
                image: "./assets/almagro-1.jpg",
                id: 0
            },
            {
                image: "./assets/almagro-2.jpg" ,
                id: 1
            },
            {
                image: "./assets/almagro-3.jpg" ,
                id: 2
            },
            {
                image: "./assets/almagro-4.jpg" ,
                id: 3
            },
            {
                image: "./assets/almagro-5.jpg" ,
                id: 4
            },
            {
                image: "./assets/almagro-6.jpg" ,
                id: 5
            }]
            })
            
           }
           if(type=='B'){
            vm.reload=false;
            $timeout(function(){
             vm.reload=true;
             vm.slides=[{
                image: "./assets/socovesa-1.jpg",
                id: 0
            },
            {
                image: "./assets/socovesa-2.jpg" ,
                id: 1
            },
            {
                image: "./assets/socovesa-3.jpg" ,
                id: 2
            },
            {
                image: "./assets/socovesa-4.jpg" ,
                id: 3
            },
            {
                image: "./assets/socovesa-5.jpg" ,
                id: 4
            },
            {
                image: "./assets/socovesa-6.jpg" ,
                id: 5
            },
            {
                image: "./assets/socovesa-7.jpg" ,
                id: 6
            },
            {
                image: "./assets/socovesa-8.jpg" ,
                id: 7
            },
            {
                image: "./assets/socovesa-9.jpg" ,
                id: 8
            },
            {
                image: "./assets/socovesa-10.jpg" ,
                id: 9
            },
            {
                image: "./assets/socovesa-11.jpg" ,
                id: 10
            },
            {
                image: "./assets/socovesa-12.jpg" ,
                id: 11
            },
            {
                image: "./assets/socovesa-13.jpg" ,
                id: 12
            },{
                image: "./assets/socovesa-14.jpg" ,
                id: 13
            }]
            })
           
             }
           if(type=='P'){
            vm.reload=false;
               $timeout(function(){
                vm.reload=true;
                vm.slides=[{
                    image: "./assets/pilares-1.jpg",
                    id: 0
                },
                {
                    image: "./assets/pilares-2.jpg" ,
                    id: 1
                },
                {
                    image: "./assets/pilares-3.jpg" ,
                    id: 2
                },
                {
                    image: "./assets/pilares-4.jpg" ,
                    id: 3
                },
                {
                    image: "./assets/pilares-5.jpg" ,
                    id: 4
                },
                {
                    image: "./assets/pilares-6.jpg" ,
                    id: 5
                },{
                    image: "./assets/pilares-7.jpg" ,
                    id: 6
                },
                {
                    image: "./assets/pilares-8.jpg" ,
                    id: 7
                }]
               },250)
           
           }
        };
        
      
	}
})();
