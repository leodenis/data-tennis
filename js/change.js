


		  $(function() {	
			if($.browser.name == 'msie') {
				$('.terraintennis').remove();
				var changeterrain = document.getElementById("courttennis"); 
				changeterrain.className= "look"; 
				$(".imgballetennis").css("margin-left", "369px");
				// $("#lueur1").css({"width":"92px","margin-left":"74px"});
				// $("#lueur3").css({"width":"93px"});

			} 
			else if($.browser.name == 'firefox'){
				var changeterrain = document.getElementById("courttennis"); 
				changeterrain.className= "hide"; 
				$(".terraintennis").css("margin-top", "-7px");
				// $("#lueur1").css({"margin-top":"-99px","width":"93px","height":"92px","margin-left":"74px"});
				// $("#lueur2").css("height", "92px");
				// $("#lueur3").css({"width":"93px","height":"92px"});

			}
			else if($.browser.name == 'safari'){
				var changeterrain = document.getElementById("courttennis"); 
				changeterrain.className= "hide"; 
				// $(".terraintennis").css("margin-top", "41px");
				// $("#lueur1").css({"margin-top":"-99px","width":"93px","height":"92px","margin-left":"74px"});
				// $("#lueur2").css("height", "92px");
				// $("#lueur3").css({"width":"93px","height":"92px"});

			}
			else{
				var changeterrain = document.getElementById("courttennis"); 
				changeterrain.className= "hide"; 
			}
		    var availableTags = [
		      "Novak Djokovic",
		      "Andy Murray",
		      "Roger Federer",
		      "Rafael Nadal",
		      "David Ferrer",
		      "Tomas Berdych",
		      "Juan Martin Del Potro",
		      "Jo-Wilfried Tsonga",
		      "Richard Gasquet",
		      "Stanislas Wawrinka",
		    ];
		    $( "#inputText" ).autocomplete({
		      source: availableTags
		    });
		  });

		 function changeUrl(){
		      var search1 = $('#inputText').val();
		      if(search1 == ''){
				  $('#buttonFourPart').attr('action', '#containerFourPart');
		      }else{
			 	 //  search1 = search1.replace(/ /g,"");
				  search1 = search1.toLowerCase() 
					var elem = search1.split(' ');
					var taille = elem.length - 1;
					search1 = elem[taille];
				  $('#buttonFourPart').attr('action', 'webapp.html#/'+search1);
				  $('#buttonAnalysePerf').attr('href', 'webapp.html#/'+search1);     	
		      }


		 }

		 function changeImg(){
		 	var search3='';
		 	$( "#inputText" ).autocomplete({
			  select: function( event, ui ) {
			  	var search3 = ui.item.label;
			  	search3 = search3.toLowerCase() 


		 	 if (search3 == 'novak djokovic') {
		 	 	$('#changeImgPlayer').attr('src','img/player/1_Novak_DJOKOVIC.png');
		 	 	document.getElementById("changeNamePlayer").innerHTML ="Novak Djokovic"; 
		 	 	$("#submit").removeAttr("disabled");
		 	 	$("#buttonAnalysePerf").removeAttr("disabled");

		 	 }
		 	 else if (search3 == 'andy murray'){
		 	 	$('#changeImgPlayer').attr('src','img/player/2_Andy_MURRAY.png');
		 	 	document.getElementById("changeNamePlayer").innerHTML ="Andy Murray"; 
		 	 	$("#submit").removeAttr("disabled");

		 	 }
		 	 else if (search3 == 'roger federer'){
		 	 	$('#changeImgPlayer').attr('src','img/player/3_Roger_FEDERER.png');
		 	 	document.getElementById("changeNamePlayer").innerHTML ="Roger Federer";
		 	 	$("#submit").removeAttr("disabled");
		 	 }
		 	 else if (search3 == 'rafael nadal'){
		 	 	$('#changeImgPlayer').attr('src','img/player/4_Rafael_NADAL.png');
		 	 	document.getElementById("changeNamePlayer").innerHTML ="Rafael Nadal"; 
		 	 	$("#submit").removeAttr("disabled");
		 	 }
		 	 else if (search3 == 'david ferrer'){
		 	 	$('#changeImgPlayer').attr('src','img/player/5_David_FERRER.png');
		 	 	document.getElementById("changeNamePlayer").innerHTML ="David Ferrer"; 
		 	 	$("#submit").removeAttr("disabled");
		 	 }
		 	 else if (search3 == 'tomas berdych'){
		 	 	$('#changeImgPlayer').attr('src','img/player/6_Tomas_BERDYCH.png');
		 	 	document.getElementById("changeNamePlayer").innerHTML ="Tomas Berdych"; 
		 	 	$("#submit").removeAttr("disabled");
		 	 }
		 	 else if (search3 == 'juan martin del potro'){
		 	 	$('#changeImgPlayer').attr('src','img/player/7_Juan_Martin_DEL_POTRO.png');
		 	 	document.getElementById("changeNamePlayer").innerHTML ="juan Martin Del Potro";
		 	 	$("#submit").removeAttr("disabled"); 
		 	 }
		 	 else if (search3 == 'jo-wilfried tsonga'){
		 	 	$('#changeImgPlayer').attr('src','img/player/8_Jo-Wilfried_TSONGA.png');
		 	 	document.getElementById("changeNamePlayer").innerHTML ="Jo-Wilfried Tsonga"; 
		 	 	$("#submit").removeAttr("disabled");
		 	 }
		 	 else if (search3 == 'richard gasquet'){
		 	 	$('#changeImgPlayer').attr('src','img/player/9_Richard_GASQUET.png');
		 	 	document.getElementById("changeNamePlayer").innerHTML ="Richard Gasquet"; 
		 	 	$("#submit").removeAttr("disabled");
		 	 }
		 	 else if (search3 == 'stanislas wawrinka'){
		 	 	$('#changeImgPlayer').attr('src','img/player/10_Stanislas_WAWRINKA.png');		 	 	
		 	 	document.getElementById("changeNamePlayer").innerHTML ="Stanislas Wawrinka"; 
		 	 	$("#submit").removeAttr("disabled");
		 	 }
		 	 else if (search3 == 'marin cilic'){
		 	 	$('#changeImgPlayer').attr('src','img/player/11_MARIN_CILIC.png');		 	 	
		 	 	document.getElementById("changeNamePlayer").innerHTML ="Marin Cilic"; 
		 	 	$("#submit").removeAttr("disabled");
		 	 }
		 	 else if (search3 == 'janko tipsarevic'){
		 	 	$('#changeImgPlayer').attr('src','img/player/12_JANKO_TIPSAREVIC.png');		 	 	
		 	 	document.getElementById("changeNamePlayer").innerHTML ="Janko Tipsarevic"; 
		 	 	$("#submit").removeAttr("disabled");
		 	 }
		 	 else if (search3 == 'nicolas almagro'){
		 	 	$('#changeImgPlayer').attr('src','img/player/13_NICOLAS_ALMAGRO.png');		 	 	
		 	 	document.getElementById("changeNamePlayer").innerHTML ="Nicolas Almagro"; 
		 	 	$("#submit").removeAttr("disabled");
		 	 }
		 	 else if (search3 == 'tommy haas'){
		 	 	$('#changeImgPlayer').attr('src','img/player/14_TOMMY_HAAS.png');		 	 	
		 	 	document.getElementById("changeNamePlayer").innerHTML ="Tommy Haas"; 
		 	 	$("#submit").removeAttr("disabled");
		 	 }
		 	 else if (search3 == 'kei nishikori'){
		 	 	$('#changeImgPlayer').attr('src','img/player/15_KEI_NISHIKORI.png');		 	 	
		 	 	document.getElementById("changeNamePlayer").innerHTML ="Kei Nishikori"; 
		 	 	$("#submit").removeAttr("disabled");
		 	 }
		 	 else if (search3 == 'milos raonic'){
		 	 	$('#changeImgPlayer').attr('src','img/player/16_MILOS_RAONIC.png');		 	 	
		 	 	document.getElementById("changeNamePlayer").innerHTML ="Milos Raonic"; 
		 	 	$("#submit").removeAttr("disabled");
		 	 }
		 	 else if (search3 == 'juan monaco'){
		 	 	$('#changeImgPlayer').attr('src','img/player/17_JUAN_MONACO.png');		 	 	
		 	 	document.getElementById("changeNamePlayer").innerHTML ="Juan Monaco"; 
		 	 	$("#submit").removeAttr("disabled");
		 	 }
		 	 else if (search3 == 'gilles simon'){
		 	 	$('#changeImgPlayer').attr('src','img/player/18_GILLES_SIMON.png');		 	 	
		 	 	document.getElementById("changeNamePlayer").innerHTML ="Gilles Simon"; 
		 	 	$("#submit").removeAttr("disabled");
		 	 }
		 	 else if (search3 == 'philipp kohlschreiber'){
		 	 	$('#changeImgPlayer').attr('src','img/player/19_PHILIPP_KOHLSCHREIBER.png');	
		 	 	document.getElementById("changeNamePlayer").innerHTML ="Philipp Kohlschereiber"; 
				$("#submit").removeAttr("disabled");
		 	 }
		 	 else if (search3 == 'sam querrey'){
		 	 	$('#changeImgPlayer').attr('src','img/player/20_SAM_QUERREY.png');		 	 	
		 	 	document.getElementById("changeNamePlayer").innerHTML ="Sam Querrey"; 
		 	 	$("#submit").removeAttr("disabled");
		 	 }
		 	 else{
		 	 	$('#changeImgPlayer').attr('src','img/player/joueur_inconnu.png');
		 	 	document.getElementById("changeNamePlayer").innerHTML ="Unknow player";
		 	 	$("#submit").attr('disabled', 'disabled');
		 	 	$("#buttonAnalysePerf").attr('disabled', 'disabled');

		 	 }
			  }
			});

		 	 var search2 = $('#inputText').val();
		 	 search2 = search2.toLowerCase() 

		 	 if (search2 == 'novak djokovic') {
		 	 	$('#changeImgPlayer').attr('src','img/player/1_Novak_DJOKOVIC.png');
		 	 	document.getElementById("changeNamePlayer").innerHTML ="Novak Djokovic"; 	
		 	 	$("#submit").removeAttr("disabled");

		 	 }
		 	 else if (search2 == 'andy murray'){
		 	 	$('#changeImgPlayer').attr('src','img/player/2_Andy_MURRAY.png');
		 	 	document.getElementById("changeNamePlayer").innerHTML ="Andy Murray"; 
		 	 	$("#submit").removeAttr("disabled");
		 	 }
		 	 else if (search2 == 'roger federer'){
		 	 	$('#changeImgPlayer').attr('src','img/player/3_Roger_FEDERER.png');
		 	 	document.getElementById("changeNamePlayer").innerHTML ="Roger Federer"; 
		 	 	$("#submit").removeAttr("disabled");
		 	 }
		 	 else if (search2 == 'rafael nadal'){
		 	 	$('#changeImgPlayer').attr('src','img/player/4_Rafael_NADAL.png');
		 	 	document.getElementById("changeNamePlayer").innerHTML ="Rafael Nadal"; 
		 	 	$("#submit").removeAttr("disabled");
		 	 }
		 	 else if (search2 == 'david ferrer'){
		 	 	$('#changeImgPlayer').attr('src','img/player/5_David_FERRER.png');
		 	 	document.getElementById("changeNamePlayer").innerHTML ="David Ferrer"; 
		 	 	$("#submit").removeAttr("disabled");
		 	 }
		 	 else if (search2 == 'tomas berdych'){
		 	 	$('#changeImgPlayer').attr('src','img/player/6_Tomas_BERDYCH.png');
		 	 	document.getElementById("changeNamePlayer").innerHTML ="Tomas Berdych"; 
		 	 	$("#submit").removeAttr("disabled");
		 	 }
		 	 else if (search2 == 'juan martin del potro'){
		 	 	$('#changeImgPlayer').attr('src','img/player/7_Juan_Martin_DEL_POTRO.png');
		 	 	document.getElementById("changeNamePlayer").innerHTML ="juan Martin Del Potro"; 
		 	 	$("#submit").removeAttr("disabled");
		 	 }
		 	 else if (search2 == 'jo-wilfried tsonga'){
		 	 	$('#changeImgPlayer').attr('src','img/player/8_Jo-Wilfried_TSONGA.png');
		 	 	document.getElementById("changeNamePlayer").innerHTML ="Jo-Wilfried Tsonga"; 
		 	 	$("#submit").removeAttr("disabled");
		 	 }
		 	 else if (search2 == 'richard gasquet'){
		 	 	$('#changeImgPlayer').attr('src','img/player/9_Richard_GASQUET.png');
		 	 	document.getElementById("changeNamePlayer").innerHTML ="Richard Gasquet"; 
		 	 	$("#submit").removeAttr("disabled");
		 	 }
		 	 else if (search2 == 'stanislas wawrinka'){
		 	 	$('#changeImgPlayer').attr('src','img/player/10_Stanislas_WAWRINKA.png');		 	 	
		 	 	document.getElementById("changeNamePlayer").innerHTML ="Stanislas Wawrinka"; 
		 	 	$("#submit").removeAttr("disabled");
		 	 }
		 	 else if (search2 == 'marin cilic'){
		 	 	$('#changeImgPlayer').attr('src','img/player/11_MARIN_CILIC.png');		 	 	
		 	 	document.getElementById("changeNamePlayer").innerHTML ="Marin Cilic"; 
		 	 	$("#submit").removeAttr("disabled");
		 	 }
		 	 else if (search2 == 'janko tipsarevic'){
		 	 	$('#changeImgPlayer').attr('src','img/player/12_JANKO_TIPSAREVIC.png');		 	 	
		 	 	document.getElementById("changeNamePlayer").innerHTML ="Janko Tipsarevic"; 
		 	 	$("#submit").removeAttr("disabled");
		 	 }
		 	 else if (search2 == 'nicolas almagro'){
		 	 	$('#changeImgPlayer').attr('src','img/player/13_NICOLAS_ALMAGRO.png');		 	 	
		 	 	document.getElementById("changeNamePlayer").innerHTML ="Nicolas Almagro"; 
		 	 	$("#submit").removeAttr("disabled");
		 	 }
		 	 else if (search2 == 'tommy haas'){
		 	 	$('#changeImgPlayer').attr('src','img/player/14_TOMMY_HAAS.png');		 	 	
		 	 	document.getElementById("changeNamePlayer").innerHTML ="Tommy Haas"; 
		 	 	$("#submit").removeAttr("disabled");
		 	 }
		 	 else if (search2 == 'kei nishikori'){
		 	 	$('#changeImgPlayer').attr('src','img/player/15_KEI_NISHIKORI.png');		 	 	
		 	 	document.getElementById("changeNamePlayer").innerHTML ="Kei Nishikori"; 
		 	 	$("#submit").removeAttr("disabled");
		 	 }
		 	 else if (search2 == 'milos raonic'){
		 	 	$('#changeImgPlayer').attr('src','img/player/16_MILOS_RAONIC.png');		 	 	
		 	 	document.getElementById("changeNamePlayer").innerHTML ="Milos Raonic"; 
		 	 	$("#submit").removeAttr("disabled");
		 	 }
		 	 else if (search2 == 'juan monaco'){
		 	 	$('#changeImgPlayer').attr('src','img/player/17_JUAN_MONACO.png');		 	 	
		 	 	document.getElementById("changeNamePlayer").innerHTML ="Juan Monaco"; 
		 	 	$("#submit").removeAttr("disabled");
		 	 }
		 	 else if (search2 == 'gilles simon'){
		 	 	$('#changeImgPlayer').attr('src','img/player/18_GILLES_SIMON.png');		 	 	
		 	 	document.getElementById("changeNamePlayer").innerHTML ="Gilles Simon"; 
		 	 	$("#submit").removeAttr("disabled");
		 	 }
		 	 else if (search2 == 'philipp kohlschreiber'){
		 	 	$('#changeImgPlayer').attr('src','img/player/19_PHILIPP_KOHLSCHREIBER.png');		 	 	
		 	 	document.getElementById("changeNamePlayer").innerHTML ="Philipp Kohlschereiber"; 
		 	 	$("#submit").removeAttr("disabled");
		 	 }
		 	 else if (search2 == 'sam querrey'){
		 	 	$('#changeImgPlayer').attr('src','img/player/20_SAM_QUERREY.png');		 	 	
		 	 	document.getElementById("changeNamePlayer").innerHTML ="Sam Querrey"; 
		 	 	$("#submit").removeAttr("disabled");
		 	 }
		 	 else{
		 	 	$('#changeImgPlayer').attr('src','img/player/joueur_inconnu.png');
		 	 	document.getElementById("changeNamePlayer").innerHTML ="Unknow player"; 
		 	 	$("#submit").attr('disabled', 'disabled');
		 	 	$("#buttonAnalysePerf").attr('disabled', 'disabled');

		 	 }

		 }
