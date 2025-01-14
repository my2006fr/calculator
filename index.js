let value = document.getElementById("Expression");
const num1 = 1;
const num2 = 2;
const num3 = 3;
const num4 = 4;
const num5 = 5;
const num6 = 6;
const num7 = 7;
const num8 = 8;
const num9 = 9;
const num0 = 0;
const add = "+";
let operation;
let whole = 0;
let whole1 = 0;
 value.value = 0;
document.getElementById("num1").onclick = function(){
    if(whole == 0){
        whole += num1;
    }else{
        whole = String(whole);
        whole = whole+num1;
    }
 value.value = whole;
}
document.getElementById("num2").onclick = function(){
    if(whole == 0){
        whole += num2;
    }else{
        whole = String(whole);
        whole = whole+num2;
    }
 value.value = whole;
}
document.getElementById("num3").onclick = function(){
    if(whole == 0){
        whole += num3;
    }else{
        whole = String(whole);
        whole = whole+num3;
    }
 value.value = whole;
}
document.getElementById("num4").onclick = function(){
    if(whole == 0){
        whole += num4;
    }else{
        whole = String(whole);
        whole = whole+num4;
    }
 value.value = whole;
}
document.getElementById("num5").onclick = function(){
    if(whole == 0){
        whole += num5;
    }else{
        whole = String(whole);
        whole = whole+num5;
    }
 value.value = whole;
}
document.getElementById("num6").onclick = function(){
    if(whole == 0){
        whole += num6;
    }else{
        whole = String(whole);
        whole = whole+num6;
    }
 value.value = whole;
}
document.getElementById("num7").onclick = function(){
    if(whole == 0){
        whole += num7;
    }else{
        whole = String(whole);
        whole = whole+num7;
    }
 value.value = whole;
}
document.getElementById("num8").onclick = function(){
    if(whole == 0){
        whole += num8;
    }else{
        whole = String(whole);
        whole = whole+num8;
    }
 value.value = whole;
}
document.getElementById("num9").onclick = function(){
    if(whole == 0){
        whole += num9;
    }else{
        whole = String(whole);
        whole = whole+num9;
    }
 value.value = whole;
}
document.getElementById("num0").onclick = function(){
    if(whole == 0){
        whole += num0;
    }else{
        whole = String(whole);
        whole = whole+num0;
    }
 value.value = whole;
}
document.getElementById("reset").onclick = function(){
    whole = 0;
    value.value = 0;
}
document.getElementById("Ans").onclick = function(){
    operation = Boolean(operation);
    if(operation == true){
        
    }
}
document.getElementById("add").onclick = function(){
    if(whole == 0){
        operation = add;
        whole = operation;
    }else{
        whole = String(whole);
        whole = whole+add;
    }
    value.value = whole;
}
document.getElementById("subs").onclick = function(){
    window.alert("It hasn't yet implemented");
}
document.getElementById("mult").onclick = function(){
    window.alert("It hasn't yet implemented");
}
document.getElementById("divid").onclick = function(){
    window.alert("It hasn't yet implemented");
}