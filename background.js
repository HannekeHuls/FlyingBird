const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
canvas.width = 800;
canvas.height = 300;

const background = new Image();
background.src = 'skylin2.png';
ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
console.log(background.src);
console.log("yo");