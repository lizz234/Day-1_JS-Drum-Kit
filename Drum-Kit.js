async function playSound (e){
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if(!audio) return; //stop function from running together
    audio.currentTime = 0; //rewind to the start
    audio.play();
    key.classList.add('playing');
    await sleep(1000)
    key.classList.remove('playing');
  };

  function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
  }


  function removeTransition(e) {
    if (e.propertyName !== 'transform') return;
    e.target.classList.remove('playing');

  }

  const keys = document.querySelectorAll('.keys');
  keys.forEach(key => key.addEventListener('transitionend', removeTransition));
  window.addEventListener('keydown' , playSound);