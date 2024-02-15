/*!
* Start Bootstrap - Landing Page v6.0.6 (https://startbootstrap.com/theme/landing-page)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-landing-page/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project

 
document.addEventListener("DOMContentLoaded", function() {
    const audio = document.getElementById("myAudio");
    const playButton = document.getElementById("playButton");

    playButton.addEventListener("click", function() {
        if (audio.paused) {
            audio.play();
            playButton.textContent = "Pausar Áudio";
        } else {
            audio.pause();
            playButton.textContent = "Reproduzir Áudio";
        }
    });
});
 
document.addEventListener("DOMContentLoaded", function() {
    const audio = document.getElementById("myAudio");
    
    // Oculta o botão START
    document.querySelector("a.btn-primary").style.display = "none";
});
