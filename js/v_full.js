$(function(){
    const ht = $(window).height();	
    $("section").height(ht); 
  
    $(window).on("resize",function(){
        const ht = $(window).height();	
        $("section").height(ht);
    });

    $("#menu li").on("click",function(e){
        e.preventDefault();
        const ht = $(window).height();	
        const i = $(this).index();
        const nowTop = i*ht;	
      $("html,body").stop().animate({"scrollTop":nowTop},1400);        	 
    });

    $(window).on("scroll",function(){	
        const ht = $(window).height();
        const scroll = $(window).scrollTop();
        for(let i=0; i<4;i++){
            if(scroll>=ht*i && scroll< ht*(i+1)){
                  $("#menu li").removeClass();
                  $("#menu li").eq(i).addClass("on");
            };
        }	   
    });  
    
    
    $("section").on("mousewheel",function(event,delta){    		
        //마우스 휠을 올렸을때
        if (delta > 0) {  
          const prev = $(this).prev().offset().top;
          $("html,body").stop().animate({"scrollTop":prev},1400);	
         }else if (delta < 0) { //마우스 휠을 내렸을때
          const next = $(this).next().offset().top;
           $("html,body").stop().animate({"scrollTop":next},1400);   			 
      }
      
      });


});    