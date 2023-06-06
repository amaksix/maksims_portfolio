function toggleVideo({ currentTarget: wrapper }) {
    let video = wrapper.querySelector('.video');
    let playpause = wrapper.querySelector('.playpause');
    if (video.paused) {
      video.play();
      playpause.setAttribute('hidden', '');
    } else {
      video.pause();
      playpause.removeAttribute('hidden');
    }
  }
  
  document.querySelectorAll('.wrapper')
    .forEach(wrapper => wrapper.addEventListener('click', toggleVideo));
var video = document.getElementById("vid");

function StartPauseHandler(e) { 
    let wrapper = document.getElementById("wrapper");
    let playpause = wrapper.querySelector('.playpause');
    if (e.type === "pause") {
        playpause.removeAttribute('hidden');
        
    } else if (e.type === "playing") {
        playpause.setAttribute('hidden', '');
    } else {
        if(!this.paused) {
            this.pause();
        } else {
            this.play();;
        }
    }
}

video.addEventListener("click", StartPauseHandler);
video.addEventListener("pause", StartPauseHandler);
video.addEventListener("playing", StartPauseHandler);