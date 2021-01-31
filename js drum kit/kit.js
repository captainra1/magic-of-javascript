window.addEventListener('keydown',tune)
function tune(e){
    var audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    var key=document.querySelector(`div[data-key="${e.keyCode}"]`);
    if(!audio)return;
    audio.currentTime=0; //using to play sound as key is pressed.
    audio.play();
    key.classList.add('effect');

}
function removetransition(e){
    if(e.propertyName!=='transform') return;
    this.classList.remove('effect');
}
var rem=document.querySelectorAll(".key");
rem.forEach(key => key.addEventListener('transitionend', removetransition));//this is doing because rem is an array.