let counterObj = {	
};

// for(var i=1; i<=16; i++) {
//     counterObj['newPadCounter'+i] = 0;
// }

// function increasePadCounter() {

// }



document.addEventListener("DOMContentLoaded", function () {

    let pads = document.getElementsByClassName("pad")

    for(let i=0; i<pads.length; i++)  {
        counterObj[`newPadCounterpad${i+1}`] = 0;
  pads[i].id = `pad${i+1}`
  pads[i].addEventListener('click', padDown)
  counterObj['newPadCounter'+(i+1)] = 0;
}


    function padDown() {
        console.log(this.id)

        playAndStop(this.id)
        
        let pad = this
        pad.classList.add("padDown")

        setTimeout(function(){ 
            pad.classList.remove("padDown")
        }, 80);
      
      }



    let firstPlayCounter;


if (context.state === 'suspended' && 'ontouchstart' in window)
{
    var unlock = function()
    {
        context.resume();
    };

    document.body.addEventListener('touchstart', unlock, false);
}


    var context = new window.AudioContext || window.webkitAudioContext;
	console.log(context);
    var gainNode = context.createGain();
    
    function playSound(number) {

        window[`bufferNode${number}`]
        let bufferNodeName = window[`bufferNode${number}`]

        window[`bufferNode${number}`] = context.createBufferSource();
        
		var request = new XMLHttpRequest();
		request.open('GET', soundFile, true);
		request.responseType = 'arraybuffer';
		request.onload = function () {
			context.decodeAudioData(
				request.response,
				function (buffer) {
					window[`bufferNode${number}`].buffer = buffer;
					window[`bufferNode${number}`].connect(gainNode);
					gainNode.connect(context.destination);
					gainNode.gain.setValueAtTime(1, context.currentTime);
				},
				function (e) { console.log("Error with decoding audio data" + e.err); }
			);
		};
		request.send()
		window[`bufferNode${number}`].start()
    };
    
    function stopSound(number) {
        window[`bufferNode${number}`]

        let bufferNodeName = window[`bufferNode${number}`]
		window[`bufferNode${number}`].stop(context.currentTime);
    }; 
    
    function playAndStop(pad) {

        var numberPattern = /\d+/g;
        let number = pad.match( numberPattern ).join([]);
        firstPlayCounter = counterObj[`newPadCounter${pad}`]
            counterObj[`newPadCounter${pad}`]++
        bufferNodeName =  number 
        
        soundFile = "kick yacob.wav"

			if (firstPlayCounter === 0) {
				playSound(bufferNodeName, soundFile);
			}
			else {
				stopSound(bufferNodeName);
				playSound(bufferNodeName, soundFile);
			}
		
	};



});
