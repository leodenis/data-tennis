$(document).ready( function(){
	var scrollNav = 0;
	var i = 0;
	$('#container>nav>div:last-child>div').css({'height':(($('#container>nav').height() * 100 )/ $('#container>nav>ul').height())});
    // var scrollBar = Math.round($('#container>nav>div:last-child').height() /  $('#container>nav>div:last-child>div').height());
    var scrollBar = $('#container>nav>div:last-child>div').height() / (Math.round($('#container>nav>ul').height() / $('#container>nav>ul>li').height()) - Math.round($('#container>nav').height() / $('#container>nav>ul>li').height()));
    console.log(scrollBar)
    $('#container>nav').bind('mousewheel', function(event) {
    	var delta = event.originalEvent.wheelDelta;
        if(delta < 0 ){
        	if (scrollNav > -($('#container>nav>ul').height() - $('#container>nav').height())) {
	       		scrollNav -= 50
	       		i += 1;
	   	   		$('#container>nav>ul').animate({'margin-top':scrollNav},100);
	   	   		$('#container>nav>div:last-child>div').animate({'margin-top':(($('#container>nav>div:last-child>div').height() + (i*scrollBar) ))},100);
        	}else{
	   	   		// $('#container>nav>div:last-child>div').animate({'margin-top':($('#container>nav>div:last-child') - $('#container>nav>div:last-child>div').height())},100);
	   	   		// $('#container>nav>ul').animate({'margin-top':-($('#container>nav>ul').height()-$('#container>nav').height())},100);
        	}
        }else if(delta > 0 ){
        	if (scrollNav < 0) {
				scrollNav += 50
	       		i -= 1;
	   	   		$('#container>nav>div:last-child>div').animate({'margin-top':(($('#container>nav>div:last-child>div').height() *i ))},100);
	       		$('#container>nav>ul').animate({'margin-top':scrollNav},100);
        	}else{
	   	   		$('#container>nav>div:last-child>div').animate({'margin-top':0},100);
	   	   		$('#container>nav>ul').animate({'margin-top':0},100);
        	}
        }
        console.log(i)
        return false;
    });
});