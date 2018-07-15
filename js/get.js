var GET = {};
if(document.location.toString().indexOf('?') !== -1) {
    var query = document.location
        .toString()
        .replace(/^.*?\?/, '')
        .replace(/#.*$/, '')
        .split('&');

    for(var i=0, l=query.length; i<l; i++) {
        var aux = decodeURIComponent(query[i]).split('=');
        GET[aux[0]] = aux[1];
    }
}

function contains(array,string){
    for(var i=0; i < array.length; i++){
        if(array[i]==string){
            return true;
        }
    }
    return false;
}

function GetIndex(array,string){
    for(var i=0; i < array.length; i++){
        if(array[i]==string){
            return i;
        }
    }
    return -1;
}

function travel(id){
    var fill= document.getElementById(id);
    if(allowed.all || contains(allowed.people,GET["ref"])) {
        fill.innerHTML = "Join " + allowed.text[GetIndex(allowed.people,GET["ref"])];
        //fill.href = "http://" + GET["ref"];
        removeLinks();
    }
}

function removeLinks(){
	var link1 = document.getElementById('refLink');
	var link2 = document.getElementById('refLink2');
	var link3 = document.getElementById('refLinkBart');
	var link4 = document.getElementById('refLinkIvan');
	link1.style.display = "none";
	link2.style.display = "none";
	link3.style.display = "none";
	link4.style.display = "none";
	var ivan = document.getElementById("ivan");
	var bart = document.getElementById("bart");
	ivan.onmouseover="";
	bart.onmouseover="";
	ivan.onmouseout="";
	bart.onmouseout="";
	ivan.onclick="";
	bart.onclick="";
}


function travelHome(){
    var trav = document.getElementById("change");
    trav.href = "index.html?ref=" + GET["ref"] + "&lang="+test;
}

function travelHomePeople(){
    var trav = document.getElementById("change");
    trav.href = "people.html?ref=" + GET["ref"]+ "&lang="+test;
}

if(GET["ref"]!=null){
	removeLinks();
}

