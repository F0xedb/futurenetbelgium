var el1 = document.getElementById("prename");
var el2 = document.getElementById("name");
var el3 = document.getElementById("reflink");
var el4 = document.getElementById("e-mail");
var el5 = document.getElementById("agv");
var el6 = document.getElementById("sponsor");


function input(el){
    if(el.value.length > 0){
        setClass(el,"is-invalid","is-valid");
    }else{
        setClass(el,"is-valid","is-invalid");
    }

}

function inputbtn(el){
    if(el.checked){
        setClass(el,"is-invalid","is-valid");
    }else{
        setClass(el,"is-valid","is-invalid");
    }

}

function setClass(el,remove,add){
    var classList = el.className.split(" ");
    for (var i =0;i<classList.length; i++){
        if(classList[i]==remove){
            classList[i]=add;
        }
    }
    var string = "";
    for(var j = 0; j < classList.length; j++){
        string += classList[j] + " ";
    }
    el.className = string;
}
function setTravelbtn(bAllowed){
    var btn = document.getElementById("sendMessageButton");
    if (bAllowed){
        btn.removeAttribute("disabled");
    } else{
        var attrib = document.createAttribute("disabled");
        btn.setAttributeNode(attrib);
    }
}
function count(){
   return getAllTagsWithValueAttribute("class","is-invalid").length;
}


setInterval(function(){
    input(el1);
    input(el2);
    input(el3);
    input(el4);
    inputbtn(el5);
    input(el6);
    if(count()<=0){
        setTravelbtn(true);
    }else{
        setTravelbtn(false);
    }
},100);

