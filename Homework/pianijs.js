var note = document.querySelector(".nowplaying");
document.addEventListener('keydown', function(event) {
    if(event.key == "a"){ 
        note.innerHTML = "DO";
        var audio = document.getElementById("1");
        audio.load();
        audio.play();
    }
    if(event.key == "w"){ 
        note.innerHTML = "DO#";
        var audio = document.getElementById("2");
        audio.load();
        audio.play();
    }
    if(event.key == "s"){
        var audio = document.getElementById("3");
        note.innerHTML = "RE";
        audio.load();
        audio.play(); 
    }
    if(event.key == "e"){
        note.innerHTML = "RE#";
        var audio = document.getElementById("4");
        audio.load();
        audio.play();
    }
    if(event.key == "d"){
        note.innerHTML = "MI";
        var audio = document.getElementById("5");
        audio.load();
        audio.play();
    }
    if(event.key == "f"){
        note.innerHTML = "FA";
        var audio = document.getElementById("6");
        audio.load();
        audio.play();
    }
    if(event.key == "t"){ 
        note.innerHTML = "FA#";
        var audio = document.getElementById("7");
        audio.load();
        audio.play();
    }
    if(event.key == "g"){
        note.innerHTML = "SOL";
        var audio = document.getElementById("8");
        audio.load();
        audio.play();
    }
    if(event.key == "y"){ 
        note.innerHTML = "SOL#";
        var audio = document.getElementById("9");
        audio.load();
        audio.play();
    }
    if(event.key == "h"){ 
        note.innerHTML = "LA";
        var audio = document.getElementById("10");
        audio.load();
        audio.play();
    }
    if(event.key == "u"){ 
        note.innerHTML = "LA#";
        var audio = document.getElementById("11");
        audio.load();
        audio.play();
    }
    if(event.key == "j"){ 
        note.innerHTML = "SI";
        var audio = document.getElementById("12");
        audio.load();
        audio.play();
    }
});
function play(){
    document.getElementById("inputArray").disabled = true;
    document.getElementById("play").disabled = true;
    var arrayy = document.getElementById("inputArray").value;
    var array = arrayy.split(",")
    var i = 0
    function Loopi() {
        setTimeout(function() {
            console.log(array[i])
            if(array[i] == "C"){
                var audio = document.getElementById("1");
                audio.load();
                audio.play();
            }
            if(array[i] == "C#"){
                var audio = document.getElementById("2");
                audio.load();
                audio.play();
            }
            if(array[i] == "D"){
                var audio = document.getElementById("3");  
                audio.load();
                audio.play(); 
            }
            if(array[i] == "D#"){
                var audio = document.getElementById("4");
                audio.load();
                audio.play();
            }
            if(array[i] == "E"){
                var audio = document.getElementById("5");
                audio.load();
                audio.play();
            }
            if(array[i] == "F"){
                var audio = document.getElementById("6");
                audio.load();
                audio.play();
            }
            if(array[i] == "F#"){
                var audio = document.getElementById("7");
                audio.load();
                audio.play();
            }
            if(array[i] == "G"){
                var audio = document.getElementById("8");
                audio.load();
                audio.play();
            }
            if(array[i] == "G#"){
                var audio = document.getElementById("9");
                audio.load();
                audio.play();
            }
            if(array[i] == "A"){
                var audio = document.getElementById("10");
                audio.load();
                audio.play();
            }
            if(array[i] == "A#"){
                var audio = document.getElementById("11");
                audio.load();
                audio.play();
            }
            if(array[i] == "B"){
                var audio = document.getElementById("12");
                audio.load();
                audio.play();
            }
            i++;
            if (i < array.length) {
                Loopi();
            }
            else{
                document.getElementById("inputArray").disabled = false;
                document.getElementById("play").disabled = false;
            }
        }, 600)
    }
    Loopi();
}
