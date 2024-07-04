
const audio_path = "audio/"; 


function play( audioname ) {
	var audio = document.getElementById( "audio_player" );
	audio.src = audio_path + audioname + ".mp3"
	audio.play();
}
	  
