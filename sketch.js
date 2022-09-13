
const density = " _.,-=+:;cba!?0123456789$W#@Ñ";
//const density = ' .:░▒▓█';
//const density =   " .:-i|=+%O#@";


let asciiDiv;
let video;  


function setup() {
  noCanvas();
  video = createCapture(VIDEO);
  video.size(64,48);
  video.hide();
  asciiDiv = createDiv();
}
  
  
function draw(){
  colorMode(HSB,255);
  video.loadPixels();
  let asciiImage = "";
  for (let j = 0; j < video.height; j++){
    for (let i = 0; i < video.width; i++){
      const pixelIndex = (i + j * video.width) * 4;
      const r = video.pixels[pixelIndex + 0];
      const g = video.pixels[pixelIndex + 1];
      const b = video.pixels[pixelIndex + 2];
      const grey = brightness(color(r,g,b));
      const len = density.length;
      const charIndex = floor(map(grey,0,255,0,len));
      
      
      const c = density.charAt(charIndex);
      if (c == ' ') asciiImage += '&nbsp';
      else asciiImage += c;
    }
    asciiImage += '<br/>';
  }
  asciiDiv.html(asciiImage);
}
