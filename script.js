// const sceneEl = document.querySelector('a-scene');
// const heartEl = document.querySelector('#heart-model');
// const scoreEl = document.querySelector('#score-element');

// let score = 0;

// function displayScore() {
//   scoreEl.setAttribute('value', `Score: ${score}`);
// }

// function randomPosition() {
//   return {
//     x: (Math.random() - 0.5) * 20,
//     y: 1.5,
//     z: (Math.random() - 0.5) * 20,
//   };
// }

// function createHeart() {
//   const clone = heartEl.cloneNode();
//   clone.setAttribute('position', randomPosition());
//   clone.addEventListener('mousedown', () => {
//     score++;
//     clone.dispatchEvent(new Event('collected'));
//     displayScore();
//   });
//   //   clone.addEventListener('animationcomplete', () => {
//   //     clone.setAttribute('position', randomPosition());
//   //     clone.setAttribute('scale', '0.01 0.01 0.01');
//   //   });
//   sceneEl.appendChild(clone);
// }

// for (let i = 0; i < 15; i++) {
//   createHeart();
// }

// displayScore();

const blueBox = document.querySelector('#blue-box');

blueBox.addEventListener('mousedown', () => {
  console.log('HEJ');
});

function playMusic() {
  blueBox.addEventListener('click', () => {
    console.log('HEJ');
  });
}
