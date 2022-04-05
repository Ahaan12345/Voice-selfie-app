var speechrecognition=window.webkitSpeechRecognition;

var Recognition=new speechrecognition();


function start(){
    document.getElementById("textbox").innerHTML="";
    Recognition.start();
}


Recognition.onresult=function(event){
    console.log(event);
    

    speak();
}


function speak(){
var synth=window.speechSynthesis;

var speak_data="taking your selfie in 5 seconds";

var utterthis=new SpeechSynthesisUtterance(speak_data);
synth.speak(utterthis);


}