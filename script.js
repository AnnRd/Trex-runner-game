const dinosaur = document.getElementById('dino');
const cactus = document.getElementById('cactus');

document.addEventListener('keydown', jump);
function jump(event){

  if(dinosaur.classList.contains('jump') === false && event.keyCode == 38){
    dinosaur.classList.add('jump')
  } 
  setTimeout(() => dinosaur.classList.remove('jump'), 500)
}

let isAlive = setInterval(() => {
  let dinosaurTop = parseInt(window.getComputedStyle(dinosaur).getPropertyValue('top'));
  let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue('left'));

  if(cactusLeft < 60 && cactusLeft > 0 && dinosaurTop >= 140){
    alert('GAME OVER!')
  }
}, 10);

