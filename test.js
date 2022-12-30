function checkChar(char){
    for(let i=0; i<char.length; i++){
        if(char[i]===".") return true;   
    }
    return false;
}

a="string";
a1="string.";
console.log(checkChar(a));
console.log(checkChar(a1));