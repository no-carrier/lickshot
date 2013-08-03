function click(e) {
		switch( e.target.id ) {
			case "black2":	createAudio( 'beep.wav' ); break;
			case "red":		createAudio( 'horn.wav' ); break;
			case "yellow":	createAudio( 'laser.wav' ); break;
			case "green":	createAudio( 'gun.wav' ); break;
			case "black":	createAudio( 'rewind.wav' ); 
	  						chrome.tabs.reload();
	  						break;
	  	}
		
}

function createAudio( src ) {
	var el = document.createElement("audio");
	el.src = src;
	el.addEventListener( 'ended', function() {
			document.removeChild( this );
		}, false);
	el.volume = localStorage.volume;
	el.play();
}

document.addEventListener('DOMContentLoaded', function () {
	// set a click listener on the sound buttons
	var divs = document.querySelectorAll('div');
	for (var i = 0; i < divs.length; i++) {
		divs[i].addEventListener('click', click);
	}
  
	var slider = document.getElementById("slider");
	// if localStorage.volume is null, set a default value;
	if ( localStorage.volume == null ) {
		localStorage.volume = .5;
		slider.value = .5;
	}
	else {
		slider.value = localStorage.volume;
	}
	
  	// save new default volume when slider is changed
	slider.addEventListener("mouseup", function() {
		localStorage.volume = slider.value;
	}, false);
});