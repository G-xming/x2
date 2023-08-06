function clearValue(inputId) {
	document.getElementById(inputId).value = '';
}

function make() {
	var season = document.getElementById("userInput1").value;
	var episode = document.getElementById("userInput2").value;
	var imdb = document.getElementById("userInput3").value;
	var player = document.getElementById("videoplayer");
	
	if (season === "" || episode === "") {
		player.src = "https://v2.vidsrc.me/embed/" + imdb + "/";
	} else {
		player.src = "https://v2.vidsrc.me/embed/" + imdb + "/" + season + "-" + episode;
	}
  
	// alert(season)
	// alert(episode)
	// alert(imdb)
}
