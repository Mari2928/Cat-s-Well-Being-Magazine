/* 
   This JS shows the interaction image of ML Happiness Check application
   by recording cat's voice for 5 seconds, displaying the sample result,
   and providing a voice data to be downloaded for user's record. 
   Referred: https://developers.google.com/web/fundamentals/media/recording-audio/?hl=en
   and adopted to my site by creating new functions, adding a Record button 
   to pass the onClick action to the function, creating alert message and recording time, 
   and inserting the sample result using innerHTML. 
*/

    // start recording 5 seconds when user clicked on Record button.
    function startRecord(){

        // get user media type and ask user for permission to access mike
        navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia;

       // true for audio only. If Web Audio API can be used, run successFunc() otherwise run errorFunc()
        navigator.getUserMedia({
            audio: true,
            video: false
        }, successFunc, errorFunc);
    }

    // record cat's voice for 5 seconds using Web Audio API and display the sample result after that
    function successFunc(stream) {

	// create instance of MediaRecorder and assign it to a variable, recorder
        var recorder = new MediaRecorder(stream, {
            mimeType: 'video/webm;codecs=vp9'
        });

        // array for collecting the chunk of sound
        var chunks = [];

        // register the recorder to EventListener
        recorder.addEventListener('dataavailable', function(ele) {
            if (ele.data.size > 0) {
                chunks.push(ele.data);
            }
        });

        // when recorder.stop is executed, show the alert messeage and create a voice data to be downloaded
        recorder.addEventListener('stop', function() {

            var dl = document.querySelector("#dl");

            // create a voice data from recorder
            dl.href = URL.createObjectURL(new Blob(chunks));
            dl.download = 'sample.wav';
        });

        recorder.start();

        // stop recording after 5 seconds and display the sample result
        setTimeout(function() {
            alert("Recording stopped");
            recorder.stop();
	    document.getElementById("happiness_result").innerHTML = 
		"<b>RESULT</b>  It sounds like your cat is likely to be in pyisical pain. Consult with your vet.";
        }, 5000);
    }

    // show error message with alert if Web Audio API cannot be used
    function errorFunc(error) {
        alert("error");
    } 

