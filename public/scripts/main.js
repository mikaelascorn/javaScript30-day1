'use strict';

// this will get the key code 
function playSound(e) {
  // console.log(e.keyCode);
  var audio = document.querySelector('audio[data-key="' + e.keyCode + '"]');
  var key = document.querySelector('.key[data-key="' + e.keyCode + '"]');

  if (!audio) return; // will stop it from running all together if key not valid
  // rewind to start of element so you can play fast
  audio.currentTime = 0;
  audio.play();

  console.log(key);
  // this is jquery is key.addClass('playing')
  key.classList.add('playing');
};

// this gives us all the keys for the timed animation, when key pressed it finds the key and removes transition
var keys = document.querySelectorAll('.key');
keys.forEach(function (key) {
  return key.addEventListener('transitionend', removeTransition);
});

// finds the transition yellow colour on the key 
function removeTransition(e) {
  if (e.propertyName !== 'transform') return;
  console.log(e.propertyName);
  // this is the key
  this.classList.remove('playing');
}

window.addEventListener('keydown', playSound);