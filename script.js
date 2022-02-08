const dinosaur = document.getElementById('dino');
const cactus = document.getElementById('cactus');
console.log(dinosaur, cactus)

document.addEventListener('keydown', jump);
function jump(event){

  if(dinosaur.classList.contains('jump') === false && event.keyCode == 38){
    dinosaur.classList.add('jump')
  } 
  setTimeout(() => dinosaur.classList.remove('jump'), 500)
}

