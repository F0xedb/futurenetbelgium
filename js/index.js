function MainbtnClick(){
    if(GET["ref"] != null && (allowed.all || contains(allowed.people,GET["ref"]))){
        travelLoc(GET["ref"]);
    }else {
        if (Math.random() > 0.5) {
            travelbart();
        } else {
            travelivan();
        }
    }
}

function travelbart(){
    window.location.href='index.html?ref=proost.fn.xyz'+ "&lang="+test;
}

function travelivan() {
    window.location.href='index.html?ref=ivanow.fn.xyz'+ "&lang="+test;
}

function travelLoc(location){
    window.location.href='https://' + location;
}

function loadlang(lang){
    test = lang;
    init();

}

var bIsMuted = false;
function mute(){
    var vid = document.getElementById("myVideo");
    if(bIsMuted){
        showMute("mute");
    }else{
        showMute("unmute");
    }
    vid.muted = !bIsMuted;
    bIsMuted = !bIsMuted;
}

function showMute(string) {
    var el = document.getElementById("mute");
    el.innerHTML = Lookup(string);
}

function travelpdf(){
    var pdf = document.getElementById("pdf");
    pdf.href= "adpro_"+ test+".pdf";
}
