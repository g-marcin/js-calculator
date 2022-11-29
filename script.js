// function pageLoadedHandler() {
//     alert("Kalkulator js ver 1.0 by Marcin");    welcome
// }
// window.onload = pageLoadedHandler;

const display = document.getElementById("display");
// display.innerHTML="NaN"

let buttons = document.getElementsByClassName("numBtn");

window.onload=init();
let opp = {
    first: 0,
    second: 0,
    res:0,
    mode:"",
    sign:"",

    clear: function(){
        display.innerHTML="";
    },

    read : function(){
      return parseFloat(display.innerHTML)   
    }

}

function checkChar(word, char){
    for(let i=0; i<word.length; i++){
        if(word[i]===char) return true;   
    }
    return false;
}


function init(){

document.getElementById("main_wrapper").style.background="crimson";
let numbers =document.getElementsByClassName("numBtn");
Array.sort(numbers);
console.log(numbers);
}

function clickBtn(){

    (opp.mode=="result")?opp.clear():null;
    (display.innerHTML=="0")? display.innerHTML =this.innerHTML :display.innerHTML +=this.innerHTML; 
}


function _1(){
    (opp.mode=="result")?opp.clear():null;
    (display.innerHTML=="0")? display.innerHTML ="1":display.innerHTML +="1";
    
}
function _2(){
    (opp.mode=="result")?opp.clear():null;
    (display.innerHTML=="0")? display.innerHTML ="2":display.innerHTML +="2";
    
}
function _3(){
    (opp.mode=="result")?opp.clear():null;
    (display.innerHTML=="0")? display.innerHTML ="3":display.innerHTML +="3";
    
}
function _4(){
    (opp.mode=="result")?opp.clear():null;
    (display.innerHTML=="0")? display.innerHTML ="4":display.innerHTML +="4";
    
}
function _5(){
    (opp.mode=="result")?opp.clear():null;
    (display.innerHTML=="0")? display.innerHTML ="5":display.innerHTML +="5";
   
}
function _6(){
    (opp.mode=="result")?opp.clear():null;
    (display.innerHTML=="0")? display.innerHTML ="6": display.innerHTML +="6";
    
}
function _7(){
    (opp.mode=="result")?opp.clear():null;
    (display.innerHTML=="0")? display.innerHTML ="7":display.innerHTML +="7";
    
}
function _8(){
    (opp.mode=="result")?opp.clear():null;
    (display.innerHTML=="0")? display.innerHTML +="8":display.innerHTML +="8";
    
}
function _9(){
    (opp.mode=="result")?opp.clear():null;
    (display.innerHTML=="0")? display.innerHTML ="9":display.innerHTML +="9";
    
    }
function _0(){
    (opp.mode=="result")?opp.clear():null;
    display.innerHTML +="0";
    
}

function _dot(){
    (display.innerHTML=="")?opp.clear(): (checkChar(display.innerHTML,"."))? null: display.innerHTML+=".";
    opp.mode="typing";
}
function _per(){
    (display.innerHTML=="")?opp.clear():display.innerHTML =  (opp.read()*0.01).toFixed(2);
}

function _AC(){
    display.innerHTML = "";
    opp.res=0;
    opp.first=0;
    opp.second=0;
    opp.mode="";
    opp.sign= "";
}

function _add(){
    opp.first = opp.read();
    opp.mode = "typing";
    opp.sign= "+";
    opp.clear();
}

function _sub(){
    opp.first = opp.read();
    opp.mode = "typing";
    opp.sign= "-";
    opp.clear();
}

function _mul(){
    opp.first = opp.read();
    opp.mode = "typing";
    opp.sign= "*";
    opp.clear();
}

function _div(){
    opp.first = opp.read();
    opp.mode = "typing";
    opp.sign= "/";
    opp.clear();
}

function _res(){
    if(opp.mode=="result"){
        if (opp.sign=="+"){
        opp.res+=opp.second;  
        }
        if (opp.sign=="-"){
            opp.res-=opp.second;  
            }
        if (opp.sign=="*"){
                opp.res*=opp.second;  
            }
        if (opp.sign=="/"){
                opp.res/=opp.second;  
            }
    }

    if(opp.mode=="typing"){
    opp.second = opp.read();
    opp.res = eval(`${opp.first} ${opp.sign} ${opp.second}`);
    opp.mode="result";    
    }

 
    (display.innerHTML!="")? display.innerHTML = opp.res: null;
    
}