$(document).ready( function(){
    var json = {};
    var option = {};
    var data = {};
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
                $(elScrollable).css({'margin-top':-dragg})
            }
        })
    }
    function statsBar(statsContainer,quotient){
        $(statsContainer + '>canvas').remove();
        $(statsContainer).append('<canvas> </canvas>');
        var canvas = document.querySelector(statsContainer + '>canvas');
        canvas.width = $(statsContainer).width();
        canvas.height = $(statsContainer).parent().height();
        canvas.width = canvas.width;
        var ctx = canvas.getContext('2d');

        ctx.clearRect(0,0,canvas.width,canvas.height);
        
        ctx.beginPath();
        ctx.fillStyle="#fff";
        ctx.fillRect((($(statsContainer).width()/3*2) - ($(statsContainer).data('gagner')*quotient) - 1),5,1,25);
        ctx.font="normal 15px 'proximanova'";
        ctx.fillStyle = "#fff";
        ctx.fillText($(statsContainer).data('gagner'),(($(statsContainer).width()/3*2) - $(statsContainer).data('gagner')*quotient),45);
        textWrite = true;

        ctx.fillStyle="#339cb4";
        ctx.fillRect(($(statsContainer).width()/3*2) - ($(statsContainer).data('gagner')*quotient),5,($(statsContainer).data('gagner')*quotient) ,20);

        ctx.fillStyle="#fff";
        ctx.fillRect(($(statsContainer).width()/3*2),0,1,30);

        ctx.fillStyle="#c2542e";
        ctx.fillRect(($(statsContainer).width()/3*2+1),5,($(statsContainer).data('perdu')*quotient),20);

        ctx.fillStyle="#fff";
        ctx.fillRect((($(statsContainer).width()/3*2+1)+($(statsContainer).data('perdu')*quotient)),5,1,25);
        ctx.font="normal 15px 'proximanova'";
        ctx.fillStyle = "#fff";
        ctx.fillText($(statsContainer).data('perdu'),($(statsContainer).width()/3*2+1+($(statsContainer).data('perdu')*quotient)),45);
        textWrite = true;
        ctx.stroke();
    }
    function statsRound(statsRounded,taille){
        $(statsRounded + '>canvas').remove();
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
        // myFunction();
        // test=0;
        // setTimes = null;
        // function myFunction()
        // {
        //     var interval = setInterval(test,25);
        // }
        // function test(){
        //    if (test >= 25) {
        //         clearTimeout(interval);
        //     }
        //     test++;
        //     console.log(test);

        // }      

        
        ctx.arc(canvas.width/2, canvas.width/2, canvas.width/3, 1.5 * (Math.PI*2), 1.5 * (Math.PI*2) - ((Math.PI*2)*$(statsRounded).data('pourcent')/100), true); 
        ctx.strokeStyle="#339cb4";
        ctx.lineWidth = 25;
        ctx.stroke();
        ctx.closePath();
    }
    function statsNumber(statsNumbered,taille){
        var h1 = $(statsNumbered + '>h1');
        $(h1).css({'width':Math.abs($(statsNumbered).width()-12-$(statsNumbered).siblings('img').width()),'height':Math.abs($(statsNumbered).width()-12-$(statsNumbered).siblings('img').width())});
        if(taille == true){
            $(h1).css({'margin-left':$(statsNumbered).siblings('img').width()});
        }
    }
    var marge = {};
    function selectBar(selector,taille){
        marge[selector] = 0;
        $(selector + '>div.rightSelect').click(function(){
            if(marge[selector] < 0){
                marge[selector] += 70;
                $(this).siblings('ul').animate({'margin-left':marge[selector]});
                $(selector + '>ul>li.focus').removeClass('focus').prev().addClass('focus');
                changeData($('article>nav>ul>li.active')[0].classList[0]);
            }
        });
        $(selector + '>div.leftSelect').click(function(){
            if(marge[selector] > -(taille * 70)){
                marge[selector] -= 70;
                $(this).siblings('ul').animate({'margin-left':marge[selector]});
                $(selector + '>ul>li.focus').removeClass('focus').next().addClass('focus');
                changeData($('article>nav>ul>li.active')[0].classList[0]);  
            }
        });
        return marge;
    }
    var map = {};
    function Maptitres(selector, data){
        console.log(data)
        $(selector).css({'height':'-webkit-calc(100% - 80px )','width':'-webkit-calc(100% / 12 * 8 )','margin':'auto'});
        var latlng = new google.maps.LatLng(40, 10);
        var geocoder = new google.maps.Geocoder();
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
        map[selector] = new google.maps.Map($(selector)[0], settings);
        map[selector].marker = {};
        for(f in data){
            geocoder.geocode( { 'address': data[f]}, function(results, status) {
              if (status == google.maps.GeocoderStatus.OK) {
                map[selector].marker = new google.maps.Marker({
                    map: map[selector],
                    position: results[0].geometry.location,
                    icon: './img/marker.png'
                });
              } else {
                // alert("Geocode was not successful for the following reason: " + status);
              }
            });
        }
    }
    function MarkerMap(map, data){
    }
    function navBar(){
        var nav = $('#container>nav>ul');
        for (k in json) {
            nav.append('<li class="' + json[k].nom.toLowerCase().replace(' ','') + '"><img src="img/player/thumbnails/'+ json[k].nom.toLowerCase() +'.jpg"><p>'+ json[k].nom.toUpperCase() +' '+ json[k].prenom +'</p><p>rank : '+ k +'</p></li>');
            that = $('#container>nav>ul>li.' + json[k].nom.toLowerCase().replace(' ',''));
            that.click(function(){
                $('#container>nav>ul>li').attr('click','off');
                $(this).attr('click','on');
                window.location = url + '#/' + $(this)[0].className;
                changeData($('article>nav>ul>li.active')[0].classList[0]);
            })
        }
        $('article>nav>ul>li').click(function(){
            var claSS = $(this)[0].className;
            if($('article>nav>ul>li.active').hasClass(claSS)){

            }else{
                $('article>nav>ul>li').removeClass('active');
                $('section').css({'display':'none'});
                $('#' + claSS).css({'display':'block'});
                $(this).addClass('active');
                changeData(claSS);
            }
        })
    }

    countNumber();
    function countNumber()
        {
            centi++;
            console.log(centi);
            setTime = setInterval(numb,25);
        }
    function numb(){
            centi++;
            console.log(centi);
            document.getElementById("break").innerHTML = centi;
            if (centi >= breakPoint) {
                clearInterval(setTime);
            };
            document.getElementById("aces").innerHTML = centi;
            if (centi >= aces) {
                clearInterval(setTime);
            };
            document.getElementById("returnGame").innerHTML = centi;
            if (centi >= returnGame) {
                clearInterval(setTime);
            };
            document.getElementById("returnGame2").innerHTML = centi;
            if (centi >= returnGame2) {
                clearInterval(setTime);
            };
    }
    function changeData(onglet){
        var urlHere = window.location.toString().match(/#\/([a-z]+)/);
        urlHere = urlHere[1];
        for(l in json){
            if(json[l].nom.toLowerCase().replace(' ','') == urlHere){
                data = json[l];
                if ($('article>nav>ul>li.active')[0].classList[0] == "titres") {
                    option.titres = $('#titres nav>ul>li.focus')[0].textContent.toLowerCase();
                }if ($('article>nav>ul>li.active')[0].classList[0] == "statistique") {
                    option.statistique = {};
                    option.statistique[0] = $('#statistique nav:first-child>ul>li.focus')[0].textContent.toLowerCase();
                    option.statistique[1] = $('#statistique nav:nth-child(2)>ul>li.focus')[0].textContent.toLowerCase();
                    option.statistique[2] = $('#statistique nav:last-child>ul>li.focus')[0].textContent.toLowerCase();
                }if ($('article>nav>ul>li.active')[0].classList[0] == "finales") {
                    option.finales = $('#finales nav>ul>li.focus')[0].textContent.toLowerCase();
                }
                parseData(onglet,data,option);
            }
        }
    }

    function parseData(onglet,data){
        $('#container>article>header>img').attr('src','img/player/thumbnails/big/'+ data.nom.toUpperCase().replace(' ','') + '.png')
        $('#container>article>header>div>h1').html( data.nom + ' ' + data.prenom);
        if(onglet == 'resume2013'){
            $('#resume2013 div.statsBarContainer>div.statsBar.tous').data('gagner',data.nbMatchGagner[2013].tous.gagner);
            $('#resume2013 div.statsBarContainer>div.statsBar.tous').data('perdu',data.nbMatchGagner[2013].tous.perdu);
            $('#resume2013 div.statsBarContainer>div.statsBar.grdchelem').data('gagner',data.nbMatchGagner[2013].gdChelem.gagner);
            $('#resume2013 div.statsBarContainer>div.statsBar.grdchelem').data('perdu',data.nbMatchGagner[2013].gdChelem.perdu);
            $('#resume2013 div.statsBarContainer>div.statsBar.masters1000').data('gagner',data.nbMatchGagner[2013].master.gagner);
            $('#resume2013 div.statsBarContainer>div.statsBar.masters1000').data('perdu',data.nbMatchGagner[2013].master.perdu);

            $('#resume2013 div.statsBarContainer>div.statsBar.tieBreaks').data('gagner',data.pointSpecifique[2013].tiebreaks.gagner);
            $('#resume2013 div.statsBarContainer>div.statsBar.tieBreaks').data('perdu',data.pointSpecifique[2013].tiebreaks.perdu);
            $('#resume2013 div.statsBarContainer>div.statsBar.vsTop10').data('gagner',data.pointSpecifique[2013].contreTop10.gagner);
            $('#resume2013 div.statsBarContainer>div.statsBar.vsTop10').data('perdu',data.pointSpecifique[2013].contreTop10.perdu);
            $('#resume2013 div.statsBarContainer>div.statsBar.dernierSet').data('gagner',data.pointSpecifique[2013].gagneDernierSet.gagner);
            $('#resume2013 div.statsBarContainer>div.statsBar.dernierSet').data('perdu',data.pointSpecifique[2013].gagneDernierSet.perdu);
            $('#resume2013 div.statsBarContainer>div.statsBar.afterWin1Set').data('gagner',data.pointSpecifique[2013].apresGagner1Set.gagner);
            $('#resume2013 div.statsBarContainer>div.statsBar.afterWin1Set').data('perdu',data.pointSpecifique[2013].apresGagner1Set.perdu);
            $('#resume2013 div.statsBarContainer>div.statsBar.afterLost1Set').data('gagner',data.pointSpecifique[2013].apresPerdu1Set.gagner);
            $('#resume2013 div.statsBarContainer>div.statsBar.afterLost1Set').data('perdu',data.pointSpecifique[2013].apresPerdu1Set.perdu);
            $('#resume2013 div.statsBarContainer>div.statsBar.vsDroitier').data('gagner',data.pointSpecifique[2013].contreDroitier.gagner);
            $('#resume2013 div.statsBarContainer>div.statsBar.vsDroitier').data('perdu',data.pointSpecifique[2013].contreDroitier.perdu);
            $('#resume2013 div.statsBarContainer>div.statsBar.vsGaucher').data('gagner',data.pointSpecifique[2013].contreGaucher.gagner);
            $('#resume2013 div.statsBarContainer>div.statsBar.vsGaucher').data('perdu',data.pointSpecifique[2013].contreGaucher.perdu);

            var gazon = Math.ceil(data.environnement[2013].gazon.gagner / (data.environnement[2013].gazon.gagner + data.environnement[2013].gazon.perdu) * 100) > 0 ? Math.ceil(data.environnement[2013].gazon.gagner / (data.environnement[2013].gazon.gagner + data.environnement[2013].gazon.perdu) * 100) : 0;
            var clay = Math.ceil(data.environnement[2013].terreBattue.gagner / (data.environnement[2013].terreBattue.gagner + data.environnement[2013].terreBattue.perdu) * 100) > 0 ? Math.ceil(data.environnement[2013].terreBattue.gagner / (data.environnement[2013].terreBattue.gagner + data.environnement[2013].terreBattue.perdu) * 100) : 0;
            var dur = Math.ceil(data.environnement[2013].dur.gagner / (data.environnement[2013].dur.gagner + data.environnement[2013].dur.perdu) * 100 ) > 0 ? Math.ceil(data.environnement[2013].dur.gagner / (data.environnement[2013].dur.gagner + data.environnement[2013].dur.perdu) * 100 ) : 0;
            $('#resume2013 div.surface>div.statsRounded.dur').data('pourcent',dur);
            $('#resume2013 div.surface>div.statsRounded.clay').data('pourcent',clay);
            $('#resume2013 div.surface>div.statsRounded.grass').data('pourcent',gazon);

            statsBar('#resume2013 .statsBar.tous',5);
            statsBar('#resume2013 .statsBar.grdchelem',5);
            statsBar('#resume2013 .statsBar.masters1000',5);
            statsBar('#resume2013 .statsBar.tieBreaks',5);
            statsBar('#resume2013 .statsBar.vsTop10',5);
            statsBar('#resume2013 .statsBar.dernierSet',5);
            statsBar('#resume2013 .statsBar.afterWin1Set',5);
            statsBar('#resume2013 .statsBar.afterLost1Set',5);
            statsBar('#resume2013 .statsBar.vsDroitier',5);
            statsRound('#resume2013 .statsRounded.dur');
            statsRound('#resume2013 .statsRounded.clay');
            statsRound('#resume2013 .statsRounded.grass'); 
            scrollbar('#resume2013>div.scrollbar','#resume2013>div:first-child, #resume2013>div:nth-child(2)');
        }else if(onglet == 'resumeCarriere'){
            $('#resumeCarriere div.statsBarContainer>div.statsBar.tous').data('gagner',data.nbMatchGagner.carriere.tous.gagner);
            $('#resumeCarriere div.statsBarContainer>div.statsBar.tous').data('perdu',data.nbMatchGagner.carriere.tous.perdu);
            $('#resumeCarriere div.statsBarContainer>div.statsBar.grdchelem').data('gagner',data.nbMatchGagner.carriere.gdChelem.gagner);
            $('#resumeCarriere div.statsBarContainer>div.statsBar.grdchelem').data('perdu',data.nbMatchGagner.carriere.gdChelem.perdu);
            $('#resumeCarriere div.statsBarContainer>div.statsBar.masters1000').data('gagner',data.nbMatchGagner.carriere.master.gagner);
            $('#resumeCarriere div.statsBarContainer>div.statsBar.masters1000').data('perdu',data.nbMatchGagner.carriere.master.perdu);

            $('#resumeCarriere div.statsBarContainer>div.statsBar.tieBreaks').data('gagner',data.pointSpecifique.carriere.tiebreaks.gagner);
            $('#resumeCarriere div.statsBarContainer>div.statsBar.tieBreaks').data('perdu',data.pointSpecifique.carriere.tiebreaks.perdu);
            $('#resumeCarriere div.statsBarContainer>div.statsBar.vsTop10').data('gagner',data.pointSpecifique.carriere.contreTop10.gagner);
            $('#resumeCarriere div.statsBarContainer>div.statsBar.vsTop10').data('perdu',data.pointSpecifique.carriere.contreTop10.perdu);
            $('#resumeCarriere div.statsBarContainer>div.statsBar.dernierSet').data('gagner',data.pointSpecifique.carriere.gagneDernierSet.gagner);
            $('#resumeCarriere div.statsBarContainer>div.statsBar.dernierSet').data('perdu',data.pointSpecifique.carriere.gagneDernierSet.perdu);
            $('#resumeCarriere div.statsBarContainer>div.statsBar.afterWin1Set').data('gagner',data.pointSpecifique.carriere.apresGagner1Set.gagner);
            $('#resumeCarriere div.statsBarContainer>div.statsBar.afterWin1Set').data('perdu',data.pointSpecifique.carriere.apresGagner1Set.perdu);
            $('#resumeCarriere div.statsBarContainer>div.statsBar.afterLost1Set').data('gagner',data.pointSpecifique.carriere.apresPerdu1Set.gagner);
            $('#resumeCarriere div.statsBarContainer>div.statsBar.afterLost1Set').data('perdu',data.pointSpecifique.carriere.apresPerdu1Set.perdu);
            $('#resumeCarriere div.statsBarContainer>div.statsBar.vsDroitier').data('gagner',data.pointSpecifique.carriere.contreDroitier.gagner);
            $('#resumeCarriere div.statsBarContainer>div.statsBar.vsDroitier').data('perdu',data.pointSpecifique.carriere.contreDroitier.perdu);
            $('#resumeCarriere div.statsBarContainer>div.statsBar.vsGaucher').data('gagner',data.pointSpecifique.carriere.contreGaucher.gagner);
            $('#resumeCarriere div.statsBarContainer>div.statsBar.vsGaucher').data('perdu',data.pointSpecifique.carriere.contreGaucher.perdu);

            var temp = 200;
            var gazon = Math.ceil(data.environnement.carriere.gazon.gagner / (data.environnement.carriere.gazon.gagner + data.environnement.carriere.gazon.perdu) * 100) > 0 ? Math.ceil(data.environnement.carriere.gazon.gagner / (data.environnement.carriere.gazon.gagner + data.environnement.carriere.gazon.perdu) * 100) : 0;
            var clay = Math.ceil(data.environnement.carriere.terreBattue.gagner / (data.environnement.carriere.terreBattue.gagner + data.environnement.carriere.terreBattue.perdu) * 100) > 0 ? Math.ceil(data.environnement.carriere.terreBattue.gagner / (data.environnement.carriere.terreBattue.gagner + data.environnement.carriere.terreBattue.perdu) * 100) : 0;
            var dur = Math.ceil(data.environnement.carriere.dur.gagner / (data.environnement.carriere.dur.gagner + data.environnement.carriere.dur.perdu) * 100 ) > 0 ? Math.ceil(data.environnement.carriere.dur.gagner / (data.environnement.carriere.dur.gagner + data.environnement.carriere.dur.perdu) * 100 ) : 0;
            $('#resumeCarriere div.surface>div.statsRounded.dur').data('pourcent',dur);
            $('#resumeCarriere div.surface>div.statsRounded.clay').data('pourcent',clay);
            $('#resumeCarriere div.surface>div.statsRounded.grass').data('pourcent',gazon);

            for(y in data.rankingHistory){
                if(temp > data.rankingHistory[y]){
                    temp = data.rankingHistory[y];
                }
            }
            $('#resumeCarriere>div:first-child>div:first-child>h1').html('#' + temp);

            statsBar('#resumeCarriere .statsBar.tous',0.3);
            statsBar('#resumeCarriere .statsBar.grdchelem',0.3);
            statsBar('#resumeCarriere .statsBar.masters1000',0.3);
            statsBar('#resumeCarriere .statsBar.tieBreaks',0.35);
            statsBar('#resumeCarriere .statsBar.vsTop10',0.35);
            statsBar('#resumeCarriere .statsBar.dernierSet',0.35);
            statsBar('#resumeCarriere .statsBar.afterWin1Set',0.35);
            statsBar('#resumeCarriere .statsBar.afterLost1Set',0.35);
            statsBar('#resumeCarriere .statsBar.vsDroitier',0.35);
            statsRound('#resumeCarriere .statsRounded.dur');
            statsRound('#resumeCarriere .statsRounded.clay');
            statsRound('#resumeCarriere .statsRounded.grass'); 
            scrollbar('#resumeCarriere>div.scrollbar','#resumeCarriere>div:first-child');
        }else if(onglet == 'titres'){
            $('#titres .statsNumber.dur>h1').html(data.titre[option.titres].dur + ' Titres');
            $('#titres .statsNumber.clay>h1').html(data.titre[option.titres].terreBattue + ' Titres');
            $('#titres .statsNumber.grass>h1').html(data.titre[option.titres].gazon + ' Titres');
            var temp = data.titre[option.titres].gazon + data.titre[option.titres].terreBattue + data.titre[option.titres].dur;
            $('#titres>div:first-child>div:nth-child(2)>h3').html(temp + ' titres');

            Maptitres('#titres>div>div>div#mapTitre',data.titre[option.titres].lieu);
            statsNumber('#titres .statsNumber.dur',true);
            statsNumber('#titres .statsNumber.clay',false);
            statsNumber('#titres .statsNumber.grass',true);
            scrollbar('#titres>div.scrollbar','#titres>div:nth-child(2)');
        }else if(onglet == "finales"){
            $('#finales .statsNumber.dur>h1').html(data.finales[option.finales].dur + ' Finales');
            $('#finales .statsNumber.clay>h1').html(data.finales[option.finales].terreBattue + ' Finales');
            $('#finales .statsNumber.grass>h1').html(data.finales[option.finales].gazon + ' Finales');
            var temp = data.finales[option.finales].gazon + data.finales[option.finales].terreBattue + data.finales[option.finales].dur;
            $('#finales>div:first-child>div:nth-child(2)>h3').html(temp + ' titres');

            Maptitres('#finales>div>div>div#mapFinales',data.finales[option.finales].lieu);
            statsNumber('#finales .statsNumber.dur',true);
            statsNumber('#finales .statsNumber.clay',false);
            statsNumber('#finales .statsNumber.grass',true);
            scrollbar('#finales>div.scrollbar','#finales>div:nth-child(2)');
        }else if(onglet == "statistique"){

            statsRound('#statistique .statsRounded.pgsr1s',true);
            statsRound('#statistique .statsRounded.pgsr2s',true);
            statsRound('#statistique .statsRounded.obdb',true);
            statsRound('#statistique .statsRounded.prg',true);
            statsRound('#statistique .statsRounded.tpgr',true); 
            scrollbar('#statistique>div.scrollbar','#statistique>div:nth-child(2)');
        }
    }
    scrollbar('#container>nav>div.scrollbar','#container>nav>ul');

    navBar();
    changeData('resume2013')
    selectBar('#titres>div>div>nav:first-child',9);
    selectBar('#finales>div>div>nav:first-child',9);
    selectBar('#statistique>div>nav:first-child',9);
    selectBar('#statistique>div>nav:nth-child(2)',2);
    selectBar('#statistique>div>nav:nth-child(3)',1);
});