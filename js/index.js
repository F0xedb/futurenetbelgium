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
function MainbtnClick2(){
    var el = document.getElementById("story");
    if(GET["ref"] != null && (allowed.all || contains(allowed.people,GET["ref"]))){
        el.href = "https://" + GET["ref"];
    }else {
        if (Math.random() > 0.5) {
            el.href = 'index.html?ref=proost.fn.xyz'+ "&lang="+test;
        } else {
            el.href = 'index.html?ref=ivanow.fn.xyz'+ "&lang="+test;
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
   var url ='https://' + location;
   window.open(url,'_blank');
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

function travelto(string){
        window.location.href=string;
}
function currentloc() {
    return window.location.pathname;
}

function pdfclick(){
    window.location.href="adpro_"+ test+".pdf";
}

var pdf = document.getElementById("pdf");
pdf.onclick=pdfclick;


function fillDateForm(){
    var date = document.getElementById("date");
    var time = new Date();
    var year = time.getFullYear();
    var month = "01";
    var day = "01";

    if(time.getMonth()+1 < 10) {
        month = "0" + (time.getMonth()+1);
    }else{
        month = time.getMonth()+1;
    }

    if(time.getDate() < 10) {
        day = "0"+time.getDate();
    }else{
        day = time.getDate();
    }

    date.value = year + "-" + month + "-" + day;
}

function ref(){
    if(GET["ref"]!=null){
        return "&ref="+GET["ref"];
    }
    return "";
}

