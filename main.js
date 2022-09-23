function startClassification(){
    navigator.mediaDevices.getUserMedia({audio: true, video: false});
    classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/Ckp43sl0j/model.json', { probabilityThreshold: 0.7 }, modelReady);
}

function modelReady(){
    classifier.classify(gotResults)
}

jaguar=0;
snake=0;
monkey=0;

function gotResults(error, results){
    if(error){
        console.error(error);
    }else{
        console.log(results);

        random_number_r=Math.floor(Math.random()*255)+1;
        random_number_g=Math.floor(Math.random()*255)+1;
        random_number_b=Math.floor(Math.random()*255)+1;

        document.getElementById("result_label").innerHTML='I can hear - '+results[0].label;
        document.getElementById("result_count").innerHTML='I can hear Jaguar- '+jaguar;
        document.getElementById("result_count1").innerHTML='I can hear Snake- '+snake;
        document.getElementById("result_count2").innerHTML='I can hear Monkey- '+monkey;
        document.getElementById("result_label").style.color='rgb("+random_number_r+","+random_number_g+","+random_number_b+",)';
        document.getElementById("result_count").style.color='rgb("+random_number_r+","+random_number_g+","+random_number_b+",)';

        img=document.getElementById('animal_image');

        if(results[0].label=="Jaguar"){
            img.src = 'jaguar-roaring.gif';
            jaguar=jaguar+1;
        }else if(results[0].label=="Snake"){
            img.src = 'snake-hissing.gif';
            snake=snake+1;
        }else if(results[0].label=="Monkey"){
            img.src = 'monkey-honking.gif';
            monkey=monkey+1;
        }else{
            img.src = 'white.jpg';
        }
    }
}