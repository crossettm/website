var html = '';
var rgbColor;
var divCount = 0;

function randomRGB(){
  return Math.floor(Math.random() * 256);
}

function randomColor() {
  var color = 'rgb(';
  color += randomRGB() + ',';
  color += randomRGB() + ',';
  color += randomRGB() + ')';
  return color;
}

while (divCount < 1000) {
  rgbColor = randomColor();
  html += '<div style="background-color:' + rgbColor + '"></div>';
  divCount += 1;
}

document.write(html);