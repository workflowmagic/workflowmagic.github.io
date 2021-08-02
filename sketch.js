

//_______________________________BEGIN Audio Output Test

let sound = audioBatchLoader({

    snare: "sounds/snare.mp3"

});

function nodeGraphLeft(sound){
   let panner = audioContext.createStereoPanner();
   sound.connect(panner);
   panner.pan.value = -1;
   panner.connect(audioContext.destination)
}


let leftPlay = document.getElementsByTagName("BUTTON")[0];
leftPlay.addEventListener("click",function(){
    sound.snare.connect(nodeGraphLeft).play();

});

function nodeGraphRight(sound){
   let panner = audioContext.createStereoPanner();
   sound.connect(panner);
   panner.pan.value = 1;
   panner.connect(audioContext.destination)
}

let rightPlay = document.getElementsByTagName("BUTTON")[1];
rightPlay.addEventListener("click",function(){
    sound.snare.connect(nodeGraphRight).play();
});

//_______________________________END Audio Output Test


let spectrumAnayzerSketch = function(p) {

    p.setup = function() {
        p.createCanvas(500, 120);
        p.noFill();
        p.background(100);
        mic = new p5.AudioIn();
        mic.start();
        fft = new p5.FFT();
        fft.setInput(mic);
    }

    p.draw = function() {
        p.background(200,11,111);
        let spectrum = fft.analyze();
        p.beginShape();
        for (i = 0; i < spectrum.length; i++) {
            p.vertex(i, p.map(spectrum[i], 0, 255, p.height, 0));
        }

        p.endShape();


    }

    p.userStartAudio()

};

new p5(spectrumAnayzerSketch, 'container');


//____________________SHOW / HIDE webcam output */


//________________________________________________

let webCamSketch = function(p) {
    let capture;
    let canvas;
    let show = true;
    p.setup = function() {
         p.createCanvas(0, 0);
        capture = p.createCapture(p.VIDEO);
        capture.size(500, 140);
        capture.show();
    }

    p.draw = function() {
        background (col,c,d);
    }
}

new p5(webCamSketch , 'canvasForHTML');


//_________________________________________________

let bgc = "blue";

hotkeys('esc', function(event, handler){
  // Prevent the default refresh event under WINDOWS system
  $("#esc").css("background-color",bgc);
  
});

hotkeys('f1', function(event, handler){
  // Prevent the default refresh event under WINDOWS system
  $("#f1").css("background-color",bgc)
});

hotkeys('f2', function(event, handler){
  // Prevent the default refresh event under WINDOWS system
  $("#f2").css("background-color",bgc)
  
});


hotkeys('f3', function(event, handler){
  $("#f3").css("background-color",bgc)
  
});

hotkeys('f4', function(event, handler){
  // Prevent the default refresh event under WINDOWS system
  $("#f4").css("background-color",bgc)
  
});

hotkeys('f5', function(event, handler){
  // Prevent the default refresh event under WINDOWS system
  $("#f5").css("background-color",bgc)
  
});

hotkeys('f6', function(event, handler){
  // Prevent the default refresh event under WINDOWS system
  $("#f6").css("background-color",bgc)
  
});

hotkeys('f7', function(event, handler){
  // Prevent the default refresh event under WINDOWS system
  $("#f7").css("background-color",bgc)
  
});

hotkeys('f8', function(event, handler){
  // Prevent the default refresh event under WINDOWS system
  $("#f8").css("background-color",bgc)
  
});


hotkeys('f9', function(event, handler){
  // Prevent the default refresh event under WINDOWS system
  $("#f9").css("background-color",bgc)
  
});

hotkeys('f10', function(event, handler){
  // Prevent the default refresh event under WINDOWS system
  $("#f10").css("background-color",bgc)
  
});

hotkeys('f11', function(event, handler){
  // Prevent the default refresh event under WINDOWS system
  $("#f11").css("background-color",bgc)
  
});

hotkeys('f12', function(event, handler){
  // Prevent the default refresh event under WINDOWS system
  $("#f12").css("background-color",bgc)
  
});




$(function(){

    $("body").keydown(function(e){
         //well so you need keep on mind that your browser use some keys 
         //to call some function, so we'll prevent this
         e.preventDefault();

         //now we caught the key code.
         var keyCode = e.keyCode || e.which;

         //your keyCode contains the key code, F1 to F12 
         //is among 112 and 123. Just it.
         console.log(keyCode);    
         console.log("#" + keyCode)


         if(keyCode){
           $("." + keyCode).css("background-color",bgc)
         }   


    });

});



// keyboardJS.bind('a', (e) => {
//   console.log('a is pressed');
// });

// keyboardJS.watch(function(x){
//     console.log(x)
// });