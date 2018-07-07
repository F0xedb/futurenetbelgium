function RollOver() {
if (navigator.userAgent.match(/Opera (\S+)/)) {
var operaVersion = parseInt(navigator.userAgent.match(/Opera (\S+)/)[1]);}
if (!document.getElementById||operaVersion <7) return;

var beeldArray=document.getElementsByTagName('img');
var Voorladen=new Array();
var beeldBron=new Array();
var beeldClass=new Array();

for (i=0;i<beeldArray.length;i++){
if (beeldArray[i].className.indexOf('rollover')!=-1){
beeldBron[i]=beeldArray[i].getAttribute('src');
beeldClass[i]=beeldArray[i].className;
Voorladen[i]=new Image();
if (beeldClass[i].match(/rollover (\S+)/)) {
Voorladen[i].src = beeldClass[i].match(/rollover (\S+)/)[1]}

beeldArray[i].setAttribute('bronOver', beeldBron[i]);
beeldArray[i].onmouseover=function(){
this.setAttribute('src',this.className.match(/rollover (\S+)/)[1])}
beeldArray[i].onmouseout=function(){this.setAttribute('src',this.getAttribute('bronOver'))}}}}

RollOver();