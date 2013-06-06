$(function(){
	
	var note = $('#note'),
		newYear = true;

	var date_actuelle = new Date();
	var date_evenement = new Date("Jul 25 10:00:00 2013");
	var total_secondes = Math.floor((date_evenement - date_actuelle) / 1000);

	var jours = Math.floor(total_secondes / (60 * 60 * 24));
	var heures = Math.floor((total_secondes - (jours * 60 * 60 * 24)) / (60 * 60));
	var minutes = Math.floor((total_secondes - ((jours * 60 * 60 * 24 + heures * 60 * 60))) / 60);
	var secondes = Math.floor(total_secondes - ((jours * 60 * 60 * 24 + heures * 60 * 60 + minutes * 60)));
	
	console.log(jours);
	console.log(heures);
	console.log(minutes);
	console.log(secondes);


	ts = (new Date()).getTime() + total_secondes * 1000;
		
	$('#countdown').countdown({
		timestamp	: ts,
		callback	: function(days, hours, minutes, seconds){
			
			var message = "";
			
			message += days + " day" + ( days==1 ? '':'s' ) + ", ";
			message += hours + " hour" + ( hours==1 ? '':'s' ) + ", ";
			message += minutes + " minute" + ( minutes==1 ? '':'s' ) + " and ";
			message += seconds + " secosnd" + ( seconds==1 ? '':'s' ) + " <br />";
			

			
			note.html(message);
		}
	});
	
});
// 95 100