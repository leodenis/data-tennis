$(document).ready( function(){
	var scrollNav = 44;
	var i = 0;
	$('#container>nav>div:last-child>div').css({'height':(($('#container>nav').height() * 100 )/ (50*20))})
    $('#container>nav').bind('mousewheel', function(event) {
    	var delta = event.originalEvent.wheelDelta;
    	// console.log(scrollNav)
        if(delta < 0){
        	if (scrollNav > (-1000 + $('#container>nav').height())) {
	       		scrollNav -= 50
	       		i += 1;
	   	   		$('#container>nav>ul').animate({'margin-top':scrollNav},100);
	   	   		$('#container>nav>div:last-child>div').animate({'margin-top':(($('#container>nav>div:last-child>div').height() * i ) + 44 )},100);
        	}else{
	   	   		$('#container>nav>div:last-child>div').animate({'margin-top':($('#container>nav>div:last-child') - $('#container>nav>div:last-child>div').height() + 44)},100);
	   	   		$('#container>nav>ul').animate({'margin-top':-(50*20-$('#container>nav').height() + 40)},100);
        	}
        	console.log(-(50*20-$('#container>nav').height() + 40))
        	console.log('down')
        }else if(delta > 0){
        	if (scrollNav < 44) {
				scrollNav += 50
	       		i -= 1;
	   	   		$('#container>nav>div:last-child>div').animate({'margin-top':(($('#container>nav>div:last-child>div').height() *i ) + 44 )},100);
	       		$('#container>nav>ul').animate({'margin-top':scrollNav},100);
        	}else{
	   	   		$('#container>nav>div:last-child>div').animate({'margin-top':0},100);
	   	   		$('#container>nav>ul').animate({'margin-top':44},100);
        	}
        	console.log('up')
        }
        return false;
    });
});