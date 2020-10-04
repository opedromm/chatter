// Runs script just when page loaded all elements
window.onload = function(){ 
    
    //Play youtube video - Hero
    document.getElementById('playButton').onclick = function changeContent() {
        var yt = document.getElementById("yt");
        
        //shows video iframe
        yt.classList.add("show"); 

        //changes autoplay value to 1 to play the video after click
        yt.src += "1"; 

        //prevent scrolling on click
        event.preventDefault();
    }

};