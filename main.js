prediction_1="";

Webcam.set({

    height:300,
    width:300,
    image_format:'jpg',
    jpg_quality:100
    
    });
    
    camera= document.getElementById("camera");
    
    Webcam.attach('#camera');

    function take_snapshot(){

Webcam.snap(function(data_uri){

document.getElementById("snapshot").innerHTML= "<img id='captured_image' src='"+data_uri+"'>";

});

    }

    console.log('ml5 version', ml5.version);

    classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/vuOqNR_il/model.json',modelLoaded);
    
    function modelLoaded(){
    
    console.log("Model Loaded!");
    
    }

function speak(){

synth = window.speechSynthesis;
speak_data_1 = "The first prediction is - "+prediction_1;
utterThis = new SpeechSynthesisUtterance(speak_data_1);
synth.speak(utterThis);

}


function check(){

img = document.getElementById("captured_image");
classifier.classify(img, gotResult);

}

function gotResult(error,results){

if (error){

console.error(error);

}

else{

console.log(results);
document.getElementById("result_gesture_name").innerHTML = results[0].label;
prediction_1=results[0].label;
speak();

if(results[0].label=="Excellent"){

document.getElementById("update_emoji").innerHTML = "👌🏻";

}

if(results[0].label=="Peace"){

    document.getElementById("update_emoji").innerHTML = "✌🏻";
    
    }

    if(results[0].label=="Thumbs Up"){

        document.getElementById("update_emoji").innerHTML = "👍🏻";
        
        }

}

}
