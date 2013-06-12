$(document).ready( function(){
    var json ;
    $.ajax({
        url: 'javascript/data.json',
        async: false,
        dataType: 'json',
        success: function (response) {
            console.log(response)
        },
        error: function(res){
            console.log(res)
            console.log(JSON.parse(res.responseText))
            // json = res.responseText;
        }
    });

    // console.log(json)

    function scrollbar(scrollbarContainer, elScrollable){  
        $(scrollbarContainer).css({'min-width':' 10px','position':'relative','float':'right','width': '10px','height':'100%','background-color':'none','background-color':' "#151515'});
        $(scrollbarContainer + '>div').css({'width':'10px','height': '100px','background-color':'#1e1e21'})
        var scrollNav = 0;
        var i = 0;
        $(scrollbarContainer + '>div').css({'height':(($(elScrollable).parent().height() * 100 )/ $(elScrollable).height())});
        var scrollBar = Math.ceil($(elScrollable).height() / $(elScrollable).children().height() - $(elScrollable).parent().height() / $('#container>nav>ul>li').height());
        scrollBar = ($(scrollbarContainer).height() / scrollBar) - ($(scrollbarContainer+'>div').height() / scrollBar);
        $(elScrollable).bind('mousewheel', function(event) {
            var delta = event.originalEvent.wheelDelta;
            if(delta < 0 ){
                if (scrollNav > -($(elScrollable).height() - $(elScrollable).parent().height() )) {
                    scrollNav -= 52
                    i += 1;
                    $(elScrollable).animate({'margin-top':scrollNav},100);
                    $(scrollbarContainer + '>div').animate({'top':(scrollBar * i)},100);
                }else{
                    $(elScrollable).animate({'margin-top':(-$(elScrollable).height() + $(scrollbarContainer).height())},100);
                    $(scrollbarContainer + '>div').animate({'top':($(scrollbarContainer).height() - $(scrollbarContainer + '>div').height())},100);
                }
            }else if(delta > 0 ){
                if (scrollNav < 0) {
                    scrollNav += 52
                    i -= 1;
                    $(elScrollable).animate({'margin-top':scrollNav},100);
                    $(scrollbarContainer + '>div').animate({'top':(scrollBar * i)},100);
                }else{
                    $(elScrollable).animate({'margin-top':0},100);
                    $(scrollbarContainer + '>div').animate({'top':0},100);
                }
            }
            return false;
        });
        $(scrollbarContainer + '>div').draggable({
            cursor:'move',
            containment:$(scrollbarContainer),
            start:function(e,ui){
                var top = ui.position.top;
            },
            drag: function(e,ui){
                var top = ui.position.top;
                var dragg = ($(elScrollable).height() - $(scrollbarContainer).height()) * top / $(scrollbarContainer).height();
                console.log(dragg)
                $(elScrollable).css({'margin-top':-dragg})
            }
        })
    }

    function statsBar(statsContainer){
        $(statsContainer).append('<canvas> </canvas>')
        var canvas = document.querySelector(statsContainer + '>canvas');
        canvas.width = $(statsContainer).width();
        canvas.height = $(statsContainer).parent().height();
        var ctx = canvas.getContext('2d');

        ctx.fillStyle="#fff";
        ctx.fillRect((($(statsContainer).width()/3*2) - $(statsContainer).data('gagner') - 1),5,1,25);
        ctx.font="normal 15px 'proximanova'";
        ctx.fillStyle = "#fff";
        ctx.fillText($(statsContainer).data('gagner'),(($(statsContainer).width()/3*2) - $(statsContainer).data('gagner')),45);
        textWrite = true;

        ctx.fillStyle="#339cb4";
        ctx.fillRect(($(statsContainer).width()/3*2) - $(statsContainer).data('gagner'),5,$(statsContainer).data('gagner') ,20);

        ctx.fillStyle="#fff";
        ctx.fillRect(($(statsContainer).width()/3*2),0,1,30);

        ctx.fillStyle="#c2542e";
        ctx.fillRect(($(statsContainer).width()/3*2+1),5,$(statsContainer).data('perdu'),20);

        ctx.fillStyle="#fff";
        ctx.fillRect((($(statsContainer).width()/3*2+1)+($(statsContainer).data('perdu'))),5,1,25);
        ctx.font="normal 15px 'proximanova'";
        ctx.fillStyle = "#fff";
        ctx.fillText($(statsContainer).data('perdu'),($(statsContainer).width()/3*2+1+($(statsContainer).data('perdu'))),45);
        textWrite = true;
    }

    function statsRound(statsRounded){
        $(statsRounded).append('<canvas> </canvas>');
        var canvas = document.querySelector(statsRounded + '>canvas');
        canvas.width = $(statsRounded).width()-$(statsRounded).siblings('img').width();
        canvas.height = $(statsRounded).width()-$(statsRounded).siblings('img').width();
        var ctx = canvas.getContext('2d');
        ctx.beginPath();
        ctx.arc(canvas.width/2, canvas.width/2, canvas.width/3, 0, Math.PI*2, true); 
        ctx.strokeStyle="#0c0c0d";
        ctx.lineWidth = 25;
        ctx.stroke();
        ctx.closePath();
        ctx.font="bold 35px 'proximanova'";
        ctx.fillStyle = "#fff";
        ctx.fillText($(statsRounded).data('pourcent') + '%',canvas.width/3,canvas.height/7*4);
        textWrite = true;
        ctx.beginPath();
        ctx.arc(canvas.width/2, canvas.width/2, canvas.width/3, 1.5 * (Math.PI*2), 1.5 * (Math.PI*2) - ((Math.PI*2)*$(statsRounded).data('pourcent')/100), true); 
        ctx.strokeStyle="#339cb4";
        ctx.lineWidth = 25;
        ctx.stroke();
        ctx.closePath();
    }

    function navBar(){
        var nav = $('#container>nav>ul');
        for (k in json) {
            // nav.append('<li><img src="img/player/thumbnails/'+ json[k].nom.toLowerCase() +'.jpg"><p>'+ json[k].nom.toUpperCase() +' '+ json[k].prenom +'</p><p>rank : '+ k +'</p></li>')
        }
    }

    navBar();

    statsBar('.statsBar.tous');
    statsBar('.statsBar.grdchelem');
    statsBar('.statsBar.masters1000');
    statsBar('.statsBar.tieBreaks');
    statsBar('.statsBar.vsTop10');
    statsBar('.statsBar.dernierSet');
    statsBar('.statsBar.afterWin1Set');
    statsBar('.statsBar.afterLost1Set');
    statsBar('.statsBar.vsDroitier');
    statsRound('.statsRounded.dur');
    statsRound('.statsRounded.clay');
    statsRound('.statsRounded.grass');

    scrollbar('#container>nav>div.scrollbar','#container>nav>ul');
    scrollbar('#resume2013>div.scrollbar','#resume2013>div:first-child,#resume2013>div:nth-child(2)');
});