
(function($) {
	  
$.fn.JWslider = function(options){
	var defaults = {
		              time:4000,
					  width:600,
					  height:400,
					  effect:'none',
					  blocksize: {height:'',width:'' },
					  duration:900,
					  controls:true,
					  customblocksize:{
						 
						  // image transitions global settings
						  cubeoutcenter:{ height:100,width:100 },
						  cubegrow:{ height:100,width:100 },
						  cubesidegrow:{ height:100,width:100 },
						  stripealternate:{ height:100,width:40 },
						  stripefade:{ height:100,width:40 },
						  stripehalfalternate:{ height:100,width:40 }
						  
						  
						  },
					  callback:function(){   } 
					  
					  
					};
	
	
	var options = $.extend(defaults, options);
	// Variables declaration and precaching
	
			
	// -------------------- Declaring variables ---------------------		
	var root = $(this);
	var li = root.find("li");
	var images = li.find("img");
	
    var pos,random_no,timer,image_timer,arr,index,block,w,h,src,parent,im,override=false,in_animation = false,controls;
	var current = li.eq(1).toggleClass('active'),prev = li.first().addClass("reset");
	var bool = true,first_bool = true;
	// -------------------- Initialization ---------------------		
	
	
	init();

	
	function init(){
	
	if(options.controls==true)
	{
		appendControls();
	}
	
	li.first().find("span").css("display","block");
	current.children().hide();
	
	
	root.wrap("<div class='JWslider' />");
	root.parent().css({"width":options.width,height:options.height});
	
	
	

	
	// -------------------- Slide switching module ---------------------		
	 function switcher()
	 {
		 if(current.prev().length>0)
		 prev = current.prev();
		 else
		 prev = li.last();
		 
		 
		
		
		 prev.removeClass("reset");
		
		 current.toggleClass("active reset");
		 
		 if(current.next().length>0)         // setting the next slide
		 current = current.next();
		 else
		 current = li.first(); 
		 
		
			current.children().hide();
			
		 current.addClass("active");
		
		 options.callback(current.children()[0]);
		 
		
			
	}
	
	
	  
	 // --------------------- Default Image animations !!!!! --------------------------
	 function cubeoutcenter(image)
	{
		in_animation = true;
		if(options.blocksize.width!=''){
		 w = Math.floor(options.blocksize.width);
		 h = Math.floor(options.blocksize.height);
		 }
		 else
		 {
		w = Math.floor(options.customblocksize.cubeoutcenter.width);
		 h = Math.floor(options.customblocksize.cubeoutcenter.height);	 
		 }
		 parent = image.parent();
		 arr = new Array(); i =0;  j =0; index = 0;
		 src = image.attr("src");
		 block = $("<div />",{
					css:{
						position:"absolute",
						width:0,
						height:0,
						marginTop:h/2,
						marginLeft: w/2,
						'background-image':'url('+src+')',
						zIndex:99,
						display:'none'
						}
							
							}).addClass('disblock');
		
		
		 while(i<options.width)
		 {
			
		    j=0;
			while(j<options.height)
			{
				
				arr[index] = block.clone().css({left:i ,top:j,backgroundPosition:-i+"px "+-j+"px" });
				parent.append(arr[index++]);
			j = j + h;
			}
			
			i = i + w;
		 }
		 
		i=0;
		
	    timer = setInterval(function(){
				
				if(i>=arr.length)
				{ 
				endeffect(image);
					return;
				}
									 
				arr[i++].animate({height:h,width:w,marginTop:0,marginLeft:0},{duration: options.duration, easing:'easeOutSine'});
				
				},80);
		
			
		
		
	};		

	 function cubegrow(image)
	{
		in_animation = true;
		if(options.blocksize.width!=''){
		 w = Math.floor(options.blocksize.width);
		 h = Math.floor(options.blocksize.height);
		 }
		 else
		 {
		w = Math.floor(options.customblocksize.cubegrow.width);
		 h = Math.floor(options.customblocksize.cubegrow.height);	 
		 }
		 parent = image.parent();
		 arr = new Array(); i =0;  j =0; index = 0;
		 src = image.attr("src");
		 block = $("<div />",{
					css:{
						position:"absolute",
						width:0,
						height:0,
						'background-image':'url('+src+')',
						zIndex:99,
						display:'none'
						}
							
							}).addClass('disblock');
		
		
		 while(i<options.width)
		 {
			
		    j=0;
			while(j<options.height)
			{
				
				arr[index] = block.clone().css({left:i ,top:j,backgroundPosition:-i+"px "+-j+"px" });
				parent.append(arr[index++]);
			j = j + h;
			}
			
			i = i + w;
		 }
		 
		i=0;
		
	    timer = setInterval(function(){
				
				if(i>=arr.length)
				{ endeffect(image);
					return;
				}
									 
				arr[i++].animate({height:h,width:w},{duration: options.duration, easing:'easeOutSine'});
				
				},80);
		
	  	
	};	
	
	function cubesidegrow(image)
	{
		
		if(options.blocksize.width!=''){
		 w = Math.floor(options.blocksize.width);
		 h = Math.floor(options.blocksize.height);
		 }
		 else
		 {
		w = Math.floor(options.customblocksize.cubesidegrow.width);
		 h = Math.floor(options.customblocksize.cubesidegrow.height);	 
		 }
		 parent = image.parent();
		 arr = new Array(); i =0;  j =0; index = 0;
		 src = image.attr("src");
		 block = $("<div />",{
					css:{
						position:"absolute",
						width:0,
						height:0,
						opacity:0,
						top:options.height,
						'background-image':'url('+src+')',
						zIndex:99
						
						}
							
							}).addClass('disblock');
		
		
		 while(i<options.width)
		 {
			
		    j=0;
			while(j<options.height)
			{
				
				arr[index] = block.clone().css({left:i ,top:j,backgroundPosition:-i+"px "+-j+"px" });
				parent.append(arr[index++]);
			j = j + h;
			}
			
			i = i + w;
		 }
		 
		i=0;
		random_no = random_array(arr.length);
	    timer = setInterval(function(){
				
				if(i>=arr.length)
				{
				endeffect(image);
					return;
				}
									 
				arr[random_no[i++]].animate({height:h,width:w,opacity:1},{duration: options.duration, easing:'easeOutCubic'});
				
				},80);
		
	};	
	 
	function stripealternate(image)
	{
		
		 im = image;
			if(options.blocksize.width!='')
		w = Math.floor(options.blocksize.width);
		else
		w = Math.floor(options.customblocksize.stripefade.width);
		
		h = options.height;
		 parent = image.parent();
		 arr = new Array(); i =0;  j =0; index = 0;
		 src = image.attr("src");
		 var css,flag=true;
		 block = $("<div />",{
					css:{
						position:"absolute",
						width:w,
						height:h,
						'background-image':'url('+src+')',
						zIndex:99,
						display:'block',
						marginTop:options.height,
						opacity:0
						}
							
							}).addClass('disblock');
		
		
		 while(i<options.width)
		 {
			
			if(flag==true)
		   	{
				css = {left:i ,backgroundPosition:-i+"px 0px" };
				flag = false;
			}
			else
			{
				css = {left:i ,backgroundPosition:-i+"px 0px",marginTop:-options.height };
				flag = true;
			}
			arr[index] = block.clone().css(css);
			parent.append(arr[index++]);
			
			i = i + w;
		 }
		 
		i=0;
		
	    timer = setInterval(function(){
				
				if(i>=arr.length)
				{
				endeffect(image);
					return;
				}
									 
				arr[i++].animate({marginTop:0,opacity:1},{duration:options.duration, easing:'easeOutSine'});
				
				},80);
		
		
	};	
	
	
	function stripefade(image)
	{
		in_animation = true;
		 
		 
		if(options.blocksize.width!='')
		w = Math.floor(options.blocksize.width);
		else
		w = Math.floor(options.customblocksize.stripefade.width);
		
		h = options.height;
		
		
		 parent = image.parent();
		 arr = new Array(); i =0;  j =0; index = 0;
		 src = image.attr("src");
		 block = $("<div />",{
					css:{
						position:"absolute",
						width:w,
						height:h,
						'background-image':'url('+src+')',
						zIndex:99,
						display:'block',
						opacity:0
						
						}
							
							}).addClass('disblock');
		
		
		 while(i<options.width)
		 {
			
		   	
			arr[index] = block.clone().css({left:i ,backgroundPosition:-i+"px 0px" });
			parent.append(arr[index++]);
			
			i = i + w;
		 }
		 
		i=0;
		
		setTimeout(function(){
							
	    timer = setInterval(function(){
		
				if(i>=arr.length)
				{
				 endeffect(image);
					return;
				}
									 
				arr[i++].animate({opacity:1},{duration: 700, easing:'easeOutSine'});
				
				},60);
		
							},500);
		
	};	
	
	function stripehalfalternate(image)
	{
		
		in_animation = true;
		
				if(options.blocksize.width!='')
		w = Math.floor(options.blocksize.width);
		else
		w = Math.floor(options.customblocksize.stripefade.width);
		
		h = options.height;
		 parent = image.parent();
		 arr = new Array(); i =0;  j =0; index = 0;
		 var css;
		 src = image.attr("src");
		 block = $("<div />",{
					css:{
						position:"absolute",
						width:w,
						height:h/2,
						'background-image':'url('+src+')',
						zIndex:99,
						display:'block',
						opacity:0
						
						}
							
							}).addClass('disblock');
		
		
		 while(i<options.width)
		 {
			j=0;
			while(j<h)
			{
				
			if(j==0)
			css ={left:i,top:j ,backgroundPosition:-i+"px "+(-j)+"px" ,marginTop: -(h/2)};
			else
			css ={left:i,top:j ,backgroundPosition:-i+"px "+(-j)+"px" ,marginTop: h};
			
			arr[index] = block.clone().css(css);
			parent.append(arr[index++]);
			j = j + h/2;
			}
			i = i + w;
		 }
		 
		i=0;
		
		setTimeout(function(){
							
	    timer = setInterval(function(){
				
				if(i>=arr.length)
				{
				endeffect(image);
					return;
				}
									 
				arr[i++].stop(true,true).animate({opacity:1,marginTop:0},{duration: options.duration, easing:'easeOutBack'});
				
				},60);
		
							},1000);
		
	};	
	
	function endeffect(image)
	{
		
		 current.find("span").fadeIn('slow');
					if(options.controls==true)
					 {
					 controls.removeClass("control_active");
					 controls.eq(current.index(".JWslider li")).addClass("control_active");
					 }
					clearInterval(timer);
					setTimeout(function(){
						image.show(); // show the real image
						$(".disblock").remove(); // remove the divs
						 // switch next slide
						in_animation = false;
						if(override==false) // Return if manually triggered
						image_timer = setTimeout(function() {   switcher(); image.next().fadeOut('slow'); effects();  },options.time); 
						},1000);
	};
	// -------------------- Effects selector module ---------------------		
	function effects()
	{
		 
		  var ch = Math.floor(Math.random()*6);
		  
		   if(!isNaN(options.effect))
		   ch = options.effect;
		  
		 if(bool==true)
		{
			li.first().find("span").hide();
			bool=false;
			 first_bool = false;
		}
			
	   
		
		
		 switch(ch)
		 {
		
		 case 0:cubesidegrow(current.find("img"));break;
		 case 1:cubeoutcenter(current.find("img"));break;
		 case 2:cubegrow(current.find("img"));break;
		 case 3:stripealternate(current.find("img"));break;
		 case 4:stripefade(current.find("img"));break;
		 case 5:stripehalfalternate(current.find("img"));break;
		 }
	}
	
	// -------------------- Method to set Specific image and controls ---------------------			
     
	 function appendControls()
	 {
		var str = "<ul class='controls'>";
		for(var i=0;i<li.length;i++)
		str = str + "<li>"+(i+1)+"</li>";
		str = str+"</ul>";
		
		 root.after(str);
		 
		 controls = root.parent().find(".controls li");
		controls.first().addClass("control_active");
		
		controls.bind({
		click:function(){ setImage($(this).index()); 	},
		mouseover:function(){ $(this).toggleClass("control_hover"); },
		mouseout:function(){ $(this).toggleClass("control_hover"); }
		  });
		 
		
	 }
	 
     function setImage(index)
	{
		
	    if(in_animation==true||current.index(".JWslider ul li")==index)
		return;
		
		
		
		li.removeClass("reset active");
		
		current.find("span").hide();	
		
		clearTimeout(image_timer); // Manual Override...
		
		if(first_bool==true)
		{
			
			li.first().addClass("reset");
		}
		
		current.addClass("reset");
		
		current = li.eq(index).addClass("active");
		
		current.children().hide();
		current.find("span").fadeIn(700);	
		
		override = true;
		
		effects();
	
	}
	
	
	
		
	 image_timer = setTimeout(function() {   effects();  },options.time);  // Starting the Slideshow
	
	}
	
	
	
} 


function random_array(maxn)
 {
	
    var array = new Array();
	var temp,i,flag=true;
	var index =0;
	 while(index<maxn)
	 {
		 flag = true;
		 temp = Math.floor(Math.random() * maxn);
		 for(i=0;i<array.length;i++)
		 {
			 if(temp==array[i])
			 {
				flag=false;
				break;
			 }
		 }
		 
		 if(flag==true)
		 array[index++] = temp;
	 }
	 
	 return array;
 };

		  })(jQuery);



