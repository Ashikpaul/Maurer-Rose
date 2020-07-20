const c = document.getElementById("myCanvas");
c.width = window.innerWidth;
c.height = window.innerHeight - 170;
let ctx = c.getContext("2d");
let cx = c.width / 2, cy = c.height / 2;
let n = 6, d = 71;
let w = c.width;
let h = c.height;
let last = { x: 0, y: 0 }

ctx.translate(cx, cy);
ctx.save();

ctx.globalAlpha = 1.0;
ctx.textAlign = "center";
ctx.font = "30px monospace";
ctx.fillStyle = "yellow";
ctx.fillText('Maurer Rose', 0, -cy + 30);

ctx.textAlign = "left";
ctx.fillStyle = "white";
ctx.font = "italic normal 15px monospace";
ctx.fillText("Made with 💖 by Ashik Paul", -cx, cy - 15);

if (window.innerWidth > 900) {ctx.scale(2, 2);}
// else if(window.innerWidth > 400){ctx.scale(1.25, 1.25);}
else { ctx.scale(1, 1);}

const draw = () => {
  for (let i = 0; i < 361; i++) {
    let k = i * d * Math.PI / 180;
    let r = 150 * Math.sin(n * k);
    let x = r * Math.cos(k);
    let y = r * Math.sin(k);
    let z = r * Math.tan(k);
    ctx.beginPath();
    ctx.moveTo(last.x, last.y);
    ctx.lineTo(x, y);
    ctx.strokeStyle = 'hsl(' + Math.random() * 360 + ',100%,50%)';
    ctx.stroke();
    last = { x, y };
  }

  last = { x: 0, y: 0 };
  ctx.lineWidth = 4;
  for (let i = 0; i < 361; i++) {
    let k = i * Math.PI / 180;
    let r = 150 * Math.sin(n * k);
    let x = r * Math.cos(k);
    let y = r * Math.sin(k);
    ctx.beginPath();
    ctx.moveTo(last.x, last.y);
    ctx.lineTo(x, y);
    ctx.strokeStyle = 'hsl(' + r + ',100%,50%)';
    ctx.stroke();
    last = { x, y };
  }
};
draw();

var nSlider = document.getElementById("nRange");
var nOutput = document.getElementById("nDemo");
nOutput.innerHTML = nSlider.value;
nSlider.oninput = function () {
  nOutput.innerHTML = this.value;
  n = parseInt(this.value);
  ctx.clearRect(-w/2, -h/2 + 60, w*2, h-160);
  draw();
}

var dSlider = document.getElementById("dRange");
var dOutput = document.getElementById("dDemo");
dOutput.innerHTML = dSlider.value;
dSlider.oninput = function () {
  dOutput.innerHTML = this.value;
  d = parseInt(this.value);
  ctx.clearRect(-w/2, -h/2 + 60, w*2, h-160);
  draw();
}