$(document).ready( function(){
    var json ;
    $.ajax({
        url: 'javascript/data.json',
        async: false,
        dataType: 'text',
        success: function (response) {
            json = eval ("(" + response + ")");
        },
        error: function(res){
            console.log('Error on data req occure');
        }
    });
    var url = window.location.toString().replace(/#\/([a-z]+)/,"");

    function scrollbar(scrollbarContainer, elScrollable){  
        $(scrollbarContainer).css({'min-width':' 10px','position':'relative','float':'right','width': '10px','height':'100%','background-color':'none','background-color':' "#151515'});
        $(scrollbarContainer + '>div').css({'width':'10px','height': '100px','background-color':'#1e1e21'});
        var scrollNav = 0;
        var i = 0;
        $(scrollbarContainer + '>div').css({'height':(($(elScrollable).parent().height() * 100 )/ $(elScrollable).height()) /100 * $(elScrollable).parent().height()});
        var scrollBar = Math.ceil($(elScrollable).height() / $(elScrollable).children().height() - $(elScrollable).parent().height() / 52);
        scrollBar = ((($(elScrollable).parent().height() * 100 )/ $(elScrollable).height()) /100 * $(elScrollable).parent().height() / scrollBar);
        $(elScrollable).bind('mousewheel', function(event) {
            var delta = event.originalEvent.wheelDelta;
            if(delta < 0 ){
                if (scrollNav > -($(elScrollable).height() - $(elScrollable).parent().height() )) {
                    scrollNav -= 52
                    i += 1;
                    $(elScrollable).css({'margin-top':scrollNav},100);
                    $(scrollbarContainer + '>div').css({'top':(scrollBar * i)},100);
                }else{
                }
            }else if(delta > 0 ){
                if (scrollNav < 0) {
                    scrollNav += 52
                    i -= 1;
                    $(elScrollable).css({'margin-top':scrollNav},100);
                    $(scrollbarContainer + '>div').css({'top':(scrollBar * i)},100);
                }else{
                    $(elScrollable).css({'margin-top':0},100);
                    $(scrollbarContainer + '>div').css({'top':0},100);
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
    function statsRound(statsRounded,taille){
        $(statsRounded).append('<canvas> </canvas>');
        var canvas = document.querySelector(statsRounded + '>canvas');
        if(taille == true){
            canvas.width = Math.abs($(statsRounded).height()-12-$(statsRounded).siblings('h3').width());
            canvas.height = Math.abs($(statsRounded).height()-12-$(statsRounded).siblings('h3').width());
        }else{
            canvas.width = Math.abs($(statsRounded).width()-12-$(statsRounded).siblings('img').width());
            canvas.height = Math.abs($(statsRounded).width()-12-$(statsRounded).siblings('img').width());
        }
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
    var marge = {};
    function selectBar(selector){
        marge[selector] = 0;
        $(selector + '>div.leftSelect').click(function(){
            marge[selector] -= 70;
            $(this).siblings('ul').animate({'margin-left':marge[selector]});
            $(selector + '>ul>li.focus').removeClass('focus').next().addClass('focus')
        });
        $(selector + '>div.rightSelect').click(function(){
            marge[selector] += 70;
            $(this).siblings('ul').animate({'margin-left':marge[selector]});
            $(selector + '>ul>li.focus').removeClass('focus').prev().addClass('focus')
        });
        return marge;
    }
    function Maptitres(selector){
        $(selector).css({'height':'-webkit-calc(100% - 80px )','width':'-webkit-calc(100% / 12 * 8 )','margin':'auto'});
        var latlng = new google.maps.LatLng(40, 10);
        var settings = {
            zoom: 1,
            center: latlng,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            draggable: false,
            scrollwheel:false,
            disableDefaultUI: true,
            styles:
              [
                  {
                    "featureType": "water",
                    "stylers": [
                        {'color':'#171719'}
                    ]
                  },{
                    "featureType": "landscape",
                    "stylers": [
                      { "hue": "#08ff00" },
                      { "saturation": -100 },
                      { "lightness": -68 }
                    ]
                  },{
                    "featureType": "poi",
                    "stylers": [
                      { "visibility": "off" }
                    ]
                  },{
                    "featureType": "administrative",
                    "stylers": [
                      { "visibility": "off" }
                    ]
                  },{
                    "featureType": "road",
                    "stylers": [
                      { "visibility": "off" }
                    ]
                  },{
                    "featureType": "transit",
                    "stylers": [
                      { "visibility": "off" }
                    ]
                }
            ]
        };

            
        return new google.maps.Map($(selector)[0], settings);
    }
    function navBar(){
        var nav = $('#container>nav>ul');
        for (k in json) {
            nav.append('<li class="' + json[k].nom.toLowerCase() + '"><img src="img/player/thumbnails/'+ json[k].nom.toLowerCase() +'.jpg"><p>'+ json[k].nom.toUpperCase() +' '+ json[k].prenom +'</p><p>rank : '+ k +'</p></li>');
            that = $('#container>nav>ul>li.' + json[k].nom.toLowerCase());
            that.click(function(){
                $('#container>nav>ul>li').attr('click','off');
                $(this).attr('click','on');
                window.location = url + '#/' + $(this)[0].className;
            })
        }
        $('article>nav>ul>li').click(function(){
            var claSS = $(this)[0].className;
            // console.log($(this));
            $('article>nav>ul>li').removeClass('active');
            $('section').css({'display':'none'});
            $('#' + claSS).css({'display':'block'});
            $(this).addClass('active');
            if(claSS == 'resume2013'){
                statsBar('#resume2013 .statsBar.tous');
                statsBar('#resume2013 .statsBar.grdchelem');
                statsBar('#resume2013 .statsBar.masters1000');
                statsBar('#resume2013 .statsBar.tieBreaks');
                statsBar('#resume2013 .statsBar.vsTop10');
                statsBar('#resume2013 .statsBar.dernierSet');
                statsBar('#resume2013 .statsBar.afterWin1Set');
                statsBar('#resume2013 .statsBar.afterLost1Set');
                statsBar('#resume2013 .statsBar.vsDroitier');
                statsRound('#resume2013 .statsRounded.dur');
                statsRound('#resume2013 .statsRounded.clay');
                statsRound('#resume2013 .statsRounded.grass'); 
                scrollbar('#resume2013>div.scrollbar','#resume2013>div:first-child, #resume2013>div:nth-child(2)');
            }else if(claSS == 'resumeCarriere'){
                statsBar('#resumeCarriere .statsBar.tous');
                statsBar('#resumeCarriere .statsBar.grdchelem');
                statsBar('#resumeCarriere .statsBar.masters1000');
                statsBar('#resumeCarriere .statsBar.tieBreaks');
                statsBar('#resumeCarriere .statsBar.vsTop10');
                statsBar('#resumeCarriere .statsBar.dernierSet');
                statsBar('#resumeCarriere .statsBar.afterWin1Set');
                statsBar('#resumeCarriere .statsBar.afterLost1Set');
                statsBar('#resumeCarriere .statsBar.vsDroitier');
                statsRound('#resumeCarriere .statsRounded.dur');
                statsRound('#resumeCarriere .statsRounded.clay');
                statsRound('#resumeCarriere .statsRounded.grass'); 
                scrollbar('#resumeCarriere>div.scrollbar','#resumeCarriere>div:first-child');
            }else if(claSS == 'titres'){
                selectBar('#titres>div>div>nav:first-child');
                Maptitres('#titres>div>div>div#mapTitre');
                statsRound('#titres .statsRounded.dur');
                statsRound('#titres .statsRounded.clay');
                statsRound('#titres .statsRounded.grass');
                scrollbar('#titres>div.scrollbar','#titres>div:nth-child(2)');
            }else if(claSS == "finales"){
                Maptitres('#finales>div>div>div#mapTitre');
                statsRound('#finales .statsRounded.dur');
                statsRound('#finales .statsRounded.clay');
                statsRound('#finales .statsRounded.grass');
            }else if(claSS == "statistique"){
                selectBar('#statistique>div>nav:first-child');
                selectBar('#statistique>div>nav:nth-child(2)');
                selectBar('#statistique>div>nav:nth-child(3)');
                statsRound('#statistique .statsRounded.pgsr1s',true);
                statsRound('#statistique .statsRounded.pgsr2s',true);
                statsRound('#statistique .statsRounded.obdb',true);
                statsRound('#statistique .statsRounded.prg',true);
                statsRound('#statistique .statsRounded.tpgr',true); 
                scrollbar('#statistique>div.scrollbar','#statistique>div:nth-child(2)');
            }
        })
        statsBar('#resume2013 .statsBar.tous');
        statsBar('#resume2013 .statsBar.grdchelem');
        statsBar('#resume2013 .statsBar.masters1000');
        statsBar('#resume2013 .statsBar.tieBreaks');
        statsBar('#resume2013 .statsBar.vsTop10');
        statsBar('#resume2013 .statsBar.dernierSet');
        statsBar('#resume2013 .statsBar.afterWin1Set');
        statsBar('#resume2013 .statsBar.afterLost1Set');
        statsBar('#resume2013 .statsBar.vsDroitier');
        statsRound('#resume2013 .statsRounded.dur');
        statsRound('#resume2013 .statsRounded.clay');
        statsRound('#resume2013 .statsRounded.grass'); 
        scrollbar('#resume2013>div.scrollbar','#resume2013>div:first-child, #resume2013>div:nth-child(2)');
    }








    scrollbar('#container>nav>div.scrollbar','#container>nav>ul');

    navBar();
});