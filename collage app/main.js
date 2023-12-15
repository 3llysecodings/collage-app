var SpeechRecognition = window.webkitSpeechRecognition;

var recognition = new SpeechRecognition();

function start()
{
    document.getElementById("textbox").innerHTML = "";
    recognition.start();
}

recognition.onresult = function(event) 
{
console.log(event);

var Content = event.results [0][0].transcript;

document.getElementById("textbox").innerHTML = Content;
console.log(Content);
if(Content =="take my selfie")
{
console.log("taking my selfie --- ");
speak();
}
}

function speak()
{
  var synth = window.speechSynthesis;

  speak_data = "Taking your selfie in 5 seconds";

  var utterThis = new SpeechSynthesisUtterance(speak_data);

  synth.speak(utterThis);
  Webcam.attach(camera);

  setTimeout(function()
  {
    take_snapshot();
    save();
  }, 5000);
}

Webcam.set
({

width:350,
height:250,
image_format :'png',
png_quality:90
});
camera = document.getElementById("camera");

function take_snapshot()
{
  console.log(img_id);

  Webcam.snap(function(img_id) 
  if(img-id=="selfie1"){
    document.getElementById("result1").innerHTML = '<img id="selfie1" src="'+data_uri+'" />';
  }
  if(img-id=="selfie2"){
    document.getElementById("result2").innerHTML = '<img id="selfie2" src="'+data_uri+'" />';
  }
  if(img-id=="selfie3"){
    document.getElementById("result3").innerHTML = '<img id="selfie3" src="'+data_uri+'" />';
  }
)};

  




